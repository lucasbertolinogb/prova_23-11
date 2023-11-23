import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarLance = async (id: string, compradorId: string, leilaoId: string, valor: number) => {
    return prisma.lance.create({
        data: {
            id,
            compradorId,
            leilaoId,
            valor,
        },
    });
};
