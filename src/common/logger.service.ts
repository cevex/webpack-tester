/**
 * This service is not imported anywhere
 */
// tslint:disable:no-console
export class LoggerService {

    info(...message: any[]): void {
        console.log(`INFO:`, ...message);
    }

    error(...message: any[]): void {
        console.error(`ERROR:`, ...message);
    }

    warn(...message: any[]): void {
        console.warn(`WARN:`, ...message);
    }
}
