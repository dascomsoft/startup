'use client'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import hero from '../images/hero.jpg'
import './page.css'
import agreement from '../images/agreement.png'
import money from '../images/money.png'
import approval from '../images/approval.png'
import cash from '../images/cashless-payment.png'
import fund from '../images/fund.png'
import file from '../images/file-upload.png'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import { products } from "@/helper/products"


function Home() {



  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel data - can be dynamic or fetched from an API
  const slides = [

    {
      id: 1,
      content: 'Being part of Startups Market has been a transformative experience.',
      image: pic1,
      name: 'Milan Johnie',
      role: 'Manager'
    }

    ,
    {
      id: 2,
      content: 'Being part of Startups Market has been a transformative experience..',
      image: pic2,
      name: 'Godson Edgard',
      role: 'Founder'
    },


    {
      id: 3,
      content: 'Being part of Startups Market has been a transformative experience.',
      image: pic3,
      name: 'Erickson Tom',
      role: 'CEO'
    },
  ];

  // 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    // 
    return () => clearInterval(interval);
  }, [slides.length]);



  return (
    <div className="main">
      <div className="home-hero pt-[10rem] pb-[5rem] lg:py-[15rem]">
        <div className="container mx-auto px-4">
          <div className="home-content">
            <h1 className="text-5xl font-semibold">Empowering <span className="text-red-600">Startups </span>to Thrive <br /> in a Digital World</h1>
            <p className="mt-5 text-xl font-semibold">Discover Innovation, Connect with Opportunities, and Fuel Your Entrepreneurial Journey...</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="home-section pt-[4rem] pb-[4rem] lg:py-[7rem]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">How <span className="text-red-600">Startups Market</span> Works 🤔</h1>
            <p className="mt-2">The Simple Steps to Buying and Selling on Startups Market</p>
          </div>
          <div className="home-content grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            <div className="flex flex-col items-center tWall Of Loveext-center shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={agreement} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Agreements</h1>
                <p>All sides sign an agreement.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={file} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Uploding Business Listing</h1>
                <p>Seller upload their business as listing..</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={cash} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Payments</h1>
                <p>Buyer makes secure payment..</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={approval} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Buyer Approval</h1>
                <p>Buyer approves Order.</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={fund} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Assets Transfer</h1>
                <p>Seller delivers assets to buyer..</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={fund} alt="agreement picture" id="home-image" />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Funds Release</h1>
                <p>Seller gets paid. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deal-section">
        <div className="container mx-auto px-4">
          <div className="pt-[1rem] pb-[1rem] lg:py-[1rem]">
            <h1 className="text-4xl font-semibold">Recently <span className="text-red-600">Closed</span> Deal </h1>
            <p className="mt-2">Browse the most recent closed deals.</p>
          </div>
          <div className="deal-content pb-[4rem]">
            <div className="deal-detail grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map(function (product) {
                return (
                  <div key={product.id}>
                    <Link href={`/${product.id}`}>
                      <div  className="border-2 border-gray-200 cursor-pointer relative">
                        <Image src={product.image} alt='image product' className="w-full relative" />
                        <div className="p-5 grid grid-cols-1 gap-4">
                          <h1 className="text-2xl font-semibold">{product.title}</h1>
                          <div className="flex items-center flex-wrap gap-2">
                            <p className="bg-orange-600 font-semibold text-white px-10 py-1">${product.price}</p>
                            <p className="px-10 py-1 border-2 border-gray-200 text-red-500">Sold out</p>
                          </div>
                          <div className="flex items-center">
                            <svg fill="red" width="20px" height="20px" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>money</title><path d="M59.16,11.18H12.83a5.39,5.39,0,0,0-5.22,5.56V39.18a6.77,6.77,0,0,0,1.88,4.38,5.54,5.54,0,0,0,3.34,1.26H59.16a5.47,5.47,0,0,0,5.23-5.64V16.74A5.4,5.4,0,0,0,59.16,11.18Zm1.34,21.7a12.27,12.27,0,0,0-7,7.74h-35a13,13,0,0,0-7-7.66V23A11.59,11.59,0,0,0,16,19.79a13,13,0,0,0,2.53-4.48h35a11.52,11.52,0,0,0,7,7.76v9.81Z" /><path d="M36,18c-5.09,0-9.21,4.45-9.21,9.94s4.12,9.93,9.21,9.93,9.21-4.45,9.21-9.93S41,18,36,18Zm.75,15.62v1.86H35.09V33.79a6.25,6.25,0,0,1-2.9-.79l.5-2.14a5.68,5.68,0,0,0,2.82.8c1,0,1.63-.4,1.63-1.13s-.54-1.14-1.8-1.6c-1.82-.66-3.06-1.58-3.06-3.36a3.31,3.31,0,0,1,2.88-3.27V20.55h1.68v1.63a5.82,5.82,0,0,1,2.45.6l-.49,2.08a5.26,5.26,0,0,0-2.46-.63c-1.1,0-1.46.51-1.46,1s.59,1,2,1.58c2,.77,2.83,1.78,2.83,3.43A3.43,3.43,0,0,1,36.71,33.66Z" /></svg>
                            <p className="ms-2"><span className="font-bold">ARR</span>:${product.arrprice}</p>
                          </div>
                          <div className="flex items-center">
                            <svg fill="red" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                              <title>coins</title>
                              <path d="M28.5 23h-12.246c0.359-0.619 0.634-1.29 0.816-2h11.43c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 20h-11.236c0.041-0.328 0.069-0.661 0.069-1 0-0.34-0.028-0.672-0.069-1h11.236c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 17h-11.43c-0.183-0.71-0.457-1.381-0.816-2h12.246c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 14h-12.928c-0.65-0.811-1.453-1.493-2.369-2h15.297c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 11h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM28.5 8h-16c-0.553 0-1-0.448-1-1 0-0.553 0.447-1 1-1h16c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1zM16.5 19c0 3.866-3.135 7-7 7s-7-3.134-7-7 3.134-7 7-7c3.865 0 7 3.134 7 7zM11.978 19.761c-0.101-0.239-0.231-0.447-0.394-0.624s-0.348-0.329-0.556-0.456c-0.208-0.127-0.42-0.24-0.637-0.341-0.217-0.1-0.429-0.194-0.637-0.284-0.208-0.089-0.395-0.185-0.559-0.287s-0.296-0.219-0.394-0.35c-0.098-0.131-0.147-0.286-0.147-0.466 0-0.12 0.022-0.234 0.065-0.342 0.044-0.107 0.11-0.2 0.2-0.277 0.089-0.076 0.201-0.137 0.334-0.18 0.133-0.044 0.29-0.065 0.469-0.065 0.229 0 0.439 0.027 0.631 0.083 0.191 0.057 0.36 0.118 0.506 0.187 0.146 0.068 0.269 0.131 0.369 0.189s0.173 0.086 0.219 0.086 0.082-0.012 0.109-0.037c0.026-0.025 0.048-0.064 0.062-0.119 0.015-0.054 0.024-0.123 0.031-0.206 0.006-0.084 0.009-0.187 0.009-0.308 0-0.108-0.002-0.199-0.006-0.271s-0.012-0.134-0.021-0.182c-0.011-0.048-0.023-0.087-0.037-0.116-0.016-0.029-0.043-0.064-0.085-0.105s-0.127-0.094-0.256-0.155c-0.129-0.062-0.277-0.118-0.443-0.167-0.167-0.050-0.346-0.089-0.537-0.118-0.039-0.006-0.079-0.004-0.118-0.009v-1.034h-0.984v1.034c-0.181 0.024-0.356 0.060-0.526 0.109-0.331 0.096-0.618 0.24-0.862 0.434s-0.438 0.438-0.581 0.73c-0.144 0.294-0.215 0.634-0.215 1.021 0 0.337 0.050 0.627 0.149 0.868s0.23 0.451 0.391 0.628c0.161 0.177 0.342 0.328 0.546 0.455 0.204 0.128 0.415 0.241 0.631 0.341s0.427 0.194 0.631 0.284 0.386 0.186 0.546 0.287c0.161 0.103 0.291 0.219 0.391 0.35 0.1 0.132 0.15 0.289 0.15 0.472 0 0.159-0.029 0.303-0.087 0.433s-0.143 0.237-0.253 0.325c-0.11 0.088-0.244 0.155-0.402 0.203-0.159 0.048-0.337 0.072-0.538 0.072-0.304 0-0.572-0.034-0.803-0.103s-0.43-0.145-0.597-0.229c-0.167-0.083-0.303-0.158-0.409-0.228-0.106-0.068-0.188-0.103-0.247-0.103-0.042 0-0.079 0.012-0.109 0.034-0.032 0.023-0.057 0.062-0.075 0.116-0.019 0.055-0.032 0.125-0.041 0.213s-0.013 0.196-0.013 0.325c0 0.192 0.012 0.339 0.034 0.441 0.023 0.103 0.062 0.181 0.116 0.234s0.142 0.115 0.265 0.186 0.276 0.137 0.459 0.201c0.183 0.063 0.395 0.118 0.634 0.164 0.239 0.045 0.499 0.067 0.778 0.067 0.012 0 0.023-0.002 0.036-0.002v0.963h0.983v-1.092c0.047-0.012 0.097-0.018 0.143-0.031 0.362-0.108 0.679-0.27 0.95-0.484s0.485-0.481 0.644-0.802c0.158-0.321 0.236-0.693 0.236-1.118 0.001-0.323-0.049-0.604-0.148-0.844zM15.572 24h12.928c0.553 0 1 0.447 1 1 0 0.552-0.447 1-1 1h-15.297c0.916-0.507 1.719-1.189 2.369-2z"></path>
                            </svg>
                            <p className="ms-2"><span className="font-bold">SARR</span>:${product.sarrprice}</p>
                          </div>
                          <div className="flex items-center">
                            <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="red"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z" /></svg>
                            <p className="ms-2"><span className="font-bold">Launched</span>:{product.date}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="flex items-center p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-tags-fill footer-icon rounded-full bg-orange-600 p-2" viewBox="0 0 16 16">
                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"></path>
                          </svg>
                          <p className="ms-2">{product.subtitle}</p>
                        </div>
                        <div className="flex flex-col gap-2 absolute top-7 left-7">
                          <p className="bg-yellow-500 text-white p-1 px-5">Feature</p>
                          <p className="bg-red-600 text-white p-1 px-7">Popular</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div >
      </div>
      <div className="testimony-section py-[4rem] text-black bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-3xl font-semibold">Wall Of Love 😍</h1>
            <p className="text-xl">What our sellers are saying about us</p>
          </div>
          <div className="testiomony-content">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
                <Image src={pic1} className='rounded-full' width={50} height={50} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Tommy Lee</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={pic2} className='rounded-full' width={50} height={50} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Angelo Parker</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={pic3} className='rounded-full' width={50} height={50} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Anderson Nick</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={pic1} className='rounded-full' width={50} height={50} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Kim Nilson</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

      <div className="note-section py-[5rem]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-center">Join <span className="text-red-600 font-semibold">the Startups Market </span> Today💪</h1>
          <div className="bg-orange-600 p-[50px] text-white rounded-lg mt-10">
            <div className="grid place-items-center md:grid-cols-2 gap-10">
            <p className="text-xl">Are you ready to enter the dynamic world of small business transactions? Start buying and selling with confidence on Startups Market, where every transaction is a step toward entrepreneurial success. Discover, connect, and transact with Startups Market  your premier marketplace for small business opportunities</p>
            <Link href="/register" className="bg-white text-red-500 px-10 py-3 rounded-lg">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home