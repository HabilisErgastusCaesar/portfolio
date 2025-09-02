import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    try {
        //await new Promise(resolve => setTimeout(resolve, 50000));
        const cast = await prisma.stargateCast.findMany({
            where: {
                atlantis:true
            },
            orderBy: [
                { numberOfEpisodes: 'desc' },
            ],
        });
        res.status(200).json(cast);
    } catch (error) {
        console.error('Error fetching episodes:', error);
        res.status(500).json({ message: 'Error fetching episodes', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}