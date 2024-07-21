import Card from "./compnent/card"
import NavBar from "./compnent/nav-bar"
import Sale from "./compnent/sale"
import productOne from './assets/card/product-1.jpg'
import productTwo from './assets/card/product-2.jpg'
import productThree from './assets/card/product-3.jpg'
import productFour from './assets/card/product-4.jpg'
import Wishlist from './compnent/wishlist'
import LogIn from "./compnent/log-in"
import { useState } from "react"
import Alert from "./compnent/alert"
import Cart from "./compnent/cart"
import bag1 from './assets/card/bag/bag1.webp'
import bag2 from './assets/card/bag/bag2.jpg'
import bag3 from './assets/card/bag/bag3.webp'
import bag4 from './assets/card/bag/bag4.png'
import sun1 from './assets/card/glasses/glasses1.jpg'
import sun2 from './assets/card/glasses/glasses2.webp'
import sun3 from './assets/card/glasses/glasses3.webp'
import sun4 from './assets/card/glasses/glasses4.webp'
import boot1 from './assets/card/boots/boots1.webp'
import boot2 from './assets/card/boots/boots2.jpg'
import boot3 from './assets/card/boots/boots3.webp'
import boot4 from './assets/card/boots/boots4.jpg'
import pants1 from './assets/card/pants/pants1.jpg'
import pants2 from './assets/card/pants/pants2.jpg'
import pants3 from './assets/card/pants/pants3.jpg'
import pants4 from './assets/card/pants/pants4.webp'
import shose1 from './assets/card/shose/shose1.jpg'
import shose2 from './assets/card/shose/shose2.webp'
import shose3 from './assets/card/shose/shose3.jpg'
import shose4 from './assets/card/shose/shose4.jpg'
import sport1 from './assets/card/sport/sport1.jpg'
import sport2 from './assets/card/sport/sport2.webp'
import sport3 from './assets/card/sport/sport3.jpg'
import sport4 from './assets/card/sport/sport4.webp'
import hat1 from './assets/card/hat/hat1.jpg'
import hat2 from './assets/card/hat/hat2.jpg'
import hat3 from './assets/card/hat/hat3.jpg'
import hat4 from './assets/card/hat/hat4.jpg'


function App() {
  const product = [
    {id: 0,
    name: 'T-Shirt ',
    price: '$170',
    rating: 4,
    lover: false,
    cart: false,
    outImage: productOne,
    insideImage: [
      productOne,
      productTwo,
      productThree,
      productFour
    ],
    colors: [
      { class: 'bg-white', selectColor: false},
      { class: 'bg-gray-600', selectColor: false},
      { class: 'bg-gray-900', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: true, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 1,
    name: 'Bag ',
    price: '$250',
    rating: 4.8,
    lover: false,
    cart: false,
    outImage: bag1,
    insideImage: [
      bag1,
      bag2,
      bag3,
      bag4
    ],
    colors: [
      { class: 'bg-blue-500', selectColor: false},
      { class: 'bg-black', selectColor: false},
      { class: 'bg-yellow-300', selectColor: false},
      { class: 'bg-red-500', selectColor: false}
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: false, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: false, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 2,
    name: 'Sun glasses',
    price: '$80',
    rating: 2.9,
    lover: false,
    cart: false,
    outImage: sun1,
    insideImage: [
      sun1,
      sun2,
      sun3,
      sun4
    ],
    colors: [
      { class: 'bg-white', selectColor: false},
      { class: 'bg-black', selectColor: false},
      { class: 'bg-red-500', selectColor: false},
      { class: 'bg-gray-700', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: true, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: false, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 3,
    name: 'Boots',
    price: '$220',
    rating: 4.9,
    lover: false,
    cart: false,
    outImage: boot3,
    insideImage: [
      boot1,
      boot2,
      boot3,
      boot4
    ],
    colors: [
      { class: 'bg-black', selectColor: false},
      { class: 'bg-amber-700', selectColor: false},
      { class: 'bg-blue-500', selectColor: false},
      { class: 'bg-amber-900', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: false, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 4,
    name: 'Pants',
    price: '$200',
    rating: 3.9,
    lover: false,
    cart: false,
    outImage: pants3,
    insideImage: [
      pants1,
      pants2,
      pants3,
      pants4 
    ],
    colors: [
      { class: 'bg-orang-600', selectColor: false},
      { class: 'bg-gray-600', selectColor: false},
      { class: 'bg-gray-900', selectColor: false},
      { class: 'bg-zinc-700', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: true, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 5,
    name: 'Shoes',
    price: '$300',
    rating: 4.2,
    lover: false,
    cart: false,
    outImage: shose1,
    insideImage: [
      shose1,
      shose2,
      shose3,
      shose4
    ],
    colors: [
      { class: 'bg-white', selectColor: false},
      { class: 'bg-gray-600', selectColor: false},
      { class: 'bg-gray-900', selectColor: false},
      { class: 'bg-zinc-800', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: true, selectSize: false},
      { name: 'S', inStock: true, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: false, selectSize: false},
    ],},
    {id: 6,
    name: 'Sports shoes ',
    price: '$500',
    rating: 5,
    lover: false,
    cart: false,
    outImage: sport4,
    insideImage: [
      sport1,
      sport2,
      sport3,
      sport4
    ],
    colors: [
      { class: 'bg-white', selectColor: false},
      { class: 'bg-gray-600', selectColor: false},
      { class: 'bg-gray-900', selectColor: false},
      { class: 'bg-pink-500', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: false, selectSize: false},
      { name: 'XS', inStock: false, selectSize: false},
      { name: 'S', inStock: false, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: true, selectSize: false},
    ],},
    {id: 7,
    name: 'Hat',
    price: '$120',
    rating: 3.6,
    lover: false,
    cart: false,
    outImage: hat1,
    insideImage: [
      hat1,
      hat2,
      hat3,
      hat4
    ],
    colors: [
      { class: 'bg-gray-600', selectColor: false},
      { class: 'bg-gray-900', selectColor: false},
      { class: 'bg-amber-900', selectColor: false},
      { class: 'bg-amber-800', selectColor: false},
    ],
    sizes: [
      { name: 'XXS', inStock: true, selectSize: false},
      { name: 'XS', inStock: true, selectSize: false},
      { name: 'S', inStock: true, selectSize: false},
      { name: 'M', inStock: true, selectSize: false},
      { name: 'L', inStock: true, selectSize: false},
      { name: 'XL', inStock: true, selectSize: false},
      { name: 'XXL', inStock: true, selectSize: false},
      { name: 'XXXL', inStock: true, selectSize: false},
    ],},
  ]
  const [data, setData] = useState(product)
  const [dataCartSave, setDataCartSave] = useState([])
  const [alert, setAlert] = useState(false) 
  const [numProduct, setNum] = useState(0)
  const [wishlist, setWishlist] = useState(false)
  const [cart, setCart] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const openAlert = (state, index) => {
    setAlert(state)
    setNum(index)
  }

  const [search, setSearch] = useState("")
  const filterData = data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()));
  

  return (
    <>
      {alert && <Alert data={filterData} numProduct={numProduct} closeA={setAlert} newData={setData} dataCartReception={setDataCartSave} dataCart={dataCartSave}/>}
      {wishlist && <Wishlist data={data} closeW={setWishlist} newData={setData}/>}
      {cart && <Cart data={dataCartSave} closeC={setCart} dataCartReception={setDataCartSave} />}
      {logIn && <LogIn closeL={setLogIn} />}
      <NavBar openW={setWishlist} openC={setCart} openL={setLogIn} search={search} setSearch={setSearch}/>
      <Sale />
      <Card data={filterData} openA={openAlert} newData={setData}/>
    </>
  )
}

export default App
