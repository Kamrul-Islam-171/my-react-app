import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='text-4xl bg-red-500'>Checking All UI</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className='container mx-auto h-28 bg-blue-400'>
        <h1>I am tomato</h1>
      </div>
      <button className="btn btn-primary">Primary</button>

      <div className='space-x-5'>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis praesentium nisi explicabo omnis nobis ipsa! Dolore, similique ipsum iste in molestiae sapiente voluptatum voluptas cum tempora incidunt fugiat ex voluptate?</p>
      </div>

    </>
  )
}



export default App
