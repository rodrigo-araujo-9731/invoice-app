import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash, FaPlus, FaRegThumbsUp } from 'react-icons/fa';
import './Invoices.css';

function InvoiceCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const products = props.info.invoice.products;
  console.log(props.info.invoice);

  return (
    <div className='invoicesCardDiv'>
      <div className='invoicesListDiv'>
        <div className='invoicesListText'>
          <button onClick={handleShow}>Invoice {props.info.invoice.id}</button>
        </div>
        <div className='invoicesListIconDiv'>
          <FaTrash className='trashIcon' />
        </div>
      </div>
      {show ? (
        <div show={show} onHide={handleClose} className='modalDiv'>
          <div className='modalDivBody'>
            <div>
              <h1>Invoice nº XPTO{props.info.invoice.id}</h1>
            </div>
            <div>
              <p>Products</p>
              <ul>
                {products.map((elem, index) =>
                  Object.entries(elem).map((item) => <li>{item.name}</li>)
                )}
              </ul>
              <p>Username</p>
            </div>
            <div className='modalDivTotalDiv'>
              <p>Total</p>
            </div>
          </div>
          <div className='closeBtnDiv'>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InvoiceCard;
