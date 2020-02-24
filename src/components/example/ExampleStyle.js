import React from 'react';
import styles from './styles';

export const ExampleStyle = () => {
    const [fontSize, setFontSize] = React.useState(14);

    return (
        <>
            <h1>ExampleStyle</h1>
            <button onClick={() => setFontSize(fontSize + 1)}>Increment</button>
            <style jsx>{styles}</style>
        </>
    );
};

export default ExampleStyle;
