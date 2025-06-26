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

    block.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML?.trim();

    // If the paragraph starts with Terms and conditions: then style it as such
    if (innerHTML?.startsWith("Title")) {
      /* If a paragraph starts with '*', add a special CSS class. */
      p.classList.add('title');
    } else {
        p.classList.add('description');
    }
  });
}