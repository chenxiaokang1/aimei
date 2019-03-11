<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 让你的H5看起来像一个App */
html {
    -webkit-user-select: none; /* 禁止选择文字 */
    -webkit-touch-callout: none;  /* 禁止长按系统默认菜单 */
    list-style-type:none;
    /*height: 100%;*/
}
body {
    position: absolute;   
    top:0px;
    width:100%;
    overflow:auto;
    height: 100%;
    overflow-y: scroll;    
    
   -webkit-overflow-scrolling: touch;  
    padding-bottom: 1rem;
    /*防止长按出现阴影*/
    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;
}
* {
    -webkit-box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
}
 
input,select,textarea,[contenteditable] {
    font-size: 100%;
    -webkit-user-select: initial;
}
 
table {
    border-collapse: collapse;
    border-spacing: 0
}
 
h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: 500
}
 
em {
    font-style: normal;
}
 
a, a:hover, a:visited, a:active {
    text-decoration: none;
    color: inherit;
    /*防止长按出现阴影*/
    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;
}
 
button {
    background: #fff;
    /*防止长按出现阴影*/
    -webkit-tap-highlight-color: transparent !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;
    outline: none; /* android上防止点击时出现外框 */
}
 
.ellipsis2 {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break:break-all;
}
 
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 
.bread-word {
    word-wrap:break-word;
}

.fl {
    float: left;
}

.fr {
    float: right;
}
.clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
}

.clearfix {
    zoom: 1;
}
</style>
