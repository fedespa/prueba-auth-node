import { NextFunction, Request, Response } from "express";

export class EmailVerifiedMiddleware {
    constructor (
        
    ){ }

    public async checkEmailVerified(req: Request, res: Response, next: NextFunction) {
        console.log('Checking if user has verified email...');
    }
}