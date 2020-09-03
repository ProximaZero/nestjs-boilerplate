import { Entity, Column } from "typeorm";
import { EntityAuditedHasId } from "modules/common/entity/entity-audited-has-id";

@Entity()
export class InformacoesEvento extends EntityAuditedHasId {
    @Column({ nullable: false })
    nomedoEvento: string;
    @Column({ nullable: false })
    dataDoEvento: Date;
    @Column({ nullable: false })
    horárioDeOperação: Date;
    @Column({ nullable: false })
    horarioDeMontagem: Date;
    @Column({ nullable: false })
    endereço: string;
    @Column({ nullable: false })
    cidadeUF: string;
    @Column({ nullable: false })
    bairro: string;
    @Column({ nullable: false })
    cep: string;
    @Column({ nullable: false })
    responsávelDoEvento: string
    @Column({ nullable: false })
    telefoneResponsavel: string;
}