const { DataTypes, sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5mrsWmnciwVDe_eZXWOxUxjY6BPcDrtYCxsp_w75GB9WvrApUuUIg71guTi8XH0BreE&usqp=CAU",
    }
  });
};





// APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII::::::::::

//21829f8e4fb74e889c0242819631b23a