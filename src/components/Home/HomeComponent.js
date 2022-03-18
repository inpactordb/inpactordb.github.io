import React, {Component} from 'react'
import NavbarComponent from '../Navbar/NavbarComponent';
import HomeBannerComponent from '../HomeBanner/HomeBannerComponent';
import SearchSectionComponent from '../SearchSection/SearchSectionComponent';
class HomeComponent extends Component{
    
    
    render(){
        return(
            <div>
                <NavbarComponent/>
                <div className='container-fluid'>
                
                    <HomeBannerComponent/>
                    <SearchSectionComponent/>
                </div>
            </div>
            
        );
    }
}
export default HomeComponent;