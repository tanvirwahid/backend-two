import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('pass123', salt);

    await prisma.user.createMany({
        data: [
            {
                name: 'Admin User',
                isAdmin: true,
                password: hashedPassword,
            },
            {
                name: 'Regular User',
                isAdmin: false,
                password: hashedPassword,
            },
        ],
    });
}

main()
    .then(() => {
        console.log('Seeded successfully!');
        prisma.$disconnect();
    })
    .catch((error) => {
        console.error(error);
        prisma.$disconnect();
    });