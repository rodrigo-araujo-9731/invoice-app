import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaTrash, FaPlus, FaRegThumbsUp } from 'react-icons/fa';
import './Invoices.css';

export default function Invoices() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='invoicesContainer' id='page-restrict'>
      <div className='invoiceContentWrapper'>
        <div className='invoicesCard'>
          <h1 className='invoicesCardText'>My List of Invoices</h1>
        </div>
        <div className='invoicesCardDiv'>
          <div className='invoicesListDiv'>
            <div className='invoicesListText'>
              <button onClick={handleShow}>Invoice 1</button>
            </div>
            <div className='invoicesListIconDiv'>
              <FaTrash className='trashIcon' />
            </div>
          </div>
          {show ? (
            <div show={show} onHide={handleClose} className='modalDiv'>
              <div className='modalDivBody'>
                <div>
                  <h1>Invoice nº XPTO</h1>
                </div>
                <div>
                  <p>Products</p>
                  <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
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

          <div className='invoicesListDiv'>
            <div className='invoicesListText'>
              <button onClick={handleShow}>Invoice 2</button>
            </div>
            <div className='invoicesListIconDiv'>
              <FaTrash className='trashIcon' />
            </div>
          </div>
          {show ? (
            <div show={show} onHide={handleClose} className='modalDiv'>
              <div className='modalDivBody'>
                <div>
                  <h1>Invoice nº XPTO</h1>
                </div>
                <div>
                  <p>Products</p>
                  <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
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
        <div className='plusAddBtnDiv'>
          <Link to='/list/create' className='plusAddBtn'>
            <FaPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
