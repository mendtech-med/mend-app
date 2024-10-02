import Image from "next/image";
const RoundLogo = () => {
    return (
        <div>
            <Image src="/brand/logo.svg" width={35} height={35} alt="Logo" className="rounded-full w-52 h-12" />
        </div>
    );
}

export default RoundLogo;