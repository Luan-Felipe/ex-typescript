//variaveis

/*
    tipos primitivos: boolean, number, string
*/
let ligado: boolean = false;
let nome: string = 'Luan';
let idade: number = 28;
let altura: number = 1.83;

//tipos especiais : null, undefined
let nulo: null = null;

let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: 'Luan',
    cidade: 'Itumbiara',
    idade: 28,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: 'Tênis',
    preco: 89.99,
    unidades: 5,
};

//arrays

let dados: string[] = ['Luan', 'Samera', 'Kiki'];
let dados2: Array<string> = ['Luan', 'Samera', 'Kiki'];

//array de tipos diferentes
let infos: (string | number)[] = ['Luan', 28];

//tuplas - parecido com o array de tipos diferentes,
//mas precisa adicionar os dados de acordo com a estrutura pre definida
let boleto: [string, number, number] = ['agua conta', 199.9, 43243525];

/* arrays métodos*/
dados.map;
dados.reduce;
dados.pop;
dados.filter;

//datas
let aniversario: Date = new Date("2023-02-16 12:00");
console.log(aniversario.toString());

//funções
function addNumber(x: number, y:number ): number{
    return x + y;
}

let soma: number = addNumber(4 ,7);
console.log(soma);

function addToHello(name: string):string {
    return `Hello ${name}`;
}

console.log(addToHello("Luan"));

//funções multi tipos

function callToPhone( phone: number | string): number | string{
    return phone;
}

console.log(callToPhone(111111111));

// funções async

async function getDatabase(id: number): Promise<string>{
    return "Luan";
}

// interfaces (type x interface) - é um contrato que deve ser implementado pelas variaveis que a recebem.

type robot = {
    readonly id: number;
    name: string;
};

interface robot2 {
    readonly id: string | number;
    name: string | number;
    sayhello(): string;
};

const bot: robot = {
    id:1,
    name: "megaman",
};

// Classes

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayhello: function (): string {
        return "Hello !"
    }
};

console.log(bot, bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayhello(): string {
        return `Hello I'm ${this.name}`;
    }
}

const p = new Pessoa( 1, "Luan");
console.log(p);
p.sayhello;
console.log(p.sayhello());


class Personagem {
    nome: string;
    forca: number;
    skill: number;

    constructor (nome: string, forca: number, skill: number){
        this.nome = nome;
        this.forca = forca;
        this.skill = skill;
    }

    attack(): void {
        console.log(` Atacando com ${this.forca} pontos de forca`);
    }
}

const p1 = new Personagem("Goku", 98, 70);
p1.attack();

/*
 Data Modifiers
 
    private = só é possivel acessar a propriedade por dentro da classe(metodo construtor).
    public = é possivel acessar uma propriedade por fora da classe.
    protected = só pode ser acessado pela própria classe e suas sub classes.

    também é possivel usar data modifiers em metodos 

    ? quando não é obrigatório
    readonly = quando a propriedade é somente de leitura.
 */

    
/* sub classes, classes que herdam de outras classes.
    sub class = Mago.
    super class = Personagem.
*/
class Mago extends Personagem {
    pontosMagicos: number;
    constructor(nome: string, forca: number, skill: number, pontosMagicos: number){
        super(nome, forca, skill)
        this.pontosMagicos = pontosMagicos;
    }
}

const p2 = new Mago ("Luan", 8001, 8001, 8001);
console.log(p2);

/*
    generics - aceita um representacao generica de tipo <T>
o que faz com que no momento de instanciar posssamos passar uma tipagem.
*/
function concatArray<T>(...items: T[]): T[]{
    return new Array().concat(...items);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Luan", "Goku"], ["Vegeta"]);
console.log(numArray);
console.log(stgArray);

let dado: string = "Oi";
console.log(dado);

/*
decorators - quando queremos adicionar um comando extra a estrutura de
código - lembrar de algo (decorar) para disparar um comportamento
quando acionado um evento.

só exibe  quem chamou porque foi programado para isso em 
ExibirNome.
*/
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}

function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
    }
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);





