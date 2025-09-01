import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const { id } = req.query;
    
    if (!id ) {
        return res.status(400).json({ message: 'missing profile' });
    }
    
    try {
        const profile = await prisma.mainBuilding.findFirst({
            where: {
                userId: id as string
            },
        });
        res.status(200).json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}