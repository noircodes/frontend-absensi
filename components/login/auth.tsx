import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const LayoutAuthentication = () => {
    const [profile, setProfile] = useState()
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async() => {
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
    const logout = () => {
        localStorage.removeItem("token")
        router.push("/")
    }
    return {
        profile,
        logout
    }
}