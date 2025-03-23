

export function SearchBar(): HTMLDivElement {
    const container = document.createElement('div');
    container.classList.add('search-bar');
  
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search for recipes...';
    container.appendChild(input);
  
    const button = document.createElement('button');
    button.textContent = 'Search';
    container.appendChild(button);
  
    return container;
}