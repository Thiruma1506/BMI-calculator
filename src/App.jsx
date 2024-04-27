import { useState } from 'react';
import './App.css'

function App() {

    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [bmi,setBmi]=useState(null);
    const[bmistatus,setBmistatus]=useState("");
    const[errmsg,setErrmsg]=useState("");

    const clearall=()=>{
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmistatus("");
      {bmi!==null && setErrmsg("All Cleared")};
    };

    const Calcbmi=()=>{

      const validheight=/^\d+$/.test(height);
      const validweight=/^\d+$/.test(weight);

      if(validheight && validweight!==null){
        setErrmsg("");
        const mtrheight=height/100;
        const bmivalue= weight/(mtrheight*mtrheight);
        setBmi(bmivalue.toFixed(2));
        if(bmivalue<18.5){
          setBmistatus("Under Weight");
        }
        else if(bmivalue>=18.5 && bmivalue<24.9){
          setBmistatus("Normal Weight");
        }
        else if(bmivalue >= 25 && bmivalue < 29.9){
          setBmistatus("Over Weight");
        }
        else{
          setBmistatus("Obese");
        }
      }
      else{
        setBmi(null);
        setBmistatus(null);
        setErrmsg("Please enter valid numerical values ");
      }
    };

  return (
    <>
      <div className='main--container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errmsg && <p className='error'>{errmsg}</p>}
          <div className="input--container">
            <label htmlFor="height">Height (in CM) :</label>
            <input type="text"  id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>

          <div className="input--container">
            <label htmlFor="weight">Weight (in KG) :</label>
            <input type="text"  id="weight"value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>

          <button onClick={Calcbmi} className="calculate">Calculate</button>
          <button onClick={clearall} className="clear">Clear</button>
          {bmi!==null &&(
            <div className="result">
            <p>Your BMI is - {bmi}</p>
            <p>Status - {bmistatus}</p> 
            </div>
          )}

          

        </div>
      </div>
    </>
  );
}

export default App
