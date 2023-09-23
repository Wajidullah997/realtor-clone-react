import React from 'react'
import {FcGoogle} from 'react-icons/fc'
export default function OAuth() {
  return (
    <div>
      <button className="uppercase transition duration-150 hover:shadow-lg ease-in-out active:bg-red-800 text-sm bg-red-600  hover:bg-red-700 w-full rounded px-7 text-white py-3 shadow-md flex items-center justify-center">
        <FcGoogle className='text-xl bg-white rounded-full mr-2'/>
        Continue with Google
      </button>
    </div>
  );
}
