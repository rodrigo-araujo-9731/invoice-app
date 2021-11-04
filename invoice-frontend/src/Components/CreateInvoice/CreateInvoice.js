import React from 'react';
import { Form } from 'react-bootstrap';
import { IoAddCircleOutline, IoSaveOutline } from 'react-icons/io5';
import './CreateInvoice.css';

export default function CreateInvoice() {
  return (
    <div className='create-container'>
      <div className='title'>
        <h1>Create New Invoice</h1>
      </div>
      <div className='product'>
        <legend>Product</legend>
        <Form.Select className='productSelect' aria-label='Select your product'>
          <option>Select products menu</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>
        <div className='addProductDiv'>
          <button className='addProduct addColorBtn'>
            <IoAddCircleOutline size={30} />
          </button>
        </div>
      </div>
      <div className='services'>
        <legend>Services</legend>
        <Form.Select
          className='servicesSelect'
          aria-label='Select your services'
        >
          <option>Select services menu</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>
      </div>
      <div className='total'>
        <legend>Total</legend>
        <input className='totalValue' placeholder='Value' />
      </div>
      <div className='saveBtnDiv'>
        <button className='saveInvoice'>
          <IoSaveOutline size={30} />
        </button>
      </div>
    </div>
  );
}
