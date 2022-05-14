import { Component } from '@angular/core';
import { ParticlesConfig } from '../../particles-config';
import * as AOS from 'aos';
declare let particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-ui';

  public ngOnInit(): void {
    AOS.init({
      duration: 2000,
      })
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
