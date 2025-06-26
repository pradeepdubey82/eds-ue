export default function decorate(block) {
const [titleElement] = block.children;
  console.log(block.innerHTML);
alert('testing');
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
