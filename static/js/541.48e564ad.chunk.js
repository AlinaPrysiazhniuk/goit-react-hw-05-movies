"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{722:function(e,t,n){n.d(t,{CE:function(){return l},CN:function(){return f},Df:function(){return s},TP:function(){return _},gH:function(){return v}});var c=n(861),r=n(757),a=n.n(r),o=n(294),i="https://api.themoviedb.org/3",u="19d2d0f24e837c8f3ad6ea805c1086b1",s=function(){var e=(0,c.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(e){return o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u))},f=function(e){return o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u))},l=function(e){return o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u))},v=function(e){return o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e))}},541:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var c=n(439),r=n(722),a=n(689),o=n(791),i="Reviews__review__U95z5",u="Reviews__container__qr182",s="Reviews__item__ZDE3l",_="Reviews__author__vIfOC",f="Reviews__content__DQ3d6",l="Reviews__text__lK0Yd",v=n(184),h=function(){var e=(0,a.UO)().movieId,t=(0,o.useState)([]),n=(0,c.Z)(t,2),h=n[0],d=n[1];return(0,o.useEffect)((function(){(0,r.CE)(e).then((function(e){var t=e.data;d(t.results)})).catch((function(e){throw new Error("ooops...")}))}),[e]),(0,v.jsx)("section",{className:i,children:(0,v.jsx)("div",{className:u,children:h.length>0?(0,v.jsx)("ul",{children:h.map((function(e){var t=e.id,n=e.author,c=e.content;return(0,v.jsxs)("li",{className:s,children:[(0,v.jsxs)("h3",{className:_,children:["Author: ",n]}),(0,v.jsx)("p",{className:f,children:c})]},t)}))}):(0,v.jsx)("p",{className:l,children:"We dont have any reviews"})})})}}}]);
//# sourceMappingURL=541.48e564ad.chunk.js.map