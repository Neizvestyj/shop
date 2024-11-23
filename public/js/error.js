
Vue.component("error",{
props:["error1"],
template:`<div>
<div v-if="error1" >
<p>Ошибка подключения API</p></div> 
<div v-else>
<p>Подключение установлено успешно  </p>
</div>
</div>`
})
