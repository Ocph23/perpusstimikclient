import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AnggotaComponent } from './views/admin/anggota/anggota.component';
import { AddBukuComponent } from './views/admin/buku/add-buku/add-buku.component';
import { BukuComponent } from './views/admin/buku/buku.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { ItemHistoryComponent } from './views/admin/item-karya/item-history/item-history.component';
import { ItemKaryaComponent } from './views/admin/item-karya/item-karya.component';
import { AddLokasiComponent } from './views/admin/lokasi/add-lokasi/add-lokasi.component';
import { LokasiComponent } from './views/admin/lokasi/lokasi.component';
import { PemesananDetailComponent } from './views/admin/pemesanan/pemesanan-detail/pemesanan-detail.component';
import { PemesananComponent } from './views/admin/pemesanan/pemesanan.component';
import { PeminjamanDetailComponent } from './views/admin/peminjaman/peminjaman-detail/peminjaman-detail.component';
import { PeminjamanComponent } from './views/admin/peminjaman/peminjaman.component';
import { AddPenelitianComponent } from './views/admin/penelitian/add-penelitian/add-penelitian.component';
import { PenelitianComponent } from './views/admin/penelitian/penelitian.component';
import { CreatePengembalianComponent } from './views/admin/pengembalian/create-pengembalian/create-pengembalian.component';
import { PengembalianDetailComponent } from './views/admin/pengembalian/pengembalian-detail/pengembalian-detail.component';
import { PengembalianComponent } from './views/admin/pengembalian/pengembalian.component';
import { SettingComponent } from './views/admin/setting/setting.component';
import { TablesComponent } from './views/admin/tables/tables.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
       { path: "dashboard", component: DashboardComponent },
       { path: "buku", component: BukuComponent },
       { path: "pemesanan", component: PemesananComponent },
       { path: "lokasi", component: LokasiComponent },
      { path: "lokasi/:id", component:AddLokasiComponent },
      { path: "buku/:id", component: AddBukuComponent },
       { path: "penelitian", component: PenelitianComponent },
      { path: "penelitian/:id", component: AddPenelitianComponent },
      { path: "detail/:id/pesanan", component: PemesananDetailComponent },
      { path: "detail/:id/peminjaman", component: PeminjamanDetailComponent },
      { path: "detail/:id/buku", component: ItemKaryaComponent },
      { path: "detail/:id/penelitian", component: ItemKaryaComponent },
      { path: "detail/:id/pengembalian", component: PengembalianDetailComponent },
      { path: "history/:id", component: ItemHistoryComponent },
       { path: "peminjaman", component: PeminjamanComponent },
       { path: "pengembalian", component: PengembalianComponent },
       { path: "pengembalian/:id", component: CreatePengembalianComponent },
       { path: "anggota", component: AnggotaComponent },
       { path: "settings", component: SettingComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  // { path: "profile", component: ProfileComponent },
  // { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
