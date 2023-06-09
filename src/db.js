require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_URL
} = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/turismo`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

const sequelize = new Sequelize(DB_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {Activity, Comment, Hotel, Package, Reservation, Restaurant, User} = sequelize.models

User.hasMany(Comment)
Comment.belongsTo(User)

Package.hasMany(Comment)
Comment.belongsTo(Package)

Activity.hasMany(Comment)
Comment.belongsTo(Activity)

Hotel.hasMany(Comment)
Comment.belongsTo(Hotel)

Restaurant.hasMany(Comment)
Comment.belongsTo(Restaurant)

User.hasMany(Reservation)
Reservation.belongsTo(User)

Package.hasMany(Reservation)
Reservation.belongsTo(Package)

Package.belongsToMany(Restaurant, { through: "packageRestaurant" })
Restaurant.belongsToMany(Package, { through: "packageRestaurant" })

Package.belongsToMany(Activity, { through: "packageActivity" })
Activity.belongsToMany(Package, { through: "packageActivity" })

Hotel.hasMany(Package)
Package.belongsTo(Hotel)

User.hasMany(Package)
Package.belongsTo(User)


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}