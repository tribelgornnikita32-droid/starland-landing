fetch('content.json')
.then(res => res.json())
.then(data => {
  document.getElementById('main-title').innerText = data.main.title;
  document.getElementById('main-subtitle').innerText = data.main.subtitle;

  // Каталог
  const catalogContainer = document.getElementById('catalog-container');
  data.attractions.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.innerHTML = `<h2>${cat.category}</h2>`;
    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${item.image}" alt="${item.name}"><h3>${item.name}</h3><p>${item.description}</p>`;
      catDiv.appendChild(card);
    });
    catalogContainer.appendChild(catDiv);
  });

  // Доставка
  document.getElementById('delivery-title').innerText = data.delivery.title;
  document.getElementById('delivery-text').innerText = data.delivery.text;

  // Контакты
  document.getElementById('contacts-title').innerText = data.contacts.title;
  document.getElementById('contacts-phone').innerText = data.contacts.phone;
  document.getElementById('contacts-email').innerText = data.contacts.email;
  document.getElementById('contacts-address').innerText = data.contacts.address;
});
