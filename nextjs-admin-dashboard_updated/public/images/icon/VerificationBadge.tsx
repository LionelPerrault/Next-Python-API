import { cn } from "@/lib/utils";

const VerificationBadge = ({className}:{className?:string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00B4D8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-badge-check",className)}>
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

export default VerificationBadge;