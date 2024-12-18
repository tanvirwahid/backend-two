import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as console from "node:console";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    onModuleInit(): any {
        this.$connect()
            .catch((err) => console.log(err));
    }
}
