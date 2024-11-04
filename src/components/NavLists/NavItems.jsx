import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
const NavItems = ({
  label,
  options,
  categoryId,
  selectedCategory,
  setSelectedCategory,
  selectedItems,
  onItemSelect
}) => {
  //  const [isOpen, setIsOpen] = useState(false);
  function capitalizeWords (str) {
    return str
      .toLowerCase() // Convert the entire string to lowercase first
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' ') // Join the words back into a single string
  }

  // Example usage
  const result = capitalizeWords('hello world')
  console.log(result) // Output: "Hello World"

  const selectCategory = () => {
    console.log(selectedCategory)
    console.log(selectedCategory.includes(categoryId))

    if (selectedCategory.includes(categoryId)) {
      console.log('ada')
      setSelectedCategory(prev => prev.filter(item => item !== categoryId))
    } else {
      setSelectedCategory(prev => [...prev, categoryId])
      console.log('Tidak ada')
    }
  }

  return (
    <div className='relative'>
      <button
        onClick={() => selectCategory()}
        className={`flex items-center justify-between px-4 text-sm py-2 ${
          selectedCategory.includes(categoryId)
            ? 'bg-primary text-white'
            : 'bg-bgnav text-textColor-tertiary'
        }  rounded-full hover:opacity-90 transition-colors min-w-[120px]`}
      >
        <span>{capitalizeWords(label)}</span>
        {/* <FiChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        /> */}
      </button>

      {/* {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          {options.map((option, index) => {
            const isSelected = selectedItems.includes(option);
            return (
              <button
                key={index}
                className={`w-full px-4 py-2 text-left first:rounded-t-lg last:rounded-b-lg transition-colors
                  ${isSelected 
                    ? 'bg-primary text-white hover:bg-secondary' 
                    : 'text-textColor-tertiary hover:bg-gray-100'
                  }`}
                onClick={() => {
                  onItemSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            )}
          )}
        </div>
      )} */}
    </div>
  )
}

export default NavItems
