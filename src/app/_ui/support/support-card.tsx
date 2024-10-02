import { RiQuillPenFill } from "react-icons/ri";
import Image from "next/image";
import IconButton from "../common/button/icon-button";
import { TbMessageCirclePlus } from "react-icons/tb";

interface SupportCardProps {
    logo: string;
    name: string;
    status: string;
    color: string;
}

const SupportCard = () => {
    return (
        <div className="rounded-lg shadow-main relative w-64 h-52 box-border px-6 py-8  shadow-slate-300 bg-primary hover:shadow-lg hover:cursor-pointer hover:rotate-0 transition-all duration-300 -rotate-12">


            <h1 className="text-foreground font-bold text-2xl text-white">Need Help ??</h1>
            <p className="text-foreground text-white">
                Let’s have a chat to
                help you get started
            </p>

            <div className="w-full grid place-items-center mt-2">
                <div className="w-full bg-background rounded-lg h-16  box-border p-2 flex items-center">
                    <div className="rounded-full w-16 h-16 grid place-items-center">
                        <TbMessageCirclePlus size={30} color="#000 " />
                    </div>
                    <div className=" pl-1 items-center justify-center">
                        <h1 className="text-foreground font-bold text-lg">
                            +20
                        </h1>
                        <p className="text-foreground">
                            Open Tickets
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SupportCard;