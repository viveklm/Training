import React, { Component } from 'react';
import axios from 'axios';
class About extends Component {

  constructor() {
    super();
    this.state = {
      result: []
    };
  }


  componentWillMount() {
    axios.get("http://localhost/websites/bitbucket/personal/adminpanel/api/category").then(
      response => {
        const result = response.data.result;
        this.setState({ "result": result });
      });
  }



  render() {
    const rows = this.state.result.map(row => {
      return (<div key={row.id}>{row.title}</div>);
    }
    );
    return (
      <div>
        <div>About</div>
        {rows}
      </div>
    );
  }
}

export default About;
