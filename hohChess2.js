function hohChess(DOMlocation,options){
	let board = document.createElement("div");
	board.classList.add("hohBoard");
	DOMlocation.appendChild(board);
	let backBoard = document.createElement("img");
	backBoard.classList.add("hohBackBoard");
	backBoard.src = "board.png";
	backBoard.width = 512;
	backBoard.height = 512;
	board.appendChild(backBoard);

	let pieceContainer = document.createElement("div");
	pieceContainer.classList.add("hohPieceContainer");
	board.appendChild(pieceContainer);

	let squareContainer = document.createElement("div");
	squareContainer.classList.add("hohSquareContainer");
	board.appendChild(squareContainer);
}
