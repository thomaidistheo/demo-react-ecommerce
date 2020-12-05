import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price:'$5', image: 'https://thumblr.uniid.it/product/194739/7821e8f021ac.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg' },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products