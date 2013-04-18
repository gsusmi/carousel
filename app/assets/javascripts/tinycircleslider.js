(function(b){b.tiny=b.tiny||{};b.tiny.circleslider={interval:false,intervaltime:3500,snaptodots:false,hidedots:true,radius:140,lightbox:false,callback:null};b.fn.tinycircleslider=function(d){var c=b.extend({},b.tiny.circleslider,d);this.each(function(){b(this).data("tcs",new a(b(this),c))});return b.extend(this,{gotoSlide:function(f,e){return this.each(function(){b(this).data("tcs").gotoSlide(f,e)})},stopInterval:function(){return this.each(function(){b(this).data("tcs").stopInterval()})},startInterval:function(){return this.each(function(){b(this).data("tcs").startInterval()})}})};function a(B,h){var s=B,F=s.outerWidth(),D=s.outerHeight(),A=b(".thumb",s)[0],n=b(A).outerWidth(),m=b(A).outerHeight(),H=b(".overview",s),x=H.children(),r={},J=b("a",x),f=b(x[0]).outerWidth(true),y=undefined,w=undefined,o=x.length,q=10,p=0,z=0,v=this;function e(){H.append(b(x[0]).clone());x=H.children()}function G(K){w=setTimeout(function(){v.gotoSlide((x[(z+1)]!==undefined?(z+1):0),true)},(K?50:h.intervaltime))}function k(K){return K*(Math.PI/180)}function c(K){return K*180/Math.PI}function u(){var N=b(".dot",s),Q=N.outerWidth(),K=N.outerHeight(),P=document.createDocumentFragment(),S={},R=0,O={left:0,top:0},L=k(360/o);N.remove();for(var M=o;M--;){R=M+1;S=N.clone();O.top=Math.round(-Math.cos(M*L)*h.radius+(D/2-K/2));O.left=Math.round(Math.sin(M*L)*h.radius+(F/2-Q/2));S.addClass("dot-"+R);S.css(O);S.html("<span>"+R+"</span>");P.appendChild(S[0])}s.append(P);r=b(".dot",s)}this.startInterval=function(K){if(h.interval){G(K)}};this.stopInterval=function(){clearTimeout(w)};this.gotoSlide=function(Q,L){var K=Q*(360/o),P=0,O=0,R=0,N=0,M=0;if(K>q){P=K-q;O=-(q+(360-K))}if(K<q){P=K+(360-q);O=-(q-K)}R=P<Math.abs(O)?P:O;N=Math.ceil(Math.abs(R)/10);M=(R/N)||0;l(M,K,N,L)};function I(K){return K+((K>360)?-360:(K<0)?360:0)}function t(){var K=Math.round(q/(360/o));v.gotoSlide(K)}function l(M,L,N,K){p+=1;var O=I(Math.round(p*M+q));if(p===N&&K){v.startInterval()}j(O,p===N);if(p<N){y=setTimeout(function(){l(M,L,N,K)},50)}else{p=0;q=L}}function E(L){var K={left:L.pageX-s.offset().left-(F/2),top:L.pageY-s.offset().top-(D/2)};q=I(c(Math.atan2(K.left,-K.top)));j(q);return false}function j(L,K){z=Math.round(L*o/360);z=z===o?0:z;H[0].style.left=-(L/360*f*o)+"px";A.style.top=Math.round(-Math.cos(k(L))*h.radius+(D/2-m/2))+"px";A.style.left=Math.round(Math.sin(k(L))*h.radius+(F/2-n/2))+"px";if(typeof h.callback==="function"&&K){h.callback.call(B,x[z],z)}}function g(K){b(document).unbind("mousemove");document.onmouseup=A.onmouseup=null;clearTimeout(y);if(h.snaptodots){if(h.hidedots){r.stop(true,true).fadeOut("slow")}t()}v.startInterval();return false}function i(K){clearTimeout(w);b(document).mousemove(E);document.onmouseup=A.onmouseup=g;if(h.snaptodots&&h.hidedots){r.stop(true,true).fadeIn("slow")}return false}function C(){A.onmousedown=i;s.bind("touchstart",function(){clearTimeout(w);b(this).data("pan",{startX:event.targetTouches[0].screenX,lastX:event.targetTouches[0].screenX,startTime:new Date().getTime(),distance:function(){return Math.round((this.startX-this.lastX))},delta:function(){var K=event.targetTouches[0].screenX,L=Math.round((this.lastX-K));this.lastX=K;return L},duration:function(){return new Date().getTime()-this.startTime}});return false});s.bind("touchmove",function(){var K=b(this).data("pan");q=I(q+Math.round((K.delta()*2)*360/(f*o)));j(q);return false});s.bind("touchend",function(){var K=b(this).data("pan");if(K.distance()===0&&K.duration()<500){s.trigger("click")}v.startInterval();return false});if(J.length>0){s.css({cursor:"pointer"}).click(function(K){if(b(K.target).hasClass("overlay")){if(h.lightbox){b(J[z]).trigger("click")}else{location.href=J[z].href}}return false})}if(h.snaptodots){s.delegate(".dot","click",function(){clearTimeout(w);if(0===p){v.gotoSlide(b(this).text()-1)}v.startInterval()})}}function d(){e();H[0].style.width=f*x.length+"px";if(h.snaptodots){u()}C();v.gotoSlide(0);v.startInterval(true)}d()}}(jQuery));

$(document).ready(function() {
  $('#rotatescroll').tinycircleslider({ snaptodots: true, hidedots: false, interval: true });
});