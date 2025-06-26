export default function decorate(block) {
const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.classList.add('title');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
