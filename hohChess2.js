let hohChess = {
	board: null,
	options: null,
	history: [],
	init: function(DOMlocation,options){
		let board = document.createElement("div");
		board.classList.add("hohBoard");
		DOMlocation.appendChild(board);
		let backBoard = document.createElement("img");
		backBoard.classList.add("hohBackBoard");
		backBoard.src = "board.png";
		backBoard.width = 512;
		backBoard.height = 512;
		board.appendChild(backBoard);

		hohChess.pieceContainer = document.createElement("div");
		hohChess.pieceContainer.classList.add("hohPieceContainer");
		board.appendChild(hohChess.pieceContainer);

		let squareContainer = document.createElement("div");
		squareContainer.classList.add("hohSquareContainer");
		board.appendChild(squareContainer);

		hohChess.moveList = document.createElement("div");
		hohChess.moveList.classList.add("hohMoveList");
		board.appendChild(hohChess.moveList);

		let initialRender = function(){
			Array.from(squareContainer.children).forEach(child => child.remove());
			for(let i=0;i<64;i++){
				let ele = document.createElement("div");
				ele.classList.add("hohSquare");
				if(options.flip){
					ele.style.left = 448 - (i % 8) * 64 + "px";
					ele.style.top  = Math.floor(i / 8) * 64 + "px";
				}
				else{
					ele.style.left = (i % 8) * 64 + "px";
					ele.style.top  = 448 - Math.floor(i / 8) * 64 + "px";
				}
				let currIndex = i + 0;
				ele.onclick = function(){
					if(ele.classList.contains("selected")){
						ele.classList.remove("selected");
						globalSelected = -1
					}
					else{
						if(globalSelected === -1){
							let piece = hohChess.board.pos[currIndex];
							if(piece && ((piece < 8 && hohChess.board.isWhite) || (piece > 8 && !hohChess.board.isWhite))){
								ele.classList.add("selected");
								globalSelected = currIndex
							}
						}
						else{
							let isValid = hohChess.doMove(globalSelected,currIndex);
							if(isValid){
								squareContainer.querySelector(".selected").classList.remove("selected");
								globalSelected = -1;
								hohChess.render(hohChess.board)
							}
						}
					}
				}
				squareContainer.appendChild(ele);
			}
		};
		initialRender();
		let flip = document.createElement("div");
		flip.innerText = "↓↑";
		board.appendChild(flip);
		flip.onclick = function(){
			hohChess.options.flip = !hohChess.options.flip;
			initialRender();
			hohChess.render(hohChess.board)
		};

		hohChess.msg = document.createElement("div");
		hohChess.msg.innerText = "";
		board.appendChild(hohChess.msg);

		hohChess.notation = document.createElement("div");
		hohChess.notation.innerText = "";
		board.appendChild(hohChess.notation);
		hohChess.notation.style.width = "500px";

		let globalSelected = -1;


		hohChess.board = initialBoard();
		hohChess.options = options;

		hohChess.render(hohChess.board)
	},
	doMove: function(start,end){
		let moveProposed = copyBoard(hohChess.board);
		let piece = moveProposed.pos[start];
		let cap = moveProposed[end];
		moveProposed.pos[end] = piece;
		moveProposed.pos[start] = 0;
		if(piece === 6 && start === 4 && end === 6){
			moveProposed.pos[5] = 2;
			moveProposed.pos[7] = 0;
		}
		else if(piece === 6 && start === 4 && end === 2){
			moveProposed.pos[3] = 2;
			moveProposed.pos[0] = 0;
		}
		else if(piece === 14 && start === 60 && end === 62){
			moveProposed.pos[61] = 10;
			moveProposed.pos[63] = 0;
		}
		else if(piece === 14 && start === 60 && end === 58){
			moveProposed.pos[59] = 10;
			moveProposed.pos[56] = 0;
		}
		else if(piece === 1 && cap === 0 && ((end - start === 7) || (end - start === 9))){
			moveProposed.pos[end - 8] = 0
		}
		else if(piece === 9 && cap === 0 && ((end - start === -7) || (end - start === -9))){
			moveProposed.pos[end + 8] = 0
		}
		else if(piece === 1 && end >= 56){
			moveProposed.pos[end] = 5
		}
		else if(piece === 9 && end < 8){
			moveProposed.pos[end] = 13
		}
		let validMoves = moveGen(hohChess.board);
		//console.log(validMoves,moveProposed);
		return validMoves.some(move => {
			if(moveProposed.pos.every((square,index) => move.pos[index] === square)){
				hohChess.history.push(finalNotation(move,hohChess.board,validMoves));
				hohChess.notation.innerText = hohChess.history.join(" ");
				hohChess.board = move;
				return true
			}
			else{
				return false
			}
		})
	},
	render: function(board){
		const pieceMap = ["","Pw","Rw","Nw","Bw","Qw","Kw","","","Pb","Rb","Nb","Bb","Qb","Kb"];
		Array.from(hohChess.pieceContainer.children).forEach(child => child.remove());
		board.pos.forEach((piece,index) => {
			if(piece){
				let ele = document.createElement("img");
				ele.classList.add("hohPiece");
				ele.width = 64;
				ele.height = 64;
				if(hohChess.options.flip){
					ele.style.left = 448 - (index % 8) * 64 + "px";
					ele.style.top  = Math.floor(index / 8) * 64 + "px"
				}
				else{
					ele.style.left = (index % 8) * 64 + "px";
					ele.style.top  = 448 - Math.floor(index / 8) * 64 + "px"
				}
				ele.src = pieceMap[piece] + ".png";
				hohChess.pieceContainer.appendChild(ele);
			}
		});
		if(hohChess.options.moveList){
			Array.from(hohChess.moveList.children).forEach(child => child.remove());
			let moves = moveGen(hohChess.board);
			if(
				(hohChess.board.isWhite && hohChess.options.score_white)
				|| (!hohChess.board.isWhite && hohChess.options.score_black)
			){
				if(hohChess.board.isWhite && hohChess.options.autoplay_white){
					hohChess.msg.innerText = "thinking..."
				}
				else{
					hohChess.msg.innerText = ""
				}
				if(hohChess.board.isWhite && hohChess.options.autoplay_whiteBook && hohChess.options.autoplay_white){
					let openingMove;
					let found = true;
					let root = hohChess.options.whiteBook.book[0];
					for(let i=1;i<hohChess.history.length;i+=2){
						if(root.replies && root.replies.length){
							for(let j=0;j<root.replies.length;j++){
								if(root.replies[j].move === hohChess.history[i]){
									if(root.replies[j].book && root.replies[j].book.length){
										root = root.replies[j].book[0]
									}
									break
								}
							}
						}
						else{
							found = false
						}
					}
					if(found){
						openingMove = notationDec(root.move,hohChess.board)
					}
					if(openingMove){
						hohChess.history.push(finalNotation(openingMove,hohChess.board,moves));
						hohChess.board = openingMove;
						hohChess.render(hohChess.board);
						hohChess.notation.innerText = hohChess.history.join(" ")
						return
					}
				}
				moves.forEach(move => {
					move.eng = score(move,hohChess.options.depth)
				});
				if(hohChess.board.isWhite){
					moves.sort((b,a) => a.eng - b.eng)
				}
				else{
					moves.sort((a,b) => a.eng - b.eng)
				}
				moves.forEach(move => {
					let text = document.createElement("p");
					text.innerText = finalNotation(move,hohChess.board,moves);
					if(move.eng === 0){
						text.innerText += " | 0.00"
					}
					else if(move.eng > 0){
						text.innerText += " | +" + move.eng
					}
					else{
						text.innerText += " | " + move.eng
					}
					hohChess.moveList.appendChild(text)
				})
				if(hohChess.board.isWhite && hohChess.options.autoplay_white){
					hohChess.history.push(finalNotation(moves[0],hohChess.board,moves));
					hohChess.notation.innerText = hohChess.history.join(" ")
					hohChess.board = moves[0];
					hohChess.render(hohChess.board)
				}
				else if(!hohChess.board.isWhite && hohChess.options.autoplay_black){
					hohChess.history.push(finalNotation(moves[0],hohChess.board,moves));
					hohChess.notation.innerText = hohChess.history.join(" ")
					hohChess.board = moves[0];
					hohChess.render(hohChess.board)
				}
			}
			else{
				moves.forEach(move => {
					let text = document.createElement("p");
					text.innerText = finalNotation(move,hohChess.board,moves);
					hohChess.moveList.appendChild(text)
				})
			}
		}
		hohChess.msg.innerText = ""
	}
}
