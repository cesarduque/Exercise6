import { TodoComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: TodoComponent
			}
		])
	],
	declarations: [ TodoComponent ]
})
export class TodoModule {}
