import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarLeilao = async (id: string, produto: string, preco: number, datalimite: Date, usuarioId: string, listaLances: { valor: number; data: Date}[]) => {
    const LanceLista: LanceCria[] = listaLances.map(lance => ({
        valor: lance.valor,
        data: lance.data,
      }));
    
    return prisma.leilao.create({
        data: {
          id,
          produto,
          preco,
          datalimite,
          dono: { connect: { id: usuarioId } },
          lances: {
            create: LanceLista,
        },
    },
  });
};