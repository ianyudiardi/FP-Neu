export default function Button({ children, className, type }) {
    if (type === "white") {
        return (
            <button className={`bg-gray-300 hover:bg-gray-400 active:bg-gray-100 border border-gray-600 rounded px-2 text-center ${className}`}>
                {children}
            </button>
        )
    } else if (type === "black") {
        return (
            <button className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white ${className}`}>
                {children}
            </button>
        )
    } else if (type === "sent") {
        return (
            <button className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Unswap
            </button>
        )
    } else if (type === "pending") {
        return (
            <button className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Accept
            </button>
        )
    }
}