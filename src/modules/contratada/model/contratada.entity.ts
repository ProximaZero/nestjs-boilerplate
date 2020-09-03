import { Entity } from "typeorm";
import { EntityAuditedHasId } from "modules/common/entity/entity-audited-has-id";

@Entity()
export class Contratada extends EntityAuditedHasId {
    cpfCnpj: string;
    nome: string;
    endereco: string;
    bairro: string; /// TODO:  suprimir em endereço
    email: string;
    cidade: string;
    cep: string;
    telefoneCelular: string;
}