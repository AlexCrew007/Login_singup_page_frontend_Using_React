import React from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../assets/logo.png'

export const Navbar = ({isLogin,setIsLogin}) => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to={'/'}>
                <img src={logo} width={150} height={80} loading='lazy' alt='logo'></img>
            </Link>
        <nav>
            <ul className='text-slate-100 flex gap-x-6 text-white'>
                <li>
                    <Link to={'/'}><button>Home</button></Link>
                </li>
                <li>
                    <Link to={'/about'}><button>About</button></Link>
                </li>
                <li>
                    <Link to={'/contact'}><button>Contact</button></Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
            { !isLogin &&
                <Link to={'/signup'}><button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>Sing up</button></Link>
            }
            { !isLogin &&
                <Link to={'/login'}><button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>Log in</button></Link>
            }
            {isLogin &&
                <Link to={'/'}><button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700' onClick={ () =>{setIsLogin(false)
                                                        toast.success('Logged Out')}}>Log Out</button></Link>
            }
            {isLogin &&
                <Link to={'/dashboard'}><button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>Dashboard</button></Link>
            }
        </div>
    </div>
    
  )
}

export default Navbar;