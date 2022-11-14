import { printError, printSuccess } from "../services/log.service.js";
import { saveKeyValue } from "../services/storage.service.js";

export const saveCity = async (city) => {
    if (!city.length) {
        printError("city is not exist!");
        return;
    }

    try {
        await saveKeyValue("city", city); 
        printSuccess("your city was saved!");       
    } catch (error) {
        printError(error.massage);
    }   
};