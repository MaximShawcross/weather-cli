import chalk from "chalk";
import dedent from "dedent-js";

export const outputService = (output) => {    
    const forcastOutput = {
        name: output.name,
        temp: output.main.temp,
        feels_like: output.main.feels_like,
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