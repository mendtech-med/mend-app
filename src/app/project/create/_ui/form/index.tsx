'use client';
import CreateAgentHeader from "../header";
import { useRouter } from "next/navigation";
import InputImage from "./input/image";
import InputColor from "./input/color";
import InputText from "./input/text";
import InputWithIcon from "./input/text-icon";
import CreateAgentFormActions from "./actions";
import ResourceUploader from "./resources";


const Form = () => {

    const router = useRouter();
    const onBack = () => {
        router.back();
    }

    const onHelp = () => {
        alert("Help");
    }

    return (
        <div className="h-full px-0 pt-4">
            {/* <CreateAgentHeader onBack={onBack} onHelp={onHelp} /> */}
            <div className="h-full space-y-1 overflow-y-scroll pb-28">
                <div className="flex justify-between py-2 pb-10">
                    <div className="flex content-center justify-center space-x-8">
                        <InputImage onChange={(file) => console.log(file)} value="" />
                        <div className="h-full grid place-content-center">
                            <InputText name="name" label="Name" placeholder="Enter name" value="Atikia's Bot" onChange={(e) => console.log(e.target.value)} error="" />
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <InputColor value="#000000" onChange={(e) => console.log(e.target.value)} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <InputWithIcon label="Prompt" placeholder="Enter name" />
                </div>
                <div className="flex justify-between py-3">
                    <ResourceUploader />
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-24 px-0 bg-gray-100 pt-4">
                <CreateAgentFormActions />
            </div>
        </div>
    );
}

export default Form;