'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

    const router = useRouter()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
        setError({})
    }

    const handleValidation = () => {
        let valid = false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (userDetails.email.trim().length === 0) {
            setError({ email: "Please enter email." })
        } else if (!emailRegex.test(userDetails.email)) {
            setError({ email: "Please enter valid email." })
        } else if (userDetails.password.trim().length === 0) {
            setError({ password: "Please enter password." })
        } else {
            valid = true
        }

        return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = handleValidation()
        if (valid) {
            axios.post("/api/login", userDetails)
                .then(data => {
                    alert(data.data.message)
                    localStorage.setItem("token", data.data.token)
                    router.push("/todos")
                })
                .catch(err => alert(err.response.data.message))
        }
    }

    return (
        <div>
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Login Here</h3>
                <label className='mt-15px'>E-mail</label>
                <input type="email" placeholder="E-mail" value={userDetails.email} name='email' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.email || ""}</p>
                <label className='mt-15px'>Password</label>
                <input type="password" placeholder="Password" value={userDetails.password} name='password' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.password || ""}</p>
                <button type='submit' className='button'>Log In</button>
                <Link href={"/registration"}><label className='mt-15px cursor-pointer'>New User? Sign Up.</label></Link>
            </form>
        </div>
    )
}

export default page