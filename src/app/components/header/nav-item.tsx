import { cn } from "@/app/lib/utlis"
import Link from "next/link"
import {usePathname} from 'next/navigation'

type NavItemProps = {
    label: string
    href: string
}
export const NavItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href
    return (
        <Link href={href} className={cn(
           "text-white flex items-center gap-2 font-medium hover:text-neutral-200",
           isActive && 'font-semibold'

        )}>
            {label}
        </Link>
    )
}