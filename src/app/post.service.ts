import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}

	posts: IPost[];

	get(id: number): Observable<IPost> {
		return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
	}

	getAll(): Observable<IPost[]> {
		return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
	}
}
