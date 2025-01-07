import { useNavigate } from "react-router-dom"
import { LogoSVG } from "../../assets/images/svgs"

const NoInternetConnection = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-10 text-2xl">
            <img src={LogoSVG} alt="Logo" />

            <div className="space-y-2">
                <h1>
                    No internet connection
                </h1>
                <button
                    onClick={handleNavigate}
                    className="mx-auto w-48 p-2 block rounded-md text-xl bg-theme-main text-white">Retry</button>
            </div>
        </div>
    )
}

export default NoInternetConnection