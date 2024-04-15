import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAnAdmin().pipe(
    map((isAdmin) => {
      return isAdmin ? true : router.createUrlTree(['/dashboard/user']);
    })
  );
};
