import React,{useState} from 'react';
import '../style/editor.css'

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');


    return(
        <div id='MarkdownEditor'>
            <h1>Mardown</h1>
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
                <h1>Preview</h1>
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