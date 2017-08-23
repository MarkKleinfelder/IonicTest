import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from '../../search.service';
import 'rxjs/add/operator/switchMap';

/**
 * Generated class for the AwesomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-awesome',
  templateUrl: 'awesome.html',
})
export class AwesomePage {
  apiObservable;
  searchSubject = new Subject();

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public http: Http,
          public searchService:SearchService) {
  }
  findCharacter(name){
    console.log(name);
    this.searchSubject.next(name);
    
}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwesomePage');
    this.apiObservable = this.searchSubject
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(name => this.searchService.createAPIObservable(name))
      console.log(name);
    
  }


}
