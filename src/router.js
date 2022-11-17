const express = require("express")
const Container = require("./Container")

const router = express.Router();
const container = new Container();

router.get("/productos", (req,res)=>{
    const products = container.getAll();
    res.send(products)
})
router.get("/productos/:id", (req,res)=>{
    const id = req.params.id;
    const products = container.getById(parseInt(id));
    res.send(products)
})
router.post("/productos", (req,res)=>{
    const obj = req.body;
    const newProduct = container.create(obj);
    res.send(newProduct)
})
router.put("/productos/:id", (req,res)=>{
    const id = req.params.id;
    const obj = req.body;
    const updateProduct = container.updateById(parseInt(id),obj)
    res.send(updateProduct)
})
router.delete("/productos/:id", (req,res)=>{
    const id = req.params.id;
    const deletProduct = container.deleteById(parseInt(id))
    res.send(deletProduct)
})

module.exports = router;