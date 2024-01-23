import Image from 'next/image'
import CatAvatar from '@/public/cat2.jpeg'
import { MdLogout } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='w-64 bg-[#494242] min-h-screen rounded-xl'>
      <div className='flex items-center m-5 pt-5'>
        <Image
          className='rounded-full object-cover h-20 w-20 flex items-center justify-center'
          src={CatAvatar}
          alt='profile picture'
        />
        <div className='ml-2'>
          <span>username</span>
        </div>
      </div>
      <div className='m-5'>
        <ul className='list-none'>
          <li className='p-2'>All Tasks</li>
          <li className='p-2'>Completed</li>
          <li className='p-2'>To Do</li>
        </ul>
      </div>
      <div>
        <button className='p-5 mt-1 flex gap-2 items-center w-full cursor-pointer'>
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
