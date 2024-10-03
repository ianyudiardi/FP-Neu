import { Link } from "react-router-dom/dist"
import Button from "../ui/Button"
import CustomModal from "../ui/CustomModal"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useEffect, useState } from "react"
import { jwtDecode } from 'jwt-decode' // import dependency

export default function Navbar() {
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    function decodeToken(token) {
        const decoded = jwtDecode(token)
        // console.log(decoded.username)
        setUsername(decoded.username)
    }
    useEffect(() => {
        const accessToken = localStorage.getItem('token')
        accessToken ? setToken(accessToken) : setToken("")
        accessToken ? decodeToken(accessToken) : ""
    })

    function logout() {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <section className="bg-logos">
            <div className="container bg-logos h-14">
                <nav className="flex justify-between h-full items-center">
                    <Link to="/" className="size-full w-fit">
                        <img src="Mono.png" alt="" className="size-full w-fit" />
                    </Link>
                    <div className="flex gap-4">
                        <ul className="flex gap-2 text-white items-center">
                            <li className="hover:underline"><Link to="/">Home</Link></li>
                            <li className="hover:underline"><Link to="/Skills">Skills</Link></li>
                            <li className="hover:underline"><Link to="/Swaps">Swaps</Link></li>
                            {
                                username &&
                                (
                                    <>
                                        <button className="bg-gray-300 hover:bg-gray-400 active:bg-gray-100 border border-gray-600 rounded px-2 text-center text-black">{username}</button>
                                        <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white" onClick={logout}>Logout</button>
                                    </>
                                )
                            }
                        </ul>
                        {
                            !token &&
                            (
                                <>
                                    <CustomModal textTrigger={'Sign In'} className={`bg-gray-300 hover:bg-gray-400 active:bg-gray-100 border border-gray-600 rounded px-2 text-center`}>
                                        <LoginForm />
                                    </CustomModal>
                                    <CustomModal textTrigger={'Register'} className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white`}>
                                        <RegisterForm />
                                    </CustomModal>
                                </>
                            )
                        }
                    </div>
                </nav>
            </div>
        </section>
    )
}