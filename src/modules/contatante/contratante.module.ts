import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contratante } from "modules/pdf/data-sample";
import { ContratanteService } from "./contratante.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Contratante,
        ]),
    ],
    providers: [
        ContratanteService,
    ]
})
export class ContratanteModule { }