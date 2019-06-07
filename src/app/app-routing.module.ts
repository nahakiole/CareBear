import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'services',
        loadChildren: './list/list.module#ListPageModule'
    },
    {path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule'},
    {path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule'},
    {path: 'debug', loadChildren: './debug/debug.module#DebugPageModule'},
    {path: 'check', loadChildren: './check/check.module#CheckPageModule'},
    {path: 'aftercheck', loadChildren: './after-check/after-check.module#AfterCheckPageModule'},
    {path: 'category/:id', loadChildren: './category/category.module#CategoryPageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
