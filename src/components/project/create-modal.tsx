import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from 'react-query';
import axios from 'axios';
import { CreateProjectSchema } from '@/server/application/dto/project/create.dto';
import { useRouter } from 'next/navigation';

// Assuming your constants for select dropdowns are stored in a config file:
import { AudienceLevel, AudienceTarget, BrandVoice } from '@/constants/project';



const CreateProjectSchemaWithoutOwner = CreateProjectSchema.omit({
    ownerId: true,
});

// Define the form validation schema with Zod
type CreateProjectFormValues = z.infer<typeof CreateProjectSchemaWithoutOwner>;
const CreateProjectForm: React.FC = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateProjectFormValues>({
        resolver: zodResolver(CreateProjectSchemaWithoutOwner),
    });

    const mutation = useMutation((newProject: CreateProjectFormValues) => {
        return axios.post('/api/projects', newProject); // Adjust API endpoint
    });

    const onSubmit = (data: CreateProjectFormValues) => {
        console.log("data : ", data);
        mutation.mutate(data, {
            onSuccess: ({ data }) => {
                console.log("created project : ", data);
                router.push(`/project/${data.id}/editor?new=true`);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-64">
            {/* Title Input */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    {...register('title')}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors.title && (
                    <span className="text-sm text-red-500">{errors.title.message}</span>
                )}
            </div>

            {/* Audience Target Dropdown */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Audience Target</label>
                <select
                    {...register('audience.target')}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    {Object.entries(AudienceTarget).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
                {errors.audience?.target && (
                    <span className="text-sm text-red-500">
                        {errors.audience.target.message}
                    </span>
                )}
            </div>

            {/* Audience Level Dropdown */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Audience Level</label>
                <select
                    {...register('audience.level')}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    {Object.entries(AudienceLevel).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
                {errors.audience?.level && (
                    <span className="text-sm text-red-500">
                        {errors.audience.level.message}
                    </span>
                )}
            </div>

            {/* Brand Voice Dropdown */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Brand Voice</label>
                <select
                    {...register('audience.brandVoice')}
                    className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    {Object.entries(BrandVoice).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
                {errors.audience?.brandVoice && (
                    <span className="text-sm text-red-500">
                        {errors.audience.brandVoice.message}
                    </span>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                {mutation.isLoading ? 'Creating...' : 'Create Project'}
            </button>

            {mutation.isError && (
                <span className="text-sm text-red-500">
                    Error creating project. Please try again.
                </span>
            )}
            {mutation.isSuccess && (
                <span className="text-sm text-green-500 py-4">
                    Project created successfully!
                </span>
            )}
        </form>
    );
};

export default CreateProjectForm;
