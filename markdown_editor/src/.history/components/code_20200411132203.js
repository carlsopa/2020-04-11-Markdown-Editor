import React,{useState} from 'react';

const CodePanel = () =>{

    const [input,Setinput] = useState('test');
    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={alert('this')}
                    value={input}
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;