import React from 'react'

const Reasons =()=>{
    const design = {
        color:'dodgerblue',
        fontFamily:'verdana',
        fontSize:'15px'
    }
    return(<>

        <h1>Reasons for learning react</h1>
        <ol style={design}>
            <li>Will able to roll with the cool kid </li>
            <li>Will be able to secure a job as a developer</li>
            <li>Will be familiar with the latest technology in town </li>
            <li>Will worth the developer that am being called</li>
            <li>Will be able to Power thousands of enterprises app,including mobile apps </li>
        </ol>
        </>
    )
}
//export default Fact
ReactDOM.render(Facts,document.getElementById('root'))
