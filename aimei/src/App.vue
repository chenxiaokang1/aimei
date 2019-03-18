<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// document.addEventListener('plusready', function() {
//         var webview = plus.webview.currentWebview();
//         plus.key.addEventListener('backbutton', function() {
//             webview.canBack(function(e) {
//                 if(e.canBack) {
//                     webview.back();             
//                 } else {
//                     //webview.close(); //hide,quit
//                     //plus.runtime.quit();
//                     mui.plusReady(function() {
//                         //首页返回键处理
//                         //处理逻辑：1秒内，连续两次按返回键，则退出应用；
//                         var first = null;
//                         plus.key.addEventListener('backbutton', function() {
//                             //首次按键，提示‘再按一次退出应用’
//                             if (!first) {
//                                 first = new Date().getTime();
//                                 mui.toast('再按一次退出应用');
//                                 setTimeout(function() {
//                                     first = null;
//                                 }, 1000);
//                             } else {
//                                 if (new Date().getTime() - first < 1500) {
//                                     plus.runtime.quit();
//                                 }
//                             }
//                         }, false);
//                     });
//                 }
//             })
//         });
//     });

export default {
  name: "App",
  methods: {
  
  },
  
};
</script>

<style>
/* 让你的H5看起来像一个App */
html {
  -webkit-user-select: none; /* 禁止选择文字 */
  -webkit-touch-callout: none; /* 禁止长按系统默认菜单 */
  list-style-type: none;
  /*height: 100%;*/
}
body {
  position: absolute;
  top: 0px;
  width: 100%;
  overflow: auto;
  height: 100%;
  overflow-y: scroll;
  background: #f5f5f5;
  -webkit-overflow-scrolling: touch;
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
  font-family: auto;
}

input,
select,
textarea,
[contenteditable] {
  font-size: 100%;
  -webkit-user-select: initial;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 500;
}

em {
  font-style: normal;
}

a,
a:hover,
a:visited,
a:active {
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bread-word {
  word-wrap: break-word;
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
#app {
  width: 100%;
  height: 100%;
}
.van-cell,.van-cell--borderless, .van-field{
  background: #FFF !important;
  border-radius: 1rem;
  
}

i{
  font-style: normal;
}
</style>
