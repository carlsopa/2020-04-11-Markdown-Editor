import React,{useState} from 'react';

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');

     const handleChange=(event)=>{
        SetInput(event.target.value)
    }
    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={handleChange(this.value)}
                    value={Input}
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;