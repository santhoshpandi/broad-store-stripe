import { useState } from "react"
import toast from "react-hot-toast"

export default function Card({ product, setList }) {

    const { title, price, image } = product
    const [qty, setQty] = useState('')

    // Function to add the product to the cart
    function addToCart() {
        if (qty == '') toast.error('Enter quantity')
        else {
            // Update the list with the new product and quantity
            setList((list) => ([
                ...list,
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: title
                        },
                        unit_amount: price*100
                    },
                    quantity: Number(qty)
                },
            ]))
            setQty('') // Reset the quantity input
        }
    }

    // Render the product card with an input for quantity and an add to cart button
    return (
        <div className="bg-blue-300 p-3 flex flex-wrap flex-col items-center justify-center gap-2 rounded-lg">
            <img src={image} className="w-[200px] h-[250px]" alt="image Loading" />
            <div className="text-[21px] font-bold px-2 mb-2">
                {title} - <span className="text-indigo-800">₹{price}</span>
            </div>
            <div className="flex gap-2">
                {/* <input onChange={(e)=>setQty(e.target.value)} value={qty} className="px-2" placeholder="quantity" type="number" name="quantity" id="" /> */}
                <select onChange={(e)=>setQty(e.target.value)} value={qty} className="px-2 cursor-pointer" placeholder="quantity" type="number" name="quantity" id="">
                    <option value=''>quantity</option>
                    <option value='1'>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <button onClick={addToCart} className="bg-blue-700 px-2 py-1 text-white rounded-md cursor-pointer">Add to Cart</button>
            </div>
        </div>
    )
}