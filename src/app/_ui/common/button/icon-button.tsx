interface IconButtonProps {
    onClick: () => void;
    className: string;
    disabled?: boolean;
    icon: React.ReactNode;
}

const IconButton = ({ onClick, className, disabled, icon }: IconButtonProps) => {
    return (
        <button onClick={() => onClick()} className={"w-10 h-10 bg-primary rounded-full grid place-items-center " + className} disabled={disabled}>
            {icon}
        </button>
    );
}

export default IconButton;