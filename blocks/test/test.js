export default function decorate(block) { 
  const title = block.title.classList.add("title");
  const desc = block.description.classList.add("description");
  block.appendChild(desc);
  block.children.appendChild(title);
}
