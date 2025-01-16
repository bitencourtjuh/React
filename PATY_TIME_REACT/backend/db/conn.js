const mongoose = require("mongoose");

async function main() {

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://julia:311012@cluster0.lpsyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Conectado ao banco de dados!");
    } catch (error) {

        console.log(`Erro:${error}`)
        
    }
    
}

module.exports = main