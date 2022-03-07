// 1 a)
// Constructor é o metodo da classe, usado para cria-la, atualiza-la ou chamar-la... 
// chamamos usando o new UserAccount(seus parâmetros)

//

//1 b)
// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
//   }

// const newUser = new UserAccount("123.456.789-10", "Thiago", 27)
// Ele apareceu no meu terminal apenas 1x

// 1 c)
// criando um "metodo" dentro da classe para "acessa-las"



// ===========================================================
// 2 

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string){
        this.date = date;
        this.value = value;
        this.description = description;
    }

    public getDate(): string {
        return this.date
        }

    public getValue(): number {
        return this.value
        }

    public getDescription(): string {
        return this.description
        }   
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  public getCpf(): string {
    return this.cpf
    }

  public getName(): string {
    return this.name
    }

  public getAge(): number {
    return this.age
    }

  public getBalance(): number {
    return this.balance
    }

  public getTransactions(): Transaction[] {
    return this.transactions
    }

  public setTransactions(newTransactions: Transaction): void{
    this.transactions.push(newTransactions)
    }

}

const newUser = new UserAccount("123.456.789-10", "Daurizio", 27)
const newTransaction = new Transaction("31/02/1000", 350, "Como assim 31 de fevereiro Thiago? Backend queimou seus ultimos 5 neurônios restantes?")

newUser.setTransactions(newTransaction)
console.log("Meu querido diário... será que finalmente vai dar certo?", newUser.getTransactions())



// ===========================================================
// 3

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public setAccounts(newAccounts: UserAccount): void{
      this.accounts.push(newAccounts)
      }
    
    public getAccounts(): UserAccount[]{
      return this.accounts
      }
  
  }

