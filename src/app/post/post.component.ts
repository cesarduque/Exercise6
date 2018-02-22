import { Component, OnInit } from '@angular/core';
import { IPost } from '../post.interface';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ]
})
export class PostComponent implements OnInit {
	post: IPost;

	constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((x) => {
			this.postService.get(x.id).subscribe((post) => (this.post = post));
		});
	}
}
