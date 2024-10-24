import { React, useState, useEffect } from "react"
import { Link, } from 'react-router-dom';
import { Checkbox, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2"

export default function LoginForm({ sendToParent }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        function getTokenLocalStorage() {
            return localStorage.getItem('token')
        }

        // if (getTokenLocalStorage()) {
        //     navigate('/users')
        // }
    })

    function closeModal() {
        sendToParent(false);
    }

    function handleLogin(e) {
        e.preventDefault()
        // const username = e.target.username.value
        // const password = e.target.password.value
        // alert(`Username: ${username} Password: ${password}`)
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(res => res.json()).then(async (data) => {
            localStorage.setItem('token', data.accessToken);
            if (data.accessToken) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have been successfully logged in!',
                    showConfirmButton: false,
                    timer: 1500
                })
                closeModal();
            } else if (username === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Username is required',
                    text: 'Please enter your username',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <form onSubmit={handleLogin} action="" className="">
            <div className="flex justify-center mb-4">
                <h3 className="text-3xl font-medium text-gray-900 dark:text-white">Sign in</h3>
            </div>
            <div className="mb-2">
                <div className="mb-1 block">
                    <Label htmlFor="username" value="Your email" />
                </div>
                <TextInput
                    id="username"
                    placeholder="name@company.com"
                    onInput={(e) => { setUsername(e.target.value) }} value={username}
                    required
                />
            </div>
            <div className="mb-2">
                <div className="mb-1 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" placeholder="password" onInput={(e) => { setPassword(e.target.value) }} value={password} required />
            </div>
            <div className="flex justify-between mb-10">
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                    Lost Password?
                </Link>
            </div>
            <div className="w-full mb-3">
                <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 border border-blue-900 rounded px-2 py-1 text-center text-white">Sign in</button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <Link to="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                    Create account
                </Link>
            </div>
        </form>
    )
}
