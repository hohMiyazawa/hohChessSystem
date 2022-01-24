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
		kingPos: {black:60,white:4},
		castle: {
			black: {oo: true,ooo:true},
			white: {oo: true,ooo:true},
		},
		isWhite: true
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
		kingPos: {black:board.kingPos.black,white:board.kingPos.white},
		castle: {
			black: {oo: board.castle.black.oo, ooo: board.castle.black.ooo},
			white: {oo: board.castle.white.oo, ooo: board.castle.white.ooo},
		},
		isWhite: board.isWhite
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
		kingPos: {black:board.kingPos.black,white:board.kingPos.white},
		castle: {
			black: {oo: board.castle.black.oo, ooo: board.castle.black.ooo},
			white: {oo: board.castle.white.oo, ooo: board.castle.white.ooo},
		},
		isWhite: !board.isWhite
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
]

let rawMoveGen = function(board){
	let list = [];
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
			if(board.enPassantFile && index < 16){
				if(index - 8 === board.enPassantFile){
					let move = copyNext(board);
					move.pos[index + 8 - 1] = 1;
					move.pos[index - 1] = 0;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[0]--;
					list.push(move)
				}
				else if(index - 6 === board.enPassantFile){
					let move = copyNext(board);
					move.pos[index + 8 + 1] = 1;
					move.pos[index + 1] = 0;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[0]--;
					list.push(move)
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
				if(left < 8){
					let move = copyNext(board);
					move.pos[index - 8 - 1] = 1;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[code_to_materialIndex[left]]--;
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
				if(right < 8){
					let move = copyNext(board);
					move.pos[index + 8 + 1] = 1;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.black[code_to_materialIndex[right]]--;
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
			if(board.enPassantFile && index > 47){
				if(((index % 8) + 2) === board.enPassantFile){
					let move = copyNext(board);
					move.pos[index - 8 + 1] = 9;
					move.pos[index + 1] = 0;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.white[0]--;
					list.push(move)
				}
				else if((index % 8) === board.enPassantFile){
					let move = copyNext(board);
					move.pos[index - 8 - 1] = 9;
					move.pos[index - 1] = 0;
					move.pos[index] = 0;
					move.moveClock = 0;
					move.material.white[0]--;
					list.push(move)
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
					else{
					}
				}
			})
		}
		else{
			let offsets = [];
			if(pos === 6 || pos === 14 || pos === 2 || pos === 10 || pos === 5 || pos === 13){
				offsets.push([0,-1],[-1,0],[1,0],[0,1])
			}
			if(pos === 6 || pos === 14 || pos === 3 || pos === 11 || pos === 5 || pos === 13){
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
							move.kingPos.white = target;
							move.castle.white.ooo = false;
							move.castle.white.oo = false
						}
						else if(pos === 14){
							move.kingPos.black = target;
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
							move.kingPos.white = target;
							move.castle.white.ooo = false;
							move.castle.white.oo = false
						}
						else if(pos === 14){
							move.kingPos.black = target;
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
	if(isWhite){
		let index = board.kingPos.white;
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
				if(piece === 11){
					return true
				}
			}
		})
	}
	else{
	}
}

let moveGen = function(board){
	return rawMoveGen(board).filter(move => isCheck(move,board.isWhite))
}


let eval = function(board){
}
