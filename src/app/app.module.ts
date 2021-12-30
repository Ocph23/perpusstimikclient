import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { AdminNavbarComponent } from './components/navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LocalStorageService } from './services/local-storage.service';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { TablesComponent } from './views/admin/tables/tables.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { PengembalianComponent } from './views/admin/pengembalian/pengembalian.component';
import { AnggotaComponent } from './views/admin/anggota/anggota.component';
import { BukuComponent } from './views/admin/buku/buku.component';
import { PeminjamanComponent } from './views/admin/peminjaman/peminjaman.component';
import { AddBukuComponent } from './views/admin/buku/add-buku/add-buku.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';
import { PenelitianComponent } from './views/admin/penelitian/penelitian.component';
import { AddPenelitianComponent } from './views/admin/penelitian/add-penelitian/add-penelitian.component';
import { ItemKaryaComponent } from './views/admin/item-karya/item-karya.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PemesananComponent } from './views/admin/pemesanan/pemesanan.component';
import { PemesananDetailComponent } from './views/admin/pemesanan/pemesanan-detail/pemesanan-detail.component';
import { TablePesananDropdownComponent } from './components/dropdowns/table-pesanan-dropdown/table-pesanan-dropdown.component';
import { PengembalianDetailComponent } from './views/admin/pengembalian/pengembalian-detail/pengembalian-detail.component';
import { PeminjamanDetailComponent } from './views/admin/peminjaman/peminjaman-detail/peminjaman-detail.component';
import { TablePeminjamanDropdown } from './components/dropdowns/table-peminjamandropdown/table-peminjaman-dropdown.component';
import { CreatePengembalianComponent } from './views/admin/pengembalian/create-pengembalian/create-pengembalian.component';
import { SettingComponent } from './views/admin/setting/setting.component';
import { SettingService } from './services/setting.service';
import { TablePengembalianDropdown } from './components/dropdowns/table-pengembaliandropdown/table-pengembaliandropdown.component';
import { SearchComponent } from './components/search/search.component';
import { ItemHistoryComponent } from './views/admin/item-karya/item-history/item-history.component';
import { LokasiComponent } from './views/admin/lokasi/lokasi.component';
import { AddLokasiComponent } from './views/admin/lokasi/add-lokasi/add-lokasi.component';
import { TableTooltipComponent } from './components/tooltips/tabletooltip.component';
import { LaporanComponent } from './views/admin/laporan/laporan.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    TablePeminjamanDropdown,
    TablePengembalianDropdown,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    // CardPageVisitsComponent,
    // CardProfileComponent,
    // CardSettingsComponent,
    // CardSocialTrafficComponent,
    CardStatsComponent,
    // CardTableComponent,
    HeaderStatsComponent,
    // MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    // MapsComponent,
    // SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    PeminjamanComponent,
    PengembalianComponent,
    AnggotaComponent,
    BukuComponent,
    AddBukuComponent,
    UploadPictureComponent,
    PenelitianComponent,
    AddPenelitianComponent,
    ItemKaryaComponent,
    PemesananComponent,
    PemesananDetailComponent,
    TablePesananDropdownComponent,
    PeminjamanDetailComponent,
    PengembalianDetailComponent,
    CreatePengembalianComponent,
    SettingComponent,
    SearchComponent,
    ItemHistoryComponent,
    LokasiComponent,
    AddLokasiComponent,
    TableTooltipComponent,
    LaporanComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule, SweetAlert2Module.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [LocalStorageService, SettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
