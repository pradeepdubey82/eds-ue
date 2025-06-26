export default function decorate(block) {
    alert("js invoked!!");
    const cells = Array.from(block.children);
    const titleText = cells[0]?.textContent.trim();
    titleText.classList.add("title");
    block.appendChild(titleText);

    const descriptioText = cells[1]?.textContent.trim();
    descriptioText.classList.add("description");
    block.textContent = '';
    block.appendChild(descriptioText);
}