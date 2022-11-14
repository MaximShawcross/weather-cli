import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (err) => {
    console.error(`${chalk.bgRed("ERROR")}: ${err}`);
};

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreenBright("SUCCESS")}: ${chalk.whiteBright(message)}`);
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

export const outputService = (output) => {    
    const forcastOutput = {
        name: output.name,
        temp: output.main.temp,
        _feels_like: output.main.feels_like,
        get feels_like() {
            return this._feels_like;
        },
        set feels_like(value) {
            this._feels_like = value;
        },
        pressure: output.main.pressure,
        windSpeed: output.wind.speed, 
    };

    const logOutput = dedent(`${chalk.cyan("Weather")}: 
        ${chalk.blue("City")}: ${forcastOutput.name}
        ${chalk.blue("Temperature")}: ${forcastOutput.temp}
        ${chalk.blue("Temperature feels like")}: ${forcastOutput.feels_like}
        ${chalk.blue("Wind speed:")}: ${forcastOutput.windSpeed}}
        ${chalk.blue("Pressure")}: ${forcastOutput.pressure}
    `);

    return logOutput;
};