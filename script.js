let myLibrary = [];

function Book(id, title, author, numPages, ifRead) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.numPages = numPages;
	this.ifRead = ifRead;

	this.info = function() {
		
		return (
			`ID: ${id}. ${title} by ${author}, ${numPages} pages, ${ifRead ? "read" : "not read yet"}`
		)
	}
}

function addBookToLibrary(title, author, numPages, ifRead) {
	const newBook = new Book(crypto.randomUUID(), title, author, numPages, ifRead);

	myLibrary.push(newBook);
}

function displayBooks(myLibrary) {
	let books = '';
	for (let i = 0; i < myLibrary.length; i++) {
		const { title, author, numPages, ifRead } = myLibrary[i];
		// console.log(title);
		// console.log(author);
		// console.log(numPages);
		// console.log(ifRead);
		const html = `
		<div className="book">
			<p>${title}</p>
			<p>by ${author}</p>
			<p>${numPages} pages</p>
			<p>${ifRead}</p>
		</div>
		`;
		books += html;
	}
	// console.log(books);

	document.querySelector(".library").innerHTML = books;
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(myLibrary);
// console.log(myLibrary[0].info());

addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
// console.log(myLibrary);
// console.log(myLibrary[0].info());
// console.log(myLibrary[1].info());

displayBooks(myLibrary);

// const theHobbit = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());