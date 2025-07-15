// right click part
const rightClick= document.querySelector('.rightClick');

// counter part
const number= document.querySelector('.number')
const plus= document.querySelector('#plus')
const recived= document.querySelector('#recived')
const get= document.querySelector('#get')
let counter= 0;
plus.addEventListener('click', () => {
  number.innerHTML= counter++;
})
get.addEventListener('click', () => {
  number.innerHTML= counter--;
})
recived.addEventListener('click', () => {
  counter=0
  number.innerHTML= counter;
})


document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  console.log('u did it');

  rightClick.style.display= `flex`
  rightClick.style.left= `${event.pageX}px`
  rightClick.style.top= `${event.pageY}px`
})