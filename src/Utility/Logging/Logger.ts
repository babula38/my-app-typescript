import { inherits } from "util"

export interface ILogger {
    Error(message: string): void;
    Warning(message: string): void;
    Info(message: string): void;
    Debug(message: string): void;
}

enum LogLevel {
    Error = 0,
    Warning = 1,
    Audit = 2
}

class ConsoleLogger implements ILogger {
    constructor() {

    }
    Error(message: string): void {
        console.error(message);
    }

    Warning(message: string): void {
        console.warn(message);
    }

    Info(message: string): void {
        console.info(message);
    }

    Debug(message: string): void {
        console.debug(message);
    }
    private Log(level: LogLevel, message: string): void {

    }
}

class ServerLogger implements ILogger {
    constructor() {

    }
    Error(message: string): void {
        throw new Error("Method not implemented.");
    }
    Warning(message: string): void {
        throw new Error("Method not implemented.");
    }
    Info(message: string): void {
        throw new Error("Method not implemented.");
    }
    Debug(message: string): void {
        throw new Error("Method not implemented.");
    }
}

