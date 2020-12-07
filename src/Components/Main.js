import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'


class Main extends React.Component {
    state={
        mode: "home",
    }

    componentDidMount = () =>{
    }

    changeMode = (mode) =>{
        this.setState({
            ...this.state,
            mode: mode
        })
    }

   

    render(){
        return (
            <div className="main-container">
                <div></div>
                <Navbar changeMode={this.changeMode} mode={this.state.mode}/>
                {this.state.mode === "home" ? <Home/> : null}
                {this.state.mode === "about" ? <About/> : null}
                {this.state.mode === "services" ? <Services/> : null}
                {this.state.mode === "contact" ? <Contact/> : null}
                <div className = "footer"> This was built by Kiri Um using React</div>
            </div>
        )
    }
}
export default Main