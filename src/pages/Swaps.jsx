import SwapCards from "../components/blocks/SwapCards"

export default function Swaps({ title, qual, description }) {
    const swaps = [
        {
            id: 1,
            name: "Andre",
            title: "Frontend - 5y+",
            description: "Looking for backend",
        },

        {
            id: 2,
            name: "Barry",
            title: "Backend - 5y+",
            description: "Looking for frontend"
        },

        {
            id: 3,
            name: "Candice",
            title: "Musician - 7y+",
            description: "I can teach you how to play guitar/piano in exchange for roofing services"
        },

        {
            id: 4,
            name: "Derek",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },

        {
            id: 5,
            name: "Eugene",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },

        {
            id: 6,
            name: "Vasily",
            title: "[PLACEHOLDER]",
            description: "[PLACEHOLDER]"
        },
    ]
    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Swaps</h2>
                <h3 className="text-gray-600">See your swaps here.</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    swaps.map((swap) => (
                        <SwapCards key={swap.id} name={swap.name} title={swap.title} description={swap.description} />
                    ))
                }
            </div>
        </section>
    )
}