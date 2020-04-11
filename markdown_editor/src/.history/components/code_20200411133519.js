import React,{useState} from 'react';

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');


    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={SetInput(this.target.value)}
                    value={Input}
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;