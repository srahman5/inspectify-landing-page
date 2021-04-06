function Modal(props){

  const closeModal = (event) => {
    props.onSetShow(false);
  }

  if(props.show){
    return(
      <div className="modalBackdrop">
        <div className="Modal">
            <div className="modalText">
              <div className="modalTopText">
                Your order has been created!
              </div>
              <div>
                <button className="modalButton" onClick={closeModal}>Done</button>
              </div>
            </div>
        </div>
      </div>


    )
  } else {
    return(
      <div>&nbsp;</div>
    )
  }
}

export default Modal;
