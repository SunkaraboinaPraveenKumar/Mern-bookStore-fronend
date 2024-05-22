import React, { useContext, useEffect, useState } from 'react'
import { FaBars, FaBlog } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../context/AuthProvider';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])
    //navigation
    const navItems = [
        { link: "Home", path: '/' },
        { link: "About", path: '/about' },
        { link: "Shop", path: '/shop' },
        { link: "Sell Your Book", path: '/admin/dashboard' },
        { link: "Blog", path: '/blog' },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-40'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base'>
                    {/* logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center'><FaBlog className='inline-block' />Books</Link>
                    {/* nav item for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                        }
                    </ul>
                    {/* btn for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBars className='w-5 hover:text-blue-700' /></button>
                        {
                            user && (
                                <a href="/" className='flex gap-2'>
                                    <img src={user?.photoURL} alt="user logo" className="w-10 h-10 rounded"/>
                                    <p className='text-sm'>
                                        {
                                            user?.displayName
                                        }
                                    </p>
                                </a>
                            )
                        }
                    </div>
                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none mb-3'>
                            {
                                isMenuOpen ? <RxCross2 className='h-5 w-5 text-black' /> : <FaBars className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>
                </div>
                {/* navitems for sm devices */}
                <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavBar