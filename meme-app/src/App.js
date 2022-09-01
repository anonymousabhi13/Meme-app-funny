import React from 'react';
import SearchContainer from './Components/SearchContainer/SearchContainer'
import ResultsContainer from './Components/ResultContainer/ResultsContainer'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      allMemes: [],
      searchText: ""
    }
  }

  searchMemes = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }
  // https://api.imgflip.com/get_memes


  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      this.setState({
        allMemes: data.data.memes
      })
    })
  }

  render(){
      return (
      <div className="App">
        < SearchContainer searchMemes={this.searchMemes}/> 
        < ResultsContainer memesArray={this.state.allMemes.filter(meme => meme.name.toLowerCase().includes(this.state.searchText)).slice(0, 30)}/>
      </div>
    );
  }
}

export default App;
