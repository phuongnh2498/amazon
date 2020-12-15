import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider'
import { firestore } from '../firebase'
import Order from './Order'

export default function Orders() {

    const { user } = useStateValue();
    const [orders, setOrders] = useState();

    useEffect(() => {
        if (user) {
            firestore
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders__container">
            <h1>Your orders</h1>
            <div className="orders__content">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>

        </div>
    )
}
