import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 0;
  jobs:any=[];
  
  constructor( ) { }

  ngOnInit(): void {

    this.jobs = [{
      "Tab": "Akal Infosys",
      "Title": "Fullstack Developer",
      "Date": "August 2021 - Present",
      "Description": [
        "Creation and maintenance of REST APIs using Node.Js, Express and sometimes also Php and .Net .",
        "Developement and Maintaince of Function in Sql(PostgreSQL) to resuce load while using Node.",
        "Implementation of continuous integration and daily backups.",
        "Creation and maintenance of Platforms Done in Angular, Angular Material, Node, PostgreSQL, RxJS, (s)css with graphics (configurable), responsiveness, and user management and configuration of general parameters."
      ]
  },
  {
      "Tab": "Belivable",
      "Title": "FrontEnd Game Designer(Intern)",
      "Date": "March 2021 – April 2021",
      "Description": [
        "Implementing continuous improvements, working on frontend Unity Arena.",
        "Developent of Game Area(Boards) using Unity.",
        "Develope and Design board Games with common Functionality."
      ]
  },
  {
      "Tab": "Mumbai First",
      "Title": "UI / UX Designer(Intern)",
      "Date": "August 2020 – Nov. 2020",
      "Description": [
        "Assisting with the design and development of basic web pages and interfaces, using HTML, CSS, and JavaScript.",
        "Working with Adobe Creative Suite to modify images and create engaging visual content for web and social media platforms.",
        "Assisting with video editing, including trimming, cutting, and adding visual effects to create engaging video content.",
        "Conducting user research and testing to gather feedback on designs, and using this feedback to iterate and improve designs."
      ]
  }
]
  }

}
