import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Enter Full Name" },
        email: { label: "Email", type: "text", placeholder: "Enter Your Email" },
        password: { label: "Password", type: "password", placeholder: "Enter Password" },
      },
      async authorize(credentials) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, { 
            email: credentials?.email, 
            password: credentials?.password })
        if (res.status === 200) {
          const user = res.data
          return user
        }
        return null
      }
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 86400,
    updateAge: 0
  },
  pages: {
    signIn: '/signin',
    error: "/signin",
    newUser: "/signup"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          email: token.email,
          name: token.name,
          role: token.role,
        }
      }
      return session
    }
  }
}