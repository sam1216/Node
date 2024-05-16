import React from 'react'
import HtmlCode from './HtmlCode'

export default function Htmlhome() {

  const JavaScript = `
  <!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1> 
<h2>The toString() Method</h2>

<p>The toString() method returns an array as a comma separated string:</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
</script>

</body>
</html>`
  


  return (
    <div className='htmlHome'>
      <h1>Hey i am HTML Home Page</h1>
      <HtmlCode code={JavaScript} />
    </div>
  )
}
