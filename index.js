#!/use/bin/end node
// suggest to how to compile this app

import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp} from "./services/log.service.js";
import { saveKeyValue, getKey } from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token);
        printSuccess("Tokes was saved!");
    } catch (error) {
        printError(error.message);
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    // checking for command params
    if (args.h) printHelp();
    if (args.s) printSuccess();
    if (args.t) saveToken(args.t);
};

initCLI(); 