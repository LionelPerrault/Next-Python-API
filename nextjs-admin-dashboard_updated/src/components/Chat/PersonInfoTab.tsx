
import { HiOutlineMail } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import VerificationBadge from "../../../public/images/icon/VerificationBadge";
import { MapPin, Phone } from "lucide-react";

const PersonInfoTab = ({ user }: { user: any }) => {

    return (
        <div className="hidden bg-white border-solid border-l-2 border-[#E9E9E9] max-h-screen py-4 w-full max-w-xs overflow-y-auto lg:flex lg:flex-col">
            {/* User Name */}
            <div className="flex-none flex flex-row gap-3 items-center justify-between px-4">
                <div className="flex gap-3">
                    <BiUser className="w-15 h-15 rounded-lg bg-gray-3" />
                    <div className="py-3">
                        <h6 className="flex items-center gap-1 text-title-md text-black font-semibold">
                            {user?.name} <VerificationBadge />
                        </h6>
                    </div>
                </div>
            </div>
            {/* Person Info Tab */}
            <div className="flex-1 w-full mt-3 overflow-y-auto">
                <div className="border-t pt-7 mt-1 border-slate-200 px-4">
                    <div className={`flex flex-col gap-7 mt-4`}>
                        <div className="flex flex-col gap-5">
                            <label className="block text-md font-bold">
                                Email
                            </label>
                            <div className="flex items-center mx-4 justify-between">
                                <div className="flex gap-1 items-center">
                                    <HiOutlineMail className="w-4 h-4" />
                                    <p>
                                        {user?.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label className="block text-md font-bold">
                                Phone
                            </label>
                            <div className="flex items-center mx-4 justify-between">
                                <div className="flex gap-1 items-center">
                                    <Phone className="h-4 w-4" />
                                    <p>
                                        {user?.number}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label className="block text-md font-bold">
                                Address
                            </label>
                            <div className="flex items-center mx-4 justify-between">
                                <div className="flex gap-1 items-center">
                                    <MapPin className="h-4 w-4" />
                                    <p>
                                        {user?.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonInfoTab;