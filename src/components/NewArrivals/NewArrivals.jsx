import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import { useState } from 'react'
import CardProduct from '../cardProduct/CardProduct'
const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([
    {
      img: image1, // Ganti dengan path gambar yang sesuai
      name: 'Laptop Pro 15',
      price: 12000000,
      kategori: 'Laptop',
      discount: 15
    },
    {
      img: image2,
      name: 'Digital Camera X100',
      price: 5000000,
      kategori: 'Camera',
      discount: 20
    },
    {
      img: image3,
      name: 'Smartphone Ultra',
      price: 7000000,
      kategori: 'Smartphone',
      discount: 10
    },
    {
      img: image2,
      name: 'Wireless Headphones',
      price: 1500000,
      kategori: 'Accessories',
      discount: 10
    },
    {
      img: image1,
      name: 'Tablet 10',
      price: 3000000,
      kategori: 'Tablet',
      discount: 15
    }
  ])

  return (
    <div className='mt-10 p-3 w-11/12  md:w-10/12  mx-auto'>
      <h3 className='font-bold font-sans md:text-[35px] text-center'>
        Products
      </h3>
      <p className='text-center font-sans md:text-[17px]'>
        Add to your collection with new products! Buy with discount only at
        Gizmo!
      </p>
      <hr className='w-8/12 my-3 border-t border-gray-300 mx-auto' />
      <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-5'>
        {newArrivals.length > 0
          ? newArrivals.map((item, index) => (
              <CardProduct product={item} key={index} />
            ))
          : ''}
      </div>
    </div>
  )
}

export default NewArrivals
