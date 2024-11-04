import { FaWhatsapp } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
const Footer = () => {
  return (
    <div className='w-full bg-primary py-10 mt-5'>
      <div className='w-11/12 md:w-10/12 mx-auto flex justify-start  gap-16'>
        <div className='flex flex-col w-2/12  text-white'>
          <p className='text-[32px] font-sans font-bold my-4'>AfifZhiao.</p>
          <p className='text-[20px] font-sans font-bold my-2'>Contact Us</p>
          <div className='flex my-1 text-[16px] items-center gap-2'>
            <FaWhatsapp size={20} />
            <p>+62 81548769365</p>
          </div>
          <div className='flex my-1 text-[16px] items-center gap-2'>
            <IoIosCall size={20} />
            <p>+62 81548769365</p>
          </div>
        </div>
        <div className='flex w-8/12 gap-10'>
          <div className='flex-col w-4/12 flex text-white'>
            <p className=' my-4 text-[20px] font-sans '>Store</p>
            <hr className='border-white border-t-4 rounded-md' />
            <div className='px-7 mt-5 text-[16px]'>
              <ul className='list-disc space-y-2'>
                <li className='list-item'>
                  <a href='about'>About Us</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Blog</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Careers</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Job</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-col w-4/12 flex text-white'>
            <p className=' my-4 text-[20px] font-sans'>Term of Use</p>
            <hr className='border-white border-t-4 rounded-md' />
            <div className='px-7 mt-5 text-[16px]'>
              <ul className='list-disc space-y-2'>
                <li className='list-item'>
                  <a href='about'>Privacy Policy</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Return Policy</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Refund Policy</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Order Tracking</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-col w-4/12 flex text-white'>
            <p className=' my-4 text-[20px] font-sans'>Our Services</p>
            <hr className='border-white border-t-4 rounded-md' />
            <div className='px-7 mt-5 text-[16px]'>
              <ul className='list-disc space-y-2'>
                <li className='list-item'>
                  <a href='about'>Manage deliveries</a>
                </li>
                <li className='list-item'>
                  <a href='about'>FAQs</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Payments</a>
                </li>
                <li className='list-item'>
                  <a href='about'>In Press</a>
                </li>
                <li className='list-item'>
                  <a href='about'>Returns</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
