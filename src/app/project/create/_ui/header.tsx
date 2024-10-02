import { GoArrowLeft } from "react-icons/go";
import { TbHelpHexagon } from "react-icons/tb";

const userName = "John";

interface CreateAgentHeaderProps {
    onBack: () => void;
    onHelp: () => void;
}

const CreateAgentHeader = ({ onBack, onHelp }: CreateAgentHeaderProps) => {
    return (
        <header className="flex w-full h-20 box-border  py-4" >
            <div className="grid place-items-center w-20">
                <GoArrowLeft className="text-foreground h-6 w-6" onClick={onBack} />
            </div>
            <div className="flex-1">

            </div>
            <div className="flex items-center justify-between w-36">
                <button className="bg-orange-400 text-white rounded-full px-4 py-2 flex items-center gap-x-2" onClick={onHelp}>
                    <TbHelpHexagon size={22} className="text-white" />
                    <h1>Upgrade</h1>
                </button>
            </div>
        </header>
    );
}

export default CreateAgentHeader;