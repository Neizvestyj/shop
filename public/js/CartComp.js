Vue.component('cart', {
data(){
return {
cartUrl: '/getBasket.json',
cartItems: [],
//imgCart: 'https://placehold.it/50x100',
visibility: false
      }
    },
mounted(){
this.$parent.getJson(`/api/cart`)
.then(data => {
for (let item of data.contents){
this.$data.cartItems.push(item);
item.imgPath=`img/${item.id_product}.jpg`;
                }
            });
    },
methods: {
addProduct(item){
let find = this.cartItems.find(el => el.id_product === item.id_product);
if(find){
this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
.then(data => {
if(data.result === 1){
find.quantity++}
                    })
            } else {
const prod = Object.assign({quantity: 1}, item);
this.$parent.postJson(`/api/cart`, prod)
.then(data => {
if(data.result === 1){ 
this.cartItems.push(prod)
                        }
                    })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
remove(item){
this.$parent.getJson(`${API}/addToBasket.json`)
.then(data => {
if (data.result === 1) { 
if(item.quantity>1){      
item.quantity--;
} else {  
this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
    },
template: `<div>
<button class="btn-cart" type="button" @click="visibility = !visibility">Корзина</button>

<div class="cart-block" v-if="visibility" :class="{open:visibility}">
<template v-if="cartItems.length===0">
<p class="empty-cart-message">Корзина пуста</p>
</template>

<cart-item v-for="item of cartItems" 
:key="item.id_product" 
:img="item.imgPath" 
:cart-item="item" @remove="remove"></cart-item>
</div>
</div>`
});

Vue.component('cart-item', {
props: ['img', 'cartItem'],
template: `
<div class="cart-item">
<div class="product-bio">
<img :src="img" alt="Some img">
<div class="product-desc">
<div class="product-title">{{ cartItem.product_name }}</div>
<div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
<div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
<div class="right-block">
<div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
<button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>`
})




/*alert('Cart')
const cartItem = {
      props: ['cart-item', "img"],
      template: `<div class="cart-item">
<div class="product-bio">
<img :src="img" alt="Some image">
<div class="product-desc">
<div class="product-title">{{cartItem.product_name}}</div>
<div class="product-quantity">Quantity:{{cartItem.quantity}}</div>
<div class="product-single-price">{{cartItem.price}} each</div>
</div>
</div>
<div class="right-block">
<div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
<button class="del-btn" @click="$parent.removeProduct(cartItem)">&times:</button>
</div>
</div>`
}

const cart = {
components: { "cart-item": cartItem },
data() {
return {
cartUrl: `/getBasketq.json`,
imgCatalog: "img1.jpg",
visibility: false,
cartItems: []
            }
      },
methods: {
addProduct(product) {
const find = this.cartItems.find(item => item.id_product === product.id_product);
if(find){
find.quantity++
}else{
this.cartItems.push({ ...product,quantity:1})
}
},

removeProduct(product) {
if (product.quantity > 1){product.quantity--;
} else {
this.cartItems=this.cartItems.filter(itemCart => itemCart.id_product !== product.id_product)}*/
                  /*this.cartItems.splice(this.cartItems.indexOf(product),1)*/
/*            }
      },
mounted() {
this.$parent.getJson(`${API + this.cartUrl}`)
.then(data => {
for(let item of data.contents){  this.cartItems.push(item)
                              //this.products.push(item);
                              //this.filtered.push(item);
                        }
                  });
      },
template: `<div>
<button @click="visibility=!visibility" class="btn-cart" type="button">Корзина</button>
<div class="cart-block" v-if="visibility" :class="{open:visibility}">
<template v-if="cartItems.length===0">
<p class="empty-cart-message">Корзина пуста</p>
</template>
<cart-item v-for="product of cartItems" :key ="product.id_product" :img="imgCatalog" :cart-item="product"
></cart-item>
</div>
</div>
`
}
*/
