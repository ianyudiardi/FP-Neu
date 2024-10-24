import { Link } from "react-router-dom/dist"
import CustomModal from "../ui/CustomModal"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import { useEffect, useState } from "react"
import { jwtDecode } from 'jwt-decode' // import dependency
import Swal from "sweetalert2"

export default function Navbar() {
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    function decodeToken(token) {
        const decoded = jwtDecode(token)
        // console.log(decoded.username)
        setUsername(decoded.username)
    }
    useEffect(() => {
        const accessToken = localStorage.getItem('token')
        accessToken ? setToken(accessToken) : setToken("")
        accessToken ? decodeToken(accessToken) : ""
    },[])

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    function logout() {
        Swal.fire({
            icon: 'warning',
            title: 'Logout',
            text: 'Are you sure you want to logout?',
            showConfirmButton: true,
            showCancelButton: true,
            buttonsStyling: true,
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token')
                window.location.reload()
            } else {
                Swal.DismissReason.cancel
            }
        })
        // localStorage.removeItem('token')
        // window.location.reload()
    }

    return (
        <section className="bg-logos">
            <div className="container bg-logos h-14">
                <nav className="flex justify-between h-full items-center">
                    <Link to="/" className="size-full w-fit">
                        <img src="Mono.png" alt="" className="size-full w-fit" />
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{setIsModalOpen(!isModalOpen)}} >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="gap-4 hidden sm:flex">
                        <ul className="flex gap-2 text-white items-center">
                            <li className="hover:underline"><Link to="/">Home</Link></li>
                            <li className="hover:underline"><Link to="/Skills">Skills</Link></li>
                            <li className={`hover:underline ${token ? "block" : "hidden"} `}><Link to="/Swaps">Swaps</Link></li>
                            {
                                username &&
                                (
                                    <>
                                        <Link to="/Profile" className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded px-2 text-center text-white">{Capitalize(username)}</Link>
                                        <button className="bg-red-700 hover:bg-red-800 active:bg-red-900 border border-red-900 rounded px-2 text-center text-white" onClick={logout}>Logout</button>
                                    </>
                                )
                            }
                        </ul>
                        {
                            !token &&
                            (
                                <>
                                    <CustomModal textTrigger={'Sign In'} className={`bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded px-2 text-center text-white`}>
                                        <LoginForm />
                                    </CustomModal>
                                    <CustomModal textTrigger={'Register'} className={`bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded px-2 text-center text-white`}>
                                        <RegisterForm />
                                    </CustomModal>
                                </>
                            )
                        }
                    </div>
                </nav>
            </div>

            <div className={`w-full ${isModalOpen ? "block" : "hidden"} md:w-auto`}> 
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-logos md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block py-2 px-3 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}