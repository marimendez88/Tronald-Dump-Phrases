<template>
  <div id="container">
     <img src="@/assets/img/fcktrump.png" class="square">
     
        <hr>
  </div>
</template>

<script lang="ts">
// import { IonSearchbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { toRefs, reactive, computed } from 'vue';
import {useQuotesSpace} from '@/hooks/quotes-space'


export default  ({
  name: 'DevContainer',
  props: {
  },
  components: {
  },
  setup(){
    return useQuotesSpace();
  }
});
    

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 15%;
  padding: 2%;
  margin-bottom: 10%;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.square {
    width: 30%;
}
.cite{
  font-style: italic;
}

</style>