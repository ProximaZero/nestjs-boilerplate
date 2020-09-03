import { Entity, Column, PrimaryColumn } from "typeorm";
import { EntityAuditedHasId } from "modules/common/entity/entity-audited-has-id";

@Entity()
export class Contratante extends EntityAuditedHasId {
    @Column({
        nullable: false,
    })
    Nome: string;
    @PrimaryColumn()
    CPF: string;
    @Column({
        nullable: false,
    })
    Endereço: string;
    @Column({
        nullable: false,
    })
    cidadeUf: string;
    @Column({
        nullable: false,
    })
    bairro: string;
    @Column({
        nullable: false,
    })
    cep: string;
    @Column({
        nullable: false,
    })
    email: string;
    @Column({
        nullable: false,
    })
    telefoneCelular: string;
}