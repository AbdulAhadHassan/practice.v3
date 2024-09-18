import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react"
import { ThemeContext } from "../context/themeContext";


function Navbar() {

const {theme, setTheme} = useContext(ThemeContext)

  return (
   <header className={`
  ${theme === "light" ? "bg-white text-grey-600" : "bg-black text-white"}
  text-gray-600 body-font`}>
    
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5  hover:text-gray-700">Home</Link>
          <Link to="/Products" className="mr-5 hover:text-gray-700">Product</Link>
          <a className="mr-5 hover:text-gray-700">Third Link</a>
          <a className="mr-5 hover:text-gray-700">Fourth Link</a>
          
        </nav>
        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0" onClick={()=>{
          if(theme == "light"){
            setTheme("dark")
          }else{
            setTheme("light")
          }
        }}>
          Change Theme
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar