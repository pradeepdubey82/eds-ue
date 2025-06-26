export default function decorate(block) {
const [quoteWrapper] = block.children;

  const title = document.createElement('blockquote');
  title.classList.add('title');
  title.textContent = quoteWrapper[0].textContent.trim();
  quoteWrapper.appendChild(title);
}
