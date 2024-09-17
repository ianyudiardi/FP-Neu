export default function Button({ children, className, type }) {
    if (type === "white") {
        return (
            <button className={`bg-gray-300 hover:bg-gray-400 active:bg-gray-100 border border-gray-600 rounded px-2 text-center ${className}`}>
                {children}
            </button>
        )
    }   else if (type === "black") {
        return (
            <button className={`bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 text-center text-white ${className}`}>
                {children}
            </button>
        )
    }
}