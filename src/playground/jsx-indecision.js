console.log("App.js is running.");

const text = {
  title: 'Indecisions. Indecisions.',
  subtitle: 'Put your life in the hands of a computer.',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    text.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const removeAll = () => {
  text.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * text.options.length);
  const option = text.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{text.title}</h1>
      {text.subtitle && <p>{text.subtitle}</p>}
      <p>{text.options.length > 0 ? 'Here are your options.' : 'No options.'}</p> 
      <button disabled={text.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          text.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
  
render();
