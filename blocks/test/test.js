export default function decorate(block) { 
  block.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML?.trim();
    if (innerHTML?.startsWith("Title")) {
      p.classList.add('title');
    }
  });
}
