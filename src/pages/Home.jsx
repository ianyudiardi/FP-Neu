import React from 'react'
import Button from '../components/ui/Button'

export default function Home() {
    return (
        <section className='grid grid-cols-2 h-screen'>
            <div className='bg-gray-300'>
                <div className='mt-36 pl-20'>
                    <h1 className='font-bold text-2xl text-left'>Learn Something New,<br />Free of Charge.</h1>
<<<<<<< HEAD
                    <button className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white`}>Get Started</button>
=======
                    <Button type='black'><a href="/Skills">Get Started</a></Button>
>>>>>>> a448b94b91d2e4ea8ea5a86859519d42147546fe
                </div>
            </div>
            <div className='bg-logos flex items-center justify-center'>
                <img src="Mono.png" className='size-fit' alt="" />
            </div>
        </section>
    )
}
