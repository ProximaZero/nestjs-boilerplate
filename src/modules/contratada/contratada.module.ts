import { Module } from "@nestjs/common";
import { Contratada } from "modules/pdf/data-sample";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContratadaService } from "./contratada.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Contratada,
        ])
    ],
    providers: [
        ContratadaService
    ]
})
export class ContratadaModule {

}