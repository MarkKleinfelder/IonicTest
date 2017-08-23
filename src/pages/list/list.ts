import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})

export class ListPage {
  comments=[];

  commentText='';

  authorText='';

  comment={
  	text:'',
  	author:''
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
}

	submitComment(){
		this.comment={
		text: this.commentText,
		author: this.authorText
		}
		this.comments.push(this.comment)
	}

	deleteComment(i){
		this.comments.splice(i,1)
	}

	updateComment(i){
		this.comment ={
			text: this.commentText,
			author: this.authorText
		}
		this.comments.splice(i,1,this.comment)
	}

}
