import {Request, Response} from 'express';

export const getAllUsers = (req: Request, res: Response) => {
	let bla = '5';
	res.send('blabla5' + bla);
};