import { Prisma, PrismaClient} from "@prisma/client";


const client = new PrismaClient()

const getUsers = () => [
    {name: 'Tester1'},
    {name: 'Tester2'},
    {name: 'Tester3'}
]

const main = async ()=>{
    try{
        await client.$transaction(async(prisma)=>{
            const users = await Promise.all(
                getUsers().map((user)=> prisma.user.create({data:user})
            ))
        })
    } finally{
        await client.$disconnect()
    }
}

main();



// const main = async () =>{
//     const users = await Promise.all(
//         getUsers().map((user)=> client.user.create({data:user}))
//     )
// }