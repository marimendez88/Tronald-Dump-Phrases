<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Best Dumb Quotes</ion-title>
        <p class="p-center">by Tronald Dump</p>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="small">By Tronald Dump</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer />


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';






export default  {
  name: 'Home',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>