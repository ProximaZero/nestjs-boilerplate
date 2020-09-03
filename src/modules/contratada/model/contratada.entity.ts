import { Entity, Column } from "typeorm";
import { EntityAuditedHasId } from "modules/common/entity/entity-audited-has-id";

@Entity()
export class Contratada extends EntityAuditedHasId {
    @Column({
        nullable: false
    })
    cpfCnpj: string;
    @Column({
        nullable: false
    })
    nome: string;
    @Column({
        nullable: false
    })
    endereco: string;
    @Column({
        nullable: false
    })
    bairro: string; /// TODO:  suprimir em endereço
    @Column({
        nullable: false
    })
    email: string;
    @Column({
        nullable: false
    })
    cidade: string;
    @Column({
        nullable: false
    })
    cep: string;
    @Column({
        nullable: false
    })
    telefoneCelular: string;
}