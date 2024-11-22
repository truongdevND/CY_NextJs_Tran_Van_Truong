import {POST} from "@/services/ApiService";

export const login = async (email, password) => {
    return await POST('/login', {
        email,
        password,
    })
}

export const signup = async (name, email, password) => {
    return await POST('/signup', {
        name,
        email,
        password,
    })
}

export const logout = async () => {
    return await POST('/logout')
}

export const checkAuth = async () => {
    return await POST('/user')
}