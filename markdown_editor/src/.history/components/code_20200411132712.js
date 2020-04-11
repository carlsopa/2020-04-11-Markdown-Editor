import React,{useState} from 'react';

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');

     const handleChange=()=>{
        SetInput(this.target.value)
    }
    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={handleChange()}
                    value={Input}
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;