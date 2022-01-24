let hohChess = {
	board: null,
	options: null,
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
		hohChess.board = initialBoard();
		hohChess.options = options;

		hohChess.render(hohChess.board)
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
		})
	}
}
