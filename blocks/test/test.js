export default function decorate(block) { 
  const title = block.children.title.classList.add("title");
  block.children.description.classList.add("description");
  block.children.replaceChildren(title);
}
