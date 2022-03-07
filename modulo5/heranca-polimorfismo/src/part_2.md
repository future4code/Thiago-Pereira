#POLIMORFISMO

## 1 a)
consegui imprimir todas... apenas a ultima que ficou como:   calculateBill: [Function: calculateBill]
:nazare-confusa:


## 2 a)
O typescript não quis nem conversa de sequer deixar criar ou chamar algo em console.log, ja me tacou a chinelada com erro dizendo:   Cannot create an instance of an abstract class.ts(2511)

## 2 b) 
Diretamente eu "acho" que não tem como não, só criando uma outra classe talvez e usando herança :yuzo-pensativo:
Tipo assim:


<!-- Código TS -->
class PlateTest extends Place {
    constructor(cep: string){
        super(cep)
    }
}

const createCep: PlateTest = new PlateTest(
    "12345-050"
)

console.log("Meu CEP é:", createCep.getCep())
<!-- --- -->


## 3 a)
Teriamos de criar uma classe "filha" igual fizemos acima por exemplo, e depois declarar uma instância dela.

## 3 b)
Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

## 3 c)
Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.


## 4 a)
Ela irá herdar todos os métodos tanto de Residence, Place e Client.


## 5 a)
Assim como a "prima" dela, ela herda tudo de Place e Client, com a diferência de invés de herdar coisas da "tia" dela a Residence... ela herda de sua mãe a Commerce, mas em teoria a lógica linear acaba sendo a mesma.

## 5 b) 
Enquanto a "prima" dela trás CPF ela trás CNPJ como atributo.


## 6 a)
Ela é filha de Industry, pois (extends) herda seus atributos e métodos.

## 6 b)
Ela implementa Clients, pois é uma interface base para pegar os valores atributos de Industry.

## 6 c)
Os dados que elas oferecem não são valores que precisam vir a ser alterados.