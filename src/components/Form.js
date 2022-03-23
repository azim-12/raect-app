import React,{useState} from 'react'

export default function Form(props) {
    let handleUpClick = ()=>{
        if(typeof text === "string"){
            let upText = text.toUpperCase();
            setText(upText)
            props.showAlert("Text successfully converted to uppercase", "success");
        }
    }
    let handleLoClick = ()=>{
        if(typeof text === "string"){
            let loText = text.toLowerCase();
            setText(loText)
            props.showAlert("Text successfully converted to lowercase", "success");
        }
    }
    let handleClearClick = ()=>{
        // if(typeof text === "string"){  
            //     let [...arText] = text.split('');
            //     setText(arText)
            // }
            let newText = '';
            setText(newText);
            props.showAlert("Text is cleared", "success");
        }
        let handleCopyClick = ()=>{
            // if(typeof text === "object") {
                //     let strText = text.join('');
                //     setText(strText)
                // }
                let text = document.getElementById("textBox");
                console.log(text.value)
                text.select();
                navigator.clipboard.writeText(text.value);
                props.showAlert("Text successfully copied to clipboard", "success");
    } 
    let handleOnChange = (e) =>{
        setText(e.target.value)
    }
    const [text,setText] = useState('   ')
    let charLen = text.trim().length;
    let worLen = text.trim() === '' ?  0:  text.split(" ").length;

    

    // let [btnText, setBtntext] = useState("Enable Dark Mode");
    
    // let strLen = () => {
    //     if (text === " ") {
    //         worLen = worLen -1;
    //         charLen = charLen - 1;
    //     } else{
    //         worLen = worLen;
    //         charLen = charLen;
    //     }
    //     return charLen;
    // }

  return (
      <>
      <div className="container my-3" style={{color:props.mode !== 'light' ? 'white' : 'black'}}>
        <div className="container my-3 ">
            <h1>{props.heading}</h1>
          
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    id="textBox" 
                    rows="8" 
                    style={{backgroundColor: props.mode !== 'light' ? props.mode : 'white', color:props.mode !== 'light' ? 'white' : 'black'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-3 bg" style={{backgroundColor: props.mode !== 'light' ? 'transparent' : '#0d6efd' , border: '1px solid white'}} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3 bg" style={{backgroundColor: props.mode !== 'light' ? 'transparent' : '#0d6efd' , border: '1px solid white'}} onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3 bg" style={{backgroundColor: props.mode !== 'light' ? 'transparent' : '#0d6efd' , border: '1px solid white'}} onClick={handleClearClick}>Clear String</button>
            <button className="btn btn-primary mx-3 bg" style={{backgroundColor: props.mode !== 'light' ? 'transparent' : '#0d6efd' , border: '1px solid white'}} onClick={handleCopyClick}>Copy String</button>
        </div>
        <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{worLen} Words & {charLen} Characters</p>
                <p>{ 0.008 * worLen} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>

      </div>
    </>
    )
}
