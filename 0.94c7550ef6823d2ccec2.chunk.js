webpackJsonp([0],{Q3Bx:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),i=function(){},u=e("YJuX"),o=e("WfwP"),a=e("xEiR"),r=e("XV4n"),s=e("vOnP"),c=e("ro+A"),p=e("xqoc"),d=e("Un6q"),m=e("UHIZ"),f=e("ADVA"),y=e("+9gp"),h=function(){function l(l,n){this.appApi=l,this.store=n,this.playlists$=this.store.select(y.c),this.currentPlaylist$=this.store.select(y.d),this.isSignedIn$=this.store.select(y.a),console.log("LAZY..")}return l.prototype.ngOnInit=function(){},l.prototype.signInUser=function(){this.appApi.signinUser()},l}(),v=t["\u0275crt"]({encapsulation:2,styles:[["app-user article{padding-bottom:5rem;padding-top:7rem}app-user h2 small{color:gray}app-user .youtube-items-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}"]],data:{}});function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"p",[["class","well lead"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" To view your playlists in youtube, you need to sign in. "])),(l()(),t["\u0275eld"](2,0,null,null,3,"button",[["class","btn btn-lg btn-primary"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInUser()&&t),t},null,null)),(l()(),t["\u0275eld"](3,0,null,null,1,"icon",[["name","google"]],null,null,null,null,null)),t["\u0275did"](4,606208,null,0,a.a,[t.ElementRef,t.Renderer2],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,null,[" Sign In "]))],function(l,n){l(n,4,0,"google")},null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"article",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-navbar",[],null,null,null,r.b,r.a)),t["\u0275did"](2,114688,null,0,s.a,[c.a,p.a],{header:[0,"header"],headerIcon:[1,"headerIcon"]},null),(l()(),t["\u0275and"](16777216,null,null,2,null,g)),t["\u0275did"](4,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275pid"](131072,d.AsyncPipe,[t.ChangeDetectorRef]),(l()(),t["\u0275eld"](6,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](7,212992,null,0,m.o,[m.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){var e=n.component;l(n,2,0,"My Profile - My Playlists","heart"),l(n,4,0,!t["\u0275unv"](n,4,0,t["\u0275nov"](n,5).transform(e.isSignedIn$))),l(n,7,0)},null)}var P=t["\u0275ccf"]("app-user",h,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-user",[],null,null,null,b,v)),t["\u0275did"](1,114688,null,0,h,[p.a,f.m],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),w=e("FK9c"),x=e("1bVF"),I=(e("VWpA"),e("zURE")),R=e("8JWd"),k=function(){function l(l,n,e){this.nowPlaylistService=l,this.userProfile=n,this.store=e}return l.prototype.playSelectedPlaylist=function(l){var n=this;this.userProfile.fetchPlaylistItems(l.id,"").subscribe(function(l){n.store.dispatch(new I.h(l)),n.nowPlaylistService.updateIndexByMedia(l[0].id),n.store.dispatch(new R.c(l[0]))})},l.prototype.queuePlaylist=function(l){var n=this;this.userProfile.fetchPlaylistItems(l.id,"").subscribe(function(l){return n.store.dispatch(new I.h(l)),l})},l.prototype.queueVideo=function(l){this.store.dispatch(new I.g(l))},l.prototype.playVideo=function(l){this.store.dispatch(new R.c(l)),this.store.dispatch(new I.g(l)),this.store.dispatch(new I.m(l))},l}(),C=function(){function l(l,n){this.store=l,this.userPlayerService=n,this.playlists$=this.store.select(function(l){return l.user.playlists})}return l.prototype.ngOnInit=function(){},l.prototype.playSelectedPlaylist=function(l){this.userPlayerService.playSelectedPlaylist(l)},l.prototype.queueSelectedPlaylist=function(l){this.userPlayerService.queuePlaylist(l)},l}(),M=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"youtube-playlist",[["link","/user/"]],null,[[null,"play"],[null,"queue"]],function(l,n,e){var t=!0,i=l.component;return"play"===n&&(t=!1!==i.playSelectedPlaylist(l.context.$implicit)&&t),"queue"===n&&(t=!1!==i.queueSelectedPlaylist(l.context.$implicit)&&t),t},w.b,w.a)),t["\u0275did"](1,573440,null,0,x.a,[],{media:[0,"media"],link:[1,"link"]},{play:"play",queue:"queue"})],function(l,n){l(n,1,0,n.context.$implicit,"/user/")},null)}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"section",[["class","videos-list"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","list-unstyled ux-maker youtube-items-container clearfix"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,S)),t["\u0275did"](3,802816,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pid"](131072,d.AsyncPipe,[t.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,3,0,t["\u0275unv"](n,3,0,t["\u0275nov"](n,4).transform(e.playlists$)))},null)}var F=t["\u0275ccf"]("playlists",C,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"playlists",[],null,null,null,A,M)),t["\u0275did"](1,114688,null,0,C,[f.m,k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),O=e("0nO6"),q=e("qlUW"),N=e("9iV4"),T=e("mNcs"),U=e("mh+E"),V=e("3hxj"),D=function(){function l(l,n){this.authorization=l,this.router=n}return l.prototype.canActivate=function(l,n){return this.checkLogin(n.url)},l.prototype.canActivateChild=function(l,n){return this.canActivate(l,n)},l.prototype.checkLogin=function(l){return!!this.authorization.isSignIn()||(this.router.navigate(["/user"]),!1)},l}(),E=e("6R8F"),L=e("MHhM"),$=e("058G"),j=e("D1tz"),z=e("XY9j"),X=e("gOac"),H=e("PYbN"),J=e("NOEl"),K=e("oFUI"),W=e("KVHi"),Y=e("/HCJ");e.d(n,"UserModuleNgFactory",function(){return Z});var Z=t["\u0275cmf"](i,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,o.a,P,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275a"]]]),t["\u0275mpd"](4608,O.o,O.o,[]),t["\u0275mpd"](4608,q.c,q.c,[t.NgZone]),t["\u0275mpd"](4608,N.k,N.t,[d.DOCUMENT,t.PLATFORM_ID,N.r]),t["\u0275mpd"](4608,N.u,N.u,[N.k,N.s]),t["\u0275mpd"](5120,N.o,N.p,[]),t["\u0275mpd"](4608,N.l,N.l,[N.o,d.DOCUMENT]),t["\u0275mpd"](5120,N.a,function(l,n){return[l,new N.m(n)]},[N.u,N.l]),t["\u0275mpd"](4608,N.q,N.q,[]),t["\u0275mpd"](6144,N.n,null,[N.q]),t["\u0275mpd"](4608,N.j,N.j,[N.n]),t["\u0275mpd"](6144,N.b,null,[N.j]),t["\u0275mpd"](5120,N.g,N.v,[N.b,[2,N.a]]),t["\u0275mpd"](4608,N.c,N.c,[N.g]),t["\u0275mpd"](4608,T.a,T.a,[f.m,U.a,V.a,p.a]),t["\u0275mpd"](4608,D,D,[c.a,m.k]),t["\u0275mpd"](4608,k,k,[E.a,L.a,f.m]),t["\u0275mpd"](512,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](512,O.m,O.m,[]),t["\u0275mpd"](512,O.g,O.g,[]),t["\u0275mpd"](512,m.n,m.n,[[2,m.s],[2,m.k]]),t["\u0275mpd"](512,q.a,q.a,[]),t["\u0275mpd"](512,$.b,$.b,[]),t["\u0275mpd"](512,N.f,N.f,[]),t["\u0275mpd"](512,N.e,N.e,[]),t["\u0275mpd"](512,N.d,N.d,[]),t["\u0275mpd"](512,j.a,j.a,[]),t["\u0275mpd"](512,z.TooltipModule,z.TooltipModule,[]),t["\u0275mpd"](512,X.a,X.a,[]),t["\u0275mpd"](512,H.a,H.a,[]),t["\u0275mpd"](512,J.a,J.a,[]),t["\u0275mpd"](512,i,i,[]),t["\u0275mpd"](256,N.r,"XSRF-TOKEN",[]),t["\u0275mpd"](256,N.s,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,m.i,function(){return[[{path:"playlist/:id",component:K.a,resolve:{videos:W.a,playlist:Y.a}}],[{path:"",component:h,children:[{path:"",redirectTo:"playlists",pathMatch:"full"},{path:"playlists",component:C},{path:"playlist/:id",component:K.a,canActivate:[D],canActivateChild:[D],resolve:{videos:W.a,playlist:Y.a}}]}]]},[])])})}});