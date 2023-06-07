'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify"
import { clearToastAction } from "../redux/actions/toastAction";

const ToastModel = () => {


    const { toastData } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if (toastData.type !== null) {
            if (toastData.type === "success") {
                toast.success(toastData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

            if (toastData.type === "error") {
                toast.error(toastData.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

            const clearToastTimeOut = setTimeout(() => {
                dispatch(clearToastAction())
            }, 3000)

            return () => {
                clearTimeout(clearToastTimeOut)
            }

        }
    }, [toastData])

    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    )
}

export default ToastModel