import Button from "../ui/Button"

export default function SwapCards({ name, title, status }) {
    return (
        <div className="flex min-w-max min-h-32 p-2 gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="Mono.png" className="size-20 rounded" alt="" />
            <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {title}
                </p>
                {/* <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p> */}
                <Button type={status} className="mt-4"/>
            </div>
        </div>
    )
}