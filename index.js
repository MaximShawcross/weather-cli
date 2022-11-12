#!/use/bin/end node
// suggest to how to compile this app

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
};

initCLI(); 