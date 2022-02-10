export const sortFunctunality = (sortValue, products) => {
    let sortedArray = [];
    switch (sortValue) {
      case "new":
        sortedArray = products.sort((a, b) => {
               return Number(b.year) - Number(a.year)});
        break;
      case "price_desc":
        sortedArray = products.sort((a,b) => {
            return b.price - a.price
        })
        break;
      case "popularity":
        sortedArray = products.sort((a,b) => {
            return b.rating - a.rating
        })
    
        break;
      case "discount":
        sortedArray = products.sort((a,b) => {
            return b.discount -a.discount
        })
        break;
      case "price_asc":
        sortedArray = products.sort((a,b) => {
            return a.price - b.price
        })
        break;
        default: sortedArray = products;
    }
    return sortedArray; 
  };

