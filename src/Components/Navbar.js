import React from 'react';

class Navbar extends React.Component {
    state={
        mode: ""
    }

    handleClick  = (e) =>{
        this.props.changeMode(e.target.innerHTML.toLowerCase())
    }

    render(){
        return (
            <div className="nav-bar">
                <div className="nav-bar-top">
                    <h1>Burnet Dry Cleaners</h1>
                    <div className="nav-link-container">
                        <div className="nav-item"  onClick={this.handleClick} style={this.props.mode === "home" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                            <h3 >Home</h3>
                        </div>
                        <div className="nav-item"  onClick={this.handleClick} style={this.props.mode === "about" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                            <h3 >About</h3>
                        </div>
                        <div className="nav-item"  onClick={this.handleClick} style={this.props.mode === "services" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                            <h3 >Services</h3>
                        </div>
                        <div className="nav-item"  onClick={this.handleClick} style={this.props.mode === "contact" ? {color: 'rgba(127, 255, 212, 0.9)'} : null}>
                            <h3 >Contact</h3>
                        </div>
                    </div>
                </div>
                <div className="nav-bar-bottom">
                    Hours : M-F 7:00am-5:30pm, Sat 9:00am-12:00pm, Closed Sundays
                </div>
            </div>
        )
    }
}
export default Navbar