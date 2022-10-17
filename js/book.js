const books = document.querySelector(".books");
const searchQuery = document.querySelector(".query")

function clearUI() {
    const book = document.querySelectorAll(".book")

    if (book) {
        book.forEach(bookItem => {
            bookItem.remove()
        })
    }
}

async function fetchBooks() {
    const query = searchQuery.value ? searchQuery.value : "computer science"
    // if (searchQuery.value === '') {
    //     alert('Please provide some values')
    //     return null
    // }

    clearUI()

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    const jsonResponse = await res.json()
    console.log(jsonResponse.items)

    jsonResponse.items.forEach(book => {
        const bookElement = document.createElement('div');
        const bookImg = document.createElement('img')
        const readMore = document.createElement('a')

        bookElement.classList.add("book")
        bookImg.src = book.volumeInfo.imageLinks.smallThumbnail;
        readMore.href = book.volumeInfo.previewLink
        readMore.textContent = 'Read more'

        bookElement.appendChild(bookImg)
        bookElement.appendChild(readMore)
        books.appendChild(bookElement)

        // bookElement.src = book.volumeInfo.imageLinks.smallThumbnail;
    })
}

fetchBooks()