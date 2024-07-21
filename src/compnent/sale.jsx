import one from '../assets/sale/1.png'
import two from '../assets/sale/2.jpg'
import three from '../assets/sale/3.webp'
import four from '../assets/sale/4.jpg'
import five from '../assets/sale/5.webp'
import six from '../assets/sale/6.png'
import right from '../assets/sale/right.png'
import left from '../assets/sale/left.png'
import doneSelecte from '../assets/sale/selecte.png'
import noneSelecte from '../assets/sale/none-selecte.png'
import { useEffect, useState } from 'react'

const Sale = () => {
  const sale = [one, two, three, four, five, six]
  const [item, setItem] = useState(0)

  const pluse = () => {
    if(item !== sale.length - 1) {
      setItem(item + 1)
    } else {
      setItem(0)
    }
  }
  const minuse = () => {
    if (item !== 0) {
      setItem(item - 1)
    } else {
      setItem(sale.length - 1)
    }
  }


  const selecte = (index) => {
    setItem(index)
  }

  useEffect(() => {
    const intervalid = setInterval(() => {
      if(item !== sale.length - 1) {
        setItem(item + 1)
      } else {
        setItem(0)
      }
    }, 3000)
    return () => clearInterval(intervalid);
  }, [item])

  return (
    <div className= "relative w-4/5 mx-auto my-8 h-96">
      <div  className='group'>
        <div className='absolute w-16 h-16 right-4 top-[152px] bg-cover rounded-full bg-slate-300 opacity-60 flex items-center justify-center cursor-pointer hover:opacity-100 animate-bounce group-hover:animate-none focus:bg-black' onClick={pluse}>
          <img src={right} />
        </div>
        <div className='absolute w-16 h-16 left-4 top-[152px] bg-cover rounded-full bg-slate-300 opacity-60 flex items-center justify-center cursor-pointer hover:opacity-100 animate-bounceLeft group-hover:animate-none' onClick={minuse}>
          <img src={left} />
        </div>
      </div>
      <div className='flex absolute bottom-0 w-full items-center justify-center h-16'>
        {sale.map((it, index) => {
          return(
            <img key={index} src={index === item ? doneSelecte : noneSelecte} onClick={() => selecte(index)} className='cursor-pointer w-8 mx-2 hover:scale-125'/>
          )
        })}
      </div>
      <img src={sale[item]} className='w-full h-full'/>
    </div>
  )
}

export default Sale