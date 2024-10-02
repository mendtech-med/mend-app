import RoundLogo from "../logo";
import Upgrade from "../upgrade";
import Profile from "./profile";

const userName = "John";




const Header = () => {
    return (
        <header className="flex w-full h-20 box-border  py-4" >
            <div className="grid place-items-center w-52">
                <RoundLogo />
            </div>
            <div className="h-full pl-5 items-center">
                <h1 className="text-foreground font-normal pt-4">Hello {userName} 👋</h1>
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