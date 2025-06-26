export default function decorate(block) {
    alert("js invoked!!");
    const cells = Array.from(block.children);
    const titleText = cells[0]?.textContent.trim();
    titleText.classList.add("titleAndDescription title");
    block.textContent = '';
    block.appendChild(titleText);
    const descriptioText = cells[1]?.textContent.trim();
    descriptioText.classList.add("titleAndDescription description");
    block.appendChild(descriptioText);
}