fetch('menu.json')
  .then(res => res.json())
  .then(data => {
    const nav = document.getElementById('navbar');
    const container = document.getElementById('menu-container');

    data.categories.forEach(cat => {
      // Navbar link
      const link = document.createElement('a');
      link.href = `#${cat.id}`;
      link.textContent = cat.title;
      nav.appendChild(link);

      // Section
      const section = document.createElement('section');
      section.id = cat.id;
      const title = document.createElement('h2');
      title.textContent = cat.title;
      section.appendChild(title);

      // Items
      const ul = document.createElement('ul');
      cat.items.forEach(item => {
        const li = document.createElement('li');
      li.innerHTML = `<span class="item-name">${item.name}</span><span class="item-price">${item.price}</span>`;
        if (item.image) {
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.name;
          img.classList.add('menu-image');
          li.appendChild(img);
        }
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    });
  });
