import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (err) => {
    console.error(`${chalk.bgRed("ERROR")}: ${err}`);
};

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreenBright("SUCCESS")}: ${chalk.green(message)}`);
};

export const printHelp = () => {
    // dedent is deleting unnecessary spaces at the beginnig of every line 
    console.log(
    dedent(`${chalk.cyan("Help")}: 
        Without params - return weather
        -s [CITY] set a city flag
        -h return help
        -t [API_KEY] param for save token         
    `));
};  