function CreateOrder(){
  return(
  <div className="CreateOrder">
    <div className="orderText">
      <div className="topOrderText">
        What is the address of the home you need inspection protection?
      </div>

      <div className="propertyAddress">
        <input className="addressInput" type="text" placeholder="Property address"></input>
        <button className="orderButton">Create Order</button>
      </div>

      <div className="smalltext">
        Service Contracts are offered through Hippo Warranty Solutions Inc. Coverage under your Service Contract is subject to the terms and conditions of the Service Contract. Availability and qualification for coverage, as well as the terms, conditions, exclusions may vary by jurisdiction (see the state-specific endorsements for the terms specific to your jurisdiction). This Service Contract is not available outside the United States or in any jurisdiction in which we are not licensed to do business that requires such a license, and this material is not soliciting business in any such jurisdiction.
      </div>
    </div>
  </div>
  )
}

export default CreateOrder;
