import Logo from "./Logo.js"
import MainMenu from "./MainMenu.js"


// import Search from "./Search"
// import UserSection from "./UserSection"
// import { BiMenu } from "react-icons/bi";
// import TopBar from "./TopBar"
// import Logo from "./Logo"
// import StickyBar from "./StickyBar"

export default function SiteHeader( {className} ){

  

    return (
        <header className={`relative w-full z-20`}>
           
           <div className="lg:container mx-auto lg:max-w-6xl  px-4 lg:px-0">
                <div className="flex items-center justify-between gap-x-4">
                    
                    <Logo className=""/>
                    <MainMenu className="hidden lg:block bg-alfa-gray-1"/>
                </div>
            </div>
            
        </header>
    )
}