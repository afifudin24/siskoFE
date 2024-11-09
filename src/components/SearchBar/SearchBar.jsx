import { FiUser, FiSearch } from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div>
      <div className='flex w-11/12  md:w-10/12 py-2 mx-auto gap-2 justify-between items-center'>
        <img className='h-10' src='/images/logo.png' alt='' />
        <div className='lg:w-10/12 w-9/12 flex justify-end items-center'>
          {/* searchbar */}
          <div className='search mx-3  w-9/12 md:w-7/12 lg:w-6/12 flex items-center gap-3 text-sm rounded-md bg-bg px-2 py-1'>
            <input
              placeholder='Search essentials, groceries and more...'
              className='w-full placeholder:text-textColor-secondary font-sans active:outline-none focus:outline-none p-1  bg-transparent'
              type='text'
            />
            <button className='!bg-primary hover:!bg-secondary rounded-md p-2 text-white'>
              {' '}
              <FiSearch />
            </button>
          </div>
          {/* sign in */}
          <div className='!flex px-5  !text-primary font-sans !items-center !gap-1'>
            <FiUser size={24} />
            <p className='font-bold text-textColor-secondary text-sm'>
              Sign In
            </p>
          </div>

          {/* chart */}
          <div
            className='flex gap-1 px-5 border-l !border-l-secondary 
                     items-center !text-primary font-sans'
          >
            <FaShoppingCart size={24} />
            <p className='text-sm text-textColor-secondary font-bold'>Cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
