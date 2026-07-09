import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { FormsDebugComponent } from './components/forms-debug/forms-debug.component';
import { MaiorDeIdadeDirective } from './shared/maior-de-idade.directive';

registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    FormsDebugComponent,
    MaiorDeIdadeDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: "pt-br" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
