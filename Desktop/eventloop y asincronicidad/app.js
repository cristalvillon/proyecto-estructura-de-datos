let orderId = 1;

const addOrderButton = document.getElementById('addOrderButton');
const orderList = document.getElementById('orderList');

addOrderButton.addEventListener('click', () => {
  const id = orderId++;

  const pedido = document.createElement('li');
  pedido.textContent = `Pedido #${id} - En Proceso`;
  pedido.style.color = 'pink';

  orderList.appendChild(pedido);

  // Simulaxion de preparación con un tiempo aleatorio (2-5 segundos)
  setTimeout(() => {
    pedido.textContent = `Pedido #${id} - Completado`;
    pedido.style.color = 'purple';
  }, Math.floor(Math.random() * 3000) + 2000);
});
