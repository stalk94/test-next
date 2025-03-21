import db from './db';
import { NextApiRequest, NextApiResponse } from 'next';




export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json({data: db})
    } 
    else {
        res.status(405).json({ error: 'Приходите завтра' });
    }
}