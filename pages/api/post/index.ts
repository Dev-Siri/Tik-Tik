import type { NextApiRequest, NextApiResponse } from 'next';
import { allPostsQuery, client } from '../../../utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'GET') {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if(req.method === 'POST') {
    const document = req.body;

    await client.create(document);
    
    res.status(201).json('Video Created');
  }
}