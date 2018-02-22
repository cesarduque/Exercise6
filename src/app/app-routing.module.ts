import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { OtherComponent } from './other/other.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'create', component: CreateComponent },
	{ path: 'update', component: UpdateComponent },
	{ path: 'delete', component: DeleteComponent },
	{ path: 'posts/:id', component: PostComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'other', redirectTo: '/', pathMatch: 'full' },
	{ path: 'todo', loadChildren: 'app/todo/todo.module#TodoModule' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
