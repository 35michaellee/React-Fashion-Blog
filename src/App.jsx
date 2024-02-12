import { useState } from 'react'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const articlesData = [
    {
      id: "OnTheStreet",
      title: "On the Street in Brooklyn",
      imagesrc: "./images/Streets.jpeg", // Adjusted path
      alt: "StreetsIMG",
      text: "Blfhahf orem ipsum dolor sit amet, consecdo eiusmod tempor incididunt ut labore ett enim ad minnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "VintageInVogue",
      title: "Vintage in Vogue",
      imagesrc: "./images/Streets.jpeg", // Adjusted path
      alt: "Vintage in VogueIMG",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
 const navLinks = ["Home", "Women's", "Men's", "On The Street", "The CatWalk", "Tips"];

  return (
    <>
     
      <Header links={navLinks.slice(0, -1)} /> 
       <Article {...articlesData[0]} /> 
      <Article  {...articlesData[1]}/> 
      <Footer links={navLinks} /> 
    </>
  )
}

export default App
