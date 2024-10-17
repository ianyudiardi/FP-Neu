import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Button({ onClick, className, type }) {
    // if (type === "sent") {
    //     return (
    //         <button className={`${className} inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}>
    //             Unswap
    //         </button>
    //     )
    // } else if (type === "received") {
    //     return (
    //         <button className={`${className} inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
    //             Accept
    //         </button>
    //     )
    // } else if (type === "accepted") {
    //     <button className={`${className} inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
    //         Accepted
    //     </button>
    // } else if (type === 'unswapped') {
    //     <button className={`${className} inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}>
    //         Accept
    //     </button>
    // }

    const baseStyle = "inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none"

    const variants = {
        sent: "text-white bg-red-700  hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
        received: "text-white bg-blue-700  hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        accepted: "text-white bg-green-700  hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        disabled: "text-white disabled bg-gray-700 dark:bg-gray-600"
    }

    return (
        <button className={`${className} ${baseStyle} ${variants[type]}`} onClick={onClick} >
            {
                type === "sent" ? "Unswap" :
                    type === "received" ? "Accept" :
                        type === "accepted" ? "Accepted" :
                            type === "disabled" ? "Unswapped" : null
            }
        </button>
    )
}