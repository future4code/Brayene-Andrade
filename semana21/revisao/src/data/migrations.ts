import { connection } from "..";
import PokemonGo from "./PokemonGo.json";

const migrations = async () => {
  try {
    await connection.raw(`
    CREATE TABLE IF NOT EXISTS pokemons(
        id INT PRIMARY KEY AUTO_INCREMENT,
        Row_VALUE VARCHAR(255),
        Name VARCHAR(255),
        Pokedex_Number VARCHAR(255),
        Img_name VARCHAR(255),
        Generation VARCHAR(255),
        Evolution_Stage VARCHAR(255),
        Evolved VARCHAR(255),
        FamilyID VARCHAR(255),
        Cross_Gen VARCHAR(255),
        Type1 VARCHAR(255),
        Type2 VARCHAR(255),
        Weather1 VARCHAR(255),
        Weather2 VARCHAR(255),
        STAT_TOTAL VARCHAR(255),
        ATK INT,
        DEF VARCHAR(255),
        STA VARCHAR(255),
        Legendary VARCHAR(255),
        Aquireable VARCHAR(255),
        Spawns VARCHAR(255),
        Regional VARCHAR(255),
        Raidable VARCHAR(255),
        Hatchable VARCHAR(255),
        Shiny VARCHAR(255),
        Nest VARCHAR(255),
        New_pkm VARCHAR(255),
        NotGettable VARCHAR(255),
        Future_Evolve VARCHAR(255),
        CP40 VARCHAR(255),
        CP39 VARCHAR(255)
        );
    `);
    console.log("tabela criada");

    await connection("pokemons_revisao").insert(PokemonGo);
  } catch (error:any) {
    console.log(error.sqlMessage);
  }
};
migrations()