export default function decorate(block) { 
  const cells = Array.from(block.children);
  const t1 = cells[0].classList.add('title');
  const t2 = cells[1].classList.add('description');

  block.textContent = '';
  const initialValue = "Pradeep Test";
  const counter = document.createElement('counter-element');
  if (initialValue) {
    counter.setAttribute('initial-value', initialValue);
  }
  block.textContent = '';
  block.appendChild(counter);

}
