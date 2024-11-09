import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import { useEffect, useState } from 'react'
import {
  Button,
  DialogBackdrop,
  Description,
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'

import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import CardProduct from '../cardProduct/CardProduct'
import ProductApiMethod from '../../api/apiMethod/productApiMethod'
const NewArrivals = () => {
  const location = useLocation()
  const [product, setProduct] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [detailProduct, setDetailProduct] = useState(null)
  const formatPrice = price => {
    // Remove dots and convert the price to a number
    price = parseInt(price.toString().replace(/\./g, ''), 10)

    let formattedPrice

    if (price >= 1000000) {
      formattedPrice = (price / 1000000).toFixed(1) // Convert to millions with one decimal
      return `Rp${
        formattedPrice.endsWith('.0')
          ? formattedPrice.slice(0, -2)
          : formattedPrice
      }M`
    } else if (price >= 1000) {
      formattedPrice = (price / 1000).toFixed(1) // Convert to thousands with one decimal
      return `Rp${
        formattedPrice.endsWith('.0')
          ? formattedPrice.slice(0, -2)
          : formattedPrice
      }K`
    } else {
      return `Rp${price}` // For values below 1000, display the original price
    }
  }

  useEffect(() => {
    console.log('detail', detailProduct)
  }, [detailProduct])
  function open () {
    setIsOpen(true)
  }

  function close () {
    setIsOpen(false)
  }

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

  const getProduct = async () => {
    try {
      const response = await ProductApiMethod.getProduct(location.search)
      // console.log('product', JSON.parse(response))
      const data = JSON.parse(response)
      console.log('product', data)
      setProduct(data.aaData)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

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
        {product.length > 0
          ? product.map((item, index) => (
              <CardProduct
                detailProduct={detailProduct}
                setDetailProduct={setDetailProduct}
                product={item}
                key={index}
                setIsOpen={setIsOpen}
              />
            ))
          : ''}
      </div>

      <div>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className='relative z-50'
        >
          <DialogBackdrop
            transition
            className='fixed inset-0 bg-black/50 duration-300 ease-out data-[closed]:opacity-0'
          />
          <div
            className='fixed inset-0 rounded - md
 flex w-screen items-center justify-center p-4'
          >
            <DialogPanel
              transition
              className='w-8/12 rounded-md space-y-4 bg-white p-6 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'
            >
              <DialogTitle className='text-lg font-bold'>
                Detail Product
                <hr />
              </DialogTitle>

              <div className='flex gap-4'>
                <img
                  src={detailProduct ? detailProduct.photo : ''}
                  className='w-56 rounded-md'
                  alt=''
                />
                <div>
                  <Description className='text-2xl font-semibold  font-sans capitalize'>
                    {detailProduct ? detailProduct.name : ''}
                  </Description>
                  <p className='my-2 font-semibold font-sans text-lg'>
                    {detailProduct ? formatPrice(detailProduct.price) : ''}
                  </p>
                  <div className='flex gap-2 my-2'>
                    {detailProduct && detailProduct.varian ? (
                      detailProduct.varian.map((varian, index) => (
                        <button
                          className='py-2 capitalize px-6 border border-1 border-primary rounded-full'
                          key={index}
                        >
                          {varian.value}
                        </button>
                      ))
                    ) : (
                      <p className='text-gray-500'>Tidak ada varian</p>
                    )}
                  </div>
                  <p className='my-2'>
                    Stok : {detailProduct ? detailProduct.stock : ''}
                  </p>
                </div>
              </div>

              <div className='flex gap-4 my-2'>
                <button
                  className='p-2 bg-primary rounded-md hover:bg-secondary transition-all duration-100 text-white font-sans'
                  onClick={() => setIsOpen(false)}
                >
                  Tambah Ke Keranjang
                </button>
                <button
                  className='p-2 border border-primary hover:border-secondary duration-100 transition-all rounded-md'
                  onClick={() => setIsOpen(false)}
                >
                  Deactivate
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default NewArrivals
