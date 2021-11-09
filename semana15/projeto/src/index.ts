import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());


import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});



type newUser = {
    id: number
    name: string,
    cpf: number 
    age: number
    // balance: number
    // extract : gastos[]
}

type gastos ={
    value:number
    date: number
    description: string
}

type transactions ={
    description: string
    date: number
    value: number
}


const users: object[] =  []




app.post('/users', (req: Request, res: Response) => {
    try {
        const {id, name, cpf, age} = req.body
        if (age < 18 ){
            throw new Error("Ohhh que pena, vc é menor de idade");
        }
        
        const createUser: newUser | undefined = { 
           id, name, cpf, age
        }
        users.push(createUser)
        return res.send(createUser)
        
    } catch (error: any) {
        return res.status(400).send(error.message)
    }

})

app.get('/users', (req: Request, res: Response) => {
    try {
        const result = users.map((user) => user);
        res.send(result)
    } catch (err: any) {
        return res.status(404).send(err.message);
    }
})
