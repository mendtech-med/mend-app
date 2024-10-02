import React, { useState, useRef } from 'react';
import { FiUploadCloud } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io";



const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 2MB


interface InputImageProps {
    value: string | null;
    onChange: (image: string | null) => void;
}


const InputImage = ({ value, onChange }: InputImageProps) => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                alert('Invalid file type');
                return;
            }

            if (file.size > MAX_FILE_SIZE) {
                alert('File is too large');
                return;
            }

            reader.onloadend = () => {
                setImage(reader.result as string);
                onChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative w-28 h-28 cursor-pointer group">
            <input
                type="file"
                accept={ACCEPTED_FILE_TYPES.join(',')}
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageUpload}
            />
            <div
                className={`w-full h-full rounded-full overflow-hidden border-[1px] border-gray-400 ${image ? 'bg-cover bg-center' : 'bg-gray-200'}`}
                style={{ backgroundImage: image ? `url(${image})` : 'none' }}
            >
                {!image && (
                    <div className="flex items-center justify-center w-full h-full group">
                        <IoLogoReddit className="text-gray-400 transition-all duration-500 group-hover:scale-105" size={40} />
                    </div>
                )}
            </div>
            <button
                className="absolute -bottom-1 -right-1 p-3 bg-primary rounded-full text-white"
                onClick={() => fileInputRef.current?.click()}
            >
                <FiUploadCloud size={18} className='p-0 m-0 group-hover:scale-125 transition-all duration-500' />
            </button>
        </div>
    );
};

export default InputImage;
