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

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(myLibrary);
// console.log(myLibrary[0].info());

// addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
// console.log(myLibrary);
// console.log(myLibrary[0].info());
// console.log(myLibrary[1].info());

// const theHobbit = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());