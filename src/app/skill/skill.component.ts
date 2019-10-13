import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  web: any = [
    {
      'skillName': 'HTML5',
      'rating': '3',
      'icon-class': ''
    },
    {
      'skillName': 'SCSS',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Angular',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Bootstrap',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Responsive Design',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'ASP.Net Core',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Web API',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Entity Framework',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'SQL Server',
      'rating': '1',
      'icon-class': ''
    }
  ];
  programmingLanguages: any = [
    {
      'skillName': 'C',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'C++',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'C#',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Javascript',
      'rating': '1',
      'icon-class': ''
    },
  ];
  sourceControl: any = [
    {
      'skillName': 'Git',
      'rating': '1',
      'icon-class': ''
    },
    {
      'skillName': 'Azure Devops',
      'rating': '1',
      'icon-class': ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
