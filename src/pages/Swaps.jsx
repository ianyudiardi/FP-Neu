import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SwapCards from "../components/blocks/SwapCards";

export default function SwapLayoutNew({ children }) {
    const navigate = useNavigate()
    function getTokenLocalStorage() {
        return localStorage.getItem('token')
    }

    // useEffect(() => {
    //     if (!getTokenLocalStorage()) {
    //         alert('You are not logged in. Please log in first.')
    //         navigate('/')
    //         return;
    //     }

    //     //authenticate token
    //     fetch('https://dummyjson.com/auth/me', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${getTokenLocalStorage()}`,
    //         },
    //     })
    //         .then(res => {
    //             if (!res.ok) {
    //                 navigate('/')
    //             }
    //         })
    // },[])

    const swaps = [
        {
            id: 1,
            name: "Andre",
            title: "Frontend - 5y+",
            description: "Looking for backend",
            status: "sent"
        },

        {
            id: 2,
            name: "Barry",
            title: "Backend - 5y+",
            description: "Looking for frontend",
            status: "received",
        },

        {
            id: 3,
            name: "Candice",
            title: "Musician - 7y+",
            description: "I can teach you how to play guitar/piano in exchange for roofing services",
            status: "sent",
        },

        {
            id: 4,
            name: "Derek",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]",
            status: "received",
        },

        {
            id: 5,
            name: "Eugene",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]",
            status: "sent",
        },

        {
            id: 6,
            name: "Vasily",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]",
            status: "received",
        },
    ]

    return getTokenLocalStorage() ? (
        <div className="container h-screen py-4">
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Sent" icon={HiUserCircle}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" type="sent">
                        {

                            swaps.map((swap) => (
                                swap.status === "sent" && swap.status !== "received" ?
                                    <SwapCards key={swap.id} name={swap.name} title={swap.title} description={swap.description} status={swap.status} />
                                    : null
                            ))
                        }
                    </div>
                </Tabs.Item>

                <Tabs.Item title="Received" icon={MdDashboard}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" type="received">
                        {
                            swaps.map((swap) => (
                                swap.status === "received" && swap.status !== "sent" ?
                                    <SwapCards key={swap.id} name={swap.name} title={swap.title} description={swap.description} status={swap.status} />
                                    : null
                            ))
                        }
                    </div>
                </Tabs.Item>
            </Tabs>
        </div>
    ) : (
        <div className="container h-screen flex justify-center items-center">
            <h1 className="text-center text-2xl">You are not logged in. Please log in first.</h1>
        </div>
    )
}
