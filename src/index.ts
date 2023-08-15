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