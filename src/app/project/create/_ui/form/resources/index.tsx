import { FaFileAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Button from '@/app/_ui/common/button/button';
import { FiUploadCloud } from "react-icons/fi";

const ResourceFileStatus = ({ status }: { status: string }) => {
    let statusStyle = '';
    let statusText = '';

    switch (status) {
        case 'active':
            statusStyle = 'bg-green-100 text-green-600';
            statusText = 'Active';
            break;
        case 'syncing':
            statusStyle = 'bg-purple-100 text-purple-600';
            statusText = 'Syncing';
            break;
        case 'failed':
            statusStyle = 'bg-red-100 text-red-600';
            statusText = 'Failed';
            break;
        default:
            statusStyle = 'bg-gray-100 text-gray-600';
    }

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle}`}>
            {statusText}
        </span>
    );
};

const FileItem = ({ fileName, status }: { fileName: string; status: string }) => {
    return (
        <div className="flex items-center justify-between py-4 bg-gray-50 rounded-sm mb-2 px-6">
            <div className="flex items-center space-x-3">
                <FaFileAlt className="text-xl text-gray-600" />
                <span className="text-gray-700">{fileName}</span>
            </div>
            <div className="flex items-center space-x-3">
                <ResourceFileStatus status={status.toLowerCase()} />
                <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
            </div>
        </div>
    );
};

const ResourceUploader = () => {
    return (
        <div className="relative w-full px-8 py-6 min-h-14 bg-white rounded-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Resources</h2>
            <p className="text-sm text-gray-500 mb-5">These files gonna be used to train your chatbot</p>

            <FileItem fileName="File_10_scrapping.pdf" status="Active" />
            <FileItem fileName="File_10_scrapping.pdf" status="Syncing" />
            <FileItem fileName="File_10_scrapping.pdf" status="Failed" />

            <div className="flex justify-end mt-6">
                <Button
                    className="bg-black text-white w-36 font-semibold h-12 border-[1px] group px-4 py-2 border-black"
                    onClick={() => console.log("Preview")}
                    icon={<FiUploadCloud className="mr-1 ml-2 group-hover:scale-125 transition-all duration-500" size={20} />}
                    text="Update"
                />
            </div>
        </div>
    );
};

export default ResourceUploader;
