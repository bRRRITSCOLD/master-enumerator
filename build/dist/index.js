class Enumerator{constructor(e,t={}){this._caseSensitive=!!t.caseSensitive&&t.caseSensitive;for(let t=0;t<e.length;t++)Object.defineProperty(this,`${e[t].toUpperCase()}`,{get:()=>!0===this._caseSensitive?`${e[t]}`:!1===this._caseSensitive?`${e[t].toUpperCase()}`:void 0});this.enumerations=[];for(let t=0;t<e.length;t++)!0===this._caseSensitive&&this.enumerations.push({key:`${e[t].toUpperCase()}`,value:e[t]}),!1===this._caseSensitive&&this.enumerations.push({key:`${e[t].toUpperCase()}`,value:`${e[t].toUpperCase()}`})}validValue(e){let t=e;!1===this._caseSensitive&&(t=e.toUpperCase());let s=!1;const i=[];for(let e=0;e<this.enumerations.length;e++)i.push(this.enumerations[e].value);for(let e=0;e<i.length;e++)this[i[e].toUpperCase()]===t&&(s=!0);return s}enumerationKeys(){const e=[];for(let t=0;t<this.enumerations.length;t++)e.push(this.enumerations[t].key);return e}enumerationValues(){const e=[];for(let t=0;t<this.enumerations.length;t++)e.push(this.enumerations[t].value);return e}}module.exports={Enumerator:Enumerator};