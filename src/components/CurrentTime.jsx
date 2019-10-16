import React from 'react';


class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.)
    this.state = {
      date: new Date(),
      sign: this.props.sign
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div className="currentTime" >
        <h4>
          Now is {this.state.date.toLocaleTimeString()}
        </h4>
        <p><small>{ this.state.sign }</small></p>
      </div>
    )
  }
}

export default CurrentTime