import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  frontEndSkills: any = [
    {
      "skillName": "HTML5",
      "rating": "3"
    },
    {
      "skillName": "CSS3",
      "rating": "1"
    },
    {
      "skillName": "Angular",
      "rating": "1"
    },
    {
      "skillName": "Javascript",
      "rating": "1"
    },
    {
      "skillName": "Bootstrap",
      "rating": "1"
    },
    {
      "skillName": "Responsive Design",
      "rating": "1"
    },
    {
      "skillName": "UI/UX Design",
      "rating": "1"
    }
  ];
  backEndSkills: any = [
    {
      "skillName": "ASP MVC",
      "rating": "1"
    },
    {
      "skillName": "WebAPI",
      "rating": "1"
    },
    {
      "skillName": "Entity Framework",
      "rating": "1"
    },
    {
      "skillName": "SQL Server",
      "rating": "1"
    }
  ];
  programmingLanguages: any = [
    {
      "skillName": "C",
      "rating": "1"
    },
    {
      "skillName": "C++",
      "rating": "1"
    },
    {
      "skillName": "C#",
      "rating": "1"
    },
    {
      "skillName": "Python",
      "rating": "1"
    }
  ];
  misfits: any = [
    {
      "skillName": "Git",
      "rating": "1"
    },
    {
      "skillName": "Technical Quiz",
      "rating": "2"
    }
  ];
}
