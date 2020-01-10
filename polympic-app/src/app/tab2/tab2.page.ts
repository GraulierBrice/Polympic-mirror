import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon, Util } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  map: Map;
  // Before map is being initialized.

  constructor() {}

  ionViewDidEnter() { 
    this.leafletMap('mapId');
  }
  
  leafletMap(mapId,drag=true) {


    // In setView add latLng and zoom
    this.map = new Map(mapId,{dragging:drag}).setView([48.9244592, 2.3601645], 15)

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  

    //var testMarker2 = marker([48.9267792, 2.3600645], {icon: mapIcon2}).addTo(this.map)
    this.setMarker(48.9244592,2.3601645, 'football.png','Stade de France<br>');
    
  }

  //var x = 48.9244592, y = 2.3601645
  setMarker(x, y, iconImage, popupText){
    var mapIcon = icon({
      iconUrl: '../assets/icon/map-marker.png',
      shadowUrl: '../assets/icon/'+iconImage,
  
      iconSize:     [48, 48], // size of the icon
      shadowSize:   [24, 24], // size of the shadow
      iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
      shadowAnchor: [13, 42],  // the same for the shadow
      popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
    });

    console.log(this.map);
    var map = this.map;
    marker([x, y], {icon:mapIcon})
      .addTo(this.map)
      .bindPopup(popupText,{autoPanPadding:[150,75],closeButton:false,autoClose:false,closeOnEscapeKey:false})
      .on('mousedown', function () {
        map.dragging.disable();
        map
        .on('mouseup',function(){
          console.log("dragend");
          map.dragging.enable();
        })
        console.log("mousedown! ");
      })
      ;
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}