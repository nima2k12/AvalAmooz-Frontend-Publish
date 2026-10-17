"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_data_model_order_CartModel_ts"],{

/***/ 47968:
/*!***********************************************!*\
  !*** ./src/app/data/model/order/CartModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminFilterCartHistory": () => (/* binding */ AdminFilterCartHistory),
/* harmony export */   "AdminFilterExamPayHistory": () => (/* binding */ AdminFilterExamPayHistory),
/* harmony export */   "AdminFilterPayHistory": () => (/* binding */ AdminFilterPayHistory),
/* harmony export */   "AdminFilterWalletChargeHistory": () => (/* binding */ AdminFilterWalletChargeHistory),
/* harmony export */   "CallPayModel": () => (/* binding */ CallPayModel),
/* harmony export */   "CallViewModel": () => (/* binding */ CallViewModel),
/* harmony export */   "CartFilterModel": () => (/* binding */ CartFilterModel),
/* harmony export */   "CartHistoryDetailModel": () => (/* binding */ CartHistoryDetailModel),
/* harmony export */   "CartHistoryFilter": () => (/* binding */ CartHistoryFilter),
/* harmony export */   "CartHistoryModel": () => (/* binding */ CartHistoryModel),
/* harmony export */   "CartHistoryViewModel": () => (/* binding */ CartHistoryViewModel),
/* harmony export */   "CartModel": () => (/* binding */ CartModel),
/* harmony export */   "CartPayViewModel": () => (/* binding */ CartPayViewModel),
/* harmony export */   "CartUsedOffCodeViewModel": () => (/* binding */ CartUsedOffCodeViewModel),
/* harmony export */   "ExamPayHistoryFilter": () => (/* binding */ ExamPayHistoryFilter),
/* harmony export */   "ExamPayHistoryViewModel": () => (/* binding */ ExamPayHistoryViewModel),
/* harmony export */   "FilterCartHistory": () => (/* binding */ FilterCartHistory),
/* harmony export */   "FilterPasswordHistory": () => (/* binding */ FilterPasswordHistory),
/* harmony export */   "FilterPayHistory": () => (/* binding */ FilterPayHistory),
/* harmony export */   "FilterPointHistory": () => (/* binding */ FilterPointHistory),
/* harmony export */   "FilterWalletChargeHistory": () => (/* binding */ FilterWalletChargeHistory),
/* harmony export */   "LimitProductCartViewModel": () => (/* binding */ LimitProductCartViewModel),
/* harmony export */   "OnlinePaymentModel": () => (/* binding */ OnlinePaymentModel),
/* harmony export */   "PasswordHistories": () => (/* binding */ PasswordHistories),
/* harmony export */   "PayAgainViewModel": () => (/* binding */ PayAgainViewModel),
/* harmony export */   "PayHistoryViewModel": () => (/* binding */ PayHistoryViewModel),
/* harmony export */   "PaymentHistoryViewModel": () => (/* binding */ PaymentHistoryViewModel),
/* harmony export */   "ProductCartHistoryDetailModel": () => (/* binding */ ProductCartHistoryDetailModel),
/* harmony export */   "ProductCartHistoryFilter": () => (/* binding */ ProductCartHistoryFilter),
/* harmony export */   "ProductCartHistoryModel": () => (/* binding */ ProductCartHistoryModel),
/* harmony export */   "WalletChangeModel": () => (/* binding */ WalletChangeModel),
/* harmony export */   "WalletChargeHistoryViewModel": () => (/* binding */ WalletChargeHistoryViewModel)
/* harmony export */ });
class WalletChangeModel {
    constructor(id, cash) {
        this.id = id;
        this.cash = cash;
    }
}
class LimitProductCartViewModel {
    constructor(url, payPrice, statusCode, isSuccess, productCartViewModels) {
        this.url = url;
        this.payPrice = payPrice;
        this.statusCode = statusCode;
        this.isSuccess = isSuccess;
        this.productCartViewModels = productCartViewModels;
    }
}
class CartModel {
}
class OnlinePaymentModel {
    constructor(id, tid, status, authority) {
        this.id = id;
        this.tid = tid;
        this.status = status;
        this.authority = authority;
    }
}
class CartUsedOffCodeViewModel {
    constructor(id, offCodeId, offPercent, offPrice, isCourse, isProduct, offCode, createDate, lastUpdateDate) {
        this.id = id;
        this.offCodeId = offCodeId;
        this.offPercent = offPercent;
        this.offPrice = offPrice;
        this.isCourse = isCourse;
        this.isProduct = isProduct;
        this.offCode = offCode;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class CartPayViewModel {
    constructor(addressId, cartId) {
        this.addressId = addressId;
        this.cartId = cartId;
    }
}
class CartFilterModel {
    constructor(isFiltered, pageId, takeEntity, title, sortId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 12;
        }
        this.pageId = pageId ? +pageId : 1;
        this.isFiltered = isFiltered;
        this.title = title ? title : null;
        if (isFiltered) {
            this.sortId = sortId ? +sortId : 0;
        }
    }
}
class CartHistoryViewModel {
    constructor(id, buyerUserId, isPay, courseCart, productCart, cartUsedOffCode, payHistory, createDate, lastUpdateDate) {
        this.id = id;
        this.buyerUserId = buyerUserId;
        this.isPay = isPay;
        this.courseCart = courseCart;
        this.productCart = productCart;
        this.cartUsedOffCode = cartUsedOffCode;
        this.payHistory = payHistory;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class PaymentHistoryViewModel {
    constructor(cartId) {
        this.cartId = cartId;
    }
}
class CartHistoryFilter {
    constructor(courseId, pageId, takeEntity, searchId, search) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 12;
        }
        this.searchId = searchId ? +searchId : 1;
        this.search = search ? search : '';
        this.pageId = pageId ? +pageId : 1;
        this.courseId = courseId;
    }
}
class CartHistoryModel {
    constructor(id, courseId, courseName, name, family, createDate) {
        this.id = id;
        this.courseId = courseId;
        this.courseName = courseName;
        this.name = name;
        this.family = family;
        this.createDate = createDate;
    }
}
class ProductCartHistoryFilter {
    constructor(productId, pageId, takeEntity, searchId, search) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 12;
        }
        this.searchId = searchId ? +searchId : 1;
        this.search = search ? search : '';
        this.pageId = pageId ? +pageId : 1;
        this.productId = productId;
    }
}
class ProductCartHistoryModel {
    constructor(id, productId, productName, name, family, createDate) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.name = name;
        this.family = family;
        this.createDate = createDate;
    }
}
class AdminFilterWalletChargeHistory {
    constructor(userId, searchText, pageId, takeEntity, sortId, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.sortId = sortId ? +sortId : 0;
        this.searchId = searchId ? +searchId : 0;
        this.searchText = searchText ? searchText : '';
        this.userId = userId;
    }
}
class AdminFilterExamPayHistory {
    constructor(userId, searchText, pageId, takeEntity, sortId, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.sortId = sortId ? +sortId : 0;
        this.searchId = searchId ? +searchId : 0;
        this.searchText = searchText ? searchText : '';
        this.userId = userId;
    }
}
class FilterWalletChargeHistory {
    constructor(pageId, takeEntity, walletChargeHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.walletChargeHistories = walletChargeHistories;
    }
}
class ExamPayHistoryFilter {
    constructor(pageId, takeEntity, examPayHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.examPayHistories = examPayHistories;
    }
}
class FilterPointHistory {
    constructor(pageId, takeEntity, pointHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.pointHistories = pointHistories;
    }
}
class FilterPasswordHistory {
    constructor(pageId, takeEntity, passHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.passHistories = passHistories;
    }
}
class FilterPayHistory {
    constructor(pageId, takeEntity, payHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.payHistories = payHistories;
    }
}
class FilterCartHistory {
    constructor(pageId, takeEntity, cartHistories) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.cartHistories = cartHistories;
    }
}
class AdminFilterPayHistory {
    constructor(userId, searchText, pageId, takeEntity, sortId, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.sortId = sortId ? +sortId : 0;
        this.searchId = searchId ? +searchId : 0;
        this.searchText = searchText ? searchText : '';
        this.userId = userId;
    }
}
class AdminFilterCartHistory {
    constructor(userId, searchText, pageId, takeEntity, sortId, searchId) {
        if (+takeEntity > 36) {
            this.takeEntity = 36;
        }
        else if (+takeEntity < 1) {
            this.takeEntity = 1;
        }
        else {
            this.takeEntity = takeEntity ? +takeEntity : 6;
        }
        this.pageId = pageId ? +pageId : 1;
        this.sortId = sortId ? +sortId : 0;
        this.searchId = searchId ? +searchId : 0;
        this.searchText = searchText ? searchText : '';
        this.userId = userId;
    }
}
class WalletChargeHistoryViewModel {
    constructor(id, isSuccess, isDelete, price, createDate, lastUpdateDate) {
        this.id = id;
        this.isSuccess = isSuccess;
        this.isDelete = isDelete;
        this.price = price;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class ExamPayHistoryViewModel {
    constructor(id, isSuccess, isDelete, price, createDate, lastUpdateDate) {
        this.id = id;
        this.isSuccess = isSuccess;
        this.isDelete = isDelete;
        this.price = price;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class PayAgainViewModel {
    constructor(id, isPay, isDelete, price, createDate, lastUpdateDate, description, buyerUserId, productCartId) {
        this.id = id;
        this.isPay = isPay;
        this.buyerUserId = buyerUserId;
        this.productCartId = productCartId;
        this.description = description;
        this.isDelete = isDelete;
        this.price = price;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class PayHistoryViewModel {
    constructor(id, isSuccess, isDelete, price, createDate, lastUpdateDate) {
        this.id = id;
        this.isSuccess = isSuccess;
        this.isDelete = isDelete;
        this.price = price;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class PasswordHistories {
    constructor(id, isDelete, password, createDate, lastUpdateDate) {
        this.id = id;
        this.password = password;
        this.isDelete = isDelete;
        this.createDate = createDate;
        this.lastUpdateDate = lastUpdateDate;
    }
}
class CartHistoryDetailModel {
    constructor(id, courseId, courseName, name, family, createDate, cartId, buyerUserId, email, phoneNumber, price, offPrice, offCode, offCodePercent) {
        this.id = id;
        this.courseId = courseId;
        this.courseName = courseName;
        this.name = name;
        this.family = family;
        this.createDate = createDate;
        this.cartId = cartId;
        this.buyerUserId = buyerUserId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.price = price;
        this.offPrice = offPrice;
        this.offCode = offCode;
        this.offCodePercent = offCodePercent;
    }
}
class ProductCartHistoryDetailModel {
    constructor(id, productId, productName, name, family, createDate, cartId, buyerUserId, email, phoneNumber, price, offPrice, offCode, offCodePercent) {
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.name = name;
        this.family = family;
        this.createDate = createDate;
        this.cartId = cartId;
        this.buyerUserId = buyerUserId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.price = price;
        this.offPrice = offPrice;
        this.offCode = offCode;
        this.offCodePercent = offCodePercent;
    }
}
class CallPayModel {
    constructor(id, timeId, dateId, title, description) {
        this.id = id;
        this.timeId = timeId;
        this.dateId = dateId;
        this.title = title;
        this.description = description;
    }
}
class CallViewModel {
    constructor(id, timeId, dateId, title, description) {
        this.id = id;
        this.timeId = timeId;
        this.dateId = dateId;
        this.title = title;
        this.description = description;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_data_model_order_CartModel_ts.js.map