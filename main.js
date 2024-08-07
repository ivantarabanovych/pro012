function createLogger(lineLog = ""){
    let log = lineLog;

    return function(newLog){
        if (log === ""){
            log = newLog;
        } else {
            log += ' ' + newLog;
        }
        return log;
    };
}

const logger = createLogger();

console.log(logger('first log,'));
console.log(logger('second log,'));
console.log(logger('third log,'));
