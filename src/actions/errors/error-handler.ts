// server/actions/errorHandler.ts

export class CustomError extends Error {
    public statusCode: number;
    public details?: any;

    constructor(message: string, statusCode = 500, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const handleError = (error: any) => {
    if (error instanceof CustomError) {
        return {
            status: error.statusCode,
            message: error.message,
            details: error.details || null,
        };
    }

    return {
        status: 500,
        message: 'Internal Server Error',
        details: error.message || null,
    };
};
