import React from 'react'
import HtmlCode from './HtmlCode'

export default function Htmlintro() {

  const htmlCode = `
< !DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
    <body>

        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>

    </body>
</html>`



  return (
    <div className='htmlHome'>
      <h1>HTML Introduction</h1>
      <hr />
      <p>HTML is the standard markup language for creating Web pages.</p>
      <hr />
     <div className="htmlHome_one">
     <h2>What is HTML</h2>
      <ul>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
      </ul>
     </div>
      <h1>A Simple HTML Document</h1>
      <HtmlCode code={htmlCode}  />
    </div>
  )
}


