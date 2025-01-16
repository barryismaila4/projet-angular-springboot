import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPostComponent } from './src/app/backofficecrud/dance-category/category-post/category-post.component';
import { CategoryListComponent } from './src/app/backofficecrud/dance-category/category-list/category-list.component';
import { CategoryUpdateComponent } from './src/app/backofficecrud/dance-category/category-update/category-update.component';
import { SchoolPostComponent } from './src/app/backofficecrud/dance-school/school-post/school-post.component';
import { SchoolListComponent } from './src/app/backofficecrud/dance-school/school-list/school-list.component';
import { SchoolUpdateComponent } from './src/app/backofficecrud/dance-school/school-update/school-update.component';
import { CoursePostComponent } from './src/app/backofficecrud/course/course-post/course-post.component';
import { CourseListComponent } from './src/app/backofficecrud/course/course-list/course-list.component';
import { CourseUpdateComponent } from './src/app/backofficecrud/course/course-update/course-update.component';
import { TemplateComponent } from './src/app/backofficecrud/template/template.component';

const routes: Routes = [
  {
    path: 'crud', component: TemplateComponent, children: [
      // Route par défaut
      { path: 'category-post', component: CategoryPostComponent },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-update/:id', component: CategoryUpdateComponent },
      { path: 'school-post', component: SchoolPostComponent },
      { path: 'school-list', component: SchoolListComponent },
      { path: 'school-update/:id', component: SchoolUpdateComponent },
      { path: 'course-post', component: CoursePostComponent },
      { path: 'course-list', component: CourseListComponent },
      { path: 'course-update/:id', component: CourseUpdateComponent }
    ]
  },
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
