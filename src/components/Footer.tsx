import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 pt-24 pb-7'>
      <ul className='flex gap-4 text-teal-800'>
        <li className='bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform'>
          <a href=''>
            <FaFacebook className='size-6' />
          </a>
        </li>
        <li className='bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform'>
          <a href=''>
            <FaInstagram className='size-6' />
          </a>
        </li>
        <li className='bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform'>
          <a href=''>
            <FaLinkedin className='size-6' />
          </a>
        </li>
        <li className='bg-gray-100 p-2 rounded-full hover:scale-110 transition-transform'>
          <a href=''>
            <FaXTwitter className='size-6' />
          </a>
        </li>
      </ul>
      <ul className='flex gap-4 font-light'>
        <li>
          <a href='#' className='hover:underline'>
            Inicio
          </a>
        </li>
        <li>
          <a href='Movies' className='hover:underline'>
            Películas
          </a>
        </li>
        <li>
          <a href='Series' className='hover:underline'>
            Series
          </a>
        </li>
        <li>
          <a href='Categories' className='hover:underline'>
            Categorías
          </a>
        </li>
      </ul>
    </footer>
  );
}
