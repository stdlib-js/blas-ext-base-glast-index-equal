"use strict";var v=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var q=v(function(O,x){
var o=require('@stdlib/blas-ext-base-gfirst-index-equal/dist').ndarray;function f(r,a,e,u,n,i,s){var t;return r<=0?-1:(u+=(r-1)*e,s+=(r-1)*i,e*=-1,i*=-1,t=o(r,a,e,u,n,i,s),t<0?t:r-1-t)}x.exports=f
});var y=v(function(R,c){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=q();function p(r,a,e,u,n){return g(r,a,e,l(r,e),u,n,l(r,n))}c.exports=p
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),I=q();E(d,"ndarray",I);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
