import './loading.css';
function LoadingComponent() {
    
  return (
    <div className="loader">
        <span className='border border-info'></span>
        <span className='border border-success'></span>
        <span className='border border-danger'></span>
        <h4 className='text-loading'>Loading...</h4>
    </div>
  );
}

export default LoadingComponent;
