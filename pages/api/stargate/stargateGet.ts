import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const { show, season } = req.query;
    if (!show || !season) {
        return res.status(400).json({ message: 'Missing show or season query parameters' });
    }
    
    try {
        const episodes = await prisma.episode.findMany({
            where: {
                series: show as string,
                season: `season ${season}` as string,
            },
            orderBy: [
                { id: 'asc' },
            ],
        });
        res.status(200).json(episodes);
    } catch (error) {
        console.error('Error fetching episodes:', error);
        res.status(500).json({ message: 'Error fetching episodes', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}
