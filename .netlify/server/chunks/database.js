import prisma from "@prisma/client";
const db = new prisma.PrismaClient();
export {
  db as d
};
