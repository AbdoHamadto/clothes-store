import { useState } from 'react'
import heart from '../assets/card/heart.png'
import redHeart from '../assets/card/love.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({data, openA, newData}) => {
  const openAlert = (index) => {
    openA(true, index)
  }
  const [selectlover, setLover] = useState(false)
  const love = (index) => {
    data[index].lover ? toast.success(`Successfully Remove ${data[index].name} to Wishlist 💔`, { autoClose:1000}) :
    toast.success(`Successfully Add ${data[index].name} to Wishlist ❤️`, { autoClose:1000});
    setLover(!selectlover);
    data[index].lover = !data[index].lover
    newData(data)
  }

  return(
    <div className="grid w-4/5 mx-auto grid-cols-4 gap-8 pb-16 ">
      {data.map((item, index) => {
        return(
          <div key={index} className="relative bg-gray-200 rounded-b-lg group">
            <div className="absolute w-4/5 p-2 font-bold  text-center bg-gray-400 opacity-80 rounded-lg left-9 bottom-16 hidden group-hover:block cursor-pointer" onClick={() => openAlert(index)}>View More</div>
            <img src={item.outImage} className="w-full h-60" />
            <div className='p-2 flex justify-between font-bold'>
              <p>{item.name}</p>
              <img src={item.lover ? redHeart : heart} className='cursor-pointer hover:scale-110' onClick={() => love(index)}/>
              <p>{item.price}</p>
            </div>
          </div>
        )
      })}
      <ToastContainer />
    </div>
  )
}

export default Card;