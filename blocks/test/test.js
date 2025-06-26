export default function decorate(block) {
const [titleElement] = block.children;

  const t1 = [block.children];
  console.log("First ::: "+ti[0]);
  console.log("Second ::: "+ti[1]);
  console.log(block.innerHTML);
alert('testing');
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
