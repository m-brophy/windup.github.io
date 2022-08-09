"use strict";(self.webpackChunkwindup_website=self.webpackChunkwindup_website||[]).push([[969],{6050:function(e,t,a){var r=a(3366),n=a(7294),c=a(7059),o=["image","innerClassName"];t.Z=function(e){var t=e.image,l=e.innerClassName,s=(0,r.Z)(e,o),i=(0,c.c)(t);return i?n.createElement("div",s,n.createElement(c.G,{className:l,image:i,alt:"Hero"})):n.createElement("div",s,n.createElement(c.S,{alt:"Hero image",layout:"fullWidth",aspectRatio:"2.22",className:l,src:"../images/home-social-media.jpg",__imageData:a(6163)}))}},5677:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(1597);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=(0,r.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,s=void 0===l?24:l,i=o(e,["color","size"]);return r.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("polyline",{points:"12 8 8 12 12 16"}),r.createElement("line",{x1:"16",y1:"12",x2:"8",y2:"12"}))}));l.displayName="ArrowLeftCircle";var s=l,i=a(1857),m=function(e){var t=e.pageContext,a=t.previousPagePath,c=t.nextPagePath,o=t.humanPageNumber,l=t.numberOfPages,m="px-3 flex items-center space-x-3 py-2 border-2 border-base-400 rounded hover:border-base-500 focus:ring-2 focus:ring-base-500 font-medium",d="inline h-5 w-5";return r.createElement("nav",{className:"flex justify-between my-8 items-center"},l>1&&r.createElement("div",{className:"font-medium"},"Page ",o," of ",l),r.createElement("div",{className:"flex space-x-3"},a&&r.createElement(n.Link,{to:a+"/",rel:"prev",className:m},r.createElement(s,{"aria-hidden":!0,className:d}),r.createElement("div",{className:"flex space-x-1"},r.createElement("span",null,"Previous"),r.createElement("span",{className:"sr-only md:not-sr-only"},"page"))),c&&r.createElement(n.Link,{to:c+"/",rel:"next",className:m},r.createElement("div",{className:"flex space-x-1"},r.createElement("span",null,"Next"),r.createElement("span",{className:"sr-only md:not-sr-only"},"page")),r.createElement(i.Z,{"aria-hidden":!0,className:d}))))}},2095:function(e,t,a){var r=a(7294),n=a(1597),c=a(6050);t.Z=function(e){var t=e.post,a=e.condensed,o="/blog/"+t.slug;return r.createElement("div",{className:a?"":"md:first:col-span-2"},r.createElement(n.Link,{to:o,className:"shadow-post hover:shadow-post-hover flex flex-col bg-base-100 h-full p-4 group rounded-lg focus:ring-2 focus:ring-primary-400 border-2 border-slate-200 hover:border-slate-400"},r.createElement(c.Z,{className:"before:text-transparent before:absolute before:pointer-events-none before:z-[1] before:w-full before:h-full before:shadow-image before:rounded-md relative rounded-md overflow-hidden",image:t.frontmatter.image}),r.createElement("p",{className:"flex justify-between border-b border-base-300 py-3 text-base-500 font-bold"},t.frontmatter.date),r.createElement("h2",{className:"my-2 font-headings font-bold text-lg tracking-wide group-hover:text-primary-700"},t.frontmatter.title),!0!==a&&r.createElement("p",{className:"line-clamp-3",style:{minWidth:400}},t.frontmatter.description?t.frontmatter.description:t.excerpt)))}},3450:function(e,t,a){a.r(t);var r=a(7294),n=a(262),c=a(5677),o=a(2095);t.default=function(e){var t=e.data,a=e.pageContext,l=t.allMdxByTag.nodes,s=a.tag;return r.createElement("div",{className:"max-w-screen-xl page-wrapper"},r.createElement(n.Z,{title:"Posts under "+s}),r.createElement("h1",{className:"my-6 font-headings font-bold text-2xl lg:text-3xl tracking-wide"},"Posts under ",r.createElement("mark",{className:"capitalize italic"},s)),r.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6 my-6"},l.map((function(e){return r.createElement(o.Z,{key:e.id,post:e,condensed:!0})}))),r.createElement(c.Z,{pageContext:a}))}},3366:function(e,t,a){function r(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return r}})},6163:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#182838","images":{"fallback":{"src":"/static/7dc87c2488acc85ac383236cb8fd4aae/a7439/home-social-media.jpg","srcSet":"/static/7dc87c2488acc85ac383236cb8fd4aae/ffae8/home-social-media.jpg 750w,\\n/static/7dc87c2488acc85ac383236cb8fd4aae/a7439/home-social-media.jpg 800w","sizes":"100vw"},"sources":[{"srcSet":"/static/7dc87c2488acc85ac383236cb8fd4aae/5f165/home-social-media.webp 750w,\\n/static/7dc87c2488acc85ac383236cb8fd4aae/3d895/home-social-media.webp 800w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.44999999999999996}')}}]);
//# sourceMappingURL=component---src-templates-tag-js-cea770fa2e9edca680bb.js.map