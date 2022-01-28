/*
00,01,02,03,04,05,06,07
08,09,10,11,12,13,14,15
16,17,18,19,20,21,22,23
24,25,26,27,28,29,30,31
32,33,34,35,36,37,38,39
40,41,42,43,44,45,46,47
48,49,50,51,52,53,54,55
56,57,58,59,60,61,62,63
*/

let initialBoard = function(){
	return {
		pos: [
2,3,4,5,6,4,3,2,
1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,
9,9,9,9,9,9,9,9,
10,11,12,13,14,12,11,10
		],
		material: {
			black: [8,2,2,2,1,1],
			white: [8,2,2,2,1,1]
		},
		enPassantFile: 0,
		move: 0,
		moveClock: 0,
		//kingPos: {black:60,white:4},
		castle: {
			black: {oo: true,ooo:true},
			white: {oo: true,ooo:true},
		},
		isWhite: true,
		capture: false
	}
}

let copyBoard = function(board){
	return {
		pos: board.pos.map(a => a),
		material: {
			black: board.material.black.map(a => a),
			white: board.material.white.map(a => a)
		},
		enPassantFile: board.enPassantFile,
		move: board.move,
		moveClock: board.moveClock,
		//kingPos: {black:board.kingPos.black,white:board.kingPos.white},
		castle: {
			black: {oo: board.castle.black.oo, ooo: board.castle.black.ooo},
			white: {oo: board.castle.white.oo, ooo: board.castle.white.ooo},
		},
		isWhite: board.isWhite,
		capture: board.capture
	}
}

let copyNext = function(board){
	return {
		pos: board.pos.map(a => a),
		material: {
			black: board.material.black.map(a => a),
			white: board.material.white.map(a => a)
		},
		enPassantFile: 0,
		move: board.move + 1,
		moveClock: board.moveClock,
		//kingPos: {black:board.kingPos.black,white:board.kingPos.white},
		castle: {
			black: {oo: board.castle.black.oo, ooo: board.castle.black.ooo},
			white: {oo: board.castle.white.oo, ooo: board.castle.white.ooo},
		},
		isWhite: !board.isWhite,
		capture: false
	}
}

const code_to_materialIndex = [
null,
0,
1,
2,
3,
4,
5,
null,
null,
0,
1,
2,
3,
4,
5
];

const code_to_symbol = [
null,
"",
"R",
"N",
"B",
"Q",
"K",
null,
null,
"",
"R",
"N",
"B",
"Q",
"K"
]


let createNotation = function(start,end){
	let notation = {};
	let player = start.isWhite;
	let files = ["a","b","c","d","e","f","g","h"];
	if(start.pos[4] === 6 && end.pos[2] === 6){
		notation.text = "O-O-O";
		notation.startFile = "e";
		notation.startRank = 1;
		notation.endFile = "c";
		notation.endRank = 1
	}
	else if(start.pos[60] === 14 && end.pos[58] === 14){
		notation.text = "O-O-O";
		notation.startFile = "e";
		notation.startRank = 8;
		notation.endFile = "c";
		notation.endRank = 8
	}
	else if(start.pos[4] === 6 && end.pos[6] === 6){
		notation.text = "O-O";
		notation.startFile = "e";
		notation.startRank = 1;
		notation.endFile = "g";
		notation.endRank = 1
	}
	else if(start.pos[60] === 14 && end.pos[62] === 14){
		notation.text = "O-O";
		notation.startFile = "e";
		notation.startRank = 8;
		notation.endFile = "g";
		notation.endRank = 8
	}
	else{
		let target = 0;
		let source = 0;
		for(let i=0;i<start.pos.length;i++){
			if(end.pos[i] && end.pos[i] !== start.pos[i]){
				target = i
			}
			else if(
				start.pos[i]
				&& !end.pos[i]
				&& ((start.pos[i] < 8 && player) || (start.pos[i] > 8 && !player))
			){
				source = i
			}
		}
		notation.startFile = files[source % 8];
		notation.text = code_to_symbol[end.pos[target]];
		notation.startRank = Math.floor(source / 8) + 1;
		notation.endFile = files[target % 8];
		notation.endRank = Math.floor(target / 8) + 1
	}
	if(isCheck(end,!player)){
		let opponentMoves = moveGen(end);
		if(opponentMoves.length){
			notation.check = true
		}
		else{
			notation.mate = true
		}
		
	};
	if(
		(start.material.black.reduce((acc,val) => acc + val,0) > end.material.black.reduce((acc,val) => acc + val,0))
		|| (start.material.white.reduce((acc,val) => acc + val,0) > end.material.white.reduce((acc,val) => acc + val,0))
	){
		notation.capture = true
	}
	return notation
}

let finalNotation = function(move,orig,moveList){
	let myMove = createNotation(orig,move);
	let text = myMove.text;
	if(moveList && moveList.length){
		let notList = moveList.map(move => createNotation(orig,move));
		let idenList = notList.filter(move => move.text === myMove.text && move.endFile === myMove.endFile && move.endRank === myMove.endRank);
		if(idenList.length > 1){
			text += myMove.startFile + myMove.startRank
		}
	}
	if(myMove.capture){
		if(myMove.text === ""){
			text = myMove.startFile
		}
		text += "x"
	}
	if(text !== "O-O" && text !== "O-O-O"){
		text += myMove.endFile + myMove.endRank
	}
	if(myMove.check){
		text += "+"
	}
	if(myMove.mate){
		text += "#"
	}
	return text
}

let mobility = function(board,isWhite){
	let count = 0;
	board.pos.forEach((pos,index) => {
		if(
			pos === 0
			|| (isWhite && pos > 8)
			|| (!isWhite && pos < 8)
		){
			return
		}
		else if(pos === 1){//white pawn
			let front = board.pos[index + 8];
			if(!front){
				if(index < 16){//start square
					if(!board.pos[index + 16]){
						count++
					}
				}
				if(index >= 48){//promotions
					count += 4
				}
				else{
					count++
				}
			}
			if(index % 8 !== 0){
				let left = board.pos[index + 8 - 1];
				if(left > 8){
					if(index >= 48){//promotions
						count += 4
					}
					else{
						count++
					}
				}
			}
			if(index % 8 !== 7){
				let right = board.pos[index + 8 + 1];
				if(right > 8){
					if(index >= 48){//promotions
						count += 4
					}
					else{
						count++
					}
				}
			}
		}
		else if(pos === 9){//black pawn
			let front = board.pos[index - 8];
			if(!front){
				if(index > 47){//start square
					if(!board.pos[index - 16]){
						count++
					}
				}
				if(index < 16){//promotions
					count += 4
				}
				else{
					count++
				}
			}
			if(index % 8 !== 0){
				let left = board.pos[index - 8 - 1];
				if(left && left < 8){
					if(index < 16){//promotions
						count += 4
					}
					else{
						count++
					}
				}
			}
			if(index % 8 !== 7){
				let right = board.pos[index - 8 + 1];
				if(right && right < 8){
					if(index < 16){//promotions
						count += 4
					}
					else{
						count++
					}
				}
			}
		}
		else if(pos === 3 || pos === 11){
			let indices;
			if(index % 8 === 0){
				indices = [-15,-6,10,17]
			}
			else if(index % 8 === 1){
				indices = [-17,-15,-6,10,15,17]
			}
			else if(index % 8 === 6){
				indices = [-17,-15,-10,6,15,17]
			}
			else if(index % 8 === 7){
				indices = [-17,-10,6,15]
			}
			else{
				indices = [-17,-15,-10,-6,6,10,15,17]
			}
			indices.forEach(ind => {
				let target = ind + index;
				if(target >= 0 && target < 64){
					let piece = board.pos[target];
					if(!piece){
						count++
					}
					else if(piece < 8 && !isWhite){
						count++
					}
					else if(piece > 8 && isWhite){
						count++
					}
				}
			})
		}
		else{
			let offsets = [];
			if(pos === 6 || pos === 14 || pos === 2 || pos === 10 || pos === 5 || pos === 13){
				offsets.push([0,-1],[-1,0],[1,0],[0,1])
			}
			if(pos === 6 || pos === 14 || pos === 4 || pos === 12 || pos === 5 || pos === 13){
				offsets.push([-1,-1],[1,-1],[-1,1],[1,1])
			}
			offsets.forEach(pair => {
				for(let i = 1;i < 8;i++){
					let target = index + i*pair[0] + i*pair[1]*8;
					if(
						((index % 8) + i*pair[0] < 0)
						|| ((index % 8) + i*pair[0] > 7)
						|| (target < 0)
						|| (target > 63)
						|| (i > 1 && (pos === 6 || pos === 14))
					){
						break
					}
					let piece = board.pos[target];
					if(!piece){//move
						count++
					}
					else{//capture
						if((piece < 8 && isWhite) || (piece > 8 && !isWhite)){
							break
						}
						count++
						break
					}
				}
			})
		}
	});
	return count
}



let rawMoveGen = function(board){
	let list = [];
	if(board.material.white[5] === 0 || board.material.black[5] === 0){
		return list
	}
	if(board.enPassantFile){
		if(board.isWhite){
			if(board.enPassantFile !== 1){
				if(board.pos[board.enPassantFile + 32 - 2] === 1){
					let move = copyNext(board);
					move.pos[board.enPassantFile + 32 - 2 + 9] = 1;
					move.pos[board.enPassantFile + 32 - 2]     = 0;
					move.pos[board.enPassantFile + 32 - 2 + 1] = 0;
					move.moveClock = 0;
					move.material.black[0]--;
					move.capture = true;
					list.push(move)
				}
			}
			if(board.enPassantFile !== 8){
				if(board.pos[board.enPassantFile + 32] === 1){
					let move = copyNext(board);
					move.pos[board.enPassantFile + 32 + 9] = 1;
					move.pos[board.enPassantFile + 32]     = 0;
					move.pos[board.enPassantFile + 32 + 1] = 0;
					move.moveClock = 0;
					move.material.black[0]--;
					move.capture = true;
					list.push(move)
				}
			}
		}
		else{
			if(board.enPassantFile !== 1){
				if(board.pos[board.enPassantFile + 24 - 2] === 9){
					let move = copyNext(board);
					move.pos[board.enPassantFile + 24 - 7] = 9;
					move.pos[board.enPassantFile + 24 - 2]     = 0;
					move.pos[board.enPassantFile + 24 + 1] = 0;
					move.moveClock = 0;
					move.material.white[0]--;
					move.capture = true;
					list.push(move)
				}
			}
			if(board.enPassantFile !== 8){
				if(board.pos[board.enPassantFile + 24] === 9){
					let move = copyNext(board);
					move.pos[board.enPassantFile + 24 - 2 - 7] = 9;
					move.pos[board.enPassantFile + 24]     = 0;
					move.pos[board.enPassantFile + 24 - 2 + 1] = 0;
					move.moveClock = 0;
					move.material.white[0]--;
					move.capture = true;
					list.push(move)
				}
			}
		}
	};
	board.pos.forEach((pos,index) => {
		if(
			pos === 0
			|| (board.isWhite && pos > 8)
			|| (!board.isWhite && pos < 8)
		){
			return
		}
		else if(pos === 1){//white pawn
			let front = board.pos[index + 8];
			if(!front){
				if(index < 16){//start square
					if(!board.pos[index + 16]){
						let move = copyNext(board);
						move.pos[index + 16] = 1;
						move.pos[index] = 0;
						move.moveClock = 0;
						move.enPassantFile = index - 7;
						list.push(move)
					}
				}
				let move = copyNext(board);
				move.pos[index + 8] = 1;
				move.pos[index] = 0;
				move.moveClock = 0;
				if(index >= 48){//promotions
					let queenPromotion = copyBoard(move);
					let rookPromotion = copyBoard(move);
					let bishopPromotion = copyBoard(move);
					let knightPromotion = copyBoard(move);
					queenPromotion.pos[index + 8] = 5;
					queenPromotion.material.white[4]++;
					rookPromotion.pos[index + 8] = 2;
					rookPromotion.material.white[1]++;
					bishopPromotion.pos[index + 8] = 4;
					bishopPromotion.material.white[3]++;
					knightPromotion.pos[index + 8] = 3;
					knightPromotion.material.white[2]++;
					list.push(queenPromotion);
					list.push(rookPromotion);
					list.push(bishopPromotion);
					list.push(knightPromotion)
				}
				else{
					list.push(move)
				}
			}
			if(index % 8 !== 0){
				let left = board.pos[index + 8 - 1];
				if(left > 8){
					let move = copyNext(board);
					move.pos[index + 8 - 1] = 1;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[code_to_materialIndex[left]]--;
					move.capture = true;
					if(index >= 48){//promotions
						let queenPromotion = copyBoard(move);
						let rookPromotion = copyBoard(move);
						let bishopPromotion = copyBoard(move);
						let knightPromotion = copyBoard(move);
						queenPromotion.pos[index + 8 - 1] = 5;
						queenPromotion.material.white[4]++;
						rookPromotion.pos[index + 8 - 1] = 2;
						rookPromotion.material.white[1]++;
						bishopPromotion.pos[index + 8 - 1] = 4;
						bishopPromotion.material.white[3]++;
						knightPromotion.pos[index + 8 - 1] = 3;
						knightPromotion.material.white[2]++;
						list.push(queenPromotion);
						list.push(rookPromotion);
						list.push(bishopPromotion);
						list.push(knightPromotion)
					}
					else{
						list.push(move)
					}
				}
			}
			if(index % 8 !== 7){
				let right = board.pos[index + 8 + 1];
				if(right > 8){
					let move = copyNext(board);
					move.pos[index + 8 + 1] = 1;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[code_to_materialIndex[right]]--;
					move.capture = true;
					if(index >= 48){//promotions
						let queenPromotion = copyBoard(move);
						let rookPromotion = copyBoard(move);
						let bishopPromotion = copyBoard(move);
						let knightPromotion = copyBoard(move);
						queenPromotion.pos[index + 8 + 1] = 5;
						queenPromotion.material.white[4]++;
						rookPromotion.pos[index + 8 + 1] = 2;
						rookPromotion.material.white[1]++;
						bishopPromotion.pos[index + 8 + 1] = 4;
						bishopPromotion.material.white[3]++;
						knightPromotion.pos[index + 8 + 1] = 3;
						knightPromotion.material.white[2]++;
						list.push(queenPromotion);
						list.push(rookPromotion);
						list.push(bishopPromotion);
						list.push(knightPromotion)
					}
					else{
						list.push(move)
					}
				}
			}
		}
		else if(pos === 9){//black pawn
			let front = board.pos[index - 8];
			if(!front){
				if(index > 47){//start square
					if(!board.pos[index - 16]){
						let move = copyNext(board);
						move.pos[index - 16] = 9;
						move.pos[index] = 0;
						move.moveClock = 0;
						move.enPassantFile = (index % 8) + 1;
						list.push(move)
					}
				}
				let move = copyNext(board);
				move.pos[index - 8] = 9;
				move.pos[index] = 0;
				move.moveClock = 0;
				if(index < 16){//promotions
					let queenPromotion = copyBoard(move);
					let rookPromotion = copyBoard(move);
					let bishopPromotion = copyBoard(move);
					let knightPromotion = copyBoard(move);
					queenPromotion.pos[index - 8] = 13;
					queenPromotion.material.black[4]++;
					rookPromotion.pos[index - 8] = 10;
					rookPromotion.material.black[1]++;
					bishopPromotion.pos[index - 8] = 12;
					bishopPromotion.material.black[3]++;
					knightPromotion.pos[index - 8] = 11;
					knightPromotion.material.black[2]++;
					list.push(queenPromotion);
					list.push(rookPromotion);
					list.push(bishopPromotion);
					list.push(knightPromotion)
				}
				else{
					list.push(move)
				}
			}
			if(index % 8 !== 0){
				let left = board.pos[index - 8 - 1];
				if(left && left < 8){
					let move = copyNext(board);
					move.pos[index - 8 - 1] = 9;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.white[code_to_materialIndex[left]]--;
					move.capture = true;
					if(index < 16){//promotions
						let queenPromotion = copyBoard(move);
						let rookPromotion = copyBoard(move);
						let bishopPromotion = copyBoard(move);
						let knightPromotion = copyBoard(move);
						queenPromotion.pos[index - 9] = 13;
						queenPromotion.material.black[4]++;
						rookPromotion.pos[index - 9] = 10;
						rookPromotion.material.black[1]++;
						bishopPromotion.pos[index - 9] = 12;
						bishopPromotion.material.black[3]++;
						knightPromotion.pos[index - 9] = 11;
						knightPromotion.material.black[2]++;
						list.push(queenPromotion);
						list.push(rookPromotion);
						list.push(bishopPromotion);
						list.push(knightPromotion)
					}
					else{
						list.push(move)
					}
				}
			}
			if(index % 8 !== 7){
				let right = board.pos[index - 8 + 1];
				if(right && right < 8){
					let move = copyNext(board);
					move.pos[index - 8 + 1] = 9;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.white[code_to_materialIndex[right]]--;
					move.capture = true;
					if(index < 16){//promotions
						let queenPromotion = copyBoard(move);
						let rookPromotion = copyBoard(move);
						let bishopPromotion = copyBoard(move);
						let knightPromotion = copyBoard(move);
						queenPromotion.pos[index - 7] = 13;
						queenPromotion.material.black[4]++;
						rookPromotion.pos[index - 7] = 10;
						rookPromotion.material.black[1]++;
						bishopPromotion.pos[index - 7] = 12;
						bishopPromotion.material.black[3]++;
						knightPromotion.pos[index - 7] = 11;
						knightPromotion.material.black[2]++;
						list.push(queenPromotion);
						list.push(rookPromotion);
						list.push(bishopPromotion);
						list.push(knightPromotion)
					}
					else{
						list.push(move)
					}
				}
			}
		}
		else if(pos === 3 || pos === 11){
			let indices;
			if(index % 8 === 0){
				indices = [-15,-6,10,17]
			}
			else if(index % 8 === 1){
				indices = [-17,-15,-6,10,15,17]
			}
			else if(index % 8 === 6){
				indices = [-17,-15,-10,6,15,17]
			}
			else if(index % 8 === 7){
				indices = [-17,-10,6,15]
			}
			else{
				indices = [-17,-15,-10,-6,6,10,15,17]
			}
			indices.forEach(ind => {
				let target = ind + index;
				if(target >= 0 && target < 64){
					let piece = board.pos[target];
					if(!piece){
						let move = copyNext(board);
						move.pos[target] = pos;
						move.pos[index] = 0;
						move.moveClock++;
						list.push(move)
					}
					else if(piece < 8 && !board.isWhite){
						let move = copyNext(board);
						let material = code_to_materialIndex[move.pos[target]];
						move.pos[target] = pos;
						move.pos[index] = 0;
						move.moveClock = 0;
						move.material.white[material]--;
						move.capture = true;
						list.push(move)
					}
					else if(piece > 8 && board.isWhite){
						let move = copyNext(board);
						let material = code_to_materialIndex[move.pos[target]];
						move.pos[target] = pos;
						move.pos[index] = 0;
						move.moveClock = 0;
						move.material.black[material]--;
						move.capture = true;
						list.push(move)
					}
				}
			})
		}
		else{
			let offsets = [];
			if(pos === 6 || pos === 14 || pos === 2 || pos === 10 || pos === 5 || pos === 13){
				offsets.push([0,-1],[-1,0],[1,0],[0,1])
			}
			if(pos === 6 || pos === 14 || pos === 4 || pos === 12 || pos === 5 || pos === 13){
				offsets.push([-1,-1],[1,-1],[-1,1],[1,1])
			}
			offsets.forEach(pair => {
				for(let i = 1;i < 8;i++){
					let target = index + i*pair[0] + i*pair[1]*8;
					if(
						((index % 8) + i*pair[0] < 0)
						|| ((index % 8) + i*pair[0] > 7)
						|| (target < 0)
						|| (target > 63)
						|| (i > 1 && (pos === 6 || pos === 14))
					){
						break
					}
					let piece = board.pos[target];
					if(!piece){//move
						let move = copyNext(board);
						move.pos[target] = pos;
						move.pos[index] = 0;
						move.moveClock++;
						if(pos === 6){
							//move.kingPos.white = target;
							move.castle.white.ooo = false;
							move.castle.white.oo = false
						}
						else if(pos === 14){
							//move.kingPos.black = target;
							move.castle.black.ooo = false;
							move.castle.black.oo = false
						}
						else if(index === 0){
							move.castle.white.ooo = false
						}
						else if(index === 7){
							move.castle.white.oo = false
						}
						else if(index === 57){
							move.castle.black.ooo = false
						}
						else if(index === 63){
							move.castle.black.oo = false
						}
						list.push(move)
					}
					else{//capture
						if((piece < 8 && board.isWhite) || (piece > 8 && !board.isWhite)){
							break
						}
						let material = code_to_materialIndex[piece];
						let move = copyNext(board);
						move.pos[target] = pos;
						move.pos[index] = 0;
						move.oveClock = 0;
						if(board.isWhite){
							move.material.black[material]--
						}
						else{
							move.material.white[material]--
						}
						if(pos === 6){
							//move.kingPos.white = target;
							move.castle.white.ooo = false;
							move.castle.white.oo = false
						}
						else if(pos === 14){
							//move.kingPos.black = target;
							move.castle.black.ooo = false;
							move.castle.black.oo = false
						}
						else if(index === 0){
							move.castle.white.ooo = false
						}
						else if(index === 7){
							move.castle.white.oo = false
						}
						else if(index === 57){
							move.castle.black.ooo = false
						}
						else if(index === 63){
							move.castle.black.oo = false
						}
						move.capture = true;
						list.push(move);
						break
					}
				}
			})
		}
	});
	return list
}

let isCheck = function(board,isWhite){
	let virtualBoard = copyBoard(board);
	virtualBoard.isWhite = !isWhite;
	let rawAntiMoves = rawMoveGen(virtualBoard);
	return rawAntiMoves.some(hypot => hypot.material.black[5] === 0 || hypot.material.white[5] === 0)
}

let moveGen = function(board){
	let list = rawMoveGen(board).filter(move => !isCheck(move,board.isWhite));
	if(board.isWhite){
		if(board.castle.white.oo && board.pos[5] === 0 && board.pos[6] === 0){
			let move = copyNext(board);
			move.pos[5] = 6;
			move.pos[4] = 0;
			if(!isCheck(move,true)){
				move.pos[6] = 6;
				move.pos[5] = 2;
				move.pos[7] = 0;
				if(!isCheck(move,true)){
					move.castle.white.oo = false;
					move.castle.white.ooo = false;
					list.push(move)
				}
			}
		}
		if(board.castle.white.ooo && board.pos[3] === 0 && board.pos[2] === 0 && board.pos[1] === 0){
			let move = copyNext(board);
			move.pos[3] = 6;
			move.pos[4] = 0;
			if(!isCheck(move,true)){
				move.pos[2] = 6;
				move.pos[3] = 2;
				move.pos[0] = 0;
				if(!isCheck(move,true)){
					move.castle.white.oo = false;
					move.castle.white.ooo = false;
					list.push(move)
				}
			}
		}
	}
	else{
		if(board.castle.black.oo && board.pos[61] === 0 && board.pos[62] === 0){
			let move = copyNext(board);
			move.pos[61] = 14;
			move.pos[60] = 0;
			if(!isCheck(move,false)){
				move.pos[62] = 14;
				move.pos[61] = 10;
				move.pos[63] = 0;
				if(!isCheck(move,false)){
					move.castle.black.oo = false;
					move.castle.black.ooo = false;
					list.push(move)
				}
			}
		}
		if(board.castle.black.ooo && board.pos[57] === 0 && board.pos[58] === 0 && board.pos[59] === 0){
			let move = copyNext(board);
			move.pos[59] = 14;
			move.pos[60] = 0;
			if(!isCheck(move,false)){
				move.pos[58] = 14;
				move.pos[59] = 10;
				move.pos[56] = 0;
				if(!isCheck(move,false)){
					move.castle.black.oo = false;
					move.castle.black.ooo = false;
					list.push(move)
				}
			}
		}
	}
	return list
}

let evalMoveGen = function(board,level){
	if(level < 2){
		let list = moveGen(board);
		list.forEach(move => {
			if(isCheck(move,move.isWhite)){
				move.capture = true
			}
		})
		return list;
	}
	let list = rawMoveGen(board);
	if(board.isWhite){
		if(board.castle.white.oo && board.pos[5] === 0 && board.pos[6] === 0){
			let move = copyNext(board);
			move.pos[5] = 6;
			move.pos[4] = 0;
				move.pos[6] = 6;
				move.pos[5] = 2;
				move.pos[7] = 0;
					list.push(move)
		}
		if(board.castle.white.ooo && board.pos[3] === 0 && board.pos[2] === 0 && board.pos[1] === 0){
			let move = copyNext(board);
			move.pos[3] = 6;
			move.pos[4] = 0;
				move.pos[2] = 6;
				move.pos[3] = 2;
				move.pos[0] = 0;
					list.push(move)
		}
	}
	else{
		if(board.castle.black.oo && board.pos[61] === 0 && board.pos[62] === 0){
			let move = copyNext(board);
			move.pos[61] = 14;
			move.pos[60] = 0;
				move.pos[62] = 14;
				move.pos[61] = 10;
				move.pos[63] = 0;
					list.push(move)
		}
		if(board.castle.black.ooo && board.pos[57] === 0 && board.pos[58] === 0 && board.pos[59] === 0){
			let move = copyNext(board);
			move.pos[59] = 14;
			move.pos[60] = 0;
				move.pos[58] = 14;
				move.pos[59] = 10;
				move.pos[56] = 0;
					list.push(move)
		}
	}
	return list
}

/*
00,01,02,03,04,05,06,07
08,09,10,11,12,13,14,15
16,17,18,19,20,21,22,23
24,25,26,27,28,29,30,31
32,33,34,35,36,37,38,39
40,41,42,43,44,45,46,47
48,49,50,51,52,53,54,55
56,57,58,59,60,61,62,63
*/

const centralValue = [
0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,0,
0,1,2,2,2,2,1,0,
0,1,2,3,3,2,1,0,
0,1,2,3,3,2,1,0,
0,1,2,2,2,2,1,0,
0,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0
];

const white_pawns = [
0   ,0   ,0   ,0   ,0   ,0   ,0   ,0,
0.9 ,0.95,1.05,1.1 ,1.1 ,1.05,0.95,0.9,
0.91,0.96,1.06,1.15,1.15,1.06,0.96,0.91,
0.92,0.97,1.10,1.20,1.20,1.10,0.97,0.92,
0.97,1.03,1.17,1.27,1.27,1.17,1.03,0.97,
1.06,1.12,1.25,1.40,1.40,1.25,1.12,1.06,
3   ,3   ,3   ,3   ,3   ,3   ,3   ,3,
0   ,0   ,0   ,0   ,0   ,0   ,0   ,0
];

const black_pawns = [
0   ,0   ,0   ,0   ,0   ,0   ,0   ,0,
3   ,3   ,3   ,3   ,3   ,3   ,3   ,3,
1.06,1.12,1.25,1.40,1.40,1.25,1.12,1.06,
0.97,1.03,1.17,1.27,1.27,1.17,1.03,0.97,
0.92,0.97,1.10,1.20,1.20,1.10,0.97,0.92,
0.91,0.96,1.06,1.15,1.15,1.06,0.96,0.91,
0.9 ,0.95,1.05,1.1 ,1.1 ,1.05,0.95,0.9,
0   ,0   ,0   ,0   ,0   ,0   ,0   ,0
];


let scoreEval = function(board){
	if(board.material.white[5] === 0){
		return -10000
	}
	if(board.material.black[5] === 0){
		return 10000
	}
	if(board.material.white[0] + board.material.white[0] === 0){
		if([
[[0,0,0,0,0,1],[0,0,0,0,0,1]],
[[0,0,1,0,0,1],[0,0,0,0,0,1]],
[[0,0,1,0,0,1],[0,0,1,0,0,1]],
[[0,0,0,0,0,1],[0,0,1,0,0,1]],
[[0,0,0,0,0,1],[0,0,2,0,0,1]],
[[0,0,2,0,0,1],[0,0,0,0,0,1]],
[[0,0,2,0,0,1],[0,0,1,0,0,1]],
[[0,0,1,0,0,1],[0,0,2,0,0,1]],
[[0,0,1,0,0,1],[0,0,0,1,0,1]],
[[0,0,0,1,0,1],[0,0,1,0,0,1]],
[[0,0,0,1,0,1],[0,0,0,0,0,1]],
[[0,0,0,0,0,1],[0,0,0,1,0,1]]
		].some(pair => board.material.white.every((a,i) => a === pair[0][i]) && board.material.black.every((a,i) => a === pair[1][i])
		)){
			return 0
		}
	}
	let pawnFileCount_white = new Array(8).fill(0);
	let pawnFileCount_black = new Array(8).fill(0);
	let pawn_adv = 0;
	for(let i=8;i<56;i++){
		if(board.pos[i] === 1){
			pawnFileCount_white[i % 8]++;
			pawn_adv += white_pawns[i];
		}
		else if(board.pos[i] === 9){
			pawnFileCount_black[i % 8]++;
			pawn_adv -= black_pawns[i]
		}
	}
	let pawns = board.material.white[0] - board.material.black[0];
	let material_white = board.material.white[1]*5
		+ board.material.white[2]*3
		+ board.material.white[3]*3
		+ board.material.white[4]*10;
	let material_black = board.material.black[1]*5
		+ board.material.black[2]*3
		+ board.material.black[3]*3
		+ board.material.black[4]*10;
	let trade_bonus = 0;
	if(material_white > material_black + 1){
		trade_bonus = 2/(material_black + 1)
	}
	else if(material_black > material_white + 1){
		trade_bonus = -2/(material_white + 1)
	}
	if(material_white + material_black <= 15){
		for(let i=0;i<64;i++){
			if(board.pos[i] === 6){
				trade_bonus += centralValue[i]
			}
			else if(board.pos[i] === 14){
				trade_bonus -= centralValue[i]
			}
		}
	}
	return material_white - material_black + trade_bonus
		//+ pawns
		+ pawn_adv
		+ 0.1 * (mobility(board,true) - mobility(board,false))
		+ 0.1 * (
			(board.pos[27] === 1 + board.pos[28] === 1 + board.pos[35] === 1 + board.pos[36] === 1)
			- (board.pos[27] === 9 + board.pos[28] === 9 + board.pos[35] === 9 + board.pos[36] === 9)
		)
		- 0.2 * (
			pawnFileCount_white.reduce((acc,val) => {if(val){return acc + val - 1}else{return acc}},0)
			- pawnFileCount_black.reduce((acc,val) => {if(val){return acc + val - 1}else{return acc}},0)
		)
}
/*
let score_old = function(board,depth){
	if(board.material.white[5] === 0){
		return - 10000
	}
	if(board.material.black[5] === 0){
		return 10000
	}
	if(depth === 0){
		return scoreEval(board)
	}
	if(board.isWhite){
		let moves = evalMoveGen(board);
		if(moves.length === 0){
			if(isCheck(board,true)){
				return -10000
			}
			else{
				return 0
			}
		}
		for(let i=0;i<moves.length;i++){
			let deeper = score(moves[i],Math.min(1,depth - 1));
			if(deeper > 1000){
				return deeper
			}
			moves[i].depth1 = deeper
		}
		if(depth > 1){
			moves.sort((b,a) => a.depth1 - b.depth1);
			let lim = 2;
			let best = moves[0].depth1;
			if(depth > 3){
				if(!moves[0].capture){
					moves[0].depth1 = score(moves[0],depth - 2);
				}
				if(!moves[1].capture){
					moves[1].depth1 = score(moves[0],depth - 2);
				}
			}
			for(let i=2;i<moves.length;i++){
				if(moves[i].capture){//if((best - moves[i].depth1 < 5) && i < lim){
					moves[i].depth1 = score(moves[i],depth - 1)
				}
			}
		}
		return Math.max(...moves.map(a => a.depth1));
	}
	else{
		let moves = evalMoveGen(board);
		if(moves.length === 0){
			if(isCheck(board,false)){
				return 10000
			}
			else{
				return 0
			}
		}
		for(let i=0;i<moves.length;i++){
			let deeper = score(moves[i],Math.min(1,depth - 1));
			if(deeper < -1000){
				return deeper
			}
			moves[i].depth1 = deeper
		}
		if(depth > 1){
			moves.sort((a,b) => a.depth1 - b.depth1);
			let lim = 2;
			let best = moves[0].depth1;
			if(depth > 3){
				if(!moves[0].capture){
					moves[0].depth1 = score(moves[0],depth - 2);
				}
				if(!moves[1].capture){
					moves[1].depth1 = score(moves[0],depth - 2);
				}
			}
			for(let i=2;i<moves.length;i++){
				if(moves[i].capture){///if((best - moves[i].depth1 > -5) && i < lim){
					moves[i].depth1 = score(moves[i],depth - 1)
				}
			}
		}
		return Math.min(...moves.map(a => a.depth1));
	}
}*/

let decay = 1.3;

let listScorer_white = function(moves,budget,level){
	if(moves.length === 1){
		moves[0].spent = budget;
		moves[0].depth1 = score(moves[0],budget,level+1)
		return
	}
	let lesser = Math.ceil(budget/10);
	if(lesser > 20){
		listScorer_white(moves,lesser,level)
	}
	if(moves[0].spent){
		if(moves[0].depth1 > 1000 || moves[0].depth1 < -1000){
			return
		}
		let weights = new Array(moves.length).fill(0.01);
		let base = 1;
		let prev = moves[0].depth1;
		weights[0] = 1;
		if(moves[0].capture){
			weights[0] += 1
		}
		for(let i=1;i<moves.length;i++){
			if(moves[i].capture){
				weights[i] += 1
			}
			let diff = prev - moves[i].depth1;
			base = base/Math.pow(decay,diff);
			weights[i] += base
		};
		let total = weights.reduce((acc,val) => acc + val,0);
		for(let i=0;i<moves.length;i++){
			let aloc = Math.round(budget * weights[i]/total);
			if(aloc > 2*moves[i].spent){
				moves[i].spent = aloc;
				moves[i].depth1 = score(moves[i],aloc,level+1)
			}
		}
		moves.sort((b,a) => a.depth1 - b.depth1);
	}
	else{
		for(let i=0;i<moves.length;i++){
			moves[i].depth1 = scoreEval(moves[i]);
			moves[i].spent = 1
		};
		moves.sort((b,a) => a.depth1 - b.depth1);
	}
}

let listScorer_black = function(moves,budget,level){
	if(moves.length === 1){
		moves[0].spent = budget;
		moves[0].depth1 = score(moves[0],budget,level+1)
		return
	}
	let lesser = Math.ceil(budget/10);
	if(lesser > 20){
		listScorer_black(moves,lesser,level)
	}
	if(moves[0].spent){
		if(moves[0].depth1 > 1000 || moves[0].depth1 < -1000){
			return
		}
		let weights = new Array(moves.length).fill(0.01);
		let base = 1;
		let prev = moves[0].depth1;
		weights[0] = 1;
		if(moves[0].capture){
			weights[0] += 1
		}
		for(let i=1;i<moves.length;i++){
			if(moves[i].capture){
				weights[i] += 1
			}
			let diff = moves[i].depth1 - prev;
			base = base/Math.pow(decay,diff);
			weights[i] += base
		};
		let total = weights.reduce((acc,val) => acc + val,0);
		for(let i=0;i<moves.length;i++){
			let aloc = Math.round(budget * weights[i]/total);
			if(aloc > 2*moves[i].spent){
				moves[i].spent = aloc;
				moves[i].depth1 = score(moves[i],aloc,level+1)
			}
		}
		moves.sort((a,b) => a.depth1 - b.depth1)
	}
	else{
		for(let i=0;i<moves.length;i++){
			moves[i].depth1 = scoreEval(moves[i]);
			moves[i].spent = 1
		}
		moves.sort((a,b) => a.depth1 - b.depth1)
	}
}

let nolus = new Array(20).fill(0);

let score = function(board,budget,level){
	nolus[level]++;
	if(board.material.white[5] === 0){
		return - 10000
	}
	if(board.material.black[5] === 0){
		return 10000
	}
	if(budget < 10){
		return scoreEval(board)
	}
	if(board.isWhite){
		let moves = evalMoveGen(board,level);
		if(moves.length === 0){
			if(isCheck(board,true)){
				return -10000
			}
			else{
				return 0
			}
		}
		listScorer_white(moves,budget,level)
		return Math.max(...moves.map(a => a.depth1))
	}
	else{
		let moves = evalMoveGen(board,level);
		if(moves.length === 0){
			if(isCheck(board,false)){
				return 10000
			}
			else{
				return 0
			}
		}
		listScorer_black(moves,budget,level)
		return Math.min(...moves.map(a => a.depth1))
	}
}


function notationDec(notation,board){
	//let normal_proto = notation.replace(/(#|\?|\?\?|!!|!|!\?|\?!|\+)$/,"");
	if(notation === "O-O"){
		if(board.isWhite){
			let move = copyNext(board);
			move.pos[5] = 6;
			move.pos[4] = 0;
			move.pos[6] = 6;
			move.pos[5] = 2;
			move.pos[7] = 0;
			return move
		}
		else{
			let move = copyNext(board);
			move.pos[61] = 14;
			move.pos[60] = 0;
			move.pos[62] = 14;
			move.pos[61] = 10;
			move.pos[63] = 0;
			return move
		}
	}
	else if(notation === "O-O-O"){
		if(board.isWhite){
			let move = copyNext(board);
			move.pos[3] = 6;
			move.pos[4] = 0;
			move.pos[2] = 6;
			move.pos[3] = 2;
			move.pos[0] = 0;
			return move
		}
		else{
			let move = copyNext(board);
			move.pos[59] = 14;
			move.pos[60] = 0;
			move.pos[58] = 14;
			move.pos[59] = 10;
			move.pos[56] = 0;
			return move
		}
	}
	let validMoves = moveGen(hohChess.board);
	for(let i=0;i<validMoves.length;i++){
		let notat = finalNotation(validMoves[i],board,validMoves);
		if(notat === notation){
			return validMoves[i]
		}
	}
	return null
}
