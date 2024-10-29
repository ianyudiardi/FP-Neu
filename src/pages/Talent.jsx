import { Link } from "react-router-dom"

export default function Talent() {
    return (
        <section className="container bg-white px-0 lg:px-48 pt-10 h-full">
            <section className="flex flex-col items-center sm:flex-row">
                <div className="h-full items-center">
                    <div className="flex size-52 rounded-full bg-gray-400 justify-center items-center font-bold text-center">Profile <br /> Picture</div>
                </div>
                <div className="container px-14 pt-5  sm:h-52 flex flex-col items-center sm:block">
                    <h1 className="font-bold text-xl">Andre</h1>
                    <p className="font-normal text-gray-400">Frontend - 5 Years+</p>
                    <div className="flex gap-2 mt-1">
                        <img src="skill-icons_linkedin.png" alt="" />
                        <img src="mage_x.png" alt="" />
                    </div>
                </div>
            </section>  
            <div className="bg-gray-500 mx-12 sm:mx-0 mt-10 mb-5 p-4 rounded-lg">
                <p>"I'm a Frontend Developer with expertise in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, and frameworks like React and Vue.js. I can help you create modern, visually appealing interfaces, improve your site's performance, and ensure a seamless user experience across devices. Whether you need a landing page, single-page application, or UI/UX improvements, I’m here to help bring your ideas to life!"</p>
            </div>
            <div className="flex mx-12 sm:mx-0 justify-center">
                <Link to="/swaps" className="h-8 w-full bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded px-2 py-1 text-center text-white">Swap</Link>
            </div>
        </section>
    )
}