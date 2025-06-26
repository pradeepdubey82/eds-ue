export default function decorate(block) {
const [quoteWrapper] = block.children;

  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(dummy);
}
