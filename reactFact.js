import React from 'react'

const Fact =()=>{
    const design = {
        color:'dodgerblue',
        fontFamily:'verdana',
        fontSize:'15px'
    }
    return(<>

        <h1>fun fact about react</h1>
        <ul style={design}>
            <li>Was first released in 2013 </li>
            <li>Was originally created by john walke</li>
            <li>Has over 100k stars on Github </li>
            <li>Was maintained by facebook </li>
            <li>Power thousands of enterprises app,including mobile apps </li>
        </ul>
        </>
    )
}
ReactDOM.render(Fact,document.getElementById('root')
