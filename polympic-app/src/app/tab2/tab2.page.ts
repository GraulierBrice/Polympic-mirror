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
  Layer,
  marker,
  icon,
  Util,
  Routing,
  Control,
  LatLng
} from 'leaflet';
import 'leaflet-routing-machine';
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
  map: Map;
  posTo = [];
  routing: boolean;
  route: any;
  events: Event[] = [];
  // Before map is being initialized.

  constructor(private geolocation: Geolocation, private activatedRoute: ActivatedRoute, private eventsService: EventsService, private service: SportsFilterService) {}

  ionViewDidEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('eventId')) {
        console.log('no routes')
        this.routing = false;
        return;
      } else {
        this.routing = true;
        const eventId = Number(paramMap.get('eventId'));
        let event = this.eventsService.getEvent(eventId);
        console.log(event)
        this.posTo = [event.place.latitude, event.place.longitude];
        console.log('place to go : ')
        console.log(this.posTo)
      }
    });
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.myPos = [resp.coords.latitude, resp.coords.longitude]
      console.log('place how i am: ')
      console.log(this.myPos)
    }).catch((error) => {
      console.log('Error getting location', error);
    }).then(() => {
      console.log('lauching mat init');

      if (this.route){
        this.map.removeControl(this.route);
        console.log('route removed')
      }

      this.route = Routing.control({
        waypoints: [
          latLng(this.myPos[0], this.myPos[1]),
          latLng(this.posTo[0], this.posTo[1])
        ]
      })

      this.leafletMap('mapId');
    });
  }

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


  getSportsFilters() {
    return this.service.getSportsFilters();
  }
  
  leafletMap(mapId) {
    // In setView add latLng and zoom
    if (!this.map){
      console.log(this.map)
      console.log('INIT MAP')
      //this.map.remove();
      this.map = new Map(mapId, {
        minZoom: 5,
        maxZoom: 17
      }).setView([48.9244592, 2.3601645], 13)
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      // console.log('still ok')
      this.myPosMarker = marker([this.myPos[0], this.myPos[1]]).addTo(this.map);
      this.setViewMyPos();
      // console.log('not ok')
    }

    if (this.routing) {
      console.log('trying to make route')
      console.log(this.route)
      this.route.addTo(this.map);

      console.log('route supposed to be made')
    } else {
      if (this.route){
        //this.route.spliceWaypoints(0, 2); // <-- removes your route
        //this.map.removeControl(this.route);
      }
    }


    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   //this.map.removeLayer(this.myPosMarker);
    //   this.myPos = [data.coords.longitude, data.coords.latitude];
    //   this.myPosMarker = this.setMarker(this.myPos[0], this.myPos[1], '../assets/icon/football.png', 'My pos');
    //   console.log('place how i am now: ' + this.posTo)
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    // });
  
    this.events.forEach(e => {
      this.setMarker(e.place.longitude,e.place.latitude, e.icon,e.name+"<br>"+e.place.name+"<br>"+e.beginDate.toLocaleString(), e.type);
    });
    var map = this.map;
    var zoom = map.getZoom();
    map
      .on('mousedown', function () {
        zoom = map.getZoom();
        map.closePopup();
      })
      .on('mouseup', function () {
        console.log("dragend");
        map.dragging.enable();
        map.setZoom(zoom);
      })
      .on('popupclose', function () {});
    //var testMarker2 = marker([48.9267792, 2.3600645], {icon: mapIcon2}).addTo(this.map)
  }

  //var x = 48.9244592, y = 2.3601645
  setMarker(x = 0, y = 0, iconImage, popupText, className) {
    var mapIcon = icon({
      iconUrl: '../assets/icon/map-marker.png',
      shadowUrl: iconImage,

      iconSize: [48, 48], // size of the icon
      shadowSize: [24, 24], // size of the shadow
      iconAnchor: [24, 48], // point of the icon which will correspond to marker's location
      shadowAnchor: [13, 42], // the same for the shadow
      popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
      className: className,
    });

    var map = this.map;
    var zoom = map.getZoom();
    var eventMarker = marker([y, x], {
        icon: mapIcon
      })
      .addTo(this.map)
      .bindPopup(popupText, {
        closeButton: false
      })
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
      });

    return eventMarker;
  }

  setViewMyPos() {
    this.map.setView([this.myPos[0], this.myPos[1]], 15)
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    //this.routing = false;
    // if (this.route){
    //   this.route.spliceWaypoints(0, 2); // <-- removes your route
    // }
    // if (this.route){
    //   this.map.removeControl(this.route);
    //   console.log('route removed')
    // }
    //this.map.remove();
  }
}