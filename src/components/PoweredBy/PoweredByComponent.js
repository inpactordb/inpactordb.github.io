import './poweredby.css';
function PoweredByComponent() {
    
  return (
    <div className="row" id='logos'>
        <div className='col-12'>
            <div className='row' id='powered_by'>
                <div className='col-sm-12 d-flex justify-content-center'>
                    <h5>Powered by</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6   logo-container'>
                    <a href='https://en.ird.fr' target="_blank" className='d-flex justify-content-end'><img src='./img/ird.png' className="img-fluid logo-footer"/></a>
                </div>
                <div className='col-sm-6 logo-container'>
                    <a href='https://www.autonoma.edu.co' className='d-flex justify-content-start' target="_blank"><img src='./img/autonoma.png' className="img-fluid logo-footer"/></a>
                </div>
            </div><hr/>
            <div className='row' id='contact-information'>
                <div className='col-sm-12'>
                    <h5>Contact Information</h5>
                    <i><span>inpactordb@gmail.com</span></i><br/>
                    <i><span>simon.gaviriao@autonoma.edu.co</span></i><br/>
                    <i><span>simon.orozcoa@autonoma.edu.co </span></i><br/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PoweredByComponent;
