'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logOutAction } from "../redux/actions/authAction"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Header = () => {

    const { authDetails } = useSelector(state => state)
    const dispatch = useDispatch()
    const router = useRouter()
    const pathName = usePathname()

    const [showDropDown, setShowDropDown] = useState(false)

    const handleClickHeadreBtn = (path) => {
        router.push(path)
    }

    return (
        <div className="header_container">
            <nav>
                <p className="header_logo m-0 p-0">Todo List</p>
                <div className="nav_items m-0 p-0">
                    <ul className={`m-0 p-0 ${showDropDown ? "d-flex" : ""}`}>
                        {
                            authDetails.token
                                ?
                                <li>
                                    <div className={`mx-2  my-0 `} onClick={() => {
                                        handleClickHeadreBtn("/login")
                                        dispatch(logOutAction())
                                    }}>Log Out</div>
                                </li>
                                :
                                <>
                                    <li>
                                        <div className={`mx-2 my-0 ${pathName.includes("login") ? "active" : ""}`} onClick={() => {
                                            handleClickHeadreBtn("/login")
                                            setShowDropDown(!showDropDown)
                                        }}>Log In</div>
                                    </li>
                                    <li>
                                        <div className={`mx-2 my-0 ${pathName.includes("registration") ? "active" : ""}`} onClick={() => {
                                            handleClickHeadreBtn("/registration")
                                            setShowDropDown(!showDropDown)
                                        }}>Registration</div>
                                    </li>
                                </>
                        }

                    </ul>
                    <Button className="nav_bars_btn" onClick={() => setShowDropDown(!showDropDown)}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default Header