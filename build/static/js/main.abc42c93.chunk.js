(this.webpackJsonpcinebot=this.webpackJsonpcinebot||[]).push([[0],{134:function(e){e.exports=JSON.parse('{"aha":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/300px-Aha_OTT_Logo.svg.png","prime":"https://www.citypng.com/public/uploads/preview/-1159629574507zqo9azzc.png","zee5":"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png","hotstar":"https://www.freelogovectors.net/wp-content/uploads/2021/12/disneyplus-hotstar-logo-freelogovectors.net_.png","netflix":"https://www.citypng.com/public/uploads/preview/-11594687246vzsjesy7bd.png","sonyliv":"https://www.adgully.com/img/800/202005/sonyliv.jpg","sunnxt":"https://play-lh.googleusercontent.com/jFi2iC10wQJ42gu-DO2CMeIcN3qcmNQHtY5EBT_wtp4jCIozS4n3Q9pA7ZloDUGHHw","mxplayer":"https://play-lh.googleusercontent.com/fTp32YyE-fi7cdG4V6dDR5OCLsx5bRhgMuCQLXroevnHiZWRY72Cxcseb6vlznTEDQ","jiocinema":"https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png","voot":"https://static.wikia.nocookie.net/logopedia/images/b/b8/Voot_app_icon_2018.png/revision/latest/scale-to-width-down/250?cb=20181014110813","youtube":"https://pngimg.com/uploads/youtube/youtube_PNG102349.png","appletv":"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/9c/f7/8a/9cf78ad4-5443-acc0-3b36-f13d2ad7d64c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png","erosnow":"https://erosnow.com/public/images/logo-192_192.png","reelgood":"https://upload.wikimedia.org/wikipedia/commons/e/ee/Reelgood_app_icon.jpg","vudu":"https://archive.org/download/vudu-logo/VUDU%20Logo.jpeg","itunes":"https://www.freepnglogos.com/uploads/itunes-logo/itunes-store-voucher-png-logo-19.jpg","googleplaymovies":"https://vectorseek.com/wp-content/uploads/2021/12/Google-Play-Movies-TV-Logo-Vector-scaled.jpg","shemaroome":"https://www.digitaltveurope.com/files/2019/05/shemaroo_logo_-_20_May_2019.jpg","hulu":"https://insidebigdata.com/wp-content/uploads/2014/03/Hulu-Logo.png"}')},147:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a(127),n=a(100),i=a(44),r=a(51),l=a(53),c=(a(147),a(148),a(222)),d=a(220),u=a(224),m=a(48),g=a(223),p=a(221),h=a(225),b={english:[" WHEN WAS FILM INVENTED? THE 1890S","THE EARLIEST SHORT FILMS WERE SOMETIMES ACCOMPANIED BY BANDS","THE PANORAMA SHOT WAS DEVELOPED IN 1987","EARLY CAMERAS FILMED AT 16 FRAMES PER SECOND (FPS)","13 FRAMES PER SECOND IS THE SLOWEST SPEED THE HUMAN BRAIN WILL PROCESS IMAGES CONSECUTIVELY"],telugu:["THE FIRST FEATURE-LENGTH FILM WAS PRODUCED IN 1906","Chiranjeevi Is The First Tollywood And South Indian actor To Be Called For Oscar Awards Presentation ","Brahmanandam into Guiness World Records. Brahmanandam, a legendry actor cum comedian of telugu film industry hold a rare record of screening on highest number of films i.e., 857+ in Guinness books. He is the only male actor in in the industry to hold the record","Tollywood's Original Name Was Tollygunje"],hindi:[" Mickey Mouse's original name? Mortimer.","Many filmmakers felt Thomas Edison held a monopoly on film","The first drive-in theater opened in 1933","The largest film market outside the United States is China  "]},f=function(e){var t=b[e];return t[Math.floor(Math.random()*t.length)]},y={start:{response:"Hi! I'm CineBot your movie recommendtion system. May I know your name?",options:[{label:"Hey CiniBot ! This is user_name",gotoKey:"user_name",contronType:"input"}]},startover:{response:"Thanks for using Cinebot, Hope you enjoyed the movie, Let's see what do you like to see next ?",options:[{label:"Recommand a Movie",gotoKey:"recommand_a_movie"}]},user_name:{response:"Hello user_name, can I know your age for better recommanditon?",options:[{label:"My age is user_age !!",gotoKey:"user_age",contronType:"input"}]},user_age:{response:"user_age Sweet, Let's see how can I help?",options:[{label:"Recommand a Movie",gotoKey:"recommand_a_movie"}]},recommand_a_movie:{response:"Movie Today seems Perfect, which languages do you Prefer today ?",options:[{label:"English",gotoKey:"english"},{label:"Hindi",gotoKey:"hindi"},{label:"Telugu",gotoKey:"telugu"}]},english:{response:"Fun Fact, ".concat(f("english")),options:[{label:"Action",gotoKey:"english_action"},{label:"Drama",gotoKey:"english_drama"},{label:"Sci-Fi",gotoKey:"english_scifi"},{label:"Fantasy",gotoKey:"english_fantasy"},{label:"Adventure",gotoKey:"english_adventure"},{label:"Comedy",gotoKey:"english_comdey"},{label:"Romance",gotoKey:"english_romance"},{label:"Crime",gotoKey:"english_crime"},{label:"Animation",gotoKey:"english_animation"},{label:"Thriller",gotoKey:"english_thriller"},{label:"Biography",gotokey:"english_biography"}]},telugu:{response:"Fun Fact, ".concat(f("telugu")),options:[{label:"Action",gotoKey:"telugu_action"},{label:"Drama",gotoKey:"telugu_drama"},{label:"Sci-Fi",gotoKey:"telugu_scifi"},{label:"Fantasy",gotoKey:"telugu_fantasy"},{label:"Adventure",gotoKey:"telugu_adventure"},{label:"Comedy",gotoKey:"telugu_comdey"},{label:"Romance",gotoKey:"telugu_romance"},{label:"Crime",gotoKey:"telugu_crime"},{label:"Thriller",gotoKey:"telugu_thriller"},{label:"Biography",gotokey:"telugu_biography"}]},hindi:{response:"Fun Fact, ".concat(f("hindi")),options:[{label:"Suspense",gotoKey:"hindi_suspense"},{label:"Action",gotoKey:"hindi_action"},{label:"Drama",gotoKey:"hindi_drama"},{label:"Sci-Fi",gotoKey:"hindi_scifi"},{label:"Fantasy",gotoKey:"hindi_fantasy"},{label:"Adventure",gotoKey:"hindi_adventure"},{label:"Comedy",gotoKey:"hindi_comdey"},{label:"Romance",gotoKey:"hindi_romance"},{label:"Crime",gotoKey:"hindi_crime"},{label:"Thriller",gotoKey:"hindi_thriller"},{label:"Biography",gotokey:"hindi_biography"},{label:"Musical",gotoKey:"hindi_musical"}]},english_action:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22action%22"},english_drama:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22drama%22"},english_scifi:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22scifi%22"},english_fantasy:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22fantasy%22"},english_adventure:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22adventure%22"},english_comdey:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22comdey%22"},english_romance:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22romance%22"},english_crime:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22crime%22"},english_animation:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22animation%22"},english_thriller:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22thriller%22"},english_biography:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22biography%22"},telugu_action:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22action%22"},telugu_drama:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22drama%22"},telugu_scifi:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22scifi%22"},telugu_fantasy:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22fantasy%22"},telugu_adventure:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22adventure%22"},telugu_comdey:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22comdey%22"},telugu_romance:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22romance%22"},telugu_crime:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22crime%22"},telugu_thriller:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22thriller%22"},telugu_biography:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22biography%22"},hindi_action:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22action%22"},hindi_drama:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22drama%22"},hindi_scifi:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22scifi%22"},hindi_fantasy:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22fantasy%22"},hindi_adventure:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22adventure%22"},hindi_comdey:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22comdey%22"},hindi_romance:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22romance%22"},hindi_crime:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22crime%22"},hindi_musical:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22musical%22"},hindi_thriller:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22thriller%22"},hindi_biography:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22biography%22"},hindi_suspense:{response:"Great, I have these recommandations for you",options:[],recommandations:"https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22suspense%22"}},j=a(138),v=a(134),_=a(5),x=["actor_name","category","genres","imdb_rating","music_director","ott_paltform","actress_name","certification","director","language","name","year","storyline","posterURL","platforms","platform_links"],O=c.a.Text,T=(c.a.Title,function(e){var t=e.label,a=e.value;return Object(_.jsxs)("div",{style:{display:"flex",flex:1},children:[Object(_.jsx)(O,{style:{display:"flex",flex:.8,justifyContent:"flex-start"},children:t}),Object(_.jsxs)(O,{style:{display:"flex",flex:1,justifyContent:"flex-start"},children:[": ",a]})]})}),w=function(e){var t=e.selectedMovie,a=t.actor_name,o=t.category,s=t.genres,n=t.imdb_rating,i=t.music_director,r=(t.ott_paltform,t.actress_name),l=t.certification,c=t.director,d=(t.language,t.name),u=t.year,m=t.storyline,h=t.posterURL,b=t.platforms,f=t.platform_links,y=(Object(j.a)(t,x),b.split(",")),w=f.split(","),I=y.map((function(e,t){return{platform:e,link:w[t]}}));return console.log("\ud83d\ude80 ~ file: MovieCard.js ~ line 57 ~ makeOttLinks ~ makeOttLinks",I),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(_.jsxs)("div",{children:[Object(_.jsx)(O,{style:{fontSize:"25px",flex:1,justifyContent:"flex-end"},children:d}),Object(_.jsxs)(O,{children:["(",u,")"]})]})}),Object(_.jsxs)("div",{style:{display:"flex",flex:1,margin:10},children:[Object(_.jsx)("div",{style:{display:"flex",flex:.5,backgroundColor:"#eee",alignItems:"center",justifyContent:"center"},children:Object(_.jsx)(p.a,{width:150,src:h,style:{display:"flex",flex:1}})}),Object(_.jsxs)("div",{style:{flex:1,flexDirection:"column",alignItems:"flex-start",padding:16},children:[Object(_.jsx)(T,{label:"Actor Name",value:a}),Object(_.jsx)(T,{label:"Actress Name",value:r}),Object(_.jsx)(T,{label:"Movie Director",value:c}),Object(_.jsx)(T,{label:"Music Director",value:i}),Object(_.jsx)(T,{label:"Genres",value:s}),Object(_.jsx)(T,{label:"Category",value:o}),Object(_.jsx)(T,{label:"IMDB",value:n}),Object(_.jsx)(T,{label:"Certification",value:l})]})]}),Object(_.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"column",margin:5},children:[Object(_.jsx)("div",{style:{display:"flex",flex:.3,flexDirection:"row",justifyContent:"flex-end",padding:3},children:I.map((function(e){var t=e.platform,a=e.link;return Object(_.jsx)("a",{href:a,target:"_blank",children:Object(_.jsx)(g.a,{src:v[t],size:"large",style:{margin:10}},t)})}))}),Object(_.jsxs)("div",{style:{borderLeft:"1px solid black",padding:10},children:[Object(_.jsx)(O,{style:{alignSelf:"flex-start",display:"flex",fontSize:"20px"},children:"Storyline"}),Object(_.jsx)(O,{children:m})]})]})]})},I=function(e,t){return e.filter((function(e){return t>17||(t<=17&&t>=8?"u"==e.certification.toLowerCase()||"ua"==e.certification.toLowerCase():t<=7?"u"==e.certification.toLowerCase():void 0)}))},B=(c.a.Text,d.a.Meta);function C(){var e=Object(o.useState)([{text:y.start.response,isBot:!0}]),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(o.useState)({user_name:"",user_age:""}),b=Object(l.a)(c,2),f=b[0],j=b[1],v=Object(o.useRef)(null),x=Object(o.useState)(y.start),O=Object(l.a)(x,2),T=O[0],C=O[1],S=Object(o.useState)({}),E=Object(l.a)(S,2),k=E[0],K=E[1],G=Object(o.useState)(!1),M=Object(l.a)(G,2),A=M[0],q=M[1],L=Object(o.useRef)(null),R=Object(o.useState)([]),N=Object(l.a)(R,2),D=N[0],F=N[1];Object(o.useEffect)((function(){var e,t;null===(e=L.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}),null===v||void 0===v||null===(t=v.current)||void 0===t||t.focus({cursor:"start"})}),[a]);var H=function(e){fetch(e).then((function(e){return e.json()})).then((function(t){var a=function(e,t,a){var o,s=t.split("?")[1].split("&").map((function(e){var t=e.replace("%22","").split("=");return Object(i.a)({},t[0],t[1].replace("%22",""))})),r=null===(o=s=Object.assign.apply(Object,[{}].concat(Object(n.a)(s))))||void 0===o?void 0:o.genres.toLowerCase(),l=I(e,a);return console.log("Movies after Age Filter",l),r&&(l=l.filter((function(e){if(e.genres.toLowerCase().indexOf(r)>-1)return!0}))),console.log("\ud83d\ude80 ~ file: getFilteredMovies.js ~ line 24 ~ filteredMovies",l),l.sort((function(){return Math.random()-.5}))}(Object.keys(t).map((function(e){return t[e]})),e,f.user_age);F(a)}))},P=function(e){return e.replace("user_name",f.user_name).replace("user_age",f.user_age)},z=function(e,t){e.options.length||H(e.recommandations),C(e),s([].concat(Object(n.a)(a),[{text:t.label,isBot:!1},{text:e.response,isBot:!0}])),window.scrollTo({bottom:0,behavior:"smooth"})},U=function(){q(!A)};return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(d.a,{style:{textAlign:"center"},children:Object(_.jsx)("h1",{children:"CineBot "})}),Object(_.jsx)(u.a,{width:600,open:A,onOk:U,onCancel:U,size:"large",footer:[Object(_.jsx)(m.a,{onClick:U,shape:"round",children:"Back"},"back"),Object(_.jsx)(m.a,{type:"primary",shape:"round",onClick:function(){q(!1),K({}),F([]),C(y.recommand_a_movie),s([{text:y.startover.response,isBot:!0}])},children:"Start Over"},"submit")],children:Object(_.jsx)(w,{selectedMovie:k})}),Object(_.jsxs)("div",{className:"chat",children:[a.map((function(e){var t=e.isBot,a=e.text;return t?Object(_.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(_.jsx)("div",{style:{display:"flex",alignSelf:"flex-end",zIndex:10,margin:5},children:Object(_.jsx)(g.a,{src:Object(_.jsx)(p.a,{src:"https://raw.githubusercontent.com/belvenkat/Cinebot/main/cinebot.jpg",style:{width:32}})})}),Object(_.jsx)("div",{className:"yours messages",children:Object(_.jsx)("div",{className:"message last",children:Object(_.jsx)("div",{children:P(a)})})})]},a):Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:"mine messages",children:Object(_.jsxs)("div",{className:"message last",children:[" ",P(a)]})})},a)})),Object(_.jsx)("div",{style:{justifyContent:"flex-end",alignItems:"flex-end",display:"flex",flexWrap:"wrap",marginLeft:"40%"},children:T.options.map((function(e){return"input"===e.contronType?Object(_.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(_.jsx)(h.a,{placeholder:"type here",className:"user-input",ref:v,style:{textAlign:"center",width:"60%",borderBottomColor:"black",borderBottomWidth:"1px",borderLeft:"none",borderRight:"none",borderTop:"none",outline:"none"},onPressEnter:function(t){j((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(i.a)({},e.gotoKey,t.target.value))})),z(y[e.gotoKey],e)},onChange:function(t){return function(e,t){"user_age"===t.gotoKey?!isNaN(e.target.value)&&e.target.value<=100&&j((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(i.a)({},t.gotoKey,e.target.value))})):j((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(i.a)({},t.gotoKey,e.target.value))}))}(t,e)},value:f[e.gotoKey]},e.gotoKey)},e.gotoKey):Object(_.jsx)(m.a,{shape:"round",style:{margin:10,flex:1},type:"primary",onClick:function(){z(y[e.gotoKey],e)},children:P(e.label)},e.gotoKey)}))})]}),Object(_.jsx)("div",{style:{display:"flex",flexDirection:"row",background:"#ececec",width:500,overflowX:"scroll"},children:D.map((function(e,t){var a=e.posterURL,o=e.name,s=e.year;return Object(_.jsx)(d.a,{onClick:function(){return e=D[t],K(e),void q(!0);var e},style:{margin:5},cover:Object(_.jsx)("img",{style:{width:240,margin:10,height:240},alt:"movie name",src:a}),children:Object(_.jsx)(B,{title:o,description:s})},o)}))}),Object(_.jsx)("div",{ref:L})]})}var S=document.getElementById("root");Object(s.createRoot)(S).render(Object(_.jsx)(o.StrictMode,{children:Object(_.jsx)(C,{})}))}},[[219,1,2]]]);
//# sourceMappingURL=main.abc42c93.chunk.js.map