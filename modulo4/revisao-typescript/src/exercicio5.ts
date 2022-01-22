console.log("EXERCICIO - 5")


type Users = {
    name: string,
    email: string,
    role: string
}

const users = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


const pickOnlyAdmin = (users: Users[]) => {
    const picked = users.filter((user) => {
        if(user.role === "admin"){
            return user
        }
    }).map((user) => {
        return user.email
    })
    return picked
}

console.log(pickOnlyAdmin(users))