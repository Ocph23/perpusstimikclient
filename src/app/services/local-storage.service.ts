import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LoginResponse } from '../models/LoginResponse.model';
// key that is used to access the data in local storageconst 
@Injectable()
export class LocalStorageService {
  USER_KEY = 'user';
  USER_PROFILE= 'profile';
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  logOut() {
    this.storage.remove(this.USER_KEY);
    this.storage.remove(this.USER_PROFILE);
  }
     
  public setUserLogin(model: LoginResponse) {
    this.storage.set(this.USER_KEY, JSON.stringify(model));
  }

  public getUserLogin(): LoginResponse {
      let modelString = this.storage.get(this.USER_KEY) || null;
      let model: LoginResponse = JSON.parse(modelString);
      return model;
  }

  getProfile() {
      let modelString = this.storage.get(this.USER_PROFILE) || null;
      let model = JSON.parse(modelString);
      return model;
  }

  public setProfile(model:any) {
    this.storage.set(this.USER_PROFILE, JSON.stringify(model));
  }

}
