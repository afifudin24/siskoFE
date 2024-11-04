
import { FiSearch, FiUser} from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import SearchBar from '../SearchBar/SearchBar';
import NavLists from '../NavLists/NavLists';

const TopBar = () => {
    return (
        
        <div className="py-2 w-full">
            <SearchBar />
            <div className='outline outline-1 outline-stroke'>
            <div className='flex w-11/12 gap-1 mx-auto md:w-10/12  items-center '>
                <div className='w-10/12 '>
                <NavLists />
                </div>
                <div className='w-2/12 '>
                <button className='bg-primary px-4  py-2 text-white rounded-full text-sm hover:bg-secondary '>
                    Pre Order Now
                </button>
                </div>
            </div>
            </div>
        </div>
    )  
}

export default TopBar;