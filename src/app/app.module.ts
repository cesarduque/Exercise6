import { PostService } from './post.service';
import { OtherComponent } from './other/other.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		CreateComponent,
		HomeComponent,
		DeleteComponent,
		UpdateComponent,
		NotFoundComponent,
		OtherComponent,
		PostComponent,
		PostsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [ PostService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
