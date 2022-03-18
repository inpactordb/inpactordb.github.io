import React, {Component} from 'react'
import './navbar.css';
class NavbarComponent extends Component{
    
    
    render(){
        return(
           <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#home">
                            <span id='brand'><img src="./img/logo9.png" width="20" className="d-inline-block align-top" alt=""/> InpactorDB</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href='#' data-toggle="modal" data-target="#searchModal">Search Sequences</a>                
                            </div>
                    </div>
                </nav>
           </div>
        );
    }
}
export default NavbarComponent;