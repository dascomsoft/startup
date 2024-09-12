
import './about.css'
import Image from 'next/image'
import aboutimage from '../../images/about-pic.jpg'
import Link from 'next/link'
import agreement from '../../images/agreement.png'
import money from '../../images/money.png'
import approval from '../../images/approval.png'
import cash from '../../images/cashless-payment.png'
import fund from '../../images/fund.png'
import file from '../../images/file-upload.png'
import pic1 from '../../images/pic1.png'
import pic2 from '../../images/pic2.png'
import pic3 from '../../images/pic3.png'


function About() {
  return (
    <div>
      <div className="home-hero pt-[10rem] pb-[5rem] ">
        <div className="container mx-auto px-4">
          <div className="home-content">
            <p className='text-5xl mb-4'>👋</p>
            <h1 className="text-5xl font-semibold">Startups Market</h1>
            <p className="mt-5 text-xl font-semibold mb-10">Empowering Micro Startups and Small Businesses to Thrive Online</p>
            <Link href="/contact" className='font-semibold bg-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-900 text-white px-12 py-3 rounded-full'>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='about-section pt-[5rem] pb-[5rem] bg-stone-100'>
        <div className="container mx-auto px-4">
          <div className="about-text grid md:grid-cols-2 gap-10">
            <div>
              <h1 className='text-4xl font-semibold font-[poppins] mb-5'>Market Place</h1>
              <p className='mb-10'>Startups Market is your GO-TO platform for SEAMLESSLY buying and selling small startups and businesses. We UNDERSTAND the unique needs of entrepreneurs in the micro and small business space, and our DEDICATED marketplace is DESIGNED to EMPOWER you to navigate the world of digital entrepreneurship with EASE.At Startups Market, we believe in the potential of every business, no matter how small, and we have created a space where your entrepreneurial dreams can flourish. Our platform is not just about transactions; it is a HUB of opportunity, a meeting ground for visionaries and investors alike. Whether you are looking to acquire a promising startup or sell your hard-earned business, Startups Market is here to facilitate those transformative moments.</p>
              <Link href="/register" className='font-semibold bg-gray-700 transition-all duration-300 ease-in-out  hover:bg-green-900 text-white px-12 py-3 rounded-full'> Register Here</Link>
            </div>
            <Image src={aboutimage} className='w-full' alt='about picture' />
          </div>
        </div>
      </div>
      <div className="review-section py-[5rem] bg-stone-200">
        <div className="container mx-auto px-4">
          <div className='text-center mt-5'>
            <p className='text-5xl mb-3'>❓</p>
            <h1 className='text-4xl font-bold'>Why Startups Market?</h1>
          </div>
          <div className="review-text grid md:grid-cols-2 gap-10 mt-20">
            <div className='text-center shadow-lg p-7'>
              <h1 className='text-3xl font-semibold mb-3'>Tailored for You </h1>
              <p>Startups Market is crafted exclusively for those seeking opportunities in the micro startup and small business arena. Our platform offers a straightforward and user-friendly experience, ensuring that you can focus on what matters most - growing your business.</p>
            </div>
            <div className='text-center shadow-lg p-7'>
              <h1 className='text-3xl font-semibold mb-3'>Explore the Marketplace </h1>
              <p>Dive into our CURATED marketplace, where small business dreams become transactions. Discover a diverse array of startups ready for new ownership or showcase your business to potential buyers who align with your vision.</p>
            </div>
            <div className='text-center shadow-lg p-7'>
              <h1 className='text-3xl font-semibold mb-3'>No-frills buying and selling</h1>
              <p>Simplify the process of acquiring or selling a small business. Startups Market streamlines the transaction journey, making it easy for both buyers and sellers to connect, negotiate, and finalize deals..</p>
            </div>
            <div className='text-center shadow-lg p-7'>
              <h1 className='text-3xl font-semibold mb-3'>Support at your fingertips</h1>
              <p>Our platform is not just about transactions; it is about fostering a SUPPORTIVE community. Connect with our team for assistance or tap into our resources to make informed decisions about buying or selling a small business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestion-section py-[5rem]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">How <span className="text-red-600">Startups Market</span> Works 🤔</h1>
            <p className="mt-2">The Simple Steps to Buying and Selling on Startups Market</p>
          </div>
          <div className="home-content grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            <div className="flex flex-col items-center tWall Of Loveext-center shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={agreement} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Agreements</h1>
                <p>All sides sign an agreement.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={file} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Uploding Business Listing</h1>
                <p>Seller upload their business as listing..</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={cash} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Payments</h1>
                <p>Buyer makes secure payment..</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={approval} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Buyer Approval</h1>
                <p>Buyer approves Order.</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={fund} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Assets Transfer</h1>
                <p>Seller delivers assets to buyer..</p>
              </div>
            </div>
            <div className="flex flex-col items-center  text-center  shadow-lg p-6 bg-stone-100 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
              <Image src={fund} alt="agreement picture" id="home-image" width={60} height={60} />
              <div className="mt-2">
                <h1 className="font-semibold text-2xl">Funds Release</h1>
                <p>Seller gets paid. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="note-section py-[4rem]">
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

export default About