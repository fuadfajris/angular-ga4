import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,

  ) {
    angulartics2GoogleAnalytics.startTracking();
    // gtag('event', 'page_view', {page_path: 'https://angular-ga4.netlify.app/'})

    // gtag('event', 'screen_view', {
    //   'app_name': 'myAppName',
    //   'screen_name': 'Home'
    // });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  testga1() {
    console.log("test1")
    this.angulartics2GoogleAnalytics.eventTrack(
      'event',{ 'app_name': 'myAppName1', 'screen_name': 'Test Home 1' }
    )
    // gtag('event', 'screen_view', {
    //   'app_name': 'myAppName1',
    //   'screen_name': 'Test Home 1'
    // });
  }

  testga2() {
    console.log("test2")
    this.angulartics2GoogleAnalytics.eventTrack(
      'event',{ 'app_name': 'myAppName2', 'screen_name': 'Test Home 2' }
    )

    // gtag('event', 'screen_view', {
    //   'app_name': 'myAppName2',
    //   'screen_name': 'Test Home 2'
    // });
  }

}
