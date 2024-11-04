import { AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai';
import { FaCartPlus } from "react-icons/fa";
const CardProduct = ({ product }) => {
    const calculateDiscount = (price, discount) => {
    const discountAmount = price * (discount / 100); // Menghitung total potongan
    const discountedPrice = price - discountAmount; // Menghitung harga setelah potongan
    return {
        discountAmount,
        discountedPrice,
    };
};

    const formatPrice = (price) => {
    if (price >= 1000000) {
        return `Rp${(price / 1000000).toFixed(1)}M`; // Mengonversi ke jutaan dengan satu desimal
    } else if (price >= 1000) {
        return `Rp${(price / 1000).toFixed(1)}K`; // Mengonversi ke ribuan dengan satu desimal
    } else {
        return `Rp${price}`; // Jika kurang dari seribu, tampilkan harga aslinya
    }
};

    return (
        <div className='rounded-lg outline-1 relative outline-stroke outline overflow-hidden'>
            <div className='absolute bg-primary flex flex-col items-center justify-center top-0 right-0 py-1 px-2 opacity-90 text-white font-sans text-[14px] rounded-bl-lg font-semibold'>
                <p>{product.discount}%</p>
                <p>OFF</p>
            </div>
            <div className='bg-background h-48 p-3 w-full flex justify-center items-center'>
            <img src={product.img} alt={product.name} />
            </div>
            <div className='p-3'>
                <p className='text-[18px] font-sans text-textColor-primary'>{product.name}</p>
                <div className='flex my-1 justify-between'>
                <p className='font-bold text-[18px]'>{formatPrice(calculateDiscount(product.price, product.discount).discountedPrice)}</p>
                <p className='text-[18px] font-light font-sans line-through'>{formatPrice(product.price)}</p>
                </div>
                <hr />
                <div className='flex justify-between my-2 items-center'>
                    <p className='text-[16px] font-semibold text-primary'>Save - {formatPrice(calculateDiscount(product.price, product.discount).discountAmount)}</p>
                    <button className='p-2 rounded-full bg-primary text-white hover:bg-secondary'>
                        <FaCartPlus />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CardProduct;