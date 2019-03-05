import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     isLoaded: false,
     contacts: []
   };
 }
 componentDidMount() {

    const request = new Request('/api/contact/');

    fetch(request)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: result.message,
            contacts: result.contacts
          });
          console.log(this.state.isLoaded);
          console.log(this.state.organizations);
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render() {
    if(this.state.isLoaded === "success") {
    let listOfContacts = [];
    Object.entries(this.state.contacts).forEach(([key, contact]) => {
      listOfContacts.push(<ContactsShow contacts={contact} key={key} />)
    })
    return (
      <div className="App-header">
        <h1>Contact List</h1>
        <table id="contact">
          <tbody>
          <tr>
            <th>ContactId</th>
            <th>CompanyName</th>
            <th>ContactName</th>
            <th>ContactType</th>
            <th>CreatedTimeFormatted</th>
            <th>CurrencyCode</th>
            <th>CustomerSubtype</th>
            <th>Email</th>
            <th>Status</th>
            <th>Source</th>
            <th>VendorName</th>
            <th>Website</th>
          </tr>
          </tbody>
          {listOfContacts}
        </table>
      </div>
    )
  }

  return (
      <div>
        Loading
      </div>
    );
  }
}
class ContactsShow extends Component {
  render() {
    let contact = this.props.contacts;
    return (

      <tbody>
        <tr>
          <td>{contact.contact_id}</td>
           <td>{contact.company_name}</td>
           <td>{contact.contact_name}</td>
           <td>{contact.contact_type}</td>
           <td>{contact.created_time_formatted}</td>
           <td>{contact.currency_code}</td>
           <td>{contact.customer_sub_type}</td>
           <td>{contact.email}</td>
           <td>{contact.status}</td>
           <td>{contact.source}</td>
           <td>{contact.vendor_name}</td>
           <td>{contact.website}</td>
        </tr>
      </tbody>
    )
  }
}


export default App;
