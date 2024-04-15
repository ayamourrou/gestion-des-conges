import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  const serviceOfAuth = inject(AuthService);
  return serviceOfAuth.isAuthenticated().pipe(
    map((authInfos) => {
      return authInfos ? true : router.createUrlTree(['/login']);
    })
  );
};
