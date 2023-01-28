import React, {useState} from 'react'
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai'


const cartIt = () => {
    const [n, setN] = useState(1)
    return (
        <div>
            <li className='flex justify-center mb-1'>plant2
                <AiFillMinusCircle onClick={n>1?(()=>{setN(n-1)}):(()=>{setN(1)})} className='mx-2 mt-1' />
                <div>{n}</div>
                <AiFillPlusCircle onClick={(()=>{setN(n+1)})} className='mx-2 mt-1' />
            </li>
        </div>
    )
}

export default cartIt
