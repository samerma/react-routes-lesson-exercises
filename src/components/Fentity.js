import React, { Component } from 'react';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const fentityName = this.props.match.params.name
        const fentityCategory = this.props.match.params.fentities
        const fentity = this.props.state[fentityCategory].find(f => f.name === fentityName)
        console.log(fentity);
        console.log(fentityName);
        console.log(fentityCategory);

        return (
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        )
    }
}

export default Fentity;
