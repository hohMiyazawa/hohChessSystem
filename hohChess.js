function masterify(book){
	let hasMasterGames = (book.replies || []).some(reply => reply.hasOwnProperty("master"));
	(book.replies || []).forEach(reply => {
		if(reply.hasOwnProperty("master")){
			reply.freq = reply.master;
			if(reply.book && reply.book.length){
				masterify(reply.book[0])
			}
		}
		else if(hasMasterGames){
			reply.freq = 0;
		}
	})
}

function commonList(book){
	let list = [];
	let recurse = function(book,splitting,prefix){
		prefix += " " + book[0].move;
		if(book[0].replies && book[0].replies.length){
			let cumFreq = book[0].replies.reduce((acc,val) => acc + (val.freq || 1),0);
			book[0].replies.forEach(reply => {
				let splot = splitting * (reply.freq || 1)/cumFreq;
				if(reply.book && reply.book.length){
					recurse(reply.book,splot,prefix + " " + reply.move)
				}
				else{
					list.push([splot,prefix + " " + reply.move,reply.stock,reply.count])
				}
			})
		}
		else{
			list.push([splitting,prefix,book[0].stock,book[0].count])
		}
	};
	recurse(book,1,"");
	list.sort((b,a) => a[0] - b[0]);
	return list
}

function randomRun(book,number){
	let mates = 0;
	let recurse = function(book,len){
		book[0].count = (book[0].count || 0) + 1;
		if(book[0].replies && book[0].replies.length){
			let cumFreq = book[0].replies.reduce((acc,val) => acc + (val.freq || 1),0);
			let rand = Math.floor(Math.random()*cumFreq);
			let sum = 0;
			let i=0;
			for(;i<book[0].replies.length;i++){
				sum += book[0].replies[i].freq || 1;
				if(sum > rand){
					break;
				}
			};
			book[0].replies[i].count = (book[0].replies[i].count || 0) + 1;
			if(book[0].replies[i].book && book[0].replies[i].book.length){
				return recurse(book[0].replies[i].book,len+1)
			}
			else{
				return len
			}
		}
		else{
			if(book[0].move[book[0].move.length - 1] === "#"){
				mates++;
			}
			return len
		}
	}
	let sum = 0;
	for(let i=0;i<number;i++){
		sum += recurse(book,1);
	}
	console.log("mates",mates/number);
	return sum/number
}

function notationDec(notation,boardState){
	let normal_proto = notation.replace(/(#|\?|\?\?|!!|!|!\?|\?!|\+)$/,"");
	let normal = normal_proto.replace("x","");
	if(normal === "O-O"){
		if(boardState.isWhite){
			return {name: "K", x: 6, y: 0, x0: 4, y0: 0, special: "castle"}
		}
		else{
			return {name: "K", x: 6, y: 7, x0: 4, y0: 7, special: "castle"}
		}
	}
	else if(normal === "O-O-O"){
		if(boardState.isWhite){
			return {name: "K", x: 2, y: 0, x0: 4, y0: 0, special: "castle"}
		}
		else{
			return {name: "K", x: 2, y: 7, x0: 4, y0: 7, special: "castle"}
		}
	}
	let endingX = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[normal.length - 2]];
	let endingY = parseInt(normal[normal.length - 1]) - 1;
	let piece = normal[0];
	if(!["R","N","B","Q","K"].includes(piece)){
		piece = "P";
		normal = "P" + normal
	}
	let x0 = -1;
	let y0 = -1;
	if(normal.length === 4){
		x0 = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[1]];
		if(piece === "P"){
			if(boardState.isWhite){
				y0 = endingY - 1;
			}
			else{
				y0 = endingY + 1;
			}
		}
	}
	else if(normal.length === 5){
		x0 = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7}[normal[1]];
		y0 = parseInt(normal[2]) - 1;
	}
	else{
		if(piece === "K"){
			boardState.pieces.forEach((piece,index) => {
				if(boardState.isWhite && piece === "K"){
					x0 = index % 8;
					y0 = Math.floor(index / 8);
				}
				else if(!boardState.isWhite && piece === "k"){
					x0 = index % 8;
					y0 = Math.floor(index / 8);
				}
			})
		}
		else if(piece === "P"){
			x0 = endingX;
			if(boardState.isWhite){
				if(boardState.pieces[endingX + (endingY - 1)*8] === "P"){
					y0 = endingY - 1;
				}
				else{
					y0 = endingY - 2;
				}
			}
			else{
				if(boardState.pieces[endingX + (endingY + 1)*8] === "p"){
					y0 = endingY + 1;
				}
				else{
					y0 = endingY + 2;
				}
			}

		}
		else if(piece === "N"){
			let horse = boardState.isWhite ? "N" : "n";
			if(boardState.pieces[endingX + 2 + (endingY - 1)*8] === horse){
				x0 = endingX + 2;
				y0 = endingY - 1;
			}
			else if(boardState.pieces[endingX - 2 + (endingY - 1)*8] === horse){
				x0 = endingX - 2;
				y0 = endingY - 1;
			}
			else if(boardState.pieces[endingX - 2 + (endingY + 1)*8] === horse){
				x0 = endingX - 2;
				y0 = endingY + 1;
			}
			else if(boardState.pieces[endingX + 2 + (endingY + 1)*8] === horse){
				x0 = endingX + 2;
				y0 = endingY + 1;
			}
			else if(boardState.pieces[endingX + 1 + (endingY + 2)*8] === horse){
				x0 = endingX + 1;
				y0 = endingY + 2;
			}
			else if(boardState.pieces[endingX - 1 + (endingY + 2)*8] === horse){
				x0 = endingX - 1;
				y0 = endingY + 2;
			}
			else if(boardState.pieces[endingX - 1 + (endingY - 2)*8] === horse){
				x0 = endingX - 1;
				y0 = endingY - 2;
			}
			else if(boardState.pieces[endingX + 1 + (endingY - 2)*8] === horse){
				x0 = endingX + 1;
				y0 = endingY - 2;
			}
		}
		else if(piece === "B"){
			let bishop = boardState.isWhite ? "B" : "b";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX - offset + (endingY - offset)*8] === bishop){
					x0 = endingX - offset;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY + offset)*8] === bishop){
					x0 = endingX + offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY + offset)*8] === bishop){
					x0 = endingX - offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY - offset)*8] === bishop){
					x0 = endingX + offset;
					y0 = endingY - offset;
					break;
				}
			}
		}
		else if(piece === "Q"){
			let queen = boardState.isWhite ? "Q" : "q";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX - offset + (endingY - offset)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY + offset)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY + offset)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY - offset)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY - offset;
					break;
				}

				else if(boardState.pieces[endingX + (endingY - offset)*8] === queen){
					x0 = endingX;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + (endingY + offset)*8] === queen){
					x0 = endingX;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY)*8] === queen){
					x0 = endingX - offset;
					y0 = endingY;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY)*8] === queen){
					x0 = endingX + offset;
					y0 = endingY;
					break;
				}
			}
		}
		else if(piece === "R"){
			let rook = boardState.isWhite ? "R" : "r";
			for(let offset = 1;offset < 8;offset++){
				if(boardState.pieces[endingX + (endingY - offset)*8] === rook){
					x0 = endingX;
					y0 = endingY - offset;
					break;
				}
				else if(boardState.pieces[endingX + (endingY + offset)*8] === rook){
					x0 = endingX;
					y0 = endingY + offset;
					break;
				}
				else if(boardState.pieces[endingX - offset + (endingY)*8] === rook){
					x0 = endingX - offset;
					y0 = endingY;
					break;
				}
				else if(boardState.pieces[endingX + offset + (endingY)*8] === rook){
					x0 = endingX + offset;
					y0 = endingY;
					break;
				}
			}
		}
	}
	return {name: piece, x: endingX, y: endingY, x0: x0, y0: y0}
}

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

	let boardState = {
		pieces: [
			"R","N","B","Q","K","B","N","R",
			"P","P","P","P","P","P","P","P",
			"","","","","","","","",
			"","","","","","","","",
			"","","","","","","","",
			"","","","","","","","",
			"p","p","p","p","p","p","p","p",
			"r","n","b","q","k","b","n","r"
		],
		enPassantFile: 0,
		zeroing: 0,
		turn: 0,
		castle: [true,true,true,true],
		isWhite: true,
		notation: []
	};

	let globalSelected = -1;

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
					ele.classList.add("selected");
					globalSelected = currIndex
				}
				else{
					doMove(globalSelected,currIndex);
					squareContainer.querySelector(".selected").classList.remove("selected");
					globalSelected = -1
				}
			}
		}
		squareContainer.appendChild(ele);
	}

	let currentBook = options.book;

	if(options.isWhite){
		currentBook = currentBook.book
	}

	let AI_white = function(){
		if(currentBook.replies && currentBook.replies.length){
			let cumFreq = currentBook.replies.reduce((acc,val) => acc + (val.freq || 1),0);
			let rand = Math.floor(Math.random()*cumFreq);
			let sum = 0;
			let i=0;
			for(;i<currentBook.replies.length;i++){
				sum += currentBook.replies[i].freq || 1;
				if(sum > rand){
					break;
				}
			};
			let move = notationDec(currentBook.replies[i].move,boardState);
			boardState.pieces[move.y0*8 + move.x0] = "";
			if(boardState.isWhite){
				boardState.pieces[move.y*8 + move.x] = move.name;
			}
			else{
				boardState.pieces[move.y*8 + move.x] = move.name.toLowerCase();
				if(move.special === "castle" && move.x0 === 4){
					if(move.x === 6){
						boardState.pieces[move.y*8 + move.x - 1] = "r";
						boardState.pieces[move.y*8 + move.x + 1] = ""
					}
					else if(move.x === 2){
						boardState.pieces[move.y*8 + move.x + 1] = "r";
						boardState.pieces[move.y*8 + move.x - 2] = ""
					}
				}
			}
			boardState.isWhite = true;
			if(currentBook.replies[i].book && currentBook.replies[i].book.length){
				currentBook = currentBook.replies[i].book;
			}
			else{
				let fail = document.createElement("div");
				fail.classList.add("hohFail");
				fail.innerText = "Ferdig!";
				if(currentBook.replies[i].stock){
					fail.innerText += " " + currentBook.replies[i].stock
				}
				DOMlocation.appendChild(fail);
			}
		}
		else{
			let fail = document.createElement("div");
			fail.classList.add("hohFail");
			fail.innerText = "Ferdig!";
			if(currentBook.stock){
				fail.innerText += " " + currentBook.stock
			}
			DOMlocation.appendChild(fail);
		}
	}

	let AI_black = function(){
		if(currentBook.replies && currentBook.replies.length){
			let cumFreq = currentBook.replies.reduce((acc,val) => acc + (val.freq || 1),0);
			let rand = Math.floor(Math.random()*cumFreq);
			let sum = 0;
			let i=0;
			for(;i<currentBook.replies.length;i++){
				sum += currentBook.replies[i].freq || 1;
				if(sum > rand){
					break;
				}
			};
			let move = notationDec(currentBook.replies[i].move,boardState);
			boardState.pieces[move.y0*8 + move.x0] = "";
			if(boardState.isWhite){
				boardState.pieces[move.y*8 + move.x] = move.name;
				if(move.special === "castle" && move.x0 === 4){
					if(move.x === 6){
						boardState.pieces[move.y*8 + move.x - 1] = "R";
						boardState.pieces[move.y*8 + move.x + 1] = ""
					}
					else if(move.x === 2){
						boardState.pieces[move.y*8 + move.x + 1] = "R";
						boardState.pieces[move.y*8 + move.x - 2] = ""
					}
				}
			}
			else{
				boardState.pieces[move.y*8 + move.x] = move.name.toLowerCase();
				if(move.special === "castle" && move.x0 === 4){
					if(move.x === 6){
						boardState.pieces[move.y*8 + move.x - 1] = "r";
						boardState.pieces[move.y*8 + move.x + 1] = ""
					}
					else if(move.x === 2){
						boardState.pieces[move.y*8 + move.x + 1] = "r";
						boardState.pieces[move.y*8 + move.x - 2] = ""
					}
				}
			}
			boardState.isWhite = false;
			if(currentBook.replies[i].book && currentBook.replies[i].book.length){
				currentBook = currentBook.replies[i].book;
			}
			else{
				let fail = document.createElement("div");
				fail.classList.add("hohFail");
				fail.innerText = "Ferdig!";
				if(currentBook.replies[i].stock){
					fail.innerText += " " + currentBook.replies[i].stock
				}
				DOMlocation.appendChild(fail);
			}
		}
		else{
			let fail = document.createElement("div");
			fail.classList.add("hohFail");
			fail.innerText = "Ferdig!";
			if(currentBook.stock){
				fail.innerText += " " + currentBook.stock
			}
			DOMlocation.appendChild(fail);
		}
	}

	let doMove = function(from,to){
		let x1 = from % 8;
		let y1 = Math.floor(from / 8);
		let x2 = to % 8;
		let y2 = Math.floor(to / 8);
		let name = boardState.pieces[from];
		boardState.pieces[from] = "";
		boardState.pieces[to] = name;
		if(name === "K" && y1 === 0 && y2 === 0 && x1 === 4){
			if(x2 === 6){
				boardState.pieces[to - 1] = "R";
				boardState.pieces[to + 1] = ""
			}
			else if(x2 === 2){
				boardState.pieces[to + 1] = "R";
				boardState.pieces[to - 2] = ""
			}
		}
		else if(name === "k" && y1 === 7 && y2 === 7 && x1 === 4){
			if(x2 === 6){
				boardState.pieces[to - 1] = "r";
				boardState.pieces[to + 1] = ""
			}
			else if(x2 === 2){
				boardState.pieces[to + 1] = "r";
				boardState.pieces[to - 2] = ""
			}
		}
		let possible = currentBook.map(move => notationDec(move.move,boardState));
		let found = false;
		let further = 0;
		for(let i=0;i<possible.length;i++){
			if(possible[i].x === x2 && possible[i].y === y2 && ((options.isWhite && name === possible[i].name) || (!options.isWhite && name === possible[i].name.toLowerCase()))){
				found = true;
				further = i;
				break;
			}
		};
		if(options.isWhite){
			boardState.isWhite = false
		}
		else{
			boardState.isWhite = true
		}
		if(found){
			currentBook = currentBook[further];
			if(options.isWhite){
				AI_white()
			}
			else{
				AI_black()
			}
		}
		else{
			let fail = document.createElement("div");
			fail.classList.add("hohFail");
			fail.innerText = currentBook.map(move => move.move).join(", ");
			DOMlocation.appendChild(fail);
		}
		render()
	}

	if(!options.isWhite){
		AI_black()
	}

	let render = function(){
		Array.from(pieceContainer.children).forEach(child => child.remove());
		boardState.pieces.forEach((piece,index) => {
			if(piece){
				let ele = document.createElement("img");
				ele.classList.add("hohPiece");
				ele.width = 64;
				ele.height = 64;
				if(options.flip){
					ele.style.left = 448 - (index % 8) * 64 + "px";
					ele.style.top  = Math.floor(index / 8) * 64 + "px"
				}
				else{
					ele.style.left = (index % 8) * 64 + "px";
					ele.style.top  = 448 - Math.floor(index / 8) * 64 + "px"
				}
				if(piece === piece.toUpperCase()){
					ele.src = piece + "w.png";
				}
				else{
					ele.src = piece.toUpperCase() + "b.png";
				}
				pieceContainer.appendChild(ele);
			}
		})
	}

	render();
}
