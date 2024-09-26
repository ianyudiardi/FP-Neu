import Button from "../ui/Button"
import { Link } from "react-router-dom/dist"

export default function Navbar() {
    return (
        <section className="bg-logos">
            <div className="container bg-logos h-14">
                <nav className="flex justify-between h-full items-center">
                    <Link to="/" className="size-full w-fit">
                        <img src="Mono.png" alt="" className="size-full w-fit" />
                    </Link>
                    <div className="flex gap-4">
                        <ul className="flex gap-2 text-white">
                            <li className="hover:underline"><Link to="/">Home</Link></li>
                            <li className="hover:underline"><Link to="/Skills">Skills</Link></li>
                            <li className="hover:underline"><Link to="/Swaps">Swaps</Link></li>
                        </ul>
                        <Button type="signin" className={`bg-gray-300 hover:bg-gray-400 active:bg-gray-100 border border-gray-600 rounded px-2 text-center`}>Sign in</Button>
                        <Button type="register" className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white`}>Register</Button>
                    </div>
                </nav>
            </div>
        </section>
    )
}