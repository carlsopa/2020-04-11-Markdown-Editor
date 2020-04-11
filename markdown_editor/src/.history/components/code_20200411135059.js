import React,{useState} from 'react';
import '../style/editor.css'
import marked from 'marked';

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');


    return(
        <div id='MarkdownEditor'>
            
            <div id='CodePanel'>
            <h1>Mardown</h1>
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