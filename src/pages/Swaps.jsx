import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import SwapCards from "../components/blocks/SwapCards"
import SwapLayout from "../layouts/SwapLayout"
import SwapLayoutNew from "../layouts/SwapLayoutNew";

export default function Swaps() {
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
            status: "pending",
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
            status: "pending",
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
            status: "pending",
        },
    ]
    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Swaps</h2>
                <h3 className="text-gray-600">See your swaps here.</h3>
            </div>
            <SwapLayout>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" type="sent">
                    {
                          
                        swaps.map((swap) => (
                            swap.status === "sent" && swap.status !== "pending" ?
                            <SwapCards key={swap.id} name={swap.name} title={swap.title} description={swap.description} status={swap.status} />
                            : null
                        ))
                    }
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" type="received">
                    {
                        swaps.map((swap) => (
                            swap.status === "pending" && swap.status !== "sent" ?
                            <SwapCards key={swap.id} name={swap.name} title={swap.title} description={swap.description} status={swap.status} />
                            : null 
                        ))
                    }
                </div>
            </SwapLayout>
        </section>
    )
}