// IGprofile-frontend/src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/Instagramwomenfootballers';
  private contextPath = 'IGProfilesList';

  constructor(private http: HttpClient) { }

  getProfilesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.contextPath}`);
  }

  updateProfile(profile: any): Observable<any> {
    // Usa el campo que sea único, por ejemplo nickname o id
    console.log("updateProfile()", profile);
    if (!profile || !profile.nickname) {
      throw new Error('Profile or nickname is missing');
    }
    let url = `${this.apiUrl}/${this.contextPath}/${profile.nickname}`;
    console.log("calling API with URL:", url);
    try {
      return this.http.put(url, profile);
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;  
    }
  }
  
  deleteProfile(nickname: string): Observable<any> {
    if (!nickname) {
      throw new Error('Nickname is required to delete a profile');
    }
    let url = `${this.apiUrl}/${this.contextPath}/${nickname}`;
    console.log("calling API with URL:", url);
    try{
      return this.http.delete(url);
    } catch (error) {
      console.error('Error deleting profile:', error);
      throw error;
    } 
  }

  createProfile(profile: any): Observable<any> {
    console.log("createProfile()", profile);
    if (!profile || !profile.nickname) {
      throw new Error('Profile or nickname is missing');
    }
    let url = `${this.apiUrl}/${this.contextPath}`;
    console.log("calling API with URL:", url);
    try {
      console.log('Creating profile:', profile);
      // Asegúrate de que el perfil tenga un nickname único
      if (!profile.nickname) {
        throw new Error('Nickname is required to create a profile');
      }
      // Aquí podrías agregar validaciones adicionales si es necesario
      console.log('Profile to create:', profile);
      return this.http.post(url, profile);

    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;  
    }  
  }
}
