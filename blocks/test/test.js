export default function decorate(block) {

const elements = [...block.children];
  console.log("Elements ::: "+elements);
const [titleElement] = block.children;
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
