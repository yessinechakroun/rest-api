import React, { Component } from 'react';
import Axios from 'axios';

class EditContact extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            name: "",
            phone: '',
            email: ""

        }
    }
    
    componentDidMount () {

        let params= this.props.match.params
        this.setState({
            name:params.name , 
            phone:params.phone , 
            email:params.email
        })
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSumbit = () => {
        Axios.put('http://localhost:3008/edit_Contact/'+this.props.match.params.id, { ...this.state })
    }
    render() {
        console.log(this.props)
        return (<div>
            <input type="text" value={this.state.name} placeholder='name' name="name" onChange={this.handleChange} />
            <input type="text" value={this.state.phone} placeholder='phone' name='phone' onChange={this.handleChange} />
            <input type="text"  value={this.state.email}placeholder='email' name="email" onChange={this.handleChange} />
            <button onClick={this.handleSumbit}>Edit Contact</button>
        </div>);
    }
}

export default EditContact;