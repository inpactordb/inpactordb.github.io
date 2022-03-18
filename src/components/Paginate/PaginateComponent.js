import React, { Component } from 'react'

export class PaginateComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            pagesToShow: 10,
        }
    }
    
    render() {
        const { sequencesPerPage, totalSequences, currentPage } = this.props;
        const {paginate, nextPage, prevPage} = this.props;
        const {pagesToShow} = this.state;

        const pageNumbers = [];
        

        for (let i = 1; i <= Math.ceil(totalSequences / sequencesPerPage); i++) {
            pageNumbers.push(i);
        }
        let totalPages = pageNumbers.length;
        let numbersToShow = [];
        if(totalPages>pagesToShow){
            if((currentPage+(sequencesPerPage-1))>totalPages){
                numbersToShow = pageNumbers.slice((totalPages-pagesToShow), totalPages);
                console.log("Limitar pero mostrar ultimos");
            }else{
                console.log("Limitar");
                numbersToShow = pageNumbers.slice(currentPage-1, currentPage+(sequencesPerPage-1));
            }
        }else{
            numbersToShow = pageNumbers;
        }
        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${(currentPage==1)?"disabled":""} ${(totalPages==0)?"d-none":""}`}>
                        <a className="page-link" href="#search-sequences" onClick={(num) => prevPage()}>Previous</a>
                    </li>
                    {numbersToShow.map(num => (
                        <li className={`page-item  ${(num==currentPage)?"active":""}`} key={num}>
                            <a onClick={() => paginate(num)} href="#search-sequences" className="page-link">{num}</a>
                        </li>
                    ))}
                    <li className={`page-item ${(currentPage==totalPages)?"disabled":""} ${(totalPages==0)?"d-none":""}`}>
                        <a className="page-link" href="#search-sequences" onClick={(num, totalPages) => nextPage(num, totalPages)}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default PaginateComponent;