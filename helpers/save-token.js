import { printError, printSuccess } from "../services/log.service.js";
import { saveKeyValue } from "../services/storage.service.js";

export const saveToken = async (token) => {
    if(!token.length) {
        printError("token is not define!");
        return;
    }

    try {
        await saveKeyValue("token", token);
        printSuccess("Tokes was saved!");
    } catch (error) {
        printError(error.message);
    }
};