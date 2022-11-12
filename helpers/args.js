// args is params from terminal
export const getArgs = (args) => {
    const res = {};
    // getting params on rest, executor and file actually is useless  
    const [executor, file, ...rest] = args; 
 
    rest.forEach((value, index, array) => {
        if (value.charAt(0) == "-") {
            if (index == array.length - 1) {
                //substring(1) === from second letter to end
                res[value.substring(1)] = true;
            }
            // if next elem of arr do not contains flag mark(-)
            else if (array[index + 1].charAt(0) != "-") {
                // create key(actual elem) and value(next elem), than push to obj
                res[value.substring(1)] = array[index + 1];

            } else {
                res[value.substring(1)] = true;
            }
        }
    });
    return res;
};

