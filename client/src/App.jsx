import { useState } from 'react'
import Card from './Card'
import Header from './Header'
import Products from './products.json'

function App() {

  // State to hold the list of selected items
  const [list,setList] = useState([])

  // Render the application with a header and a grid of product cards
  return (
    <div className='bg-green-100 h-[100vh]'>
      <Header list={list} />
      <div className='grid md:grid-cols-4 grid-cols-2 gap-2 p-5'>
         {
          // Map through the products and render a Card component for each product
          Products.map((product,index)=>(
            <Card key={index} product={product} setList={setList} />
          ))
         }
      </div>
    </div>
  )
}

export default App
