import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ message: 'missing user' });
    }
    try {
        const user = await prisma.account.findFirst({
            where: {
                id: id as string,
            },
        });
        res.status(200).json(user);
        
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
}