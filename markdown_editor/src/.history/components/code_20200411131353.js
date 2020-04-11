import React from 'react';

const CodePanel = () =>{
    return(
        <div id='CodePanel'>
            <form>
                <label>
                    <textarea id='editor'
                    onChange={alert(this.target.value)}
                    ></textarea>
                </label>
            </form>
        </div>

    )
}
export default CodePanel;