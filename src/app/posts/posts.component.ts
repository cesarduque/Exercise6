import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../post.interface';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: [ './posts.component.css' ]
})
export class PostsComponent implements OnInit {
	posts: IPost[];
	constructor(private postService: PostService) {}

	ngOnInit() {
		this.postService.getAll().subscribe((posts) => (this.posts = posts));
	}
}
