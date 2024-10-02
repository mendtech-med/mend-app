interface ButtonProps {
    onClick: () => void;
    className: string;
    disabled?: boolean;
    icon: React.ReactNode;
    text: string;
}

const Button = ({ onClick, className, disabled, icon, text }: ButtonProps) => {
    return (
        <button onClick={() => onClick()} className={"rounded-full flex items-center space-x-2 " + className} disabled={disabled}>
            <span>

                {icon}
            </span>
            <span>
                {text}

            </span>
        </button>
    );
}

export default Button;