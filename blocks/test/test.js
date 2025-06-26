export default function decorate(block) {
const [titleElement] = block.children;

  const t1 = [block.children];
  console.log("First ::: "+t1.title);
  console.log("Second ::: "+t1.description.textContent);
  console.log(block.innerHTML);
alert('testing');
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
