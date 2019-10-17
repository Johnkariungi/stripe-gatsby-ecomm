import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class Button extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_J6BsIRTrRC9DtbjRjuNZoeWM');
  }
  render() {
    return (
    <form onSubmit={ event => {
      console.log('Hello?')
      event.preventDefault();
      this.stripe.redirectToCheckout({
        items: [{sku: 'sku_G0JBoZeKSyUQ9L', quantity: 1}],
  
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
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      })
    }}>
      <button type="submit">Buy Pants</button>
    </form> 
    )}
}

  


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Buy Jogger Pants!</h1>
    <Button />
  </Layout>
)

export default IndexPage
