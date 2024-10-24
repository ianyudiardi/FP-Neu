import React from 'react'
import { Link } from 'react-router-dom'
import SignInModal from '../components/ui/CustomModal'

export default function Home() {
    return (
        <section className='flex-col bg-gray-300 md:grid md:grid-cols-2 h-screen'>
            <div className='bg-gray-300 min-h-fit'>
                <div className='mb-5 py-4 md:mt-36 md:pl-20'>
                    <h1 className='font-bold text-4xl text-left mb-8'>Learn Something New,<br />Free of Charge.</h1>
                    <Link to="Skills" className={`bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded py-2 px-4 text-center text-white`}>Get Started</Link>
                </div>
            </div>
            <div className='bg-logos flex items-center justify-center'>
                <img src="Mono.png" className='size-fit' alt="" />
            </div>
        </section>
    )
}
