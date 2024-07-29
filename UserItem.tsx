
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { RxAvatar } from "react-icons/rx";


import Link from "next/link";

const UserItem = async () => {

    
    return (
        <DropdownMenu >
            <DropdownMenuTrigger >
                <div className="rounded-xl border px-3 py-1 lg:px-4 lg:py-1 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <RxAvatar size={30} className="hidden lg:block" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                           <DropdownMenuItem>
                                Messages
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                            <Link href="/" className="w-full">
                            Notifications
                            </Link>
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                            <Link href="/favorites" className="w-full">
                            Mes Favoris
                            </Link>
                           </DropdownMenuItem>
                           <DropdownMenuSeparator/>
                           <DropdownMenuItem>
                                Deconexion
                            </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>

    
    );
}

export default UserItem;