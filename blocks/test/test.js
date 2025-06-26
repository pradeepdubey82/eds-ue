export default function decorate(block) { 
  const [elements] = block.children;
  elements[0].classList.add('title');
  elements[1].classList.add('description');
}
