
interface User {
    id: string;
    clerkId: string;
    emails: string[];
    phoneNumbers: string[];
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
}

export default User;