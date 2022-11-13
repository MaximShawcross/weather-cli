import { printError, printSuccess } from "./log.service.js";
import { getWeather } from "./api.service.js";

export const getForecast = async (city) => {
    try {
        const response = await getWeather(city);
        printSuccess(JSON.stringify(response));

    } catch (error) {
        if(error?.response?.status == 404) {
            printError("City is not exist!");            
        } else if (error?.response?.status == 401 ) {
            printError("Token is not exist!"); 
        } else {
            printError(error.message);
        }   
    }
};