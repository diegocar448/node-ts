export interface User {
    name:string
    email:string
}


const db = [
    {
        name: "Reuven",
        email: "reuven@didi.com",
    }
]

export class UserService{
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name:string, email:string) => {
        const user = {
            name,
            email
        }
        this.db.push(user)
        console.log("DB atualizado", this.db)
    }

    getAllUsers = () => {
        return this.db;
    }

    nameVerify = (name:string, email:string) => {
        const user = {
            name,
            email
        }
        
        console.log("Nome como nulo verificado", user)
    }

    emailVerify = (name:string, email:string) => {
        const user = {
            name,
            email
        }
        
        console.log("Email como nulo verificado", user)
    }   
}