const  ERROR = {error: "producto no econtrado"}

class Container {
    constructor(){
        this.productos = [];
    }  
    getAll(){
        return this.productos
    } 
    getById(id){
        const obj = this.productos.find((productos)=> productos.id === id);
        if(obj){
            return obj
        }else{
            return ERROR
        }
    }
    create(obj){
        const arrayOfIds = this.productos.map((productos) => productos.id)
        const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
        const id = maxId + 1;
        const newObj = {id,...obj};
        this.productos.push(newObj);
        return newObj; 
    }

    updateById(id,obj){
        const foundObj = this.productos.find((productos)=>productos.id === id)
        if(foundObj){
            const filteredProducts = this.productos.filter((productos)=> productos.id !== id);
            const newObj = {id, ...obj};
            this.productos = {...filteredProducts,newObj}
        }else{
            return ERROR
        }
    }

    deleteById(id) {
        const products = this.productos;
        const foundObj = this.productos.find((product) => product.id === id);
        if (foundObj) {
            const newObj = products.map((obj, index) => {
                if (obj.id === id) {
                    products.splice(index, 1);
                    return products;
                }
            });
        } else {
            return ERROR;
        }
    }
}

module.exports = Container;