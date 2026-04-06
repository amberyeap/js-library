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
		<div class="book">
			<p>${title}</p>
			<p>by ${author}</p>
			<p>${numPages} pages</p>
			<p>${ifRead ? "Read" : "Not Read yet"}</p>
		</div>
		`;
		books += html;
	}
	// console.log(books);

	document.querySelector(".library").innerHTML = books;
}

let modal = document.getElementById("new-book-modal");
let newBookBtn = document.getElementById("new-book");
let modalCloseBtn = document.querySelector(".close");

newBookBtn.onclick = function() {
	modal.style.display = "block";
}

modalCloseBtn.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(e) {
	if (e.target === modal) {
		modal.style.display = "none";
	}
}

const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = new FormData(newBookForm);
	const title = data.get('title');
	const author = data.get('author');
	const numPages = data.get('num-pages');
	const ifRead = data.get('if-read') === 'on';

	addBookToLibrary(title, author, numPages, ifRead);

	displayBooks(myLibrary);
	
	modal.style.display = 'none';
	newBookForm.reset();
})
// let submitBtn = document.querySelector(".submit-new-book");
// submitBtn.addEventListener("click", addNewBook());

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(myLibrary);
// console.log(myLibrary[0].info());

// addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
// console.log(myLibrary);
// console.log(myLibrary[0].info());
// console.log(myLibrary[1].info());

// displayBooks(myLibrary);

// const theHobbit = new Book(crypto.randomUUID(), "The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());