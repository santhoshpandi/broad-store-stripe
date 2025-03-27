import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate} from 'react-router-dom'
// Header component receives a list of items as a prop
export default function Header({list}) {
   
   // Function to handle the checkout process
   async function checkout(){
        console.log(list)
        // Check if the list is not empty
        if([...list].length!=0){
            // Make a POST request to the server with the list of items
            await axios.post(`${import.meta.env.VITE_APP_API_URI}/checkout`,list).then(res=>window.location.href=res.data.url)
            .catch(err=>console.log(err.message))
        }
        else{
            // Alert the user if no items are selected
            toast.error('Please Select Items')
        }

      
    }

    // Render the header with a checkout button
    return (
        <div className="flex flex-wrap justify-between text-[20px] shadow-md p-3 mb-4 bg-orange-200 sticky top-0 left-0 right-0 w-full">
            <p className="font-bold text-[25px]">BroadStore🅱️</p>
            <div className='relative mr-3'>
            <button onClick={checkout} className="bg-orange-900 text-white px-2 py-1 rounded-sm relative">
                Checkout              
            </button>
            <span className='absolute -right-3.5 -top-3 rounded-full bg-green-700 text-[15px] px-2 text-white font-bold'>
               {list.length}
            </span>
            
            </div>
            
        </div>
    )
};
