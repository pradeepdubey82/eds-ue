export default function decorate(block) { 
  const [elements] = block.children;
  elements.title.classList.add('title');
  elements.description.classList.add('description');
}
