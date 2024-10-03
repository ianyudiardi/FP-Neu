import { React, useState, useEffect } from "react"
import { Link, } from 'react-router-dom';
import { Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2"

export default function RegisterForm({sendToParent}) {

    function closeModal() {
        sendToParent(false);
    }
    
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Register</h3>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
                <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                    Lost Password?
                </Link>
            </div>
            <div className="w-full">
                <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border border-gray-700 rounded px-2 py-1 align-middle text-center text-white">Register</button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?&nbsp;
                <Link to="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                    Sign In
                </Link>
            </div>
        </div>
    )
}
