import React from 'react';
import {
    Link,
    Route
} from 'react-router-dom'

function Topic(props){
  
    return <div>{props.match.params.topicId}</div>
}

export default function topic({match}){
    return (
        <div>
            <h2>
                Topic
            </h2>
            <ul>
                <li>
                    <Link to ={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to ={`${match.url}/component`}>Components</Link>
                </li>
                <li>
                    <Link to ={`${match.url}/props-vs-state`}>Trops vs State</Link>
                </li>
            </ul>
            <hr/>
            <Route path={`${match.path}/:topicId`} component={Topic}/>

            <Route exact path={match.path} render={() => {
                return <h3>Please select a topic</h3>
            }} />
        </div>
    )
} 