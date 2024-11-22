import { NextResponse } from 'next/server'
import { getCookie } from "cookies-next";

export async function middleware(request) {
    const token = await getCookie('token', { req: request });
    
    const path = request.nextUrl.pathname;
    
    if (token) {
        if (path === '/login' || path === '/signup') {
            return NextResponse.redirect(new URL('/home', request.url))
        }
        return NextResponse.next()
    }
    
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/cart', '/checkout', '/orders', '/products/:path*', '/login', '/signup'],
}