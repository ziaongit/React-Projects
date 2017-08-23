import React, { Component } from 'react';

class Subscriptions extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            error:false,
            success:false,
            subscriber:''
        }
    }

    saveSubscriptions = (email) =>{
        const URL_EMAIL = `http://localhost:3000/subscriptions`;

        fetch(URL_EMAIL, {
            method:'post',
            headers:{
                'Accep':'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            })
        })
    }

    clearMessages = () => {
        setTimeout(function(){
            this.setState({
                error:false,
                success:false
            })
        }.bind(this),3000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S/;

        if(regex.test(email)){
            this.saveSubscriptions(email)
        }else{
            this.setState({error:true})
        }
        this.clearMessages();
    }

    onChangeInput = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    render() {
        return (
            <div className="subscribe-pannel">
                <h3>Subsribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        type="text"
                        placeholder="youremail@mail.com"
                        value={this.state.email}
                        onChange={this.onChangeInput}
                        />
                        <div className={this.state.error?"error show":"error"}>
                            Check your email
                        </div>
                        <div className={this.state.success?"success show":"success"}>
                            Thank you
                        </div>
                    </form>
                </div>
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </small>
            </div>

        );
    }
}

export default Subscriptions;