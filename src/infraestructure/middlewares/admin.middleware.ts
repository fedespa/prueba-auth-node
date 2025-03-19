import { NextFunction, Request, Response } from "express";

export class AdminMiddleware {
    constructor (

    ){ }

    public async checkAdmin(req: Request, res: Response, next: NextFunction) {
        console.log('Checking if user is admin...');
    }
}