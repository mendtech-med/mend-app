import { DomainError } from "./domain.error";
import { ErrorCodes } from "../../config/error-codes";

export class NotFoundError extends DomainError {
    constructor(message: string = ErrorCodes.NOT_FOUND_ERROR.message) {
        super(ErrorCodes.NOT_FOUND_ERROR.code, message);
        this.name = "NotFoundError";
    }
}
