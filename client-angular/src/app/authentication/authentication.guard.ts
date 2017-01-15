import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
	private isLoggedIn: boolean;

	constructor(private authenticationService: AuthenticationService, private router: Router) {
		this.authenticationService.loggedInStatus
			.subscribe(loggedIn => this.isLoggedIn = loggedIn);
	}

	canActivate() {
		if (!this.isLoggedIn) {
			this.router.navigate(['/LogIn']);
		}
		return this.isLoggedIn;
	}
}