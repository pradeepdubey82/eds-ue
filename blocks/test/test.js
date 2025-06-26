export default function decorate(block) {

const elements = [...block.children];
  console.log("Elements ::: "+elements);
  Array.from([...block.children]).forEach(function (element) {
    console.log(element.getAttribute('data-aue-prop'));
});
const [titleElement] = block.children;
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
