const sequelize = require('../sequelize');

async function reset() {
    await sequelize.sync({ force: true });

    // await sequelize.models.user.build([
    //     { username: 'admin'},
    //
    // ]);

    console.log('Done!');
}

reset();
