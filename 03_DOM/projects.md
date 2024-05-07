# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-29dqvg?file=1-colorChanger%2Fapp.js)

# Solution Code

## Project 1 

```Javascript

const buttons = document.querySelectorAll('.button');
const bg = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'white') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'blue') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'yellow') {
      bg.style.background = event.target.id;
    }
  });
});


```