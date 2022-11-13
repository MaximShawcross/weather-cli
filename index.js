#!/use/bin/end node
// suggest to how to compile this app

import axios from "axios";
import { getArgs } from "./helpers/args.js";
import { saveCity } from "./helpers/save-city.js";
import { saveToken } from "./helpers/save-token.js";
import { printError, printSuccess, printHelp} from "./services/log.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    // getWeather("kharkiv");
    
    // checking for command params
    if (args.h) printHelp();
    if (args.c) saveCity(args.c); 
    if (args.t) saveToken(args.t);
};

initCLI(); 