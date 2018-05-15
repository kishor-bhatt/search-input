import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  skill ='';
  source = '';
  city = '';
  constructor(private router:Router,private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skill = params.skill;
      this.source = params.source;
      this.city = params.city;
      console.log('this.skill:'+this.skill + 'source:'+ this.source);
    });
  }

  modifySearch() {
    this.router.navigate(['/first', { skill: this.skill, source: this.source, city: this.city }]);    
  }
}
