var React = require('react');
var SearchBar = require('./searchbar.jsx');
var SearchResult = require('./rearchresult.jsx');

class Search extends React.Component {

    constructor(props) {
        super();
        this.state = {
            query: ''
        };

    }

    handleQuery(query) {
        this.setState({'query': query.toLowerCase().trim()});
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2 search">
                <h1>Product Search</h1>
                <SearchBar onQuery={this.handleQuery.bind(this)}/>
                <SearchResult products={this.props.products}  query={this.state.query} />
                
            </div>
        )
    }
}

module.exports = Search;