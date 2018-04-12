import React, {Component} from 'react';
import rp from 'request-promise';
import {searchGoogleBooks} from './controllers/controllers.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state ={}
        this.setState = this
            .setState
            .bind(this)
    }

    componentDidMount() {

        let {isbn} = this.props.match.params; 
        
        const bookRequest = {
            uri: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
            json: true
        }
        rp(bookRequest).then(res => {
            console.log(res)
            this.setState({title: res.items[0].volumeInfo.title,
            author: res.items[0].volumeInfo.authors,
             image : res.items[0].volumeInfo.imageLinks.thumbnail
          })
        })

    }

    render() {
        if(!this.state.title){
          return <h1>Loading...</h1>
        }
        return (
            <div className="App">
                <h1>Name</h1>
                {this.state.title}
                <h2>Author</h2>
                <ul>
                  {

                    !this.state.author.length ? <li> No authors to show </li> : this.state.author.map((item, idx) => <li key={idx}>{item}</li>)



                  }
                </ul>
                <h3>Picture</h3>
{

  !this.state.image
    ? <h2>
        No images to show
      </h2>
    : <img src = {this.state.image}></img>

}
            </div>
        );
    }
}

export default App;
