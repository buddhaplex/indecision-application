class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() { 
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// FIVE STEPS TO SET UP/ACTIVATE COMPONENT STATE IN REACT

// 1. Setup default state object.-- this.state = { count: 0 }; in constructor; and render {this.state.count} in render.
// 2. Component rendered with default state values.
// 3. Change state based on the event.
// 4. Component is re-rendered using new state value(s).
// 5. Return to step 3.



// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();



