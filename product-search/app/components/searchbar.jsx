var React = require('react');

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

module.exports = SearchBar;