import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


class AddContact extends Component {
    state = {
        name: "",
        phone: '',
        email: ""

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSumbit=()=> {
       Axios.post('http://localhost:3008/add_Contact',{...this.state})
    }
    render() {
        return (<div>
            <input type="text" placeholder='name' name="name" onChange={this.handleChange} />
            <input type="text" placeholder='phone' name='phone' onChange={this.handleChange} />
            <input type="text" placeholder='email' name="email" onChange={this.handleChange} />
         <Link to='/Contacts'><button onClick={this.handleSumbit}>ADD Contact</button></Link>   
        </div>);
    }
}

export default AddContact;