import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return(
            <main>
                <HornedBeast
                title="Beast 1"
                description="This is a description for beast 1"
                />
                <HornedBeast 
                title="Beast 2"
                description="This is a description for beast 2"
                />
            </main>
        );
    }
}

export default Main;