import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { CollectionComponent } from "./collection/collection.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookGuardService } from "./guards/book-guard.service";

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'collection',
        component: CollectionComponent
    },
    {
        path: 'collection/:id',
        canActivate: [BookGuardService],
        component: BookDetailComponent
    },

    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);