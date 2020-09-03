import { Module } from "@nestjs/common";
import { Contratada } from "modules/pdf/data-sample";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Contratada,
        ])
    ]
})
export class ContratadaModule {

}