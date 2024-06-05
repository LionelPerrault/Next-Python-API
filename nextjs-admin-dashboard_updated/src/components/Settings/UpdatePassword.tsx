"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const UpdatePassword = () => {
    const [loading, setLoading] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const session = useSession();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`, {
                currentPassword,
                newPassword,
                email: session.data?.user.email
            })
            toast.success("Password updated successfully");
            setCurrentPassword("");
            setNewPassword("");
        } catch (error:any) {
            toast.error(error.response?.data?.error ?? "An error occurred");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="mt-4">
            <h1 className="text-xl font-semibold text-zinc-600">
                Update Password
            </h1>
            <Separator className="border-2 my-4 rounded-full" />
            <form onSubmit={handleSubmit}>
                <label htmlFor="current-password">
                    <span className="text-sm">Current Password</span>
                    <Input
                        id="current-password"
                        name="current-password"
                        type="password"
                        placeholder="Enter your current password"
                        className="max-w-md"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        disabled={loading}
                    />
                </label>
                <label htmlFor="new-password">
                    <span className="text-sm">New Password</span>
                    <Input
                        id="new-password"
                        name="new-password"
                        type="password"
                        placeholder="Enter your new password"
                        className="max-w-md"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        disabled={loading}
                    />
                </label>
                <Button disabled={loading} type="submit" className="mt-4">Update Password</Button>
            </form>
        </div>
    );
}


export default UpdatePassword;