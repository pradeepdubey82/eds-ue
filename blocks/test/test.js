export default function decorate(block) { 
  block.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML?.trim();

    // If the paragraph starts with Terms and conditions: then style it as such
    if (innerHTML?.startsWith("Title:")) {
      /* If a paragraph starts with '*', add a special CSS class. */
      p.classList.add('title');
    }
  });
}
