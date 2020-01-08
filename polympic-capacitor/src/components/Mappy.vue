<template>
  <ion-app>
    <ion-content>
      <div id="mapId" style="width: 100%; height: 100%">
      </div>
    </ion-content>
  </ion-app>
</template>


<script>
  import {
    Map,
    tileLayer,
    marker
  } from 'leaflet';


  export default {
    name: 'mappy',
    components: {

    },
    data() {
      return {
        map: null,
        zoom: 23,
        center: [48.9239798, 2.3566347],
        markerLatLng: [48.9239798, 2.3566347],
      }
    },
    methods: {
      goBackHome() {
        this.$router.push('/')
      },
      initMap() {
        this.map = new Map('mapId').setView(this.center, this.zoom);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }).addTo(this.map);
        marker([28.6, 77]).addTo(this.map)
      .bindPopup('Ionic 4 <br> Leaflet.')
      .openPopup();
      }
    },
    mounted() {
      this.initMap()
    }
  }
</script>

<style>
  .mapId {
    width: 100%;
    height: 100%;
  }
</style>