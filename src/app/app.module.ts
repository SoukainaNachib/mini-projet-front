import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/md-post/add-post/add-post.component';
import { EditPostComponent } from './components/md-post/edit-post/edit-post.component';
import { ShowPostComponent } from './components/md-post/show-post/show-post.component';
import { ListPostComponent } from './components/md-post/list-post/list-post.component';
import { ListCategoryComponent } from './components/md-category/list-category/list-category.component';
import { AddCategoryComponent } from './components/md-category/add-category/add-category.component';
import { EditCategoryComponent } from './components/md-category/edit-category/edit-category.component';
import { ShowCategoryComponent } from './components/md-category/show-category/show-category.component';
import { ShowUserComponent } from './components/md-user/show-user/show-user.component';
import { AddUserComponent } from './components/md-user/add-user/add-user.component';
import { EditUserComponent } from './components/md-user/edit-user/edit-user.component';
import { ListUserComponent } from './components/md-user/list-user/list-user.component';
import { ListCommentComponent } from './components/md-comment/list-comment/list-comment.component';
import { AddCommentComponent } from './components/md-comment/add-comment/add-comment.component';
import { EditCommentComponent } from './components/md-comment/edit-comment/edit-comment.component';
import { ShowCommentComponent } from './components/md-comment/show-comment/show-comment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    ShowPostComponent,
    ListPostComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ShowCategoryComponent,
    ShowUserComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ListCommentComponent,
    AddCommentComponent,
    EditCommentComponent,
    ShowCommentComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
