<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Vue Capacitor
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      The world is your oyster.
      <p>If you get lost, the <a href="https://ionicframework.com/docs">docs</a> will be your guide.</p>
      <ion-button @click="goToAbout" full>Go to About</ion-button>
      <ion-button @click="goToMap" full>Go to Map</ion-button>
      <ion-button @click="goToTabs" full>Go to Tabs</ion-button>
    </ion-content>

  </ion-app>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      goToAbout() {
        this.$router.push('about')
      },
      goToMap() {
        this.$router.push('mappy')
      },
      goToTabs() {
        this.$router.push('tabs')
      }
    }
  }
</script>

<style>

</style>