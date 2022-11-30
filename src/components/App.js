import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render = () => {
        const relative = [
            { name: 'Tina', relativeList: 'relativeListItem1' },
            { name: 'Mina', relativeList: 'relativeListItem2' },
            { name: 'Sima', relativeList: 'relativeListItem3 ' }
        ];

        const relatives = relative.map((relativeListAll) => {
            return <li key={relativeListAll.relativeList}>{relativeListAll.name}</li>
        })

        return (
            < div id="main" >
                {/* Do not remove the main div */
                    < ol >
                        {relatives}
                    </ol >
                }
            </div>
        )
    }
}


export default App;
