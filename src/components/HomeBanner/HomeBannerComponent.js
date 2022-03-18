import React, {Component} from 'react'
import './homeBanner.css';
class HomeBannerComponent extends Component{   
    render(){
        return(
           <div className='row' id='home'>
               <div className='col-lg-7 col-md-7 col-sm-12' id='about-inpactor'>
                    <h3>InpactorDB: A Plant classified lineage-level LTR retrotransposon reference library for free-alignment methods based on Machine Learning</h3>
                    <p id='inpactor-description'>
                        Here, we present InpactorDB a semi-curated dataset composed of 67241 elements from 195 plant genomes (belonging to 108 plant species), classified down to the lineage level. This data set has been used to train two deep neural networks (one fully connected and one convolutional) for fast classification of elements. Used in lineage-level classification approaches, we obtain a score above 98% of F1-score, precision and recall. 
                    </p>
                    
                    <span>You can get the full library or the analyzer source code here: </span> 
                    <a href='https://zenodo.org/record/5816833#.Yh_kecnMJPZ' target="_blank"><span className="badge badge-info">Inpactor Library</span> </a>
                    <a href='https://github.com/simonorozcoarias/Inpactor' target="_blank"><span className="badge badge-info">Inpactor Analyzer</span><br/></a>
                    <hr/>
                    <p>Ready to explore this amazing database?</p>
                    <a href='#search-sequences' className='btn btn-info'>Search Sequences</a>
               </div>
               <div className='col col-lg-5 col-md-5 col-sm-12'>
                   <img src='./img/img-banner2.jpg' className="rounded img-fluid"/>
               </div>
           </div>
        );
    }
}
export default HomeBannerComponent;