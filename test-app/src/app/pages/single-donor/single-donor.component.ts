import { Component, Input, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-single-donor',
  templateUrl: './single-donor.component.html',
  styleUrls: ['./single-donor.component.scss'],
})
export class SingleDonorComponent implements OnInit {
  private document = inject(DOCUMENT);
  @Input() donor: any;
  map: any;

  constructor() {}

  ngOnInit() {
    this.loadLeafletMap();
    // const map = L.map('map').setView([51.505, -0.09], 22);
    // const tiles = L.tileLayer(
    //   'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    //   {
    //     maxZoom: 22,
    //   }
    // ).addTo(map);
    // console.log(this.donor);
    // const mapContainer = this.document.getElementById('map');
    // this.map = L.map(mapContainer ? mapContainer : '').setView(
    //   [51.505, -0.09],
    //   13
    // ); // Example coordinates and zoom level
    // // Add basemap tiles (e.g., OpenStreetMap)
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(this.map);
  }

  leafletMap: any;

  loadLeafletMap() {
    this.leafletMap = new L.Map('map');

    const self = this;

    this.leafletMap.on('load', function () {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });

    this.leafletMap.setView([51.505, -0.09], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 22,
    }).addTo(this.leafletMap);
  }
}
