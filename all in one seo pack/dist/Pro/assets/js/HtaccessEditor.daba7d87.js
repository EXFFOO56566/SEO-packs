import{a as o}from"./vuex.esm.19624049.js";import{B as r}from"./Editor.85f5f167.js";import{C as a}from"./index.49befd74.js";import{C as n}from"./Card.5b6dc094.js";import{C as i}from"./SettingsRow.12bb257d.js";import{n as c}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./_commonjsHelpers.10c44588.js";import"./Caret.2b15c7cb.js";import"./client.1a03de11.js";import"./translations.b7a6f669.js";import"./default-i18n.31663a66.js";import"./constants.84432201.js";import"./isArrayLikeObject.44af21ce.js";import"./index.59e9b4d0.js";import"./helpers.8308b279.js";import"./portal-vue.esm.c4534d19.js";import"./Tooltip.e966c16d.js";import"./Slide.fe1da4fd.js";import"./Row.67f2b082.js";const l={components:{BaseEditor:r,CoreAlert:a,CoreCard:n,CoreSettingsRow:i},data(){return{strings:{htaccessEditor:this.$t.__(".htaccess Editor",this.$td),editHtaccess:this.$t.__("Edit .htaccess",this.$td),description:this.$t.sprintf(this.$t.__("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s",this.$td),"<strong>","</strong>")}}},computed:{...o(["htaccessError"])}};var d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-tools-htaccess-editor"},[s("core-card",{attrs:{slug:"htaccessEditor","header-text":t.strings.htaccessEditor}},[s("div",{staticClass:"aioseo-settings-row aioseo-section-description",domProps:{innerHTML:t._s(t.strings.description)}}),s("core-settings-row",{attrs:{name:t.strings.editHtaccess,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t.htaccessError?s("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.htaccessError)+" ")]):t._e(),s("base-editor",{staticClass:"htaccess-editor",attrs:{disabled:!t.$aioseo.user.unfilteredHtml,"line-numbers":"",monospace:"","preserve-whitespace":""},model:{value:t.$aioseo.data.htaccess,callback:function(e){t.$set(t.$aioseo.data,"htaccess",e)},expression:"$aioseo.data.htaccess"}})]},proxy:!0}])})],1)],1)},p=[],u=c(l,d,p,!1,null,null,null,null);const L=u.exports;export{L as default};