"use strict";
(self["webpackChunkpremia_frontend"] = self["webpackChunkpremia_frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pt */ 8581);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _core_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/http-error.interceptor */ 2288);
/* harmony import */ var _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.interceptor */ 4689);








(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__["default"], 'pt-BR');
const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID,
    useValue: 'pt-BR'
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptors)([_core_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.authInterceptor, _core_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__.apiErrorInterceptor]))]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5047);
/* harmony import */ var _pages_categorias_categorias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/categorias/categorias.page */ 5087);
/* harmony import */ var _pages_anos_anos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/anos/anos.page */ 1817);
/* harmony import */ var _pages_termos_termos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/termos/termos.page */ 1339);
/* harmony import */ var _pages_candidatos_candidatos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/candidatos/candidatos.page */ 9591);
/* harmony import */ var _pages_votacoes_votacoes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/votacoes/votacoes.page */ 719);
/* harmony import */ var _pages_votacoes_candidatos_votacoes_candidatos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/votacoes-candidatos/votacoes-candidatos.page */ 6557);
/* harmony import */ var _pages_voto_voto_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/voto/voto.page */ 291);
/* harmony import */ var _pages_apuracoes_apuracoes_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/apuracoes/apuracoes.page */ 1105);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.component */ 5438);
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/auth.guard */ 5227);











const routes = [{
  path: 'inscricao/sucesso',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_inscricao-sucesso_inscricao-sucesso_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inscricao-sucesso/inscricao-sucesso.page */ 2121)).then(m => m.InscricaoSucessoPageComponent)
}, {
  path: 'inscricao/:id',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_candidatos-public_candidatos-public_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/candidatos-public/candidatos-public.page */ 6021)).then(m => m.CandidatosPublicPageComponent)
}, {
  path: 'votacao/publico/:id',
  data: {
    publicoAlvo: 'PUBLICO'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_visualizar-votacao_visualizar-votacao_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/visualizar-votacao/visualizar-votacao.component */ 3353)).then(m => m.VisualizarVotacaoComponent)
}, {
  path: 'votacao/avaliador/:id',
  data: {
    publicoAlvo: 'AVALIADOR'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_visualizar-votacao_visualizar-votacao_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/visualizar-votacao/visualizar-votacao.component */ 3353)).then(m => m.VisualizarVotacaoComponent)
}, {
  path: 'votacao',
  data: {
    publicoAlvo: 'PUBLICO'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_visualizar-votacao_visualizar-votacao_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/visualizar-votacao/visualizar-votacao.component */ 3353)).then(m => m.VisualizarVotacaoComponent)
}, {
  path: 'votacao/:id',
  data: {
    publicoAlvo: 'PUBLICO'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_visualizar-votacao_visualizar-votacao_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/visualizar-votacao/visualizar-votacao.component */ 3353)).then(m => m.VisualizarVotacaoComponent)
}, {
  path: 'login',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.page */ 413)).then(m => m.LoginPageComponent)
}, {
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__.LayoutComponent,
  canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_10__.authGuard],
  children: [{
    path: '',
    component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }, {
    path: 'categorias',
    component: _pages_categorias_categorias_page__WEBPACK_IMPORTED_MODULE_1__.CategoriasPageComponent
  }, {
    path: 'anos',
    component: _pages_anos_anos_page__WEBPACK_IMPORTED_MODULE_2__.AnosPageComponent
  }, {
    path: 'termos',
    component: _pages_termos_termos_page__WEBPACK_IMPORTED_MODULE_3__.TermosPageComponent
  }, {
    path: 'candidatos',
    component: _pages_candidatos_candidatos_page__WEBPACK_IMPORTED_MODULE_4__.CandidatosPageComponent
  }, {
    path: 'votacoes',
    component: _pages_votacoes_votacoes_page__WEBPACK_IMPORTED_MODULE_5__.VotacoesPageComponent
  }, {
    path: 'votacoes-candidatos',
    component: _pages_votacoes_candidatos_votacoes_candidatos_page__WEBPACK_IMPORTED_MODULE_6__.VotacoesCandidatosPageComponent
  }, {
    path: 'voto',
    component: _pages_voto_voto_page__WEBPACK_IMPORTED_MODULE_7__.VotoPageComponent
  }, {
    path: 'apuracoes',
    component: _pages_apuracoes_apuracoes_page__WEBPACK_IMPORTED_MODULE_8__.ApuracoesPageComponent
  }]
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 8669:
/*!******************************************!*\
  !*** ./src/app/core/api-base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiBaseService: () => (/* binding */ ApiBaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);



class ApiBaseService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
}

/***/ }),

/***/ 5227:
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7545);



const authGuard = () => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};

/***/ }),

/***/ 4689:
/*!******************************************!*\
  !*** ./src/app/core/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
const publicEndpoints = ['/auth/login', '/auth/votante'];
const authInterceptor = (req, next) => {
  const isPublic = publicEndpoints.some(endpoint => req.url.includes(endpoint));
  if (isPublic || req.headers.has('Authorization')) {
    return next(req);
  }
  const adminToken = localStorage.getItem('auth_token');
  const votanteToken = localStorage.getItem('votante_token');
  const token = req.url.includes('/voto/') ? votanteToken || adminToken : adminToken;
  if (!token) {
    return next(req);
  }
  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(cloned);
};

/***/ }),

/***/ 7545:
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AuthService {
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp < now) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  }
  getToken() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return null;
    }
    try {
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp < now) {
        this.logout();
        return null;
      }
      return token;
    } catch {
      this.logout();
      return null;
    }
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('usuario');
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2288:
/*!************************************************!*\
  !*** ./src/app/core/http-error.interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiErrorInterceptor: () => (/* binding */ apiErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);


const apiErrorInterceptor = (req, next) => {
  return next(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
    const message = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? `${error.status} - ${error.error?.message ?? error.message}` : 'Erro inesperado na requisição';
    console.error('[API ERROR]', message, error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
  }));
};

/***/ }),

/***/ 5438:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = () => ({
  exact: true
});
class LayoutComponent {
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 28,
      vars: 2,
      consts: [[1, "nav"], [1, "nav-inner"], [1, "badge"], [1, "small", "muted", 2, "margin-top", ".4rem"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/categorias", "routerLinkActive", "active"], ["routerLink", "/anos", "routerLinkActive", "active"], ["routerLink", "/termos", "routerLinkActive", "active"], ["routerLink", "/candidatos", "routerLinkActive", "active"], ["routerLink", "/votacoes", "routerLinkActive", "active"], ["routerLink", "/votacoes-candidatos", "routerLinkActive", "active"], ["routerLink", "/voto", "routerLinkActive", "active"], ["routerLink", "/apuracoes", "routerLinkActive", "active"], [1, "container"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PMI-DF Premia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Frontend Angular para as APIs do projeto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In\u00EDcio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Categorias");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Anos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Termos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vota\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vota\u00E7\u00F5es x Candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Voto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Apura\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "main", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n\n.app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  background: #020817;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  background: #020817;\n  color: #cbd5e1;\n}\n\n.brand[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.15);\n  color: #7dd3fc;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n\n.brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  text-decoration: none;\n  padding: 12px 14px;\n  border-radius: 14px;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n\n.menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.18);\n  color: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-width: 0;\n  background: #0f172a;\n  padding: 0;\n}\n\n@media (max-width: 900px) {\n  .app-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7RUFFQTtJQUNFLGVBQUE7SUFDQSxrREFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hcHAtc2hlbGwge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XHJcbiAgYmFja2dyb3VuZDogIzAyMDgxNztcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIHBhZGRpbmc6IDI0cHggMjBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gIGJhY2tncm91bmQ6ICMwMjA4MTc7XHJcbiAgY29sb3I6ICNjYmQ1ZTE7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiA4cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xNSk7XHJcbiAgY29sb3I6ICM3ZGQzZmM7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnJhbmQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUgYSB7XHJcbiAgY29sb3I6ICNjYmQ1ZTE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZW51IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC4xOCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuYXBwLXNoZWxsIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1817:
/*!*****************************************!*\
  !*** ./src/app/pages/anos/anos.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnosPageComponent: () => (/* binding */ AnosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_anos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/anos.service */ 9267);





const _forTrack0 = ($index, $item) => $item.id;
function AnosPageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function AnosPageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function AnosPageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AnosPageComponent_Conditional_26_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.descricao);
  }
}
function AnosPageComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 13)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](8, AnosPageComponent_Conditional_26_For_9_Template, 5, 2, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.items);
  }
}
class AnosPageComponent {
  constructor(fb, service) {
    this.fb = fb;
    this.service = service;
    this.items = [];
    this.loading = false;
    this.saving = false;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Falha ao carregar anos.';
      }
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.service.create(this.form.getRawValue()).subscribe({
      next: () => {
        this.saving = false;
        this.message = 'Ano cadastrado.';
        this.form.reset({
          descricao: ''
        });
        this.load();
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao cadastrar ano.';
      }
    });
  }
  static {
    this.ɵfac = function AnosPageComponent_Factory(t) {
      return new (t || AnosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_anos_service__WEBPACK_IMPORTED_MODULE_0__.AnosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AnosPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 27,
      vars: 6,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "secondary", 3, "click", "disabled"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], ["placeholder", "2026", 3, "formControl"], [1, "form-actions"], [3, "click", "disabled"], [1, "alert", "success"], [1, "alert", "error"], [1, "muted"], [1, "table"]],
      template: function AnosPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Anos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cadastro simples");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnosPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Recarregar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "section", 5)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Novo ano");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div")(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Descri\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnosPageComponent_Template_button_click_18_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AnosPageComponent_Conditional_20_Template, 2, 1, "div", 10)(21, AnosPageComponent_Conditional_21_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 5)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AnosPageComponent_Conditional_25_Template, 2, 0, "p", 12)(26, AnosPageComponent_Conditional_26_Template, 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.descricao);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](20, ctx.message ? 20 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](21, ctx.error ? 21 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](25, ctx.loading ? 25 : 26);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1105:
/*!***************************************************!*\
  !*** ./src/app/pages/apuracoes/apuracoes.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApuracoesPageComponent: () => (/* binding */ ApuracoesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_apuracoes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/apuracoes.service */ 4385);
/* harmony import */ var _services_votacoes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/votacoes.service */ 796);







const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.votacaoCandidatoId;
function ApuracoesPageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Todas as vota\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", null);
  }
}
function ApuracoesPageComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const votacao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", votacao_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", votacao_r1.nome, "", votacao_r1.anoDescricao ? " \u2014 " + votacao_r1.anoDescricao : "", " ");
  }
}
function ApuracoesPageComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApuracoesPageComponent_Conditional_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Limpar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ApuracoesPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function ApuracoesPageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Carregando apura\u00E7\u00E3o...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Buscando os resultados consolidados da vota\u00E7\u00E3o.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ApuracoesPageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nenhuma apura\u00E7\u00E3o encontrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " A vota\u00E7\u00E3o selecionada ainda n\u00E3o possui resultado dispon\u00EDvel ou n\u00E3o recebeu votos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nenhum candidato corresponde \u00E0 busca informada. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_6_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.hideBrokenImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.fotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "Foto de " + item_r5.candidatoNome);
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.categoria, " ");
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pontua\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, item_r5.pontuacaoApuracao, "1.2-2", "pt-BR"));
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Percentual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, item_r5.percentual || 0, "1.2-2", "pt-BR"), "%");
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 42)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_6_Template, 1, 2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 44)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_14_Template, 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_16_Template, 5, 5)(17, ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Conditional_17_Template, 5, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 50)(21, "span")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " votos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("first-place", item_r5.posicao === 1)("second-place", item_r5.posicao === 2)("third-place", item_r5.posicao === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Posi\u00E7\u00E3o " + item_r5.posicao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.posicao, "\u00BA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.initials(item_r5.candidatoNome));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](6, item_r5.fotoUrl ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.candidatoNome || "Candidato sem nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.nomeProjeto || "Projeto n\u00E3o informado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.empresa || "Empresa n\u00E3o informada", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, item_r5.categoria ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](16, item_r5.pontuacaoApuracao !== null ? 16 : 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", item_r5.percentual || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](24, 19, item_r5.totalVotosCandidato || 0, "1.0-0", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](28, 23, item_r5.percentual || 0, "1.2-2", "pt-BR"), "%");
  }
}
function ApuracoesPageComponent_Conditional_31_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, ApuracoesPageComponent_Conditional_31_Conditional_41_For_2_Template, 29, 27, "article", 39, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.filteredItems);
  }
}
function ApuracoesPageComponent_Conditional_31_For_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td")(23, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("top-three", (item_r6.posicao || 0) <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.posicao, "\u00BA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.candidatoNome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.nomeProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](12, 10, item_r6.totalVotosCandidato || 0, "1.0-0", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](15, 14, item_r6.percentual || 0, "1.2-2", "pt-BR"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](18, 18, item_r6.pontuacaoTotal, "1.2-4", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](21, 22, item_r6.mediaPonderada, "1.2-2", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](25, 26, item_r6.pontuacaoApuracao, "1.2-2", "pt-BR"), " ");
  }
}
function ApuracoesPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 24)(1, "article", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total de votos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Votos contabilizados na vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "article", 25)(10, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Candidatos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Participantes classificados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "article", 27)(17, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Primeiro colocado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "article", 25)(24, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "M\u00E9dia da apura\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "M\u00E9dia entre as pontua\u00E7\u00F5es finais");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "section", 29)(32, "div", 30)(33, "div")(34, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Classifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Ranking da vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ApuracoesPageComponent_Conditional_31_Conditional_40_Template, 2, 0, "div", 33)(41, ApuracoesPageComponent_Conditional_31_Conditional_41_Template, 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "section", 34)(43, "div", 35)(44, "div")(45, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Dados consolidados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Detalhamento da apura\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 36)(50, "table", 37)(51, "thead")(52, "tr")(53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Posi\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Candidato");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Votos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Percentual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Pontua\u00E7\u00E3o total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "M\u00E9dia ponderada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Pontua\u00E7\u00E3o final");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](68, ApuracoesPageComponent_Conditional_31_For_69_Template, 26, 30, "tr", null, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 8, ctx_r2.totalVotos, "1.0-0", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.totalCandidatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.vencedor == null ? null : ctx_r2.vencedor.candidatoNome) || "N\u00E3o definido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.vencedor == null ? null : ctx_r2.vencedor.nomeProjeto) || "Resultado em processamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](28, 12, ctx_r2.mediaPontuacao, "1.2-2", "pt-BR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.filteredItems.length, " ", ctx_r2.filteredItems.length === 1 ? "resultado" : "resultados", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](40, ctx_r2.filteredItems.length === 0 ? 40 : 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.filteredItems);
  }
}
class ApuracoesPageComponent {
  constructor(apuracoesService, votacoesService) {
    this.apuracoesService = apuracoesService;
    this.votacoesService = votacoesService;
    this.items = [];
    this.votacoes = [];
    this.selectedVotacaoId = null;
    this.searchTerm = '';
    this.loading = false;
    this.loadingVotacoes = false;
    this.error = '';
  }
  ngOnInit() {
    this.loadVotacoes();
  }
  get filteredItems() {
    const term = this.normalize(this.searchTerm);
    if (!term) {
      return this.items;
    }
    return this.items.filter(item => {
      const content = [item.candidatoNome, item.nomeProjeto, item.empresa, item.categoria, item.ano].filter(Boolean).join(' ');
      return this.normalize(content).includes(term);
    });
  }
  get vencedor() {
    return this.items.find(item => Number(item.posicao) === 1) ?? null;
  }
  get totalVotos() {
    return this.items.reduce((maior, item) => Math.max(maior, Number(item.totalVotosVotacao ?? 0)), 0);
  }
  get totalCandidatos() {
    return this.items.length;
  }
  get mediaPontuacao() {
    const valores = this.items.map(item => item.pontuacaoApuracao).filter(valor => valor !== null && valor !== undefined);
    if (!valores.length) {
      return 0;
    }
    return valores.reduce((total, valor) => total + Number(valor), 0) / valores.length;
  }
  get votacaoSelecionada() {
    return this.votacoes.find(votacao => votacao.id === this.selectedVotacaoId);
  }
  loadVotacoes() {
    this.loadingVotacoes = true;
    this.error = '';
    this.votacoesService.list().subscribe({
      next: response => {
        this.votacoes = [...(response ?? [])].sort((a, b) => Number(b.id ?? 0) - Number(a.id ?? 0));
        this.loadingVotacoes = false;
        if (this.votacoes.length > 0) {
          this.selectedVotacaoId = this.votacoes[0].id ?? null;
        }
        this.load();
      },
      error: () => {
        this.loadingVotacoes = false;
        this.load();
      }
    });
  }
  load() {
    this.loading = true;
    this.error = '';
    this.apuracoesService.list(this.selectedVotacaoId ?? undefined).subscribe({
      next: response => {
        this.items = [...(response ?? [])].sort((a, b) => {
          const posicaoA = Number(a.posicao ?? Number.MAX_SAFE_INTEGER);
          const posicaoB = Number(b.posicao ?? Number.MAX_SAFE_INTEGER);
          return posicaoA - posicaoB;
        });
        this.loading = false;
      },
      error: () => {
        this.items = [];
        this.loading = false;
        this.error = 'Não foi possível carregar a apuração desta votação.';
      }
    });
  }
  onVotacaoChange(votacaoId) {
    this.selectedVotacaoId = votacaoId;
    this.searchTerm = '';
    this.load();
  }
  clearSearch() {
    this.searchTerm = '';
  }
  exportCsv() {
    const rows = this.filteredItems;
    if (!rows.length) {
      return;
    }
    const header = ['Posição', 'Candidato', 'Projeto', 'Empresa', 'Categoria', 'Ano', 'Tipo de votação', 'Votos do candidato', 'Total de votos', 'Percentual', 'Pontuação total', 'Média ponderada', 'Pontuação da apuração'];
    const data = rows.map(item => [item.posicao, item.candidatoNome, item.nomeProjeto, item.empresa, item.categoria, item.ano, item.tipoVotacao, item.totalVotosCandidato, item.totalVotosVotacao, item.percentual, item.pontuacaoTotal, item.mediaPonderada, item.pontuacaoApuracao]);
    const csv = [header, ...data].map(row => row.map(value => this.csvValue(value)).join(';')).join('\r\n');
    const blob = new Blob([`\uFEFF${csv}`], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const nomeVotacao = this.sanitizeFileName(this.votacaoSelecionada?.nome ?? 'todas-as-votacoes');
    link.href = url;
    link.download = `apuracao-${nomeVotacao}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
  initials(name) {
    if (!name) {
      return '?';
    }
    return name.trim().split(/\s+/).slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('');
  }
  hideBrokenImage(event) {
    const image = event.target;
    image.style.display = 'none';
  }
  normalize(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  }
  csvValue(value) {
    const text = value === null || value === undefined ? '' : String(value);
    return `"${text.replace(/"/g, '""')}"`;
  }
  sanitizeFileName(value) {
    return this.normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'resultado';
  }
  static {
    this.ɵfac = function ApuracoesPageComponent_Factory(t) {
      return new (t || ApuracoesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_apuracoes_service__WEBPACK_IMPORTED_MODULE_0__.ApuracoesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_votacoes_service__WEBPACK_IMPORTED_MODULE_1__.VotacoesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ApuracoesPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 10,
      consts: [[1, "toolbar"], [1, "badge"], [1, "page-title"], [1, "muted", "page-description"], [1, "actions"], ["type", "button", 1, "secondary", 3, "click", "disabled"], ["type", "button", 3, "click", "disabled"], [1, "panel", "filters-panel"], [1, "filters-grid"], ["for", "votacao"], ["id", "votacao", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["for", "busca"], [1, "search-control"], ["id", "busca", "type", "search", "placeholder", "Candidato, projeto, empresa ou categoria", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Limpar busca", 1, "clear-search"], [1, "alert", "error"], [1, "panel", "loading-state"], ["type", "button", "aria-label", "Limpar busca", 1, "clear-search", 3, "click"], ["aria-hidden", "true", 1, "spinner"], [1, "muted", "small"], [1, "panel", "empty-state"], [1, "empty-icon"], [1, "muted"], [1, "stats-grid"], [1, "stat-card", "panel"], [1, "stat-label"], [1, "stat-card", "panel", "winner-stat"], [1, "winner-name"], [1, "ranking-section"], [1, "section-heading"], [1, "eyebrow"], [1, "result-count"], [1, "panel", "empty-search"], [1, "panel", "details-panel"], [1, "section-heading", "details-heading"], [1, "table-wrapper"], [1, "table", "results-table"], [1, "ranking-grid"], [1, "ranking-card", "panel", 3, "first-place", "second-place", "third-place"], [1, "ranking-card", "panel"], [1, "position"], [1, "candidate-avatar"], [3, "src", "alt"], [1, "candidate-main"], [1, "project-name"], [1, "candidate-meta"], [1, "ranking-score"], ["aria-hidden", "true", 1, "vote-progress"], [1, "vote-progress-bar"], [1, "card-footer"], [3, "error", "src", "alt"], [1, "table-position"], [1, "final-score"]],
      template: function ApuracoesPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "M\u00F3dulo administrativo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Apura\u00E7\u00E3o das vota\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Consulte a classifica\u00E7\u00E3o, os votos e as pontua\u00E7\u00F5es calculadas para cada candidato. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApuracoesPageComponent_Template_button_click_9_listener() {
            return ctx.exportCsv();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Exportar CSV ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApuracoesPageComponent_Template_button_click_11_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 7)(14, "div", 8)(15, "div")(16, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ApuracoesPageComponent_Template_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedVotacaoId, $event) || (ctx.selectedVotacaoId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ApuracoesPageComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.onVotacaoChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ApuracoesPageComponent_Conditional_19_Template, 2, 1, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](20, ApuracoesPageComponent_For_21_Template, 2, 3, "option", 11, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Buscar no resultado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13)(26, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ApuracoesPageComponent_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ApuracoesPageComponent_Conditional_27_Template, 2, 0, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ApuracoesPageComponent_Conditional_28_Template, 2, 1, "div", 16)(29, ApuracoesPageComponent_Conditional_29_Template, 6, 0, "section", 17)(30, ApuracoesPageComponent_Conditional_30_Template, 7, 0)(31, ApuracoesPageComponent_Conditional_31_Template, 70, 16);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading || ctx.filteredItems.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Atualizando..." : "Atualizar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedVotacaoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loadingVotacoes || ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](19, !ctx.votacoes.length ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.votacoes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](27, ctx.searchTerm ? 27 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](28, ctx.error ? 28 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](29, ctx.loading ? 29 : ctx.items.length === 0 ? 30 : 31);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin: 0.55rem 0 0;\n  font-size: clamp(1.7rem, 3vw, 2.45rem);\n}\n\n.page-description[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(260px, 0.8fr) minmax(280px, 1.2fr);\n  gap: 1rem;\n}\n\n.filters-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: #cbd5e1;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n\n.search-control[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.search-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 5.2rem;\n}\n\n.clear-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0.4rem;\n  transform: translateY(-50%);\n  padding: 0.45rem 0.65rem;\n  border-radius: 9px;\n  background: transparent;\n  color: #7dd3fc;\n  font-size: 0.8rem;\n}\n\n.clear-search[_ngcontent-%COMP%]:hover {\n  background: rgba(56, 189, 248, 0.1);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.9rem;\n  margin: 1rem 0 1.5rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.1rem;\n  min-height: 142px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.stat-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.45rem 0 0.35rem;\n  font-size: clamp(1.55rem, 3vw, 2.1rem);\n  line-height: 1.1;\n  color: #f8fafc;\n}\n\n.winner-stat[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at top right, rgba(250, 204, 21, 0.12), transparent 55%), rgba(15, 23, 42, 0.78);\n}\n\n.stat-card[_ngcontent-%COMP%]    > .winner-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.ranking-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 0.85rem;\n}\n\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1.35rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n.result-count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.88rem;\n}\n\n.ranking-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.9rem;\n}\n\n.ranking-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 1rem;\n  overflow: hidden;\n}\n\n.ranking-card.first-place[_ngcontent-%COMP%] {\n  border-color: rgba(250, 204, 21, 0.35);\n  background: linear-gradient(145deg, rgba(250, 204, 21, 0.08), transparent 55%), rgba(15, 23, 42, 0.78);\n}\n\n.ranking-card.second-place[_ngcontent-%COMP%] {\n  border-color: rgba(203, 213, 225, 0.3);\n}\n\n.ranking-card.third-place[_ngcontent-%COMP%] {\n  border-color: rgba(251, 146, 60, 0.3);\n}\n\n.position[_ngcontent-%COMP%] {\n  min-width: 38px;\n  color: #7dd3fc;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.first-place[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  color: #fde047;\n}\n\n.second-place[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.third-place[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  color: #fb923c;\n}\n\n.candidate-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 52px;\n  height: 52px;\n  display: grid;\n  place-items: center;\n  border: 1px solid rgba(125, 211, 252, 0.22);\n  border-radius: 50%;\n  overflow: hidden;\n  background: linear-gradient(135deg, rgba(14, 165, 233, 0.22), rgba(99, 102, 241, 0.18));\n  color: #e0f2fe;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.candidate-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.candidate-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.candidate-main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  color: #f8fafc;\n  font-size: 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  margin: 0.28rem 0 0;\n  overflow: hidden;\n  color: #cbd5e1;\n  font-size: 0.86rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.candidate-meta[_ngcontent-%COMP%] {\n  margin: 0.32rem 0 0;\n  overflow: hidden;\n  color: #64748b;\n  font-size: 0.76rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.candidate-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 0.2rem;\n}\n\n.ranking-score[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.ranking-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #f8fafc;\n  font-size: 1.15rem;\n}\n\n.ranking-score[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n\n.vote-progress[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  height: 5px;\n  overflow: hidden;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.13);\n}\n\n.vote-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, #0ea5e9, #38bdf8);\n}\n\n.first-place[_ngcontent-%COMP%]   .vote-progress-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #eab308, #fde047);\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: #94a3b8;\n  font-size: 0.78rem;\n}\n\n.card-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n\n.details-panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.details-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.results-table[_ngcontent-%COMP%] {\n  min-width: 880px;\n}\n\n.results-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.results-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(56, 189, 248, 0.035);\n}\n\n.table-position[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 42px;\n  height: 32px;\n  place-items: center;\n  border-radius: 10px;\n  background: rgba(51, 65, 85, 0.65);\n  color: #cbd5e1;\n  font-weight: 800;\n}\n\n.table-position.top-three[_ngcontent-%COMP%] {\n  background: rgba(14, 165, 233, 0.15);\n  color: #7dd3fc;\n}\n\n.final-score[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%], .empty-search[_ngcontent-%COMP%] {\n  padding: 2.5rem 1rem;\n  text-align: center;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: 0.65rem;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 3px solid rgba(56, 189, 248, 0.18);\n  border-top-color: #38bdf8;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.7rem 0 0.35rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 540px;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto;\n  border-radius: 50%;\n  background: rgba(56, 189, 248, 0.1);\n  color: #7dd3fc;\n  font-size: 1.4rem;\n}\n\n.empty-search[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%], .ranking-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .filters-grid[_ngcontent-%COMP%], .stats-grid[_ngcontent-%COMP%], .ranking-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ranking-card[_ngcontent-%COMP%] {\n    grid-template-columns: auto auto minmax(0, 1fr);\n  }\n  .ranking-score[_ngcontent-%COMP%] {\n    grid-column: 2/-1;\n    text-align: left;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXB1cmFjb2VzL2FwdXJhY29lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0VBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtSEFDRTtBQUFKOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxzQ0FBQTtFQUNBLHNHQUNFO0FBRko7O0FBTUE7RUFDRSxzQ0FBQTtBQUhGOztBQU1BO0VBQ0UscUNBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1RkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7QUFIRjs7QUFNQTtFQUNFLG9EQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQ0FBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7OztFQUdFLG9CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQUsseUJBQUE7RUFGTDtBQUNGO0FBSUE7RUFDRTs7SUFFRSxnREFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFOzs7SUFHRSwwQkFBQTtFQUhGO0VBTUE7SUFDRSwrQ0FBQTtFQUpGO0VBT0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBTEY7RUFRQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7RUFORjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwLjU1cmVtIDAgMDtcclxuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgM3Z3LCAyLjQ1cmVtKTtcclxufVxyXG5cclxuLnBhZ2UtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMC41cmVtIDAgMDtcclxufVxyXG5cclxuLmZpbHRlcnMtcGFuZWwge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZpbHRlcnMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNjBweCwgMC44ZnIpIG1pbm1heCgyODBweCwgMS4yZnIpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZpbHRlcnMtZ3JpZCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40NXJlbTtcclxuICBjb2xvcjogI2NiZDVlMTtcclxuICBmb250LXNpemU6IDAuODhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNlYXJjaC1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udHJvbCBpbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogNS4ycmVtO1xyXG59XHJcblxyXG4uY2xlYXItc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDAuNHJlbTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgcGFkZGluZzogMC40NXJlbSAwLjY1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzdkZDNmYztcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmNsZWFyLXNlYXJjaDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1NiwgMTg5LCAyNDgsIDAuMSk7XHJcbn1cclxuXHJcbi5zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDAuOXJlbTtcclxuICBtYXJnaW46IDFyZW0gMCAxLjVyZW07XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDEuMXJlbTtcclxuICBtaW4taGVpZ2h0OiAxNDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0LWxhYmVsIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXQtY2FyZCA+IHN0cm9uZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwLjQ1cmVtIDAgMC4zNXJlbTtcclxuICBmb250LXNpemU6IGNsYW1wKDEuNTVyZW0sIDN2dywgMi4xcmVtKTtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGNvbG9yOiAjZjhmYWZjO1xyXG59XHJcblxyXG4ud2lubmVyLXN0YXQge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IHRvcCByaWdodCwgcmdiYSgyNTAsIDIwNCwgMjEsIDAuMTIpLCB0cmFuc3BhcmVudCA1NSUpLFxyXG4gICAgcmdiYSgxNSwgMjMsIDQyLCAwLjc4KTtcclxufVxyXG5cclxuLnN0YXQtY2FyZCA+IC53aW5uZXItbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5yYW5raW5nLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjg1cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIGgzIHtcclxuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcclxufVxyXG5cclxuLmV5ZWJyb3cge1xyXG4gIGNvbG9yOiAjN2RkM2ZjO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucmVzdWx0LWNvdW50IHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBmb250LXNpemU6IDAuODhyZW07XHJcbn1cclxuXHJcbi5yYW5raW5nLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMC45cmVtO1xyXG59XHJcblxyXG4ucmFua2luZy1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjg1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnJhbmtpbmctY2FyZC5maXJzdC1wbGFjZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMC4zNSk7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMjUwLCAyMDQsIDIxLCAwLjA4KSwgdHJhbnNwYXJlbnQgNTUlKSxcclxuICAgIHJnYmEoMTUsIDIzLCA0MiwgMC43OCk7XHJcbn1cclxuXHJcbi5yYW5raW5nLWNhcmQuc2Vjb25kLXBsYWNlIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgMC4zKTtcclxufVxyXG5cclxuLnJhbmtpbmctY2FyZC50aGlyZC1wbGFjZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MSwgMTQ2LCA2MCwgMC4zKTtcclxufVxyXG5cclxuLnBvc2l0aW9uIHtcclxuICBtaW4td2lkdGg6IDM4cHg7XHJcbiAgY29sb3I6ICM3ZGQzZmM7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlyc3QtcGxhY2UgLnBvc2l0aW9uIHtcclxuICBjb2xvcjogI2ZkZTA0NztcclxufVxyXG5cclxuLnNlY29uZC1wbGFjZSAucG9zaXRpb24ge1xyXG4gIGNvbG9yOiAjZTJlOGYwO1xyXG59XHJcblxyXG4udGhpcmQtcGxhY2UgLnBvc2l0aW9uIHtcclxuICBjb2xvcjogI2ZiOTIzYztcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1hdmF0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTJweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI1LCAyMTEsIDI1MiwgMC4yMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNCwgMTY1LCAyMzMsIDAuMjIpLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xOCkpO1xyXG4gIGNvbG9yOiAjZTBmMmZlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtYXZhdGFyIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1tYWluIHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtbWFpbiBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICNmOGZhZmM7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gIG1hcmdpbjogMC4yOHJlbSAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogI2NiZDVlMTtcclxuICBmb250LXNpemU6IDAuODZyZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNhbmRpZGF0ZS1tZXRhIHtcclxuICBtYXJnaW46IDAuMzJyZW0gMCAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtbWV0YSBzcGFuIHtcclxuICBtYXJnaW46IDAgMC4ycmVtO1xyXG59XHJcblxyXG4ucmFua2luZy1zY29yZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yYW5raW5nLXNjb3JlIHN0cm9uZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmOGZhZmM7XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG59XHJcblxyXG4ucmFua2luZy1zY29yZSBzcGFuIHtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udm90ZS1wcm9ncmVzcyB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xMyk7XHJcbn1cclxuXHJcbi52b3RlLXByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBlYTVlOSwgIzM4YmRmOCk7XHJcbn1cclxuXHJcbi5maXJzdC1wbGFjZSAudm90ZS1wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2VhYjMwOCwgI2ZkZTA0Nyk7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDFyZW07XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgc3Ryb25nIHtcclxuICBjb2xvcjogI2UyZThmMDtcclxufVxyXG5cclxuLmRldGFpbHMtcGFuZWwge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxzLWhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlIHtcclxuICBtaW4td2lkdGg6IDg4MHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZSB0aCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnJlc3VsdHMtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjAzNSk7XHJcbn1cclxuXHJcbi50YWJsZS1wb3NpdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgbWluLXdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MSwgNjUsIDg1LCAwLjY1KTtcclxuICBjb2xvcjogI2NiZDVlMTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4udGFibGUtcG9zaXRpb24udG9wLXRocmVlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxNjUsIDIzMywgMC4xNSk7XHJcbiAgY29sb3I6ICM3ZGQzZmM7XHJcbn1cclxuXHJcbi5maW5hbC1zY29yZSB7XHJcbiAgY29sb3I6ICM3ZGQzZmM7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0YXRlLFxyXG4uZW1wdHktc3RhdGUsXHJcbi5lbXB0eS1zZWFyY2gge1xyXG4gIHBhZGRpbmc6IDIuNXJlbSAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRpbmctc3RhdGUge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC42NXJlbTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDU2LCAxODksIDI0OCwgMC4xOCk7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM4YmRmODtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgaDMge1xyXG4gIG1hcmdpbjogMC43cmVtIDAgMC4zNXJlbTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHAge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNTQwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDU2LCAxODksIDI0OCwgMC4xKTtcclxuICBjb2xvcjogIzdkZDNmYztcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuLmVtcHR5LXNlYXJjaCB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuc3RhdHMtZ3JpZCxcclxuICAucmFua2luZy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5maWx0ZXJzLWdyaWQsXHJcbiAgLnN0YXRzLWdyaWQsXHJcbiAgLnJhbmtpbmctZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5yYW5raW5nLWNhcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gbWlubWF4KDAsIDFmcik7XHJcbiAgfVxyXG5cclxuICAucmFua2luZy1zY29yZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9591:
/*!*****************************************************!*\
  !*** ./src/app/pages/candidatos/candidatos.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidatosPageComponent: () => (/* binding */ CandidatosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_candidatos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/candidatos.service */ 5718);





const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.id;
function CandidatosPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function CandidatosPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function CandidatosPageComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r2.label);
  }
}
function CandidatosPageComponent_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CandidatosPageComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nenhum candidato cadastrado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CandidatosPageComponent_Conditional_106_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td")(16, "div", 22)(17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandidatosPageComponent_Conditional_106_For_17_Template_button_click_17_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.edit(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandidatosPageComponent_Conditional_106_For_17_Template_button_click_19_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.remove(item_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Excluir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.categoriaProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.nomeProjeto);
  }
}
function CandidatosPageComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](16, CandidatosPageComponent_Conditional_106_For_17_Template, 21, 6, "tr", null, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.items);
  }
}
class CandidatosPageComponent {
  constructor(fb, service) {
    this.fb = fb;
    this.service = service;
    this.items = [];
    this.categoriasProjeto = [{
      value: 'INOVACAO',
      label: 'Inovação'
    }, {
      value: 'SOCIAL',
      label: 'Social'
    }, {
      value: 'UNIVERSITARIO',
      label: 'Universitário'
    }];
    this.loading = false;
    this.saving = false;
    this.editingId = null;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      telefone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      empresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      categoriaProjeto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      votacaoId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      nomeProjeto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fotoUrl: [''],
      participantes: [''],
      periodoExecucao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      stakeholders: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      orcamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      ferramentasMetodologias: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      resumoProjeto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      solucaoDesenvolvida: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      resultadosImpacto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      autorizacaoAudiovisual: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue],
      declaracaoVeracidade: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Erro ao carregar candidatos.';
      }
    });
  }
  edit(item) {
    this.editingId = item.id ?? null;
    this.form.patchValue(item);
  }
  cancel() {
    this.editingId = null;
    this.form.reset({
      votacaoId: 1,
      autorizacaoAudiovisual: false,
      declaracaoVeracidade: false
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.error = '';
    const payload = this.form.getRawValue();
    const request = this.editingId ? this.service.update(this.editingId, payload) : this.service.create(payload);
    request.subscribe({
      next: () => {
        this.saving = false;
        this.message = this.editingId ? 'Candidato atualizado.' : 'Candidato criado.';
        this.cancel();
        this.load();
      },
      error: err => {
        this.saving = false;
        this.error = err?.error?.message || 'Erro ao salvar candidato.';
      }
    });
  }
  remove(id) {
    if (!id) return;
    if (!confirm('Excluir candidato?')) return;
    this.service.delete(id).subscribe({
      next: () => this.load(),
      error: () => this.error = 'Erro ao excluir candidato.'
    });
  }
  static {
    this.ɵfac = function CandidatosPageComponent_Factory(t) {
      return new (t || CandidatosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_candidatos_service__WEBPACK_IMPORTED_MODULE_0__.CandidatosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CandidatosPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 107,
      vars: 26,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], ["type", "button", 1, "secondary", 3, "click", "disabled"], [1, "alert", "success"], [1, "alert", "error"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], [1, "grid-2"], [3, "formControl"], ["type", "email", 3, "formControl"], ["value", ""], [3, "value"], ["type", "number", 3, "formControl"], ["type", "checkbox", 3, "formControl"], [1, "form-actions"], ["type", "button", 3, "click", "disabled"], ["type", "button", 1, "secondary", 3, "click"], [1, "muted"], [1, "table"], [1, "muted", "small"], [1, "actions"], ["type", "button", 1, "danger", 3, "click"]],
      template: function CandidatosPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cadastro completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandidatosPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Recarregar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CandidatosPageComponent_Conditional_8_Template, 2, 1, "div", 4)(9, CandidatosPageComponent_Conditional_9_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "section", 7)(12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "div")(17, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Nome");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "E-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "div")(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Telefone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Empresa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9)(34, "div")(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Categoria");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 10)(38, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](40, CandidatosPageComponent_For_41_Template, 2, 2, "option", 13, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div")(43, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "ID Vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div")(47, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Nome do Projeto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div")(51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Resumo do Projeto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div")(55, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Solu\u00E7\u00E3o Desenvolvida");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div")(59, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Resultados e Impacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div")(63, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Stakeholders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div")(67, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Or\u00E7amento");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div")(71, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Ferramentas e Metodologias");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div")(75, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Participantes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div")(79, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Per\u00EDodo de Execu\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div")(83, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Foto URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div")(87, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Descri\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Autorizo registro audiovisual ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Declaro que as informa\u00E7\u00F5es s\u00E3o verdadeiras ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 16)(97, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandidatosPageComponent_Template_button_click_97_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CandidatosPageComponent_Template_button_click_99_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Limpar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "section", 7)(102, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, CandidatosPageComponent_Conditional_104_Template, 2, 0, "p", 19)(105, CandidatosPageComponent_Conditional_105_Template, 2, 0)(106, CandidatosPageComponent_Conditional_106_Template, 18, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, ctx.message ? 8 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](9, ctx.error ? 9 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editingId ? "Editar candidato" : "Novo candidato");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.nome);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.telefone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.empresa);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.categoriaProjeto);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.categoriasProjeto);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.votacaoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.nomeProjeto);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.resumoProjeto);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.solucaoDesenvolvida);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.resultadosImpacto);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.stakeholders);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.orcamento);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.ferramentasMetodologias);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.participantes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.periodoExecucao);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.fotoUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.descricao);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.autorizacaoAudiovisual);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.declaracaoVeracidade);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.editingId ? "Salvar" : "Cadastrar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](104, ctx.loading ? 104 : !ctx.items.length ? 105 : 106);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5087:
/*!*****************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasPageComponent: () => (/* binding */ CategoriasPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categorias.service */ 4430);





const _forTrack0 = ($index, $item) => $item.id;
function CategoriasPageComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function CategoriasPageComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function CategoriasPageComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CategoriasPageComponent_Conditional_28_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td")(6, "div", 15)(7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriasPageComponent_Conditional_28_For_11_Template_button_click_7_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.edit(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriasPageComponent_Conditional_28_For_11_Template_button_click_9_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.remove(item_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.nome);
  }
}
function CategoriasPageComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](10, CategoriasPageComponent_Conditional_28_For_11_Template, 11, 2, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.items);
  }
}
class CategoriasPageComponent {
  constructor(fb, service) {
    this.fb = fb;
    this.service = service;
    this.items = [];
    this.loading = false;
    this.saving = false;
    this.editingId = null;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Falha ao carregar categorias.';
      }
    });
  }
  edit(item) {
    this.editingId = item.id ?? null;
    this.form.patchValue({
      nome: item.nome
    });
  }
  cancel() {
    this.editingId = null;
    this.form.reset({
      nome: ''
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.error = '';
    const payload = this.form.getRawValue();
    const request = this.editingId ? this.service.update(this.editingId, payload) : this.service.create(payload);
    request.subscribe({
      next: () => {
        this.saving = false;
        this.message = this.editingId ? 'Categoria atualizada.' : 'Categoria criada.';
        this.cancel();
        this.load();
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao salvar categoria.';
      }
    });
  }
  remove(id) {
    if (!id) return;
    if (!confirm('Excluir categoria?')) return;
    this.service.delete(id).subscribe({
      next: () => this.load(),
      error: () => this.error = 'Erro ao excluir categoria.'
    });
  }
  static {
    this.ɵfac = function CategoriasPageComponent_Factory(t) {
      return new (t || CategoriasPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__.CategoriasService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CategoriasPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 8,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "secondary", 3, "click", "disabled"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], ["placeholder", "Ex.: Melhor Desenvolvedor", 3, "formControl"], [1, "form-actions"], [3, "click", "disabled"], ["type", "button", 1, "secondary", 3, "click"], [1, "alert", "success"], [1, "alert", "error"], [1, "muted"], [1, "table"], [1, "actions"], [1, "secondary", 3, "click"], [1, "danger", 3, "click"]],
      template: function CategoriasPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Categorias");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cadastro e manuten\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriasPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Recarregar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "section", 5)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div")(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nome");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriasPageComponent_Template_button_click_18_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriasPageComponent_Template_button_click_20_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Limpar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CategoriasPageComponent_Conditional_22_Template, 2, 1, "div", 11)(23, CategoriasPageComponent_Conditional_23_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 5)(25, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CategoriasPageComponent_Conditional_27_Template, 2, 0, "p", 13)(28, CategoriasPageComponent_Conditional_28_Template, 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editingId ? "Editar categoria" : "Nova categoria");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.nome);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editingId ? "Salvar" : "Cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](22, ctx.message ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](23, ctx.error ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](27, ctx.loading ? 27 : 28);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5047:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 33,
      vars: 0,
      consts: [[1, "panel", "hero"], [1, "badge"], [1, "form-actions"], ["routerLink", "/categorias"], ["routerLink", "/votacoes"], [1, "secondary"], ["routerLink", "/voto"], [1, "grid-3", 2, "margin-top", "1rem"], [1, "kpi"], [1, "muted"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sistema completo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PMI-DF Premia Frontend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Interface Angular para cadastrar categorias, anos, termos, candidatos, vota\u00E7\u00F5es, associa\u00E7\u00F5es de candidatos e envio de votos para a API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "a", 3)(9, "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cadastrar categorias");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4)(12, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gerenciar vota\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6)(15, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Votar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "div", 8)(19, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CRUD");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Categorias, anos, termos e candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vota\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cria\u00E7\u00E3o e manuten\u00E7\u00E3o de campanhas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8)(29, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Voto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Montagem do payload e envio");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1339:
/*!*********************************************!*\
  !*** ./src/app/pages/termos/termos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermosPageComponent: () => (/* binding */ TermosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_termos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/termos.service */ 3770);





const _forTrack0 = ($index, $item) => $item.id;
function TermosPageComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function TermosPageComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function TermosPageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "URL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ativo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.current.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.current.arquivoUrl, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.current.ativo, " ");
  }
}
function TermosPageComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nenhum termo ativo encontrado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermosPageComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TermosPageComponent_Conditional_31_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td")(4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermosPageComponent_Conditional_31_For_11_Template_button_click_7_listener() {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.remove(item_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r3.arquivoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.arquivoUrl);
  }
}
function TermosPageComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 15)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Arquivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](10, TermosPageComponent_Conditional_31_For_11_Template, 9, 3, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.items);
  }
}
class TermosPageComponent {
  constructor(fb, service) {
    this.fb = fb;
    this.service = service;
    this.items = [];
    this.current = null;
    this.loading = false;
    this.saving = false;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      arquivoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)]]
    });
  }
  ngOnInit() {
    this.load();
    this.loadActive();
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Falha ao carregar termos.';
      }
    });
  }
  loadActive() {
    this.service.ativo().subscribe({
      next: res => this.current = res,
      error: () => this.current = null
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.service.create(this.form.getRawValue()).subscribe({
      next: () => {
        this.saving = false;
        this.message = 'Termo cadastrado.';
        this.form.reset({
          arquivoUrl: ''
        });
        this.load();
        this.loadActive();
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao cadastrar termo.';
      }
    });
  }
  remove(id) {
    if (!id) return;
    if (!confirm('Excluir termo?')) return;
    this.service.delete(id).subscribe({
      next: () => {
        this.load();
        this.loadActive();
      },
      error: () => this.error = 'Erro ao excluir termo.'
    });
  }
  static {
    this.ɵfac = function TermosPageComponent_Factory(t) {
      return new (t || TermosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_termos_service__WEBPACK_IMPORTED_MODULE_0__.TermosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TermosPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 32,
      vars: 7,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "secondary", 3, "click", "disabled"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], ["placeholder", "https://exemplo.com/termo.pdf", 3, "formControl"], [1, "form-actions"], [3, "click", "disabled"], [1, "alert", "success"], [1, "alert", "error"], [1, "codebox"], [1, "hr"], [1, "muted"], [1, "table"], ["target", "_blank", 3, "href"], [1, "danger", 3, "click"]],
      template: function TermosPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Termos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Upload por URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermosPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Recarregar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "section", 5)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Novo termo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div")(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "URL do arquivo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermosPageComponent_Template_button_click_18_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TermosPageComponent_Conditional_20_Template, 2, 1, "div", 10)(21, TermosPageComponent_Conditional_21_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 5)(23, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Termo ativo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TermosPageComponent_Conditional_25_Template, 10, 3, "div", 12)(26, TermosPageComponent_Conditional_26_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TermosPageComponent_Conditional_30_Template, 2, 0, "p", 14)(31, TermosPageComponent_Conditional_31_Template, 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.arquivoUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](20, ctx.message ? 20 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](21, ctx.error ? 21 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](25, ctx.current ? 25 : 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](30, ctx.loading ? 30 : 31);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6557:
/*!***********************************************************************!*\
  !*** ./src/app/pages/votacoes-candidatos/votacoes-candidatos.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotacoesCandidatosPageComponent: () => (/* binding */ VotacoesCandidatosPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_votacoes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/votacoes.service */ 796);
/* harmony import */ var _services_candidatos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/candidatos.service */ 5718);






const _forTrack0 = ($index, $item) => $item.id;
function VotacoesCandidatosPageComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", v_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r1.nome);
  }
}
function VotacoesCandidatosPageComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", c_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.nome);
  }
}
function VotacoesCandidatosPageComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function VotacoesCandidatosPageComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function VotacoesCandidatosPageComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VotacoesCandidatosPageComponent_Conditional_38_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VotacoesCandidatosPageComponent_Conditional_38_For_13_Template_button_click_8_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.remove(item_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.votacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.candidato);
  }
}
function VotacoesCandidatosPageComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Candidato");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](12, VotacoesCandidatosPageComponent_Conditional_38_For_13_Template, 10, 3, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.items);
  }
}
class VotacoesCandidatosPageComponent {
  constructor(fb, service, votacoesService, candidatosService) {
    this.fb = fb;
    this.service = service;
    this.votacoesService = votacoesService;
    this.candidatosService = candidatosService;
    this.items = [];
    this.votacoes = [];
    this.candidatos = [];
    this.loading = false;
    this.saving = false;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      votacaoId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]],
      candidatoId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]]
    });
  }
  ngOnInit() {
    this.loadLookups();
    this.load();
  }
  loadLookups() {
    this.votacoesService.list().subscribe({
      next: res => this.votacoes = res ?? []
    });
    this.candidatosService.list().subscribe({
      next: res => this.candidatos = res ?? []
    });
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Falha ao carregar vínculos.';
      }
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.service.create({
      votacaoId: Number(this.form.value.votacaoId),
      candidatoId: Number(this.form.value.candidatoId)
    }).subscribe({
      next: () => {
        this.saving = false;
        this.message = 'Votação x candidato criada.';
        this.form.reset({
          votacaoId: 0,
          candidatoId: 0
        });
        this.load();
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao salvar vínculo.';
      }
    });
  }
  remove(id) {
    if (!id) return;
    if (!confirm('Excluir vínculo?')) return;
    this.service.delete(id).subscribe({
      next: () => this.load(),
      error: () => this.error = 'Erro ao excluir vínculo.'
    });
  }
  static {
    this.ɵfac = function VotacoesCandidatosPageComponent_Factory(t) {
      return new (t || VotacoesCandidatosPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_votacoes_service__WEBPACK_IMPORTED_MODULE_0__.VotacoesCandidatosService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_votacoes_service__WEBPACK_IMPORTED_MODULE_0__.VotacoesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_candidatos_service__WEBPACK_IMPORTED_MODULE_1__.CandidatosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VotacoesCandidatosPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 39,
      vars: 9,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "secondary", 3, "click", "disabled"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], [3, "formControl"], [3, "ngValue"], [1, "form-actions"], [3, "click", "disabled"], [1, "alert", "success"], [1, "alert", "error"], [1, "muted"], [1, "table"], [1, "danger", 3, "click"]],
      template: function VotacoesCandidatosPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Vota\u00E7\u00F5es x Candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Associa\u00E7\u00E3o entre vota\u00E7\u00F5es e candidatos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VotacoesCandidatosPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Recarregar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "section", 5)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Novo v\u00EDnculo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div")(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 7)(17, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](19, VotacoesCandidatosPageComponent_For_20_Template, 2, 2, "option", 8, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Candidato");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "select", 7)(25, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](27, VotacoesCandidatosPageComponent_For_28_Template, 2, 2, "option", 8, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VotacoesCandidatosPageComponent_Template_button_click_30_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, VotacoesCandidatosPageComponent_Conditional_32_Template, 2, 1, "div", 11)(33, VotacoesCandidatosPageComponent_Conditional_33_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "section", 5)(35, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, VotacoesCandidatosPageComponent_Conditional_37_Template, 2, 0, "p", 13)(38, VotacoesCandidatosPageComponent_Conditional_38_Template, 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form.controls.votacaoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.votacoes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.form.controls.candidatoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.candidatos);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](32, ctx.message ? 32 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](33, ctx.error ? 33 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](37, ctx.loading ? 37 : 38);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 719:
/*!*************************************************!*\
  !*** ./src/app/pages/votacoes/votacoes.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotacoesPageComponent: () => (/* binding */ VotacoesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/form-utils */ 5414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_votacoes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/votacoes.service */ 796);
/* harmony import */ var _services_anos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/anos.service */ 9267);
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/categorias.service */ 4430);








const _forTrack0 = ($index, $item) => $item.descricao;
const _forTrack1 = ($index, $item) => $item.id;
function VotacoesPageComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", a_r1.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](a_r1.descricao);
  }
}
function VotacoesPageComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", c_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r2.nome);
  }
}
function VotacoesPageComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
function VotacoesPageComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function VotacoesPageComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VotacoesPageComponent_Conditional_72_For_15_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Conditional_72_For_15_Conditional_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.copiarLink(ctx_r2.linkPublico(item_r6.id)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Copiar p\u00FAblico");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Conditional_72_For_15_Conditional_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.copiarLink(ctx_r2.linkAvaliador(item_r6.id)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Copiar avaliador");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.linkPublico(item_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.linkAvaliador(item_r6.id));
  }
}
function VotacoesPageComponent_Conditional_72_For_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "N\u00E3o se aplica");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VotacoesPageComponent_Conditional_72_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, VotacoesPageComponent_Conditional_72_For_15_Conditional_15_Template, 9, 2)(16, VotacoesPageComponent_Conditional_72_For_15_Conditional_16_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "div", 23)(19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Conditional_72_For_15_Template_button_click_19_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.edit(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Conditional_72_For_15_Template_button_click_21_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.remove(item_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.dataInicio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("at\u00E9 ", item_r6.dataFim, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](15, item_r6.tipo === "AVALIACAO" ? 15 : 16);
  }
}
function VotacoesPageComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 21)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Per\u00EDodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](14, VotacoesPageComponent_Conditional_72_For_15_Template, 23, 6, "tr", null, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r2.items);
  }
}
class VotacoesPageComponent {
  constructor(fb, service, anosService, categoriasService) {
    this.fb = fb;
    this.service = service;
    this.anosService = anosService;
    this.categoriasService = categoriasService;
    this.items = [];
    this.anos = [];
    this.categorias = [];
    this.loading = false;
    this.saving = false;
    this.editingId = null;
    this.message = '';
    this.error = '';
    this.form = this.fb.nonNullable.group({
      anoId: ['2026', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      categoriaId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]],
      nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      imagemUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      dataInicio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      dataFim: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      dataPublicacao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      tipo: ['ESCOLHA_UNICA', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  ngOnInit() {
    this.loadLookups();
    this.load();
  }
  loadLookups() {
    this.anosService.list().subscribe({
      next: res => this.anos = res ?? []
    });
    this.categoriasService.list().subscribe({
      next: res => this.categorias = res ?? []
    });
  }
  load() {
    this.loading = true;
    this.service.list().subscribe({
      next: res => {
        this.items = res ?? [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Falha ao carregar votações.';
      }
    });
  }
  edit(item) {
    this.editingId = item.id ?? null;
    this.form.patchValue({
      anoId: item.anoDescricao,
      categoriaId: item.categoriaId,
      nome: item.nome,
      imagemUrl: item.imagemUrl,
      dataInicio: (0,_shared_form_utils__WEBPACK_IMPORTED_MODULE_0__.toDatetimeLocalValue)(item.dataInicio),
      dataFim: (0,_shared_form_utils__WEBPACK_IMPORTED_MODULE_0__.toDatetimeLocalValue)(item.dataFim),
      dataPublicacao: (0,_shared_form_utils__WEBPACK_IMPORTED_MODULE_0__.toDatetimeLocalValue)(item.dataPublicacao),
      tipo: item.tipo
    });
  }
  cancel() {
    this.editingId = null;
    this.form.reset({
      anoId: '2026',
      categoriaId: 0,
      nome: '',
      imagemUrl: '',
      dataInicio: '',
      dataFim: '',
      dataPublicacao: '',
      tipo: 'ESCOLHA_UNICA'
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.error = '';
    const raw = this.form.getRawValue();
    const payload = {
      anoId: raw.anoId,
      categoriaId: Number(raw.categoriaId),
      nome: raw.nome,
      imagemUrl: raw.imagemUrl,
      dataInicio: raw.dataInicio,
      dataFim: raw.dataFim,
      dataPublicacao: raw.dataPublicacao,
      tipo: raw.tipo
    };
    const request = this.editingId ? this.service.update(this.editingId, payload) : this.service.create(payload);
    request.subscribe({
      next: () => {
        this.saving = false;
        this.message = this.editingId ? 'Votação atualizada.' : 'Votação criada.';
        this.cancel();
        this.load();
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao salvar votação.';
      }
    });
  }
  remove(id) {
    if (!id) return;
    if (!confirm('Excluir votação?')) return;
    this.service.delete(id).subscribe({
      next: () => this.load(),
      error: () => this.error = 'Erro ao excluir votação.'
    });
  }
  linkPublico(id) {
    return id ? `${window.location.origin}/votacao/publico/${id}` : '';
  }
  linkAvaliador(id) {
    return id ? `${window.location.origin}/votacao/avaliador/${id}` : '';
  }
  copiarLink(link) {
    if (!link) return;
    navigator.clipboard.writeText(link).then(() => this.message = 'Link copiado.', () => this.error = 'Não foi possível copiar o link.');
  }
  static {
    this.ɵfac = function VotacoesPageComponent_Factory(t) {
      return new (t || VotacoesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_votacoes_service__WEBPACK_IMPORTED_MODULE_1__.VotacoesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_anos_service__WEBPACK_IMPORTED_MODULE_2__.AnosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__.CategoriasService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: VotacoesPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 73,
      vars: 17,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "secondary", 3, "click", "disabled"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], [1, "grid-2"], [3, "formControl"], [3, "ngValue"], [1, "grid-3"], ["type", "datetime-local", 3, "formControl"], ["value", "ESCOLHA_UNICA"], ["value", "AVALIACAO"], [1, "form-actions"], [3, "click", "disabled"], ["type", "button", 1, "secondary", 3, "click"], [1, "alert", "success"], [1, "alert", "error"], [1, "muted", "small"], [1, "muted"], [1, "table"], [1, "small"], [1, "actions"], [1, "secondary", 3, "click"], [1, "danger", 3, "click"], [1, "muted", 2, "margin-top", ".5rem", "word-break", "break-all"], [1, "muted", 2, "margin-top", ".25rem", "word-break", "break-all"]],
      template: function VotacoesPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Vota\u00E7\u00F5es");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cria\u00E7\u00E3o e manuten\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Template_button_click_6_listener() {
            return ctx.load();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Recarregar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "section", 5)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "div")(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Ano");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 8)(18, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](20, VotacoesPageComponent_For_21_Template, 2, 2, "option", 9, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div")(23, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Categoria");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "select", 8)(26, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Selecione");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](28, VotacoesPageComponent_For_29_Template, 2, 2, "option", 9, _forTrack1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div")(31, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Nome");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div")(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Imagem URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 10)(39, "div")(40, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Data in\u00EDcio");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div")(44, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Data fim");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div")(48, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Publica\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div")(52, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Tipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "select", 8)(55, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "ESCOLHA_UNICA");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "AVALIACAO");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 14)(60, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Template_button_click_60_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VotacoesPageComponent_Template_button_click_62_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Limpar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, VotacoesPageComponent_Conditional_64_Template, 2, 1, "div", 17)(65, VotacoesPageComponent_Conditional_65_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "section", 5)(67, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Lista");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Vota\u00E7\u00F5es de avalia\u00E7\u00E3o possuem um link para o p\u00FAblico e outro para os avaliadores.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, VotacoesPageComponent_Conditional_71_Template, 2, 0, "p", 20)(72, VotacoesPageComponent_Conditional_72_Template, 16, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.editingId ? "Editar vota\u00E7\u00E3o" : "Nova vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.anoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.anos);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.categoriaId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.categorias);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.nome);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.imagemUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.dataInicio);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.dataFim);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.dataPublicacao);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.form.controls.tipo);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.editingId ? "Salvar" : "Cadastrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](64, ctx.message ? 64 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](65, ctx.error ? 65 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](71, ctx.loading ? 71 : 72);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 291:
/*!*****************************************!*\
  !*** ./src/app/pages/voto/voto.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotoPageComponent: () => (/* binding */ VotoPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_voto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/voto.service */ 4828);






function VotoPageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function VotoPageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
function VotoPageComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pre", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.result));
  }
}
function VotoPageComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nenhum retorno carregado ainda.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VotoPageComponent_div_39_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div")(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Crit\u00E9rio ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 30)(10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_div_39_div_30_Template_button_click_10_listener() {
      const j_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).index;
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeCriterio(i_r3, j_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Remover");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const j_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", j_r5);
  }
}
function VotoPageComponent_div_39_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sem crit\u00E9rios cadastrados para este item.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VotoPageComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_div_39_Template_button_click_4_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.removeItem(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Remover item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22)(7, "div")(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vota\u00E7\u00E3o Candidato ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Escolhido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 24)(15, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 0)(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Crit\u00E9rios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_div_39_Template_button_click_27_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.addCriterio(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Adicionar crit\u00E9rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, VotoPageComponent_div_39_div_30_Template, 12, 1, "div", 15)(31, VotoPageComponent_div_39_Conditional_31_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Item ", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.itens.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.itemCriterios(i_r3).controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](31, ctx_r0.itemCriterios(i_r3).length === 0 ? 31 : -1);
  }
}
class VotoPageComponent {
  constructor(fb, service) {
    this.fb = fb;
    this.service = service;
    this.loading = false;
    this.saving = false;
    this.result = null;
    this.message = '';
    this.error = '';
    this.lookupForm = this.fb.nonNullable.group({
      votacaoId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]]
    });
    this.form = this.fb.group({
      usuarioId: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      conselhoId: [null],
      itens: this.fb.array([])
    });
    this.addItem();
  }
  get itens() {
    return this.form.get('itens');
  }
  itemCriterios(index) {
    return this.itens.at(index).get('criterios');
  }
  addItem() {
    const item = this.fb.group({
      votacaoCandidatoId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      escolhido: [false],
      nota: [null],
      criterios: this.fb.array([])
    });
    this.itens.push(item);
  }
  removeItem(index) {
    this.itens.removeAt(index);
  }
  addCriterio(itemIndex) {
    const criterios = this.itemCriterios(itemIndex);
    criterios.push(this.fb.group({
      criterioId: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
      nota: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    }));
  }
  removeCriterio(itemIndex, criterioIndex) {
    this.itemCriterios(itemIndex).removeAt(criterioIndex);
  }
  carregarVisualizacao() {
    if (this.lookupForm.invalid) return;
    this.loading = true;
    this.message = '';
    this.error = '';
    const id = Number(this.lookupForm.value.votacaoId);
    this.service.visualizar(id).subscribe({
      next: res => {
        this.result = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Erro ao carregar visualização da votação.';
      }
    });
  }
  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    this.message = '';
    this.error = '';
    const votacaoId = Number(this.lookupForm.value.votacaoId || 0);
    const payload = this.form.getRawValue();
    this.service.votar(votacaoId, payload).subscribe({
      next: res => {
        this.saving = false;
        this.message = 'Voto enviado com sucesso.';
        this.result = res;
      },
      error: () => {
        this.saving = false;
        this.error = 'Erro ao enviar voto.';
      }
    });
  }
  static {
    this.ɵfac = function VotoPageComponent_Factory(t) {
      return new (t || VotoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_voto_service__WEBPACK_IMPORTED_MODULE_0__.VotoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VotoPageComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 9,
      consts: [[1, "toolbar"], [1, "badge"], [2, "margin", ".5rem 0 0"], [1, "page-grid"], [1, "panel", "card"], [1, "stack"], ["type", "number", 3, "formControl"], [1, "form-actions"], [3, "click", "disabled"], [1, "alert", "success"], [1, "alert", "error"], [1, "hr"], [1, "codebox"], [1, "grid-2"], ["formArrayName", "itens", 1, "stack"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "secondary", 3, "click"], ["type", "button", 3, "click", "disabled"], [1, "muted"], [3, "formGroupName"], [1, "toolbar", 2, "margin-bottom", ".7rem"], ["type", "button", 1, "danger", 3, "click", "disabled"], [1, "grid-3"], ["type", "number", "formControlName", "votacaoCandidatoId"], ["formControlName", "escolhido"], [3, "ngValue"], ["type", "number", "step", "0.1", "formControlName", "nota"], ["formArrayName", "criterios", 1, "stack"], [1, "muted", "small"], ["type", "number", "formControlName", "criterioId"], [2, "display", "flex", "align-items", "end"], ["type", "button", 1, "danger", 3, "click"]],
      template: function VotoPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Voto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Envio do payload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "section", 4)(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Carregar vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "div")(12, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ID da vota\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_Template_button_click_16_listener() {
            return ctx.carregarVisualizacao();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Carregar visualiza\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, VotoPageComponent_Conditional_18_Template, 2, 1, "div", 9)(19, VotoPageComponent_Conditional_19_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Visualiza\u00E7\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VotoPageComponent_Conditional_23_Template, 3, 3, "pre", 12)(24, VotoPageComponent_Conditional_24_Template, 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 4)(26, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Montar voto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5)(29, "div", 13)(30, "div")(31, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Usu\u00E1rio ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div")(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Conselho ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, VotoPageComponent_div_39_Template, 32, 7, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7)(41, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_Template_button_click_41_listener() {
            return ctx.addItem();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Adicionar item");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotoPageComponent_Template_button_click_43_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Enviar voto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.lookupForm.controls.votacaoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](18, ctx.message ? 18 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](19, ctx.error ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](23, ctx.result ? 23 : 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.usuarioId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.form.controls.conselhoId);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itens.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9267:
/*!******************************************!*\
  !*** ./src/app/services/anos.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnosService: () => (/* binding */ AnosService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AnosService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/anos`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/anos`, payload);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAnosService_BaseFactory;
      return function AnosService_Factory(t) {
        return (ɵAnosService_BaseFactory || (ɵAnosService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AnosService)))(t || AnosService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnosService,
      factory: AnosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4385:
/*!***********************************************!*\
  !*** ./src/app/services/apuracoes.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApuracoesService: () => (/* binding */ ApuracoesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ApuracoesService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list(votacaoId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (votacaoId !== undefined && votacaoId !== null) {
      params = params.set('votacaoId', votacaoId.toString());
    }
    return this.http.get(`${this.baseUrl}/apuracoes`, {
      params
    });
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵApuracoesService_BaseFactory;
      return function ApuracoesService_Factory(t) {
        return (ɵApuracoesService_BaseFactory || (ɵApuracoesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ApuracoesService)))(t || ApuracoesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApuracoesService,
      factory: ApuracoesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5718:
/*!************************************************!*\
  !*** ./src/app/services/candidatos.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidatosService: () => (/* binding */ CandidatosService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CandidatosService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/candidatos`);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/candidatos/${id}`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/candidatos`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/candidatos/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/candidatos/${id}`);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCandidatosService_BaseFactory;
      return function CandidatosService_Factory(t) {
        return (ɵCandidatosService_BaseFactory || (ɵCandidatosService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CandidatosService)))(t || CandidatosService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CandidatosService,
      factory: CandidatosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4430:
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasService: () => (/* binding */ CategoriasService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CategoriasService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/categorias`);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/categorias/${id}`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/categorias`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/categorias/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/categorias/${id}`);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCategoriasService_BaseFactory;
      return function CategoriasService_Factory(t) {
        return (ɵCategoriasService_BaseFactory || (ɵCategoriasService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CategoriasService)))(t || CategoriasService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CategoriasService,
      factory: CategoriasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3770:
/*!********************************************!*\
  !*** ./src/app/services/termos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermosService: () => (/* binding */ TermosService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class TermosService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/termos`);
  }
  ativo() {
    return this.http.get(`${this.baseUrl}/termos/ativo`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/termos`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/termos/${id}`);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵTermosService_BaseFactory;
      return function TermosService_Factory(t) {
        return (ɵTermosService_BaseFactory || (ɵTermosService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TermosService)))(t || TermosService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TermosService,
      factory: TermosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 796:
/*!**********************************************!*\
  !*** ./src/app/services/votacoes.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotacoesCandidatosService: () => (/* binding */ VotacoesCandidatosService),
/* harmony export */   VotacoesService: () => (/* binding */ VotacoesService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class VotacoesService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/votacoes`);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/votacoes/${id}`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/votacoes`, payload);
  }
  update(id, payload) {
    return this.http.put(`${this.baseUrl}/votacoes/${id}`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/votacoes/${id}`);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵVotacoesService_BaseFactory;
      return function VotacoesService_Factory(t) {
        return (ɵVotacoesService_BaseFactory || (ɵVotacoesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](VotacoesService)))(t || VotacoesService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VotacoesService,
      factory: VotacoesService.ɵfac,
      providedIn: 'root'
    });
  }
}
class VotacoesCandidatosService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  list() {
    return this.http.get(`${this.baseUrl}/votacoes-candidatos`);
  }
  get(id) {
    return this.http.get(`${this.baseUrl}/votacoes-candidatos/${id}`);
  }
  create(payload) {
    return this.http.post(`${this.baseUrl}/votacoes-candidatos`, payload);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/votacoes-candidatos/${id}`);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵVotacoesCandidatosService_BaseFactory;
      return function VotacoesCandidatosService_Factory(t) {
        return (ɵVotacoesCandidatosService_BaseFactory || (ɵVotacoesCandidatosService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](VotacoesCandidatosService)))(t || VotacoesCandidatosService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VotacoesCandidatosService,
      factory: VotacoesCandidatosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4828:
/*!******************************************!*\
  !*** ./src/app/services/voto.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotoService: () => (/* binding */ VotoService)
/* harmony export */ });
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class VotoService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  visualizar(id) {
    return this.http.get(`${this.baseUrl}/voto/${id}/visualizacao`);
  }
  votar(id, payload) {
    return this.http.post(`${this.baseUrl}/voto/${id}/votos`, payload);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵVotoService_BaseFactory;
      return function VotoService_Factory(t) {
        return (ɵVotoService_BaseFactory || (ɵVotoService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](VotoService)))(t || VotoService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VotoService,
      factory: VotoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5414:
/*!**************************************!*\
  !*** ./src/app/shared/form-utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDatetimeLocalValue: () => (/* binding */ toDatetimeLocalValue),
/* harmony export */   toIsoStringFromDatetimeLocal: () => (/* binding */ toIsoStringFromDatetimeLocal)
/* harmony export */ });
function toDatetimeLocalValue(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
function toIsoStringFromDatetimeLocal(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://api-premiacoes.pmidf.org'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map