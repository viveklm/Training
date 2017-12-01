import React, { Component } from 'react';

class Header extends Component {
 
 componentWillMount(){
     console.log('Component will mount');
 }   

 componentDidMount(){
    console.log('Component did mount');
}

componentWillReceiveProps(newProps){
    console.log(newProps);
    console.log('Component received props');
}


  render() {
    return (
        <div className="main-class">vivek is here --- {this.props.myNumber}</div>
    );
  }
}

export default Header;