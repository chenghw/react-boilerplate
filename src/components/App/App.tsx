import React from 'react';

const App = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Hello World!!!</h1>

      <button data-testid="app-button" onClick={() => setCounter(counter + 1)}>
        Counter - {counter}
      </button>
    </div>
  );
};

export default App;
