import { useState } from "react";
import next from '../assets/sale/right.png'
import back from '../assets/sale/left.png'
import { toast } from "react-toastify";

const Alert = ({data, numProduct, closeA ,newData, dataCartReception, dataCart}) => {
  document.body.style.overflow = 'hidden';
  const [numSelectColor, setNumSelectColor] = useState(false)
  const [numSelectImage, setNumSelectImage] = useState(0)
  const selectColor = (index) => {
    data[numProduct].colors.map((item, i) => {index === i ? item.selectColor = true : item.selectColor = false})
    newData(data)
    setNumSelectColor(!numSelectColor)
  }
  const selectSize = (index) => {
    data[numProduct].sizes.map((item, i) => {index === i ? item.selectSize = true : item.selectSize = false})
    newData(data)
    setNumSelectColor(!numSelectColor)
  }
  const selectImage = (index) => {
    setNumSelectImage(index)
  }
  const pluse = () => {
    if(numSelectImage !== data[numProduct].insideImage.length - 1) {
      setNumSelectImage(numSelectImage + 1)
    } else {
      setNumSelectImage(0)
    }
  }
  const minuse = () => {
    if(numSelectImage !== 0) {
      setNumSelectImage(numSelectImage - 1)
    } else {
      setNumSelectImage(3)
    }
  }
  const closeAlert = () => {
    closeA(false)
    document.body.style.overflow = 'auto';
  }
  const addCart = () => {
    let color = false;
    let size = false;
    data[numProduct].colors.map((item) => {item.selectColor ?  color = true : ""})
    data[numProduct].sizes.map((item) => {item.selectSize ?  size = true : ""})
    if(color && size) {
      data[numProduct].cart = true
      const obj = JSON.stringify(data[numProduct])
      const newObj = JSON.parse(obj)
      dataCartReception([...dataCart, newObj])
      toast.success(`Successfully Add ${data[numProduct].name} to Cart 🛒`, {autoClose: 1000})
    } else {
      if(color === false) {
        toast.error("Please Select Color", {autoClose: 1000})
      }
      if(size === false) {
        toast.error("Please Selecr Size", {autoClose: 1000})
      }
    }
  }
  return(
    <div className="sticky top-0 z-20 w-full h-dvh flex justify-center items-center bg-black-opacity">
      <div className="w-3/5  h-4/6 bg-gray-200 flex p-4 relative">
      <div className="absolute top-2 right-2 cursor-pointer text-5xl font-bold" onClick={closeAlert}>⮾</div>
        <div className="h-full w-7/12 py-10 ">
          <div className="flex items-center justify-center h-96 relative ">
            <div className="cursor-pointer absolute left-0 opacity-40 hover:opacity-100" onClick={minuse}><img src={back}/></div>
            <img src={data[numProduct].insideImage[numSelectImage]} className="max-h-96 w-96" />
            <div className="cursor-pointer absolute right-0 opacity-40 hover:opacity-100" onClick={pluse}><img src={next}/></div>
          </div>
          <div className="flex">
            {data[numProduct].insideImage.map((item, index) => {
              return(
                <img key={index} src={item} className="w-32 h-32 mx-auto mt-8 cursor-pointer" onClick={() => selectImage(index)} />
              )
            })}
          </div>
        </div>
        <div className="ml-8 pl-16 pr-4 border-l-4 border-l-gray-600 py-10">
          <p className="font-bold text-3xl">{data[numProduct].name}</p>
          <p className="text-3xl my-2">{data[numProduct].price}</p>
          <p className="text-2xl">{data[numProduct].rating}<span className="text-lg ml-2">⭐</span></p>
          <div className="my-6 flex flex-col justify-center items-center">
            <p className="text-xl">Color</p>
            <div className="grid grid-cols-4 mt-4 gap-4">
              {data[numProduct].colors.map((item, index) => {
                return(
                  <div 
                    key={index}
                    className={item.selectColor ? item.class + " w-8 h-8 rounded-full cursor-pointer scale-125" :
                      item.class + " w-8 h-8 rounded-full cursor-pointer"}
                    onClick={() => selectColor(index)}></div>
                )
              })}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-xl text-center mb-2">Size</p>
            <div className="grid grid-cols-4 gap-2">
              {data[numProduct].sizes.map((item, index) => {
                return(
                  <>
                    {item.inStock ? <div key={index} className={item.selectSize ? "p-4 border border-blue-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100" : "p-4 border border-gray-500 rounded-md cursor-pointer flex justify-center hover:bg-gray-100"} 
                        onClick={()=>selectSize(index)}>{item.name}</div> :
                      <div key={index} className="p-4 border border-gray-500 text-gray-400 rounded-md cursor-not-allowed flex justify-center">{item.name}</div>}
                  </>
                )
              })}
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold w-full p-2 rounded-xl mt-4" onClick={addCart}>Add To Cart </button>
        </div>
      </div>
    </div>
  )
}

export default Alert;