import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from "../components/layout"

class Product extends React.Component {
    // constructor() {
    //     this.handleSubmit.bind(this);
    // }

    componentDidMount() {
        this.stripe = window.Stripe('pk_test_J6BsIRTrRC9DtbjRjuNZoeWM');
    }

    handleSubmit(sku) {
        return event => {
            event.preventDefault();

            this.stripe
                .redirectToCheckout({
                    items: [{ sku, quantity: 1}],
  
                    // Do not rely on the redirect to the successUrl for fulfilling
                    // purchases, customers may not always reach the success_url after
                    // a successful payment.
                    // Instead use one of the strategies described in
                    // https://stripe.com/docs/payments/checkout/fulfillment
                    successUrl: 'http://localhost:8000/success',
                    cancelUrl: 'http://localhost:8000/canceled',                                
                })
                .then(function (result) {
                    if (result.error) {
                      // If `redirectToCheckout` fails due to a browser or network
                      // error, display the localized error message to your customer.
                      console.error(result.error.message);
                    }
                })
            }
        }
                

    render() {
        const { id, currency, price, image, name } = this.props;
        const priceFloat = (price/100).toFixed(2);
        const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'usd' }).format(priceFloat);
        return (
            <form onSubmit={this.handleSubmit(id)}>
                <h2>{name}</h2>
                <span>{image}</span>
                <h6>{formattedPrice}</h6>
                <button type="submit">Buy Now</button>
            </form>
        )
    }
}

export default () => (
    <StaticQuery
        query={ graphql`
        {
            allStripeSku {
              edges {
                node {
                  price
                  id
                  currency
                  attributes {
                    name
                  }
                  image
                }
              }
            }
          }
        `}
      render = { data => (
          <Layout>
            { data.allStripeSku.edges.map(({node: sku}) => (
                <Product
                    id  = {sku.id}
                    price = {sku.price}
                    currency = {sku.currency}
                    image = {sku.image}
                    name = {sku.attributes.name}
                />
            ))}
            </Layout>
      )}
    />
)
            