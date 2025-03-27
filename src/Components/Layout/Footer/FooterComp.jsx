import { ArrowBigDown, CaseLower } from 'lucide-solid';
import './FooterStyles.css';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function FooterComp() {
    return (
        <div className="footer-bg mt-3 p-5 text-white flex flex-col md:flex-row justify-center items-center flex-wrap gap-5">
            <div className='w-full md:w-1/3 lg:w-1/4 text-center md:text-left'>
                <h3 className='font-bold text-lg'>E-Commerce</h3>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh massa, sollicitudin quis dictum sed, fringilla et ex.</p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/4 text-center md:text-left'>
                <h3 className='font-bold text-lg'>About Us</h3>
                <ul className='text-sm mt-3'>
                    <li>Our Partners</li>
                    <li>Career</li>
                    <li>Customer Services</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/4 text-center md:text-left'>
                <h3 className='font-bold text-lg'>Social Media</h3>
                <ul className='text-sm mt-3'>
                    <li>
                        <span className="flex items-center justify-center md:justify-start gap-2">
                            <Instagram size={10} />
                            Instagram
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center justify-center md:justify-start gap-2">
                            <Facebook size={10} />
                            Facebook
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center justify-center md:justify-start gap-2">
                            <Twitter size={10} />
                            Twitter
                        </span>
                    </li>
                    <li>
                        <span className="flex items-center justify-center md:justify-start gap-2">
                            <Linkedin size={10} />
                            Twitter
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
