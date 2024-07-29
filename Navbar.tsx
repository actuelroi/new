import Image from "next/image";
import Logo from "./Logo";
import HeaderComponent from "./HeaderComponent";
import UserItem from "./UserItem";
import Link from "next/link";


const Navbar = () => {
    return (
        <header className="flex  items-center   w-full py-2  shadow-lg sticky top-0 left-0 z-[999] bg-opacity-100 bg-background" >
        <nav className="w-full   flex items-center justify-between container px-5 gap-2 lg:px-10  shadow-sm ">
                
                    <div className="flex items-center  container px-2 gap-2 lg:px-10  ">
                            <Logo />
                            <Link href={"/"}> <p className=" text-lg font-bold bold">StarAfrica</p></Link>
                    </div>
                
                <HeaderComponent />
                <UserItem />
        </nav>
    </header>
    );
}

export default Navbar;

