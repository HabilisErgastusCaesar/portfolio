import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const { episode , series } = req.query;
    if (!episode) {
        return res.status(400).json({ message: 'Missing show or season query parameters' });
    }
    let returnList = []
    try {
        const result = await prisma.episode.findMany({
            where: {
                series: { contains:series as string },
            },
            orderBy: [
                { id: 'asc' },
            ],
        });
        const filteredActors = result.filter(item => 
            item.cast.some(castMember => castMember.toLowerCase().includes(episode as string))
        );
        const filteredEpisode = result.filter(item => 
            item.name.toLowerCase().includes(episode as string)
        );
        returnList.push(...filteredActors,...filteredEpisode)
        res.status(200).json(returnList);
    } catch (error) {
        console.error('Error fetching episodes:', error);
        res.status(500).json({ message: 'Error fetching episodes', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}