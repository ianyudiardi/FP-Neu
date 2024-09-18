import React from 'react'
import Button from '../components/ui/Button'

export default function Home() {
    return (
        <section className='grid grid-cols-2 h-screen'>
            <div className='bg-gray-300'>
                <div className='mt-36 pl-20'>
                    <h1 className='font-bold text-2xl text-left'>Learn Something New,<br />Free of Charge.</h1>
                    <Button type='black'>Get Started</Button>
                </div>
            </div>
            <div className='bg-logos flex items-center justify-center'>
                <img src="Mono.png" className='size-fit' alt="" />
            </div>
        </section>
    )
}
