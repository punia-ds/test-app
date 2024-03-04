import {
  Component,
  Input,
  OnInit,
  inject,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as L from 'leaflet';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-single-donor',
  templateUrl: './single-donor.component.html',
  styleUrls: ['./single-donor.component.scss'],
})
export class SingleDonorComponent implements OnInit, AfterViewInit {
  private document = inject(DOCUMENT);
  imgPath: string = '../../../assets/images/blood/';
  @Input() donor: any;
  map: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  // modal
  @ViewChild('content') content!: ElementRef;
  ngAfterViewInit() {
    // Ensure the element is loaded
    this.calculateDistanceFromTop();
  }
  calculateDistanceFromTop() {
    let totalOffset = 0;
    let currentElement = this.content.nativeElement;

    // Loop through the offset parents to calculate the total offset from the top
    while (currentElement) {
      totalOffset += currentElement.offsetTop;
      currentElement = currentElement.offsetParent;
    }

    console.log('Distance from the top:', totalOffset);
    // Perform any action with totalOffset, e.g., setting it as a property or displaying it
  }

  async share() {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }
  // async ionViewDidEnter() {
  //   const top = this.content.nativeElement?.offsetTop;
  //   console.log(`Distance from top: ${top}px`);
  // }

  // dismiss() {
  //   this.modalCtrl.dismiss();
  // }
  // modal ends

  calculateAge(dob: any) {
    const birthdate = moment(dob);
    const today = moment();
    return today.diff(birthdate, 'years');
  }

  // #TODO Leaflet map future use
  // leafletMap: any;
  // loadLeafletMap() {

  //   this.leafletMap = new L.Map('map');

  //   const self = this;

  //   this.leafletMap.on('load', function () {
  //     setTimeout(() => {
  //       self.leafletMap.invalidateSize();
  //     }, 10);
  //   });

  //   this.leafletMap.setView([51.505, -0.09], 12);

  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 22,
  //   }).addTo(this.leafletMap);
  // }
}
