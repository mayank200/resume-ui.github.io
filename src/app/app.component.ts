import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,   // ✅ needed for <router-outlet>
    HeaderComponent, // ✅ needed for <app-header>
    FooterComponent  // ✅ needed for <app-footer>
  ]
})
export class AppComponent implements OnInit{
  title = 'resume-ui';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    ){
    }
  ngOnInit(): void{
        this.titleService.setTitle( "Mayank Sharma | Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Full, Stack, developer'},
      {name: 'description', content: 'I have 2 years of experience developing Backend, interfaces and technological solutions to make the web a better place.'},
    ]);


    AOS.init();

  }
}
