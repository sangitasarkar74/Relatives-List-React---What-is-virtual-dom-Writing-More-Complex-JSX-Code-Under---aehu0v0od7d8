import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render = () => {
        const relative = [
            { name: 'Tina', id: 'relativeListItem1' },
            { name: 'Mina', id: 'relativeListItem2' },
            { name: 'Sima', id: 'relativeListItem3 ' }
        ];

        const relativeListAll = relative.map((relativeList) => {
            return <li key={relativeList.id}>{relativeList.name}</li>
        })

        return (
            <div id="main">
                {/* Do not remove the main div */
                    <ol>
                        {relativeListAll}
                    </ol>
                }
            </div>
        )
    }
}


export default App;
