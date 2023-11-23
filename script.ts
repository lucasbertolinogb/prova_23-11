import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    
    const compradorId = '007'
    const leilaoId = '300'

  const lance = await prisma.lance.create({
      data: {
        comprador: { connect: {id: compradorId}},
        leilao: { connect: {id: leilaoId}},
        valor: 7.91
      }
  });
  console.log(lance)
}

main()