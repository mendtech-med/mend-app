

interface ReaderItem {
    name: string;
    selections: string[];
}

interface UpdateReaderDto {
    id: string;
    type?: string;
    catagory?: string;
    items?: ReaderItem[];
    ownerId?: string;
};

type CreateReaderDto = {
    type: string;
    catagory: string;
    items: ReaderItem[];
    ownerId: string;
};

type FindReaderDto = {
    ownerId?: string;
    id?: string;
};

type DeleteReaderDto = {
    id: string;
};

export type { CreateReaderDto, UpdateReaderDto, FindReaderDto, DeleteReaderDto };