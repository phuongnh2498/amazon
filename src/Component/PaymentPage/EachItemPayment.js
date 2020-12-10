import React from 'react'
import Grid from '@material-ui/core/Grid';

export default function EachItemPayment({ item }) {

    return (
        <Grid item md={12} spacing={3} className="cart__item">
            <Grid container >
                <Grid item md={4}>
                    <img className="item__image" src={item.image} alt="Flying Paper Cranes Birds" />
                </Grid>
                <Grid item md={8}>
                    <strong class="title">{item.title}</strong>
                    <br />
                    <span class="price">${item.price}</span>
                    <br />
                    Quantity: {item.quantity}
                </Grid>
            </Grid>
        </Grid>
    )
}
