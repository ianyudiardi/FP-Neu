import SwapCards from "../components/blocks/SwapCards"

export default function Swaps({title, qual, description}) {
    return (
        <section className="container h-screen">
            <div className="py-4">
                <h2 className="font-semibold text-lg">Swaps</h2>
                <h3 className="text-gray-600">See your swaps here.</h3>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <SwapCards />
                <SwapCards />
                <SwapCards />
                <SwapCards />
                <SwapCards />
                <SwapCards />
            </div>
        </section>
    )
}