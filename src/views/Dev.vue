<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Developer</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Developer</ion-title>
        </ion-toolbar>
      </ion-header>
      <DevContainer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import DevContainer from '@/components/DevContainer.vue';


export default  {
  name: 'Dev',
  components: { DevContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>