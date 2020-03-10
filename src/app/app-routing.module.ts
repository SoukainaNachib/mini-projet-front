import { AddUserComponent } from './components/md-user/add-user/add-user.component';
import { EditCategoryComponent } from './components/md-category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/md-category/add-category/add-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostComponent } from './components/md-post/edit-post/edit-post.component';
import { AddPostComponent } from './components/md-post/add-post/add-post.component';
import { ListPostComponent } from './components/md-post/list-post/list-post.component';
import { ListCategoryComponent } from './components/md-category/list-category/list-category.component';
import { ListUserComponent } from './components/md-user/list-user/list-user.component';
import { EditUserComponent } from './components/md-user/edit-user/edit-user.component';
import { ShowPostComponent } from './components/md-post/show-post/show-post.component';
import { ShowCategoryComponent } from './components/md-category/show-category/show-category.component';
import { ShowUserComponent } from './components/md-user/show-user/show-user.component';
import { ListCommentComponent } from './components/md-comment/list-comment/list-comment.component';
import { AddCommentComponent } from './components/md-comment/add-comment/add-comment.component';
import { EditCommentComponent } from './components/md-comment/edit-comment/edit-comment.component';
import { ShowCommentComponent } from './components/md-comment/show-comment/show-comment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: "", redirectTo: '/post', pathMatch: 'full' },

  {
    path: "post", children: [

      { path: "", component: ListPostComponent },
      { path: "create", component: AddPostComponent },
      { path: ":id/edit", component: EditPostComponent },
      { path: ":id/show", component: ShowPostComponent },

    ]
  },

  {
    path: "category", children: [

      { path: "", component: ListCategoryComponent },
      { path: "create", component: AddCategoryComponent },
      { path: ":id/edit", component: EditCategoryComponent },
      { path: ":id/show", component: ShowCategoryComponent },

    ]
  },
  {
    path: "user", children: [

      { path: "", component: ListUserComponent },
      { path: "create", component: AddUserComponent },
      { path: ":id/edit", component: EditUserComponent },
      { path: ":id/show", component: ShowUserComponent },

    ]
  },
  {
    path: "comment", children: [

      { path: "", component: ListCommentComponent },
      { path: "create", component: AddCommentComponent },
      { path: ":id/edit", component: EditCommentComponent },
      { path: ":id/show", component: ShowCommentComponent },

    ]
  },

  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
