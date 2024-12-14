export default function NavBar() {
  return (
    <header className='mx-auto w-5/6'>
      <nav className='flex flex-col justify-center items-center bg-neutral-700/50 px-4 py-2 rounded-xl '>
        <span className='flex items-end text-3xl font-semibold'>
          <img src='/logo.webp' alt='Logo' className='size-10' />
          <a href='#' className='contents'>
            <h1>MyMovieList</h1>
            <strong className='bg-none text-teal-700 font-semibold'>
              Pro
            </strong>
          </a>
        </span>
        <ul className='flex gap-6 py-2 '>
          <li>
            <a href='#Science Fiction' className='hover:underline'>
            Science Fiction
            </a>
          </li>
          <li>
            <a href='#Adventure' className='hover:underline'>
            Adventure
            </a>
          </li>
          <li>
            <a href='#Comedy' className='hover:underline'>
            Comedy
            </a>
          </li>
          <li>
            <a href='#Thriller' className='hover:underline'>
            Thriller
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
