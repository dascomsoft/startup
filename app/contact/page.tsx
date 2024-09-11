
import Link from "next/link"

function contact() {
  return (
    <div>
      <div className="banner-contact bg-orange-600 text-white pt-[10rem] pb-[5rem]">
        <h1 className='text-4xl font-bold text-center'>CONTACT US/</h1>
      </div>

      <div className="section-contact py-[6rem]">
        <div className="container mx-auto px-4">
          <div className='mb-20 text-center'>
            <h1 className='font-extrabold xl: text-3xl sm:text-3xl md:text-6xl  lg:text-7xl text-slate-900'>Get In Touch</h1>
            <p className='font-semibold'>Maximus mauris sceleri sque, at rutrum nulla dictum.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="">
              <h1 className="font-semibold text-3xl">CONTACT US</h1>
              <p className="py-[1rem] text-xl">We would love to speak with you.Feel free to reach out using the below details.</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <p>
                    <svg fill="orange" width="20px" height="20px" viewBox="-3 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group_31" data-name="Group 31" transform="translate(-241.002 -321.05)">
                        <path id="Path_296" data-name="Path 296" d="M267,349.05v-24a4,4,0,0,0-4-4H245a4,4,0,0,0-4,4v24a4,4,0,0,0,4,4h18A4,4,0,0,0,267,349.05Zm-22,0v-24h18v24Z" />
                        <rect id="Rectangle_6" data-name="Rectangle 6" width="10" height="12" transform="translate(249.002 329.05)" />
                        <rect id="Rectangle_7" data-name="Rectangle 7" width="18" height="4" transform="translate(245.002 345.05)" />
                      </g>
                    </svg>
                  </p>
                  <p className="ms-2 fw-bolder text-xl">Tel:+1-543-37-087</p>
                </div>
                <div className="flex items-center">
                  <p>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>

                  </p>
                  <p className="ms-2 text-xl">contact@startupsmarket.io</p>
                </div>
              </div>
            </div>
            <div>
              <form className=" w-full h-[38rem] md:h-[27rem]  bg-white border-2 border-slate-300 p-8  shadow-lg">
                <div className="grid md:grid-cols-2 gap-2">
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter your surname "
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                   <input
                  type="email"
                  id="email"
                  placeholder="Enter your phone number"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                </div>
                <textarea
                  name="message"
                  id="message"
                  cols={4} rows={4}
                  placeholder="Your message"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <input
                  type="button"
                  value="SUBMIT"
                  className="w-full p-4 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-600"
                  id="submit-btn"
                />
              </form>
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

export default contact