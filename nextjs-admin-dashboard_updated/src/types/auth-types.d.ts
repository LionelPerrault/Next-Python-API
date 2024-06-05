import type { Session, User as AuthUser } from "next-auth";
import type { JWT } from "next-auth/jwt";


declare module "next-auth" {
    interface User {
        _id: string,
        email: string,
        name: string,
        role: string,
    }
}
declare module 'next-auth' {
    interface Session {
        user: AuthUser & {
            id: string,
            email: string,
            name: string,
            role: string,
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        email: string,
        name: string,
        role: string,
    }
}
