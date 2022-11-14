#!/use/bin/end node
// suggest to how to compile this app

import { getArgs } from "./helpers/args.js";
import { saveCity } from "./helpers/save-city.js";
import { saveToken } from "./helpers/save-token.js";
import { getForecast } from "./services/forcast.service.js";
import { printHelp} from "./services/log.service.js";
import { getKeyValue } from "./services/storage.service.js";

const initCLI = async () => {
    const args = getArgs(process.argv);

    // checking for command params
    if (args.h) {
        printHelp();
    }
    if (args.c) {
        await saveCity(args.c);
    } 
    if (args.t) {
        await saveToken(args.t);
    } 

    const city = await getKeyValue("city");
    
    getForecast(city);
};

initCLI(); 