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
		if(pos === 0){
			return
		}
		else if(pos === 1 && board.isWhite){
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
					bishopPromotion.pos[index + 8] = 3;
					bishopPromotion.material.white[3]++;
					knightPromotion.pos[index + 8] = 2;
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
						bishopPromotion.pos[index + 8 - 1] = 3;
						bishopPromotion.material.white[3]++;
						knightPromotion.pos[index + 8 - 1] = 2;
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
						bishopPromotion.pos[index + 8 + 1] = 3;
						bishopPromotion.material.white[3]++;
						knightPromotion.pos[index + 8 + 1] = 2;
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
				}
				else if(index - 6 === board.enPassantFile){
				}
			}
		}
		else if(pos === 9 && !board.isWhite){
		}
		else if(pos === 6 && board.isWhite){
		}
		else if(pos === 14 && !board.isWhite){
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
			for(let i = 1;i < 8;i++){
				if(!(index + i % 8)){
					break
				}
				let piece = board.pos[index + i];
				if(!piece){
					let move = copyNext(board);
					move.pos[index + i] = pos;
					move.pos[index] = 0;
					move.moveClock++;
					if(board.isWhite){
						if(index === 0){
							move.white.ooo = false
						}
						else if(index === 7){
							move.white.oo = false
						}
					}
					else{
						if(index === 57){
							move.black.ooo = false
						}
						else if(index === 63){
							move.black.oo = false
						}
					}
					list.push(move)
				}
				else{
					if((piece < 8 && board.isWhite) || (piece > 8 && !board.isWhite)){
						break
					}
					let material = code_to_materialIndex[piece];
					let move = copyNext(board);
					move.pos[index + i] = pos;
					move.pos[index] = 0;
					move.moveClock = 0;
					if(board.isWhite){
						if(index === 0){
							move.white.ooo = false
						}
						else if(index === 7){
							move.white.oo = false
						}
						move.material.black[material]--
					}
					else{
						if(index === 57){
							move.black.ooo = false
						}
						else if(index === 63){
							move.black.oo = false
						}
						move.material.white[material]--
					}
					list.push(move);
					break
				}
			}
			for(let i = 1;i < 8;i++){
				if(!(index - i + 1 % 8)){
					break
				}
				let piece = board.pos[index - i];
				if(!piece){
					let move = copyNext(board);
					move.pos[index - i] = pos;
					move.pos[index] = 0;
					move.moveClock++;
					if(board.isWhite){
						if(pos === 0){
							move.white.ooo = false
						}
						else if(pos === 7){
							move.white.oo = false
						}
					}
					else{
						if(pos === 57){
							move.black.ooo = false
						}
						else if(pos === 63){
							move.black.oo = false
						}
					}
					list.push(move)
				}
				else{
					if((piece < 8 && board.isWhite) || (piece > 8 && !board.isWhite)){
						break
					}
					let material = code_to_materialIndex[piece];
					let move = copyNext(board);
					move.pos[index - i] = pos;
					move.pos[index] = 0;
					move.moveClock = 0;
					if(board.isWhite){
						if(pos === 0){
							move.white.ooo = false
						}
						else if(pos === 7){
							move.white.oo = false
						}
						move.material.black[material]--
					}
					else{
						if(pos === 57){
							move.black.ooo = false
						}
						else if(pos === 63){
							move.black.oo = false
						}
						move.material.white[material]--
					}
					list.push(move);
					break
				}
			}
		}
	})
	return list
}

let isCheck = function(board,isWhite){
	if(isWhite){
	}
	else{
	}
}

let moveGen = function(board){
	return rawMoveGen(board).filter(move => isCheck(move,board.isWhite))
}


let eval = function(board){
}
