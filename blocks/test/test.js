export default function decorate(block) {
const [titleElement] = block.children;
alert('testing');
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
