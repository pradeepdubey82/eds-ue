export default function decorate(block) {
 
  const [quoteWrapper] = block.children;

    const title = document.createElement('title');
  title.textContent = block.title.trim();
  quoteWrapper.appendChildren(title);

  
    const description = document.createElement('description');
  description.textContent = block.description.trim();
  quoteWrapper.appendChildren(description);
}