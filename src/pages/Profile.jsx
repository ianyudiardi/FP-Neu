import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    function getTokenLocalStorage() {
        return localStorage.getItem('token')
    }

    useEffect(() => {
        if (!getTokenLocalStorage()) {
            navigate('/')
        }

        //authenticate token
        fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getTokenLocalStorage()}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    navigate('/')
                }
            })
    })

    return (
        <section className='flex'>
            <div className="container h-screen w-[30vw] bg-gray-500 items-center">
                <div className="rounded-full bg-white size-48 mt-5 items-center flex justify-center">Profile <br /> Image</div>
                <div className="mt-5">
                    <div className="bg-white text-center">a</div>
                    <div className="bg-white text-center">a</div>
                    <div className="bg-white text-center">a</div>
                </div>
            </div>
            <div className='container p-2 h-screen'>
                <p>Provide a brief description about yourself.</p>
                <div className="bg-gray-500 h-40 p-4 rounded-lg"></div>

                <div className="flex gap-2 justify-between">
                    <div className='w-full'>
                        <p>Skills</p>
                        <div className="bg-gray-500 h-10 w-full p-4 rounded-lg"></div>
                    </div>
                    <div className='w-full'>
                        <p>Experience</p>
                        <div className="bg-gray-500 h-10 w-full p-4 rounded-lg"></div>
                    </div>
                </div>

                <p>Portfolio</p>
                <div className="bg-gray-500 h-10 p-4 rounded-lg"></div>

                <p>Location</p>
                <div className="bg-gray-500 h-10 p-4 rounded-lg"></div>
            </div>
        </section>
    )
}