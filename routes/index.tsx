import { Head, asset } from '$fresh/runtime.ts'
import BookList from '../islands/bookList.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel='stylesheet' href={asset('/index.css')} />
      </Head>
      <div id='main'>
        <h1>Reading List</h1>
        <BookList />
      </div>
    </>
  )
}
