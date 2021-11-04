import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import './SearchInvoice.css';
import InvoiceCard from '../ListofInvoices/InvoiceCard';
// import invoices from 'invoices.json';
// import api from '../services/api';

export default function SearchInvoice() {
  const [invoiceName, setInvoiceName] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    setInvoices([
      {
        invoice: [
          {
            id: 1,
            products: [
              {
                id: '1',
                name: 'Shampoo',
                value: '7.00',
              },
              {
                id: '2',
                name: 'Cheese',
                value: '1.30',
              },
              {
                id: '3',
                name: 'Mushrooms',
                value: '2.00',
              },
              {
                id: '4',
                name: 'Can of red beans',
                value: '1,50',
              },
              {
                id: '5',
                name: 'Tuna can',
                value: '1,00',
              },
            ],
          },
        ],
      },
      {
        invoice: [
          {
            id: 2,
            products: [
              {
                id: '6',
                name: 'Eggs',
                value: '2,60',
              },
              {
                id: '7',
                name: 'Sugar',
                value: '1.10',
              },
              {
                id: '8',
                name: 'Rice',
                value: '0.80',
              },
              {
                id: '9',
                name: 'Hot sauce',
                value: '2.10',
              },
              {
                id: '10',
                name: 'Vinegar',
                value: '1.40',
              },
            ],
          },
        ],
      },
    ]);

    // Real api endpoint:
    // http://localhost:8080/invoices

    // axios
    //   .get('products.json')
    //   .then((res) => {
    //     console.log(res.data);
    //     setInvoices(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className='searchContainer'>
      <div className='searchContentWrapper'>
        <div className='searchCard'>
          <h1 className='searchCardText'>Search Invoice</h1>
          <div className='searchArea'>
            <Form className='d-flex searchForm'>
              <div className='searchFormDiv'>
                <label className='searchLabels'>Search Invoice by name</label>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2 searchBar'
                  aria-label='Search'
                />
                <Button className='searchBtns' variant='outline-success'>
                  Search
                </Button>
              </div>
              <div className='searchFormDiv'>
                <label className='searchLabels'>Search Invoice by number</label>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2 searchBar'
                  aria-label='Search'
                />
                <Button className='searchBtns' variant='outline-success'>
                  Search
                </Button>
              </div>
            </Form>
            <div className='searchList'>
              <div className='searchListTitle'>
                <h4>List of invoices by </h4>
              </div>
              <ul className='searchListText'>
                <ListGroup>
                  {invoices.map((elem, index) => (
                    <InvoiceCard
                      key={index}
                      info={elem}
                      // value={elem.invoice.Buttonproducts.value}
                      // invoiceNbr={elem.invoice.id}
                    />
                  ))}
                </ListGroup>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <li>{elem}</li>; */

// {
//   /* <div>
//     <h1>Search Invoice</h1>

//     <h3>Search Invoice by name</h3>
//     <input type='text' placeholder='Search' />
//     <h3>Search Invoices by number</h3>
//     <input type='text' placeholder='Search' />

//     <h5>List of invoices:</h5>
//     <ListGroup>
//       {invoices.map((elem) => (
//         <ListGroup.Item>{elem}</ListGroup.Item>
//       ))}
//     </ListGroup>
//   </div> */
// }

// <ListGroup.Item>{elem}</ListGroup.Item>;

// {/* <ListGroup.Item>{elem}</ListGroup.Item>
// , {
//         responseType: 'json',
//         credentials: 'include',
//         mode: 'no-cors',
//         headers: {
//           'Access-Control-Allow-Headers':
//             'Content-Type,X-Requested-With,Accept,Authorization,Origin,Access-Control-Request-Method,Access-Control-Request-Headers',

//           Accept: 'application/json; odata=verbose',
//         },
//       }
//   .get(`http://localhost:8080/list/invoices.json`)

//  <InvoiceCard key={index} invoice={elem} /> */}
