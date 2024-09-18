export default function SwapCards({ name, title, description }) {
    return (
        <div className="flex min-w-96 min-h-32 p-2 gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="Mono.png" className="size-20 rounded" alt="" />
            <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {title}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <div className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Unswap
                </div>
            </div>
        </div>

    )
}