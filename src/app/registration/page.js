'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registrationAction } from '../redux/actions/authAction'

const Registration = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { authDetails } = useSelector(state => state)

    useEffect(() => {
        if (authDetails.isLoggedIn) {
            router.push("/todos")
        }
    }, [])

    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const [error, setError] = useState({})

    const clearStateData = () => {
        setUserDetails({
            name: "",
            phone: "",
            email: "",
            password: "",
            cpassword: ""
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserDetails({ ...userDetails, [name]: value })
        setError({})
    }

    const handleValidation = () => {
        let valid = false
        const phoneRegex = /^\d{10}$/
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (userDetails.name.trim().length === 0) {
            setError({ name: "Please enter name." })
        } else if (userDetails.phone.trim().length === 0) {
            setError({ phone: "Please enter phone number." })
        } else if (!phoneRegex.test(userDetails.phone)) {
            setError({ phone: "Please enter valid phone number." })
        } else if (userDetails.email.trim().length === 0) {
            setError({ email: "Please enter email." })
        } else if (!emailRegex.test(userDetails.email)) {
            setError({ email: "Please enter valid email." })
        } else if (userDetails.password.trim().length === 0) {
            setError({ password: "Please enter password." })
        } else if (userDetails.cpassword.trim().length === 0) {
            setError({ cpassword: "Please enter confirm password." })
        } else if (userDetails.cpassword !== userDetails.password) {
            setError({ cpassword: "Password and confirm password must be same." })
        } else {
            valid = true
        }

        return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = handleValidation()

        if (valid) {
            dispatch(registrationAction({
                name: userDetails.name,
                phone: userDetails.phone,
                email: userDetails.email,
                password: userDetails.password
            }, router, clearStateData))

        }
    }

    return (
        <div className='register_form_container'>
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Registration Here</h3>
                <label className='mt-15px'>Name</label>
                <input type="text" placeholder="Name" value={userDetails.name} name='name' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.name || ""}</p>
                <label className='mt-15px'>Phone Number</label>
                <input type="tel" placeholder="Phone Number" value={userDetails.phone} name='phone' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.phone || ""}</p>
                <label className='mt-15px'>E-mail</label>
                <input type="email" placeholder="E-mail" value={userDetails.email} name='email' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.email || ""}</p>
                <label className='mt-15px'>Password</label>
                <input type="password" placeholder="Password" value={userDetails.password} name='password' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.password || ""}</p>
                <label className='mt-15px'>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" value={userDetails.cpassword} name='cpassword' onChange={(e) => handleInputChange(e)} />
                <p className='error'>{error.cpassword || ""}</p>
                <button type='submit' className='mt-2_5rem button'>Register</button>
                <Link href={"/login"}><label className='mt-15px cursor-pointer'>Already have an account? Sign In.</label></Link>
            </form>
        </div>
    )
}

export default Registration