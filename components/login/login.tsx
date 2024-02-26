import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export const SignIn = () => {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    // const handleChange = (e) => {
    //     const copy = {...state}
    //     // copy[e.target.name] = e.target.value
    //     setState(copy)
    // }
}

export const handleSubmit = async(state:any) => {
    // const router = useRouter()
    if (typeof window !== 'undefined') {
        
        const params = new URLSearchParams();
        params.append('username', state.username);
        params.append('password', state.password);
        const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/auth/login`, {
            method: "POST",
            body: params
        })
        console.log(res)
        const json = await res.json()
        if (res.ok){
            console.log(json)
            toast.success("Berhasil Login")
            localStorage.setItem("token", json.access_token)
            localStorage.setItem("name", json.name)
            localStorage.setItem("userId", json.userId)
            localStorage.setItem("photoUrl", json.photoUrl)
            localStorage.setItem("role", json.role)
            localStorage.setItem("email", json.email)
            // router
            json.role != "ADMIN" ? state.router.push('/employee') : state.router.push('/admin') 
        } else {
            toast.error(json.detail);
        }
    }
}

export const handleLogout = async() => {
    if (typeof window !== 'undefined') {
        localStorage.clear()
        // router
        window.location.href = "/login"
    }
}