import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';


class Header extends Component {

    componentWillMount() {
        //console.log('Component will mount');
    }

    componentDidMount() {
        //console.log('Component did mount');
    }

    componentWillReceiveProps(newProps) {
        //console.log(newProps);
        //console.log('Component received props');
    }


    render() {
        return (
            <div>
                <h3><Link to='/home'>Home</Link></h3>
                <h3><Link to='/about'>About</Link></h3>
                <div className="main-class">vivek is here --- {this.props.myNumber}</div>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                </div>
        );
    }
}

export default Header;