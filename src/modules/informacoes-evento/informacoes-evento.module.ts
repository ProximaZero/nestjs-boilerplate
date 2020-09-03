import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InformacoesEvento } from "./model/informacoes-evento.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            InformacoesEvento,
        ])
    ]
})
export class InformacoesEventoModule { }