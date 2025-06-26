export default function decorate(block) {

const elements = [...block.children];
  console.log("Elements ::: "+elements);

let collection = [...block.children];

        for (let i of collection) {
            console.log(collection[i].getAttribute('data-aue-prop'));
        }

const [titleElement] = block.children;
  const dummy = document.createElement('dummy');
  dummy.classList.add('title');
  dummy.textContent = titleElement.textContent.trim();
  titleElement.replaceChildren(dummy);
}
