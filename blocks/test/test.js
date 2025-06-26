export default function decorate(block) { 
  const title = block.children.title.classList.add("title");
  const desc = block.children.description.classList.add("description");
  block.appendChild(desc);
  block.children.appendChild(title);
}
