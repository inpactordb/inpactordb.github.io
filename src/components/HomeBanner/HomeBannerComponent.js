import React, {Component} from 'react'
import './homeBanner.css';
class HomeBannerComponent extends Component{   
    render(){
        return(
           <div className='row' id='home'>
               <div className='col-lg-7 col-md-7 col-sm-12' id='about-inpactor'>
                    <h3>InpactorDB: A Plant classified lineage-level LTR retrotransposon reference library for free-alignment methods based on Machine Learning</h3>
                    <p id='inpactor-description'>
                        Here, we present InpactorDB a semi-curated dataset composed of 67,241 elements from 181 plant genomes (belonging to 98 plant species), classified down to the lineage level. This data set has been used to train two deep neural networks (one fully connected and one convolutional) for fast classification of elements. Used in lineage-level classification approaches, we obtain a score above 98% of F1-score, precision and recall. 
                    </p>
                    
                    <span>You can get more information and source code here: </span> 
                    <a href='#' data-toggle="modal" data-target="#more-info"><span className="badge badge-info">Inpactor Project</span> </a>
                    {/*Modal*/ }
                    <div className="modal fade" id="more-info" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Inpactor</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Articles</h5>
                            <a href='https://doi.org/10.3390/genes12020190' target="_blank"><span className="badge badge-info">Inpactor Library</span> </a><br/>
                            <a href='https://doi.org/10.3390/biology7020032' target="_blank"><span className="badge badge-info">Inpactor Analyzer</span> </a>
                            <h5>Source Code and Library</h5>
                            <a href='https://zenodo.org/record/5816833#.Yh_kecnMJPZ' target="_blank"><span className="badge badge-info">Inpactor Library</span> </a><br/>
                            <a href='https://github.com/simonorozcoarias/Inpactor' target="_blank"><span className="badge badge-info">Inpactor Analyzer</span><br/></a>
                            <a href='https://github.com/simonorozcoarias/Inpactor2' target="_blank"><span className="badge badge-info">Inpactor Analyzer V2</span><br/></a>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr/>
                    <p>Ready to explore this amazing database?</p>
                    {/* <a href='#search-sequences' className='btn btn-info'>Search Sequences</a> */}
                    <a href='#' className='btn btn-info' data-toggle="modal" data-target="#searchModal">Search Sequences</a>
               </div>
               <div className='col col-lg-5 col-md-5 col-sm-12' id="banner-image">
                   <img src='./img/img-banner2.jpg' className="rounded img-fluid"/>
               </div>
           </div>
        );
    }
}
export default HomeBannerComponent;