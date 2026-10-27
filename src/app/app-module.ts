import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { TablaMultiplicar } from './components/tabla-multiplicar/tabla-multiplicar';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    App, Menu, TablaMultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
