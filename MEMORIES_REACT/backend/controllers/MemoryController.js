const Memory = require("..//models/Memory")

// Create a new memory
const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;
    const src = `images/${req.file.filename}`;

    console.log(req.file);

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Por favor, preencha todos os campos." });
    }

    const newMemory = new Memory({
      title,
      src,
      description,
    });
    await newMemory.save();
    res.json({ msg: "Memória criada com sucesso!", newMemory });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ocorreu um erro");
  }
  
};

// get memories
const getMemories = async (req, res) => {
    try {
        const memories = await Memory.find()

        res.status(memories)
    } catch (error) {
    res.status(500).send("Ocorreu um erro");
    }
};

// get memory
const getMemory = async (req, res) => {

    try {

        const memory = await Memory.findById(req.params.id)

        if(!memory){
            res.status(400).json({ msg: "Memoria nao encontrada" });    
        }
        res.json(memory)
    } catch (error) {
        res.status(500).send("Ocorreu um erro");
    }
}



module.exports = {createMemory, getMemories, getMemory}


