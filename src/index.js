const { app } = require("./server.js");
const {databaseConnect} = require("./utils/database.js");

const PORT = process.env.PORT || 3000;

//Connect to DB as soon as index.js runs, not recommend:
//databaseConnect();

app.listen(PORT, () => {
    console.log("Server successfully started!");

    //After server successfully starts, connect to the database
    databaseConnect();
});
