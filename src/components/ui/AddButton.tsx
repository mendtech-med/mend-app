type Props = {
    handleOpen: () => void
}
const AddButton: React.FC<Props> = ({ handleOpen }) => {
    return (
        <div
            className="rounded-lg flex hover:bg-white/50 cursor-pointer flex-col items-center justify-center  space-y-4 flex-1 w-full h-36 border-dashed border-4 border-gray-400/20"
            onClick={handleOpen}
        >
            <button type="button" className="w-10 h-10 bg-theme-main rounded-full grid place-items-center text-white transition-all duration-300 shadow-main hover:scale-110">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"></path>
                </svg>
            </button>
        </div>
    )
}

export default AddButton