import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()
export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    multipleStatements: true
  }
})




// connection("redfox_pokemons")
//   .insert(pokemons.map((pokemon:any)=>{
//     pokemon.Row_Value = pokemon.Row
//     delete pokemon.Row
//     return pokemon
//   }))
//   .then(() => { console.log("Sucesso!") })
//   .catch(e => console.log(e.sqlMessage))
//   .finally(() => { connection.destroy() })
