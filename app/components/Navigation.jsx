'use client'
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  
  return( 
    <>
        <div className="fixed w-full top-0 md:hidden z-10 p-6 bg-white">
            <button onClick={handleClick} className="flex flex-col justify-center items-center">
              <span className={`bg-steel-500 block transition-all duration-300 ease-out bg-black
                              h-0.5 w-6 rounded-sm ${isOpen ?
                              'rotate-45 translate-y-1' : '-translate-y-1'
                              }`} >
              </span>
              <span className={`bg-steel-500 block transition-all duration-300 ease-out self-start bg-black
                              h-0.5 w-4 rounded-sm my-0.5 ${isOpen ?
                              'opacity-0' : 'opacity-100'
                              }`} >
              </span>
              <span className={`bg-steel-500 block transition-all duration-300 ease-out bg-black
                              h-0.5 w-6 rounded-sm ${isOpen ?
                              '-rotate-45 -translate-y-1' : 'translate-y-1'
                              }`} >
              </span>
            </button>
        </div>
        <nav className={`bg-white w-full h-full md:block pt-24 pl-20 pr-6 md:pt-10 fixed top-0 md:w-[210px] lg:w-[250px] transition-transform md:translate-y-0 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <ul className="text-2xl tracking-tighter flex flex-col items-start md:items-end gap-7 text-gray-400">
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/">Home</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/about">About</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/research">Research</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/tools">Tools</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/media" className="text-nowrap">Media / Talks</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/posts">Posts</Link></li>
            <li className="hover:text-black transition-colors uppercase"><Link onClick={handleClick} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </>
  );
}
