'use client';
import Button from "@/app/_ui/common/button/button";
import { RiEyeLine } from "react-icons/ri";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const CreateAgentFormActions = () => {
    return (
        <div className="flex space-x-4 justify-between">
            {/* Preview Button */}
            <Button
                className="bg-white text-black w-40 font-semibold h-14 border-[1px] hover:bg-gray-50 px-4 py-2 border-black "
                onClick={() => console.log("Preview")}
                icon={<RiEyeLine className="mx-2" size={20} />}
                text="Preview"
            />

            {/* Update Button */}

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button
                            className="bg-black text-white w-40 font-semibold h-14 border-[1px] group px-4 py-2 border-black hover:shadow-sm hover:scale-105 transition-all duration-500"
                            onClick={() => console.log("Preview")}
                            icon={<HiMiniRocketLaunch className="mx-2 group-hover:scale-125 transition-all duration-500" size={20} />}
                            text="Update"
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-white ">
                            Update the agent with the latest changes.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default CreateAgentFormActions;


