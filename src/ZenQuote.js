import React, { Component } from 'react';
import axios from 'axios';

export default class ZenQuote extends Component {

    state = {
        quote : "",
        isLodding : false
    }

    componentDidMount(){
        axios.get("https://api.github.com/zen")
        .then(res => {
            console.log("res", res);
            setTimeout(() => {
                this.setState({
                    quote : res.data,
                    isLodding: true
                })
            }, 3000)
        })
        .catch(err => {
            console.log("err", err);
        })
    }

    render() {
        return (
            <div>
                {this.state.isLodding ? <div>
                    <h1>Always Remember .....</h1>
                    <p>{this.state.quote}</p>
                </div> : <div id="loading-wrapper">
                    <div id="loading-text">LOADING ...</div>
                    <div id="loading-content"></div>
                </div>}
            </div>
        )
    }
}
