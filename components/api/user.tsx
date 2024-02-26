
export const fetchAllUser = async(name: string, role: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user?name=${name}&role=${role}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    if (res.ok){
        const data = await res.json()
        return data
    } else {
        alert("ERROR")
    }
}

export const fetchUserById = async(userId:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${userId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    if (res.ok){
        const data = await res.json()
        console.log(data)
        return data
    } else {
        alert("ERROR")
    }
}

export const addUser = async(state:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token") 
        },
        body: JSON.stringify(state)
    })
    if (res.ok) {
        const data = await res.json()
        return data
    } else {
        alert("GAGAL MEMBUAT USER")
    }
}

export const updateUser = async(userId:any, state:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token") 
        },
        body: JSON.stringify(state)
    })
    if (res.ok) {
        const data = await res.json()
        return data
    } else {
        alert("GAGAL MENGUBAH USER")
    }
}

export const deleteUser = async(userId:any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PREFIX_PATH}/user/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token") 
        }
    })
    if (res.ok){
        const data = await res.json()
        return data
    } else {
        alert("GAGAL MENGHAPUS USER")
    }
}