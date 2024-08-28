import React from 'react'
import { useGlobalContext } from '../contexts/Context'

const Search = () => {
  const {userSearch,setUserSearch,isError} = useGlobalContext();
  return (
    <div>
      <form action="#" onSubmit={(e)=> e.preventDefault()} className="flex items-center justify-center my-10 flex-col">
        <p className='italic text-lg'>Type here to search the movie</p>
      <input
        type="text"
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded-md p-4 w-1/3 "
      />
      </form>
      <div>
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default Search