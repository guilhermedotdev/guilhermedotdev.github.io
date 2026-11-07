"use strict";
(self["webpackChunkpremia_frontend"] = self["webpackChunkpremia_frontend"] || []).push([["src_app_pages_visualizar-votacao_visualizar-votacao_component_ts"],{

/***/ 5577:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/visualizar-votacao/components/votacao-avaliacao/votacao-avaliacao.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotacaoAvaliacaoComponent: () => (/* binding */ VotacaoAvaliacaoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/visualizar-votacao.service */ 6470);





function VotacaoAvaliacaoComponent_div_0_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A justificativa de cada nota \u00E9 obrigat\u00F3ria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VotacaoAvaliacaoComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.erro);
  }
}
function VotacaoAvaliacaoComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Avalia\u00E7\u00E3o registrada com sucesso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Atribua uma nota de 1 a 5 para apresenta\u00E7\u00E3o do PMO ", candidato_r3.nomeProjeto, ", avaliando de forma global os crit\u00E9rios listados abaixo: ");
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Atribua uma nota de 1 a 5 para apresenta\u00E7\u00E3o do Projeto ", candidato_r3.nomeProjeto, ", avaliando de forma global os crit\u00E9rios listados abaixo: ");
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_div_7_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotacaoAvaliacaoComponent_div_0_div_26_div_7_button_3_Template_button_click_0_listener() {
      const nota_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const criterio_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.atribuirNota(candidato_r3.votacaoCandidatoId, criterio_r6.id, nota_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nota_r5 = ctx.$implicit;
    const criterio_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r1.getNota(candidato_r3.votacaoCandidatoId, criterio_r6.id) === nota_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.votoRegistrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", nota_r5, " ");
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const criterio_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Nota: ", ctx_r1.getNota(candidato_r3.votacaoCandidatoId, criterio_r6.id), "/5 ");
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Justificativa da nota ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function VotacaoAvaliacaoComponent_div_0_div_26_div_7_div_5_Template_textarea_input_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const criterio_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.atribuirJustificativa(candidato_r3.votacaoCandidatoId, criterio_r6.id, $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const criterio_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", "justificativa-" + candidato_r3.votacaoCandidatoId + "-" + criterio_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "justificativa-" + candidato_r3.votacaoCandidatoId + "-" + criterio_r6.id)("disabled", ctx_r1.votoRegistrado)("value", ctx_r1.getJustificativa(candidato_r3.votacaoCandidatoId, criterio_r6.id));
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VotacaoAvaliacaoComponent_div_0_div_26_div_7_button_3_Template, 2, 4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VotacaoAvaliacaoComponent_div_0_div_26_div_7_div_4_Template, 2, 1, "div", 28)(5, VotacaoAvaliacaoComponent_div_0_div_26_div_7_div_5_Template, 6, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const criterio_r6 = ctx.$implicit;
    const candidato_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", criterio_r6.nome, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Nota para " + criterio_r6.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.notas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getNota(candidato_r3.votacaoCandidatoId, criterio_r6.id) !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.publicoAlvo === "AVALIADOR");
  }
}
function VotacaoAvaliacaoComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VotacaoAvaliacaoComponent_div_0_div_26_p_5_Template, 2, 1, "p", 21)(6, VotacaoAvaliacaoComponent_div_0_div_26_p_6_Template, 2, 1, "p", 21)(7, VotacaoAvaliacaoComponent_div_0_div_26_div_7_Template, 6, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const candidato_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", candidato_r3.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", candidato_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](candidato_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.votacao.id === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.votacao.id === 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.votacao.criterios);
  }
}
function VotacaoAvaliacaoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VotacaoAvaliacaoComponent_div_0_p_8_Template, 2, 0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div")(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Encerramento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VotacaoAvaliacaoComponent_div_0_div_22_Template, 2, 1, "div", 8)(23, VotacaoAvaliacaoComponent_div_0_div_23_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 10)(25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VotacaoAvaliacaoComponent_div_0_div_26_Template, 8, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotacaoAvaliacaoComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmarAvaliacao());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.votacao.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.votacao.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.publicoAlvo === "AVALIADOR" ? "Checklist do Avaliador" : "Checklist do P\u00FAblico", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.votacao.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.publicoAlvo === "AVALIADOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 12, ctx_r1.votacao.dataInicio, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 15, ctx_r1.votacao.dataFim, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.erro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.votoRegistrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.votacao.candidatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.todosPreenchidos() || ctx_r1.enviando || ctx_r1.votoRegistrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.enviando ? "Enviando..." : ctx_r1.votoRegistrado ? "Avalia\u00E7\u00E3o registrada" : "Confirmar Avalia\u00E7\u00E3o", " ");
  }
}
class VotacaoAvaliacaoComponent {
  constructor(visualizarVotacaoService) {
    this.visualizarVotacaoService = visualizarVotacaoService;
    this.publicoAlvo = 'PUBLICO';
    this.votoConcluido = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.notas = [1, 2, 3, 4, 5];
    this.enviando = false;
    this.votoRegistrado = false;
    this.erro = '';
    this.avaliacoes = {};
    this.justificativas = {};
  }
  atribuirNota(votacaoCandidatoId, criterioId, nota) {
    if (this.votoRegistrado) {
      return;
    }
    if (!this.avaliacoes[votacaoCandidatoId]) {
      this.avaliacoes[votacaoCandidatoId] = {};
    }
    this.avaliacoes[votacaoCandidatoId][criterioId] = nota;
  }
  getNota(votacaoCandidatoId, criterioId) {
    return this.avaliacoes[votacaoCandidatoId]?.[criterioId];
  }
  atribuirJustificativa(votacaoCandidatoId, criterioId, justificativa) {
    if (this.votoRegistrado) {
      return;
    }
    if (!this.justificativas[votacaoCandidatoId]) {
      this.justificativas[votacaoCandidatoId] = {};
    }
    this.justificativas[votacaoCandidatoId][criterioId] = justificativa;
  }
  getJustificativa(votacaoCandidatoId, criterioId) {
    return this.justificativas[votacaoCandidatoId]?.[criterioId] ?? '';
  }
  todosPreenchidos() {
    if (!this.votacao) {
      return false;
    }
    return this.votacao.candidatos.every(candidato => this.votacao.criterios.every(criterio => {
      const notaPreenchida = this.avaliacoes[candidato.votacaoCandidatoId]?.[criterio.id] !== undefined;
      if (!notaPreenchida) {
        return false;
      }
      if (this.publicoAlvo === 'AVALIADOR') {
        return this.getJustificativa(candidato.votacaoCandidatoId, criterio.id).trim().length > 0;
      }
      return true;
    }));
  }
  confirmarAvaliacao() {
    if (!this.todosPreenchidos() || this.votoRegistrado) {
      return;
    }
    this.enviando = true;
    this.erro = '';
    this.visualizarVotacaoService.votar(this.votacao.id, {
      conselhoId: null,
      itens: this.montarItens()
    }, this.publicoAlvo).subscribe({
      next: () => {
        this.votoRegistrado = true;
        this.enviando = false;
        this.votoConcluido.emit();
      },
      error: error => {
        this.erro = error?.error?.message || 'Erro ao registrar avaliação.';
        this.enviando = false;
      }
    });
  }
  montarItens() {
    return this.votacao.candidatos.map(candidato => ({
      votacaoCandidatoId: candidato.votacaoCandidatoId,
      escolhido: false,
      nota: null,
      criterios: this.votacao.criterios.map(criterio => ({
        criterioId: criterio.id,
        nota: this.avaliacoes[candidato.votacaoCandidatoId][criterio.id],
        justificativa: this.publicoAlvo === 'AVALIADOR' ? this.getJustificativa(candidato.votacaoCandidatoId, criterio.id).trim() : null
      }))
    }));
  }
  static {
    this.ɵfac = function VotacaoAvaliacaoComponent_Factory(t) {
      return new (t || VotacaoAvaliacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_0__.VisualizarVotacaoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VotacaoAvaliacaoComponent,
      selectors: [["app-votacao-avaliacao"]],
      inputs: {
        votacao: "votacao",
        publicoAlvo: "publicoAlvo"
      },
      outputs: {
        votoConcluido: "votoConcluido"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "votacao-container", 4, "ngIf"], [1, "votacao-container"], [1, "votacao-header"], [1, "banner", 3, "src", "alt"], [1, "header-content"], [1, "badge"], ["class", "descricao", 4, "ngIf"], [1, "periodo"], ["class", "alert error", 4, "ngIf"], ["class", "alert success", 4, "ngIf"], [1, "candidatos-grid"], [1, "avaliacao-container"], ["class", "candidato-card", 4, "ngFor", "ngForOf"], [1, "acoes"], [1, "btn-confirmar", 3, "click", "disabled"], [1, "descricao"], [1, "alert", "error"], [1, "alert", "success"], [1, "candidato-card"], [1, "candidato-header"], [1, "foto-candidato", 3, "src", "alt"], ["class", "descricao-avaliacao", 4, "ngIf"], ["class", "criterio-card", 4, "ngFor", "ngForOf"], [1, "descricao-avaliacao"], [1, "criterio-card"], [3, "innerHTML"], ["role", "group", 1, "notas"], ["type", "button", "class", "nota-btn", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "nota-selecionada", 4, "ngIf"], ["class", "justificativa", 4, "ngIf"], ["type", "button", 1, "nota-btn", 3, "click", "disabled"], [1, "nota-selecionada"], [1, "justificativa"], ["rows", "4", "maxlength", "2000", "placeholder", "Explique objetivamente os motivos desta nota.", 3, "input", "id", "disabled", "value"]],
      template: function VotacaoAvaliacaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VotacaoAvaliacaoComponent_div_0_Template, 30, 18, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.votacao);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #f5f7fa;\n  min-height: 100vh;\n  color: #000;\n}\n\n.votacao-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px;\n}\n\n.votacao-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 32px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: contain;\n  margin: 25px 0;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e8f4fd;\n  color: #005f9e;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #005f9e;\n  margin-bottom: 8px;\n}\n\n.descricao[_ngcontent-%COMP%] {\n  color: #000;\n  margin-bottom: 24px;\n}\n\n.periodo[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.periodo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n\n.periodo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.avaliacao-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n  align-items: stretch;\n}\n\n.candidato-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 24px;\n  border: 2px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.candidato-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.foto-candidato[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  object-fit: contain;\n  object-position: center;\n  background: #f2f2f2;\n  border: 5px solid #f2f2f2;\n  margin-bottom: 16px;\n}\n\n.escala-avaliacao[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #005f9e;\n}\n\n.criterio-card[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 18px;\n}\n\n.notas[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.nota-btn[_ngcontent-%COMP%] {\n  min-height: 42px;\n  border: 1px solid #cbd5e1;\n  border-radius: 9px;\n  background: #fff;\n  color: #0f172a;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.nota-btn[_ngcontent-%COMP%]:hover:not(:disabled), .nota-btn.selected[_ngcontent-%COMP%] {\n  border-color: #005f9e;\n  background: #e8f4fd;\n  color: #005f9e;\n}\n\n.nota-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n\n.nota-selecionada[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n\n.justificativa[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.justificativa[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  font-weight: 600;\n}\n\n.justificativa[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #b42318;\n}\n\n.justificativa[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  resize: vertical;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 12px;\n  font: inherit;\n  background: #fff;\n}\n\n.justificativa[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #bfdbfe;\n  border-color: #005f9e;\n}\n\n.acoes[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin-top: 16px;\n  text-align: center;\n}\n\n.btn-confirmar[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #004e82;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.alert[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto 24px;\n  border-radius: 12px;\n  padding: 14px 16px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.alert.error[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #b42318;\n  border: 1px solid #fecdd3;\n}\n\n.alert.success[_ngcontent-%COMP%] {\n  background: #ecfdf3;\n  color: #027a48;\n  border: 1px solid #bbf7d0;\n}\n\n@media (max-width: 1000px) {\n  .avaliacao-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 680px) {\n  .avaliacao-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .votacao-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .notas[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdmlzdWFsaXphci12b3RhY2FvL2NvbXBvbmVudHMvdm90YWNhby1hdmFsaWFjYW8vdm90YWNhby1hdmFsaWFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUVFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxnREFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsMEJBQUE7RUFERjtFQUlBO0lBQ0UsYUFBQTtFQUZGO0VBS0E7SUFDRSxnREFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnZvdGFjYW8tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAzMnB4O1xyXG59XHJcblxyXG4udm90YWNhby1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgbWFyZ2luOiAyNXB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2U4ZjRmZDtcclxuICBjb2xvcjogIzAwNWY5ZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCBoMSB7XHJcbiAgY29sb3I6ICMwMDVmOWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZGVzY3JpY2FvIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucGVyaW9kbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDMycHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucGVyaW9kbyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucGVyaW9kbyBzcGFuIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYXZhbGlhY2FvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uY2FuZGlkYXRvLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMThweDtcclxufVxyXG5cclxuLmNhbmRpZGF0by1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm90by1jYW5kaWRhdG8ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2YyZjJmMjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZXNjYWxhLWF2YWxpYWNhbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMDVmOWU7XHJcbn1cclxuXHJcblxyXG4uY3JpdGVyaW8tY2FyZCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5ub3RhcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLm5vdGEtYnRuIHtcclxuICBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ub3RhLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSxcclxuLm5vdGEtYnRuLnNlbGVjdGVkIHtcclxuICBib3JkZXItY29sb3I6ICMwMDVmOWU7XHJcbiAgYmFja2dyb3VuZDogI2U4ZjRmZDtcclxuICBjb2xvcjogIzAwNWY5ZTtcclxufVxyXG5cclxuLm5vdGEtYnRuOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIG9wYWNpdHk6IC42NTtcclxufVxyXG5cclxuLm5vdGEtc2VsZWNpb25hZGEge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLmp1c3RpZmljYXRpdmEge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5qdXN0aWZpY2F0aXZhIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmp1c3RpZmljYXRpdmEgc3Ryb25nIHtcclxuICBjb2xvcjogI2I0MjMxODtcclxufVxyXG5cclxuLmp1c3RpZmljYXRpdmEgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5qdXN0aWZpY2F0aXZhIHRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAycHggc29saWQgI2JmZGJmZTtcclxuICBib3JkZXItY29sb3I6ICMwMDVmOWU7XHJcbn1cclxuXHJcbi5hY29lcyB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDVmOWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29uZmlybWFyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA0ZTgyO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hbGVydC5lcnJvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjFmMjtcclxuICBjb2xvcjogI2I0MjMxODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmVjZGQzO1xyXG59XHJcblxyXG4uYWxlcnQuc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogI2VjZmRmMztcclxuICBjb2xvcjogIzAyN2E0ODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmF2YWxpYWNhby1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLmF2YWxpYWNhby1jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAudm90YWNhby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5ub3RhcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1669:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/visualizar-votacao/components/votacao-escolha-unica/votacao-escolha-unica.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VotacaoEscolhaUnicaComponent: () => (/* binding */ VotacaoEscolhaUnicaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/visualizar-votacao.service */ 6470);





function VotacaoEscolhaUnicaComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.erro);
  }
}
function VotacaoEscolhaUnicaComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Voto registrado com sucesso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VotacaoEscolhaUnicaComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotacaoEscolhaUnicaComponent_div_0_div_26_Template_div_click_0_listener() {
      const candidato_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.selecionar(candidato_r4.votacaoCandidatoId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const candidato_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r1.candidatoSelecionado === candidato_r4.votacaoCandidatoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.candidatoSelecionado === candidato_r4.votacaoCandidatoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", candidato_r4.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", candidato_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](candidato_r4.nome);
  }
}
function VotacaoEscolhaUnicaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Vota\u00E7\u00E3o de Escolha \u00DAnica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Selecione apenas um candidato para registrar seu voto. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div")(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "In\u00EDcio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Encerramento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VotacaoEscolhaUnicaComponent_div_0_div_23_Template, 2, 1, "div", 8)(24, VotacaoEscolhaUnicaComponent_div_0_div_24_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VotacaoEscolhaUnicaComponent_div_0_div_26_Template, 6, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12)(28, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VotacaoEscolhaUnicaComponent_div_0_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmarVoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.votacao.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r1.votacao.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.votacao.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 10, ctx_r1.votacao.dataInicio, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 13, ctx_r1.votacao.dataFim, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.erro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.votoRegistrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.votacao.candidatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.candidatoSelecionado || ctx_r1.enviando || ctx_r1.votoRegistrado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.enviando ? "Enviando..." : ctx_r1.votoRegistrado ? "Voto registrado" : "Confirmar Voto", " ");
  }
}
class VotacaoEscolhaUnicaComponent {
  constructor(visualizarVotacaoService) {
    this.visualizarVotacaoService = visualizarVotacaoService;
    this.votoConcluido = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.enviando = false;
    this.votoRegistrado = false;
    this.erro = '';
  }
  selecionar(votacaoCandidatoId) {
    if (this.votoRegistrado) {
      return;
    }
    this.candidatoSelecionado = votacaoCandidatoId;
  }
  confirmarVoto() {
    if (!this.candidatoSelecionado || this.votoRegistrado) {
      return;
    }
    this.enviando = true;
    this.erro = '';
    this.visualizarVotacaoService.votar(this.votacao.id, {
      conselhoId: null,
      itens: [{
        votacaoCandidatoId: this.candidatoSelecionado,
        escolhido: true,
        nota: null,
        criterios: []
      }]
    }).subscribe({
      next: () => {
        this.votoRegistrado = true;
        this.enviando = false;
        this.votoConcluido.emit();
      },
      error: error => {
        this.erro = error?.error?.message || 'Erro ao registrar voto.';
        this.enviando = false;
      }
    });
  }
  static {
    this.ɵfac = function VotacaoEscolhaUnicaComponent_Factory(t) {
      return new (t || VotacaoEscolhaUnicaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_0__.VisualizarVotacaoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VotacaoEscolhaUnicaComponent,
      selectors: [["app-votacao-escolha-unica"]],
      inputs: {
        votacao: "votacao"
      },
      outputs: {
        votoConcluido: "votoConcluido"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "votacao-container", 4, "ngIf"], [1, "votacao-container"], [1, "votacao-header"], [1, "banner", 3, "src", "alt"], [1, "header-content"], [1, "badge"], [1, "descricao"], [1, "periodo"], ["class", "alert error", 4, "ngIf"], ["class", "alert success", 4, "ngIf"], [1, "candidatos-grid"], ["class", "candidato-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "acoes"], [1, "btn-confirmar", 3, "click", "disabled"], [1, "alert", "error"], [1, "alert", "success"], [1, "candidato-card", 3, "click"], [1, "radio-container"], ["type", "radio", "name", "candidato", 3, "checked"], [1, "foto-candidato", 3, "src", "alt"]],
      template: function VotacaoEscolhaUnicaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VotacaoEscolhaUnicaComponent_div_0_Template, 30, 16, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.votacao);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #f5f7fa;\n  min-height: 100vh;\n}\n\n.votacao-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px;\n}\n\n.votacao-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 32px;\n}\n\n.banner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 180px;\n  padding: 24px;\n  background: #fff;\n}\n\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n  object-fit: contain;\n  margin: 25px;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e8f4fd;\n  color: #005f9e;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #005f9e;\n  margin-bottom: 8px;\n}\n\n.descricao[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 24px;\n}\n\n.periodo[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.periodo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #888;\n}\n\n.periodo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #000;\n}\n\n.candidatos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}\n\n.candidato-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  cursor: pointer;\n  border: 2px solid #e5e7eb;\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.candidato-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n\n.candidato-card.selected[_ngcontent-%COMP%] {\n  border-color: #005f9e;\n  background: #f0f8ff;\n}\n\n.radio-container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n  margin-bottom: 12px;\n}\n\n.foto-candidato[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 5px solid #f2f2f2;\n  margin-bottom: 16px;\n}\n\n.candidato-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  color: #333;\n}\n\n.acoes[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  text-align: center;\n}\n\n.btn-confirmar[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #004e82;\n}\n\n.btn-confirmar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.alert[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto 24px;\n  border-radius: 12px;\n  padding: 14px 16px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.alert.error[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #b42318;\n  border: 1px solid #fecdd3;\n}\n\n.alert.success[_ngcontent-%COMP%] {\n  background: #ecfdf3;\n  color: #027a48;\n  border: 1px solid #bbf7d0;\n}\n\n@media (max-width: 900px) {\n  .candidatos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .candidatos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .votacao-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdmlzdWFsaXphci12b3RhY2FvL2NvbXBvbmVudHMvdm90YWNhby1lc2NvbGhhLXVuaWNhL3ZvdGFjYW8tZXNjb2xoYS11bmljYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBS0E7RUFDRTtJQUNFLGdEQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSwwQkFBQTtFQUhGO0VBTUE7SUFDRSxhQUFBO0VBSkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udm90YWNhby1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbi52b3RhY2FvLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5iYW5uZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBtYXJnaW46IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2U4ZjRmZDtcclxuICBjb2xvcjogIzAwNWY5ZTtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCBoMSB7XHJcbiAgY29sb3I6ICMwMDVmOWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uZGVzY3JpY2FvIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ucGVyaW9kbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDMycHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucGVyaW9kbyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4ucGVyaW9kbyBzcGFuIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2FuZGlkYXRvcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5jYW5kaWRhdG8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYW5kaWRhdG8tY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAuMDgpO1xyXG59XHJcblxyXG4uY2FuZGlkYXRvLWNhcmQuc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNWY5ZTtcclxuICBiYWNrZ3JvdW5kOiAjZjBmOGZmO1xyXG59XHJcblxyXG4ucmFkaW8tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZm90by1jYW5kaWRhdG8ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjJmMmYyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jYW5kaWRhdG8tY2FyZCBoMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmFjb2VzIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jb25maXJtYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDVmOWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29uZmlybWFyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA0ZTgyO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpcm1hcjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4uYWxlcnQge1xyXG4gIG1heC13aWR0aDogNzIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmFsZXJ0LmVycm9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmMWYyO1xyXG4gIGNvbG9yOiAjYjQyMzE4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNkZDM7XHJcbn1cclxuXHJcbi5hbGVydC5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjZWNmZGYzO1xyXG4gIGNvbG9yOiAjMDI3YTQ4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuY2FuZGlkYXRvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gIC5jYW5kaWRhdG9zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAudm90YWNhby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3353:
/*!**************************************************************************!*\
  !*** ./src/app/pages/visualizar-votacao/visualizar-votacao.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizarVotacaoComponent: () => (/* binding */ VisualizarVotacaoComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 4751);
/* harmony import */ var _components_votacao_escolha_unica_votacao_escolha_unica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/votacao-escolha-unica/votacao-escolha-unica.component */ 1669);
/* harmony import */ var _components_votacao_avaliacao_votacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/votacao-avaliacao/votacao-avaliacao.component */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/visualizar-votacao.service */ 6470);










function VisualizarVotacaoComponent_section_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.erroAcesso, " ");
  }
}
function VisualizarVotacaoComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Acesse a vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Digite o c\u00F3digo alfanum\u00E9rico de 6 caracteres recebido para acessar o checklist de avalia\u00E7\u00E3o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VisualizarVotacaoComponent_section_0_div_9_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VisualizarVotacaoComponent_section_0_Template_form_ngSubmit_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.autenticarVotante());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "C\u00F3digo de vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" PMI-DF Premia \u2022 ", ctx_r1.publicoAlvo === "AVALIADOR" ? "Avalia\u00E7\u00E3o do avaliador" : "Avalia\u00E7\u00E3o do p\u00FAblico", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.erroAcesso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.formCodigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.fieldError());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.autenticando);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.autenticando ? "Validando..." : "Continuar", " ");
  }
}
function VisualizarVotacaoComponent_section_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Carregando vota\u00E7\u00F5es vigentes... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VisualizarVotacaoComponent_section_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.erroVotacoes, " ");
  }
}
function VisualizarVotacaoComponent_section_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nenhuma vota\u00E7\u00E3o vigente est\u00E1 dispon\u00EDvel neste momento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VisualizarVotacaoComponent_section_1_div_13_article_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r4.imagemUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", item_r4.nome);
  }
}
function VisualizarVotacaoComponent_section_1_div_13_article_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "PMI-DF Premia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VisualizarVotacaoComponent_section_1_div_13_article_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.categoriaNome);
  }
}
function VisualizarVotacaoComponent_section_1_div_13_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisualizarVotacaoComponent_section_1_div_13_article_1_Template_article_click_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selecionarVotacao(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VisualizarVotacaoComponent_section_1_div_13_article_1_img_2_Template, 1, 2, "img", 30)(3, VisualizarVotacaoComponent_section_1_div_13_article_1_div_3_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32)(5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, VisualizarVotacaoComponent_section_1_div_13_article_1_p_9_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 34)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisualizarVotacaoComponent_section_1_div_13_article_1_Template_button_click_14_listener($event) {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selecionarVotacao(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Selecionar vota\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r4.imagemUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.tipo === "AVALIACAO" ? "Avalia\u00E7\u00E3o" : "Escolha \u00FAnica", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.categoriaNome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("At\u00E9 ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 6, item_r4.dataFim, "dd/MM/yyyy HH:mm"), "");
  }
}
function VisualizarVotacaoComponent_section_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VisualizarVotacaoComponent_section_1_div_13_article_1_Template, 16, 9, "article", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.votacoesVigentes);
  }
}
function VisualizarVotacaoComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "PMI-DF Premia \u2022 Vota\u00E7\u00F5es vigentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Selecione uma vota\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Escolha abaixo a vota\u00E7\u00E3o em que deseja registrar seu voto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, VisualizarVotacaoComponent_section_1_div_10_Template, 2, 0, "div", 19)(11, VisualizarVotacaoComponent_section_1_div_11_Template, 2, 1, "div", 20)(12, VisualizarVotacaoComponent_section_1_div_12_Template, 2, 0, "div", 21)(13, VisualizarVotacaoComponent_section_1_div_13_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.carregandoVotacoes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.erroVotacoes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.carregandoVotacoes && !ctx_r1.erroVotacoes && ctx_r1.votacoesVigentes.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.votacoesVigentes.length > 0);
  }
}
function VisualizarVotacaoComponent_section_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisualizarVotacaoComponent_section_2_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.voltarParaVotacoes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u2190 Voltar para vota\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function VisualizarVotacaoComponent_section_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Carregando vota\u00E7\u00E3o... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function VisualizarVotacaoComponent_section_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.erroCarregamento, " ");
  }
}
function VisualizarVotacaoComponent_section_2_div_4_app_votacao_escolha_unica_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-votacao-escolha-unica", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("votoConcluido", function VisualizarVotacaoComponent_section_2_div_4_app_votacao_escolha_unica_1_Template_app_votacao_escolha_unica_votoConcluido_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onVotoRegistrado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("votacao", ctx_r1.votacao);
  }
}
function VisualizarVotacaoComponent_section_2_div_4_app_votacao_avaliacao_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-votacao-avaliacao", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("votoConcluido", function VisualizarVotacaoComponent_section_2_div_4_app_votacao_avaliacao_2_Template_app_votacao_avaliacao_votoConcluido_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onVotoRegistrado());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("votacao", ctx_r1.votacao)("publicoAlvo", ctx_r1.publicoAlvo);
  }
}
function VisualizarVotacaoComponent_section_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VisualizarVotacaoComponent_section_2_div_4_app_votacao_escolha_unica_1_Template, 1, 1, "app-votacao-escolha-unica", 41)(2, VisualizarVotacaoComponent_section_2_div_4_app_votacao_avaliacao_2_Template, 1, 2, "app-votacao-avaliacao", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.votacao.tipo === "ESCOLHA_UNICA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.votacao.tipo === "AVALIACAO");
  }
}
function VisualizarVotacaoComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VisualizarVotacaoComponent_section_2_div_1_Template, 3, 0, "div", 38)(2, VisualizarVotacaoComponent_section_2_div_2_Template, 2, 0, "div", 19)(3, VisualizarVotacaoComponent_section_2_div_3_Template, 2, 1, "div", 20)(4, VisualizarVotacaoComponent_section_2_div_4_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.votacaoIdRota);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.carregando);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.erroCarregamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.votacao);
  }
}
function VisualizarVotacaoComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 45)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "PMI-DF Premia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Seu voto foi registrado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Obrigado por participar. Seu voto foi recebido com sucesso. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VisualizarVotacaoComponent_section_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.finalizar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Finalizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class VisualizarVotacaoComponent {
  constructor(fb, route, visualizarVotacaoService) {
    this.fb = fb;
    this.route = route;
    this.visualizarVotacaoService = visualizarVotacaoService;
    this.votacoesVigentes = [];
    this.publicoAlvo = 'PUBLICO';
    this.autenticado = false;
    this.carregando = false;
    this.carregandoVotacoes = false;
    this.autenticando = false;
    this.votoRegistrado = false;
    this.erroAcesso = '';
    this.erroCarregamento = '';
    this.erroVotacoes = '';
    this.formCodigo = this.fb.nonNullable.group({
      codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^[A-Za-z0-9]{6}$/)]]
    });
  }
  ngOnInit() {
    this.publicoAlvo = this.route.snapshot.data['publicoAlvo'] === 'AVALIADOR' ? 'AVALIADOR' : 'PUBLICO';
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (Number.isInteger(idParam) && idParam > 0) {
      this.votacaoIdRota = idParam;
    }
    this.autenticado = this.votanteAutenticado();
    if (this.autenticado) {
      this.iniciarFluxoAutenticado();
    }
  }
  autenticarVotante() {
    if (this.formCodigo.invalid) {
      this.formCodigo.markAllAsTouched();
      return;
    }
    this.autenticando = true;
    this.erroAcesso = '';
    const codigo = this.formCodigo.controls.codigo.value.trim().toUpperCase();
    this.visualizarVotacaoService.autenticarVotante(codigo).subscribe({
      next: response => {
        localStorage.setItem('votante_token', response.token);
        localStorage.setItem('votante_usuario', JSON.stringify(response.usuario));
        localStorage.removeItem('votante_votacao_id');
        this.autenticado = true;
        this.autenticando = false;
        this.iniciarFluxoAutenticado();
      },
      error: error => {
        this.erroAcesso = error?.error?.message || 'Código inválido ou não autorizado.';
        this.autenticando = false;
      }
    });
  }
  carregarVotacoesVigentes() {
    this.carregandoVotacoes = true;
    this.erroVotacoes = '';
    this.votacao = undefined;
    this.votacaoSelecionada = undefined;
    this.visualizarVotacaoService.listarVotacoes().subscribe({
      next: response => {
        this.votacoesVigentes = (response || []).filter(votacao => this.estaVigente(votacao)).sort((a, b) => new Date(a.dataFim).getTime() - new Date(b.dataFim).getTime());
        this.carregandoVotacoes = false;
      },
      error: error => {
        this.erroVotacoes = error?.error?.message || 'Erro ao carregar as votações vigentes.';
        this.carregandoVotacoes = false;
      }
    });
  }
  selecionarVotacao(votacao) {
    this.votacaoSelecionada = votacao;
    localStorage.setItem('votante_votacao_id', String(votacao.id));
    this.carregarVotacao(Number(votacao.id));
  }
  voltarParaVotacoes() {
    this.votacao = undefined;
    this.votacaoSelecionada = undefined;
    this.erroCarregamento = '';
    localStorage.removeItem('votante_votacao_id');
  }
  carregarVotacao(id) {
    this.carregando = true;
    this.erroCarregamento = '';
    this.visualizarVotacaoService.get(id, this.publicoAlvo).subscribe({
      next: response => {
        this.votacao = response;
        this.carregando = false;
      },
      error: error => {
        this.erroCarregamento = error?.error?.message || 'Erro ao carregar a votação.';
        this.carregando = false;
      }
    });
  }
  onVotoRegistrado() {
    this.votoRegistrado = true;
    this.votacao = undefined;
    localStorage.removeItem('votante_votacao_id');
  }
  finalizar() {
    this.limparSessaoVotante();
    this.autenticado = false;
    this.votoRegistrado = false;
    this.votacoesVigentes = [];
    this.votacaoSelecionada = undefined;
    this.formCodigo.reset({
      codigo: ''
    });
  }
  fieldError() {
    const control = this.formCodigo.controls.codigo;
    if (!control.touched || !control.errors) {
      return '';
    }
    if (control.errors['required']) {
      return 'Informe o código de votação.';
    }
    if (control.errors['pattern']) {
      return 'O código deve ter 6 caracteres alfanuméricos.';
    }
    return 'Código inválido.';
  }
  iniciarFluxoAutenticado() {
    if (this.votacaoIdRota) {
      this.carregarVotacao(this.votacaoIdRota);
      return;
    }
    this.carregarVotacoesVigentes();
  }
  estaVigente(votacao) {
    const agora = Date.now();
    const inicio = new Date(votacao.dataInicio).getTime();
    const fim = new Date(votacao.dataFim).getTime();
    if (Number.isNaN(inicio) || Number.isNaN(fim)) {
      return false;
    }
    return inicio <= agora && agora <= fim;
  }
  votanteAutenticado() {
    const token = localStorage.getItem('votante_token');
    if (!token) {
      return false;
    }
    try {
      const decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.jwtDecode)(token);
      const now = Math.floor(Date.now() / 1000);
      if (decoded.exp && decoded.exp < now) {
        this.limparSessaoVotante();
        return false;
      }
      return true;
    } catch {
      this.limparSessaoVotante();
      return false;
    }
  }
  limparSessaoVotante() {
    localStorage.removeItem('votante_token');
    localStorage.removeItem('votante_usuario');
    localStorage.removeItem('votante_votacao_id');
  }
  static {
    this.ɵfac = function VisualizarVotacaoComponent_Factory(t) {
      return new (t || VisualizarVotacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_visualizar_votacao_service__WEBPACK_IMPORTED_MODULE_3__.VisualizarVotacaoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: VisualizarVotacaoComponent,
      selectors: [["app-visualizar-votacao"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [["class", "acesso-shell", 4, "ngIf"], ["class", "selecao-shell", 4, "ngIf"], [4, "ngIf"], ["class", "sucesso-shell", 4, "ngIf"], [1, "acesso-shell"], [1, "acesso-card"], ["src", "assets/img/logo_pmi.png", "alt", "PMI-DF", 1, "logo"], [1, "badge"], ["class", "alert error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["for", "codigo"], ["id", "codigo", "type", "text", "maxlength", "6", "formControlName", "codigo", "placeholder", "ABC123", "autocomplete", "one-time-code"], [1, "field-error"], ["type", "submit", 3, "disabled"], [1, "alert", "error"], [1, "selecao-shell"], [1, "selecao-container"], [1, "selecao-header"], ["src", "assets/img/logo_pmi.png", "alt", "PMI-DF", 1, "logo-selecao"], ["class", "estado", 4, "ngIf"], ["class", "estado erro", 4, "ngIf"], ["class", "estado vazio", 4, "ngIf"], ["class", "votacoes-grid", 4, "ngIf"], [1, "estado"], [1, "estado", "erro"], [1, "estado", "vazio"], [1, "votacoes-grid"], ["class", "votacao-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "votacao-card", 3, "click"], [1, "votacao-imagem-wrapper"], ["class", "votacao-imagem", 3, "src", "alt", 4, "ngIf"], ["class", "imagem-placeholder", 4, "ngIf"], [1, "votacao-card-content"], [1, "tipo-badge"], [1, "periodo-card"], ["type", "button", 3, "click"], [1, "votacao-imagem", 3, "src", "alt"], [1, "imagem-placeholder"], ["class", "votacao-toolbar", 4, "ngIf"], [1, "votacao-toolbar"], ["type", "button", 1, "btn-voltar", 3, "click"], [3, "votacao", "votoConcluido", 4, "ngIf"], [3, "votacao", "publicoAlvo", "votoConcluido", 4, "ngIf"], [3, "votoConcluido", "votacao"], [3, "votoConcluido", "votacao", "publicoAlvo"], [1, "sucesso-shell"], [1, "sucesso-card"], [1, "sucesso-icone"]],
      template: function VisualizarVotacaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VisualizarVotacaoComponent_section_0_Template, 18, 6, "section", 0)(1, VisualizarVotacaoComponent_section_1_Template, 14, 4, "section", 1)(2, VisualizarVotacaoComponent_section_2_Template, 5, 4, "section", 2)(3, VisualizarVotacaoComponent_section_3_Template, 12, 0, "section", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.autenticado && !ctx.votoRegistrado);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.autenticado && !ctx.votacaoSelecionada && !ctx.votacaoIdRota && !ctx.votoRegistrado);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.autenticado && (ctx.votacaoSelecionada || ctx.votacaoIdRota) && !ctx.votoRegistrado);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.votoRegistrado);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _components_votacao_escolha_unica_votacao_escolha_unica_component__WEBPACK_IMPORTED_MODULE_1__.VotacaoEscolhaUnicaComponent, _components_votacao_avaliacao_votacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_2__.VotacaoAvaliacaoComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background: #f5f7fa;\n  min-height: 100vh;\n  color: #1f2937;\n}\n\n.acesso-shell[_ngcontent-%COMP%], .sucesso-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n\n.acesso-card[_ngcontent-%COMP%], .sucesso-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  background: #fff;\n  border-radius: 22px;\n  padding: 36px;\n  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.1);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 170px;\n  margin: 0 auto 24px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #e8f4fd;\n  color: #005f9e;\n  padding: 8px 16px;\n  border-radius: 999px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n.acesso-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .selecao-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .sucesso-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #005f9e;\n  margin: 0 0 8px;\n}\n\n.acesso-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .selecao-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sucesso-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d1d5db;\n  border-radius: 12px;\n  padding: 14px 16px;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  text-align: center;\n  background: #fff;\n  color: #111827;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #005f9e;\n  box-shadow: 0 0 0 3px rgba(0, 95, 158, 0.12);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #005f9e;\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 14px 20px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #004e82;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n\n.alert.error[_ngcontent-%COMP%], .estado.erro[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #b42318;\n  border: 1px solid #fecdd3;\n  border-radius: 12px;\n  padding: 12px 14px;\n  margin-bottom: 18px;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  min-height: 18px;\n  color: #b42318;\n  font-size: 13px;\n}\n\n.estado[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 40px auto;\n  background: #fff;\n  border-radius: 16px;\n  padding: 18px;\n  text-align: center;\n  color: #333;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.estado.vazio[_ngcontent-%COMP%] {\n  color: #667085;\n}\n\n.selecao-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 40px 24px;\n}\n\n.selecao-container[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  margin: 0 auto;\n}\n\n.selecao-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.logo-selecao[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 165px;\n  margin: 0 auto 24px;\n}\n\n.votacoes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}\n\n.votacao-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.07);\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n}\n\n.votacao-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #86c7ea;\n  box-shadow: 0 12px 30px rgba(0, 95, 158, 0.12);\n}\n\n.votacao-imagem-wrapper[_ngcontent-%COMP%] {\n  height: 180px;\n  background: #f8fafc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.votacao-imagem[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.imagem-placeholder[_ngcontent-%COMP%] {\n  color: #005f9e;\n  font-size: 22px;\n  font-weight: 800;\n}\n\n.votacao-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.tipo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #eff8ff;\n  color: #005f9e;\n  border-radius: 999px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n\n.votacao-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #1f2937;\n  font-size: 21px;\n}\n\n.votacao-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #667085;\n  min-height: 24px;\n  margin: 0 0 16px;\n}\n\n.periodo-card[_ngcontent-%COMP%] {\n  color: #475467;\n  font-size: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #eaecf0;\n}\n\n.votacao-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.votacao-toolbar[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 24px 32px 0;\n}\n\n.btn-voltar[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 16px;\n  background: #fff;\n  color: #005f9e;\n  border: 1px solid #b9dff4;\n}\n\n.btn-voltar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eef8fd;\n}\n\n.sucesso-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sucesso-icone[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  background: #ecfdf3;\n  color: #039855;\n  border: 6px solid #d1fadf;\n  font-size: 42px;\n  font-weight: 800;\n}\n\n.sucesso-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\n@media (max-width: 900px) {\n  .votacoes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .votacoes-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acesso-card[_ngcontent-%COMP%], .sucesso-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .votacao-toolbar[_ngcontent-%COMP%] {\n    padding: 20px 20px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdmlzdWFsaXphci12b3RhY2FvL3Zpc3VhbGl6YXItdm90YWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOztFQUVFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7O0VBR0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7O0VBR0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLDZFQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQUY7RUFHQTs7SUFFRSxrQkFBQTtFQURGO0VBSUE7SUFDRSxvQkFBQTtFQUZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBjb2xvcjogIzFmMjkzNztcclxufVxyXG5cclxuLmFjZXNzby1zaGVsbCxcclxuLnN1Y2Vzc28tc2hlbGwge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uYWNlc3NvLWNhcmQsXHJcbi5zdWNlc3NvLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDM0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxNzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNHB4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZThmNGZkO1xyXG4gIGNvbG9yOiAjMDA1ZjllO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmFjZXNzby1jYXJkIGgxLFxyXG4uc2VsZWNhby1oZWFkZXIgaDEsXHJcbi5zdWNlc3NvLWNhcmQgaDEge1xyXG4gIGNvbG9yOiAjMDA1ZjllO1xyXG4gIG1hcmdpbjogMCAwIDhweDtcclxufVxyXG5cclxuLmFjZXNzby1jYXJkIHAsXHJcbi5zZWxlY2FvLWhlYWRlciBwLFxyXG4uc3VjZXNzby1jYXJkIHAge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbjogMCAwIDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA1ZjllO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDk1LCAxNTgsIDAuMTIpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogIzAwNWY5ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA0ZTgyO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IC41NTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYWxlcnQuZXJyb3IsXHJcbi5lc3RhZG8uZXJybyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjFmMjtcclxuICBjb2xvcjogI2I0MjMxODtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmVjZGQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5maWVsZC1lcnJvciB7XHJcbiAgbWluLWhlaWdodDogMThweDtcclxuICBjb2xvcjogI2I0MjMxODtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5lc3RhZG8ge1xyXG4gIG1heC13aWR0aDogNzIwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLmVzdGFkby52YXppbyB7XHJcbiAgY29sb3I6ICM2NjcwODU7XHJcbn1cclxuXHJcbi5zZWxlY2FvLXNoZWxsIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiA0MHB4IDI0cHg7XHJcbn1cclxuXHJcbi5zZWxlY2FvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IG1pbigxMTgwcHgsIDEwMCUpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2VsZWNhby1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4ubG9nby1zZWxlY2FvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDE2NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI0cHg7XHJcbn1cclxuXHJcbi52b3RhY29lcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDVweCAyMnB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLCBib3gtc2hhZG93IC4ycyBlYXNlLCBib3JkZXItY29sb3IgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICBib3JkZXItY29sb3I6ICM4NmM3ZWE7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgwLCA5NSwgMTU4LCAwLjEyKTtcclxufVxyXG5cclxuLnZvdGFjYW8taW1hZ2VtLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnZvdGFjYW8taW1hZ2VtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmltYWdlbS1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDVmOWU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLnRpcG8tYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZWZmOGZmO1xyXG4gIGNvbG9yOiAjMDA1ZjllO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQgaDIge1xyXG4gIG1hcmdpbjogMCAwIDhweDtcclxuICBjb2xvcjogIzFmMjkzNztcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQgcCB7XHJcbiAgY29sb3I6ICM2NjcwODU7XHJcbiAgbWluLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcblxyXG4ucGVyaW9kby1jYXJkIHtcclxuICBjb2xvcjogIzQ3NTQ2NztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVjZjA7XHJcbn1cclxuXHJcbi52b3RhY2FvLWNhcmQgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udm90YWNhby10b29sYmFyIHtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyNHB4IDMycHggMDtcclxufVxyXG5cclxuLmJ0bi12b2x0YXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogIzAwNWY5ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjlkZmY0O1xyXG59XHJcblxyXG4uYnRuLXZvbHRhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogI2VlZjhmZDtcclxufVxyXG5cclxuLnN1Y2Vzc28tY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VjZXNzby1pY29uZSB7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZWNmZGYzO1xyXG4gIGNvbG9yOiAjMDM5ODU1O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICNkMWZhZGY7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zdWNlc3NvLWNhcmQgYnV0dG9uIHtcclxuICBtaW4td2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAudm90YWNvZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAudm90YWNvZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5hY2Vzc28tY2FyZCxcclxuICAuc3VjZXNzby1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDI4cHggMjJweDtcclxuICB9XHJcblxyXG4gIC52b3RhY2FvLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6470:
/*!********************************************************!*\
  !*** ./src/app/services/visualizar-votacao.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualizarVotacaoService: () => (/* binding */ VisualizarVotacaoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/api-base.service */ 8669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class VisualizarVotacaoService extends _core_api_base_service__WEBPACK_IMPORTED_MODULE_0__.ApiBaseService {
  get(id, publicoAlvo) {
    return this.http.get(`${this.baseUrl}/voto/${id}/visualizacao/${publicoAlvo}`);
  }
  listarVotacoes() {
    const token = localStorage.getItem('votante_token');
    if (!token) {
      return this.http.get(`${this.baseUrl}/votacoes`);
    }
    return this.http.get(`${this.baseUrl}/votacoes`, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }
  autenticarVotante(codigo) {
    return this.http.post(`${this.baseUrl}/auth/votante`, {
      codigo
    });
  }
  votar(votacaoId, payload, publicoAlvo = 'PUBLICO') {
    return this.http.post(`${this.baseUrl}/voto/${votacaoId}/votos/${publicoAlvo}`, payload);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵVisualizarVotacaoService_BaseFactory;
      return function VisualizarVotacaoService_Factory(t) {
        return (ɵVisualizarVotacaoService_BaseFactory || (ɵVisualizarVotacaoService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](VisualizarVotacaoService)))(t || VisualizarVotacaoService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: VisualizarVotacaoService,
      factory: VisualizarVotacaoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_visualizar-votacao_visualizar-votacao_component_ts.js.map