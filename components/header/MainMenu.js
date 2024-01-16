import Link from "next/link"

export default function MainMenu({className}){

    return (
        <nav className={`${className} `}>
            <ul className="container mx-auto lg:max-w-6xl py-3 flex w-full items-center justify-center">
                
                <li className="group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href="/workouts"
                        >
                        Workouts
                    </Link>

                    <ul className="invisible absolute z-50 flex w-auto flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                        <li>
                            <Link
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/products/tires?filter_reifentyp=winterreifen&filter_breite=205&filter_hoehe=55&filter_zoll=16'}
                            >
                                Winter
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="whitespace-nowrap my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/products/tires?filter_reifentyp=allwetterreifen&filter_breite=205&filter_hoehe=55&filter_zoll=16'}
                            >
                                All Season
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/products/tires?filter_reifentyp=sommerreifen&filter_breite=205&filter_hoehe=55&filter_zoll=16'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Summer
                            </Link>

                        </li>
                        
                    </ul>

                </li>
                
                <li className="group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href={'/products/rims'}
                        >
                        Felgen
                    </Link>
                    
                </li>
                
                <li className="group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href={'/configurator'}
                        >
                        Configurator
                    </Link>
                    
                </li>

                
                <li className="group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href="/products/accessories"
                        >
                        Zubehoer
                    </Link>

                    <ul
                        className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible uppercase"
                    >
                        <li>
                            <Link
                                href={'/products/tires'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Deckel
                            </Link>

                        </li>
                     
                    </ul>

                </li>
                
                
                <li className="group relative cursor-pointer py-2 uppercase">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href="/blog"
                        >
                        Blog
                    </Link>
                </li>

                <li className="group relative cursor-pointer py-2">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href="/produkte/tires"
                        >
                        Tires
                    </Link>

                    <ul className="invisible absolute z-50 flex w-auto flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                        <li>
                            <Link
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/produkte/tires?season=Winter&width=205&height=55&zoll=16&'}
                            >
                                Winter
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="whitespace-nowrap my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase"
                                href={'/produkte/tires?season=All%20Season&width=205&height=55&zoll=16&'}
                            >
                                All Season
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/produkte/tires?season=Summer&width=205&height=55&zoll=16&'}
                                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-black md:mx-2 uppercase" 
                                >
                                Summer
                            </Link>

                        </li>
                        
                    </ul>

                </li>

                <li className="group relative cursor-pointer py-2 uppercase">
                    <Link
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 uppercase"
                        href="/produkte/rims"
                        >
                        Rims
                    </Link>
                </li>

            </ul>
            
        </nav>
    )
}