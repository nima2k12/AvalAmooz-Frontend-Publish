"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_data_service_admin_admin_service_ts"],{

/***/ 94733:
/*!*****************************************************!*\
  !*** ./src/app/data/service/admin/admin.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */


let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.GetAllCashRequestsUrl = '/api/User/GetAllCashRequests';
        this.GetAllDoneCashRequestsUrl = '/api/User/GetAllDoneCashRequests';
        this.GetAllUnDoneCashRequestsUrl = '/api/User/GetAllUnDoneCashRequests';
        this.GetAllCashRequestsByFilterUrl = '/api/User/GetAllCashRequestsByFilter';
        this.GetAllSellerCashRequestsByFilterUrl = '/api/User/GetAllSellerCashRequestsByFilter';
        this.GetAllDoneCashRequestsByFilterUrl = '/api/User/GetAllDoneCashRequestsByFilter';
        this.GetAllDoneSellerCashRequestsByFilterUrl = '/api/User/GetAllDoneSellerCashRequestsByFilter';
        this.GetAllUnDoneCashRequestsByFilterUrl = '/api/User/GetAllUnDoneCashRequestsByFilter';
        this.GetAllUnDoneSellerCashRequestsByFilterUrl = '/api/User/GetAllUnDoneSellerCashRequestsByFilter';
        this.SetDoneCashRequestByIdUrl = '/api/User/SetDoneCashRequestById';
        this.SetDoneSellerCashRequestByIdUrl = '/api/User/SetDoneSellerCashRequestById';
        this.SetUnDoneCashRequestByIdUrl = '/api/User/SetUnDoneCashRequestById';
        this.SetUnDoneSellerCashRequestByIdUrl = '/api/User/SetUnDoneSellerCashRequestById';
        this.DeleteCashRequestByIdUrl = '/api/User/DeleteCashRequestById';
        this.DeleteSellerCashRequestByIdUrl = '/api/User/DeleteSellerCashRequestById';
        this.GetAllTeacherDetailsUrl = '/api/User/GetAllTeacherDetails';
        this.GetTeachersByFilterUrl = '/api/User/GetTeachersByFilter';
        this.GetSellersByFilterUrl = '/api/User/GetSellersByFilter';
        this.GetAdminTeachersCountUrl = '/api/User/GetAdminTeachersCount';
        this.GetAdminSellersCountUrl = '/api/User/GetAdminSellersCount';
        this.GetDeActiveTeacherDetailsUrl = '/api/User/GetDeActiveTeacherDetails';
        this.GetActiveTeacherDetailsUrl = '/api/User/GetActiveTeacherDetails';
        this.ActivateTeacherByIdUrl = '/api/User/ActivateTeacherById';
        this.ActivateSellerByIdUrl = '/api/User/ActivateSellerById';
        this.AdminSendEmailToUsersUrl = '/api/User/AdminSendEmailToUsers';
        this.AdminSendEmailToUserUrl = '/api/User/AdminSendEmailToUser';
        this.AdminChangeEmailUserUrl = '/api/User/AdminChangeEmailUser';
        this.ActivateTeacherEditByIdUrl = '/api/User/ActivateTeacherEditById';
        this.ActivateSellerEditByIdUrl = '/api/User/ActivateSellerEditById';
        this.EditTeacherProfileByAdminUrl = '/api/User/EditTeacherProfileByAdmin';
        this.EditSellerProfileByAdminUrl = '/api/User/EditSellerProfileByAdmin';
        this.DeActivateTeacherByIdUrl = '/api/User/DeActivateTeacherById';
        this.DeActivateSellerByIdUrl = '/api/User/DeActivateSellerById';
        this.DeActivateTeacherRestByIdUrl = '/api/User/DeActivateTeacherRestById';
        this.DeActivateSellerRestByIdUrl = '/api/User/DeActivateSellerRestById';
        this.ActivateTeacherShowByIdUrl = '/api/User/ActivateTeacherShowById';
        this.ActivateSellerShowByIdUrl = '/api/User/ActivateSellerShowById';
        this.DeActivateTeacherShowByIdUrl = '/api/User/DeActivateTeacherShowById';
        this.DeActivateSellerShowByIdUrl = '/api/User/DeActivateSellerShowById';
        this.ActivateTeacherRestByIdUrl = '/api/User/ActivateTeacherRestById';
        this.ActivateSellerRestByIdUrl = '/api/User/ActivateSellerRestById';
        this.GetUserListByFilterUrl = '/api/User/GetUserListByFilter';
        this.GetUserByIdUrl = '/api/User/GetUserById';
        this.GetUserListCountUrl = '/api/User/GetUserListCount';
    }
    GetAllCashRequests() {
        return this.http.post(this.GetAllCashRequestsUrl, { responseType: 'json' });
    }
    GetAllDoneCashRequests() {
        return this.http.post(this.GetAllDoneCashRequestsUrl, { responseType: 'json' });
    }
    GetAllUnDoneCashRequests() {
        return this.http.post(this.GetAllUnDoneCashRequestsUrl, { responseType: 'json' });
    }
    GetAllCashRequestsByFilter(model) {
        return this.http.post(this.GetAllCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetAllSellerCashRequestsByFilter(model) {
        return this.http.post(this.GetAllSellerCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetAllDoneCashRequestsByFilter(model) {
        return this.http.post(this.GetAllDoneCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetAllDoneSellerCashRequestsByFilter(model) {
        return this.http.post(this.GetAllDoneSellerCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetAllUnDoneCashRequestsByFilter(model) {
        return this.http.post(this.GetAllUnDoneCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetAllUnDoneSellerCashRequestsByFilter(model) {
        return this.http.post(this.GetAllUnDoneSellerCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    SetDoneCashRequestById(id) {
        return this.http.post(this.SetDoneCashRequestByIdUrl, id, { responseType: 'json' });
    }
    SetDoneSellerCashRequestById(id) {
        return this.http.post(this.SetDoneSellerCashRequestByIdUrl, id, { responseType: 'json' });
    }
    SetUnDoneCashRequestById(id) {
        return this.http.post(this.SetUnDoneCashRequestByIdUrl, id, { responseType: 'json' });
    }
    SetUnDoneSellerCashRequestById(id) {
        return this.http.post(this.SetUnDoneSellerCashRequestByIdUrl, id, { responseType: 'json' });
    }
    DeleteCashRequestById(id) {
        return this.http.post(this.DeleteCashRequestByIdUrl, id, { responseType: 'json' });
    }
    DeleteSellerCashRequestById(id) {
        return this.http.post(this.DeleteSellerCashRequestByIdUrl, id, { responseType: 'json' });
    }
    GetAllTeacherDetails() {
        return this.http.post(this.GetAllTeacherDetailsUrl, { responseType: 'json' });
    }
    GetTeachersByFilter(filter) {
        return this.http.post(this.GetTeachersByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellersByFilter(filter) {
        return this.http.post(this.GetSellersByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminTeachersCount() {
        return this.http.post(this.GetAdminTeachersCountUrl, null, { responseType: 'json' });
    }
    GetAdminSellersCount() {
        return this.http.post(this.GetAdminSellersCountUrl, null, { responseType: 'json' });
    }
    GetDeActiveTeacherDetails() {
        return this.http.post(this.GetDeActiveTeacherDetailsUrl, { responseType: 'json' });
    }
    GetActiveTeacherDetails() {
        return this.http.post(this.GetActiveTeacherDetailsUrl, { responseType: 'json' });
    }
    ActivateTeacherById(id) {
        return this.http.post(this.ActivateTeacherByIdUrl, id, { responseType: 'json' });
    }
    ActivateSellerById(id) {
        return this.http.post(this.ActivateSellerByIdUrl, id, { responseType: 'json' });
    }
    AdminSendEmailToUsers(model) {
        return this.http.post(this.AdminSendEmailToUsersUrl, model, { responseType: 'json' });
    }
    AdminSendEmailToUser(model) {
        return this.http.post(this.AdminSendEmailToUserUrl, model, { responseType: 'json' });
    }
    AdminChangeEmailUser(model) {
        return this.http.post(this.AdminChangeEmailUserUrl, model, { responseType: 'json' });
    }
    ActivateTeacherEditById(id) {
        return this.http.post(this.ActivateTeacherEditByIdUrl, id, { responseType: 'json' });
    }
    ActivateSellerEditById(id) {
        return this.http.post(this.ActivateSellerEditByIdUrl, id, { responseType: 'json' });
    }
    EditTeacherProfileByAdmin(model) {
        return this.http.post(this.EditTeacherProfileByAdminUrl, model, { responseType: 'json' });
    }
    EditSellerProfileByAdmin(model) {
        return this.http.post(this.EditSellerProfileByAdminUrl, model, { responseType: 'json' });
    }
    DeActivateTeacherById(id) {
        return this.http.post(this.DeActivateTeacherByIdUrl, id, { responseType: 'json' });
    }
    DeActivateSellerById(id) {
        return this.http.post(this.DeActivateSellerByIdUrl, id, { responseType: 'json' });
    }
    DeActivateTeacherRestById(id) {
        return this.http.post(this.DeActivateTeacherRestByIdUrl, id, { responseType: 'json' });
    }
    DeActivateSellerRestById(id) {
        return this.http.post(this.DeActivateSellerRestByIdUrl, id, { responseType: 'json' });
    }
    ActivateTeacherShowById(id) {
        return this.http.post(this.ActivateTeacherShowByIdUrl, id, { responseType: 'json' });
    }
    ActivateSellerShowById(id) {
        return this.http.post(this.ActivateSellerShowByIdUrl, id, { responseType: 'json' });
    }
    DeActivateTeacherShowById(id) {
        return this.http.post(this.DeActivateTeacherShowByIdUrl, id, { responseType: 'json' });
    }
    DeActivateSellerShowById(id) {
        return this.http.post(this.DeActivateSellerShowByIdUrl, id, { responseType: 'json' });
    }
    ActivateTeacherRestById(id) {
        return this.http.post(this.ActivateTeacherRestByIdUrl, id, { responseType: 'json' });
    }
    ActivateSellerRestById(id) {
        return this.http.post(this.ActivateSellerRestByIdUrl, id, { responseType: 'json' });
    }
    GetUserById(id) {
        return this.http.post(this.GetUserByIdUrl, id, { responseType: 'json' });
    }
    GetUserListByFilter(model) {
        return this.http.post(this.GetUserListByFilterUrl, model, { responseType: 'json' });
    }
    GetUserListCount() {
        return this.http.post(this.GetUserListCountUrl, { responseType: 'json' });
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AdminService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AdminService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_data_service_admin_admin_service_ts.js.map