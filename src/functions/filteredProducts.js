


export const sortByAttribute = (attribute, [...products]) => {


        const sortedProducts =  products.slice()
                                        .sort( (a,b ) => {
                                            
                                            if ( a[attribute] < b[attribute] ) {return 1;}

                                            if ( a[attribute] > b[attribute] ) {return -1;}

                                                                                return 0;
                                        })
                        
                                        
       console.log('bombon', sortedProducts)    

       return sortedProducts

    }



