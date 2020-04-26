!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=142)}([function(e,t,r){const n=r(22),{MAX_LENGTH:o,MAX_SAFE_INTEGER:s}=r(21),{re:i,t:a}=r(15),{compareIdentifiers:c}=r(40);class u{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>o)throw new TypeError(`version is longer than ${o} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?i[a.LOOSE]:i[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],o=e.prerelease[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],o=e.build[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}e.exports=u},function(e,t,r){const n=r(28),{MAX_LENGTH:o,MAX_SAFE_INTEGER:s}=r(27),{re:i,t:a}=r(17),{compareIdentifiers:c}=r(51);class u{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>o)throw new TypeError(`version is longer than ${o} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?i[a.LOOSE]:i[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],o=e.prerelease[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],o=e.build[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}e.exports=u},function(e,t,r){const n=r(33),{MAX_LENGTH:o,MAX_SAFE_INTEGER:s}=r(32),{re:i,t:a}=r(19),{compareIdentifiers:c}=r(61);class u{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>o)throw new TypeError(`version is longer than ${o} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?i[a.LOOSE]:i[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],o=e.prerelease[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],o=e.build[t];if(n("prerelease compare",t,r,o),void 0===r&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===r)return-1;if(r!==o)return c(r,o)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}e.exports=u},function(e,t,r){const n=r(0);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},function(e,t,r){class n{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?a[c.HYPHENRANGELOOSE]:a[c.HYPHENRANGE];e=e.replace(r,S(this.options.includePrerelease)),s("hyphen replace",e),e=e.replace(a[c.COMPARATORTRIM],u),s("comparator trim",e,a[c.COMPARATORTRIM]),e=(e=(e=e.replace(a[c.TILDETRIM],l)).replace(a[c.CARETTRIM],p)).split(/\s+/).join(" ");const n=t?a[c.COMPARATORLOOSE]:a[c.COMPARATOR];return e.split(" ").map(e=>f(e,this.options)).join(" ").split(/\s+/).map(e=>v(e,this.options)).filter(this.options.loose?e=>!!e.match(n):()=>!0).map(e=>new o(e,this.options))}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some(r=>h(r,t)&&e.set.some(e=>h(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new i(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(R(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const o=r(25),s=r(22),i=r(0),{re:a,t:c,comparatorTrimReplace:u,tildeTrimReplace:l,caretTrimReplace:p}=r(15),h=(e,t)=>{let r=!0;const n=e.slice();let o=n.pop();for(;r&&n.length;)r=n.every(e=>o.intersects(e,t)),o=n.pop();return r},f=(e,t)=>(s("comp",e,t),e=T(e,t),s("caret",e),e=E(e,t),s("tildes",e),e=O(e,t),s("xrange",e),e=N(e,t),s("stars",e),e),d=e=>!e||"x"===e.toLowerCase()||"*"===e,E=(e,t)=>e.trim().split(/\s+/).map(e=>_(e,t)).join(" "),_=(e,t)=>{const r=t.loose?a[c.TILDELOOSE]:a[c.TILDE];return e.replace(r,(t,r,n,o,i)=>{let a;return s("tilde",e,t,r,n,o,i),d(r)?a="":d(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:d(o)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(s("replaceTilde pr",i),a=`>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${o} <${r}.${+n+1}.0-0`,s("tilde return",a),a})},T=(e,t)=>e.trim().split(/\s+/).map(e=>m(e,t)).join(" "),m=(e,t)=>{s("caret",e,t);const r=t.loose?a[c.CARETLOOSE]:a[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,o,i,a)=>{let c;return s("caret",e,t,r,o,i,a),d(r)?c="":d(o)?c=`>=${r}.0.0${n} <${+r+1}.0.0-0`:d(i)?c="0"===r?`>=${r}.${o}.0${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.0${n} <${+r+1}.0.0-0`:a?(s("replaceCaret pr",a),c="0"===r?"0"===o?`>=${r}.${o}.${i}-${a} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}-${a} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i}-${a} <${+r+1}.0.0-0`):(s("no pr"),c="0"===r?"0"===o?`>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i} <${+r+1}.0.0-0`),s("caret return",c),c})},O=(e,t)=>(s("replaceXRanges",e,t),e.split(/\s+/).map(e=>g(e,t)).join(" ")),g=(e,t)=>{e=e.trim();const r=t.loose?a[c.XRANGELOOSE]:a[c.XRANGE];return e.replace(r,(r,n,o,i,a,c)=>{s("xRange",e,r,n,o,i,a,c);const u=d(o),l=u||d(i),p=l||d(a),h=p;return"="===n&&h&&(n=""),c=t.includePrerelease?"-0":"",u?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&h?(l&&(i=0),a=0,">"===n?(n=">=",l?(o=+o+1,i=0,a=0):(i=+i+1,a=0)):"<="===n&&(n="<",l?o=+o+1:i=+i+1),"<"===n&&(c="-0"),r=`${n+o}.${i}.${a}${c}`):l?r=`>=${o}.0.0${c} <${+o+1}.0.0-0`:p&&(r=`>=${o}.${i}.0${c} <${o}.${+i+1}.0-0`),s("xRange return",r),r})},N=(e,t)=>(s("replaceStars",e,t),e.trim().replace(a[c.STAR],"")),v=(e,t)=>(s("replaceGTE0",e,t),e.trim().replace(a[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),S=e=>(t,r,n,o,s,i,a,c,u,l,p,h,f)=>`${r=d(n)?"":d(o)?`>=${n}.0.0${e?"-0":""}`:d(s)?`>=${n}.${o}.0${e?"-0":""}`:i?">="+r:`>=${r}${e?"-0":""}`} ${c=d(u)?"":d(l)?`<${+u+1}.0.0-0`:d(p)?`<${u}.${+l+1}.0-0`:h?`<=${u}.${l}.${p}-${h}`:e?`<${u}.${l}.${+p+1}-0`:"<="+c}`.trim(),R=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(s(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},function(e,t,r){const n=r(1);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},function(e,t,r){class n{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?a[c.HYPHENRANGELOOSE]:a[c.HYPHENRANGE];e=e.replace(r,S(this.options.includePrerelease)),s("hyphen replace",e),e=e.replace(a[c.COMPARATORTRIM],u),s("comparator trim",e,a[c.COMPARATORTRIM]),e=(e=(e=e.replace(a[c.TILDETRIM],l)).replace(a[c.CARETTRIM],p)).split(/\s+/).join(" ");const n=t?a[c.COMPARATORLOOSE]:a[c.COMPARATOR];return e.split(" ").map(e=>f(e,this.options)).join(" ").split(/\s+/).map(e=>v(e,this.options)).filter(this.options.loose?e=>!!e.match(n):()=>!0).map(e=>new o(e,this.options))}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some(r=>h(r,t)&&e.set.some(e=>h(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new i(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(R(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const o=r(30),s=r(28),i=r(1),{re:a,t:c,comparatorTrimReplace:u,tildeTrimReplace:l,caretTrimReplace:p}=r(17),h=(e,t)=>{let r=!0;const n=e.slice();let o=n.pop();for(;r&&n.length;)r=n.every(e=>o.intersects(e,t)),o=n.pop();return r},f=(e,t)=>(s("comp",e,t),e=T(e,t),s("caret",e),e=E(e,t),s("tildes",e),e=O(e,t),s("xrange",e),e=N(e,t),s("stars",e),e),d=e=>!e||"x"===e.toLowerCase()||"*"===e,E=(e,t)=>e.trim().split(/\s+/).map(e=>_(e,t)).join(" "),_=(e,t)=>{const r=t.loose?a[c.TILDELOOSE]:a[c.TILDE];return e.replace(r,(t,r,n,o,i)=>{let a;return s("tilde",e,t,r,n,o,i),d(r)?a="":d(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:d(o)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(s("replaceTilde pr",i),a=`>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${o} <${r}.${+n+1}.0-0`,s("tilde return",a),a})},T=(e,t)=>e.trim().split(/\s+/).map(e=>m(e,t)).join(" "),m=(e,t)=>{s("caret",e,t);const r=t.loose?a[c.CARETLOOSE]:a[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,o,i,a)=>{let c;return s("caret",e,t,r,o,i,a),d(r)?c="":d(o)?c=`>=${r}.0.0${n} <${+r+1}.0.0-0`:d(i)?c="0"===r?`>=${r}.${o}.0${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.0${n} <${+r+1}.0.0-0`:a?(s("replaceCaret pr",a),c="0"===r?"0"===o?`>=${r}.${o}.${i}-${a} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}-${a} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i}-${a} <${+r+1}.0.0-0`):(s("no pr"),c="0"===r?"0"===o?`>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i} <${+r+1}.0.0-0`),s("caret return",c),c})},O=(e,t)=>(s("replaceXRanges",e,t),e.split(/\s+/).map(e=>g(e,t)).join(" ")),g=(e,t)=>{e=e.trim();const r=t.loose?a[c.XRANGELOOSE]:a[c.XRANGE];return e.replace(r,(r,n,o,i,a,c)=>{s("xRange",e,r,n,o,i,a,c);const u=d(o),l=u||d(i),p=l||d(a),h=p;return"="===n&&h&&(n=""),c=t.includePrerelease?"-0":"",u?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&h?(l&&(i=0),a=0,">"===n?(n=">=",l?(o=+o+1,i=0,a=0):(i=+i+1,a=0)):"<="===n&&(n="<",l?o=+o+1:i=+i+1),"<"===n&&(c="-0"),r=`${n+o}.${i}.${a}${c}`):l?r=`>=${o}.0.0${c} <${+o+1}.0.0-0`:p&&(r=`>=${o}.${i}.0${c} <${o}.${+i+1}.0-0`),s("xRange return",r),r})},N=(e,t)=>(s("replaceStars",e,t),e.trim().replace(a[c.STAR],"")),v=(e,t)=>(s("replaceGTE0",e,t),e.trim().replace(a[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),S=e=>(t,r,n,o,s,i,a,c,u,l,p,h,f)=>`${r=d(n)?"":d(o)?`>=${n}.0.0${e?"-0":""}`:d(s)?`>=${n}.${o}.0${e?"-0":""}`:i?">="+r:`>=${r}${e?"-0":""}`} ${c=d(u)?"":d(l)?`<${+u+1}.0.0-0`:d(p)?`<${u}.${+l+1}.0-0`:h?`<=${u}.${l}.${p}-${h}`:e?`<${u}.${l}.${+p+1}-0`:"<="+c}`.trim(),R=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(s(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},function(e,t,r){class n{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?a[c.HYPHENRANGELOOSE]:a[c.HYPHENRANGE];e=e.replace(r,S(this.options.includePrerelease)),s("hyphen replace",e),e=e.replace(a[c.COMPARATORTRIM],u),s("comparator trim",e,a[c.COMPARATORTRIM]),e=(e=(e=e.replace(a[c.TILDETRIM],l)).replace(a[c.CARETTRIM],p)).split(/\s+/).join(" ");const n=t?a[c.COMPARATORLOOSE]:a[c.COMPARATOR];return e.split(" ").map(e=>f(e,this.options)).join(" ").split(/\s+/).map(e=>v(e,this.options)).filter(this.options.loose?e=>!!e.match(n):()=>!0).map(e=>new o(e,this.options))}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some(r=>h(r,t)&&e.set.some(e=>h(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new i(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(R(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const o=r(35),s=r(33),i=r(2),{re:a,t:c,comparatorTrimReplace:u,tildeTrimReplace:l,caretTrimReplace:p}=r(19),h=(e,t)=>{let r=!0;const n=e.slice();let o=n.pop();for(;r&&n.length;)r=n.every(e=>o.intersects(e,t)),o=n.pop();return r},f=(e,t)=>(s("comp",e,t),e=T(e,t),s("caret",e),e=E(e,t),s("tildes",e),e=O(e,t),s("xrange",e),e=N(e,t),s("stars",e),e),d=e=>!e||"x"===e.toLowerCase()||"*"===e,E=(e,t)=>e.trim().split(/\s+/).map(e=>_(e,t)).join(" "),_=(e,t)=>{const r=t.loose?a[c.TILDELOOSE]:a[c.TILDE];return e.replace(r,(t,r,n,o,i)=>{let a;return s("tilde",e,t,r,n,o,i),d(r)?a="":d(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:d(o)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(s("replaceTilde pr",i),a=`>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${o} <${r}.${+n+1}.0-0`,s("tilde return",a),a})},T=(e,t)=>e.trim().split(/\s+/).map(e=>m(e,t)).join(" "),m=(e,t)=>{s("caret",e,t);const r=t.loose?a[c.CARETLOOSE]:a[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,o,i,a)=>{let c;return s("caret",e,t,r,o,i,a),d(r)?c="":d(o)?c=`>=${r}.0.0${n} <${+r+1}.0.0-0`:d(i)?c="0"===r?`>=${r}.${o}.0${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.0${n} <${+r+1}.0.0-0`:a?(s("replaceCaret pr",a),c="0"===r?"0"===o?`>=${r}.${o}.${i}-${a} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}-${a} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i}-${a} <${+r+1}.0.0-0`):(s("no pr"),c="0"===r?"0"===o?`>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0`:`>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0`:`>=${r}.${o}.${i} <${+r+1}.0.0-0`),s("caret return",c),c})},O=(e,t)=>(s("replaceXRanges",e,t),e.split(/\s+/).map(e=>g(e,t)).join(" ")),g=(e,t)=>{e=e.trim();const r=t.loose?a[c.XRANGELOOSE]:a[c.XRANGE];return e.replace(r,(r,n,o,i,a,c)=>{s("xRange",e,r,n,o,i,a,c);const u=d(o),l=u||d(i),p=l||d(a),h=p;return"="===n&&h&&(n=""),c=t.includePrerelease?"-0":"",u?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&h?(l&&(i=0),a=0,">"===n?(n=">=",l?(o=+o+1,i=0,a=0):(i=+i+1,a=0)):"<="===n&&(n="<",l?o=+o+1:i=+i+1),"<"===n&&(c="-0"),r=`${n+o}.${i}.${a}${c}`):l?r=`>=${o}.0.0${c} <${+o+1}.0.0-0`:p&&(r=`>=${o}.${i}.0${c} <${o}.${+i+1}.0-0`),s("xRange return",r),r})},N=(e,t)=>(s("replaceStars",e,t),e.trim().replace(a[c.STAR],"")),v=(e,t)=>(s("replaceGTE0",e,t),e.trim().replace(a[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),S=e=>(t,r,n,o,s,i,a,c,u,l,p,h,f)=>`${r=d(n)?"":d(o)?`>=${n}.0.0${e?"-0":""}`:d(s)?`>=${n}.${o}.0${e?"-0":""}`:i?">="+r:`>=${r}${e?"-0":""}`} ${c=d(u)?"":d(l)?`<${+u+1}.0.0-0`:d(p)?`<${u}.${+l+1}.0-0`:h?`<=${u}.${l}.${p}-${h}`:e?`<${u}.${l}.${+p+1}-0`:"<="+c}`.trim(),R=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(s(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(114)),n(r(115)),n(r(116)),n(r(274)),n(r(275)),n(r(117)),n(r(118)),n(r(119)),n(r(121)),n(r(122)),n(r(276)),n(r(277)),n(r(120));var o=r(59);t.Context=o.Context;const s=r(124);t.context=s.ContextAPI.getInstance();const i=r(279);t.trace=i.TraceAPI.getInstance();const a=r(280);t.metrics=a.MetricsAPI.getInstance();const c=r(281);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(91)),n(r(92)),n(r(93)),n(r(209)),n(r(210)),n(r(94)),n(r(95)),n(r(96)),n(r(98)),n(r(99)),n(r(211)),n(r(212)),n(r(97));var o=r(49);t.Context=o.Context;const s=r(101);t.context=s.ContextAPI.getInstance();const i=r(214);t.trace=i.TraceAPI.getInstance();const a=r(215);t.metrics=a.MetricsAPI.getInstance();const c=r(216);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(69)),n(r(70)),n(r(71)),n(r(144)),n(r(145)),n(r(72)),n(r(73)),n(r(74)),n(r(76)),n(r(77)),n(r(146)),n(r(147)),n(r(75));var o=r(38);t.Context=o.Context;const s=r(79);t.context=s.ContextAPI.getInstance();const i=r(149);t.trace=i.TraceAPI.getInstance();const a=r(150);t.metrics=a.MetricsAPI.getInstance();const c=r(151);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(282)),n(r(126)),n(r(283)),n(r(125)),n(r(288)),n(r(60)),n(r(289)),n(r(290)),n(r(291)),n(r(127)),n(r(293)),n(r(319)),n(r(320)),n(r(131)),n(r(128)),n(r(321)),n(r(322))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(217)),n(r(103)),n(r(218)),n(r(102)),n(r(223)),n(r(50)),n(r(224)),n(r(225)),n(r(226)),n(r(104)),n(r(228)),n(r(254)),n(r(255)),n(r(108)),n(r(105)),n(r(256)),n(r(257))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(152)),n(r(81)),n(r(153)),n(r(80)),n(r(158)),n(r(39)),n(r(159)),n(r(160)),n(r(161)),n(r(82)),n(r(163)),n(r(189)),n(r(190)),n(r(86)),n(r(83)),n(r(191)),n(r(192))},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(21),o=r(22),s=(t=e.exports={}).re=[],i=t.src=[],a=t.t={};let c=0;const u=(e,t,r)=>{const n=c++;o(n,t),a[e]=n,i[n]=t,s[n]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),u("FULL",`^${i[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),u("LOOSE",`^${i[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",i[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),u("XRANGEIDENTIFIER",i[a.NUMERICIDENTIFIER]+"|x|X|\\*"),u("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),u("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),u("COERCERTL",i[a.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,r){const{MAX_LENGTH:n}=r(21),{re:o,t:s}=r(15),i=r(0);e.exports=(e,t)=>{if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?o[s.LOOSE]:o[s.FULL]).test(e))return null;try{return new i(e,t)}catch(e){return null}}},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(27),o=r(28),s=(t=e.exports={}).re=[],i=t.src=[],a=t.t={};let c=0;const u=(e,t,r)=>{const n=c++;o(n,t),a[e]=n,i[n]=t,s[n]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),u("FULL",`^${i[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),u("LOOSE",`^${i[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",i[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),u("XRANGEIDENTIFIER",i[a.NUMERICIDENTIFIER]+"|x|X|\\*"),u("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),u("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),u("COERCERTL",i[a.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,r){const{MAX_LENGTH:n}=r(27),{re:o,t:s}=r(17),i=r(1);e.exports=(e,t)=>{if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?o[s.LOOSE]:o[s.FULL]).test(e))return null;try{return new i(e,t)}catch(e){return null}}},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(32),o=r(33),s=(t=e.exports={}).re=[],i=t.src=[],a=t.t={};let c=0;const u=(e,t,r)=>{const n=c++;o(n,t),a[e]=n,i[n]=t,s[n]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),u("FULL",`^${i[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),u("LOOSE",`^${i[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",i[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),u("XRANGEIDENTIFIER",i[a.NUMERICIDENTIFIER]+"|x|X|\\*"),u("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),u("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),u("COERCERTL",i[a.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,r){const{MAX_LENGTH:n}=r(32),{re:o,t:s}=r(19),i=r(2);e.exports=(e,t)=>{if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?o[s.LOOSE]:o[s.FULL]).test(e))return null;try{return new i(e,t)}catch(e){return null}}},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){(function(t){const r="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(23))},function(e,t){var r,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],l=!1,p=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function E(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||l||a(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=E,o.addListener=E,o.once=E,o.off=E,o.removeListener=E,o.removeAllListeners=E,o.emit=E,o.prependListener=E,o.prependOnceListener=E,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>n(e,t,r)>0},function(e,t,r){const n=Symbol("SemVer ANY");class o{static get ANY(){return n}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof o){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?s[i.COMPARATORLOOSE]:s[i.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof o))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new l(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new l(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),c=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||s&&i||c||u}}e.exports=o;const{re:s,t:i}=r(15),a=r(85),c=r(22),u=r(0),l=r(4)},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){(function(t){const r="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(23))},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>n(e,t,r)>0},function(e,t,r){const n=Symbol("SemVer ANY");class o{static get ANY(){return n}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof o){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?s[i.COMPARATORLOOSE]:s[i.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof o))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new l(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new l(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),c=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||s&&i||c||u}}e.exports=o;const{re:s,t:i}=r(17),a=r(107),c=r(28),u=r(1),l=r(6)},function(e,t,r){const n=r(6);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){(function(t){const r="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(23))},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>n(e,t,r)>0},function(e,t,r){const n=Symbol("SemVer ANY");class o{static get ANY(){return n}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof o){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?s[i.COMPARATORLOOSE]:s[i.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof o))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new l(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new l(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),s=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),c=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||s&&i||c||u}}e.exports=o;const{re:s,t:i}=r(19),a=r(130),c=r(33),u=r(2),l=r(8)},function(e,t,r){const n=r(8);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(143)),n(r(194)),n(r(203)),n(r(204)),n(r(205)),n(r(206)),n(r(87))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(78)),n(r(148))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(38);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const o=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function s(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(o)||void 0}t.getActiveSpan=s,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(o,t)},t.getParentSpanContext=function(e){var t;return(null===(t=s(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t){const r=/^[0-9]+$/,n=(e,t)=>{const n=r.test(e),o=r.test(t);return n&&o&&(e=+e,t=+t),e===t?0:n&&!o?-1:o&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>0===n(e,t,r)},function(e,t,r){const n=r(0);e.exports=(e,t,r)=>{const o=new n(e,r),s=new n(t,r);return o.compare(s)||o.compareBuild(s)}},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>n(e,t,r)<0},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>n(e,t,r)>=0},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>n(e,t,r)<=0},function(e,t,r){const n=r(0),o=r(25),{ANY:s}=o,i=r(4),a=r(26),c=r(24),u=r(43),l=r(45),p=r(44);e.exports=(e,t,r,h)=>{let f,d,E,_,T;switch(e=new n(e,h),t=new i(t,h),r){case">":f=c,d=l,E=u,_=">",T=">=";break;case"<":f=u,d=p,E=c,_="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,h))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let i=null,a=null;if(n.forEach(e=>{e.semver===s&&(e=new o(">=0.0.0")),i=i||e,a=a||e,f(e.semver,i.semver,h)?i=e:E(e.semver,a.semver,h)&&(a=e)}),i.operator===_||i.operator===T)return!1;if((!a.operator||a.operator===_)&&d(e,a.semver))return!1;if(a.operator===T&&E(e,a.semver))return!1}return!0}},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return(o?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),i="/"===o(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),s=n(r.split("/")),i=Math.min(o.length,s.length),a=i,c=0;c<i;c++)if(o[c]!==s[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return(u=u.concat(s.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,s=0,i=e.length-1;i>=0;--i){var a=e.charCodeAt(i);if(47!==a)-1===n&&(o=!1,n=i+1),46===a?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){r=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(23))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(199)),n(r(200))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(100)),n(r(213))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(49);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const o=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function s(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(o)||void 0}t.getActiveSpan=s,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(o,t)},t.getParentSpanContext=function(e){var t;return(null===(t=s(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t){const r=/^[0-9]+$/,n=(e,t)=>{const n=r.test(e),o=r.test(t);return n&&o&&(e=+e,t=+t),e===t?0:n&&!o?-1:o&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>0===n(e,t,r)},function(e,t,r){const n=r(1);e.exports=(e,t,r)=>{const o=new n(e,r),s=new n(t,r);return o.compare(s)||o.compareBuild(s)}},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>n(e,t,r)<0},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>n(e,t,r)>=0},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>n(e,t,r)<=0},function(e,t,r){const n=r(1),o=r(30),{ANY:s}=o,i=r(6),a=r(31),c=r(29),u=r(54),l=r(56),p=r(55);e.exports=(e,t,r,h)=>{let f,d,E,_,T;switch(e=new n(e,h),t=new i(t,h),r){case">":f=c,d=l,E=u,_=">",T=">=";break;case"<":f=u,d=p,E=c,_="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,h))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let i=null,a=null;if(n.forEach(e=>{e.semver===s&&(e=new o(">=0.0.0")),i=i||e,a=a||e,f(e.semver,i.semver,h)?i=e:E(e.semver,a.semver,h)&&(a=e)}),i.operator===_||i.operator===T)return!1;if((!a.operator||a.operator===_)&&d(e,a.semver))return!1;if(a.operator===T&&E(e,a.semver))return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(264)),n(r(265))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(123)),n(r(278))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(59);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const o=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function s(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(o)||void 0}t.getActiveSpan=s,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(o,t)},t.getParentSpanContext=function(e){var t;return(null===(t=s(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t){const r=/^[0-9]+$/,n=(e,t)=>{const n=r.test(e),o=r.test(t);return n&&o&&(e=+e,t=+t),e===t?0:n&&!o?-1:o&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>0===n(e,t,r)},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>{const o=new n(e,r),s=new n(t,r);return o.compare(s)||o.compareBuild(s)}},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>n(e,t,r)<0},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>n(e,t,r)>=0},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>n(e,t,r)<=0},function(e,t,r){const n=r(2),o=r(35),{ANY:s}=o,i=r(8),a=r(36),c=r(34),u=r(64),l=r(66),p=r(65);e.exports=(e,t,r,h)=>{let f,d,E,_,T;switch(e=new n(e,h),t=new i(t,h),r){case">":f=c,d=l,E=u,_=">",T=">=";break;case"<":f=u,d=p,E=c,_="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,h))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let i=null,a=null;if(n.forEach(e=>{e.semver===s&&(e=new o(">=0.0.0")),i=i||e,a=a||e,f(e.semver,i.semver,h)?i=e:E(e.semver,a.semver,h)&&(a=e)}),i.operator===_||i.operator===T)return!1;if((!a.operator||a.operator===_)&&d(e,a.semver))return!1;if(a.operator===T&&E(e,a.semver))return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(332)),n(r(333))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class o{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=o;class s extends o{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=s;class i extends o{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends o{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u;class l{setCallback(e){}}t.NoopBoundObserver=l,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new s(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_BOUND_OBSERVER=new l,t.NOOP_OBSERVER_METRIC=new a(t.NOOP_BOUND_OBSERVER)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(72);class o{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=o,t.NOOP_METER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(75);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const o={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class s{constructor(e=o){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=s,t.NOOP_SPAN=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(74);class o{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=o,t.NOOP_TRACER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(76);class o{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=o,t.NOOP_TRACER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(38);class o{constructor(){this._contextManager=new n.NoopContextManager}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalContextManager(e){return this._contextManager=e,e}active(){return this._contextManager.active()}with(e,t){return this._contextManager.with(e,t)}bind(e,t=this.active()){return this._contextManager.bind(e,t)}}t.ContextAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(154)),n(r(155)),n(r(156)),n(r(157))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(162);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const o=t.slice(0,r),s=t.slice(r+1,t.length);n.validateKey(o)&&n.validateValue(s)&&e.set(o,s)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>0!==n(e,t,r)},function(e,t,r){const n=r(41),o=r(84),s=r(24),i=r(44),a=r(43),c=r(45);e.exports=(e,t,r,u)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,u);case"!=":return o(e,r,u);case">":return s(e,r,u);case">=":return i(e,r,u);case"<":return a(e,r,u);case"<=":return c(e,r,u);default:throw new TypeError("Invalid operator: "+t)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(14);t.Span=class{constructor(e,t,r,s,i,a=[],c=o.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=s,this.links=a,this.startTime=o.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),o.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=o.hrTime()),this.events.push({name:e,attributes:t,time:o.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=o.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=o.timeInputToHrTime(e),this._duration=o.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}toReadableSpan(){return this}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(208)),n(r(259)),n(r(268)),n(r(269)),n(r(270)),n(r(271)),n(r(109))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class o{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=o;class s extends o{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=s;class i extends o{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends o{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u;class l{setCallback(e){}}t.NoopBoundObserver=l,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new s(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_BOUND_OBSERVER=new l,t.NOOP_OBSERVER_METRIC=new a(t.NOOP_BOUND_OBSERVER)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(94);class o{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=o,t.NOOP_METER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(97);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const o={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class s{constructor(e=o){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=s,t.NOOP_SPAN=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(96);class o{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=o,t.NOOP_TRACER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(98);class o{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=o,t.NOOP_TRACER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(49);class o{constructor(){this._contextManager=new n.NoopContextManager}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalContextManager(e){return this._contextManager=e,e}active(){return this._contextManager.active()}with(e,t){return this._contextManager.with(e,t)}bind(e,t=this.active()){return this._contextManager.bind(e,t)}}t.ContextAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(219)),n(r(220)),n(r(221)),n(r(222))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(227);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const o=t.slice(0,r),s=t.slice(r+1,t.length);n.validateKey(o)&&n.validateValue(s)&&e.set(o,s)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>0!==n(e,t,r)},function(e,t,r){const n=r(52),o=r(106),s=r(29),i=r(55),a=r(54),c=r(56);e.exports=(e,t,r,u)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,u);case"!=":return o(e,r,u);case">":return s(e,r,u);case">=":return i(e,r,u);case"<":return a(e,r,u);case"<=":return c(e,r,u);default:throw new TypeError("Invalid operator: "+t)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(13);t.Span=class{constructor(e,t,r,s,i,a=[],c=o.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=s,this.links=a,this.startTime=o.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),o.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=o.hrTime()),this.events.push({name:e,attributes:t,time:o.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=o.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=o.timeInputToHrTime(e),this._duration=o.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}toReadableSpan(){return this}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(13);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.StackContextManager=class{constructor(){this._enabled=!1,this._currentContext=n.Context.ROOT_CONTEXT}_bindFunction(e,t=n.Context.ROOT_CONTEXT){const r=this,o=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(o,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),o}active(){return this._currentContext}bind(e,t=n.Context.ROOT_CONTEXT){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):e}disable(){return this._currentContext=n.Context.ROOT_CONTEXT,this._enabled=!1,this}enable(){return this._enabled||(this._enabled=!0,this._currentContext=n.Context.ROOT_CONTEXT),this}with(e,t){const r=this._currentContext;this._currentContext=e||n.Context.ROOT_CONTEXT;try{return t()}catch(e){throw e}finally{this._currentContext=r}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONNECT_END="connectEnd",e.CONNECT_START="connectStart",e.DOM_COMPLETE="domComplete",e.DOM_CONTENT_LOADED_EVENT_END="domContentLoadedEventEnd",e.DOM_CONTENT_LOADED_EVENT_START="domContentLoadedEventStart",e.DOM_INTERACTIVE="domInteractive",e.DOMAIN_LOOKUP_END="domainLookupEnd",e.DOMAIN_LOOKUP_START="domainLookupStart",e.FETCH_START="fetchStart",e.LOAD_EVENT_END="loadEventEnd",e.LOAD_EVENT_START="loadEventStart",e.REDIRECT_END="redirectEnd",e.REDIRECT_START="redirectStart",e.REQUEST_START="requestStart",e.RESPONSE_END="responseEnd",e.RESPONSE_START="responseStart",e.SECURE_CONNECTION_START="secureConnectionStart",e.UNLOAD_EVENT_END="unloadEventEnd",e.UNLOAD_EVENT_START="unloadEventStart"}(t.PerformanceTimingNames||(t.PerformanceTimingNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class o{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=o;class s extends o{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=s;class i extends o{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends o{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u;class l{setCallback(e){}}t.NoopBoundObserver=l,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new s(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_BOUND_OBSERVER=new l,t.NOOP_OBSERVER_METRIC=new a(t.NOOP_BOUND_OBSERVER)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(117);class o{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=o,t.NOOP_METER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(120);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const o={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class s{constructor(e=o){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=s,t.NOOP_SPAN=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(119);class o{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=o,t.NOOP_TRACER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(121);class o{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=o,t.NOOP_TRACER_PROVIDER=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(59);class o{constructor(){this._contextManager=new n.NoopContextManager}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalContextManager(e){return this._contextManager=e,e}active(){return this._contextManager.active()}with(e,t){return this._contextManager.with(e,t)}bind(e,t=this.active()){return this._contextManager.bind(e,t)}}t.ContextAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(284)),n(r(285)),n(r(286)),n(r(287))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(292);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const o=t.slice(0,r),s=t.slice(r+1,t.length);n.validateKey(o)&&n.validateValue(s)&&e.set(o,s)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>0!==n(e,t,r)},function(e,t,r){const n=r(62),o=r(129),s=r(34),i=r(65),a=r(64),c=r(66);e.exports=(e,t,r,u)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,u);case"!=":return o(e,r,u);case">":return s(e,r,u);case">=":return i(e,r,u);case"<":return a(e,r,u);case"<=":return c(e,r,u);default:throw new TypeError("Invalid operator: "+t)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(325)),n(r(327)),n(r(336)),n(r(337)),n(r(338)),n(r(339)),n(r(133))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(12);t.Span=class{constructor(e,t,r,s,i,a=[],c=o.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=s,this.links=a,this.startTime=o.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),o.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=o.hrTime()),this.events.push({name:e,attributes:t,time:o.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=o.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=o.timeInputToHrTime(e),this._duration=o.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}toReadableSpan(){return this}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(12);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.StackContextManager=class{constructor(){this._enabled=!1,this._currentContext=n.Context.ROOT_CONTEXT}_bindFunction(e,t=n.Context.ROOT_CONTEXT){const r=this,o=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(o,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),o}active(){return this._currentContext}bind(e,t=n.Context.ROOT_CONTEXT){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):e}disable(){return this._currentContext=n.Context.ROOT_CONTEXT,this._enabled=!1,this}enable(){return this._enabled||(this._enabled=!0,this._currentContext=n.Context.ROOT_CONTEXT),this}with(e,t){const r=this._currentContext;this._currentContext=e||n.Context.ROOT_CONTEXT;try{return t()}catch(e){throw e}finally{this._currentContext=r}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONNECT_END="connectEnd",e.CONNECT_START="connectStart",e.DOM_COMPLETE="domComplete",e.DOM_CONTENT_LOADED_EVENT_END="domContentLoadedEventEnd",e.DOM_CONTENT_LOADED_EVENT_START="domContentLoadedEventStart",e.DOM_INTERACTIVE="domInteractive",e.DOMAIN_LOOKUP_END="domainLookupEnd",e.DOMAIN_LOOKUP_START="domainLookupStart",e.FETCH_START="fetchStart",e.LOAD_EVENT_END="loadEventEnd",e.LOAD_EVENT_START="loadEventStart",e.REDIRECT_END="redirectEnd",e.REDIRECT_START="redirectStart",e.REQUEST_START="requestStart",e.RESPONSE_END="responseEnd",e.RESPONSE_START="responseStart",e.SECURE_CONNECTION_START="secureConnectionStart",e.UNLOAD_EVENT_END="unloadEventEnd",e.UNLOAD_EVENT_START="unloadEventStart"}(t.PerformanceTimingNames||(t.PerformanceTimingNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(207)),n(r(112)),n(r(113)),n(r(272))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(273))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(343)),r(348)},function(e,t,r){"use strict";r.r(t);var n=r(37),o=r(139),s=r(140),i=r(141);const a=new o.WebTracerProvider({plugins:[new s.DocumentLoad]});a.addSpanProcessor(new n.SimpleSpanProcessor(new n.ConsoleSpanExporter)),a.register({contextManager:new i.ZoneContextManager});a.getTracer("frontend");window.addEventListener("load",prepareClickEvent)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(14),s=r(87),i=r(193);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new o.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):o.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=o.randomSpanId();let u,l;i&&o.isValid(i)?(u=i.traceId,l=i.traceState):u=o.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new o.NoRecordingSpan(p);const h=new s.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return h.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),h}getCurrentSpan(){const e=n.context.active();return o.getActiveSpan(e)}withSpan(e,t){return n.context.with(o.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?o.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(78);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(77);class o{constructor(){this._tracerProvider=n.NOOP_TRACER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalTracerProvider(e){return this._tracerProvider=e,e}getTracerProvider(){return this._tracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}}t.TraceAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(73);class o{constructor(){this._meterProvider=n.NOOP_METER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalMeterProvider(e){return this._meterProvider=e,e}getMeterProvider(){return this._meterProvider}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}}t.MetricsAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(69),o=r(70),s=r(71),i=r(79).ContextAPI.getInstance();class a{constructor(){this._propagator=o.NOOP_HTTP_TEXT_PROPAGATOR}static getInstance(){return this._instance||(this._instance=new a),this._instance}setGlobalPropagator(e){return this._propagator=e,e}inject(e,t=s.defaultSetter,r=i.active()){return this._propagator.inject(r,e,t)}extract(e,t=n.defaultGetter,r=i.active()){return this._propagator.extract(r,e,t)}}t.PropagationAPI=a},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(80);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(82),o=Math.pow(10,9);function s(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*o]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=s(i()),r=s("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>o&&(c-=o,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):s(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=o),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*o+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,o=new Uint8Array(16);function s(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let o=0;for(let s=0;s<e.length;s++){let i=e[s]>>>4&15;t[o++]=i>9?i+r:i+n,i=15&e[s],t[o++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(o),s(o.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(o),s(o.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),o=parseInt(t,16);r+=String.fromCharCode(o)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(39);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const s=/^[0-9a-f]{32}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return s.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,n){const s=o.getParentSpanContext(e);s&&c(s.traceId)&&u(s.spanId)&&(n(r,t.X_B3_TRACE_ID,s.traceId),n(r,t.X_B3_SPAN_ID,s.spanId),void 0!==s.traceFlags&&n(r,t.X_B3_SAMPLED,Number(s.traceFlags)))}extract(e,r,s){const i=s(r,t.X_B3_TRACE_ID),a=s(r,t.X_B3_SPAN_ID),l=s(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,h=Array.isArray(a)?a[0]:a,f=Array.isArray(l)?l[0]:l;return"string"!=typeof p||"string"!=typeof h?e:c(p)&&u(h)?o.setExtractedSpanContext(e,{traceId:p,spanId:h,isRemote:!0,traceFlags:isNaN(Number(f))?n.TraceFlags.NONE:Number(f)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(81);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(83),s=r(39);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,o){const i=s.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;o(r,t.TRACE_PARENT_HEADER,a),i.traceState&&o(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new o.TraceState("string"==typeof e?e:void 0)}return s.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),o=/^[ -~]{0,255}[!-~]$/,s=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return o.test(e)&&!s.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(164),o=r(47);t.BasePlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,this._internalFilesExports=this._loadInternalFilesExports(),n&&(this._config=n),this.patch()}disable(){this.unpatch()}_loadInternalFilesExports(){if(!this._internalFilesList)return{};if(!this.version||!this.moduleName||!this._basedir)return this._logger.debug("loadInternalFiles failed because one of the required fields was missing: moduleName=%s, version=%s, basedir=%s",this.moduleName,this.version,this._basedir),{};let e={};return this._logger.debug("loadInternalFiles %o",this._internalFilesList),Object.keys(this._internalFilesList).forEach(t=>{this._loadInternalModule(t,e)}),0===Object.keys(e).length&&this._logger.debug("No internal files could be loaded for %s@%s",this.moduleName,this.version),e}_loadInternalModule(e,t){n.satisfies(this.version,e)&&(Object.keys(t).length>0&&this._logger.warn("Plugin for %s@%s, has overlap version range (%s) for internal files: %o",this.moduleName,this.version,e,this._internalFilesList),this._requireInternalFiles(this._internalFilesList[e],this._basedir,t))}_requireInternalFiles(e,t,n){e&&Object.keys(e).forEach(s=>{try{this._logger.debug("loading File %s",e[s]),n[s]=r(188)(o.join(t,e[s]))}catch(r){this._logger.error("Could not load internal file %s of module %s. Error: %s",o.join(t,e[s]),this.moduleName,r.message)}})}}},function(e,t,r){const n=r(15);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(21).SEMVER_SPEC_VERSION,SemVer:r(0),compareIdentifiers:r(40).compareIdentifiers,rcompareIdentifiers:r(40).rcompareIdentifiers,parse:r(16),valid:r(165),clean:r(166),inc:r(167),diff:r(168),major:r(169),minor:r(170),patch:r(171),prerelease:r(172),compare:r(3),rcompare:r(173),compareLoose:r(174),compareBuild:r(42),sort:r(175),rsort:r(176),gt:r(24),lt:r(43),eq:r(41),neq:r(84),gte:r(44),lte:r(45),cmp:r(85),coerce:r(177),Comparator:r(25),Range:r(4),satisfies:r(26),toComparators:r(178),maxSatisfying:r(179),minSatisfying:r(180),minVersion:r(181),validRange:r(182),outside:r(46),gtr:r(183),ltr:r(184),intersects:r(185),simplifyRange:r(186),subset:r(187)}},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},function(e,t,r){const n=r(0);e.exports=(e,t,r,o)=>{"string"==typeof r&&(o=r,r=void 0);try{return new n(e,r).inc(t,o).version}catch(e){return null}}},function(e,t,r){const n=r(16),o=r(41);e.exports=(e,t)=>{if(o(e,t))return null;{const r=n(e),o=n(t),s=r.prerelease.length||o.prerelease.length,i=s?"pre":"",a=s?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==o[e])return i+e;return a}}},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).major},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).minor},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).patch},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>n(t,e,r)},function(e,t,r){const n=r(3);e.exports=(e,t)=>n(e,t,!0)},function(e,t,r){const n=r(42);e.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},function(e,t,r){const n=r(42);e.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},function(e,t,r){const n=r(0),o=r(16),{re:s,t:i}=r(15);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=s[i.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),s[i.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;s[i.COERCERTL].lastIndex=-1}else r=e.match(s[i.COERCE]);return null===r?null:o(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},function(e,t,r){const n=r(4);e.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},function(e,t,r){const n=r(0),o=r(4);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&-1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(0),o=r(4);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(0),o=r(4),s=r(24);e.exports=(e,t)=>{e=new o(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){e.set[t].forEach(e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!s(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}return r&&e.test(r)?r:null}},function(e,t,r){const n=r(4);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},function(e,t,r){const n=r(46);e.exports=(e,t,r)=>n(e,t,">",r)},function(e,t,r){const n=r(46);e.exports=(e,t,r)=>n(e,t,"<",r)},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},function(e,t,r){const n=r(26),o=r(3);e.exports=(e,t,r)=>{const s=[];let i=null,a=null;const c=e.sort((e,t)=>o(e,t,r));for(const e of c){n(e,t,r)?(a=e,i||(i=e)):(a&&s.push([i,a]),a=null,i=null)}i&&s.push([i,null]);const u=[];for(const[e,t]of s)e===t?u.push(e):t||e!==c[0]?t?e===c[0]?u.push("<="+t):u.push(`${e} - ${t}`):u.push(">="+e):u.push("*");const l=u.join(" || "),p="string"==typeof t.raw?t.raw:String(t);return l.length<p.length?l:t}},function(e,t,r){const n=r(4),{ANY:o}=r(25),s=r(26),i=r(3),a=(e,t,r)=>{if(1===e.length&&e[0].semver===o)return 1===t.length&&t[0].semver===o;const n=new Set;let a,l,p,h,f,d,E;for(const t of e)">"===t.operator||">="===t.operator?a=c(a,t,r):"<"===t.operator||"<="===t.operator?l=u(l,t,r):n.add(t.semver);if(n.size>1)return null;if(a&&l){if(p=i(a.semver,l.semver,r),p>0)return null;if(0===p&&(">="!==a.operator||"<="!==l.operator))return null}for(const e of n){if(a&&!s(e,String(a),r))return null;if(l&&!s(e,String(l),r))return null;for(const n of t)if(!s(e,String(n),r))return!1;return!0}for(const e of t){if(E=E||">"===e.operator||">="===e.operator,d=d||"<"===e.operator||"<="===e.operator,a)if(">"===e.operator||">="===e.operator){if(h=c(a,e,r),h===e)return!1}else if(">="===a.operator&&!s(a.semver,String(e),r))return!1;if(l)if("<"===e.operator||"<="===e.operator){if(f=u(l,e,r),f===e)return!1}else if("<="===l.operator&&!s(l.semver,String(e),r))return!1;if(!e.operator&&(l||a)&&0!==p)return!1}return!(a&&d&&!l&&0!==p)&&!(l&&E&&!a&&0!==p)},c=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r)=>{e=new n(e,r),t=new n(t,r);let o=!1;e:for(const n of e.set){for(const e of t.set){const t=a(n,e,r);if(o=o||null!==t,t)continue e}if(o)return!1}return!0}},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=188},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(86);class s extends n.NoopSpan{constructor(e){super(e),this._context=e||o.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11);class o{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=o,t.ALWAYS_SAMPLER=new o(1),t.NEVER_SAMPLER=new o(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(88);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11),o=r(14),s=r(37),i=r(88),a=r(195),c=r(196),u=r(197);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){this._config=e,this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=e.logger||new o.ConsoleLogger(e.logLevel),this.resource=e.resource||u.Resource.createTelemetrySDKResource()}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new s.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new o.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(198);t.Resource=n.Resource,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(89))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(48),o=r(89);class s{constructor(e){this.labels=e}static empty(){return s.EMPTY}static createTelemetrySDKResource(){return new s({[o.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[o.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[o.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new s(t)}}t.Resource=s,s.EMPTY=new s({})},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED_NOT_RETRYABLE=1]="FAILED_NOT_RETRYABLE",e[e.FAILED_RETRYABLE=2]="FAILED_RETRYABLE"}(t.ExportResult||(t.ExportResult={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(201))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(202);t.SDK_INFO={NAME:"opentelemetry",RUNTIME:"browser",LANGUAGE:"webjs",VERSION:n.VERSION}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(48),o=r(14);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:o.hrTimeToMicroseconds(e.startTime),duration:o.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e.toReadableSpan())}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(48);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e.toReadableSpan()],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(90),o=r(112);class s extends n.BasicTracerProvider{constructor(e={}){void 0===e.plugins&&(e.plugins=[]),super(e);for(const t of e.plugins)t.enable([],this,this.logger);if(e.contextManager)throw"contextManager should be defined in register method not in constructor";if(e.propagator)throw"propagator should be defined in register method not in constructor"}register(e={}){void 0===e.contextManager&&(e.contextManager=new o.StackContextManager),e.contextManager&&e.contextManager.enable(),super.register(e)}}t.WebTracerProvider=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(13),s=r(109),i=r(258);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new o.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):o.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=o.randomSpanId();let u,l;i&&o.isValid(i)?(u=i.traceId,l=i.traceState):u=o.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new o.NoRecordingSpan(p);const h=new s.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return h.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),h}getCurrentSpan(){const e=n.context.active();return o.getActiveSpan(e)}withSpan(e,t){return n.context.with(o.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?o.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(100);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(99);class o{constructor(){this._tracerProvider=n.NOOP_TRACER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalTracerProvider(e){return this._tracerProvider=e,e}getTracerProvider(){return this._tracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}}t.TraceAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(95);class o{constructor(){this._meterProvider=n.NOOP_METER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalMeterProvider(e){return this._meterProvider=e,e}getMeterProvider(){return this._meterProvider}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}}t.MetricsAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(91),o=r(92),s=r(93),i=r(101).ContextAPI.getInstance();class a{constructor(){this._propagator=o.NOOP_HTTP_TEXT_PROPAGATOR}static getInstance(){return this._instance||(this._instance=new a),this._instance}setGlobalPropagator(e){return this._propagator=e,e}inject(e,t=s.defaultSetter,r=i.active()){return this._propagator.inject(r,e,t)}extract(e,t=n.defaultGetter,r=i.active()){return this._propagator.extract(r,e,t)}}t.PropagationAPI=a},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(102);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(104),o=Math.pow(10,9);function s(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*o]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=s(i()),r=s("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>o&&(c-=o,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):s(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=o),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*o+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,o=new Uint8Array(16);function s(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let o=0;for(let s=0;s<e.length;s++){let i=e[s]>>>4&15;t[o++]=i>9?i+r:i+n,i=15&e[s],t[o++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(o),s(o.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(o),s(o.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),o=parseInt(t,16);r+=String.fromCharCode(o)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(50);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const s=/^[0-9a-f]{32}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return s.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,n){const s=o.getParentSpanContext(e);s&&c(s.traceId)&&u(s.spanId)&&(n(r,t.X_B3_TRACE_ID,s.traceId),n(r,t.X_B3_SPAN_ID,s.spanId),void 0!==s.traceFlags&&n(r,t.X_B3_SAMPLED,Number(s.traceFlags)))}extract(e,r,s){const i=s(r,t.X_B3_TRACE_ID),a=s(r,t.X_B3_SPAN_ID),l=s(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,h=Array.isArray(a)?a[0]:a,f=Array.isArray(l)?l[0]:l;return"string"!=typeof p||"string"!=typeof h?e:c(p)&&u(h)?o.setExtractedSpanContext(e,{traceId:p,spanId:h,isRemote:!0,traceFlags:isNaN(Number(f))?n.TraceFlags.NONE:Number(f)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(103);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(105),s=r(50);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,o){const i=s.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;o(r,t.TRACE_PARENT_HEADER,a),i.traceState&&o(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new o.TraceState("string"==typeof e?e:void 0)}return s.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),o=/^[ -~]{0,255}[!-~]$/,s=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return o.test(e)&&!s.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(229),o=r(47);t.BasePlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,this._internalFilesExports=this._loadInternalFilesExports(),n&&(this._config=n),this.patch()}disable(){this.unpatch()}_loadInternalFilesExports(){if(!this._internalFilesList)return{};if(!this.version||!this.moduleName||!this._basedir)return this._logger.debug("loadInternalFiles failed because one of the required fields was missing: moduleName=%s, version=%s, basedir=%s",this.moduleName,this.version,this._basedir),{};let e={};return this._logger.debug("loadInternalFiles %o",this._internalFilesList),Object.keys(this._internalFilesList).forEach(t=>{this._loadInternalModule(t,e)}),0===Object.keys(e).length&&this._logger.debug("No internal files could be loaded for %s@%s",this.moduleName,this.version),e}_loadInternalModule(e,t){n.satisfies(this.version,e)&&(Object.keys(t).length>0&&this._logger.warn("Plugin for %s@%s, has overlap version range (%s) for internal files: %o",this.moduleName,this.version,e,this._internalFilesList),this._requireInternalFiles(this._internalFilesList[e],this._basedir,t))}_requireInternalFiles(e,t,n){e&&Object.keys(e).forEach(s=>{try{this._logger.debug("loading File %s",e[s]),n[s]=r(253)(o.join(t,e[s]))}catch(r){this._logger.error("Could not load internal file %s of module %s. Error: %s",o.join(t,e[s]),this.moduleName,r.message)}})}}},function(e,t,r){const n=r(17);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(27).SEMVER_SPEC_VERSION,SemVer:r(1),compareIdentifiers:r(51).compareIdentifiers,rcompareIdentifiers:r(51).rcompareIdentifiers,parse:r(18),valid:r(230),clean:r(231),inc:r(232),diff:r(233),major:r(234),minor:r(235),patch:r(236),prerelease:r(237),compare:r(5),rcompare:r(238),compareLoose:r(239),compareBuild:r(53),sort:r(240),rsort:r(241),gt:r(29),lt:r(54),eq:r(52),neq:r(106),gte:r(55),lte:r(56),cmp:r(107),coerce:r(242),Comparator:r(30),Range:r(6),satisfies:r(31),toComparators:r(243),maxSatisfying:r(244),minSatisfying:r(245),minVersion:r(246),validRange:r(247),outside:r(57),gtr:r(248),ltr:r(249),intersects:r(250),simplifyRange:r(251),subset:r(252)}},function(e,t,r){const n=r(18);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},function(e,t,r){const n=r(18);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},function(e,t,r){const n=r(1);e.exports=(e,t,r,o)=>{"string"==typeof r&&(o=r,r=void 0);try{return new n(e,r).inc(t,o).version}catch(e){return null}}},function(e,t,r){const n=r(18),o=r(52);e.exports=(e,t)=>{if(o(e,t))return null;{const r=n(e),o=n(t),s=r.prerelease.length||o.prerelease.length,i=s?"pre":"",a=s?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==o[e])return i+e;return a}}},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).major},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).minor},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).patch},function(e,t,r){const n=r(18);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>n(t,e,r)},function(e,t,r){const n=r(5);e.exports=(e,t)=>n(e,t,!0)},function(e,t,r){const n=r(53);e.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},function(e,t,r){const n=r(53);e.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},function(e,t,r){const n=r(1),o=r(18),{re:s,t:i}=r(17);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=s[i.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),s[i.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;s[i.COERCERTL].lastIndex=-1}else r=e.match(s[i.COERCE]);return null===r?null:o(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},function(e,t,r){const n=r(6);e.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},function(e,t,r){const n=r(1),o=r(6);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&-1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(1),o=r(6);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(1),o=r(6),s=r(29);e.exports=(e,t)=>{e=new o(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){e.set[t].forEach(e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!s(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}return r&&e.test(r)?r:null}},function(e,t,r){const n=r(6);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},function(e,t,r){const n=r(57);e.exports=(e,t,r)=>n(e,t,">",r)},function(e,t,r){const n=r(57);e.exports=(e,t,r)=>n(e,t,"<",r)},function(e,t,r){const n=r(6);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},function(e,t,r){const n=r(31),o=r(5);e.exports=(e,t,r)=>{const s=[];let i=null,a=null;const c=e.sort((e,t)=>o(e,t,r));for(const e of c){n(e,t,r)?(a=e,i||(i=e)):(a&&s.push([i,a]),a=null,i=null)}i&&s.push([i,null]);const u=[];for(const[e,t]of s)e===t?u.push(e):t||e!==c[0]?t?e===c[0]?u.push("<="+t):u.push(`${e} - ${t}`):u.push(">="+e):u.push("*");const l=u.join(" || "),p="string"==typeof t.raw?t.raw:String(t);return l.length<p.length?l:t}},function(e,t,r){const n=r(6),{ANY:o}=r(30),s=r(31),i=r(5),a=(e,t,r)=>{if(1===e.length&&e[0].semver===o)return 1===t.length&&t[0].semver===o;const n=new Set;let a,l,p,h,f,d,E;for(const t of e)">"===t.operator||">="===t.operator?a=c(a,t,r):"<"===t.operator||"<="===t.operator?l=u(l,t,r):n.add(t.semver);if(n.size>1)return null;if(a&&l){if(p=i(a.semver,l.semver,r),p>0)return null;if(0===p&&(">="!==a.operator||"<="!==l.operator))return null}for(const e of n){if(a&&!s(e,String(a),r))return null;if(l&&!s(e,String(l),r))return null;for(const n of t)if(!s(e,String(n),r))return!1;return!0}for(const e of t){if(E=E||">"===e.operator||">="===e.operator,d=d||"<"===e.operator||"<="===e.operator,a)if(">"===e.operator||">="===e.operator){if(h=c(a,e,r),h===e)return!1}else if(">="===a.operator&&!s(a.semver,String(e),r))return!1;if(l)if("<"===e.operator||"<="===e.operator){if(f=u(l,e,r),f===e)return!1}else if("<="===l.operator&&!s(l.semver,String(e),r))return!1;if(!e.operator&&(l||a)&&0!==p)return!1}return!(a&&d&&!l&&0!==p)&&!(l&&E&&!a&&0!==p)},c=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r)=>{e=new n(e,r),t=new n(t,r);let o=!1;e:for(const n of e.set){for(const e of t.set){const t=a(n,e,r);if(o=o||null!==t,t)continue e}if(o)return!1}return!0}},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=253},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(108);class s extends n.NoopSpan{constructor(e){super(e),this._context=e||o.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);class o{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=o,t.ALWAYS_SAMPLER=new o(1),t.NEVER_SAMPLER=new o(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(110);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10),o=r(13),s=r(90),i=r(110),a=r(260),c=r(261),u=r(262);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){this._config=e,this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=e.logger||new o.ConsoleLogger(e.logLevel),this.resource=e.resource||u.Resource.createTelemetrySDKResource()}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new s.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new o.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(263);t.Resource=n.Resource,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(111))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(58),o=r(111);class s{constructor(e){this.labels=e}static empty(){return s.EMPTY}static createTelemetrySDKResource(){return new s({[o.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[o.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[o.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new s(t)}}t.Resource=s,s.EMPTY=new s({})},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED_NOT_RETRYABLE=1]="FAILED_NOT_RETRYABLE",e[e.FAILED_RETRYABLE=2]="FAILED_RETRYABLE"}(t.ExportResult||(t.ExportResult={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(266))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(267);t.SDK_INFO={NAME:"opentelemetry",RUNTIME:"browser",LANGUAGE:"webjs",VERSION:n.VERSION}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(58),o=r(13);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:o.hrTimeToMicroseconds(e.startTime),duration:o.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(13);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e.toReadableSpan())}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(58);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e.toReadableSpan()],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(113),o=r(13);function s(e,t){return t in e}function i(e){return e.slice().sort((e,t)=>{const r=e[n.PerformanceTimingNames.FETCH_START],o=t[n.PerformanceTimingNames.FETCH_START];return r>o?1:r<o?-1:0})}function a(e){const t=document.createElement("a");return t.href=e,t}t.hasKey=s,t.addSpanNetworkEvent=function(e,t,r){if(s(r,t)&&"number"==typeof r[t]){if(0===r[t])return;return e.addEvent(t,r[t]),e}},t.sortResources=i,t.getResource=function(e,t,r,s,c=new WeakSet){const u=function(e,t,r,s,i){const a=o.hrTimeToNanoseconds(t),c=o.hrTimeToNanoseconds(r);let u=s.filter(t=>{const r=o.hrTimeToNanoseconds(o.timeInputToHrTime(t[n.PerformanceTimingNames.FETCH_START])),s=o.hrTimeToNanoseconds(o.timeInputToHrTime(t[n.PerformanceTimingNames.RESPONSE_END]));return"xmlhttprequest"===t.initiatorType.toLowerCase()&&t.name===e&&r>=a&&s<=c});u.length>0&&(u=u.filter(e=>!i.has(e)));return u}(e,t,r,s,c);if(0===u.length)return{mainRequest:void 0};if(1===u.length)return{mainRequest:u[0]};const l=i(u.slice());if(a(e).origin!==window.location.origin&&l.length>1){let e=l[0],t=function(e,t,r){const s=o.hrTimeToNanoseconds(r),i=o.hrTimeToNanoseconds(o.timeInputToHrTime(t));let a,c=e[1];const u=e.length;for(let t=1;t<u;t++){const r=e[t],u=o.hrTimeToNanoseconds(o.timeInputToHrTime(r[n.PerformanceTimingNames.FETCH_START])),l=o.hrTimeToNanoseconds(o.timeInputToHrTime(r[n.PerformanceTimingNames.RESPONSE_END])),p=s-l;u>=i&&(!a||p<a)&&(a=p,c=r)}return c}(l,e[n.PerformanceTimingNames.RESPONSE_END],r);const s=e[n.PerformanceTimingNames.RESPONSE_END];return t[n.PerformanceTimingNames.FETCH_START]<s&&(t=e,e=void 0),{corsPreFlightRequest:e,mainRequest:t}}return{mainRequest:u[0]}},t.parseUrl=a,t.getElementXPath=function e(t,r){if(t.nodeType===Node.DOCUMENT_NODE)return"/";const n=function(e,t){const r=e.nodeType,n=function(e){if(!e.parentNode)return 0;const t=[e.nodeType];e.nodeType===Node.CDATA_SECTION_NODE&&t.push(Node.TEXT_NODE);let r=Array.from(e.parentNode.childNodes);if(r=r.filter(r=>{const n=r.localName;return t.indexOf(r.nodeType)>=0&&n===e.localName}),r.length>=1)return r.indexOf(e)+1;return 0}(e);let o="";if(r===Node.ELEMENT_NODE){const r=e.getAttribute("id");if(t&&r)return`//*[@id="${r}"]`;o=e.localName}else if(r===Node.TEXT_NODE||r===Node.CDATA_SECTION_NODE)o="text()";else{if(r!==Node.COMMENT_NODE)return"";o="comment()"}if(o&&n>1)return`/${o}[${n}]`;return"/"+o}(t,r);if(r&&n.indexOf("@id")>0)return n;let o="";return t.parentNode&&(o+=e(t.parentNode,!1)),o+=n,o}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(12),s=r(323),i=r(341),a=r(342);class c extends o.BasePlugin{constructor(e={}){super("@opentelemetry/plugin-document-load",a.VERSION),this.component="document-load",this.version="1",this.moduleName=this.component,this._onDocumentLoaded=this._onDocumentLoaded.bind(this),this._config=e}_onDocumentLoaded(){window.setTimeout(()=>{this._collectPerformance()})}_addResourcesSpans(e){const t=o.otperformance.getEntriesByType("resource");t&&t.forEach(t=>{this._initResourceSpan(t,{parent:e})})}_addSpanNetworkEvents(e,t){s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOMAIN_LOOKUP_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOMAIN_LOOKUP_END,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.CONNECT_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.SECURE_CONNECTION_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.CONNECT_END,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.REQUEST_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.RESPONSE_START,t)}_collectPerformance(){const e=[...document.getElementsByTagName("meta")].find(e=>e.getAttribute("name")===o.TRACE_PARENT_HEADER),t=this._getEntries(),r=e&&e.content||"";n.context.with(n.propagation.extract({traceparent:r}),()=>{const e=this._startSpan(i.AttributeNames.DOCUMENT_LOAD,s.PerformanceTimingNames.FETCH_START,t);e&&(this._tracer.withSpan(e,()=>{const e=this._startSpan(i.AttributeNames.DOCUMENT_FETCH,s.PerformanceTimingNames.FETCH_START,t);e&&this._tracer.withSpan(e,()=>{this._addSpanNetworkEvents(e,t),this._endSpan(e,s.PerformanceTimingNames.RESPONSE_END,t)})}),this._addResourcesSpans(e),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.UNLOAD_EVENT_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.UNLOAD_EVENT_END,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOM_INTERACTIVE,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_START,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_END,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.DOM_COMPLETE,t),s.addSpanNetworkEvent(e,s.PerformanceTimingNames.LOAD_EVENT_START,t),this._endSpan(e,s.PerformanceTimingNames.LOAD_EVENT_END,t))})}_endSpan(e,t,r){e&&(s.hasKey(r,t)?(s.addSpanNetworkEvent(e,t,r),e.end(r[t])):e.end())}_getEntries(){const e={},t=o.otperformance.getEntriesByType("navigation")[0];if(t){Object.values(s.PerformanceTimingNames).forEach(r=>{if(s.hasKey(t,r)){const n=t[r];"number"==typeof n&&n>0&&(e[r]=n)}})}else{const t=o.otperformance.timing;if(t){Object.values(s.PerformanceTimingNames).forEach(r=>{if(s.hasKey(t,r)){const n=t[r];"number"==typeof n&&n>0&&(e[r]=n)}})}}return e}_initResourceSpan(e,t={}){const r=this._startSpan(e.name,s.PerformanceTimingNames.FETCH_START,e,t);r&&(this._addSpanNetworkEvents(r,e),this._endSpan(r,s.PerformanceTimingNames.RESPONSE_END,e))}_startSpan(e,t,r,n={}){if(s.hasKey(r,t)&&"number"==typeof r[t]){const o=this._tracer.startSpan(e,Object.assign({},{startTime:r[t]},n));return o.setAttribute(i.AttributeNames.COMPONENT,this.component),s.addSpanNetworkEvent(o,t,r),o}}_waitForPageLoad(){"complete"===window.document.readyState?this._onDocumentLoaded():window.addEventListener("load",this._onDocumentLoaded)}patch(){return this._waitForPageLoad(),this._moduleExports}unpatch(){window.removeEventListener("load",this._onDocumentLoaded)}}t.DocumentLoad=c},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(123);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(122);class o{constructor(){this._tracerProvider=n.NOOP_TRACER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalTracerProvider(e){return this._tracerProvider=e,e}getTracerProvider(){return this._tracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}}t.TraceAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(118);class o{constructor(){this._meterProvider=n.NOOP_METER_PROVIDER}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalMeterProvider(e){return this._meterProvider=e,e}getMeterProvider(){return this._meterProvider}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}}t.MetricsAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(114),o=r(115),s=r(116),i=r(124).ContextAPI.getInstance();class a{constructor(){this._propagator=o.NOOP_HTTP_TEXT_PROPAGATOR}static getInstance(){return this._instance||(this._instance=new a),this._instance}setGlobalPropagator(e){return this._propagator=e,e}inject(e,t=s.defaultSetter,r=i.active()){return this._propagator.inject(r,e,t)}extract(e,t=n.defaultGetter,r=i.active()){return this._propagator.extract(r,e,t)}}t.PropagationAPI=a},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(125);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(127),o=Math.pow(10,9);function s(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*o]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=s(i()),r=s("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>o&&(c-=o,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):s(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=o),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*o+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,o=new Uint8Array(16);function s(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let o=0;for(let s=0;s<e.length;s++){let i=e[s]>>>4&15;t[o++]=i>9?i+r:i+n,i=15&e[s],t[o++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(o),s(o.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(o),s(o.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),o=parseInt(t,16);r+=String.fromCharCode(o)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(60);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const s=/^[0-9a-f]{32}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return s.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,n){const s=o.getParentSpanContext(e);s&&c(s.traceId)&&u(s.spanId)&&(n(r,t.X_B3_TRACE_ID,s.traceId),n(r,t.X_B3_SPAN_ID,s.spanId),void 0!==s.traceFlags&&n(r,t.X_B3_SAMPLED,Number(s.traceFlags)))}extract(e,r,s){const i=s(r,t.X_B3_TRACE_ID),a=s(r,t.X_B3_SPAN_ID),l=s(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,h=Array.isArray(a)?a[0]:a,f=Array.isArray(l)?l[0]:l;return"string"!=typeof p||"string"!=typeof h?e:c(p)&&u(h)?o.setExtractedSpanContext(e,{traceId:p,spanId:h,isRemote:!0,traceFlags:isNaN(Number(f))?n.TraceFlags.NONE:Number(f)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(126);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(128),s=r(60);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,o){const i=s.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;o(r,t.TRACE_PARENT_HEADER,a),i.traceState&&o(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new o.TraceState("string"==typeof e?e:void 0)}return s.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),o=/^[ -~]{0,255}[!-~]$/,s=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return o.test(e)&&!s.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(294),o=r(47);t.BasePlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,this._internalFilesExports=this._loadInternalFilesExports(),n&&(this._config=n),this.patch()}disable(){this.unpatch()}_loadInternalFilesExports(){if(!this._internalFilesList)return{};if(!this.version||!this.moduleName||!this._basedir)return this._logger.debug("loadInternalFiles failed because one of the required fields was missing: moduleName=%s, version=%s, basedir=%s",this.moduleName,this.version,this._basedir),{};let e={};return this._logger.debug("loadInternalFiles %o",this._internalFilesList),Object.keys(this._internalFilesList).forEach(t=>{this._loadInternalModule(t,e)}),0===Object.keys(e).length&&this._logger.debug("No internal files could be loaded for %s@%s",this.moduleName,this.version),e}_loadInternalModule(e,t){n.satisfies(this.version,e)&&(Object.keys(t).length>0&&this._logger.warn("Plugin for %s@%s, has overlap version range (%s) for internal files: %o",this.moduleName,this.version,e,this._internalFilesList),this._requireInternalFiles(this._internalFilesList[e],this._basedir,t))}_requireInternalFiles(e,t,n){e&&Object.keys(e).forEach(s=>{try{this._logger.debug("loading File %s",e[s]),n[s]=r(318)(o.join(t,e[s]))}catch(r){this._logger.error("Could not load internal file %s of module %s. Error: %s",o.join(t,e[s]),this.moduleName,r.message)}})}}},function(e,t,r){const n=r(19);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(32).SEMVER_SPEC_VERSION,SemVer:r(2),compareIdentifiers:r(61).compareIdentifiers,rcompareIdentifiers:r(61).rcompareIdentifiers,parse:r(20),valid:r(295),clean:r(296),inc:r(297),diff:r(298),major:r(299),minor:r(300),patch:r(301),prerelease:r(302),compare:r(7),rcompare:r(303),compareLoose:r(304),compareBuild:r(63),sort:r(305),rsort:r(306),gt:r(34),lt:r(64),eq:r(62),neq:r(129),gte:r(65),lte:r(66),cmp:r(130),coerce:r(307),Comparator:r(35),Range:r(8),satisfies:r(36),toComparators:r(308),maxSatisfying:r(309),minSatisfying:r(310),minVersion:r(311),validRange:r(312),outside:r(67),gtr:r(313),ltr:r(314),intersects:r(315),simplifyRange:r(316),subset:r(317)}},function(e,t,r){const n=r(20);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},function(e,t,r){const n=r(20);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},function(e,t,r){const n=r(2);e.exports=(e,t,r,o)=>{"string"==typeof r&&(o=r,r=void 0);try{return new n(e,r).inc(t,o).version}catch(e){return null}}},function(e,t,r){const n=r(20),o=r(62);e.exports=(e,t)=>{if(o(e,t))return null;{const r=n(e),o=n(t),s=r.prerelease.length||o.prerelease.length,i=s?"pre":"",a=s?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==o[e])return i+e;return a}}},function(e,t,r){const n=r(2);e.exports=(e,t)=>new n(e,t).major},function(e,t,r){const n=r(2);e.exports=(e,t)=>new n(e,t).minor},function(e,t,r){const n=r(2);e.exports=(e,t)=>new n(e,t).patch},function(e,t,r){const n=r(20);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},function(e,t,r){const n=r(7);e.exports=(e,t,r)=>n(t,e,r)},function(e,t,r){const n=r(7);e.exports=(e,t)=>n(e,t,!0)},function(e,t,r){const n=r(63);e.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},function(e,t,r){const n=r(63);e.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},function(e,t,r){const n=r(2),o=r(20),{re:s,t:i}=r(19);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=s[i.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),s[i.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;s[i.COERCERTL].lastIndex=-1}else r=e.match(s[i.COERCE]);return null===r?null:o(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},function(e,t,r){const n=r(8);e.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},function(e,t,r){const n=r(2),o=r(8);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&-1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(2),o=r(8);e.exports=(e,t,r)=>{let s=null,i=null,a=null;try{a=new o(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(s&&1!==i.compare(e)||(s=e,i=new n(s,r)))}),s}},function(e,t,r){const n=r(2),o=r(8),s=r(34);e.exports=(e,t)=>{e=new o(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){e.set[t].forEach(e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!s(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}return r&&e.test(r)?r:null}},function(e,t,r){const n=r(8);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},function(e,t,r){const n=r(67);e.exports=(e,t,r)=>n(e,t,">",r)},function(e,t,r){const n=r(67);e.exports=(e,t,r)=>n(e,t,"<",r)},function(e,t,r){const n=r(8);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},function(e,t,r){const n=r(36),o=r(7);e.exports=(e,t,r)=>{const s=[];let i=null,a=null;const c=e.sort((e,t)=>o(e,t,r));for(const e of c){n(e,t,r)?(a=e,i||(i=e)):(a&&s.push([i,a]),a=null,i=null)}i&&s.push([i,null]);const u=[];for(const[e,t]of s)e===t?u.push(e):t||e!==c[0]?t?e===c[0]?u.push("<="+t):u.push(`${e} - ${t}`):u.push(">="+e):u.push("*");const l=u.join(" || "),p="string"==typeof t.raw?t.raw:String(t);return l.length<p.length?l:t}},function(e,t,r){const n=r(8),{ANY:o}=r(35),s=r(36),i=r(7),a=(e,t,r)=>{if(1===e.length&&e[0].semver===o)return 1===t.length&&t[0].semver===o;const n=new Set;let a,l,p,h,f,d,E;for(const t of e)">"===t.operator||">="===t.operator?a=c(a,t,r):"<"===t.operator||"<="===t.operator?l=u(l,t,r):n.add(t.semver);if(n.size>1)return null;if(a&&l){if(p=i(a.semver,l.semver,r),p>0)return null;if(0===p&&(">="!==a.operator||"<="!==l.operator))return null}for(const e of n){if(a&&!s(e,String(a),r))return null;if(l&&!s(e,String(l),r))return null;for(const n of t)if(!s(e,String(n),r))return!1;return!0}for(const e of t){if(E=E||">"===e.operator||">="===e.operator,d=d||"<"===e.operator||"<="===e.operator,a)if(">"===e.operator||">="===e.operator){if(h=c(a,e,r),h===e)return!1}else if(">="===a.operator&&!s(a.semver,String(e),r))return!1;if(l)if("<"===e.operator||"<="===e.operator){if(f=u(l,e,r),f===e)return!1}else if("<="===l.operator&&!s(l.semver,String(e),r))return!1;if(!e.operator&&(l||a)&&0!==p)return!1}return!(a&&d&&!l&&0!==p)&&!(l&&E&&!a&&0!==p)},c=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r)=>{e=new n(e,r),t=new n(t,r);let o=!1;e:for(const n of e.set){for(const e of t.set){const t=a(n,e,r);if(o=o||null!==t,t)continue e}if(o)return!1}return!0}},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=318},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(131);class s extends n.NoopSpan{constructor(e){super(e),this._context=e||o.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);class o{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=o,t.ALWAYS_SAMPLER=new o(1),t.NEVER_SAMPLER=new o(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(324)),n(r(136)),n(r(137)),n(r(340))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(132),o=r(136);class s extends n.BasicTracerProvider{constructor(e={}){void 0===e.plugins&&(e.plugins=[]),super(e);for(const t of e.plugins)t.enable([],this,this.logger);if(e.contextManager)throw"contextManager should be defined in register method not in constructor";if(e.propagator)throw"propagator should be defined in register method not in constructor"}register(e={}){void 0===e.contextManager&&(e.contextManager=new o.StackContextManager),e.contextManager&&e.contextManager.enable(),super.register(e)}}t.WebTracerProvider=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(12),s=r(133),i=r(326);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new o.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):o.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=o.randomSpanId();let u,l;i&&o.isValid(i)?(u=i.traceId,l=i.traceState):u=o.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new o.NoRecordingSpan(p);const h=new s.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return h.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),h}getCurrentSpan(){const e=n.context.active();return o.getActiveSpan(e)}withSpan(e,t){return n.context.with(o.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?o.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(134);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),o=r(12),s=r(132),i=r(134),a=r(328),c=r(329),u=r(330);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){this._config=e,this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=e.logger||new o.ConsoleLogger(e.logLevel),this.resource=e.resource||u.Resource.createTelemetrySDKResource()}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new s.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new o.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(331);t.Resource=n.Resource,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(135))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(68),o=r(135);class s{constructor(e){this.labels=e}static empty(){return s.EMPTY}static createTelemetrySDKResource(){return new s({[o.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[o.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[o.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new s(t)}}t.Resource=s,s.EMPTY=new s({})},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED_NOT_RETRYABLE=1]="FAILED_NOT_RETRYABLE",e[e.FAILED_RETRYABLE=2]="FAILED_RETRYABLE"}(t.ExportResult||(t.ExportResult={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(334))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(335);t.SDK_INFO={NAME:"opentelemetry",RUNTIME:"browser",LANGUAGE:"webjs",VERSION:n.VERSION}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(68),o=r(12);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:o.hrTimeToMicroseconds(e.startTime),duration:o.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(12);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e.toReadableSpan())}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(68);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e.toReadableSpan()],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(137),o=r(12);function s(e,t){return t in e}function i(e){return e.slice().sort((e,t)=>{const r=e[n.PerformanceTimingNames.FETCH_START],o=t[n.PerformanceTimingNames.FETCH_START];return r>o?1:r<o?-1:0})}function a(e){const t=document.createElement("a");return t.href=e,t}t.hasKey=s,t.addSpanNetworkEvent=function(e,t,r){if(s(r,t)&&"number"==typeof r[t]){if(0===r[t])return;return e.addEvent(t,r[t]),e}},t.sortResources=i,t.getResource=function(e,t,r,s,c=new WeakSet){const u=function(e,t,r,s,i){const a=o.hrTimeToNanoseconds(t),c=o.hrTimeToNanoseconds(r);let u=s.filter(t=>{const r=o.hrTimeToNanoseconds(o.timeInputToHrTime(t[n.PerformanceTimingNames.FETCH_START])),s=o.hrTimeToNanoseconds(o.timeInputToHrTime(t[n.PerformanceTimingNames.RESPONSE_END]));return"xmlhttprequest"===t.initiatorType.toLowerCase()&&t.name===e&&r>=a&&s<=c});u.length>0&&(u=u.filter(e=>!i.has(e)));return u}(e,t,r,s,c);if(0===u.length)return{mainRequest:void 0};if(1===u.length)return{mainRequest:u[0]};const l=i(u.slice());if(a(e).origin!==window.location.origin&&l.length>1){let e=l[0],t=function(e,t,r){const s=o.hrTimeToNanoseconds(r),i=o.hrTimeToNanoseconds(o.timeInputToHrTime(t));let a,c=e[1];const u=e.length;for(let t=1;t<u;t++){const r=e[t],u=o.hrTimeToNanoseconds(o.timeInputToHrTime(r[n.PerformanceTimingNames.FETCH_START])),l=o.hrTimeToNanoseconds(o.timeInputToHrTime(r[n.PerformanceTimingNames.RESPONSE_END])),p=s-l;u>=i&&(!a||p<a)&&(a=p,c=r)}return c}(l,e[n.PerformanceTimingNames.RESPONSE_END],r);const s=e[n.PerformanceTimingNames.RESPONSE_END];return t[n.PerformanceTimingNames.FETCH_START]<s&&(t=e,e=void 0),{corsPreFlightRequest:e,mainRequest:t}}return{mainRequest:u[0]}},t.parseUrl=a,t.getElementXPath=function e(t,r){if(t.nodeType===Node.DOCUMENT_NODE)return"/";const n=function(e,t){const r=e.nodeType,n=function(e){if(!e.parentNode)return 0;const t=[e.nodeType];e.nodeType===Node.CDATA_SECTION_NODE&&t.push(Node.TEXT_NODE);let r=Array.from(e.parentNode.childNodes);if(r=r.filter(r=>{const n=r.localName;return t.indexOf(r.nodeType)>=0&&n===e.localName}),r.length>=1)return r.indexOf(e)+1;return 0}(e);let o="";if(r===Node.ELEMENT_NODE){const r=e.getAttribute("id");if(t&&r)return`//*[@id="${r}"]`;o=e.localName}else if(r===Node.TEXT_NODE||r===Node.CDATA_SECTION_NODE)o="text()";else{if(r!==Node.COMMENT_NODE)return"";o="comment()"}if(o&&n>1)return`/${o}[${n}]`;return"/"+o}(t,r);if(r&&n.indexOf("@id")>0)return n;let o="";return t.parentNode&&(o+=e(t.parentNode,!1)),o+=n,o}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.COMPONENT="component",e.DOCUMENT_LOAD="documentLoad",e.DOCUMENT_FETCH="documentFetch"}(t.AttributeNames||(t.AttributeNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(344))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(345),o=r(347);t.ZoneContextManager=class{constructor(){this._enabled=!1,this._zoneCounter=0}_activeContextFromZone(e){return e&&e.get("OT_ZONE_CONTEXT")||n.Context.ROOT_CONTEXT}_bindFunction(e,t){const r=this,n=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(n,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),n}_bindListener(e,t){const r=e;return void 0!==r.__ot_listeners||(r.__ot_listeners={},"function"==typeof r.addEventListener&&(r.addEventListener=this._patchAddEventListener(r,r.addEventListener,t)),"function"==typeof r.removeEventListener&&(r.removeEventListener=this._patchRemoveEventListener(r,r.removeEventListener))),e}_createZoneName(){this._zoneCounter++;const e=Math.random();return`${this._zoneCounter}-${e}`}_createZone(e,t){return Zone.root.fork({name:e,properties:{OT_ZONE_CONTEXT:t}})}_getActiveZone(){return Zone.current}_patchAddEventListener(e,t,r){const n=this;return function(o,s,i){void 0===e.__ot_listeners&&(e.__ot_listeners={});let a=e.__ot_listeners[o];void 0===a&&(a=new WeakMap,e.__ot_listeners[o]=a);const c=n.bind(s,r);return a.set(s,c),t.call(this,o,c,i)}}_patchRemoveEventListener(e,t){return function(r,n){if(void 0===e.__ot_listeners||void 0===e.__ot_listeners[r])return t.call(this,r,n);const o=e.__ot_listeners[r],s=o.get(n);return o.delete(n),t.call(this,r,s||n)}}active(){if(!this._enabled)return n.Context.ROOT_CONTEXT;const e=this._getActiveZone(),t=this._activeContextFromZone(e);return t||n.Context.ROOT_CONTEXT}bind(e,t){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):(o.isListenerObject(e)&&this._bindListener(e,t),e)}disable(){return this._enabled=!1,this}enable(){return this._enabled=!0,this}with(e,t){const r=this._createZoneName();return this._createZone(r,e).run(t,e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(138)),n(r(346))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(138);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isListenerObject=function(e={}){return"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}},function(e,t,r){(function(n){var o,s;
/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/void 0===(s="function"==typeof(o=function(){"use strict";
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */!function(e){var t=e.performance;function r(e){t&&t.mark&&t.mark(e)}function n(e,r){t&&t.measure&&t.measure(e,r)}r("Zone");var o=e.__Zone_symbol_prefix||"__zone_symbol__";function s(e){return o+e}var i=!0===e[s("forceDuplicateZoneCheck")];if(e.Zone){if(i||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}var a=function(){function t(e,t){this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,t)}return t.assertZonePatched=function(){if(e.Promise!==y.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(t,"root",{get:function(){for(var e=t.current;e.parent;)e=e.parent;return e},enumerable:!0,configurable:!0}),Object.defineProperty(t,"current",{get:function(){return L.zone},enumerable:!0,configurable:!0}),Object.defineProperty(t,"currentTask",{get:function(){return M},enumerable:!0,configurable:!0}),t.__load_patch=function(o,s){if(y.hasOwnProperty(o)){if(i)throw Error("Already loaded patch: "+o)}else if(!e["__Zone_disable_"+o]){var a="Zone:"+o;r(a),y[o]=s(e,t,C),n(a,a)}},Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),t.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},t.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},t.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},t.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var r=this._zoneDelegate.intercept(this,e,t),n=this;return function(){return n.runGuarded(r,this,arguments,t)}},t.prototype.run=function(e,t,r,n){L={parent:L,zone:this};try{return this._zoneDelegate.invoke(this,e,t,r,n)}finally{L=L.parent}},t.prototype.runGuarded=function(e,t,r,n){void 0===t&&(t=null),L={parent:L,zone:this};try{try{return this._zoneDelegate.invoke(this,e,t,r,n)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{L=L.parent}},t.prototype.runTask=function(e,t,r){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||O).name+"; Execution: "+this.name+")");if(e.state!==g||e.type!==b&&e.type!==P){var n=e.state!=S;n&&e._transitionTo(S,v),e.runCount++;var o=M;M=e,L={parent:L,zone:this};try{e.type==P&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,t,r)}catch(e){if(this._zoneDelegate.handleError(this,e))throw e}}finally{e.state!==g&&e.state!==I&&(e.type==b||e.data&&e.data.isPeriodic?n&&e._transitionTo(v,S):(e.runCount=0,this._updateTaskCount(e,-1),n&&e._transitionTo(g,S,g))),L=L.parent,M=o}}},t.prototype.scheduleTask=function(e){if(e.zone&&e.zone!==this)for(var t=this;t;){if(t===e.zone)throw Error("can not reschedule task to "+this.name+" which is descendants of the original zone "+e.zone.name);t=t.parent}e._transitionTo(N,g);var r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(t){throw e._transitionTo(I,N,g),this._zoneDelegate.handleError(this,t),t}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==N&&e._transitionTo(v,N),e},t.prototype.scheduleMicroTask=function(e,t,r,n){return this.scheduleTask(new p(A,e,t,r,n,void 0))},t.prototype.scheduleMacroTask=function(e,t,r,n,o){return this.scheduleTask(new p(P,e,t,r,n,o))},t.prototype.scheduleEventTask=function(e,t,r,n,o){return this.scheduleTask(new p(b,e,t,r,n,o))},t.prototype.cancelTask=function(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||O).name+"; Execution: "+this.name+")");e._transitionTo(R,v,S);try{this._zoneDelegate.cancelTask(this,e)}catch(t){throw e._transitionTo(I,R),this._zoneDelegate.handleError(this,t),t}return this._updateTaskCount(e,-1),e._transitionTo(g,R),e.runCount=0,e},t.prototype._updateTaskCount=function(e,t){var r=e._zoneDelegates;-1==t&&(e._zoneDelegates=null);for(var n=0;n<r.length;n++)r[n]._updateTaskCount(e.type,t)},t}();a.__symbol__=s;var c,u={name:"",onHasTask:function(e,t,r,n){return e.hasTask(r,n)},onScheduleTask:function(e,t,r,n){return e.scheduleTask(r,n)},onInvokeTask:function(e,t,r,n,o,s){return e.invokeTask(r,n,o,s)},onCancelTask:function(e,t,r,n){return e.cancelTask(r,n)}},l=function(){function e(e,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;var n=r&&r.onHasTask,o=t&&t._hasTaskZS;(n||o)&&(this._hasTaskZS=n?r:u,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=e,r.onScheduleTask||(this._scheduleTaskZS=u,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=u,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=u,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new a(e,t)},e.prototype.intercept=function(e,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,e,t,r):t},e.prototype.invoke=function(e,t,r,n,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,e,t,r,n,o):t.apply(r,n)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,e,t)},e.prototype.scheduleTask=function(e,t){var r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),(r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,e,t))||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=A)throw new Error("Task is missing scheduleFn.");T(t)}return r},e.prototype.invokeTask=function(e,t,r,n){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,e,t,r,n):t.callback.apply(r,n)},e.prototype.cancelTask=function(e,t){var r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,e,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r},e.prototype.hasTask=function(e,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,e,t)}catch(t){this.handleError(e,t)}},e.prototype._updateTaskCount=function(e,t){var r=this._taskCounts,n=r[e],o=r[e]=n+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==n||0==o){var s={microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:e};this.hasTask(this.zone,s)}},e}(),p=function(){function t(r,n,o,s,i,a){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=s,this.scheduleFn=i,this.cancelFn=a,!o)throw new Error("callback is not defined");this.callback=o;var c=this;r===b&&s&&s.useG?this.invoke=t.invokeTask:this.invoke=function(){return t.invokeTask.call(e,c,this,arguments)}}return t.invokeTask=function(e,t,r){e||(e=this),w++;try{return e.runCount++,e.zone.runTask(e,t,r)}finally{1==w&&m(),w--}},Object.defineProperty(t.prototype,"zone",{get:function(){return this._zone},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),t.prototype.cancelScheduleRequest=function(){this._transitionTo(g,N)},t.prototype._transitionTo=function(e,t,r){if(this._state!==t&&this._state!==r)throw new Error(this.type+" '"+this.source+"': can not transition to '"+e+"', expecting state '"+t+"'"+(r?" or '"+r+"'":"")+", was '"+this._state+"'.");this._state=e,e==g&&(this._zoneDelegates=null)},t.prototype.toString=function(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)},t.prototype.toJSON=function(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}},t}(),h=s("setTimeout"),f=s("Promise"),d=s("then"),E=[],_=!1;function T(t){if(0===w&&0===E.length)if(c||e[f]&&(c=e[f].resolve(0)),c){var r=c[d];r||(r=c.then),r.call(c,m)}else e[h](m,0);t&&E.push(t)}function m(){if(!_){for(_=!0;E.length;){var e=E;E=[];for(var t=0;t<e.length;t++){var r=e[t];try{r.zone.runTask(r,null,null)}catch(e){C.onUnhandledError(e)}}}C.microtaskDrainDone(),_=!1}}var O={name:"NO ZONE"},g="notScheduled",N="scheduling",v="scheduled",S="running",R="canceling",I="unknown",A="microTask",P="macroTask",b="eventTask",y={},C={symbol:s,currentZoneFrame:function(){return L},onUnhandledError:D,microtaskDrainDone:D,scheduleMicroTask:T,showUncaughtError:function(){return!a[s("ignoreConsoleErrorUncaughtError")]},patchEventTarget:function(){return[]},patchOnProperties:D,patchMethod:function(){return D},bindArguments:function(){return[]},patchThen:function(){return D},patchMacroTask:function(){return D},setNativePromise:function(e){e&&"function"==typeof e.resolve&&(c=e.resolve(0))},patchEventPrototype:function(){return D},isIEOrEdge:function(){return!1},getGlobalObjects:function(){},ObjectDefineProperty:function(){return D},ObjectGetOwnPropertyDescriptor:function(){},ObjectCreate:function(){},ArraySlice:function(){return[]},patchClass:function(){return D},wrapWithCurrentZone:function(){return D},filterProperties:function(){return[]},attachOriginToPatched:function(){return D},_redefineProperty:function(){return D},patchCallbacks:function(){return D}},L={parent:null,zone:new a(null,null)},M=null,w=0;function D(){}n("Zone","Zone"),e.Zone=a}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||n),
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
Zone.__load_patch("ZoneAwarePromise",(function(e,t,r){var n=Object.getOwnPropertyDescriptor,o=Object.defineProperty,s=r.symbol,i=[],a=!0===e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],c=s("Promise"),u=s("then");r.onUnhandledError=function(e){if(r.showUncaughtError()){var t=e&&e.rejection;t?console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0):console.error(e)}},r.microtaskDrainDone=function(){for(var e=function(){var e=i.shift();try{e.zone.runGuarded((function(){throw e}))}catch(e){!function(e){r.onUnhandledError(e);try{var n=t[l];"function"==typeof n&&n.call(this,e)}catch(e){}}(e)}};i.length;)e()};var l=s("unhandledPromiseRejectionHandler");function p(e){return e&&e.then}function h(e){return e}function f(e){return A.reject(e)}var d=s("state"),E=s("value"),_=s("finally"),T=s("parentPromiseValue"),m=s("parentPromiseState");function O(e,t){return function(r){try{N(e,t,r)}catch(t){N(e,!1,t)}}}var g=s("currentTaskTrace");function N(e,n,s){var c,u=(c=!1,function(e){return function(){c||(c=!0,e.apply(null,arguments))}});if(e===s)throw new TypeError("Promise resolved with itself");if(null===e[d]){var l=null;try{"object"!=typeof s&&"function"!=typeof s||(l=s&&s.then)}catch(t){return u((function(){N(e,!1,t)}))(),e}if(!1!==n&&s instanceof A&&s.hasOwnProperty(d)&&s.hasOwnProperty(E)&&null!==s[d])S(s),N(e,s[d],s[E]);else if(!1!==n&&"function"==typeof l)try{l.call(s,u(O(e,n)),u(O(e,!1)))}catch(t){u((function(){N(e,!1,t)}))()}else{e[d]=n;var p=e[E];if(e[E]=s,e[_]===_&&!0===n&&(e[d]=e[m],e[E]=e[T]),!1===n&&s instanceof Error){var h=t.currentTask&&t.currentTask.data&&t.currentTask.data.__creationTrace__;h&&o(s,g,{configurable:!0,enumerable:!1,writable:!0,value:h})}for(var f=0;f<p.length;)R(e,p[f++],p[f++],p[f++],p[f++]);if(0==p.length&&0==n){e[d]=0;var v=s;if(!a)try{throw new Error("Uncaught (in promise): "+function(e){if(e&&e.toString===Object.prototype.toString){var t=e.constructor&&e.constructor.name;return(t||"")+": "+JSON.stringify(e)}return e?e.toString():Object.prototype.toString.call(e)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(e){v=e}v.rejection=s,v.promise=e,v.zone=t.current,v.task=t.currentTask,i.push(v),r.scheduleMicroTask()}}}return e}var v=s("rejectionHandledHandler");function S(e){if(0===e[d]){try{var r=t[v];r&&"function"==typeof r&&r.call(this,{rejection:e[E],promise:e})}catch(e){}e[d]=!1;for(var n=0;n<i.length;n++)e===i[n].promise&&i.splice(n,1)}}function R(e,t,r,n,o){S(e);var s=e[d],i=s?"function"==typeof n?n:h:"function"==typeof o?o:f;t.scheduleMicroTask("Promise.then",(function(){try{var n=e[E],o=!!r&&_===r[_];o&&(r[T]=n,r[m]=s);var a=t.run(i,void 0,o&&i!==f&&i!==h?[]:[n]);N(r,!0,a)}catch(e){N(r,!1,e)}}),r)}var I=function(){},A=function(){function e(t){if(!(this instanceof e))throw new Error("Must be an instanceof Promise.");this[d]=null,this[E]=[];try{t&&t(O(this,!0),O(this,!1))}catch(e){N(this,!1,e)}}return e.toString=function(){return"function ZoneAwarePromise() { [native code] }"},e.resolve=function(e){return N(new this(null),!0,e)},e.reject=function(e){return N(new this(null),!1,e)},e.race=function(e){var t,r,n=new this((function(e,n){t=e,r=n}));function o(e){t(e)}function s(e){r(e)}for(var i=0,a=e;i<a.length;i++){var c=a[i];p(c)||(c=this.resolve(c)),c.then(o,s)}return n},e.all=function(t){return e.allWithCallback(t)},e.allSettled=function(t){return(this&&this.prototype instanceof e?this:e).allWithCallback(t,{thenCallback:function(e){return{status:"fulfilled",value:e}},errorCallback:function(e){return{status:"rejected",reason:e}}})},e.allWithCallback=function(e,t){for(var r,n,o=new this((function(e,t){r=e,n=t})),s=2,i=0,a=[],c=function(e){p(e)||(e=u.resolve(e));var o=i;try{e.then((function(e){a[o]=t?t.thenCallback(e):e,0==--s&&r(a)}),(function(e){t?(a[o]=t.errorCallback(e),0==--s&&r(a)):n(e)}))}catch(e){n(e)}s++,i++},u=this,l=0,h=e;l<h.length;l++)c(h[l]);return 0==(s-=2)&&r(a),o},Object.defineProperty(e.prototype,Symbol.toStringTag,{get:function(){return"Promise"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,Symbol.species,{get:function(){return e},enumerable:!0,configurable:!0}),e.prototype.then=function(r,n){var o=this.constructor[Symbol.species];o&&"function"==typeof o||(o=this.constructor||e);var s=new o(I),i=t.current;return null==this[d]?this[E].push(i,s,r,n):R(this,i,s,r,n),s},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(r){var n=this.constructor[Symbol.species];n&&"function"==typeof n||(n=e);var o=new n(I);o[_]=_;var s=t.current;return null==this[d]?this[E].push(s,o,r,r):R(this,s,o,r,r),o},e}();A.resolve=A.resolve,A.reject=A.reject,A.race=A.race,A.all=A.all;var P=e[c]=e.Promise,b=t.__symbol__("ZoneAwarePromise"),y=n(e,"Promise");y&&!y.configurable||(y&&delete y.writable,y&&delete y.value,y||(y={configurable:!0,enumerable:!0}),y.get=function(){return e[b]?e[b]:e[c]},y.set=function(t){t===A?e[b]=t:(e[c]=t,t.prototype[u]||M(t),r.setNativePromise(t))},o(e,"Promise",y)),e.Promise=A;var C,L=s("thenPatched");function M(e){var t=e.prototype,r=n(t,"then");if(!r||!1!==r.writable&&r.configurable){var o=t.then;t[u]=o,e.prototype.then=function(e,t){var r=this;return new A((function(e,t){o.call(r,e,t)})).then(e,t)},e[L]=!0}}if(r.patchThen=M,P){M(P);var w=e.fetch;"function"==typeof w&&(e[r.symbol("fetch")]=w,e.fetch=(C=w,function(){var e=C.apply(this,arguments);if(e instanceof A)return e;var t=e.constructor;return t[L]||M(t),e}))}return Promise[t.__symbol__("uncaughtPromiseErrors")]=i,A}));
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var e=Object.getOwnPropertyDescriptor,t=Object.defineProperty,r=Object.getPrototypeOf,o=Object.create,s=Array.prototype.slice,i=Zone.__symbol__("addEventListener"),a=Zone.__symbol__("removeEventListener"),c=Zone.__symbol__("");function u(e,t){return Zone.current.wrap(e,t)}function l(e,t,r,n,o){return Zone.current.scheduleMacroTask(e,t,r,n,o)}var p=Zone.__symbol__,h="undefined"!=typeof window,f=h?window:void 0,d=h&&f||"object"==typeof self&&self||n,E=[null];function _(e,t){for(var r=e.length-1;r>=0;r--)"function"==typeof e[r]&&(e[r]=u(e[r],t+"_"+r));return e}function T(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}var m="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,O=!("nw"in d)&&void 0!==d.process&&"[object process]"==={}.toString.call(d.process),g=!O&&!m&&!(!h||!f.HTMLElement),N=void 0!==d.process&&"[object process]"==={}.toString.call(d.process)&&!m&&!(!h||!f.HTMLElement),v={},S=function(e){if(e=e||d.event){var t=v[e.type];t||(t=v[e.type]=p("ON_PROPERTY"+e.type));var r,n=this||e.target||d,o=n[t];if(g&&n===f&&"error"===e.type){var s=e;!0===(r=o&&o.call(this,s.message,s.filename,s.lineno,s.colno,s.error))&&e.preventDefault()}else null==(r=o&&o.apply(this,arguments))||r||e.preventDefault();return r}};function R(r,n,o){var s=e(r,n);if(!s&&o&&e(o,n)&&(s={enumerable:!0,configurable:!0}),s&&s.configurable){var i=p("on"+n+"patched");if(!r.hasOwnProperty(i)||!r[i]){delete s.writable,delete s.value;var a=s.get,c=s.set,u=n.substr(2),l=v[u];l||(l=v[u]=p("ON_PROPERTY"+u)),s.set=function(e){var t=this;t||r!==d||(t=d),t&&(t[l]&&t.removeEventListener(u,S),c&&c.apply(t,E),"function"==typeof e?(t[l]=e,t.addEventListener(u,S,!1)):t[l]=null)},s.get=function(){var e=this;if(e||r!==d||(e=d),!e)return null;var t=e[l];if(t)return t;if(a){var o=a&&a.call(this);if(o)return s.set.call(this,o),"function"==typeof e.removeAttribute&&e.removeAttribute(n),o}return null},t(r,n,s),r[i]=!0}}}function I(e,t,r){if(t)for(var n=0;n<t.length;n++)R(e,"on"+t[n],r);else{var o=[];for(var s in e)"on"==s.substr(0,2)&&o.push(s);for(var i=0;i<o.length;i++)R(e,o[i],r)}}var A=p("originalInstance");function P(e){var r=d[e];if(r){d[p(e)]=r,d[e]=function(){var t=_(arguments,e);switch(t.length){case 0:this[A]=new r;break;case 1:this[A]=new r(t[0]);break;case 2:this[A]=new r(t[0],t[1]);break;case 3:this[A]=new r(t[0],t[1],t[2]);break;case 4:this[A]=new r(t[0],t[1],t[2],t[3]);break;default:throw new Error("Arg list too long.")}},C(d[e],r);var n,o=new r((function(){}));for(n in o)"XMLHttpRequest"===e&&"responseBlob"===n||function(r){"function"==typeof o[r]?d[e].prototype[r]=function(){return this[A][r].apply(this[A],arguments)}:t(d[e].prototype,r,{set:function(t){"function"==typeof t?(this[A][r]=u(t,e+"."+r),C(this[A][r],t)):this[A][r]=t},get:function(){return this[A][r]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&(d[e][n]=r[n])}}function b(t,n,o){for(var s=t;s&&!s.hasOwnProperty(n);)s=r(s);!s&&t[n]&&(s=t);var i=p(n),a=null;if(s&&!(a=s[i])&&(a=s[i]=s[n],T(s&&e(s,n)))){var c=o(a,i,n);s[n]=function(){return c(this,arguments)},C(s[n],a)}return a}function y(e,t,r){var n=null;function o(e){var t=e.data;return t.args[t.cbIdx]=function(){e.invoke.apply(this,arguments)},n.apply(t.target,t.args),e}n=b(e,t,(function(e){return function(t,n){var s=r(t,n);return s.cbIdx>=0&&"function"==typeof n[s.cbIdx]?l(s.name,n[s.cbIdx],s,o):e.apply(t,n)}}))}function C(e,t){e[p("OriginalDelegate")]=t}var L=!1,M=!1;function w(){try{var e=f.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}function D(){if(L)return M;L=!0;try{var e=f.navigator.userAgent;-1===e.indexOf("MSIE ")&&-1===e.indexOf("Trident/")&&-1===e.indexOf("Edge/")||(M=!0)}catch(e){}return M}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */Zone.__load_patch("toString",(function(e){var t=Function.prototype.toString,r=p("OriginalDelegate"),n=p("Promise"),o=p("Error"),s=function(){if("function"==typeof this){var s=this[r];if(s)return"function"==typeof s?t.call(s):Object.prototype.toString.call(s);if(this===Promise){var i=e[n];if(i)return t.call(i)}if(this===Error){var a=e[o];if(a)return t.call(a)}}return t.call(this)};s[r]=t,Function.prototype.toString=s;var i=Object.prototype.toString;Object.prototype.toString=function(){return this instanceof Promise?"[object Promise]":i.call(this)}}));
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var x=!1;if("undefined"!=typeof window)try{var $=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",$,$),window.removeEventListener("test",$,$)}catch(e){x=!1}var j={useG:!0},k={},F={},U=new RegExp("^"+c+"(\\w+)(true|false)$"),G=p("propagationStopped");function V(e,t){var r=(t?t(e):e)+"false",n=(t?t(e):e)+"true",o=c+r,s=c+n;k[e]={},k[e].false=o,k[e].true=s}function X(e,t,n){var o=n&&n.add||"addEventListener",s=n&&n.rm||"removeEventListener",i=n&&n.listeners||"eventListeners",a=n&&n.rmAll||"removeAllListeners",u=p(o),l="."+o+":",h=function(e,t,r){if(!e.isRemoved){var n=e.callback;"object"==typeof n&&n.handleEvent&&(e.callback=function(e){return n.handleEvent(e)},e.originalDelegate=n),e.invoke(e,t,[r]);var o=e.options;if(o&&"object"==typeof o&&o.once){var i=e.originalDelegate?e.originalDelegate:e.callback;t[s].call(t,r.type,i,o)}}},f=function(t){if(t=t||e.event){var r=this||t.target||e,n=r[k[t.type].false];if(n)if(1===n.length)h(n[0],r,t);else for(var o=n.slice(),s=0;s<o.length&&(!t||!0!==t[G]);s++)h(o[s],r,t)}},d=function(t){if(t=t||e.event){var r=this||t.target||e,n=r[k[t.type].true];if(n)if(1===n.length)h(n[0],r,t);else for(var o=n.slice(),s=0;s<o.length&&(!t||!0!==t[G]);s++)h(o[s],r,t)}};function E(t,n){if(!t)return!1;var h=!0;n&&void 0!==n.useG&&(h=n.useG);var E=n&&n.vh,_=!0;n&&void 0!==n.chkDup&&(_=n.chkDup);var T=!1;n&&void 0!==n.rt&&(T=n.rt);for(var m=t;m&&!m.hasOwnProperty(o);)m=r(m);if(!m&&t[o]&&(m=t),!m)return!1;if(m[u])return!1;var g,N=n&&n.eventNameToString,v={},S=m[u]=m[o],R=m[p(s)]=m[s],I=m[p(i)]=m[i],A=m[p(a)]=m[a];function P(e,t){return!x&&"object"==typeof e&&e?!!e.capture:x&&t?"boolean"==typeof e?{capture:e,passive:!0}:e?"object"==typeof e&&!1!==e.passive?Object.assign(Object.assign({},e),{passive:!0}):e:{passive:!0}:e}n&&n.prepend&&(g=m[p(n.prepend)]=m[n.prepend]);var b=h?function(e){if(!v.isExisting)return S.call(v.target,v.eventName,v.capture?d:f,v.options)}:function(e){return S.call(v.target,v.eventName,e.invoke,v.options)},y=h?function(e){if(!e.isRemoved){var t=k[e.eventName],r=void 0;t&&(r=t[e.capture?"true":"false"]);var n=r&&e.target[r];if(n)for(var o=0;o<n.length;o++)if(n[o]===e){n.splice(o,1),e.isRemoved=!0,0===n.length&&(e.allRemoved=!0,e.target[r]=null);break}}if(e.allRemoved)return R.call(e.target,e.eventName,e.capture?d:f,e.options)}:function(e){return R.call(e.target,e.eventName,e.invoke,e.options)},L=n&&n.diff?n.diff:function(e,t){var r=typeof t;return"function"===r&&e.callback===t||"object"===r&&e.originalDelegate===t},M=Zone[p("BLACK_LISTED_EVENTS")],w=e[p("PASSIVE_EVENTS")],D=function(t,r,o,s,i,a){return void 0===i&&(i=!1),void 0===a&&(a=!1),function(){var c=this||e,u=arguments[0];n&&n.transferEventName&&(u=n.transferEventName(u));var l=arguments[1];if(!l)return t.apply(this,arguments);if(O&&"uncaughtException"===u)return t.apply(this,arguments);var p=!1;if("function"!=typeof l){if(!l.handleEvent)return t.apply(this,arguments);p=!0}if(!E||E(t,l,c,arguments)){var f=x&&!!w&&-1!==w.indexOf(u),d=P(arguments[2],f);if(M)for(var T=0;T<M.length;T++)if(u===M[T])return f?t.call(c,u,l,d):t.apply(this,arguments);var m=!!d&&("boolean"==typeof d||d.capture),g=!(!d||"object"!=typeof d)&&d.once,S=Zone.current,R=k[u];R||(V(u,N),R=k[u]);var I,A=R[m?"true":"false"],b=c[A],y=!1;if(b){if(y=!0,_)for(T=0;T<b.length;T++)if(L(b[T],l))return}else b=c[A]=[];var C=c.constructor.name,D=F[C];D&&(I=D[u]),I||(I=C+r+(N?N(u):u)),v.options=d,g&&(v.options.once=!1),v.target=c,v.capture=m,v.eventName=u,v.isExisting=y;var $=h?j:void 0;$&&($.taskData=v);var U=S.scheduleEventTask(I,l,$,o,s);return v.target=null,$&&($.taskData=null),g&&(d.once=!0),(x||"boolean"!=typeof U.options)&&(U.options=d),U.target=c,U.capture=m,U.eventName=u,p&&(U.originalDelegate=l),a?b.unshift(U):b.push(U),i?c:void 0}}};return m[o]=D(S,l,b,y,T),g&&(m.prependListener=D(g,".prependListener:",(function(e){return g.call(v.target,v.eventName,e.invoke,v.options)}),y,T,!0)),m[s]=function(){var t=this||e,r=arguments[0];n&&n.transferEventName&&(r=n.transferEventName(r));var o=arguments[2],s=!!o&&("boolean"==typeof o||o.capture),i=arguments[1];if(!i)return R.apply(this,arguments);if(!E||E(R,i,t,arguments)){var a,u=k[r];u&&(a=u[s?"true":"false"]);var l=a&&t[a];if(l)for(var p=0;p<l.length;p++){var h=l[p];if(L(h,i)){if(l.splice(p,1),h.isRemoved=!0,0===l.length&&(h.allRemoved=!0,t[a]=null,"string"==typeof r)){var f=c+"ON_PROPERTY"+r;t[f]=null}return h.zone.cancelTask(h),T?t:void 0}}return R.apply(this,arguments)}},m[i]=function(){var t=this||e,r=arguments[0];n&&n.transferEventName&&(r=n.transferEventName(r));for(var o=[],s=B(t,N?N(r):r),i=0;i<s.length;i++){var a=s[i],c=a.originalDelegate?a.originalDelegate:a.callback;o.push(c)}return o},m[a]=function(){var t=this||e,r=arguments[0];if(r){n&&n.transferEventName&&(r=n.transferEventName(r));var o=k[r];if(o){var i=o.false,c=o.true,u=t[i],l=t[c];if(u){var p=u.slice();for(E=0;E<p.length;E++){var h=(f=p[E]).originalDelegate?f.originalDelegate:f.callback;this[s].call(this,r,h,f.options)}}if(l)for(p=l.slice(),E=0;E<p.length;E++){var f;h=(f=p[E]).originalDelegate?f.originalDelegate:f.callback,this[s].call(this,r,h,f.options)}}}else{for(var d=Object.keys(t),E=0;E<d.length;E++){var _=d[E],m=U.exec(_),O=m&&m[1];O&&"removeListener"!==O&&this[a].call(this,O)}this[a].call(this,"removeListener")}if(T)return this},C(m[o],S),C(m[s],R),A&&C(m[a],A),I&&C(m[i],I),!0}for(var _=[],T=0;T<t.length;T++)_[T]=E(t[T],n);return _}function B(e,t){if(!t){var r=[];for(var n in e){var o=U.exec(n),s=o&&o[1];if(s&&(!t||s===t)){var i=e[n];if(i)for(var a=0;a<i.length;a++)r.push(i[a])}}return r}var c=k[t];c||(V(t),c=k[t]);var u=e[c.false],l=e[c.true];return u?l?u.concat(l):u.slice():l?l.slice():[]}function H(e,t){var r=e.Event;r&&r.prototype&&t.patchMethod(r.prototype,"stopImmediatePropagation",(function(e){return function(t,r){t[G]=!0,e&&e.apply(t,r)}}))}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Z(e,t,r,n,o){var s=Zone.__symbol__(n);if(!t[s]){var i=t[s]=t[n];t[n]=function(s,a,c){return a&&a.prototype&&o.forEach((function(t){var o=r+"."+n+"::"+t,s=a.prototype;if(s.hasOwnProperty(t)){var i=e.ObjectGetOwnPropertyDescriptor(s,t);i&&i.value?(i.value=e.wrapWithCurrentZone(i.value,o),e._redefineProperty(a.prototype,t,i)):s[t]&&(s[t]=e.wrapWithCurrentZone(s[t],o))}else s[t]&&(s[t]=e.wrapWithCurrentZone(s[t],o))})),i.call(t,s,a,c)},e.attachOriginToPatched(t[n],i)}}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var z,K,Y,W,q,J=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],Q=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],ee=["load"],te=["blur","error","focus","load","resize","scroll","messageerror"],re=["bounce","finish","start"],ne=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],oe=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],se=["close","error","open","message"],ie=["error","message"],ae=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],J,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function ce(e,t,r){if(!r||0===r.length)return t;var n=r.filter((function(t){return t.target===e}));if(!n||0===n.length)return t;var o=n[0].ignoreProperties;return t.filter((function(e){return-1===o.indexOf(e)}))}function ue(e,t,r,n){e&&I(e,ce(e,t,r),n)}function le(e,t){if((!O||N)&&!Zone[e.symbol("patchEvents")]){var n="undefined"!=typeof WebSocket,o=t.__Zone_ignore_on_properties;if(g){var s=window,i=w?[{target:s,ignoreProperties:["error"]}]:[];ue(s,ae.concat(["messageerror"]),o?o.concat(i):o,r(s)),ue(Document.prototype,ae,o),void 0!==s.SVGElement&&ue(s.SVGElement.prototype,ae,o),ue(Element.prototype,ae,o),ue(HTMLElement.prototype,ae,o),ue(HTMLMediaElement.prototype,Q,o),ue(HTMLFrameSetElement.prototype,J.concat(te),o),ue(HTMLBodyElement.prototype,J.concat(te),o),ue(HTMLFrameElement.prototype,ee,o),ue(HTMLIFrameElement.prototype,ee,o);var a=s.HTMLMarqueeElement;a&&ue(a.prototype,re,o);var c=s.Worker;c&&ue(c.prototype,ie,o)}var u=t.XMLHttpRequest;u&&ue(u.prototype,ne,o);var l=t.XMLHttpRequestEventTarget;l&&ue(l&&l.prototype,ne,o),"undefined"!=typeof IDBIndex&&(ue(IDBIndex.prototype,oe,o),ue(IDBRequest.prototype,oe,o),ue(IDBOpenDBRequest.prototype,oe,o),ue(IDBDatabase.prototype,oe,o),ue(IDBTransaction.prototype,oe,o),ue(IDBCursor.prototype,oe,o)),n&&ue(WebSocket.prototype,se,o)}}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function pe(){z=Zone.__symbol__,K=Object[z("defineProperty")]=Object.defineProperty,Y=Object[z("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,W=Object.create,q=z("unconfigurables"),Object.defineProperty=function(e,t,r){if(fe(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var n=r.configurable;return"prototype"!==t&&(r=de(e,t,r)),Ee(e,t,r,n)},Object.defineProperties=function(e,t){return Object.keys(t).forEach((function(r){Object.defineProperty(e,r,t[r])})),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach((function(r){t[r]=de(e,r,t[r])})),W(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var r=Y(e,t);return r&&fe(e,t)&&(r.configurable=!1),r}}function he(e,t,r){var n=r.configurable;return Ee(e,t,r=de(e,t,r),n)}function fe(e,t){return e&&e[q]&&e[q][t]}function de(e,t,r){return Object.isFrozen(r)||(r.configurable=!0),r.configurable||(e[q]||Object.isFrozen(e)||K(e,q,{writable:!0,value:{}}),e[q]&&(e[q][t]=!0)),r}function Ee(e,t,r,n){try{return K(e,t,r)}catch(s){if(!r.configurable)throw s;void 0===n?delete r.configurable:r.configurable=n;try{return K(e,t,r)}catch(n){var o=null;try{o=JSON.stringify(r)}catch(e){o=r.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+o+"' on object '"+e+"' and got error, giving up: "+n)}}}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function _e(e,t){var r=t.getGlobalObjects(),n=r.eventNames,o=r.globalSources,s=r.zoneSymbolEventNames,i=r.TRUE_STR,a=r.FALSE_STR,c=r.ZONE_SYMBOL_PREFIX,u="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),l=[],p=e.wtf,h="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video".split(",");p?l=h.map((function(e){return"HTML"+e+"Element"})).concat(u):e.EventTarget?l.push("EventTarget"):l=u;for(var f=e.__Zone_disable_IE_check||!1,d=e.__Zone_enable_cross_context_check||!1,E=t.isIEOrEdge(),_="function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",T={MSPointerCancel:"pointercancel",MSPointerDown:"pointerdown",MSPointerEnter:"pointerenter",MSPointerHover:"pointerhover",MSPointerLeave:"pointerleave",MSPointerMove:"pointermove",MSPointerOut:"pointerout",MSPointerOver:"pointerover",MSPointerUp:"pointerup"},m=0;m<n.length;m++){var O=c+((R=n[m])+a),g=c+(R+i);s[R]={},s[R][a]=O,s[R][i]=g}for(m=0;m<h.length;m++)for(var N=h[m],v=o[N]={},S=0;S<n.length;S++){var R;v[R=n[S]]=N+".addEventListener:"+R}var I=[];for(m=0;m<l.length;m++){var A=e[l[m]];I.push(A&&A.prototype)}return t.patchEventTarget(e,I,{vh:function(e,t,r,n){if(!f&&E){if(d)try{var o;if("[object FunctionWrapper]"===(o=t.toString())||o==_)return e.apply(r,n),!1}catch(t){return e.apply(r,n),!1}else if("[object FunctionWrapper]"===(o=t.toString())||o==_)return e.apply(r,n),!1}else if(d)try{t.toString()}catch(t){return e.apply(r,n),!1}return!0},transferEventName:function(e){return T[e]||e}}),Zone[t.symbol("patchEventTarget")]=!!e.EventTarget,!0}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Te(e,t){var r=e.getGlobalObjects(),n=r.isNode,o=r.isMix;if((!n||o)&&!function(e,t){var r=e.getGlobalObjects(),n=r.isBrowser,o=r.isMix;if((n||o)&&!e.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var s=e.ObjectGetOwnPropertyDescriptor(Element.prototype,"onclick");if(s&&!s.configurable)return!1;if(s){e.ObjectDefineProperty(Element.prototype,"onclick",{enumerable:!0,configurable:!0,get:function(){return!0}});var i=!!document.createElement("div").onclick;return e.ObjectDefineProperty(Element.prototype,"onclick",s),i}}var a=t.XMLHttpRequest;if(!a)return!1;var c=a.prototype,u=e.ObjectGetOwnPropertyDescriptor(c,"onreadystatechange");if(u)return e.ObjectDefineProperty(c,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return!0}}),i=!!(p=new a).onreadystatechange,e.ObjectDefineProperty(c,"onreadystatechange",u||{}),i;var l=e.symbol("fake");e.ObjectDefineProperty(c,"onreadystatechange",{enumerable:!0,configurable:!0,get:function(){return this[l]},set:function(e){this[l]=e}});var p=new a,h=function(){};return p.onreadystatechange=h,i=p[l]===h,p.onreadystatechange=null,i}(e,t)){var s="undefined"!=typeof WebSocket;!function(e){for(var t=e.getGlobalObjects().eventNames,r=e.symbol("unbound"),n=function(n){var o=t[n],s="on"+o;self.addEventListener(o,(function(t){var n,o,i=t.target;for(o=i?i.constructor.name+"."+s:"unknown."+s;i;)i[s]&&!i[s][r]&&((n=e.wrapWithCurrentZone(i[s],o))[r]=i[s],i[s]=n),i=i.parentElement}),!0)},o=0;o<t.length;o++)n(o)}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e),e.patchClass("XMLHttpRequest"),s&&function(e,t){var r=e.getGlobalObjects(),n=r.ADD_EVENT_LISTENER_STR,o=r.REMOVE_EVENT_LISTENER_STR,s=t.WebSocket;t.EventTarget||e.patchEventTarget(t,[s.prototype]),t.WebSocket=function(t,r){var i,a,c=arguments.length>1?new s(t,r):new s(t),u=e.ObjectGetOwnPropertyDescriptor(c,"onmessage");return u&&!1===u.configurable?(i=e.ObjectCreate(c),a=c,[n,o,"send","close"].forEach((function(t){i[t]=function(){var r=e.ArraySlice.call(arguments);if(t===n||t===o){var s=r.length>0?r[0]:void 0;if(s){var a=Zone.__symbol__("ON_PROPERTY"+s);c[a]=i[a]}}return c[t].apply(c,r)}}))):i=c,e.patchOnProperties(i,["close","error","message","open"],a),i};var i=t.WebSocket;for(var a in s)i[a]=s[a]}(e,t),Zone[e.symbol("patchEvents")]=!0}}Zone.__load_patch("util",(function(r,n,i){i.patchOnProperties=I,i.patchMethod=b,i.bindArguments=_,i.patchMacroTask=y;var a=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");r[l]&&(r[a]=r[l]),r[a]&&(n[a]=n[l]=r[a]),i.patchEventPrototype=H,i.patchEventTarget=X,i.isIEOrEdge=D,i.ObjectDefineProperty=t,i.ObjectGetOwnPropertyDescriptor=e,i.ObjectCreate=o,i.ArraySlice=s,i.patchClass=P,i.wrapWithCurrentZone=u,i.filterProperties=ce,i.attachOriginToPatched=C,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Z,i.getGlobalObjects=function(){return{globalSources:F,zoneSymbolEventNames:k,eventNames:ae,isBrowser:g,isMix:N,isNode:O,TRUE_STR:"true",FALSE_STR:"false",ZONE_SYMBOL_PREFIX:c,ADD_EVENT_LISTENER_STR:"addEventListener",REMOVE_EVENT_LISTENER_STR:"removeEventListener"}}})),
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function(e){var t,r=e.__Zone_symbol_prefix||"__zone_symbol__";e[(t="legacyPatch",r+t)]=function(){var t=e.Zone;t.__load_patch("defineProperty",(function(e,t,r){r._redefineProperty=he,pe()})),t.__load_patch("registerElement",(function(e,t,r){!function(e,t){var r=t.getGlobalObjects(),n=r.isBrowser,o=r.isMix;(n||o)&&"registerElement"in e.document&&t.patchCallbacks(t,document,"Document","registerElement",["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"])}(e,r)})),t.__load_patch("EventTargetLegacy",(function(e,t,r){_e(e,r),Te(r,e)}))}}("undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{});
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var me=p("zoneTask");function Oe(e,t,r,n){var o=null,s=null;r+=n;var i={};function a(t){var r=t.data;return r.args[0]=function(){try{t.invoke.apply(this,arguments)}finally{t.data&&t.data.isPeriodic||("number"==typeof r.handleId?delete i[r.handleId]:r.handleId&&(r.handleId[me]=null))}},r.handleId=o.apply(e,r.args),t}function c(e){return s(e.data.handleId)}o=b(e,t+=n,(function(r){return function(o,s){if("function"==typeof s[0]){var u={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?s[1]||0:void 0,args:s},p=l(t,s[0],u,a,c);if(!p)return p;var h=p.data.handleId;return"number"==typeof h?i[h]=p:h&&(h[me]=p),h&&h.ref&&h.unref&&"function"==typeof h.ref&&"function"==typeof h.unref&&(p.ref=h.ref.bind(h),p.unref=h.unref.bind(h)),"number"==typeof h||h?h:p}return r.apply(e,s)}})),s=b(e,r,(function(t){return function(r,n){var o,s=n[0];"number"==typeof s?o=i[s]:(o=s&&s[me])||(o=s),o&&"string"==typeof o.type?"notScheduled"!==o.state&&(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&("number"==typeof s?delete i[s]:s&&(s[me]=null),o.zone.cancelTask(o)):t.apply(e,n)}}))}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ge(e,t){if(!Zone[t.symbol("patchEventTarget")]){for(var r=t.getGlobalObjects(),n=r.eventNames,o=r.zoneSymbolEventNames,s=r.TRUE_STR,i=r.FALSE_STR,a=r.ZONE_SYMBOL_PREFIX,c=0;c<n.length;c++){var u=n[c],l=a+(u+i),p=a+(u+s);o[u]={},o[u][i]=l,o[u][s]=p}var h=e.EventTarget;if(h&&h.prototype)return t.patchEventTarget(e,[h&&h.prototype]),!0}}
/**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
Zone.__load_patch("legacy",(function(e){var t=e[Zone.__symbol__("legacyPatch")];t&&t()})),Zone.__load_patch("timers",(function(e){Oe(e,"set","clear","Timeout"),Oe(e,"set","clear","Interval"),Oe(e,"set","clear","Immediate")})),Zone.__load_patch("requestAnimationFrame",(function(e){Oe(e,"request","cancel","AnimationFrame"),Oe(e,"mozRequest","mozCancel","AnimationFrame"),Oe(e,"webkitRequest","webkitCancel","AnimationFrame")})),Zone.__load_patch("blocking",(function(e,t){for(var r=["alert","prompt","confirm"],n=0;n<r.length;n++)b(e,r[n],(function(r,n,o){return function(n,s){return t.current.run(r,e,s,o)}}))})),Zone.__load_patch("EventTarget",(function(e,t,r){!function(e,t){t.patchEventPrototype(e,t)}(e,r),ge(e,r);var n=e.XMLHttpRequestEventTarget;n&&n.prototype&&r.patchEventTarget(e,[n.prototype]),P("MutationObserver"),P("WebKitMutationObserver"),P("IntersectionObserver"),P("FileReader")})),Zone.__load_patch("on_property",(function(e,t,r){le(r,e)})),Zone.__load_patch("customElements",(function(e,t,r){!function(e,t){var r=t.getGlobalObjects(),n=r.isBrowser,o=r.isMix;(n||o)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,r)})),Zone.__load_patch("XHR",(function(e,t){!function(e){var h=e.XMLHttpRequest;if(h){var f=h.prototype,d=f[i],E=f[a];if(!d){var _=e.XMLHttpRequestEventTarget;if(_){var T=_.prototype;d=T[i],E=T[a]}}var m=b(f,"open",(function(){return function(e,t){return e[n]=0==t[2],e[c]=t[1],m.apply(e,t)}})),O=p("fetchTaskAborting"),g=p("fetchTaskScheduling"),N=b(f,"send",(function(){return function(e,r){if(!0===t.current[g])return N.apply(e,r);if(e[n])return N.apply(e,r);var o={target:e,url:e[c],isPeriodic:!1,args:r,aborted:!1},s=l("XMLHttpRequest.send",R,o,S,I);e&&!0===e[u]&&!o.aborted&&"scheduled"===s.state&&s.invoke()}})),v=b(f,"abort",(function(){return function(e,n){var o=e[r];if(o&&"string"==typeof o.type){if(null==o.cancelFn||o.data&&o.data.aborted)return;o.zone.cancelTask(o)}else if(!0===t.current[O])return v.apply(e,n)}}))}function S(e){var n=e.data,c=n.target;c[s]=!1,c[u]=!1;var l=c[o];d||(d=c[i],E=c[a]),l&&E.call(c,"readystatechange",l);var p=c[o]=function(){if(c.readyState===c.DONE)if(!n.aborted&&c[s]&&"scheduled"===e.state){var r=c[t.__symbol__("loadfalse")];if(r&&r.length>0){var o=e.invoke;e.invoke=function(){for(var r=c[t.__symbol__("loadfalse")],s=0;s<r.length;s++)r[s]===e&&r.splice(s,1);n.aborted||"scheduled"!==e.state||o.call(e)},r.push(e)}else e.invoke()}else n.aborted||!1!==c[s]||(c[u]=!0)};return d.call(c,"readystatechange",p),c[r]||(c[r]=e),N.apply(c,n.args),c[s]=!0,e}function R(){}function I(e){var t=e.data;return t.aborted=!0,v.apply(t.target,t.args)}}(e);var r=p("xhrTask"),n=p("xhrSync"),o=p("xhrListener"),s=p("xhrScheduled"),c=p("xhrURL"),u=p("xhrErrorBeforeScheduled")})),Zone.__load_patch("geolocation",(function(t){t.navigator&&t.navigator.geolocation&&function(t,r){for(var n=t.constructor.name,o=function(o){var s=r[o],i=t[s];if(i){if(!T(e(t,s)))return"continue";t[s]=function(e){var t=function(){return e.apply(this,_(arguments,n+"."+s))};return C(t,e),t}(i)}},s=0;s<r.length;s++)o(s)}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])})),Zone.__load_patch("PromiseRejectionEvent",(function(e,t){function r(t){return function(r){B(e,t).forEach((function(n){var o=e.PromiseRejectionEvent;if(o){var s=new o(t,{promise:r.promise,reason:r.rejection});n.invoke(s)}}))}}e.PromiseRejectionEvent&&(t[p("unhandledPromiseRejectionHandler")]=r("unhandledrejection"),t[p("rejectionHandledHandler")]=r("rejectionhandled"))}))})?o.call(t,r,t,e):o)||(e.exports=s)}).call(this,r(349))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}]);