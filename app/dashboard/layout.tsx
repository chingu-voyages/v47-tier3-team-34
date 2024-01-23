import Sidebar from '@/components/uiComponents/dashboard/sidebar/sidebar'
// import Navbar from '@/components/uiComponents/dashboard/navbar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex'>
      <div className='flex-1 p-5 min-h-screen'>
        <Sidebar />
      </div>
      <div className='flex-4 p-5 min-h-screen'>{children}</div>
    </div>
  )
}

export default Layout
