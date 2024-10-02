import { DomainError } from "./domain.error";
import { ErrorCodes } from "../../config/error-codes";

export class ValidationError extends DomainError {
    constructor(message: string = ErrorCodes.UNAUTHORIZED_ERROR.message) {
        super(ErrorCodes.UNAUTHORIZED_ERROR.code, message);
        this.name = "ValidationError";
    }
}
