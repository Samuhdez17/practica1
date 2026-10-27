import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { TablaMultiplicar } from './components/tabla-multiplicar/tabla-multiplicar'

const appRoutes: Routes = [
            { path:'', component: TablaMultiplicar},
            { path:'tabla/:num', component: TablaMultiplicar},
        ]

export const appRoutingProvider: any = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)