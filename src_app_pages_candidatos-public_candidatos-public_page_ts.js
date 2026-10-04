"use strict";
(self["webpackChunkpremia_frontend"] = self["webpackChunkpremia_frontend"] || []).push([["src_app_pages_candidatos-public_candidatos-public_page_ts"],{

/***/ 6021:
/*!*******************************************************************!*\
  !*** ./src/app/pages/candidatos-public/candidatos-public.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidatosPublicPageComponent: () => (/* binding */ CandidatosPublicPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_votacoes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/votacoes.service */ 796);
/* harmony import */ var _services_candidatos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/candidatos.service */ 5718);








const _forTrack0 = ($index, $item) => $item.value;
function CandidatosPublicPageComponent_div_0_header_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 38);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.votacao.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.votacao.nome);
  }
}
function CandidatosPublicPageComponent_div_0_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CandidatosPublicPageComponent_div_0_header_1_img_3_Template, 1, 2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Voc\u00EA est\u00E1 se inscrevendo na vota\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Preencha os dados com aten\u00E7\u00E3o. Os campos com valida\u00E7\u00E3o ajudam a evitar erros de envio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.votacao.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" PMI-DF \u2022 ", ctx_r1.votacao.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.votacao.categoriaNome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2022 ", ctx_r1.votacao.anoDescricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.votacao.nome, " ");
  }
}
function CandidatosPublicPageComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.success);
  }
}
function CandidatosPublicPageComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function CandidatosPublicPageComponent_div_0_For_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", c_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r3.label);
  }
}
function CandidatosPublicPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CandidatosPublicPageComponent_div_0_header_1_Template, 17, 5, "header", 3)(2, CandidatosPublicPageComponent_div_0_div_2_Template, 2, 1, "div", 4)(3, CandidatosPublicPageComponent_div_0_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6)(5, "section", 7)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Informa\u00E7\u00F5es do projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nome completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Empresa, organiza\u00E7\u00E3o ou institui\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Categoria do projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 15)(37, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Selecione");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](39, CandidatosPublicPageComponent_div_0_For_40_Template, 2, 2, "option", 17, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Nome do projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19)(50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Foto URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19)(56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 19)(62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Participantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 9)(68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Per\u00EDodo de execu\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 19)(74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Stakeholders e responsabilidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 19)(80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Or\u00E7amento e fontes de financiamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 19)(86, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Ferramentas e metodologias");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 19)(92, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Resumo do projeto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 19)(98, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Solu\u00E7\u00E3o desenvolvida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 19)(104, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Resultados alcan\u00E7ados, impacto e li\u00E7\u00F5es aprendidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "aside", 25)(110, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Confirma\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 9)(113, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Autorizo registro audiovisual e compartilhamento nos canais oficiais do PMI-DF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 9)(119, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Declaro que as informa\u00E7\u00F5es s\u00E3o verdadeiras e concordo com as regras do edital ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CandidatosPublicPageComponent_div_0_Template_button_click_124_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.votacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("nome"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.telefone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("telefone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("empresa"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.categoriaProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r1.categoriasProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("categoriaProjeto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.nomeProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("nomeProjeto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.fotoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("fotoUrl"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("descricao"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.participantes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("participantes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.periodoExecucao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("periodoExecucao"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.stakeholders);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("stakeholders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.orcamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("orcamento"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.ferramentasMetodologias);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("ferramentasMetodologias"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.resumoProjeto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("resumoProjeto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.solucaoDesenvolvida);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("solucaoDesenvolvida"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.resultadosImpacto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("resultadosImpacto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.autorizacaoAudiovisual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("autorizacaoAudiovisual"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.form.controls.declaracaoVeracidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.fieldError("declaracaoVeracidade"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.saving ? "Enviando..." : "Enviar cadastro", " ");
  }
}
function CandidatosPublicPageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Carregando dados da vota\u00E7\u00E3o...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CandidatosPublicPageComponent {
  constructor(fb, router, route, votacoesService, candidatosService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.votacoesService = votacoesService;
    this.candidatosService = candidatosService;
    this.loading = true;
    this.saving = false;
    this.error = '';
    this.success = '';
    this.votacao = null;
    this.votacaoId = 0;
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
    this.form = this.fb.nonNullable.group({
      nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
      descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4000)]],
      fotoUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^https?:\/\/.+/i)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(200)]],
      telefone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^\(?\d{2}\)?\s?9?\d{4}-?\d{4}$/)]],
      empresa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]],
      categoriaProjeto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      nomeProjeto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]],
      participantes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4000)]],
      periodoExecucao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]],
      stakeholders: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8000)]],
      orcamento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8000)]],
      ferramentasMetodologias: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(8000)]],
      resumoProjeto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(12000)]],
      solucaoDesenvolvida: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(12000)]],
      resultadosImpacto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(12000)]],
      autorizacaoAudiovisual: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue],
      declaracaoVeracidade: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue]
    });
  }
  ngOnInit() {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (!idParam || Number.isNaN(idParam)) {
      this.error = 'Votação inválida.';
      this.loading = false;
      return;
    }
    this.votacaoId = idParam;
    this.loadVotacao();
  }
  loadVotacao() {
    this.loading = true;
    this.error = '';
    this.votacoesService.get(this.votacaoId).subscribe({
      next: res => {
        this.votacao = res;
        console.log(this.votacao);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Não foi possível carregar os dados da votação.';
      }
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error = 'Verifique os campos destacados antes de continuar.';
      this.success = '';
      return;
    }
    this.saving = true;
    this.error = '';
    this.success = '';
    const payload = {
      ...this.form.getRawValue(),
      categoriaProjeto: this.form.getRawValue().categoriaProjeto,
      votacaoId: this.votacaoId
    };
    this.candidatosService.create(payload).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/inscricao/sucesso'], {
          queryParams: {
            votacao: this.votacao?.nome
          }
        });
        this.form.reset({
          nome: '',
          descricao: '',
          fotoUrl: '',
          email: '',
          telefone: '',
          empresa: '',
          categoriaProjeto: '',
          nomeProjeto: '',
          participantes: '',
          periodoExecucao: '',
          stakeholders: '',
          orcamento: '',
          ferramentasMetodologias: '',
          resumoProjeto: '',
          solucaoDesenvolvida: '',
          resultadosImpacto: '',
          autorizacaoAudiovisual: false,
          declaracaoVeracidade: false
        });
      },
      error: err => {
        this.saving = false;
        this.error = err?.error?.message || 'Erro ao enviar cadastro.';
      }
    });
  }
  fieldError(controlName) {
    const control = this.form.controls[controlName];
    if (!control || !control.touched || !control.errors) {
      return '';
    }
    const errors = control.errors;
    if (errors['required']) {
      return 'Campo obrigatório.';
    }
    if (errors['requiredTrue']) {
      return 'É necessário aceitar esta condição.';
    }
    if (errors['email']) {
      return 'E-mail inválido.';
    }
    if (errors['maxlength']) {
      return `Máximo de ${errors['maxlength'].requiredLength} caracteres.`;
    }
    if (errors['pattern']) {
      return 'Formato inválido.';
    }
    return 'Campo inválido.';
  }
  static {
    this.ɵfac = function CandidatosPublicPageComponent_Factory(t) {
      return new (t || CandidatosPublicPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_votacoes_service__WEBPACK_IMPORTED_MODULE_0__.VotacoesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_candidatos_service__WEBPACK_IMPORTED_MODULE_1__.CandidatosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CandidatosPublicPageComponent,
      selectors: [["app-candidatos-public"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["loadingTpl", ""], ["class", "pmi-shell", 4, "ngIf", "ngIfElse"], [1, "pmi-shell"], ["class", "hero-card", 4, "ngIf"], ["class", "alert success", 4, "ngIf"], ["class", "alert error", 4, "ngIf"], [1, "content-grid"], [1, "panel-card"], [1, "form-grid"], [1, "field"], ["placeholder", "Seu nome completo", 3, "formControl"], [1, "field-error"], ["type", "email", "placeholder", "voce@email.com", 3, "formControl"], ["placeholder", "(61) 99999-9999", 3, "formControl"], ["placeholder", "Nome da institui\u00E7\u00E3o", 3, "formControl"], [3, "formControl"], ["value", ""], [3, "value"], ["placeholder", "T\u00EDtulo do projeto", 3, "formControl"], [1, "field", "field-wide"], ["placeholder", "https://...", 3, "formControl"], ["rows", "3", 3, "formControl"], ["rows", "2", 3, "formControl"], ["placeholder", "Janeiro/2025 at\u00E9 Maio/2025", 3, "formControl"], ["rows", "4", 3, "formControl"], [1, "panel-card", "sticky-card"], [1, "check-row"], ["type", "checkbox", 3, "formControl"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], [1, "hero-card"], [1, "hero-top"], [1, "hero-logo-wrapper"], ["class", "hero-logo", 3, "src", "alt", 4, "ngIf"], [1, "hero-content"], [1, "hero-badge"], [1, "hero-year"], [1, "hero-subtitle"], [1, "hero-text"], [1, "hero-logo", 3, "src", "alt"], [1, "alert", "success"], [1, "alert", "error"], [1, "loading-state"]],
      template: function CandidatosPublicPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CandidatosPublicPageComponent_div_0_Template, 126, 41, "div", 1)(1, CandidatosPublicPageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const loadingTpl_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective],
      styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: radial-gradient(circle at top, rgba(0, 92, 175, 0.12), transparent 34%), linear-gradient(180deg, #f6f9fc 0%, #eef4f8 100%);\n  color: #17324d;\n  font-family: Inter, Arial, sans-serif;\n}\n\n.pmi-shell[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px 20px 48px;\n}\n\n.hero-card[_ngcontent-%COMP%], .panel-card[_ngcontent-%COMP%], .vote-summary[_ngcontent-%COMP%], .note-box[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(18, 59, 102, 0.08);\n  box-shadow: 0 10px 30px rgba(15, 35, 55, 0.06);\n  border-radius: 24px;\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  padding: 28px;\n  margin-bottom: 20px;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(0, 92, 175, 0.08);\n  color: #005caf;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 0.8fr;\n  gap: 20px;\n  margin-top: 18px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.15;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: clamp(28px, 4vw, 42px);\n}\n\n.hero-subtitle[_ngcontent-%COMP%], .hero-text[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 15px;\n  line-height: 1.65;\n  color: #48607a;\n}\n\n.vote-summary[_ngcontent-%COMP%] {\n  padding: 20px;\n  align-self: start;\n  background: linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%);\n}\n\n.vote-summary-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #005caf;\n  font-weight: 700;\n}\n\n.vote-summary-name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 22px;\n  font-weight: 800;\n}\n\n.vote-summary-meta[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #5b728b;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 16px;\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n\n.alert.success[_ngcontent-%COMP%] {\n  background: rgba(14, 151, 94, 0.1);\n  color: #0e975e;\n  border: 1px solid rgba(14, 151, 94, 0.18);\n}\n\n.alert.error[_ngcontent-%COMP%] {\n  background: rgba(200, 48, 48, 0.08);\n  color: #a61d24;\n  border: 1px solid rgba(200, 48, 48, 0.16);\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 0.75fr;\n  gap: 20px;\n  align-items: start;\n}\n\n.panel-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.sticky-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  margin-top: 18px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.field-wide[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #23415f;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cfdbe8;\n  border-radius: 16px;\n  background: #fff;\n  padding: 12px 14px;\n  font-size: 14px;\n  color: #17324d;\n  outline: none;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #005caf;\n  box-shadow: 0 0 0 4px rgba(0, 92, 175, 0.08);\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n\n.check-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  line-height: 1.5;\n  font-weight: 600;\n}\n\n.check-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-top: 2px;\n  flex: 0 0 auto;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  min-height: 18px;\n  color: #b42318;\n  font-size: 12px;\n}\n\n.primary-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 18px;\n  padding: 14px 16px;\n  border: none;\n  border-radius: 16px;\n  background: linear-gradient(90deg, #005caf 0%, #0e7ad1 100%);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 10px 20px rgba(0, 92, 175, 0.18);\n}\n\n.primary-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.note-box[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 16px;\n  background: #f8fbfe;\n  color: #35506c;\n  line-height: 1.6;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  color: #35506c;\n}\n\n@media (max-width: 980px) {\n  .hero-grid[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sticky-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 720px) {\n  .pmi-shell[_ngcontent-%COMP%] {\n    padding: 18px 14px 28px;\n  }\n  .hero-card[_ngcontent-%COMP%], .panel-card[_ngcontent-%COMP%] {\n    padding: 18px;\n    border-radius: 20px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-card[_ngcontent-%COMP%] {\n  padding: 32px;\n  margin-bottom: 24px;\n}\n\n.hero-top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  align-items: center;\n}\n\n.hero-logo-wrapper[_ngcontent-%COMP%] {\n  width: 180px;\n  min-width: 180px;\n  height: 180px;\n  border-radius: 28px;\n  background: linear-gradient(180deg, #ffffff 0%, #f5f9fd 100%);\n  border: 1px solid rgba(0, 92, 175, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n\n.hero-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(0, 92, 175, 0.08);\n  color: #005caf;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 18px;\n}\n\n.hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(34px, 5vw, 56px);\n  line-height: 1.05;\n  color: #123b66;\n  font-weight: 800;\n}\n\n.hero-year[_ngcontent-%COMP%] {\n  color: #4c6f95;\n}\n\n.hero-subtitle[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 20px;\n  line-height: 1.5;\n  color: #35506c;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #55708b;\n  line-height: 1.7;\n  max-width: 780px;\n}\n\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  margin-top: 22px;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 14px 18px;\n  border-radius: 18px;\n  background: #f7fbff;\n  border: 1px solid rgba(0, 92, 175, 0.08);\n  min-width: 140px;\n}\n\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6b87a3;\n  margin-bottom: 6px;\n}\n\n.meta-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #123b66;\n}\n\n@media (max-width: 900px) {\n  .hero-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-logo-wrapper[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n    min-width: 120px;\n  }\n  .hero-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2FuZGlkYXRvcy1wdWJsaWMvY2FuZGlkYXRvcy1wdWJsaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGdDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzSUFDRTtFQUVGLGNBQUE7RUFDQSxxQ0FBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTs7OztFQUlFLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBOztFQUVFLFNBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtBQUZGOztBQUtBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHlD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MkNBO0VBQ0UsZUFBQTtFQUVBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxjQUFBO0VBRUEsa0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsZ0JBQUE7RUFFQSxjQUFBO0FBN0NGOztBQWdEQTtFQUVFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQTlDRjtFQWlEQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUEvQ0Y7RUFrREE7SUFDRSxlQUFBO0VBaERGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogY2FuZGlkYXRvcy1wdWJsaWMucGFnZS5zY3NzICovXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AsIHJnYmEoMCwgOTIsIDE3NSwgMC4xMiksIHRyYW5zcGFyZW50IDM0JSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjZmOWZjIDAlLCAjZWVmNGY4IDEwMCUpO1xyXG4gIGNvbG9yOiAjMTczMjRkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wbWktc2hlbGwge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMycHggMjBweCA0OHB4O1xyXG59IFxyXG5cclxuLmhlcm8tY2FyZCxcclxuLnBhbmVsLWNhcmQsXHJcbi52b3RlLXN1bW1hcnksXHJcbi5ub3RlLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4LCA1OSwgMTAyLCAwLjA4KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDE1LCAzNSwgNTUsIDAuMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbi5oZXJvLWNhcmQge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmhlcm8tYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA5MiwgMTc1LCAwLjA4KTtcclxuICBjb2xvcjogIzAwNWNhZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZXJvLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjZmciAwLjhmcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjhweCwgNHZ3LCA0MnB4KTtcclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUsXHJcbi5oZXJvLXRleHQge1xyXG4gIG1hcmdpbjogMTJweCAwIDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG4gIGNvbG9yOiAjNDg2MDdhO1xyXG59XHJcblxyXG4udm90ZS1zdW1tYXJ5IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGZiZmUgMCUsICNmZmZmZmYgMTAwJSk7XHJcbn1cclxuXHJcbi52b3RlLXN1bW1hcnktdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDhlbTtcclxuICBjb2xvcjogIzAwNWNhZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udm90ZS1zdW1tYXJ5LW5hbWUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLnZvdGUtc3VtbWFyeS1tZXRhIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgY29sb3I6ICM1YjcyOGI7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWxlcnQuc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMTUxLCA5NCwgMC4xKTtcclxuICBjb2xvcjogIzBlOTc1ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0LCAxNTEsIDk0LCAwLjE4KTtcclxufVxyXG5cclxuLmFsZXJ0LmVycm9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgNDgsIDQ4LCAwLjA4KTtcclxuICBjb2xvcjogI2E2MWQyNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwgNDgsIDQ4LCAwLjE2KTtcclxufVxyXG5cclxuLmNvbnRlbnQtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNmZyIDAuNzVmcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucGFuZWwtY2FyZCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLnN0aWNreS1jYXJkIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZmllbGQtd2lkZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjM0MTVmO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmZGJlODtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzE3MzI0ZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UsIGJveC1zaGFkb3cgLjE1cyBlYXNlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA1Y2FmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDkyLCAxNzUsIDAuMDgpO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNoZWNrLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2hlY2stcm93IGlucHV0IHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4uZmllbGQtZXJyb3Ige1xyXG4gIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNiNDIzMTg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucHJpbWFyeS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwNWNhZiAwJSwgIzBlN2FkMSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCA5MiwgMTc1LCAwLjE4KTtcclxufVxyXG5cclxuLnByaW1hcnktYnV0dG9uOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLm5vdGUtYm94IHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZTtcclxuICBjb2xvcjogIzM1NTA2YztcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4ubG9hZGluZy1zdGF0ZSB7XHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzM1NTA2YztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgLmhlcm8tZ3JpZCxcclxuICAuY29udGVudC1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnN0aWNreS1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAucG1pLXNoZWxsIHtcclxuICAgIHBhZGRpbmc6IDE4cHggMTRweCAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY2FyZCxcclxuICAucGFuZWwtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmhlcm8tY2FyZCB7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uaGVyby10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWxvZ28td3JhcHBlciB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgI2ZmZmZmZiAwJSxcclxuICAgICNmNWY5ZmQgMTAwJVxyXG4gICk7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgOTIsIDE3NSwgMC4wOCk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmhlcm8tbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5oZXJvLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDkyLCAxNzUsIDAuMDgpO1xyXG5cclxuICBjb2xvcjogIzAwNWNhZjtcclxuXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4wOGVtO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uaGVyby1jYXJkIGgxIHtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMzRweCwgNXZ3LCA1NnB4KTtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XHJcblxyXG4gIGNvbG9yOiAjMTIzYjY2O1xyXG5cclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uaGVyby15ZWFyIHtcclxuICBjb2xvcjogIzRjNmY5NTtcclxufVxyXG5cclxuLmhlcm8tc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuXHJcbiAgY29sb3I6ICMzNTUwNmM7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcblxyXG4gIGNvbG9yOiAjNTU3MDhiO1xyXG5cclxuICBsaW5lLWhlaWdodDogMS43O1xyXG5cclxuICBtYXgtd2lkdGg6IDc4MHB4O1xyXG59XHJcblxyXG4uaGVyby1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDE0cHg7XHJcblxyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5tZXRhLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgcGFkZGluZzogMTRweCAxOHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZjdmYmZmO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDkyLCAxNzUsIDAuMDgpO1xyXG5cclxuICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4ubWV0YS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLjA4ZW07XHJcblxyXG4gIGNvbG9yOiAjNmI4N2EzO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5tZXRhLXZhbHVlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICBjb2xvcjogIzEyM2I2NjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcblxyXG4gIC5oZXJvLXRvcCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuaGVyby1sb2dvLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1jYXJkIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_candidatos-public_candidatos-public_page_ts.js.map