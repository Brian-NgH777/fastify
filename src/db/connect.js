const { Sequelize } = require('sequelize');
const { development } = require('./config/config');
const mongoose = require('mongoose');

const sequelizeConnect = () => {
    const sequelize = new Sequelize(development.database, development.username, development.password, {
        host: development.host,
        dialect: development.dialect,
        port: development.port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    });
    
    sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
    
    const db = {};
    
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    db.Class = require("../application/class/class.model")(sequelize, Sequelize);
    db.User = require("../application/user/user.model")(sequelize, Sequelize);
    return db;
}

const mongodbConnect = () => {
    return {
        // force to close the mongodb connection when app stopped
        // the default value is false
        forceClose: true,
        name: 'MONGO1',
        url: 'mongodb+srv://transybao93:GRnKRZJpnvwNSatR@singapore-sandbox.tjkg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    };
}

const mongooseConnect = () => {
    let connectionString = 'mongodb+srv://transybao93:GRnKRZJpnvwNSatR@singapore-sandbox.tjkg3.mongodb.net/test?retryWrites=true&w=majority';
    let options = {
        useNewUrlParser: true,
        autoIndex: true,
        useUnifiedTopology: true,
        poolSize: 3,
        useCreateIndex: true,
        socketTimeoutMS: 10000, //- milliseconds
    };
    //- more options: https://mongoosejs.com/docs/connections.html
    //- [async process] connect to database
    mongoose.connect(connectionString, options);
    //- mongoose event catch
    mongoose.connection.on('connected', () => {
        console.info('\x1b[32m', 'Database connected!', '\x1b[0m');
        // logger.info('Database connected with URI ' + connectionString);
        console.info('with URI', connectionString);
    });
    mongoose.connection.on('reconnected', () => {
        console.info('Database reconnected...');
        // logger.info('Database reconnected...');
    });
    mongoose.connection.on('error', (err) => {
        console.info('Database error !!!');
        // logger.error('Database error: ' + err);
        console.error('Details: ', err);
    });
    mongoose.connection.on('disconnected', () => {
        console.info('Database disconnected...');
        // logger.info('Database disconnected...');
    });
    return mongoose;
}

module.exports = {
    sequelizeConnect,
    mongodbConnect,
    mongooseConnect
};