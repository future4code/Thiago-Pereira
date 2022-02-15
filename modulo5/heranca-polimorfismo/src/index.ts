console.log("ja carregou...")

// HERANÇAS
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(id: string, email: string, name: string, password: string){
        console.log("Chamado da classe User")
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public get_Id(): string{
        return this.id
        }
        
    public get_Email(): string{
        return this.email
        }

    public get_Name(): string{
        return this.name
        }

    public introduceYourself(): string{
        return `Olá, sou ${this.name}... tudo bem?`
        }
}
 

const createUser: User = new User(
    Date.now().toString(),
    "daurizio@email.com",
    "Thiago",
    "senhadifícil"
)

console.log({
    id: createUser.get_Id(), 
    email: createUser.get_Email(), 
    name: createUser.get_Name()
})




class UserCustomers extends User {
    public purchageTotal: number = 0;
    private creditCard: string;

    constructor(id: string, email: string, name: string, password: string, creditCard: string){
        super( id, name, email, password );
        console.log("Alô, Customer ta me ouvindo!?");
        this.creditCard = creditCard;
    }

    public get_CreditCard(): string {
        return this.creditCard;
        }
}

const createCustomers: UserCustomers = new UserCustomers(
    Date.now().toString(),
    "daurizio_game@email.com",
    "ThiiDaurizio",
    "SeNhA_NíVeL-DaRkSoUlS",
    "cartão-estourado kkkrying"
)

console.log({
    id: createCustomers.get_Id(), 
    email: createCustomers.get_Email(), 
    name: createCustomers.get_Name(), 
    creditCard: createCustomers.get_CreditCard(), 
    message: createUser.introduceYourself()
})


class UserEmployees extends User {

}

class UserSellers extends User {

}

// fiquei confuso aqui, no enunciado nas heranças diz que temos 3 tipos de Usuários... 
// Consumidores (Customers), Funcionários (Employees) e Vendedores (Sellers)
// porém só foi aplicada tarefas para fazermos na classe Consumidores (Customers)
// As outros ficaram em branco :yuzo-pensativo:


// ==================================================================================
// POLIMORFISMO

interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const createClient: Client = {
    name: "Thiago",
    registrationNumber: 5,
    consumedEnergy: 150,
        calculateBill: () => {
            return 5
        }
}

console.log(createClient)



abstract class Place {
    constructor(protected cep: string) {}
        public getCep(): string {
            return this.cep;
        }
    }

// const createCep: Place = new Place(
//     "12345-050"
// )


class Residence extends Place {
    constructor(protected residentsQuantity: number, cep: string){
        super(cep)
    }

    public get_residentsQuantity(): number{
        return this.residentsQuantity
    }
}


class Commerce extends Place {
    constructor( protected floorsQuantity: number, cep: string){
        super(cep)
    }

    public get_floorsQuantity(): number{
        return this.floorsQuantity
    }
}


class Industry extends Place {
    constructor( protected machinesQuantity: number, cep: string){
        super(cep)
    }

    public get_machinesQuantity(): number {
        return this.machinesQuantity
    }
}

const createResidence = new Residence(5, "11111-111")

const createCommerce = new Commerce(8, "22222-222")

const createInsdustry = new Industry(12, "33333-333")

console.log({
    cepFromResidence: createResidence.getCep(), 
    cepFromCommerce: createCommerce.getCep(),
    cepFromIndustry: createInsdustry.getCep()
})



class ResidencialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string,
        ){ super(residentsQuantity, cep) }

    public get_Cpf(): string{
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}


class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number, 
        cep: string,
    ){ super(floorsQuantity, cep) }

    public get_Cpf(): string{
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}


class IndustrialClient extends Industry implements Client {
    constructor(
        private registerNumber: string | number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number, 
        cep: string
    ){ super(floorsQuantity, cep) }

    public get_registrationNumber(): string | number{
        return this.registrationNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}