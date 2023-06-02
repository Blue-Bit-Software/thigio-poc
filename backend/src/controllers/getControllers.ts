import { Request, Response } from 'express';
import { sendTransaction, checkEmptyRequestBody } from '../business/accessManager';

/**
 * This function is the controller for the GET /data endpoint.
 * @param req Request of the user
 * @param res Response of the request.
 * @returns Returns the transaction receipt if the transaction was successful.
 */
export const getDataSendController = async (req: Request, res: Response) => {
   const dataToSend: string = req.body;

   if (checkEmptyRequestBody(dataToSend)) return res.status(400).json({ message: 'Empty request body' });

   const transaction = await sendTransaction(dataToSend);
   res.status(200).json({ transaction });
}
