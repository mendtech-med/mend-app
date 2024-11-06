

interface ReaderItem {
    name: string;
    selections: string[];
}


interface Reader {
    id: string;
    type: string;
    catagory: string;
    items: ReaderItem[];
    createdAt: Date;
    updatedAt: Date;
}

export default Reader;