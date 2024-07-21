import logoStore from '../assets/nav-bar/store.png'
import account from '../assets/nav-bar/account.png'
import heart from '../assets/nav-bar/heart.png'
import cart from '../assets/nav-bar/shopping-cart.png'

const NavBar = ({openW, openC, openL, search, setSearch}) => {
  const openWishlist = () => {
    openW(true)
  }
  const openCart = () => {
    openC(true)
  }
  const openLogIn = () => {
    openL(true)
  }
  return (
    <div className='flex justify-between items-center  p-4 bg-blue-300 h-16 sticky top-0 z-10'>
      <img className='cursor-pointer h-12' src={logoStore} />
      <input type="text" placeholder='What are you looking for?' className='outline-none p-2 text-xl rounded-lg w-2/4 h-10' onChange={(e) => setSearch(e.target.value)} value={search}/>
      <div className='flex justify-between w-1/3'>
        <div className='flex items-center cursor-pointer group' onClick={openLogIn}>
          <p className='text-xl mr-4' >Log in</p>
          <img src={account} className='h-6 group-hover:scale-125'  />
        </div>
        <div className='flex items-center group cursor-pointer' onClick={openWishlist}>
          <p className='text-xl mr-4'>Wishlist</p>
          <img src={heart} className='h-6 group-hover:scale-125'  />
        </div>
        <div className='flex items-center mr-8 cursor-pointer group' onClick={openCart}>
          <p className='text-xl mr-4'>Cart</p>
          <img src={cart} className='h-6 group-hover:scale-125' />
        </div>
      </div>
    </div>
  )
}

export default NavBar;