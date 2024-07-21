import { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({data, closeC, dataCartReception}) => {
  document.body.style.overflow = 'hidden';
  const filterData = data.filter((item) => item.cart)
  const close = () => {
    closeC(false)
    document.body.style.overflow = 'auto';
  }
  const [relod, setRelod] = useState(false)
  const remove = (index) => {
    setRelod(!relod)
    filterData[index].cart = false
    toast.success(`Successfully Remove ${data[index].name} to Cart 🛒`, {autoClose: 1000})
  }
  const removeAll = () => {
    setRelod(!relod)
    toast.success("Successfully Remove All")
    dataCartReception([])
  }
  return(
    <div className="sticky top-0 z-20 w-full h-dvh flex justify-center items-center bg-black-opacity">
      <div className="w-2/5 h-2/3 bg-gray-200 p-4 relative overflow-auto">
        <p className="text-4xl absolute top-1 right-2 cursor-pointer font-bold" onClick={close}>⮾</p>
        <p className="text-2xl font-bold text-center py-4 border-b-4 border-black">Cart 🛒</p>
        <div className="flex justify-between text-lg mb-2 mt-2 py-1 border-b-2 border-gray-700">
          <p className="w-1/5 font-bold text-center">Name</p>
          <p className="w-1/5 font-bold text-center">Price</p>
          <p className="w-1/5 font-bold text-center">Color</p>
          <p className="w-1/5 font-bold text-center">Size</p>
          <p className="text-2xl cursor-pointer" onClick={removeAll}>🗑️</p>
        </div>
        <div className="mt-2 overflow-auto">
          {filterData.length > 0 ?
          filterData.map((item, index) => {
            return(
              <div key={index} className="flex justify-between items-center text-lg mb-2 border-b border-gray-500">
                <p className="w-1/5 text-center">{item.name}</p>
                <p className="w-1/5 text-center">{item.price}</p>
                <p className="w-1/5 flex justify-center">{item.colors.map((item) => {return(item.selectColor && <p className= { item.class + " w-6 h-6 rounded-full"}></p>)})}</p>
                {item.sizes.map((item) => {return(item.selectSize && <p className="w-1/5 text-center">{item.name}</p>)})}
                <p className="text-3xl cursor-pointer font-bold" onClick={() => remove(index)}>⮾</p>
              </div>
            )}) :
            <div className="h-96 flex justify-center items-center">
              <div className="font-bold text-xl">Go Now Add Product to Cart</div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Cart;