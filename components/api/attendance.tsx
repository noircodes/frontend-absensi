import { Pagination, getDefaultPagination } from "@/utils/pagination";


const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : false
const role = typeof window !== "undefined" ? window.localStorage.getItem("role")?.toLowerCase() : false

export const fetchAllAttendance = async(name: string = "", date: string = "", pagination?: Partial<Pagination>) => {    
    const { sortby, size, page, order } = getDefaultPagination(pagination)
    let res: any
    switch(role){
        case "admin":
            res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/admin/attendance?name=${name}&date=${date}&sortby=${sortby}&size=${size}&page=${page}&order=${order}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })
        case "employee":
            res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/attendance?name=${name}&date=${date}&sortby=${sortby}&size=${size}&page=${page}&order=${order}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })

    }
    if (res.ok){
        const data = await res.json()
        return data
    } else {
        window.location.href = "/login"
        alert("ERROR")
    }
}

export const fetchAttendanceById = async(attendanceId:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${attendanceId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
    if (res.ok){
        const data = await res.json()
        console.log(data)
        return data
    } else {
        window.location.href = "/login"
        alert("ERROR")
    }
}

export const addAttendance = async(state: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${state}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
    if (res.ok) {
        const data = await res.json()
        return data
    } else {
        alert("GAGAL MEMBUAT USER")
    }
}

export const deleteAttendance = async(attendanceId:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${attendanceId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
    if (res.ok){
        const data = await res.json()
        return data
    } else {
        alert("GAGAL MENGHAPUS USER")
    }
}