import { useEffect, useState } from 'preact/hooks'

const getBookQuery = JSON.stringify({
  query: `
    {
      books {
        name
        genre
        _id
      }
    }
  `
})

const BookList = () => {
  const [books, setBooks] = useState([])
  const displayBooks = async () => {
    const data = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: getBookQuery
    })
  
    const parsedData = await data.json()
    setBooks(parsedData.data.books)
  }
  useEffect(() => {
    displayBooks()
  }, [])
  return (
    <div>
      <ul id='book-list'>
      {books && books.length ? books.map((book: { name: string }, bookIndex) => {
          return <li key={`book-${bookIndex}`}>{book.name}</li>
        }) : (
          <div>Loading Books</div>
        )}
      </ul>
    </div>
  )
}

export default BookList