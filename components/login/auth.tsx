import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const LayoutAuthentication = () => {
    const [profile, setProfile] = useState()
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async() => {
        if (typeof window !== 'undefined') {
            const res = await fetch('https://backend-absensi.cyclic.app/attendance/admin', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if (res.ok){
                const json = await res.json()
                setProfile(json)
            } else {
                router.push("/login")
            }
        }
    }
    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("token")
            router.push("/")
        }
    }
    return {
        profile,
        logout
    }
}