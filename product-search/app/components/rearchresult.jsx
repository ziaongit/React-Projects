var React = require('react');
var Result = require('./result.jsx');

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

module.exports = SearchResult;