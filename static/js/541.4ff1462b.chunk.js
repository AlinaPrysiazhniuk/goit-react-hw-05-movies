"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{722:function(e,t,n){n.d(t,{CE:function(){return v},CN:function(){return _},Df:function(){return s},TP:function(){return f},gH:function(){return d}});var r=n(861),c=n(757),a=n.n(c),o=n(294),i="https://api.themoviedb.org/3",u="19d2d0f24e837c8f3ad6ea805c1086b1",s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u))},v=function(e){return o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u))},d=function(e){return o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e))}},541:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),c=n(722),a=n(689),o=n(791),i="Reviews__review__U95z5",u="Reviews__container__qr182",s="Reviews__item__ZDE3l",f="Reviews__author__vIfOC",_="Reviews__content__DQ3d6",v="Reviews__text__lK0Yd",d=n(184),h=function(){var e=(0,a.UO)().movieId,t=(0,o.useState)([]),n=(0,r.Z)(t,2),h=n[0],p=n[1];return(0,o.useEffect)((function(){(0,c.CE)(e).then((function(e){var t=e.data;p(t.results)})).catch((function(e){throw new Error("ooops...")}))}),[e]),(0,d.jsx)("section",{className:i,children:(0,d.jsx)("div",{className:u,children:h.length>0?(0,d.jsx)("ul",{children:h.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,d.jsxs)("li",{className:s,children:[(0,d.jsxs)("h3",{className:f,children:["Author: ",n]}),(0,d.jsx)("p",{className:_,children:r})]},t)}))}):(0,d.jsx)("p",{className:v,children:"We dont have any reviews"})})})}}}]);
//# sourceMappingURL=541.4ff1462b.chunk.js.map