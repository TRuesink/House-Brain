"use strict";

import path from "path";
import configMap from "../config/config";
import { Sequelize } from "sequelize";

// import models
import { userModel } from "./user";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = configMap[env];

interface dbInterface {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  User: any;
}

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db: dbInterface = {
  sequelize,
  Sequelize,
  User: userModel(sequelize),
  // add more models here
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
