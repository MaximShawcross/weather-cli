#!/use/bin/end node
// suggest to how to compile this app

import axios from "axios";
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printSuccess, printHelp} from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
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

const initCLI = () => {
    const args = getArgs(process.argv);
    getWeather("kharkiv");
    
    // checking for command params
    if (args.h) printHelp();
    if (args.s) printSuccess(); 
    if (args.t) saveToken(args.t);
};

initCLI(); 