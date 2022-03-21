const URL ="https://622b88ea14ccb950d23d4a8a.mockapi.io/productsKaneda/"

export function getProduct(){
    return fetch(`${URL}`)

}

export function getProductId(id){
    return fetch(
        `${URL}${id}`
      
          
         )

}

