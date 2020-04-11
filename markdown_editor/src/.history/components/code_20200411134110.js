import React,{useState} from 'react';
import '../style/editor.css'

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');


    return(
        <div>
            <div id='CodePanel'>
                <form>
                    <label>
                        <textarea id='CodeEditor'
                        onChange={e=>SetInput(e.target.value)}
                        value={Input}
                        ></textarea>
                    </label>
                </form>
            </div>
            <div id='PreviewPanel'>
            <form>
                <label>
                    <textarea id='PreviewEditor'
                    onChange={e=>SetInput(e.target.value)}
                    value={Input}
                    ></textarea>
                </label>
            </form>
        </div>
    </div>

    )
}
export default CodePanel;