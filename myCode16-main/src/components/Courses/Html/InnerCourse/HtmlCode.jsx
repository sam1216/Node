import React, { useEffect, useState } from 'react';
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function HtmlCode(props) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    // ---------------For Copy Code-----------
    const [copy, setCopy] = useState(false);

    return (
        <div>
            <pre>
            {/* ------------------button for copy the code--------------- */}
                {
                    copy ? (<CheckIcon className='copyClipboard' />) : (

                        <ContentCopyIcon className='copyClipboard' onClick = {
                            () => {
                                navigator.clipboard.writeText(props.code);
                                // console.log('Code copied to clipboard:', props.code);
                                setCopy(true);
                                setTimeout(() => {
                                    setCopy(false)
                                }, 3000)        
                            }
                        }/>
                    )
                }
                {/* <code className={`language-${props.language}`}>{props.code}</code> */}
                <code id="myInput" className="language-html language-javascript language-css">{props.code}</code>

            </pre>
        </div>
    )
}
