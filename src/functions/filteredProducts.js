


export const sortByAttribute = (attribute, [...products]) => {


        const sortedProducts =  products.slice()
                                        .sort( (a,b ) => {
                                            
                                            if ( a[attribute] < b[attribute] ) {return 1;}

                                            if ( a[attribute] > b[attribute] ) {return -1;}

                                                                                return 0;
                                        })
                        
                                        
    //    console.log(sortedProducts)    

       return sortedProducts

    }

export const bringTop10Products = (array) => {

                const newArray = array

            return array.splice(0,10)

    }



