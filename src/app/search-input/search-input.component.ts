import { Component, ElementRef,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-input',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})

export class SearchInputComponent implements OnInit {
  public skillList = ['java','javascript','angular','angularJS'];
  public sourceList  = ['linked','github','stackoverflow','sourcepro'];
  public cityList = ['bangalore','chennai','chandigarh','pune'];
  skill = '';
  source = '';
  city = '';
  public skillfilteredList = [];
  public sourcefilteredList = [];
  public cityfilteredList = [];
  public elementRef;

  constructor(private router:Router,private route : ActivatedRoute,myElement: ElementRef) {
      this.elementRef = myElement;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skill = params.skill;
      this.source = params.source;
      this.city = params.city;// console.log('this.firstTime:'+this.firstTime + 'type:'+ typeof this.firstTime);
    });
  }

  filter(event) {
        if(event.target.id == 'skill') {
          this.skillfilteredList = this.skillList.filter(function(el){
              return el.toLowerCase().indexOf(this.skill.toLowerCase()) > -1;
          }.bind(this));
        }
        else if(event.target.id == 'source') {
          this.sourcefilteredList = this.sourceList.filter(function(el){
              return el.toLowerCase().indexOf(this.source.toLowerCase()) > -1;
          }.bind(this));
        } 
        else if(event.target.id == 'city') {
          this.cityfilteredList = this.cityList.filter(function(el){
            return el.toLowerCase().indexOf(this.city.toLowerCase()) > -1;
          }.bind(this));
        }
  }
  
  select(item,field){
      if(field == 'skill'){
        this.skill = item;
        this.skillfilteredList = [];
      }  
      else if(field == 'source'){
        this.source = item;
        this.sourcefilteredList = [];
      } else {
        this.city = item;
        this.cityfilteredList = [];
      }       
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
       clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
     if(!inside){
        this.skillfilteredList = [];
        this.sourcefilteredList = [];
        this.cityfilteredList = [];
     }
  }

  search () {
    if(!this.skill) {
      alert('Enter a skill');
      return;
    }
      
    if(!this.source) {
      alert('Enter a source');
      return;
    }
    
    if(!this.city) {
      alert('Enter a city');  
      return;
    }

    this.router.navigate(['/next', { skill: this.skill, source: this.source, city: this.city }]).then(nav => {
      console.log('nav:'+nav); // true if navigation is successful
    }, err => {
      console.log('err:'+err) // when there's an error
    });    
  }
}
