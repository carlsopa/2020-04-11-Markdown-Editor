import React,{useState} from 'react';

const CodePanel = () =>{
    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={alert('this')}
                    value="this is a test area"
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;