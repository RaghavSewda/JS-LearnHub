# Projects related to DOM

# Solution Code

## Project 1 (Color Changer)

[click here](https://stackblitz.com/edit/dom-projects-sil?file=1-colorChanger%2Fapp.js)

```javascript

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

## Project 2 (BMI calculator)
[click here](https://stackblitz.com/edit/dom-projects-sil-t716gc?file=2-BMICalculator%2Fapp.js)

```javascript

const form = document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()

  const height = parseInt(form.querySelector('#height').value)
  const weight = parseInt(form.querySelector('#weight').value)
  const result = form.querySelector('#results')
  
  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerText('Please give a valid height')
  }else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerText('Please give a valid weight')
  }
  else {
    result.innerText = (weight / ((height*height)/10000).toFixed(2))
  }
})

```

## Project 3
[click here](https://stackblitz.com/edit/dom-projects-sil-t716gc?file=3-DigitalClock%2Fapp.js)

```javascript

const clock = document.querySelector('#clock');


setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```