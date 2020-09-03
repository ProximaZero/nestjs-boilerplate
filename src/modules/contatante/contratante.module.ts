import { Module } from "@nestjs/common";
import { Type } from "class-transformer";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contratante } from "modules/pdf/data-sample";

@Module({
    imports: [TypeOrmModule.forFeature([
        Contratante
    ])]
})
export class ContratanteModule { }