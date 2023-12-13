export namespace LEVEL {
    let DEBUG: number;
    let INFO: number;
    let LOG: number;
    let WARN: number;
    let ERROR: number;
    let CRITICAL: number;
}
export class Logger {
    static level: number;
    static __max_length: number;
    static __level_lenght: number;
    /**
     * Crea un nuevo logger
     * @param {string} name Nombre del logger
     */
    constructor(name?: string);
    name: string;
    _activate(level: any): boolean;
    _prebuild(levelStr?: string): string;
    log(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    critical(...args: any[]): void;
}
import { formatNumber } from "./helpers";
import { wrapText } from "./helpers";
import { ALIGMENT } from "./helpers";
export { formatNumber, wrapText, ALIGMENT };
//# sourceMappingURL=main.d.ts.map