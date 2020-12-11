import React, { useState, useEffect } from 'react'
import BackBtn from '../Common/BackBtn'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyFormat from 'react-currency-format';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import EachItemPayment from './EachItemPayment'
import PayTotalCard from './PayTotalCard'
import { useStateValue } from '../../context/StateProvider'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { getCartTotal } from '../../context/reducer';

export default function Payment() {
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();
    const { cart } = useStateValue();

    const total = getCartTotal(cart);
    const [error, setError] = useState(null)
    const [disable, SetDisable] = useState(true)

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")

    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `http://localhost:5001/my-scuff/us-central1/api/payments/create?total=${total * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
    console.log('client secret: ', clientSecret)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }
    const handleChange = e => {
        SetDisable(e.empty);
        setError(e.error ? e.error.message : "")
    }
    return (
        <>
            <BackBtn />
            <div className="pay__container">
                <div className="pay__content">
                    <form onSubmit={handleSubmit}>
                        <div className="ship">
                            <Typography className="ship__title" variant="h6" gutterBottom>
                                Shipping address
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last name"
                                        fullWidth
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address1"
                                        name="address1"
                                        label="Address line 1"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="address2"
                                        name="address2"
                                        label="Address line 2"
                                        fullWidth
                                        autoComplete="shipping address-line2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="shipping address-level2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="country"
                                        name="country"
                                        label="Country"
                                        fullWidth
                                        autoComplete="shipping country"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                        label="Use this address for payment details"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="ship">
                            <Typography className="ship__title" variant="h6" gutterBottom>
                                Contact Email
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        autoComplete="example@gmail.com"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phonenumber"
                                        name="phonenumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="+0323232"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                        label="Use this Email for payment details"
                                    />
                                </Grid>
                            </Grid>
                        </div>

                        <div className="card__thing">
                            <div>
                                <CurrencyFormat
                                    renderText={value => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={total}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                            <CardElement onChange={handleChange} />
                        </div>

                        <div className="check__out">
                            <Button disabled={processing || disable || succeeded} variant="contained" color="primary" className="btn__checkou" type="submit">
                                {processing ? "processing..." : "Checkout"}
                            </Button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
                <div className="pay__credential">
                    <PayTotalCard cart={cart} />
                    <div className="cart__right">
                        <Grid container spacing={3} className="cart__content">
                            <div className="heading__cart">
                                <h2 className="heading__title">Items</h2>
                                <Link to="/cart" className="heading__edit">
                                    <span>Edit</span>
                                </Link>
                            </div>
                            {cart?.length > 0 ? cart.map(product => {
                                return <EachItemPayment key={product.id} item={product} />
                            }
                            ) : <h3 className="non__item">You don't have any item in your cart</h3>}
                        </Grid>
                    </div>
                </div>

            </div>

        </>
    )
}
