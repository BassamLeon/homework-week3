import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';
import store from './store';
import ModelDetails from './components/ModelDetails'


const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

// Create the Options list for the Select element
let options = []
options.push(<option value="">-- pick a model --</option>)
for (let i = 0; i < data.length; i++) {
  options.push(<option value={data[i].name}>{data[i].name} ({data[i].year})</option>)
}

// Action
const action = (state) => ({
  type: "ADD_MODEL",
  payload: myPayload(state)
})

// Retrieve the data object using the current state
function myPayload (state) {
  let x = 0
  for (x = 0; x < data.length; x++) {
    if (data[x].name === state) {
      return data[x]
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.updateSelection = this.updateSelection.bind(this);
    this.addButton = this.addButton.bind(this);
  }

  updateSelection(event) {
      this.setState({value: event.target.value});
  }

  addButton(event) {
    if (this.state.value !== "") {
      store.dispatch(action(this.state.value))
    }
  }

  render() {
    return (
      <div className="App">
        <ModelDetails/>
        <select value={this.state.value} onChange={this.updateSelection}> + {options} + </select>
        <button onClick={this.addButton}>Add</button>
      </div>
    );
  }
}

export default connect()(App);
