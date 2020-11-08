<template>
  <div id="container">
     <img src="@/assets/img/fcktrump.png" class="square">
     <ion-searchbar animated 
     show-cancel-button="focus"
     placeholder="Trust me, He said it" 
     v-model="textWrote"
     @ionChange="searchByTerm()"
     >
     </ion-searchbar>
     <ion-label v-if="totalResults !== 0">
       <p>
         We have 
        {{totalResults}} quotes 
         about {{textWrote}}</p>
        </ion-label>
      <section v-if="!totalResults">
        <ion-button @click="searchByTerm()">Show me a random Meme</ion-button>
      </section>
      <section v-if="quotes">
        <ion-card v-for="singleQuote in quotes" :key="singleQuote">
          <ion-card-header>
              <ion-card-title>Donald Trump Said:</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p class="cite">"{{singleQuote.quoteText}}"</p>  
              <hr>
            <p>Source <a :href="singleQuote.sourceUrl" target="_blank">here</a> </p>
         
          </ion-card-content>
      </ion-card>
      </section>
        <hr>
  </div>
</template>

<script lang="ts">
import { IonSearchbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { toRefs, reactive, computed } from 'vue';
import {useQuotesSpace} from '@/hooks/quotes-space'


export default  ({
  name: 'ExploreContainer',
  props: {
  },
  components: {
    IonSearchbar 
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