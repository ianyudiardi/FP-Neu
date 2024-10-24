import { useState } from "react"
import Button from "../ui/Button"

export default function SwapCards({ name, title, description, status, }) {
    const [current, setCurrentStatus] = useState(status)

    function changeCurrentStatus(){   
        if(current === 'sent'){
            setCurrentStatus('disabled')
        } else if(current === 'received'){
            setCurrentStatus('accepted')
        }
    }

    return (
        <div className="flex max-w-screen sm:max-w-sm min-h-32 p-2 gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="Mono.png" className="size-20 rounded" alt=""/>
            <div className="w-full">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white max-w-fit">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 max-w-fit">
                    {title}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 max-w-fit line-clamp-1">
                    {description}
                </p>
                <Button type={current} className="mt-4" onClick={() => changeCurrentStatus()}/>
            </div>
        </div>
    )
}