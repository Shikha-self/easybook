
const dbconfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");

    const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
        host : dbconfig.HOST,
        dialect : dbconfig.dialect,
        //operatorsAliases: false,
    
        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle,

        },
    }); 

    sequelize
    .authenticate()
    .then(() => {
        console.log("connected..");
    })
    .catch((err) => {
        console.log("Error" + err);
    });

    const db = {};
    db.Sequelize  = Sequelize
    db.sequelize = sequelize

    db.users = require("./usermodels.js")(sequelize, DataTypes);


    // db.sequelize.sync({ force: true }).then(() => {
    //     console.log("yes re-sync done!");
    // });
    db.sequelize.sync({ force: false /* or false if you want to avoid data loss */ })
    .then(() => {
        console.log('Database and tables created!');
    })
    .catch((err) => {
        console.error('Error creating database and tables:', err);
    });

    
    module.exports = db;
    exports.db = db


