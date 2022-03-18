import React, {Component} from 'react'
import axios from 'axios';
import config from '../../config/config';
import PaginateComponent from '../Paginate/PaginateComponent';
import './resultTable.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
class ResultComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            sequencesPerPage: 10,
            loading: false,
            sequences: [],
        }
    }
    
    downloadOneSequence(fasta){
        const element = document.createElement("a");
        const file = new Blob([fasta], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "sequence.fasta";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    downloadAllResults(){
        if(this.props.sequences==undefined || this.props.sequences.length==0){
            toast.error("Not sequences to save");
            return;
        }
        
        let results = "";
        this.props.sequences.forEach(e=>{
            results += `>${e["superfamily"]}-${e["lineage"]}-${e["specie_family"]}-${e["specie"]}-${e["source"]}-${e["length"]}-${e["id"]}\n${e["sequence"]}\n`
        });
        this.downloadOneSequence(results);
        
    }
    render(){ 
        let rows;
        const {sequencesPerPage} = this.state;
        let {currentPage} = this.props;
        let indexOfLastSequence = currentPage * sequencesPerPage;
        let indexOfFirstSequence = indexOfLastSequence - sequencesPerPage;
        let currentSequences = this.props.sequences.slice(indexOfFirstSequence, indexOfLastSequence);
        let totalSequences = this.props.sequences.length;

        
       
        


        if(this.props.sequences!=undefined){
            rows = currentSequences.map((e,i)=>{
                let temp = `>${e["superfamily"]}-${e["lineage"]}-${e["specie_family"]}-${e["specie"]}-${e["source"]}-${e["length"]}-${e["id"]}\n${e["sequence"]}\n`;
                return(
                <tbody key={`sequence_${e["id"]}`} className='table-element'>
                    <tr data-toggle="collapse" data-target={`#sequence_${e["id"]}`} className="accordion-toggle">
                        <td>{e["id"]}</td>
                        <td>{e["superfamily"]}</td>
                        <td>{e["lineage"]}</td>
                        <td>{e["specie_family"]}</td>
                        <td>{e["specie"]}</td>
                        <td>{e["length"]}</td>
                        <td>{e["source"]}</td>
                    </tr>
                    <tr>
                        <td colSpan="7" className="hiddenRow">
                            <div className="row accordian-body collapse align-items-center" id={`sequence_${e["id"]}`}>
                                <div className='col-sm-10'>
                                   <textarea style={{"height": "100px"}} className='form-control sequence-info' defaultValue={temp} readOnly></textarea>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn btn-info' onClick={() => this.downloadOneSequence(temp)}>Download</button>
                                </div>
                            </div> 
                        </td>
                    </tr>
                </tbody>
                )
            })
        }
        return(
           <div className='row'>
               <div className='col-sm-12'>
               <button className='btn btn-info float-right' onClick={()=> this.downloadAllResults()}>Download results</button><br/><br/>
                <table className="table table-condensed" style={{"borderCollapse":"collapse"}}>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Super Family</th>
                                <th scope="col">Lineage</th>
                                <th scope="col">Plant Family</th>
                                <th scope="col">Specie</th>
                                <th scope="col">Length</th>
                                <th scope="col">Source</th>
                            </tr>
                        </thead>
                        {
                            rows
                        }
                            
                            
                        
                    </table>
                   <PaginateComponent currentPage={currentPage} sequencesPerPage={sequencesPerPage} totalSequences={totalSequences} paginate={this.props.paginate} nextPage={this.props.nextPage} prevPage={this.props.prevPage} />
               </div>
           </div>
        );
    }
}
export default ResultComponent;