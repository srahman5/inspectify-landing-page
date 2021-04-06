import { useState } from 'react';

function CreateOrder(props){

  const [address, setAddress] = useState("");

  const handleAddress = (event) => {
    setAddress(event.target.value);
  }

  const openModal = (event) => {
    props.onSetShow(true)
  }

  const createOrder = (event) => {
    let url = "https://dev.getinspectify.com/api/orders/"
    let body = {
        "property_address": address,
        "team_token": "X8x7xb3rXRAHTHc2wfgjFzW5"
    }
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      //If successful, bring up the modal
      if(!data.errors){
        openModal();
      } else {
        console.log("failure")
      }
    })
  }

  return(
  <div className="CreateOrder">
    <div className="orderText">
      <div className="topOrderText">
        What is the address of the home you need inspection protection?
      </div>

      <div className="propertyAddress">
        <input className="addressInput" type="text" placeholder="     Property address" value={address} onChange={handleAddress}></input>
        <button className="orderButton" onClick={createOrder}>Create Order</button>
      </div>

      <div className="smalltext">
        Service Contracts are offered through Hippo Warranty Solutions Inc. Coverage under your Service Contract is subject to the terms and conditions of the Service Contract. Availability and qualification for coverage, as well as the terms, conditions, exclusions may vary by jurisdiction (see the state-specific endorsements for the terms specific to your jurisdiction). This Service Contract is not available outside the United States or in any jurisdiction in which we are not licensed to do business that requires such a license, and this material is not soliciting business in any such jurisdiction.
      </div>
    </div>
  </div>
  )
}

export default CreateOrder;
