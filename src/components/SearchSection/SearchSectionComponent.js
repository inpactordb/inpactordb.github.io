import React, {Component} from 'react'
import './searchSection.css';
import fSuperFamiliy from '../../filters/superfamily.json';
import fSpecieFamily from '../../filters/specie_family.json';
import fSpecie from '../../filters/specie.json';
import fLineage from '../../filters/lineage.json';
import fSource from '../../filters/source.json';
import axios from 'axios';
import config from '../../config/config';
import ResultComponent from '../Results/ResultComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
class SearchSectionComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            showFilters: false,
            displayFilters: "none",
            textShowFilterOption: "Apply Filters",
            filterAction: "badge badge-info",
            idNotAllowed: false,
            superFamily: "na",
            lineage: "na",
            specieFamily: "na",
            specie: "na",
            source: "na",
            id: "na",
            sequences: [],
            currentPage: 1,
            loading: false,
            showSequences: false
        }
        
    }
    /**
     * This method allows to hide or show the different available filters
     */
    manageFilters = ()=>{
        if(this.state.showFilters==true){
            this.setState({showFilters: false})
            this.setState({displayFilters: "none"});
            this.setState({textShowFilterOption: "Apply Filters"});
            this.setState({filterAction: "badge badge-info"});
            this.setState({idNotAllowed: false});
            
        }else{
            this.setState({showFilters: true})
            this.setState({displayFilters: "block"});
            this.setState({textShowFilterOption: "Hide Filters"});
            this.setState({filterAction: "badge badge-secondary"});
            this.setState({idNotAllowed: true});
        }
    }

    handleSuperfamily = (e) =>{
        let superFamily = e.currentTarget.value;
        this.setState({superFamily});
    }
    handleLineage = (e) =>{
        let lineage = e.currentTarget.value;
        this.setState({lineage});
    }
    handleSpecieFamily = (e) =>{
        let specieFamily = e.currentTarget.value;
        this.setState({specieFamily});
    }
    handleSpecie= (e) =>{
        let specie = e.currentTarget.value;
        this.setState({specie});
    }
    handleSource = (e) =>{
        let source = e.currentTarget.value;
        this.setState({source});
    }
    handleId= (e) =>{
        let id = e.currentTarget.value;
        this.setState({id});
    }

    
    search = ()=>{
        this.setState({showSequences:false});
        let data = {}
        if(this.state.superFamily!="na"){
            data["superfamily"] = this.state.superFamily;
        }
        if(this.state.lineage!="na"){
            data["lineage"] = this.state.lineage;
        }
        if(this.state.specieFamily!="na"){
            data["specie_family"] = this.state.specieFamily;
        }
        if(this.state.specie!="na"){
            data["specie"] = this.state.specie;
        }
        if(this.state.source!="na"){
            data["source"] = this.state.source;
        }
        this.setState({sequences: []})
        if(this.state.idNotAllowed==false){
            if(this.state.id=="" || this.state.id=="na"){
                toast.error("You must provide and ID or use the filters of the search engine");
            }else{
                this.getSequenceById(this.state.id);
            }   
        }else{
            if(Object.keys(data).length==0){
                toast.error("You must select at least one filter or search by id");
            }else{
                this.getSequenceFiltered(data);
            }
        }
        this.setState({currentPage: 1})
        
    }
    /**
     * Search a sequence by the id
     */
    getSequenceById = async (id) => {
        this.setState({loading:true});
        try{
            let response = await axios({
                method: 'get',
                url: `${config.base_url}/sequence?id=${id}`,
            });
            let res = [];
            res.push(response.data);
            if(!('msg' in response.data)){
                this.setState(prevState => ({
                    sequences: [...res]
                }))
                this.setState({loading:false});
                this.setState({showSequences:true});
            }else{
                toast.error("Not sequence found");
                this.setState({loading:false});
                this.setState({showSequences:false});
            }
        }catch(e){
            this.setState({loading:false});
            this.setState({showSequences:false});
            toast.error("We are having technical issues, contact the site manager or try again later");
        }
    }

    getSequenceFiltered = async (filters)=>{
        this.setState({loading:true});
        try{
            let response = await axios({
                method: 'post',
                url: `${config.base_url}/sequences`,
                data: filters
            });
            if (response.data == null || !(typeof response.data[Symbol.iterator] === 'function')) {
                toast.error("Not sequences found");
                this.setState({loading:false});
                this.setState({showSequences:false});
                return false;
            }else{
                this.setState(prevState => ({
                    sequences: [...response.data]
                 }))
                 this.setState({showSequences:true});
                 this.setState({loading:false});
            }
        }catch(e){
            this.setState({loading:false});
            this.setState({showSequences:false});
            toast.error("We are having technical issues, contact the site manager or try again later");
        }
    }

    render(){
        const {currentPage} = this.state;
        const {sequences, loading} = this.state;
        let sequenccesLength = sequences.length;
        const paginate = pageNum => this.setState({ currentPage: pageNum });

        const nextPage = () => {this.setState({ currentPage: currentPage + 1 })};

        const prevPage = () => this.setState({ currentPage: currentPage - 1 });
        return(
           <div className='row container-fluid' id='search-sequences'>
               <ToastContainer/>
               <div className='col col-s12'>
                   <p>
                       InpactorDB Search Engine allows search non-redundant sequences applying different filters or if you already know the sequence's id you can type it in the box.
                   </p>
                   
                   <div className='row'>
                        <div className='col-sm-12 col-md-3 col-lg-3'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                        <span className='center'>ID</span>
                                        <input className='form-control' onChange={this.handleId} disabled={this.state.idNotAllowed}></input>
                                </div>
                                <div className='container-fluid'>
                                    <a href='#search-sequences'><span className={this.state.filterAction+" filter"} onClick={this.manageFilters}>{this.state.textShowFilterOption}</span></a> <span className='text-danger'> is optional</span>
                                </div>
                                {/* start filters */}
                                <div className='col-col-sm-12 container-fluid' style={{display: this.state.displayFilters}}>
                                    <div className='row'>
                                        <div className='col-sm-12 filter'>
                                            <span className='center'>Superfamily</span>
                                            <select className="selectpicker form-control" data-live-search="true" onChange={this.handleSuperfamily}>
                                                <option value="na">Not Apply</option>
                                                {fSuperFamiliy.map(e=>{
                                                    return <option key={`superfamily_${e.id}`} value={e["name"]}>{e.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className='col-sm-12 filter'>
                                                <span className='center'>Lineage</span>
                                                <select className="selectpicker form-control" onChange={this.handleLineage} data-live-search="true">
                                                    <option value="na">Not Apply</option>
                                                    {fLineage.map(e=>{
                                                        return <option key={`superfamily_${e.id}`} value={e["name"]}>{e.name}</option>
                                                    })}
                                                </select>
                                        </div>
                                        <div className='col-sm-12 filter'>
                                                <span className='center'>Plant Family</span>
                                                <select className="selectpicker form-control" onChange={this.handleSpecieFamily} data-live-search="true">
                                                    <option value="na">Not Apply</option>
                                                    {fSpecieFamily.map(e=>{
                                                        return <option key={`superfamily_${e.id}`} value={e["name"]}>{e.name}</option>
                                                    })}
                                                </select>
                                        </div>
                                        <div className='col-sm-12 filter'>
                                                <span className='center'>Species</span>
                                                <select className="selectpicker form-control" onChange={this.handleSpecie} data-live-search="true">
                                                    <option value="na">Not Apply</option>
                                                    {fSpecie.map(e=>{
                                                        return <option key={`superfamily_${e.id}`} value={e["name"]}>{e.name}</option>
                                                    })}
                                                </select>
                                        </div>
                                        <div className='col-sm-12 filter'>
                                                <span className='center'>Source</span>
                                                <select className="selectpicker form-control" onChange={this.handleSource} data-live-search="true">
                                                    <option value="na">Not Apply</option>
                                                    {fSource.map(e=>{
                                                        return <option key={`superfamily_${e.id}`} value={e["name"]}>{e.name}</option>
                                                    })}
                                                </select>
                                        </div>
                                    </div>
                                </div>
                                {/* End Filters */}
                            </div>
                            <button className='btn btn-info' onClick={this.search}>Search</button>
                        </div>
                        {/* Loading Animation*/}
                        <div className={`col-sm-12 col-md-9 col-lg-9 ${this.state.loading==true?"":"d-none"}`}>
                            <div id='loading_section'>
                                <div className={`d-flex justify-content-center`}>
                                    <LoadingComponent/>
                                </div>
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-9 col-lg-9 ${!(this.state.showSequences)?"d-none":""}`}>
                            <ResultComponent currentPage={currentPage} sequences={this.state.sequences} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                        </div>
                   </div>
               
               </div>
           </div>
        );
    }
}
export default SearchSectionComponent;