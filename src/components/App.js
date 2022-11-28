import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render = () => {
        const relative = [
            { name: 'Tina', id: 'relativeListItem1' },
            { name: 'Mina', id: 'relativeListItem2' },
            { name: 'Sima', id: 'relativeListItem3 ' }
        ];

        const relativeList = relative.map((relativeName) => {
            return <li key={relativeName.id}>{relativeName.name}</li>
        })

        return (
            <div id="main">
                {/* Do not remove the main div */
                    <ol>
                        {relativeList}
                    </ol>
                }
            </div>
        )
    }
}


export default App;
