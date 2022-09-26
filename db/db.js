import knex from "knex";
import knexConfig from "./knex-config";
const environment = process.env.NODE_ENV || "development";

export default knex(knexConfig[environment]);
