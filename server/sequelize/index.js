const {Sequelize} = require('sequelize');
const {applyExtraSetup} = require('./extra-setup');
const config = require('config')


const sequelize = new Sequelize(
    config.get("db_name"),
    config.get("user"),
    config.get("password"),
    {
        dialect: 'postgres',
    });

const modelDefiners = [
    require('./models/user.model'),
    // require('./models/post.model'),
    // require('./models/tag.model'),

];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// applyExtraSetup(sequelize);

module.exports = sequelize;
