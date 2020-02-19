import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


class ContactList extends Component {
    state = {
        ContactList: []
    }

    componentDidMount() {
        console.log('componentDidMount')
        Axios.get('http://localhost:3008/Contacts').then(res => this.setState({ ContactList: res.data })).catch((err) => console.log(err))
    }

    componentDidUpdate(PrevPrpos,PrevState) {
        console.log("componentDidUpdate")
        console.log(PrevState)
        if(PrevState.ContactList.length !==this.state.ContactList.length) 
        Axios.get('http://localhost:3008/Contacts').then(res => this.setState({ ContactList: res.data })).catch((err) => console.log(err))

    }



    delete=(id)=>{

        Axios.delete('http://localhost:3008/delete_Contact/'+id)
        .then(this.setState({
            ContactList: this.state.ContactList.filter(el=>el._id !==id)
        }))
    }

 

    render() {
        return (<Fragment>
            {this.state.ContactList.map(el => <div key={el._id}>
                <span>{el.name}</span>
                <span>{el.phone}</span>
                <span>{el.email}</span>
                <Link to={`/Edit_Contact/${el._id}/${el.name}/${el.phone}/${el.email}`}>
                    <button >Edit</button>
                </Link>

                <button onClick={()=>this.delete(el._id)}>Delete</button>
            </div>)}


        </Fragment>

        );
    }
}

export default ContactList;