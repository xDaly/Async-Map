// First promise returns an array after a delay
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(
                [
                    { id: 'product1' },
                    { id: 'product2' },
                    { id: 'product3' },
                    { id: 'product4' }
                ])
            , 3000)
    })
}



//this promise depends on the result of the previous promise
const getProductId = (category) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => resolve(category.id), 1000)
    })
}

//third promise
const capitalizeId = (id) => {
    return new Promise((resolve, reject) => {
         setTimeout(() => resolve(id.toUpperCase()), 700)
    })
}




const capitalizeProductsIds = async () => {
    const products = await getProducts()
  
    Promise.all(
      products.map(async (product) => {
        const productId = await getProductId(product);
        console.log(productId);
 
        const capitalizedId = await capitalizeId(productId)
        console.log(capitalizedId);
      })
    )
  
  }


  capitalizeProductsIds();
  
