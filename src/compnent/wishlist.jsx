import { useState } from "react";
import { toast } from 'react-toastify';

const Wishlist = ({data, closeW, newData}) => {
  document.body.style.overflow = 'hidden';
  const dataFilter = data.filter((item) => item.lover)
  const close = () => {
    closeW(false)
    document.body.style.overflow = 'auto';
  }
  const [selecthate, setHate] = useState(false)
  const hate = (index) => {
    setHate(!selecthate)
    data[index].lover = !data[index].lover
    toast.success(`Successfully Remove ${data[index].name} to Wishlist 💔`, { autoClose:1000})
    newData(data)
  }
  return(
    <div className="sticky top-0 z-20 w-full h-dvh flex justify-center items-center bg-black-opacity">
      <div className="w-1/3 h-2/3 bg-gray-200 p-4 relative">
        <p className="text-4xl absolute top-1 right-2 cursor-pointer font-bold" onClick={close}>⮾</p>
        <p className="text-2xl font-bold text-center py-4 border-b-2 border-black">Wishlist ❤️</p>
        <div className="mt-4 overflow-auto">
          {dataFilter.length > 0 ?
          dataFilter.map((item, index) => {
            return(
              <div key={index} className="flex justify-between text-lg mb-2 border-b border-gray-500">
                <p className="w-1/3">{item.name}</p>
                <p className="w-1/3">{item.price}</p>
                <p className="text-3xl cursor-pointer font-bold" onClick={() => hate(item.id)}>⮾</p>
              </div>
            )}) :
            <div className="h-96 flex justify-center items-center">
              <div className="font-bold text-xl">Go Now Add Product to Wishlist</div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Wishlist;