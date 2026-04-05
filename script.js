const myLibrary = [];

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

function addBookToLibrary() {
	
}

// const theHobbit = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());