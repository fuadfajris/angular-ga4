import { Component, OnInit } from '@angular/core';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(
  ) {
    // gtag('event', 'page_view', {page_path: 'https://angular-ga4.netlify.app/'})

    gtag('event', 'page_view', {
      'app_name': 'myAppName',
      'screen_name': 'Home'
    });
    gtag('event', 'test_page_view', {
      'app_name': 'myAppName',
      'screen_name': 'Home'
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  testga1() {
    console.log("test1")
    gtag('event', 'page_view', {
      'app_name': 'myAppName1',
      'screen_name': 'Test Home 1'
    });

    gtag("event", "purchase", {
      // This purchase event uses a different transaction ID
      // from the previous purchase event so Analytics
      // doesn't deduplicate the events.
      // Learn more: https://support.google.com/analytics/answer/12313109
      transaction_id: "T_12345_2",
      value: 25.42,
      tax: 4.90,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
          price: 9.99,
          quantity: 1
        }]
    });
  }

  testga2() {
    console.log("test2")
    gtag('event', 'page_view', {
      'app_name': 'myAppName2',
      'screen_name': 'Test Home 2'
    });
  }

}
