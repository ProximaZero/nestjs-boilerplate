export class Contratada {
    cpfCnpj: string;
    nome: string;
    endereco: string;
    bairro: string; /// TODO:  suprimir em endereço
    email: string;
    cidade: string;
    cep: string;
    telefoneCelular: string;
}

export class Contratante {
    Nome: string;
    CPF: string;
    Endereço: string;
    cidadeUf: string;
    bairro: string;
    cep: string;
    email: string;
    telefoneCelular: string;
}


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