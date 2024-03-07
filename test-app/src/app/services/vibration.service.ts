import { Injectable } from '@angular/core';
import { Haptics } from '@capacitor/haptics';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class VibrationService {
  constructor(private platform: Platform) {}

  vibrate = async () => {
    if (this.platform.is('desktop') || this.platform.is('mobileweb'))
      return console.log('WEB');
    await Haptics.vibrate();
  };
}
