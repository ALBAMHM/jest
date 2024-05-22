let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0


function resetProducts() {
    products=[]
    id=0
    return products
  }

function addProduct(element) {
    if (typeof element!=='string') {
      throw new Error('element must be a chain of characters');
    }
    return products.push({id:id++,name:element});
  }

function removeProduct(element) {
    if (typeof element!=='string') {
      throw new Error('element must be a chain of characters');
    }
    return products= products.filter(product=>product.name!==element);
  }

function getProducts() {
    
    return products;
  }

function getProduct(element) {
    if (typeof element!=='string') {
      throw new Error('element must be a chain of characters');
    }
    return products.filter(product=>product.name===element);
  }


function updateProduct(oldElement,newElement){
    if (typeof oldElement !== 'string' || typeof newElement !== 'string') {
        throw new Error('element must be a chain of characters');
      }
    
    const product=products.find(product=>product.name===oldElement)
    if(product){
        return product.name=newElement
    } else{
        throw new Error('product not found')
    }
}

module.exports={
    resetProducts,
    addProduct,
    removeProduct, 
    getProducts, 
    getProduct, 
    updateProduct}