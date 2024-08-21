const btn = document.getElementsByClassName('cta')[0],
      close = document.getElementsByClassName('close')[0],
      modal = document.getElementsByClassName('modal_container')[0],
      form = document.getElementById('form');

btn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  alert('You have successfully signed up!');
  modal.style.display = 'none';
  
 
  form.reset();
})




const productSwitcher = document.getElementById('product-switcher');
const productSwitcherImages = productSwitcher.querySelectorAll('.product-switcher');

const productName = document.getElementById('product-name');
const productDescription = document.getElementById('product-description');
const productPrice = document.getElementById('product-price');
const productImage = document.getElementById('product-image');

const products = [
  {
    name: 'Vanilla Crumb Cake',
    description: 'A warm cookie mixed with GOLDEN OREO cookie pieces then topped with a swirl of vanilla cream cheese frosting.',
    price: '$5.48',
    image: './menu img1.svg'
  },
  {
    name: 'CHOCOLATE COVERED  STRAWBERRY',
    description: 'A chocolate cookies & cream cookie smothered with fresh strawberry cream cheese frosting and a drizzle of semi-sweet chocolate.',
    price: '$6.99',
    image: './2.svg'
  },
  {
    name: 'Milk Chocolate Chip',
    description: "The classic—you can't go wrong. Thick, soft, and packed with milk chocolate chips",
    price: '$7.99',
    image: './4.svg'
  }
];

productSwitcherImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    
    productName.textContent = products[index].name;
    productDescription.textContent = products[index].description;
    productPrice.textContent = products[index].price;
    productImage.src = products[index].image;
  });
});





const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('click', () => {
  const menuSection = document.querySelector('.menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });
});



