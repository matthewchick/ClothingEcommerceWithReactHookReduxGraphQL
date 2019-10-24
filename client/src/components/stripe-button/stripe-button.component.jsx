import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
/*
Axios is a Javascript library used to make http requests from node.js or XMLHttpRequests from the browser 
and it supports the Promise API that is native to JS ES6. Another feature that it has over .fetch() 
is that it performs automatic transforms of JSON data.
*/
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_zkkzJcxdrVxAUWl0vT6SF2UC';

    const onToken = token => {
        console.log(token);
        
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please sure you use the provided credit card'
            );
        });
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Fiona Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={ `Your total is $${price}` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token ={ onToken }
            stripeKey={ publishableKey }

        />
    )
}

export default StripeCheckoutButton;