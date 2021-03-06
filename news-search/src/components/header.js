import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            keywords:''
        }
    }


    inputChange(event) {
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value.toLowerCase().trim())
    }

    render() {
        return(
            <header>
                <div className="logo">
                    Logo
                </div>
                <input onChange={this.inputChange.bind(this)}/>
            </header>
        )
    }
    
}

export default Header;