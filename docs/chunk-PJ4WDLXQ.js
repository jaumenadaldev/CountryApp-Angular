import{A as R,B as H,C as j,D as N,E as q,F as G,J,L as K,M as Q,N as $,Q as C,S as W,a as b,b as O,c as I,d as k,e as A,f as _,g as L,h as u,i as P,j as T,k as c,l as f,m as B,n as d,o as i,p as t,q as s,r as x,s as F,t as w,u as o,v,w as p,x as z,y as D,z as M}from"./chunk-XRHWNDIY.js";var h=(()=>{let e=class e{constructor(a){this.http=a,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(a){let r=`${this.apiUrl}/alpha/${a}`;return this.http.get(r).pipe(O(l=>l.length>0?l[0]:null),I(()=>b(null)))}searchCapital(a){let r=`${this.apiUrl}/capital/${a}`;return this.http.get(r).pipe(I(()=>b([])))}searchCountry(a){let r=`${this.apiUrl}/name/${a}`;return this.http.get(r).pipe(I(()=>b([])))}searchRegion(a){let r=`${this.apiUrl}/region/${a}`;return this.http.get(r).pipe(I(()=>b([])))}};e.\u0275fac=function(r){return new(r||e)(L(G))},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var oe=n=>["/countries/by",n];function ae(n,e){n&1&&(i(0,"div",2),o(1,` No hay pa\xEDses para mostrar
`),t())}function ce(n,e){if(n&1&&(i(0,"tr")(1,"td"),o(2),t(),i(3,"td"),o(4),t(),i(5,"td"),s(6,"img",5),t(),i(7,"td"),o(8),t(),i(9,"td"),o(10),t(),i(11,"td"),o(12),D(13,"number"),t(),i(14,"td")(15,"a",6),o(16,"+Info"),t()()()),n&2){let m=e.$implicit,a=e.index;c(2),v(a+1),c(2),p(" ",m.flag," "),c(2),d("src",m.flags.svg,T)("alt",m.name.common),c(2),v(m.name.common),c(2),v(m.capital),c(2),v(M(13,8,m.population)),c(3),d("routerLink",z(10,oe,m.cca3))}}function me(n,e){if(n&1&&(i(0,"table",3)(1,"thead")(2,"tr")(3,"th"),o(4,"#"),t(),i(5,"th"),o(6,"Icon"),t(),i(7,"th"),o(8,"Bandera"),t(),i(9,"th"),o(10,"Nombre"),t(),i(11,"th"),o(12,"Capital"),t(),i(13,"th"),o(14,"Poblaci\xF3n"),t(),s(15,"th"),t()(),i(16,"tbody"),B(17,ce,17,12,"tr",4),t()()),n&2){let m=F();c(17),d("ngForOf",m.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,l){if(r&1&&B(0,ae,2,0,"div",1)(1,me,18,1,"ng-template",null,0,R),r&2){let g=w(2);d("ngIf",l.countries.length===0)("ngIfElse",g)}},dependencies:[H,j,Q,N],styles:["img[_ngcontent-%COMP%]{width:30px}"]});let n=e;return n})();var Y=(()=>{let e=class e{constructor(a){this.countriesService=a,this.countries=[]}searchByCapital(a){this.countriesService.searchCapital(a).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["countries-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Por capital"),t(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return l.searchByCapital(S)}),t()()(),i(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-country-table",3),t()()),r&2&&(c(9),d("countries",l.countries))},dependencies:[C,E],encapsulation:2});let n=e;return n})();var Z=(()=>{let e=class e{constructor(a){this.countriesService=a,this.countries=[]}searchByCountry(a){this.countriesService.searchCountry(a).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["countries-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Por Pa\xEDs"),t(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return l.searchByCountry(S)}),t()()(),i(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-country-table",3),t()()),r&2&&(c(9),d("countries",l.countries))},dependencies:[C,E],encapsulation:2});let n=e;return n})();var ee=(()=>{let e=class e{constructor(a){this.countriesService=a,this.countries=[]}searchByRegion(a){this.countriesService.searchRegion(a).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["countries-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por regi\xF3n",3,"onValue"],[3,"countries"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Por Regi\xF3n"),t(),s(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return l.searchByRegion(S)}),t()()(),i(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-country-table",3),t()()),r&2&&(c(9),d("countries",l.countries))},dependencies:[C,E],encapsulation:2});let n=e;return n})();function le(n,e){n&1&&(i(0,"div",2),o(1,"Espere por favor..."),t())}function se(n,e){if(n&1&&(i(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),o(4,"Pa\xEDs: "),i(5,"strong"),o(6),t()(),s(7,"hr"),t()(),i(8,"div",3)(9,"div",5)(10,"h3"),o(11,"Bandera"),t(),s(12,"img",6),t(),i(13,"div",7)(14,"h3"),o(15,"Informaci\xF3n"),t(),i(16,"ul",8)(17,"li",9)(18,"strong"),o(19,"Pa\xEDs:"),t(),o(20),t(),i(21,"li",9)(22,"strong"),o(23,"Capital:"),t(),o(24),t(),i(25,"li",9)(26,"strong"),o(27,"Regi\xF3n:"),t(),o(28),t(),i(29,"li",9)(30,"strong"),o(31,"Poblaci\xF3n:"),t(),o(32),D(33,"number"),t(),i(34,"li",9)(35,"strong"),o(36,"C\xF3digo:"),t(),o(37),t()()()(),i(38,"div",10)(39,"div",7)(40,"h3"),o(41,"Traducciones"),t(),i(42,"div",11)(43,"div",12),o(44),t(),i(45,"div",12),o(46),t(),i(47,"div",12),o(48),t(),i(49,"div",12),o(50),t(),i(51,"div",12),o(52),t(),i(53,"div",12),o(54),t(),i(55,"div",12),o(56),t()()()()()),n&2){let m=F();c(6),v(m.country.name.common),c(6),d("src",m.country.flags.svg,T)("alt",m.country.name.common),c(8),p(" ",m.country.name.common," "),c(4),p(" ",m.country.capital," "),c(4),p(" ",m.country.region," "),c(4),p(" ",M(33,15,m.country.population)," "),c(5),p(" ",m.country.cca3," "),c(7),p(" ",m.country.translations.spa.common,""),c(2),p(" ",m.country.translations.cym.common,""),c(2),p(" ",m.country.translations.fra.common,""),c(2),p(" ",m.country.translations.deu.common,""),c(2),p(" ",m.country.translations.ita.common,""),c(2),p(" ",m.country.translations.por.common,""),c(2),p(" ",m.country.translations.swe.common,"")}}var te=(()=>{let e=class e{constructor(a,r,l){this.activatedRoute=a,this.router=r,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(k(({id:a})=>this.countriesService.searchCountryByAlphaCode(a))).subscribe(a=>a?this.country=a:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(f(J),f(K),f(h))},e.\u0275cmp=u({type:e,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&B(0,le,2,0,"ng-template",null,0,R)(2,se,57,17,"div",1),r&2){let g=w(1);c(2),d("ngIf",l.country)("ngIfElse",g)}},dependencies:[j,N],encapsulation:2});let n=e;return n})();var pe=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:ee},{path:"by/:id",component:te},{path:"**",redirectTo:"by-capital"}],ie=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=_({imports:[$.forChild(pe),$]});let n=e;return n})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=P({type:e}),e.\u0275inj=_({imports:[q,ie,W]});let n=e;return n})();export{Ue as CountriesModule};