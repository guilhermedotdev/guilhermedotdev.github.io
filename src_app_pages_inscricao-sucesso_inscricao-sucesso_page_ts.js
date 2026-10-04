"use strict";
(self["webpackChunkpremia_frontend"] = self["webpackChunkpremia_frontend"] || []).push([["src_app_pages_inscricao-sucesso_inscricao-sucesso_page_ts"],{

/***/ 2121:
/*!*******************************************************************!*\
  !*** ./src/app/pages/inscricao-sucesso/inscricao-sucesso.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InscricaoSucessoPageComponent: () => (/* binding */ InscricaoSucessoPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function InscricaoSucessoPageComponent_strong_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.votacao, " ");
  }
}
class InscricaoSucessoPageComponent {
  constructor(route) {
    this.route = route;
    this.votacao = '';
    this.votacao = this.route.snapshot.queryParamMap.get('votacao') ?? '';
  }
  static {
    this.ɵfac = function InscricaoSucessoPageComponent_Factory(t) {
      return new (t || InscricaoSucessoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InscricaoSucessoPageComponent,
      selectors: [["app-inscricao-sucesso"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 1,
      consts: [[1, "success-shell"], [1, "success-card"], [1, "success-icon"], [1, "success-badge"], [1, "success-text"], [4, "ngIf"], [1, "success-subtext"], ["routerLink", "/", 1, "primary-button"]],
      template: function InscricaoSucessoPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2713 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " PMI-DF \u2022 Pr\u00EAmio Candango ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cadastro realizado com sucesso ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sua inscri\u00E7\u00E3o foi enviada corretamente para a vota\u00E7\u00E3o ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InscricaoSucessoPageComponent_strong_10_Template, 2, 1, "strong", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " As informa\u00E7\u00F5es ser\u00E3o analisadas pela equipe organizadora do pr\u00EAmio. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Voltar ao in\u00EDcio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.votacao);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: radial-gradient(circle at top, rgba(0, 92, 175, 0.12), transparent 34%), linear-gradient(180deg, #f6f9fc 0%, #eef4f8 100%);\n  font-family: Inter, Arial, sans-serif;\n}\n\n.success-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n\n.success-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 720px;\n  background: #fff;\n  border-radius: 32px;\n  padding: 56px;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(15, 35, 55, 0.08);\n  border: 1px solid rgba(0, 92, 175, 0.08);\n}\n\n.success-icon[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 24px;\n  border-radius: 50%;\n  background: linear-gradient(180deg, #10b981 0%, #059669 100%);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 42px;\n  font-weight: 800;\n}\n\n.success-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(0, 92, 175, 0.08);\n  color: #005caf;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: clamp(34px, 5vw, 52px);\n  line-height: 1.1;\n  color: #123b66;\n}\n\n.success-text[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  font-size: 20px;\n  line-height: 1.7;\n  color: #35506c;\n}\n\n.success-subtext[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #64809c;\n  line-height: 1.7;\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 28px;\n  border-radius: 16px;\n  text-decoration: none;\n  background: linear-gradient(90deg, #005caf 0%, #0e7ad1 100%);\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 10px 20px rgba(0, 92, 175, 0.18);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW5zY3JpY2FvLXN1Y2Vzc28vaW5zY3JpY2FvLXN1Y2Vzc28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBRUEsc0lBQ0k7RUFPSixxQ0FBQTtBQVBKOztBQVVBO0VBQ0ksaUJBQUE7RUFFQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7QUFWSjs7QUFhQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBRUEsa0JBQUE7RUFFQSw4Q0FDSTtFQUVKLHdDQUNJO0FBbkJSOztBQXNCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLDZEQUNJO0VBSUosV0FBQTtFQUVBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0FBOUJKOztBQWlDQTtFQUVJLG9CQUFBO0VBRUEsaUJBQUE7RUFFQSxvQkFBQTtFQUVBLGtDQUNJO0VBRUosY0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBRUEsc0JBQUE7QUF2Q0o7O0FBMENBO0VBRUksZ0JBQUE7RUFFQSxpQ0FBQTtFQUVBLGdCQUFBO0VBRUEsY0FBQTtBQTNDSjs7QUE4Q0E7RUFFSSxnQkFBQTtFQUVBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLGNBQUE7QUEvQ0o7O0FBa0RBO0VBRUksZ0JBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFsREo7O0FBcURBO0VBRUksZ0JBQUE7RUFFQSxvQkFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEscUJBQUE7RUFFQSw0REFDSTtFQUlKLFdBQUE7RUFFQSxnQkFBQTtFQUVBLDhDQUNJO0FBaEVSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDkyLCAxNzUsIDAuMTIpLFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAzNCUpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICAgICAgICNmNmY5ZmMgMCUsXHJcbiAgICAgICAgICAgICNlZWY0ZjggMTAwJSk7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN1Y2Nlc3Mtc2hlbGwge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtY2FyZCB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuXHJcbiAgICBwYWRkaW5nOiA1NnB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgICAgIDAgMjBweCA2MHB4IHJnYmEoMTUsIDM1LCA1NSwgMC4wOCk7XHJcblxyXG4gICAgYm9yZGVyOlxyXG4gICAgICAgIDFweCBzb2xpZCByZ2JhKDAsIDkyLCAxNzUsIDAuMDgpO1xyXG59XHJcblxyXG4uc3VjY2Vzcy1pY29uIHtcclxuXHJcbiAgICB3aWR0aDogOTZweDtcclxuICAgIGhlaWdodDogOTZweDtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0byAyNHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICAgICAgICMxMGI5ODEgMCUsXHJcbiAgICAgICAgICAgICMwNTk2NjkgMTAwJSk7XHJcblxyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtYmFkZ2Uge1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgcmdiYSgwLCA5MiwgMTc1LCAwLjA4KTtcclxuXHJcbiAgICBjb2xvcjogIzAwNWNhZjtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wOGVtO1xyXG59XHJcblxyXG5oMSB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICBmb250LXNpemU6IGNsYW1wKDM0cHgsIDV2dywgNTJweCk7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgICBjb2xvcjogIzEyM2I2NjtcclxufVxyXG5cclxuLnN1Y2Nlc3MtdGV4dCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuXHJcbiAgICBjb2xvcjogIzM1NTA2YztcclxufVxyXG5cclxuLnN1Y2Nlc3Mtc3VidGV4dCB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuXHJcbiAgICBjb2xvcjogIzY0ODA5YztcclxuXHJcbiAgICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4ucHJpbWFyeS1idXR0b24ge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmc6IDE0cHggMjhweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZyxcclxuICAgICAgICAgICAgIzAwNWNhZiAwJSxcclxuICAgICAgICAgICAgIzBlN2FkMSAxMDAlKTtcclxuXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCAxMHB4IDIwcHggcmdiYSgwLCA5MiwgMTc1LCAwLjE4KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inscricao-sucesso_inscricao-sucesso_page_ts.js.map