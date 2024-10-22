interface Refer {
    id: string;
    content: string;
    sourceUrl: string;
    project: {
        id: string;
        title: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

export default Refer;