Vue.component('products', {
data(){
       return {
catalogUrl: '/catalogData.json',
filtered: [],
products: [],
//imgProduct: 'https://placehold.it/200x150'
       }
   },
mounted(){
this.$parent.getJson(`/api/products`)
.then(data => {
for (let item of data){
item.imgPath=`img/${item.id_product}.jpg`;
this.$data.products.push(item);
this.$data.filtered.push(item);
                }
            });
},
methods: {
filter(userSearch){
let regexp = new RegExp(userSearch, 'i');
this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
},

template: `<div class="products">
<product v-for="item of filtered" 
                :key="item.id_product" 
                :img="item.imgPath"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
</div>`
});

Vue.component('product', {
props: ['product', 'img'],
template: `
<div class="product-item">
<img :src="img" alt="Some img">
<div class="desc">                <h3>{{product.product_name}}</h3>
<p>{{product.price}}</p>
<button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
                </div>
            </div>`
})



/*alert("product")
const product = {
      props: ["product", "img"],
      template: `<div class="product-item">
<img :src="img" alt="imgs">
<div class="desc">
<h3>{{product.product_name}}</h3>
<p>{{product.price}}</p>
<button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
</div>
</div>`
}
const products = {
components: { product },
data() {
return {
catalogUrl: '/catalogData.json',
filtered: [],
products: [],
imgCatalog: "img1.jpg",
error1: false,
status: ''
            };
      },
mounted() {
this.$parent.getJson(`${API + this.catalogUrl}`)
.then(data => {
for (let item of data) {       
this.products.push(item);                              this.filtered.push(item);
                        }
                  });
this.$parent.getJson(`getProducts.json`)
 .then(data => {
 for (let item of data){
this.products.push(item);                                this.filtered.push(item);
                          }
                    });
      },

methods: {
filter(val) {
const regexp = new RegExp(val, "i");
this.filtered = this.products.filter(product => regexp.test(product.product_name));
            }
      },
template: `<div class="products">
<product v-for="product of filtered"
:key="product.id_product"
:img="imgCatalog"
:product="product"></product>
         </div>`
}
*/