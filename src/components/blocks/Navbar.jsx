import Button from "../ui/Button"
export default function Navbar() {
    return (
        <section className="bg-logos">
            <div className="container bg-logos h-14">
                <nav className="flex justify-between h-full items-center">
                    <img src="Mono.png" alt="" className="size-full w-fit" />
                    <div className="flex gap-4">
                        <ul className="flex gap-2 text-white">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <Button type="white">Sign in</Button>
                        <Button type="black">Register</Button>
                    </div>
                </nav>
            </div>
        </section>
    )
}