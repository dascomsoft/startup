
import { products } from '@/helper/products'
import deal1 from '../images/deal9.jpg'
import deal2 from '../images/deal2.jpg'
import deal3 from '../images/deal3.jpg'
import deal4 from '../images/deal4.jpg'
import deal5 from '../images/deal5.jpg'
import deal6 from '../images/deal6.jpg'
import deal7 from '../images/deal7.jpg'
import deal8 from '../images/deal9.jpg'
import deal9 from '../images/deal9.jpg'
import Image from 'next/image'
import './detail.css'



// Fonction pour générer les chemins statiques
export async function generateStaticParams() {
    const paths = products.map((product) => ({
        id: product.id.toString() // Assurez-vous que l'id est une chaîne de caractères
    }));

    return paths;
}


// Composant de détail du cours
const ProductDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const product = products.find((product) => product.id.toString() === id);

    if (!product) {
        return <p>Course not found</p>; // Gestion de la page non trouvée
    }

    return (
        <div>
            <div className="detail-content py-[10rem]">
                <div className="container mx-auto px-4">
                    <div className="block-content grid  md:grid-cols-[3fr_2fr] gap-10">
                        <div className='block-1 flex flex-col gap-6'>
                            <div className="shadow-xl border-2 border-gray-200 p-20">
                                <div className='py-[2rem] text-center'>
                                    <h1 className='text-3xl font-bold'>{product.title}</h1>
                                    <p className='text-xl'> Published on February 4, 2024</p>
                                </div>
                                <hr />
                                <Image src={product.image} alt='image picture' className='w-full' />
                            </div>
                            <div className='flex items-center shadow-xl border-2 border-gray-200 p-5'>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='ms-2 text-xl '>30 days of post-sale support included</p>
                            </div>
                            <div className='shadow-xl border-2 border-gray-200 p-5'>
                                <div dangerouslySetInnerHTML={{ __html: product.content }} />
                            </div>
                        </div>
                        <div className="block-2 h-[1100px] shadow-xl border-2 border-gray-200 p-20 lg:h-[900px] sticky top-0">
                            <div className='py-[2rem] text-center'>
                                <h1 className='text-3xl'>Asking Pricing</h1>
                                <h1 className='text-2xl font-bold'>${product.price}</h1>
                            </div>
                            <hr />
                            <div className='grid grid-cols-1 gap-4 py-[2rem]'>
                                <p className='p-4 bg-red-600 text-white rounded-lg text-center'>BUSINESS SOLD OUT</p>
                                <p className='p-4 border-2 border-gray-300 rounded-lg text-center'>VISIT STARTUP WEBSITE</p>
                            </div>
                            <hr />
                            <div className='description'>
                                <div className='flex flex-wrap place-items-center  text-center  lg:flex flex-col items-center gap-1 mt-4'>
                                    <svg fill="red" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>moneybag</title><path d="M14.017 9.302h3.934v-1.476h-3.934v1.476zM17.922 9.793h-3.905c0 0-6.425 6.333-6.425 12.542 0 6.579 6.732 7.102 6.732 7.102s2.008 0.333 3.257 0c0 0 6.826-0.8 6.826-7.070 0.001-6.272-6.485-12.574-6.485-12.574zM18.211 23.123c-0.158 0.32-0.371 0.588-0.643 0.802-0.271 0.215-0.588 0.376-0.949 0.484-0.046 0.014-0.096 0.019-0.143 0.031v1.092h-0.983v-0.964c-0.012 0.001-0.024 0.003-0.036 0.003-0.279 0-0.538-0.022-0.778-0.067s-0.45-0.101-0.634-0.164c-0.184-0.064-0.337-0.131-0.459-0.201s-0.212-0.132-0.266-0.186c-0.055-0.054-0.093-0.132-0.116-0.234-0.022-0.103-0.034-0.249-0.034-0.441 0-0.129 0.004-0.237 0.013-0.325s0.021-0.158 0.041-0.213c0.019-0.055 0.043-0.093 0.074-0.116 0.031-0.022 0.068-0.034 0.109-0.034 0.059 0 0.141 0.034 0.247 0.103s0.242 0.145 0.409 0.228c0.167 0.084 0.365 0.159 0.597 0.229 0.231 0.068 0.499 0.103 0.803 0.103 0.2 0 0.379-0.024 0.537-0.072s0.293-0.115 0.403-0.203c0.111-0.088 0.195-0.196 0.253-0.325 0.059-0.13 0.088-0.273 0.088-0.433 0-0.183-0.051-0.34-0.15-0.472-0.1-0.131-0.231-0.247-0.391-0.35-0.16-0.102-0.342-0.197-0.546-0.287s-0.415-0.185-0.631-0.284c-0.217-0.1-0.427-0.213-0.631-0.341-0.204-0.127-0.387-0.278-0.547-0.455s-0.29-0.387-0.391-0.628c-0.1-0.241-0.149-0.531-0.149-0.868 0-0.388 0.072-0.728 0.215-1.021s0.338-0.537 0.581-0.73c0.244-0.193 0.531-0.338 0.862-0.434 0.17-0.049 0.346-0.085 0.526-0.108v-1.035h0.983v1.034c0.040 0.005 0.079 0.003 0.118 0.009 0.191 0.029 0.371 0.068 0.537 0.118s0.314 0.105 0.443 0.167 0.215 0.113 0.256 0.155c0.043 0.041 0.070 0.076 0.086 0.105 0.014 0.029 0.025 0.068 0.037 0.116 0.010 0.048 0.018 0.108 0.021 0.182 0.004 0.072 0.006 0.163 0.006 0.271 0 0.121-0.004 0.224-0.010 0.308-0.006 0.083-0.016 0.152-0.031 0.206-0.014 0.055-0.035 0.094-0.062 0.119s-0.062 0.037-0.109 0.037c-0.045 0-0.119-0.028-0.219-0.086-0.1-0.059-0.223-0.121-0.367-0.189-0.146-0.068-0.314-0.13-0.506-0.187-0.193-0.056-0.403-0.083-0.631-0.083-0.18 0-0.336 0.021-0.469 0.065-0.134 0.043-0.245 0.104-0.335 0.18-0.089 0.077-0.156 0.17-0.199 0.277-0.044 0.107-0.065 0.222-0.065 0.342 0 0.18 0.049 0.335 0.146 0.466s0.229 0.248 0.394 0.35c0.164 0.103 0.351 0.198 0.56 0.287 0.208 0.090 0.42 0.185 0.637 0.284 0.217 0.101 0.428 0.214 0.637 0.341s0.395 0.279 0.557 0.456 0.293 0.385 0.393 0.624c0.1 0.24 0.15 0.521 0.15 0.847-0.001 0.422-0.081 0.794-0.239 1.115zM17.891 7.334l1.998-4.919c0 0-1.26 1.046-1.998 1.046s-1.907-1.015-1.907-1.015-1.26 1.015-1.998 1.015c-0.737 0-1.937-0.984-1.937-0.984l2.029 4.857h3.813z"></path></svg>
                                    <p><span className='font-bold'>Annual Recurring Revenue</span>:${product.arrprice}</p>
                                </div>
                                <div className='flex flex-wrap justify-center text-center  lg:flex flex-col items-center gap-1 mt-4'>
                                    <svg fill="red" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>moneybag</title><path d="M14.017 9.302h3.934v-1.476h-3.934v1.476zM17.922 9.793h-3.905c0 0-6.425 6.333-6.425 12.542 0 6.579 6.732 7.102 6.732 7.102s2.008 0.333 3.257 0c0 0 6.826-0.8 6.826-7.070 0.001-6.272-6.485-12.574-6.485-12.574zM18.211 23.123c-0.158 0.32-0.371 0.588-0.643 0.802-0.271 0.215-0.588 0.376-0.949 0.484-0.046 0.014-0.096 0.019-0.143 0.031v1.092h-0.983v-0.964c-0.012 0.001-0.024 0.003-0.036 0.003-0.279 0-0.538-0.022-0.778-0.067s-0.45-0.101-0.634-0.164c-0.184-0.064-0.337-0.131-0.459-0.201s-0.212-0.132-0.266-0.186c-0.055-0.054-0.093-0.132-0.116-0.234-0.022-0.103-0.034-0.249-0.034-0.441 0-0.129 0.004-0.237 0.013-0.325s0.021-0.158 0.041-0.213c0.019-0.055 0.043-0.093 0.074-0.116 0.031-0.022 0.068-0.034 0.109-0.034 0.059 0 0.141 0.034 0.247 0.103s0.242 0.145 0.409 0.228c0.167 0.084 0.365 0.159 0.597 0.229 0.231 0.068 0.499 0.103 0.803 0.103 0.2 0 0.379-0.024 0.537-0.072s0.293-0.115 0.403-0.203c0.111-0.088 0.195-0.196 0.253-0.325 0.059-0.13 0.088-0.273 0.088-0.433 0-0.183-0.051-0.34-0.15-0.472-0.1-0.131-0.231-0.247-0.391-0.35-0.16-0.102-0.342-0.197-0.546-0.287s-0.415-0.185-0.631-0.284c-0.217-0.1-0.427-0.213-0.631-0.341-0.204-0.127-0.387-0.278-0.547-0.455s-0.29-0.387-0.391-0.628c-0.1-0.241-0.149-0.531-0.149-0.868 0-0.388 0.072-0.728 0.215-1.021s0.338-0.537 0.581-0.73c0.244-0.193 0.531-0.338 0.862-0.434 0.17-0.049 0.346-0.085 0.526-0.108v-1.035h0.983v1.034c0.040 0.005 0.079 0.003 0.118 0.009 0.191 0.029 0.371 0.068 0.537 0.118s0.314 0.105 0.443 0.167 0.215 0.113 0.256 0.155c0.043 0.041 0.070 0.076 0.086 0.105 0.014 0.029 0.025 0.068 0.037 0.116 0.010 0.048 0.018 0.108 0.021 0.182 0.004 0.072 0.006 0.163 0.006 0.271 0 0.121-0.004 0.224-0.010 0.308-0.006 0.083-0.016 0.152-0.031 0.206-0.014 0.055-0.035 0.094-0.062 0.119s-0.062 0.037-0.109 0.037c-0.045 0-0.119-0.028-0.219-0.086-0.1-0.059-0.223-0.121-0.367-0.189-0.146-0.068-0.314-0.13-0.506-0.187-0.193-0.056-0.403-0.083-0.631-0.083-0.18 0-0.336 0.021-0.469 0.065-0.134 0.043-0.245 0.104-0.335 0.18-0.089 0.077-0.156 0.17-0.199 0.277-0.044 0.107-0.065 0.222-0.065 0.342 0 0.18 0.049 0.335 0.146 0.466s0.229 0.248 0.394 0.35c0.164 0.103 0.351 0.198 0.56 0.287 0.208 0.090 0.42 0.185 0.637 0.284 0.217 0.101 0.428 0.214 0.637 0.341s0.395 0.279 0.557 0.456 0.293 0.385 0.393 0.624c0.1 0.24 0.15 0.521 0.15 0.847-0.001 0.422-0.081 0.794-0.239 1.115zM17.891 7.334l1.998-4.919c0 0-1.26 1.046-1.998 1.046s-1.907-1.015-1.907-1.015-1.26 1.015-1.998 1.015c-0.737 0-1.937-0.984-1.937-0.984l2.029 4.857h3.813z"></path></svg>
                                    <p><span className='font-bold'>Last Six Month Revenue:</span>:${product.sarrprice}</p>
                                </div>

                                <div className='flex flex-wrap place-items-center text-center  lg:flex flex-col items-center gap-1 mt-4'>
                                    <svg fill="red" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1,12.5v5a1,1,0,0,0,1,1H3a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0h1a1,1,0,0,0,1-1V5.5a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v2H6A3,3,0,0,0,3.6,8.7L1.2,11.9a.61.61,0,0,0-.07.14l-.06.11A1,1,0,0,0,1,12.5Zm16,6a1,1,0,1,1,1,1A1,1,0,0,1,17,18.5Zm-7-13a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1v11h-.78a3,3,0,0,0-4.44,0H10Zm-2,6H4L5.2,9.9A1,1,0,0,1,6,9.5H8Zm-3,7a1,1,0,1,1,1,1A1,1,0,0,1,5,18.5Zm-2-5H8v2.78a3,3,0,0,0-4.22.22H3Z" /></svg>
                                    <p><span className='font-bold'>Deliverable Assets</span>:${product.arrprice}</p>
                                </div>
                                <div className='flex flex-wrap place-items-center  text-center  lg:flex flex-col items-center gap-1 mt-4'>
                                    <svg fill="red" width="35px" height="35px" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><path d="M11.882 3.187a.476.476 0 0 1 .475.475v11.063a.476.476 0 0 1-.475.475H1.118a.476.476 0 0 1-.475-.475V3.662a.476.476 0 0 1 .475-.475h1.328v.721a1.425 1.425 0 0 0 2.85 0v-.72H7.71v.72a1.425 1.425 0 0 0 2.85 0v-.72zm-.634 3.37H1.752v7.535h9.496zm-7.384.821H2.621V8.67h1.243zm0 2.292H2.621v1.292h1.243zm0 2.292H2.621v1.291h1.243zm.561-8.054V2.475a.554.554 0 1 0-1.108 0v1.433a.554.554 0 1 0 1.108 0zm1.613 3.47H4.794V8.67h1.244zm0 2.292H4.794v1.292h1.244zm0 2.292H4.794v1.291h1.244zm2.174-4.584H6.968V8.67h1.244zm0 2.292H6.968v1.292h1.244zm0 2.292H6.968v1.291h1.244zm1.477-8.054V2.475a.554.554 0 0 0-1.108 0v1.433a.554.554 0 0 0 1.108 0zm.696 3.47H9.142V8.67h1.243zm0 2.292H9.142v1.292h1.243zm0 2.292H9.142v1.291h1.243z" /></svg>
                                    <p><span className='font-bold'>Launched</span>:${product.date}</p>
                                </div>
                                <div className='flex flex-wrap place-items-center text-center  lg:flex flex-col items-center gap-1 mt-4'>
                                    <svg fill="red" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4z" /></svg>
                                    <p><span className='font-bold'>Category</span>:{product.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
