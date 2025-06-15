fetch('./menu.json')
  .then(res => res.json())
  .then(data => {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = `<h1>${data.cafe.name}</h1>`;
    menuDiv.innerHTML += `<p>${data.cafe.location}</p>`;
    data.cafe.menu.forEach(item => {
      menuDiv.innerHTML += `<p><strong>${item.name}</strong> - $${item.price}<br>${item.description}</p>`;
    });
  });
