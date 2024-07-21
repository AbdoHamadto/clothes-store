import logIn from '../assets/nav-bar/account.png'
import google from '../assets/log-in/search.png'
import img from '../assets/log-in/log-in.png'
import { toast } from 'react-toastify';

const LogIn = ({closeL}) => {
  document.body.style.overflow = 'hidden';
  const closeLogin = () => {
    document.body.style.overflow = 'auto';
    closeL(false)
  }
  const notification = () => {
    toast.success("Succefully Log in", {autoClose: 1000})
  }
  return(
    <div className="sticky top-0 z-20 w-full h-dvh flex justify-center items-center bg-black-opacity">
      <div className="w-1/3 h-2/3 flex justify-center bg-white p-4 relative overflow-hidden">
        <p className="text-4xl absolute top-1 right-2 cursor-pointer font-bold" onClick={closeLogin}>⮾</p>
        <div className='flex flex-col items-center h-fit mt-28'>
          <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center mb-1"><img src={logIn}/> </div>
          <div className='flex flex-col'>
            <input type="email" placeholder='Email' className='my-4 p-2 outline-none text-md border-l-4 border-blue-400 focus:border-blue-600 bg-slate-100'/>
            <input type="password" placeholder='Password' className='mb-4 p-2 outline-none text-md border-l-4 border-blue-400 focus:border-blue-600 bg-slate-100'/>
            <button className='bg-blue-500 p-1 mt-1 rounded-xl hover:bg-blue-600' onClick={notification}>Log In</button>
          </div>
          <div className='relative group mt-8' onClick={notification}>
            <a href="#"><img src={google}/></a>
            <p className='absolute w-40 hidden text-blue-700 group-hover:block -left-12 -bottom-9'>Log in With Google</p>
          </div>
        </div>
        <img src={img} className='w-60 h-60 absolute bottom-1 right-2 -rotate-45'/>
      </div>
    </div>
  )
}

export default LogIn;