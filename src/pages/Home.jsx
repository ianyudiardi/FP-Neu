import React from 'react'
import { Link } from 'react-router-dom'
import SignInModal from '../components/ui/CustomModal'

export default function Home() {
    return (
        <section className='grid grid-cols-2 h-screen'>
            <div className='bg-gray-300'>
                <div className='mt-36 pl-20'>
                    <h1 className='font-bold text-2xl text-left'>Learn Something New,<br />Free of Charge.</h1>
                    <Link to="Skills" className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white`}>Get Started</Link>
                </div>
            </div>
            <div className='bg-logos flex items-center justify-center'>
                <img src="Mono.png" className='size-fit' alt="" />
            </div>
        </section>
    )
}
