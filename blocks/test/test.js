export default function decorate(block) { 
  const cells = Array.from(block.children);
  const t1 = cells[0].classList.add('title');
  const t2 = cells[1].classList.add('description');

  block.textContent = '';
  block.appendChild(t1);
  block.appendChild(t2);

}
