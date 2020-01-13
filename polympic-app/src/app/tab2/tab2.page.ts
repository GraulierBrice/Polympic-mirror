import { Component } from '@angular/core';
import { EVENTS_MOCKED } from 'src/mocks/event.mock';
import { Event } from '../../models/event.model'
import { Map, latLng, tileLayer, Layer, marker, icon, Util, Routing } from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  map: Map;
  events: Event[] = [];
  // Before map is being initialized.

  constructor() {}

  ngOnInit() {
    for(var event of EVENTS_MOCKED) {
      const found: Event = this.events.find(e => { 
        return event.place === e.place;
      });
      //console.log(found);
      if (found) {
        if(found.beginDate > event.beginDate && !event.ended) {
          const ind = this.events.indexOf(found);
          this.events.splice(ind, 1, event); //replace element at index ind by the element event
        }
      }
      else if (!event.ended)
        this.events.push(event);
    }
    //console.log(this.events);
  }

  ionViewDidEnter() { 
    this.leafletMap('mapId');
  }
  
  leafletMap(mapId) {

    // In setView add latLng and zoom
    this.map = new Map(mapId,{minZoom:10,maxZoom:17}).setView([48.9244592, 2.3601645], 13)

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  
    this.events.forEach(e => {
      this.setMarker(e.place.longitude,e.place.latitude, e.icon,e.name+"<br>"+e.place.name+"<br>"+e.beginDate.toLocaleString());
    });
    var map = this.map;
    var zoom = map.getZoom();
    map
    .on('mousedown',function(){
      zoom = map.getZoom();
      map.closePopup();
    })
    .on('mouseup',function(){
      console.log("dragend");
      map.dragging.enable();
      map.setZoom(zoom,{duration:0.5});
    })
    .on('popupclose',function(){
    });
    //var testMarker2 = marker([48.9267792, 2.3600645], {icon: mapIcon2}).addTo(this.map)

    Routing.control({
      waypoints: [
        latLng(48.9244592, 2.3601645),
        latLng(48.9226794, 2.3550183)
      ]
    }).addTo(this.map)
    .hide();
    
  }

  //var x = 48.9244592, y = 2.3601645
  setMarker(x=0, y=0, iconImage, popupText){
    var mapIcon = icon({
      iconUrl: '../assets/icon/map-marker.png',
      shadowUrl:iconImage,
  
      iconSize:     [48, 48], // size of the icon
      shadowSize:   [24, 24], // size of the shadow
      iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
      shadowAnchor: [13, 42],  // the same for the shadow
      popupAnchor:  [0, -45] // point from which the popup should open relative to the iconAnchor
    });

    var map = this.map;
    var zoom = map.getZoom();
    var eventMarker = marker([y, x], {icon:mapIcon})
      .addTo(this.map)
      .bindPopup(popupText,{closeButton:false})
      .on('mousedown', function () {
        zoom = map.getZoom();
        map.flyTo(eventMarker.getLatLng(),Math.max(map.getZoom()+1,14),{duration:0.5})
        .dragging.disable();
        console.log("mousedown! ");
      })
      .on('click',function () {
        map.flyTo(eventMarker.getLatLng(),zoom,{duration:0.5})
        eventMarker.openPopup();
        console.log("clicked! ");
      })
      ;
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
