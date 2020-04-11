import React,{useState} from 'react';
import '../style/editor.css'
import marked from "marked";

const CodePanel = () =>{

    const [Input,SetInput] = useState('test');
    
    const getMarkDownText=()=> {
    var rawMarkup = marked(Input, {sanitize: true});
    return { __html: rawMarkup }; 
    }

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
                <div dangerouslySetInnerHTML={getMarkDownText()}></div>    
            </div>
            
    </div>

    )
}
export default CodePanel;