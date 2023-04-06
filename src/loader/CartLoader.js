import { getShoppingCart } from "../utilities/fakedb"

const cartProductsLoader= async()=>{   
    const loadedProduct=await fetch("packeg.json")
    const products=await loadedProduct.json()
    const storedCart=getShoppingCart()
    const savedCart=[]
    if(storedCart){
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity
                savedCart.push(addedProduct)
            }
        }
    }
    return savedCart;
    }
 

export default cartProductsLoader;