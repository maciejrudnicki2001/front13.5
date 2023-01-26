import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data: data.results[0],
          });
        });
  };
  render() {
    const { data } = this.state;
    return (
        <div className="App">
          <button onClick={this.fetchData}>Losuj</button>
          {data && (
              <div>
                <img src={data.picture.large} alt="user" />
                <h1>
                  {data.name.first} {data.name.last}
                </h1>
                <p>{data.email}</p>
                <p>{data.location.city}</p>
              </div>
          )}
        </div>
    );
  }
}

export default App;
