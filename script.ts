import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    const user =prisma.user.create({data:{username:"Kyle"}})
    console.log(user)
}

main()
    .catch(e=>console.error(e.message))
    .finally(async ()=>{
        await prisma.$disconnect
    })