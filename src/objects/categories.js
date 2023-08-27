// El atributo category es inventado por mi, el categoryID es el ID de ML. 
// Como mis categorias incluyen varias de mercado libre (mi categoria otros incluye muchas categorias por ejemplo)
// Hice un array para category ID, la logica se puede ver en ItemListConteiner
const acousticGuitar = {

    categoryID: ['MLA2989','MLA4274'],
    category: 'Acoustic-guitars',
    img: '/images/Categories/guitarra acustica.png'

}


const electricGuitar= {

categoryID: ['MLA4275'],
category: 'Electric-guitars',
img: '/images/Categories/guitarra electrica.png'

}

const pianos = {
category: 'Pianos',
categoryID: ['MLA2997', 'MLA402916'],
img: '/images/Categories/Pianos.png'
}

const microphones = {
category: 'Microphones',
categoryID: ['MLA91758', 'MLA91773'],
img: '/images/Categories/microfonos.png'
}

const cuerdas = {
category: 'Cuerdas',
categoryID: ['MLA29272'],
img: '/images/Categories/cuerdas.png'
}

const otros= {

category: 'Otros',
categoryID: ['MLA8937','MLA413431','MLA402916','MLA44408','MLA3012','MLA417360', 'MLA431427', 'MLA91836', 'MLA3011'],
img: '/images/Categories/Otros.png'

}

export const allCategories = [acousticGuitar, electricGuitar, pianos, microphones, cuerdas, otros]
