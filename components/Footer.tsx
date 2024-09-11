
import Link from "next/link"
import Image from "next/image"
import logo from '../images/logo.jpg'


const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="section-footer py-[4rem]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
                        <div className="footer-detail">
                            <Image src={logo} alt='logo picture' width={250} className="mb-5" />
                            <p>Startups Market is your GO-TO platform for SEAMLESSLY buying and selling small startups and businesses. We UNDERSTAND the unique needs of entrepreneurs in the micro and small business space, and our DEDICATED marketplace is DESIGNED to EMPOWER you to navigate the world of digital entrepreneurship with EASE</p>
                            <div className="flex items-center mt-5">
                                <span>
                                    <svg fill="red" width="30px" height="30px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMinYMin" className="jam jam-facebook icon rounded-full border-2 border-red-600 p-1">
                                        <path
                                            d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' />
                                    </svg>
                                </span>
                                <span>
                                    <svg fill="red" width="30px" height="30px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMinYMin" className="jam jam-instagram ms-2 icon rounded-full border-2 border-red-600 p-1">
                                        <path
                                            d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' />
                                        <path
                                            d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' />
                                        <circle cx='15.156' cy='4.858' r='1.237' />
                                    </svg>
                                </span>
                                <span>
                                    <svg className='ms-2 icon rounded-full border-2 border-red-600 p-1' fill="red" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        data-name="Layer 1">
                                        <path
                                            d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg className="ms-2 icon rounded-full border-2 border-red-600 p-1" width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
                                        <path fill="red" fill-rule="evenodd"
                                            d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.754 1.754 0 01-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.754 1.754 0 01-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289zm-3.24 4.612l-3.645 2.1V5.9l3.644 2.11z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>

                        </div>
                        <div className="footer-detail ">
                            <h5 className="font-extrabold text-2xl mb-3">Categories</h5>
                            <div className="flex flex-col gap-[5px]">
                                <p><Link className="hover:text-yellow-500" href="#">Add-ons</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Agencies</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Mobiles Apps</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Blogs</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Browser extensions</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Databases</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Sass Businesses</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Directory Websites</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Info Products</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Wordpress Business</Link></p>
                            </div>

                        </div>
                        <div className="footer-detail ">
                            <h5 className="font-extrabold text-2xl mb-3">Explore</h5>
                            <div className="flex flex-col gap-[5px]">
                                <p><Link className="hover:text-yellow-500" href="#">Marketplace Websites</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Shopify Apps</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Newsletters</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Startup Businesses</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Community Apps</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Ecommerce Businesses</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Market-Places</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Wix Products</Link></p>
                                <p><Link className="hover:text-yellow-500" href="#">Web Development</Link></p>
                            </div>
                        </div>
                        <div className="footer-detail ">
                            <h5 className="font-extrabold text-2xl mb-3">Important Links</h5>
                            <div className="flex flex-col gap-[5px]">
                                <p><Link className="hover:text-yellow-500" href="/">Home</Link></p>
                                <p><Link className="hover:text-yellow-500" href="/about">About Us</Link></p>
                                <p><Link className="hover:text-yellow-500" href="contact">Contact Us</Link></p>
                                <p><Link className="hover:text-yellow-500" href="/">Dashboard</Link></p>
                                <p><Link className="hover:text-yellow-500" href="register">Register</Link></p>
                                <p><Link className="hover:text-yellow-500" href="/login">Login</Link></p>
                                <p><Link className="hover:text-yellow-500" href="/">Privacy policy</Link></p>
                                <p><Link className="hover:text-yellow-500" href="/">Terms and Conditions</Link></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="banner-contact bg-orange-600 text-white pt-[2rem] pb-[1rem]">
                <h1 className='text-xl font-bold text-center'>©2024 | Startups Market | All Rights Reserved.</h1>
            </div>
        </div>
    )
}

export default Footer