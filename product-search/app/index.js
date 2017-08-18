var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');

class SearchBar extends React.Component {
    handleQuery(event) {
        this.props.onQuery(event.target.value);
    }
    render() {
        return(
            <div className="search-bar">
                <input onChange={this.handleQuery.bind(this)} placeholder="Search for product" />
            </div>
        )
    }
}

class Result extends React.Component {
    displayPrice(price) {
        return (price/100.00);
    }
    render(){
        return(
            <div className="in-stock">
                <h2><a href="#">{this.props.product.name}</a></h2>
                <p>${this.displayPrice(this.props.product.price)}</p>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundProducts: props.products
        }
    }
    componentWillReceiveProps(nextProps) {
        var foundProducts = nextProps.products.filter(
            product => {
                return product.name.toLowerCase().match(nextProps.query.toLowerCase()) || product.description.toLowerCase().match(nextProps.query.toLowerCase());
            }
        );

        this.setState({
            foundProducts: foundProducts
        });
    }
    render(){
        return(
            <div className="result">
                {this.state.foundProducts.map(function(product, i){
                    return(
                        <Result product={product} key={i}/>
                    )
                })}
            </div>
        )
    }
}

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


ReactDOM.render(<Search products={products} />, document.getElementById('app'));