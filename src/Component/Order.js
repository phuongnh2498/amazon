import React from 'react'
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import EachItemPayment from './PaymentPage/EachItemPayment'
export default function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format()}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <Grid spacing={3} container>
                {order.data.cart?.map(item => (
                    <EachItemPayment
                        item={item}
                    />
                ))}
            </Grid>

        </div>
    )
}
