import { Component } from '@angular/core';
import { EVENTS_MOCKED } from 'src/mocks/event.mock';
import { SportsFilterService } from '../services/sports-filter/sports-filter.service';
import { Event } from '../../models/event.model'
import {
  Geolocation
} from '@ionic-native/geolocation/ngx';
import {
  Map,
  latLng,
  tileLayer,
  marker,
  icon,
  Routing,
  divIcon
} from 'leaflet';
import 'leaflet-routing-machine';
import { MarkerClusterGroup } from 'leaflet.markercluster';
import {
  ActivatedRoute
} from '@angular/router';
import {
  EventsService
} from '../services/events/events.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myPos = [];
  myPosMarker: any;
  eventsMarkers = [];
  map: Map;
  posTo = [];
  routing: boolean;
  route: any;
  events: Event[] = [];
  favEvents: Event[] = [];
  showFav = false;
  mapName : String;
  // Before map is being initialized.

  constructor(private geolocation: Geolocation, private activatedRoute: ActivatedRoute, private eventsService: EventsService, private service: SportsFilterService) {}

  ionViewDidEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('eventId')) {
        this.routing = false;
        this.mapName = 'emptyMap'
        return;
      } else {
        this.routing = true;
        this.mapName = paramMap.get('eventId') + 'map';
        const eventId = Number(paramMap.get('eventId'));
        let event = this.eventsService.getEvent(eventId);
        
        this.posTo = [event.place.latitude, event.place.longitude];
        
      }
    });
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myPos = [48.8859922, 2.3067176]
    }).catch((error) => {
    }).then(() => {

      if (this.route){
        this.map.removeControl(this.route);
      }

      this.route = Routing.control({
        waypoints: [
          latLng(this.myPos[0], this.myPos[1]),
          latLng(this.posTo[0], this.posTo[1])
        ]
      })
      this.leafletMap(this.mapName);
    });
  }

  ngOnInit() {
    for(var event of EVENTS_MOCKED) {
      const found: Event = this.events.find(e => { 
        return event.place === e.place;
      });
      if (found) {
        if(found.beginDate > event.beginDate && event.status === 'Terminé') {
          const ind = this.events.indexOf(found);
          this.events.splice(ind, 1, event); //replace element at index ind by the element event
        }
      }
      else if (event.status !== 'Terminé')
        this.events.push(event);
        this.favEvents.push(event);
    }
  }


  getSportsFilters() {
    return this.service.getSportsFilters();
  }
  
  leafletMap(mapId) {
    // In setView add latLng and zoom
    if (!this.map){
      this.map = new Map(mapId, {
        minZoom: 5,
        maxZoom: 17,
        zoomSnap: 0.25
      }).setView([48.9244592, 2.3601645], 13)
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.myPosMarker = marker([this.myPos[0], this.myPos[1]]).addTo(this.map);
    }

    if (this.routing) {
      this.route.addTo(this.map);
    } else {
      if (this.route){
      }
    }
  
    var markersCluster = new MarkerClusterGroup({
        iconCreateFunction: function(cluster) {
          var digits = (cluster.getChildCount()+'').length;
          return divIcon({ 
              html: cluster.getChildCount(), 
              className: 'cluster digits-'+digits, 
              iconSize: null 
          });
      }
    });

    this.events.forEach(e => {
      let marker = this.setMarker(e.place.longitude,e.place.latitude, e.iconMap,e.name+"<br>"+e.place.name+"<br>"+e.beginDate.toLocaleString(), e.type);
      this.eventsMarkers.push(marker);
      markersCluster.addLayer(marker);
    });
    var map = this.map;
    map.addLayer(markersCluster)
    var zoom = map.getZoom();
    map
      .on('mousedown', function () {
        zoom = map.getZoom();
        map.closePopup();
      })
      .on('mouseup', function () {
        map.dragging.enable();
        map.setZoom(zoom);
      })
      .on('popupclose', function () {});
  }
  setMarker(x = 0, y = 0, iconImage, popupText, className) {
    var mapIcon = icon({
      iconUrl: iconImage,
      shadowUrl: '../assets/icon/map-marker.png',
      iconSize: [24, 24], // size of the icon
      shadowSize: [48, 48], // size of the shadow
      iconAnchor: [13, 42], // point of the icon which will correspond to marker's location
      shadowAnchor: [24, 48], // the same for the shadow
      popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
      className: className,
    });

    var map = this.map;
    var zoom = map.getZoom();
    var eventMarker = marker([y, x], {
        icon: mapIcon
      })
      .bindPopup(popupText, {
        closeButton: false
      })
      .on('mousedown', function () {
        zoom = map.getZoom();
        map.flyTo(eventMarker.getLatLng(),Math.max(map.getZoom()+1,14),{duration:0.5})
        .dragging.disable();
      })
      .on('click',function () {
        map.flyTo(eventMarker.getLatLng(),zoom,{duration:0.5})
        eventMarker.openPopup();
      });

    

    return eventMarker;
  }

  setViewMyPos() {
    this.map.setView([this.myPos[0], this.myPos[1]], 15)
  }

  toggleFavorites() {
    this.eventsMarkers.forEach( marker => {
      if (this.showFav){
        marker.addTo(this.map);
    }else {
        marker.remove();
    }
    })
    this.showFav = !this.showFav
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
  }
}