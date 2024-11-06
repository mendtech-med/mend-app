"use server";
import RoundLogo from "../logo";
import Upgrade from "../upgrade";
import Profile from "./profile";
import { currentUser } from "@clerk/nextjs/server"


const Header = async () => {
    const user = await currentUser();


    return (
        <header className="flex w-full h-20 box-border  py-4" >
            <div className="h-full items-center">
                <p className="text-foreground font-normal pt-4 m-0 text-lg px-0">Hello, {user?.firstName}</p>
            </div>
            <div className="flex-1">

            </div>
            <div className="grid place-items-end  w-20">
                <Profile />
            </div>
        </header>
    );
}

export default Header;