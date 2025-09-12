import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-indigo-700 px-10 py-20 gap-10 flex justify-between w-[1440] m-auto'>
            <div>
                <Link href={"/"}>
                    <Image src="/MovieZLogoDark.png"
                        alt="logo" width={120} height={100} priority={true}
                        className="cursor-pointer w-40 h-auto"
                    />
                </Link>
            </div>
        </div>


    )
}
export default Footer;