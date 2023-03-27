// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Database from '../../../database/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const id = req.query.id
    const db = new Database
    const avo = await db.getById(id as string)
    res.status(200).json(avo)
}