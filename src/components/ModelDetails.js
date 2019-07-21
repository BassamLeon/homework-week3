import * as React from 'react'
import { connect } from 'react-redux'

let myComputerList = []

class ModelDetails extends React.Component {
  render() {
    const computer = this.props.computer
    if (!computer) return null
    
    if (computer.length !== 0) {
        myComputerList.push(<ul>
            <li>Name: {computer[computer.length - 1].name}</li>
            <li>Manufacturer: {computer[computer.length - 1].manufacturer}</li>
            <li>Year: {computer[computer.length - 1].year}</li>
            <li>Origin: {computer[computer.length - 1].origin}</li>
            </ul>)
    }

    return (<div>
        {myComputerList}
      </div>)
  }
}

const mapStateToProps = (state) => {
    return { computer: state }
}

export default connect(mapStateToProps)(ModelDetails)