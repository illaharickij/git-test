console.log(GOODS);
let activeTabId = 'goods';

const initialTab = document.querySelector(
	`button[data-tab-id="${activeTabId}"]`
);

initialTab.classList.add('active');

renderTabContentByID(activeTabId);

// ---
const goodsInCart=[];

const tabWithCounter=document.querySelector(
	'button[data-goods-count]');

const tabs = document.querySelectorAll('button.tab');
addInListener(tabs,clickHandler);

const addInCartButtons = document.querySelectorAll(
	'button[data-add-in-cart="true"]');
addInListener(addInCartButtons,addInCartHandler);
function addInListener(elements, callBack){
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
	
		element.addEventListener('click',callBack );
	}
}

function addInCartHandler(){
	const product = createProduct();
	goodsInCart.push(product);
	tabWithCounter.dataset.goodsCount=goodsInCart.length;
}
function clickHandler(event) {
	const activeTab = document.querySelector(
		`button[data-tab-id="${activeTabId}"]`
	);
	activeTab.classList.remove('active');
	event.target.classList.add('active');

	activeTabId = event.target.dataset.tabId;

	removeActiveTabContent();
	renderTabContentByID(activeTabId);
}
function removeActiveTabContent(){
	const dataActiveTabContent = document.querySelector('[data-active-tab-content="true"]');
	dataActiveTabContent.remove();
}
function renderTabContentByID(tabId){
	const tabsContainer = document.querySelector('.tabs');
	if(tabId === 'goods'){
		const html = renderGoods();
		tabsContainer.after(html);
	}
	else{
		const html = renderCart();
		tabsContainer.insertAdjacentHTML('afterend',html);
	}
	
}
function renderGoods() {
	const div =document.createElement('div');
	div.dataset.activeTabContent='true';
	div.className = 'product-items';
	console.log (div);
	for (let i = 0; i < GOODS.length; i++) {
		const product = GOODS[i];
		console.log(product);
		div.insertAdjacentHTML('beforeend',`
		<div class="product-item">
	  			<img src="${product.imgSrc}">
				<div class="product-list">
			    	<h3>${product.name}</h3>
			      	<p class="${product.price}">₽ 300</p>
			      	<button data-add-in-cart="true" class="button">В корзину</button>
				</div>
			</div>
		`);
	
	}
	return div;
	/*return `
		<div data-active-tab-content="true" class="product-items">
			<div class="product-item">
	  			<img src="goods/html.png">
				<div class="product-list">
			    	<h3>Уроки по HTML</h3>
			      	<p class="price">₽ 300</p>
			      	<button data-add-in-cart="true" class="button">В корзину</button>
				</div>
			</div>

			<div class="product-item">
	  			<img src="goods/css.png">
				<div class="product-list">
			    	<h3>Уроки по CSS</h3>
			      	<p class="price">₽ 150</p>
			      	<button data-add-in-cart="true" class="button">В корзину</button>
				</div>
			</div>

			<div class="product-item">
	  			<img src="goods/js.png">
				<div class="product-list">
			    	<h3>Уроки по JS</h3>
			      	<p class="price">₽ 260</p>
			      	<button data-add-in-cart="true" class="button">В корзину</button>
				</div>
			</div>
		</div>
	`;*/
}
function removeActiveTabContent(){
	const dataActiveTabContent = document.querySelector('[data-active-tab-content="true"]');
	dataActiveTabContent.remove();
}
function renderCart() {
	return `
		<div data-active-tab-content="true" class="cart-items">
			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по HTML</div>
	  			<div class="cart-item-count">3шт.</div>
	  			<div class="cart-item-price">₽ 150</div>
			</div>

			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по CSS</div>
	  			<div class="cart-item-count">1шт.</div>
	  			<div class="cart-item-price">₽ 450</div>
			</div>

			<div class="cart-item">
	  			<div class="cart-item-title">Уроки по JS</div>
	  			<div class="cart-item-count">6шт.</div>
	  			<div class="cart-item-price">₽ 550</div>
			</div>
		</div>
	`;
}








