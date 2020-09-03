import { Entity } from "typeorm";

@Entity()
export class InformacoesEvento {
    NomedoEvento: string;
    DataDoEvento: Date;
    HorárioDeOperação: Date;
    HorárioDeMontagem: Date;
    Endereço: string;
    CidadeUF: string;
    Bairro: string;
    CEP: string;
    ResponsávelDoEvento: string
    TelefoneResponsavel: string;
}