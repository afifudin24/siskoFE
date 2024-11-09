import { AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
const CardProduct = ({ product, setIsOpen, setDetailProduct }) => {
  const handleSelectProduct = product => {
    setDetailProduct(product)
    setIsOpen(true)
  }
  const calculateDiscount = (price, discount) => {
    const discountAmount = price * (discount / 100) // Menghitung total potongan
    const discountedPrice = price - discountAmount // Menghitung harga setelah potongan
    return {
      discountAmount,
      discountedPrice
    }
  }

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

  return (
    <div className='rounded-lg outline-1 relative outline-stroke outline overflow-hidden'>
      {/* <div className='absolute bg-primary flex flex-col items-center justify-center top-0 right-0 py-1 px-2 opacity-90 text-white font-sans text-[14px] rounded-bl-lg font-semibold'> */}
      {/* <p>{product.discount}%</p> */}
      {/* <p>OFF</p> */}
      {/* </div> */}
      <div className='bg-background h-48 p-3 w-full flex justify-center items-center'>
        <img src={product.photo} className='rounded-md' alt={product.name} />
      </div>
      <div className='p-3'>
        <p
          className='text-[18px] capitalize
 font-sans text-textColor-primary'
        >
          {product.name}
        </p>
        <div className='flex my-1 justify-between'>
          <p className='font-bold  text-[18px]'>{formatPrice(product.price)}</p>
          {/* <p className='font-bold text-[18px]'>{formatPrice(calculateDiscount(product.price, product.discount).discountedPrice)}</p> */}
          {/* <p className='text-[18px] font-light font-sans line-through'>{formatPrice(product.price)}</p> */}
          <p className='text-primary font-semibold'>{product.stock}</p>
        </div>
        <hr />
        <div className='flex justify-between my-2 items-center'>
          {/* <p className='text-[16px] font-semibold text-primary'>Save - {formatPrice(calculateDiscount(product.price, product.discount).discountAmount)}</p> */}
          <button className='p-2 rounded-full !bg-primary text-white hover:!bg-secondary'>
            <FaCartPlus />
          </button>
          <button
            onClick={() => handleSelectProduct(product)}
            className='p-1 bg-secondary text-white rounded-md hover:bg-primary duration-100 transition-all ease-out'
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
