import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src="/logo.svg" alt="logo" width={118} height={18} className='object-contain'></Image>
                <p className='text-base text-gray-700'>
                    Carhub 2024 <br />
                    All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((item) => (
                    <div key={item.title} className='footer__link'>
                        <h3 className='font-bold'>{item.title}</h3>
                        {item.links.map((link)=> (
                            <Link 
                            href={link.url} 
                            key={link.title} 
                            className="text-gray-500">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer