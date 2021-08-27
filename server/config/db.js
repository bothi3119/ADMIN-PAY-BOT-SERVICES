const mongoose = require("mongoose");

const DB_URI =
  "mongodb+srv://jobubothi3119:Nabruto3119@cluster0.a2wo7.mongodb.net/adminPayBothi?retryWrites=true&w=majority";

module.exports = () => {
  const connect = () => {
    mongoose
      .connect(DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((response) => {
        console.log("<----- CONEXION EXITOSA CON MONGO BD---->");
      })
      .catch((error) => {
        console.log("<----- OCURRIO UN ERROR EN LA CONEXIOON", error);
      });
  };

  connect();
};
