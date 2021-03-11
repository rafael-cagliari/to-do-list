!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e){r(1,arguments);var t=a(e);return!isNaN(t)}n.r(t);var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var f,m={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return d[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(f.matchPattern);if(!a)return null;var i=a[0],o=n.match(f.parsePattern);if(!o)return null;var u=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){r(2,arguments);var n=a(e).getTime(),i=g(t);return new Date(n+i)}function y(e,t){r(2,arguments);var n=g(t);return w(e,-n)}function v(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var b={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return v("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):v(n+1,2)},d:function(e,t){return v(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return v(e.getUTCHours()%12||12,t.length)},H:function(e,t){return v(e.getUTCHours(),t.length)},m:function(e,t){return v(e.getUTCMinutes(),t.length)},s:function(e,t){return v(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return v(Math.floor(r*Math.pow(10,n-3)),t.length)}};function p(e){r(1,arguments);var t=1,n=a(e),i=n.getUTCDay(),o=(i<t?7:0)+i-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function T(e){r(1,arguments);var t=a(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=p(i),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=p(u);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function M(e){r(1,arguments);var t=T(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=p(n);return a}function C(e,t){r(1,arguments);var n=t||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:g(o),s=null==n.weekStartsOn?u:g(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(e),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function k(e,t){r(1,arguments);var n=a(e,t),i=n.getUTCFullYear(),o=t||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:g(s),d=null==o.firstWeekContainsDate?c:g(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=C(l,t),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var m=C(f,t);return n.getTime()>=h.getTime()?i+1:n.getTime()>=m.getTime()?i:i-1}function x(e,t){r(1,arguments);var n=t||{},a=n.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:g(i),u=null==n.firstWeekContainsDate?o:g(n.firstWeekContainsDate),s=k(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=C(c,t);return d}var P="midnight",S="noon",D="morning",U="afternoon",W="evening",O="night";function E(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+v(i,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+v(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+v(Math.floor(a/60),2)+n+v(a%60,2)}var j={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(e,t)},Y:function(e,t,n,r){var a=k(e,r),i=a>0?a:1-a;return"YY"===t?v(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):v(i,t.length)},R:function(e,t){return v(T(e),t.length)},u:function(e,t){return v(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return v(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return v(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return v(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,i){var o=function(e,t){r(1,arguments);var n=a(e),i=C(n,t).getTime()-x(n,t).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):v(o,t.length)},I:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=p(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(i,{unit:"week"}):v(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,n){var i=function(e){r(1,arguments);var t=a(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=n-i;return Math.floor(o/864e5)+1}(e);return"Do"===t?n.ordinalNumber(i,{unit:"dayOfYear"}):v(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return v(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return v(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return v(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?S:0===a?P:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?W:a>=12?U:a>=4?D:O,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):v(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):v(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Y(a);case"XXXX":case"XX":return q(a);case"XXXXX":case"XXX":default:return q(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(a);case"xxxx":case"xx":return q(a);case"xxxxx":case"xxx":default:return q(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+E(a,":");case"OOOO":default:return"GMT"+q(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+E(a,":");case"zzzz":default:return"GMT"+q(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return v(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return v((r._originalDate||e).getTime(),t.length)}};function N(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var z={p:H,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return N(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",N(a,t)).replace("{{time}}",H(i,t))}};function L(e){return e.getTime()%6e4}function X(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+L(t))%6e4:L(t))}var B=["D","DD"],F=["YY","YYYY"];function Q(e){return-1!==B.indexOf(e)}function G(e){return-1!==F.indexOf(e)}function _(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,J=/''/g,V=/[a-zA-Z]/;function K(e){return e.match(I)[1].replace(J,"'")}const $=[{name:"limpeza",tasks:[{name:"lavar",description:"bem direitinho",priority:2,due_date:"01/01/2021",done:"no",completed:"no",deleted:"no"}]}];let Z=0,ee="no",te="no";console.log(function(e,t,n){r(2,arguments);var i=String(t),u=n||{},s=u.locale||m,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:g(c),l=null==u.firstWeekContainsDate?d:g(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,f=null==h?0:g(h),w=null==u.weekStartsOn?f:g(u.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var v=a(e);if(!o(v))throw new RangeError("Invalid time value");var b=X(v),p=y(v,b),T={firstWeekContainsDate:l,weekStartsOn:w,locale:s,_originalDate:v},M=i.match(R).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,s.formatLong,T):e})).join("").match(A).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return K(e);var n=j[t];if(n)return!u.useAdditionalWeekYearTokens&&G(e)&&_(e),!u.useAdditionalDayOfYearTokens&&Q(e)&&_(e),n(p,e,s.localize,T);if(t.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return M}(new Date(2014,1,11),"yyyy-MM-dd"));const ne=()=>{for(let e=0;e<$[Z].tasks.length;++e)"yes"==$[Z].tasks[e].deleted&&$[Z].tasks.splice(e,1);oe()},re=e=>{for(let t=0;t<$.length;++t)$[t].name==e&&(ee="yes",alert("A project with that name already exists"))},ae=e=>{for(let t=0;t<$[Z].tasks.length;++t)$[Z].tasks.name==e&&(te="yes",alert("A task with this name already exists within this project"))},ie=()=>{let e=document.querySelector("#projects");e.innerHTML="";for(let t=0;t<$.length;++t){let n=document.createElement("button");n.innerText=$[t].name,n.id=$[t].name,n.onclick=function(){for(let e=0;e<$.length;e++)$[e].name==n.id&&(Z=e);oe()},e.appendChild(n),oe()}},oe=()=>{ue(),(()=>{let e=document.querySelector("#tasks");if(null!=$[Z])for(let t=0;t<$[Z].tasks.length;++t){let n=e.insertRow();n.id=$[Z].tasks[t].name,"high"==$[Z].tasks[t].priority&&(n.style.color="red"),"medium"==$[Z].tasks[t].priority&&(n.style.color="orange"),"low"==$[Z].tasks[t].priority&&(n.style.color="green");let r=n.insertCell(0),a=n.insertCell(1),i=n.insertCell(2);r.innerText=$[Z].tasks[t].name,a.innerText=$[Z].tasks[t].due_date,i.innerHTML="<button>"+$[Z].tasks[t].deleted+"</button>",i.onclick=function(){$[Z].tasks[t].deleted="yes",ne()}}})()},ue=()=>{let e=document.querySelector("#tasks"),t=document.querySelectorAll("tr").length-1;for(i=t;i>0;--i)e.deleteRow(i)};window.newTask=()=>{name=document.getElementById("new_task").value,ae(name),"yes"!=te&&(description=document.getElementById("description").value,priority=document.querySelector("input[name=urgency]:checked").value,due_date="01/01/2021",done="no",completed="no",deleted="no",$[Z].tasks.push({name:name,description:description,priority:priority,due_date:due_date,done:done,completed:completed,deleted:deleted}),oe())},window.newProject=()=>{const e=document.getElementById("new_project").value;if(re(e),"yes"==ee)return void(ee="no");$.push({name:e,tasks:[],deleted:"no"}),ie()},window.deleteProject=()=>{if(0==$.length)return;let e=document.querySelector("#projects");if(0!=$.length){for(let t=0;t<e.children.length;++t)e.children[t].id==$[Z].name&&e.removeChild(e.children[t]);$.splice(Z,1),oe()}else e.remove(e.firstElementChild)},window.deleteTask=ne,ie()}]);