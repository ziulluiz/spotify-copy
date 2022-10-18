import React from 'react'
import {
  HomeIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";


function Sidebar() {
  return (
    <div className='text-gray-500'>
      <div>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <BuildingLibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
