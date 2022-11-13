// if storage is alredy exist, service will update it,
// if not, will create it 
import { homedir } from "os";
import { join } from "path";
import { promises, writeFile } from "fs";

//right path to user directory
const filePath = join(homedir(), "weather-data.json");

export const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;    
    
    await promises.writeFile(filePath, JSON.stringify(data));
};

export const getKey = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key]; 
    }

    return undefined;
};

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
};