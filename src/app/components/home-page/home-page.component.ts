import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects-service.service';
import { IProject } from '../../interfaces/common-interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  projectsSubscription: Subscription;

  projects: IProject[] | null;

  constructor(
    private projectsService: ProjectsService
  ) {

    this.projectsSubscription = this.projectsService.getProjects().subscribe((pro) => {
      this.projects = pro.map(e => {
        console.log(e);
        return {
          name: e.payload.name,
        } as IProject;
      });
    });
  }

  ngOnInit(): void {
    console.log('this.projects ', this.projects);
  }

  ngOnDestroy(): void {
    this.projectsSubscription.unsubscribe();
  }

}
