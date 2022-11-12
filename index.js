#!/use/bin/end node
// suggest to how to compile this app

import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp} from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);

    // checking for command params
    if (args.h) printHelp();
    if (args.h) printSuccess();
    if (args.e) printError();
};

initCLI(); 