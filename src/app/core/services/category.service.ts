import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `https://localhost:8080/categories`;

  constructor(private http: HttpClient) { }

  // Create a new category
  createCategory(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, request);
  }

  // Update an existing category
  updateCategory(id: number, request: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, request);
  }

  // Soft delete a category
  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get category by slug
  getCategoryBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`);
  }

  // Get all categories
  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Get active categories
  getActiveCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/active`);
  }

  // Search categories by keyword
  searchCategories(keyword: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search`, {
      params: { keyword }
    });
  }

  // Get categories by parent ID
  getCategoriesByParentId(parentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/parent/${parentId}`);
  }

  // Update category display order
  updateDisplayOrder(id: number, displayOrder: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/display-order`, null, {
      params: { displayOrder: displayOrder.toString() }
    });
  }
}
