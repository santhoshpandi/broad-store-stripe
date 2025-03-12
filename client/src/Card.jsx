import { useState } from "react"

// Card component receives a product and a setList function as props
export default function Card({ product, setList }) {

    const { name, unit_amount } = product
    const [qty, setQty] = useState('')

    // Function to add the product to the cart
    function addToCart() {
        if (qty == '') alert('Enter quantity')
        else {
            // Update the list with the new product and quantity
            setList((list) => ([
                ...list,
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: name
                        },
                        unit_amount: unit_amount * 100
                    },
                    quantity: Number(qty)
                },
            ]))
            setQty('') // Reset the quantity input
        }
    }

    // Render the product card with an input for quantity and an add to cart button
    return (
        <div className="bg-blue-300 p-3 flex flex-col items-center gap-2 rounded-lg">
            <div className="text-[21px] font-bold px-2 mb-2">
                {name} - ₹{unit_amount}
            </div>
            <div className="flex gap-2">
                <input onChange={(e)=>setQty(e.target.value)} value={qty} className="px-2" placeholder="quantity" type="number" name="quantity" id="" />
                <button onClick={addToCart} className="bg-blue-700 px-2 py-1 text-white rounded-md">Add to Cart</button>
            </div>
        </div>
    )
}