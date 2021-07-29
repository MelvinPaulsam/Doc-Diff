import "./section2.css";
import img2 from "../../../images/img2.svg";
import ShowMore from 'react-show-more-button';




const section2 = () => {
  return (
    <div className="section2 " id="howitworks">
      <h1 className="blue sec2head extra-bold">How it works?</h1>
      <div className="row cards">
        <div className="col-lg-4">
        <div className="card"> 
        <img src={img2} className="card-img-top" alt="timemator"/>
            <div className="card-body">
              <h5 className="card-title">Upload your project</h5>
              
              
              

 
            </div>
          </div>
        
        </div>
        
        <ShowMore maxHeight={100} classNameButton="btn4" className="showmore">
        
  <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            indus</p>
            
            </ShowMore>
            
           
        
        <div className="col-lg-4">
        <div className="card"> 
        <img src={img2} className="card-img-top" alt="timemator"/>
            <div className="card-body">
              <h5 className="card-title">Paste your code</h5>
              
              

            </div>
          </div>
        </div>
         
        <ShowMore maxHeight={100} classNameButton="btn4" className="showmore">
        
  <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            indus</p>
            
            </ShowMore>
            
        <div className="col-lg-4">
        <div className="card"> 
        <img src={img2} className="card-img-top" alt="timemator"/>
            <div className="card-body">
              <h5 className="card-title">Compare codes</h5>
              
              
            </div>
          </div>
        </div>
         
        <ShowMore maxHeight={100} classNameButton="btn4" className="showmore">
        
  <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            indus</p>
            
            </ShowMore>
            
      </div>
    </div>
  );
};

export default section2;
