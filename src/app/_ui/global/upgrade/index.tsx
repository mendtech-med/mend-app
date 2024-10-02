import { HiSparkles } from "react-icons/hi2";

const Upgrade = () => {
    return (
        <button className="bg-purple-600 text-white rounded-full px-4 py-2 flex items-center gap-x-2">
            <HiSparkles className="text-yellow-500" />
            <h1>Upgrade</h1>
        </button>
    );
}

export default Upgrade;