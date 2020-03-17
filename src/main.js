require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
import Vue from "vue";
new Vue({
  el: "#app",
  template: `<div class="text-center p-3">
<h1 class="bg-secondary text-white p-3">
Vue: Przycisk nie zotał wciśnięty
</h1>
<button class="btn btn-secondary">
Wciśnij mnie
</button>
</div>`
});