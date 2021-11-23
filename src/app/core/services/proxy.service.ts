import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl; 
}
Edit_Client(i_Client: Client) : Observable<Client> {
this.url = this.APIBaseUrl + '/Edit_Client?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Client>(this.url, JSON.stringify(i_Client), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Client;}));
}
Delete_Client(i_Params_Delete_Client: Params_Delete_Client) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Client?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Client), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Client_By_OWNER_ID(i_Params_Get_Client_By_OWNER_ID: Params_Get_Client_By_OWNER_ID) : Observable<Client[]> {
this.url = this.APIBaseUrl + '/Get_Client_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Client_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Authenticate(i_Params_Authenticate: Params_Authenticate) : Observable<User> {
this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Order(i_Order: Order) : Observable<Order> {
this.url = this.APIBaseUrl + '/Edit_Order?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Order>(this.url, JSON.stringify(i_Order), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Order;}));
}
Delete_Order(i_Params_Delete_Order: Params_Delete_Order) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Order?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Order), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Order_By_OWNER_ID_Adv(i_Params_Get_Order_By_OWNER_ID: Params_Get_Order_By_OWNER_ID) : Observable<Order[]> {
this.url = this.APIBaseUrl + '/Get_Order_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Order_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Order_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Order_By_STATUS_ID_Adv(i_Params_Get_Order_By_STATUS_ID: Params_Get_Order_By_STATUS_ID) : Observable<Order[]> {
this.url = this.APIBaseUrl + '/Get_Order_By_STATUS_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Order_By_STATUS_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Order_By_STATUS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Order_By_CLIENT_ID_Adv(i_Params_Get_Order_By_CLIENT_ID: Params_Get_Order_By_CLIENT_ID) : Observable<Order[]> {
this.url = this.APIBaseUrl + '/Get_Order_By_CLIENT_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Order_By_CLIENT_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Order_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Product_cart(i_Product_cart: Product_cart) : Observable<Product_cart> {
this.url = this.APIBaseUrl + '/Edit_Product_cart?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Product_cart>(this.url, JSON.stringify(i_Product_cart), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Product_cart;}));
}
Delete_Product_cart(i_Params_Delete_Product_cart: Params_Delete_Product_cart) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Product_cart?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Product_cart), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Edit_Status(i_Status: Status) : Observable<Status> {
this.url = this.APIBaseUrl + '/Edit_Status?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Status>(this.url, JSON.stringify(i_Status), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Status;}));
}
Delete_Status(i_Params_Delete_Status: Params_Delete_Status) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Status?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Status), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Status_By_OWNER_ID(i_Params_Get_Status_By_OWNER_ID: Params_Get_Status_By_OWNER_ID) : Observable<Status[]> {
this.url = this.APIBaseUrl + '/Get_Status_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Status_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Status_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Category(i_Category: Category) : Observable<Category> {
this.url = this.APIBaseUrl + '/Edit_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Category>(this.url, JSON.stringify(i_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Category;}));
}
Delete_Category(i_Params_Delete_Category: Params_Delete_Category) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Category_By_OWNER_ID(i_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID) : Observable<Category[]> {
this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Admin(i_Admin: Admin) : Observable<Admin> {
this.url = this.APIBaseUrl + '/Edit_Admin?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Admin>(this.url, JSON.stringify(i_Admin), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Admin;}));
}
Delete_Admin(i_Params_Delete_Admin: Params_Delete_Admin) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Admin?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Admin), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Admin_By_OWNER_ID(i_Params_Get_Admin_By_OWNER_ID: Params_Get_Admin_By_OWNER_ID) : Observable<Admin[]> {
this.url = this.APIBaseUrl + '/Get_Admin_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Admin_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Product(i_Product: Product) : Observable<Product> {
this.url = this.APIBaseUrl + '/Edit_Product?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Product>(this.url, JSON.stringify(i_Product), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Product;}));
}
Delete_Product(i_Params_Delete_Product: Params_Delete_Product) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Product?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Product), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Product_By_OWNER_ID_Adv(i_Params_Get_Product_By_OWNER_ID: Params_Get_Product_By_OWNER_ID) : Observable<Product[]> {
this.url = this.APIBaseUrl + '/Get_Product_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Product_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Product_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Product_By_CATEGORY_ID_Adv(i_Params_Get_Product_By_CATEGORY_ID: Params_Get_Product_By_CATEGORY_ID) : Observable<Product[]> {
this.url = this.APIBaseUrl + '/Get_Product_By_CATEGORY_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Product_By_CATEGORY_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Product_By_CATEGORY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Color(i_Color: Color) : Observable<Color> {
this.url = this.APIBaseUrl + '/Edit_Color?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Color>(this.url, JSON.stringify(i_Color), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Color;}));
}
Delete_Color(i_Params_Delete_Color: Params_Delete_Color) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Color?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Color), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Color_By_OWNER_ID(i_Params_Get_Color_By_OWNER_ID: Params_Get_Color_By_OWNER_ID) : Observable<Color[]> {
this.url = this.APIBaseUrl + '/Get_Color_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Color_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Color_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Gender_By_OWNER_ID(i_Params_Get_Gender_By_OWNER_ID: Params_Get_Gender_By_OWNER_ID) : Observable<Gender[]> {
this.url = this.APIBaseUrl + '/Get_Gender_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Gender_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Gender_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Size(i_Size: Size) : Observable<Size> {
this.url = this.APIBaseUrl + '/Edit_Size?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Size>(this.url, JSON.stringify(i_Size), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Size;}));
}
Delete_Size(i_Params_Delete_Size: Params_Delete_Size) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Size?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Size), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Size_By_OWNER_ID(i_Params_Get_Size_By_OWNER_ID: Params_Get_Size_By_OWNER_ID) : Observable<Size[]> {
this.url = this.APIBaseUrl + '/Get_Size_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Size_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Size_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Unit(i_Unit: Unit) : Observable<Unit> {
this.url = this.APIBaseUrl + '/Edit_Unit?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Unit>(this.url, JSON.stringify(i_Unit), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Unit;}));
}
Delete_Unit(i_Params_Delete_Unit: Params_Delete_Unit) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Unit?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Unit), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Unit_By_OWNER_ID(i_Params_Get_Unit_By_OWNER_ID: Params_Get_Unit_By_OWNER_ID) : Observable<Unit[]> {
this.url = this.APIBaseUrl + '/Get_Unit_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Unit_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Unit_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Cart(i_Cart: Cart) : Observable<Cart> {
this.url = this.APIBaseUrl + '/Edit_Cart?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Cart>(this.url, JSON.stringify(i_Cart), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Cart;}));
}
Delete_Cart(i_Params_Delete_Cart: Params_Delete_Cart) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Cart?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Cart), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Cart_By_OWNER_ID(i_Params_Get_Cart_By_OWNER_ID: Params_Get_Cart_By_OWNER_ID) : Observable<Cart[]> {
this.url = this.APIBaseUrl + '/Get_Cart_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Cart_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Cart_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Cart_By_CLIENT_ID_Adv(i_Params_Get_Cart_By_CLIENT_ID: Params_Get_Cart_By_CLIENT_ID) : Observable<Cart[]> {
this.url = this.APIBaseUrl + '/Get_Cart_By_CLIENT_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Cart_By_CLIENT_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Cart_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Banner(i_Banner: Banner) : Observable<Banner> {
this.url = this.APIBaseUrl + '/Edit_Banner?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Banner>(this.url, JSON.stringify(i_Banner), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Banner;}));
}
Delete_Banner(i_Params_Delete_Banner: Params_Delete_Banner) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Banner?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Banner), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Banner_By_OWNER_ID(i_Params_Get_Banner_By_OWNER_ID: Params_Get_Banner_By_OWNER_ID) : Observable<Banner[]> {
this.url = this.APIBaseUrl + '/Get_Banner_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Banner_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Banner_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Review(i_Review: Review) : Observable<Review> {
this.url = this.APIBaseUrl + '/Edit_Review?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Review>(this.url, JSON.stringify(i_Review), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Review;}));
}
Delete_Review(i_Params_Delete_Review: Params_Delete_Review) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Review?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Review), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Review_By_OWNER_ID(i_Params_Get_Review_By_OWNER_ID: Params_Get_Review_By_OWNER_ID) : Observable<Review[]> {
this.url = this.APIBaseUrl + '/Get_Review_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Review_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Review_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Review_By_PRODUCT_ID(i_Params_Get_Review_By_PRODUCT_ID: Params_Get_Review_By_PRODUCT_ID) : Observable<Review[]> {
this.url = this.APIBaseUrl + '/Get_Review_By_PRODUCT_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Review_By_PRODUCT_ID>(this.url, JSON.stringify(i_Params_Get_Review_By_PRODUCT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Currency(i_Currency: Currency) : Observable<Currency> {
this.url = this.APIBaseUrl + '/Edit_Currency?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Currency>(this.url, JSON.stringify(i_Currency), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Currency;}));
}
Delete_Currency(i_Params_Delete_Currency: Params_Delete_Currency) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Currency?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Currency), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Currency_By_OWNER_ID(i_Params_Get_Currency_By_OWNER_ID: Params_Get_Currency_By_OWNER_ID) : Observable<Currency[]> {
this.url = this.APIBaseUrl + '/Get_Currency_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Currency_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Currency_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Uploaded_file(i_Uploaded_file: Uploaded_file) : Observable<Uploaded_file> {
this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Uploaded_file>(this.url, JSON.stringify(i_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file;}));
}
Delete_Uploaded_file(i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
}
export class Client
{
CLIENT_ID?: number;
FULLNAME: string;
GENDER_ID?: number;
BIRTH_DATE: string;
EMAIL: string;
PASSWORD: string;
CONFIRM_PASSWORD: string;
PHONE_NUMBER?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Gender: Gender;
My_Uploaded_files: Uploaded_file[];
}
export class Gender
{
GENDER_ID?: number;
TYPE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Uploaded_file
{
UPLOADED_FILE_ID?: number;
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
SIZE?: number;
EXTENSION: string;
STAMP: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_URL: string;
}
export class Params_Delete_Client
{
CLIENT_ID?: number;
}
export class Params_Get_Client_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Authenticate
{
Username: string;
Password: string;
}
export class User
{
USER_ID?: number;
OWNER_ID?: number;
FULLNAME: string;
USERNAME: string;
PASSWORD: string;
USER_TYPE_CODE: string;
IS_ACTIVE?: boolean;
ENTRY_DATE: string;
My_Ticket: string;
}
export class Order
{
ORDER_ID?: number;
CLIENT_ID?: number;
ADDRESS: string;
TOTAL_PRICE: number;
CURRENCY_ID?: number;
STATUS_ID?: number;
IS_ORDERED?: boolean;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Client: Client;
My_Currency: Currency;
My_Status: Status;
My_Product_Cart: Product_cart[];
}
export class Params_Delete_Order
{
ORDER_ID?: number;
}
export class Params_Get_Order_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Order_By_STATUS_ID
{
STATUS_ID?: number;
}
export class Params_Get_Order_By_CLIENT_ID
{
CLIENT_ID?: number;
}
export class Product_cart
{
PRODUCT_CART_ID?: number;
ORDER_ID?: number;
PRODUCT_ID?: number;
QUANTITY?: number;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Order: Order;
My_Product: Product;
}
export class Params_Delete_Product_cart
{
PRODUCT_CART_ID?: number;
}
export class Status
{
STATUS_ID?: number;
NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Params_Delete_Status
{
STATUS_ID?: number;
}
export class Params_Get_Status_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Category
{
CATEGORY_ID?: number;
NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
}
export class Params_Delete_Category
{
CATEGORY_ID?: number;
}
export class Params_Get_Category_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Admin
{
ADMIN_ID?: number;
FULLNAME: string;
EMAIL: string;
PASSWORD: string;
CONFIRM_PASSWORD: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Params_Delete_Admin
{
ADMIN_ID?: number;
}
export class Params_Get_Admin_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Product
{
PRODUCT_ID?: number;
NAME: string;
REFERENCE_NUMBER: string;
CATEGORY_ID?: number;
RATE?: number;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Category: Category;
My_Size: Size[];
My_Color: Color[];
}
export class Params_Delete_Product
{
PRODUCT_ID?: number;
}
export class Params_Get_Product_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Product_By_CATEGORY_ID
{
CATEGORY_ID?: number;
}
export class Color
{
COLOR_ID?: number;
PRODUCT_ID?: number;
NAME: string;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Product: Product;
}
export class Params_Delete_Color
{
COLOR_ID?: number;
}
export class Params_Get_Color_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Gender_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Size
{
SIZE_ID?: number;
PRODUCT_ID?: number;
SIZE_NUMBER: number;
UNIT_ID?: number;
PRICE: number;
CURRENCY_ID?: number;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Product: Product;
My_Unit: Unit;
My_Currency: Currency;
}
export class Params_Delete_Size
{
SIZE_ID?: number;
}
export class Params_Get_Size_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Unit
{
UNIT_ID?: number;
UNIT_NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Params_Delete_Unit
{
UNIT_ID?: number;
}
export class Params_Get_Unit_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Cart
{
CART_ID?: number;
CLIENT_ID?: number;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Client: Client;
}
export class Params_Delete_Cart
{
CART_ID?: number;
}
export class Params_Get_Cart_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Cart_By_CLIENT_ID
{
CLIENT_ID?: number;
}
export class Banner
{
BANNER_ID?: number;
TITLE: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Uploaded_files: Uploaded_file[];
}
export class Params_Delete_Banner
{
BANNER_ID?: number;
}
export class Params_Get_Banner_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Review
{
REVIEW_ID?: number;
PRODUCT_ID?: number;
CLIENT_ID?: number;
DESCRIPTION: string;
RATE?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Product: Product;
My_Client: Client;
}
export class Params_Delete_Review
{
REVIEW_ID?: number;
}
export class Params_Get_Review_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Review_By_PRODUCT_ID
{
PRODUCT_ID?: number;
}
export class Currency
{
CURRENCY_ID?: number;
NAME: string;
SYMBOL: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Params_Delete_Currency
{
CURRENCY_ID?: number;
}
export class Params_Get_Currency_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Delete_Uploaded_file
{
UPLOADED_FILE_ID?: number;
}
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
{
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
}
export class Action_Result{
ExceptionMsg: string;
}
export class Result_Edit_Client extends Action_Result {
My_Client : Client;
}
export class Result_Delete_Client extends Action_Result {
My_Params_Delete_Client : Params_Delete_Client;
}
export class Result_Get_Client_By_OWNER_ID extends Action_Result {
My_Result : Client[];
My_Params_Get_Client_By_OWNER_ID : Params_Get_Client_By_OWNER_ID;
}
export class Result_Authenticate extends Action_Result {
My_Result : User;
My_Params_Authenticate : Params_Authenticate;
}
export class Result_Edit_Order extends Action_Result {
My_Order : Order;
}
export class Result_Delete_Order extends Action_Result {
My_Params_Delete_Order : Params_Delete_Order;
}
export class Result_Get_Order_By_OWNER_ID_Adv extends Action_Result {
My_Result : Order[];
My_Params_Get_Order_By_OWNER_ID : Params_Get_Order_By_OWNER_ID;
}
export class Result_Get_Order_By_STATUS_ID_Adv extends Action_Result {
My_Result : Order[];
My_Params_Get_Order_By_STATUS_ID : Params_Get_Order_By_STATUS_ID;
}
export class Result_Get_Order_By_CLIENT_ID_Adv extends Action_Result {
My_Result : Order[];
My_Params_Get_Order_By_CLIENT_ID : Params_Get_Order_By_CLIENT_ID;
}
export class Result_Edit_Product_cart extends Action_Result {
My_Product_cart : Product_cart;
}
export class Result_Delete_Product_cart extends Action_Result {
My_Params_Delete_Product_cart : Params_Delete_Product_cart;
}
export class Result_Edit_Status extends Action_Result {
My_Status : Status;
}
export class Result_Delete_Status extends Action_Result {
My_Params_Delete_Status : Params_Delete_Status;
}
export class Result_Get_Status_By_OWNER_ID extends Action_Result {
My_Result : Status[];
My_Params_Get_Status_By_OWNER_ID : Params_Get_Status_By_OWNER_ID;
}
export class Result_Edit_Category extends Action_Result {
My_Category : Category;
}
export class Result_Delete_Category extends Action_Result {
My_Params_Delete_Category : Params_Delete_Category;
}
export class Result_Get_Category_By_OWNER_ID extends Action_Result {
My_Result : Category[];
My_Params_Get_Category_By_OWNER_ID : Params_Get_Category_By_OWNER_ID;
}
export class Result_Edit_Admin extends Action_Result {
My_Admin : Admin;
}
export class Result_Delete_Admin extends Action_Result {
My_Params_Delete_Admin : Params_Delete_Admin;
}
export class Result_Get_Admin_By_OWNER_ID extends Action_Result {
My_Result : Admin[];
My_Params_Get_Admin_By_OWNER_ID : Params_Get_Admin_By_OWNER_ID;
}
export class Result_Edit_Product extends Action_Result {
My_Product : Product;
}
export class Result_Delete_Product extends Action_Result {
My_Params_Delete_Product : Params_Delete_Product;
}
export class Result_Get_Product_By_OWNER_ID_Adv extends Action_Result {
My_Result : Product[];
My_Params_Get_Product_By_OWNER_ID : Params_Get_Product_By_OWNER_ID;
}
export class Result_Get_Product_By_CATEGORY_ID_Adv extends Action_Result {
My_Result : Product[];
My_Params_Get_Product_By_CATEGORY_ID : Params_Get_Product_By_CATEGORY_ID;
}
export class Result_Edit_Color extends Action_Result {
My_Color : Color;
}
export class Result_Delete_Color extends Action_Result {
My_Params_Delete_Color : Params_Delete_Color;
}
export class Result_Get_Color_By_OWNER_ID extends Action_Result {
My_Result : Color[];
My_Params_Get_Color_By_OWNER_ID : Params_Get_Color_By_OWNER_ID;
}
export class Result_Get_Gender_By_OWNER_ID extends Action_Result {
My_Result : Gender[];
My_Params_Get_Gender_By_OWNER_ID : Params_Get_Gender_By_OWNER_ID;
}
export class Result_Edit_Size extends Action_Result {
My_Size : Size;
}
export class Result_Delete_Size extends Action_Result {
My_Params_Delete_Size : Params_Delete_Size;
}
export class Result_Get_Size_By_OWNER_ID extends Action_Result {
My_Result : Size[];
My_Params_Get_Size_By_OWNER_ID : Params_Get_Size_By_OWNER_ID;
}
export class Result_Edit_Unit extends Action_Result {
My_Unit : Unit;
}
export class Result_Delete_Unit extends Action_Result {
My_Params_Delete_Unit : Params_Delete_Unit;
}
export class Result_Get_Unit_By_OWNER_ID extends Action_Result {
My_Result : Unit[];
My_Params_Get_Unit_By_OWNER_ID : Params_Get_Unit_By_OWNER_ID;
}
export class Result_Edit_Cart extends Action_Result {
My_Cart : Cart;
}
export class Result_Delete_Cart extends Action_Result {
My_Params_Delete_Cart : Params_Delete_Cart;
}
export class Result_Get_Cart_By_OWNER_ID extends Action_Result {
My_Result : Cart[];
My_Params_Get_Cart_By_OWNER_ID : Params_Get_Cart_By_OWNER_ID;
}
export class Result_Get_Cart_By_CLIENT_ID_Adv extends Action_Result {
My_Result : Cart[];
My_Params_Get_Cart_By_CLIENT_ID : Params_Get_Cart_By_CLIENT_ID;
}
export class Result_Edit_Banner extends Action_Result {
My_Banner : Banner;
}
export class Result_Delete_Banner extends Action_Result {
My_Params_Delete_Banner : Params_Delete_Banner;
}
export class Result_Get_Banner_By_OWNER_ID extends Action_Result {
My_Result : Banner[];
My_Params_Get_Banner_By_OWNER_ID : Params_Get_Banner_By_OWNER_ID;
}
export class Result_Edit_Review extends Action_Result {
My_Review : Review;
}
export class Result_Delete_Review extends Action_Result {
My_Params_Delete_Review : Params_Delete_Review;
}
export class Result_Get_Review_By_OWNER_ID extends Action_Result {
My_Result : Review[];
My_Params_Get_Review_By_OWNER_ID : Params_Get_Review_By_OWNER_ID;
}
export class Result_Get_Review_By_PRODUCT_ID extends Action_Result {
My_Result : Review[];
My_Params_Get_Review_By_PRODUCT_ID : Params_Get_Review_By_PRODUCT_ID;
}
export class Result_Edit_Currency extends Action_Result {
My_Currency : Currency;
}
export class Result_Delete_Currency extends Action_Result {
My_Params_Delete_Currency : Params_Delete_Currency;
}
export class Result_Get_Currency_By_OWNER_ID extends Action_Result {
My_Result : Currency[];
My_Params_Get_Currency_By_OWNER_ID : Params_Get_Currency_By_OWNER_ID;
}
export class Result_Edit_Uploaded_file extends Action_Result {
My_Uploaded_file : Uploaded_file;
}
export class Result_Delete_Uploaded_file extends Action_Result {
My_Params_Delete_Uploaded_file : Params_Delete_Uploaded_file;
}
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD : Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
