import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryPostComponent } from './src/app/backofficecrud/dance-category/category-post/category-post.component';
import { CategoryListComponent } from './src/app/backofficecrud/dance-category/category-list/category-list.component';
import { CategoryUpdateComponent } from './src/app/backofficecrud/dance-category/category-update/category-update.component';
import { SchoolPostComponent } from './src/app/backofficecrud/dance-school/school-post/school-post.component';
import { SchoolListComponent } from './src/app/backofficecrud/dance-school/school-list/school-list.component';
import { SchoolUpdateComponent } from './src/app/backofficecrud/dance-school/school-update/school-update.component';
import { CoursePostComponent } from './src/app/backofficecrud/course/course-post/course-post.component';
import { CourseListComponent } from './src/app/backofficecrud/course/course-list/course-list.component';
import { CourseUpdateComponent } from './src/app/backofficecrud/course/course-update/course-update.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TemplateComponent } from './src/app/backofficecrud/template/template.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPostComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    SchoolPostComponent,
    SchoolListComponent,
    SchoolUpdateComponent,
    CoursePostComponent,
    CourseListComponent,
    CourseUpdateComponent,
    TemplateComponent,
    FrontofficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
