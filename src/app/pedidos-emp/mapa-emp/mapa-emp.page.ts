import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pedido } from 'src/app/servicios/pedidos.service';

@Component({
  selector: 'app-mapa-emp',
  templateUrl: './mapa-emp.page.html',
  styleUrls: ['./mapa-emp.page.scss'],
})
export class MapaEmpPage implements OnInit {
  pedido: Pedido = {}
  lat: any
  lng: any
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  marker :any
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController) { 
      this.pedido = route.snapshot.params
      this.lat = parseFloat( this.pedido.lat);
      this.lng = parseFloat( this.pedido.lng);
        console.log(this.lat+" "+this.lng);
    }

  ngOnInit() {
  }


  getCurrentLocation() {

    //// Geolocation.getCurrentPosition().then(result => {
    //   this.lat = result.coords.latitude;
    //   this.lng = result.coords.longitude;
    //   console.log(result);
    //   this.latlng={lat:this.lat,lng:this.lng}
    //   this.loadMap();

    //// });
  }

  ionViewWillEnter() {
    this.loadMap()
   // this.getCurrentLocation();
  }
  loadMap() {
    let latLng = { lat: this.lat, lng: this.lng }

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Hello World!',
     // draggable: true,
      animation: google.maps.Animation.DROP,
    });
    //this.marker.addListener('dragend', (e) => {
    //  //this.latlng = { lat: e.latLng.lat(), lng: e.latLng.lng() }
    // // console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() });
//
    //});

    /**
     * 
     this.marker.addListener('click', (e) => {
       console.log(e);
       
       console.log(e.latLng.lat());
 
     })
     this.map.addListener('click',e=>{
       console.log(e);
       this.marker.setPosition({lat: e.latLng.lat(), lng: e.latLng.lng()})
     })
     */
  }

  

}
