import NavItems from './NavItems'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import CategoryApiMethod from '../../api/apiMethod/categoryApiMethod'
import ProductApiMethod from '../../api/apiMethod/productApiMethod'
const NavLists = () => {
  const [categories, setCategories] = useState([])
  const location = useLocation()
  const getCategory = async () => {
    try {
      const response = await CategoryApiMethod.getCategory()
      const data = response.data.aaData
      setCategories(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategories = searchParams.get('categories')?.split(',') || []
  const [selectedCategory, setSelectedCategory] = useState(initialCategories)
  useEffect(() => {
    if (selectedCategory.length > 0) {
      setSearchParams({ categories: selectedCategory.join(',') })
    } else {
      searchParams.delete('categories')
      setSearchParams(searchParams)
    }
    // console.log('params', searchParams.get('categories'))
    console.log('location', location.search)
    getProduct()
  }, [selectedCategory, setSearchParams, searchParams, location.search])

  const toggleCategory = category => {
    setSelectedCategory(
      prev =>
        prev.includes(category)
          ? prev.filter(item => item !== category) // Remove if it exists
          : [...prev, category] // Add if it doesn't exist
    )
  }

  const getProduct = async () => {
    try {
      const response = await ProductApiMethod.getProduct(location.search)
      console.log('product', JSON.parse(response))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='py-3 my-1'>
      <div className='w-full mx-auto'>
        <div className='flex gap-2  flex-wrap'>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <NavItems
                key={index}
                categoryId={category.product_category_id}
                label={category.keyword_name}
                options={category.options}
                toggleCategory={toggleCategory}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))
          ) : (
            <p>Tidak Ada Data</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavLists
