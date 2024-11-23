

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        error1: false
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    //this.$refs.error.text = error;
                    this.$refs.error1 = true;
                    this.status = "Нет связи";
                    alert("error");
                })
        },

        postJson(url, data) {
            return fetch(url, {
                method: 'POST', headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    //this.$refs.error.text = error;
                    this.$refs.error1 = true;
                    this.status = "Нет связи";
                    alert("error");
                })
        },

        putJson(url, data) {
            return fetch(url, {
                method: 'PUT', headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    //this.$refs.error.text = error;
                    this.$refs.error1 = true;
                    this.status = "Нет связи";
                    alert("error");
                })
        },


    },

    mounted() {


    }

});





/*
addProduct(product){

const find=this.cartItems.find(item=>item.id_product===product.id_product);
if(find){
alert(1)
find.quantity++}
else{
this.cartItems.push({...product,quantity:1})
}
},

removeProduct(item){
if(item.quantity>1){
item.quantity--;
}else{ this.cartItems=this.cartItems.filter(itemCart=>itemCart.id_product!==item.id_product)}
},
//this.cartItems.splice(this.cartItems.index0f(item), 1) )}

filter(){
const regexp=new RegExp(this.userSearch,"i");

this.filtered=this.products.filter(product=>regexp.test(product.product_name));
}
},

mounted(){
this.getJson(`${API+this.cartUrl}`) 
      .then(data=>{
  for(let item of data.contents){
      this.$data.cartItems.push(item)
    //this.products.push(item);
    //this.filtered.push(item);
             }
});
this.getJson(`${API+this.catalogUrl}`)
      .then(data=>{
  for(let item of data){
    this.products.push(item);
    this.filtered.push(item);
             }
});
this.getJson(`getProducts.json`)
      .then(data=>{
  for(let item of data){
    this.products.push(item);
    this.filtered.push(item); 
}
             
})
}
})
*/
