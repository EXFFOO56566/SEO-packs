import{c as a,a as r}from"./vuex.esm.19624049.js";import{v as l}from"./helpers.8308b279.js";import{B as d}from"./Checkbox.eb948ddb.js";import{B as c}from"./RadioToggle.980c8ff8.js";import{C as u,S as p}from"./index.49befd74.js";import{C as h}from"./Card.5b6dc094.js";import{C as _}from"./PostTypeOptions.d425d6af.js";import{C as m}from"./ProBadge.7aea483a.js";import{C as g}from"./SettingsRow.12bb257d.js";import{C as $}from"./Tooltip.e966c16d.js";import{G as v,a as y}from"./Row.67f2b082.js";import{n as f}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./Checkmark.57e6a235.js";import"./client.1a03de11.js";import"./_commonjsHelpers.10c44588.js";import"./translations.b7a6f669.js";import"./default-i18n.31663a66.js";import"./Caret.2b15c7cb.js";import"./constants.84432201.js";import"./isArrayLikeObject.44af21ce.js";import"./index.59e9b4d0.js";import"./portal-vue.esm.c4534d19.js";import"./Slide.fe1da4fd.js";import"./HighlightToggle.a9c09bdd.js";import"./Radio.2eaa81c8.js";const b={components:{BaseCheckbox:d,BaseRadioToggle:c,CoreAlert:u,CoreCard:h,CorePostTypeOptions:_,CoreProBadge:m,CoreSettingsRow:g,CoreTooltip:$,GridColumn:v,GridRow:y,SvgCircleQuestionMark:p},data(){return{strings:{advanced:this.$t.__("Advanced Settings",this.$td),truSeo:this.$t.__("TruSEO Score & Content",this.$td),truSeoDescription:this.$t.__("Enable our TruSEO score to help you optimize your content for maximum traffic.",this.$td),headlineAnalyzer:this.$t.__("Headline Analyzer",this.$td),headlineAnalyzerDescription:this.$t.__("Enable our Headline Analyzer to help you write irresistible headlines and rank better in search results.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),postTypeColumns:this.$t.__("Post Type Columns",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.sprintf(this.$t.__("Select which Post Types you want to use the %1$s columns with.",this.$td),"AIOSEO"),usageTracking:this.$t.__("Usage Tracking",this.$td),adminBarMenu:this.$t.__("Admin Bar Menu",this.$td),adminBarMenuDescription:this.$t.sprintf(this.$t.__("This adds %1$s to the admin toolbar for easy access to your SEO settings.",this.$td),"AIOSEO"),dashboardWidgets:this.$t.__("Dashboard Widgets",this.$td),dashboardWidgetsDescription:this.$t.sprintf(this.$t.__("Select which %1$s widgets to display on the dashboard.",this.$td),"AIOSEO"),announcements:this.$t.__("Announcements",this.$td),announcementsDescription:this.$t.__("This allows you to hide plugin announcements and update details.",this.$td),automaticUpdates:this.$t.__("Automatic Updates",this.$td),all:this.$t.__("All (recommended)",this.$td),allDescription:this.$t.__("You are getting the latest features, bugfixes, and security updates as they are released.",this.$td),minor:this.$t.__("Minor Only",this.$td),minorDescription:this.$t.__("You are getting bugfixes and security updates, but not major features.",this.$td),none:this.$t.__("None",this.$td),noneDescription:this.$t.__("You will need to manually update everything.",this.$td),usageTrackingDescription:this.$t.__("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.",this.$td),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf(this.$t.__("This Admin Bar feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetsUpsell:this.$t.sprintf(this.$t.__("The Dashboard Widget feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:this.$t.__("Taxonomy Columns",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.sprintf(this.$t.__("Select which Taxonomies you want to use the %1$s columns with.",this.$td),"AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf(this.$t.__("This feature is only for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf(this.$t.__("Uninstall %1$s",this.$td),"AIOSEO"),uninstallAioseoDescription:this.$t.sprintf(this.$t.__("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.",this.$td),"AIOSEO"),headlineAnalyzerWarning:this.$t.sprintf(this.$t.__("The Headline Analyzer is only available in %1$s and up. %2$s",this.$td),"WordPress 5.2",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"updateWordPress",!0))}}},computed:{...a(["settings","isUnlicensed"]),...r(["options"]),adminBarMenu:{get(){return this.isUnlicensed?!0:this.options.advanced.adminBarMenu},set(n){this.options.advanced.adminBarMenu=n}},widgets(){return[{key:"seoSetup",label:this.$t.__("SEO Setup Wizard",this.$td),tooltip:this.$t.__("Our SEO Setup Wizard dashboard widget helps you remember to finish setting up some initial crucial settings for your site to help you rank higher in search results. Once the setup wizard is completed this widget will automatically disappear.",this.$td)},{key:"seoOverview",label:this.$t.__("SEO Overview",this.$td),tooltip:this.$t.__("Our SEO Overview widget helps you determine which posts or pages you should focus on for content updates to help you rank higher in search results.",this.$td)},{key:"seoNews",label:this.$t.__("SEO News",this.$td),tooltip:this.$t.__("Our SEO News widget provides helpful links that enable you to get the most out of your SEO and help you continue to rank higher than your competitors in search results.",this.$td)}]}},methods:{versionCompare:l,updateDashboardWidgets(n,t){if(n){const e=this.options.advanced.dashboardWidgets;e.push(t.key),this.$set(this.options.advanced,"dashboardWidgets",e);return}const s=this.options.advanced.dashboardWidgets.findIndex(e=>e===t.key);s!==-1&&this.$delete(this.options.advanced.dashboardWidgets,s)},isDashboardWidgetChecked(n){return this.isUnlicensed?!0:this.options.advanced.dashboardWidgets.includes(n.key)}}};var k=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-advanced"},[s("core-card",{attrs:{slug:"advanced","header-text":t.strings.advanced}},[s("core-settings-row",{attrs:{name:t.strings.truSeo},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.options.advanced.truSeo,callback:function(e){t.$set(t.options.advanced,"truSeo",e)},expression:"options.advanced.truSeo"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.truSeoDescription)+" ")])]},proxy:!0}])}),s("core-settings-row",{attrs:{name:t.strings.headlineAnalyzer},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{attrs:{disabled:t.versionCompare(t.$aioseo.wpVersion,"5.2","<")},model:{value:t.options.advanced.headlineAnalyzer,callback:function(e){t.$set(t.options.advanced,"headlineAnalyzer",e)},expression:"options.advanced.headlineAnalyzer"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.headlineAnalyzerDescription)+" ")]),t.versionCompare(t.$aioseo.wpVersion,"5.2","<")?s("core-alert",{staticClass:"warning",attrs:{type:"yellow"}},[s("div",{domProps:{innerHTML:t._s(t.strings.headlineAnalyzerWarning)}})]):t._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{name:t.strings.postTypeColumns},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.advanced.postTypes.all,callback:function(e){t.$set(t.options.advanced.postTypes,"all",e)},expression:"options.advanced.postTypes.all"}},[t._v(" "+t._s(t.strings.includeAllPostTypes)+" ")]),t.options.advanced.postTypes.all?t._e():s("core-post-type-options",{attrs:{options:t.options.advanced,type:"postTypes"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectPostTypes)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0))}})])]},proxy:!0}])}),s("core-settings-row",{scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(t.strings.taxonomyColumns)+" "),t.isUnlicensed?s("core-pro-badge"):t._e()]},proxy:!0},{key:"content",fn:function(){return[t.isUnlicensed?s("base-checkbox",{attrs:{disabled:"",size:"medium",value:!0}},[t._v(" "+t._s(t.strings.includeAllTaxonomies)+" ")]):t._e(),t.isUnlicensed?t._e():s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.advanced.taxonomies.all,callback:function(e){t.$set(t.options.advanced.taxonomies,"all",e)},expression:"options.advanced.taxonomies.all"}},[t._v(" "+t._s(t.strings.includeAllTaxonomies)+" ")]),!t.options.advanced.taxonomies.all&&!t.isUnlicensed?s("core-post-type-options",{attrs:{options:t.options.advanced,type:"taxonomies"}}):t._e(),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectTaxonomies)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0))}})]),t.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:t._s(t.strings.taxonomyColumnsUpsell)}})]):t._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{align:""},scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(t.strings.adminBarMenu)+" "),t.isUnlicensed?s("core-pro-badge"):t._e()]},proxy:!0},{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{disabled:t.isUnlicensed,name:"adminBarMenu",options:[{label:t.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:t.adminBarMenu,callback:function(e){t.adminBarMenu=e},expression:"adminBarMenu"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.adminBarMenuDescription)+" ")]),t.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:t._s(t.strings.adminBarMenuUpsell)}})]):t._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{align:""},scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(t.strings.dashboardWidgets)+" "),t.isUnlicensed?s("core-pro-badge"):t._e()]},proxy:!0},{key:"content",fn:function(){return[s("grid-row",t._l(t.widgets,function(e,i){return s("grid-column",{key:i},[s("base-checkbox",{attrs:{size:"medium",disabled:t.isUnlicensed,value:t.isDashboardWidgetChecked(e)},on:{input:o=>t.updateDashboardWidgets(o,e)}},[t._v(" "+t._s(e.label)+" "),s("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(e.tooltip)+" ")]},proxy:!0}],null,!0)},[s("svg-circle-question-mark")],1)],1)],1)}),1),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.dashboardWidgetsDescription)+" ")]),t.isUnlicensed?s("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[s("div",{domProps:{innerHTML:t._s(t.strings.dashboardWidgetsUpsell)}})]):t._e()]},proxy:!0}])}),s("core-settings-row",{attrs:{name:t.strings.announcements,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"announcements",options:[{label:t.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:t.options.advanced.announcements,callback:function(e){t.$set(t.options.advanced,"announcements",e)},expression:"options.advanced.announcements"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.announcementsDescription)+" ")])]},proxy:!0}])}),t.$isPro?s("core-settings-row",{attrs:{align:""},scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(t.strings.automaticUpdates)+" ")]},proxy:!0},{key:"content",fn:function(){return[s("base-radio-toggle",{attrs:{name:"autoUpdates",options:[{label:t.strings.all,value:"all"},{label:t.strings.minor,value:"minor"},{label:t.strings.none,value:"none",activeClass:"dark"}]},model:{value:t.options.advanced.autoUpdates,callback:function(e){t.$set(t.options.advanced,"autoUpdates",e)},expression:"options.advanced.autoUpdates"}}),s("div",{staticClass:"aioseo-description"},[t.options.advanced.autoUpdates==="all"?s("span",[t._v(t._s(t.strings.allDescription))]):t._e(),t.options.advanced.autoUpdates==="minor"?s("span",[t._v(t._s(t.strings.minorDescription))]):t._e(),t.options.advanced.autoUpdates==="none"?s("span",[t._v(t._s(t.strings.noneDescription))]):t._e()])]},proxy:!0}],null,!1,89936591)}):t._e(),t.$isPro?t._e():s("core-settings-row",{scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(t.strings.usageTracking)+" "),s("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[s("div",{domProps:{innerHTML:t._s(t.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[s("svg-circle-question-mark")],1)]},proxy:!0},{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.options.advanced.usageTracking,callback:function(e){t.$set(t.options.advanced,"usageTracking",e)},expression:"options.advanced.usageTracking"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.usageTrackingDescription)+" ")])]},proxy:!0}],null,!1,309685458)}),s("core-settings-row",{attrs:{name:t.strings.uninstallAioseo},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.options.advanced.uninstall,callback:function(e){t.$set(t.options.advanced,"uninstall",e)},expression:"options.advanced.uninstall"}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.uninstallAioseoDescription)+" ")])]},proxy:!0}])})],1)],1)},S=[],T=f(b,k,S,!1,null,null,null,null);const J=T.exports;export{J as default};