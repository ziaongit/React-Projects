import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){
        let filtered = this.state.news.filter((item)=>{
            return item.title.toLowerCase().indexOf(keywords) > -1;
        })

        this.setState({filtered})
    }

    render() {
        return(
            <div>
                <Header newsSearch={keywords=>this.filterNews(keywords)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));