import React, {Component} from 'react'
import NavbarComponent from '../Navbar/NavbarComponent';
import HomeBannerComponent from '../HomeBanner/HomeBannerComponent';
import SearchSectionComponent from '../SearchSection/SearchSectionComponent';
import PoweredByComponent from '../PoweredBy/PoweredByComponent';
import './home.css';
class HomeComponent extends Component{
    
    
    render(){
        return(
            <div>
                <NavbarComponent/>
                <div className='container-fluid'>
                
                    <HomeBannerComponent/>
                    {/* Modal */}
                    <div className="modal fade" id="searchModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document" id='searchModalDialog'>
                            <div className="modal-content" id='searchModalContent'>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"><img src="./img/logo9.png" width="20" height="35" className="d-inline-block align-top" alt=""/> InpactorDB Search Engine</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <SearchSectionComponent/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <PoweredByComponent/>
                </div>
            </div>
            
        );
    }
}
export default HomeComponent;