import { ArrowBigDown, CaseLower } from 'lucide-solid';
import { Facebook, House, Instagram, InstagramIcon, Linkedin, LinkedinIcon, Mail, Phone, Twitter, TwitterIcon, Youtube } from 'lucide-react';
import { Divider } from '@mui/material';

export default function FooterComp() {
    return (
        <div className='bg-main py-10'>
            <div className="w-full mt-3 px-3 md:px-10 text-white  justify-center items-center grid grid-cols-1 md:grid-cols-4">
                <div className='w-full flex flex-col justify-center items-center md:items-start'>
                    <h3 className='font-bold text-lg'>E-Commerce</h3>
                    <p className='mt-2 w-[75%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh massa, sollicitudin quis dictum sed, fringilla et ex.</p>
                </div>
                <div className='w-full text-center md:text-left mt-5 md:mt-0'>
                    <h3 className='font-bold text-lg'>About Us</h3>
                    <ul className='text-sm mt-3'>
                        <li>Our Partners</li>
                        <li>Career</li>
                        <li>Customer Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='w-full text-center md:text-left mt-5 md:mt-0'>
                    <h3 className='font-bold text-lg'>Services</h3>
                    <ul className='text-sm mt-3'>
                        <li>
                            <span className="flex items-center justify-center md:justify-start gap-2">
                                Backend Programming
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center justify-center md:justify-start gap-2">
                                Software Support
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center justify-center md:justify-start gap-2">
                                SAP Support
                            </span>
                        </li>
                        <li>
                            <span className="flex items-center justify-center md:justify-start gap-2">
                                SQL Support
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='w-full text-center md:text-left mt-5 md:mt-0 text-sm'>
                    <h3 className='font-bold text-lg'>Contact</h3>
                    <div className='flex items-center justify-center md:justify-start gap-2'>
                        (333) 999 99 99
                        <Phone size={15} />
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2 mt-2'>
                        abc@gmail.com
                        <Mail size={15} />
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2 mt-2'>
                        Ankara / Türkiye / 06080
                        <House size={15} />
                    </div>
                </div>
            </div>
            <Divider sx={{
                backgroundColor: '#fff',
                marginX: 10,
                marginTop: 5
            }}></Divider>
            <div className=' py-3 text-white flex flex-col justify-center items-center'>
                <div className='font-bold'>
                    Copyright © 2025 Tüm Hakları Saklıdır.
                </div>
                <div className='flex flex-wrap justify-center items-center gap-2 mt-2'>
                    <InstagramIcon size={15} />
                    <Youtube size={15} />
                    <LinkedinIcon size={15} />
                    <TwitterIcon size={15} />
                </div>
            </div>
        </div>
    );
}
