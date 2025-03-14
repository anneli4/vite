import './styles.scss';

// Select the button and add a click event
document.querySelector('#app').innerHTML = `
  <h1>Hello, my cat</h1>
  <button id="myButton">Click Me</button>
  <div class="startbar"></div>
`;

document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
});