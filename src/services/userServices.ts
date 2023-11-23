import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarUsuario = async (id: string,nome: string, email: string) => {
  return prisma.usuario.create({
    data: {
        id,
        nome,
        email,
    },
  });
};