import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search(){
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(Response => Response.json())
        .then(json => console.log('json', json));
    }
    render(){
        return(
            <div className="App">
                <div className="App-title">Music Master From App!</div>
                <div>
                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                                type="text"
                                placeholder="Search an artist..."
                                value={this.state.query}
                                onChange={event => {this.setState({query: event.target.value})}}
                                onKeyPress={event => {
                                    if(event.key === 'Enter') {
                                        this.search();
                                    }
                                }}
                            />
                            <InputGroup.Addon onClick= {()=>this.search()}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    <div>Gallery</div>
                </div>
            </div>
        )
    }
}

export default App;