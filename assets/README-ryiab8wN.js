import{_ as g,d as f,c as h,a as e,w as c,v as i,b as p,e as r,f as o,r as _,o as u}from"./sites-CFYcBLxc.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const x=`<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in icons"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        :data-name="item"
        @click="onIconTap($event, { name: item })"
      />

      <view class="demo__card-name">
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script>
import tIcon from 'tdesign-uniapp/icon/icon';
import icons from '../data';

export default {
  components: {
    tIcon,
  },
  data() {
    return {
      icons,
    };
  },
  created() {},
  methods: {
    onIconTap(event, { name, type }) {
      if (type === 'prefix') {
        return;
      }

      uni.showToast({
        title: name,
        icon: 'none',
        duration: 1000,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,v=`<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in prefixIcons"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        prefix="icon"
        :data-name="item"
        data-type="prefix"
        @click="onIconTap($event, { name: item, type: 'prefix' })"
      />

      <view class="demo__card-name">
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script>
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tIcon,
  },
  data() {
    return {
      prefixIcons: ['a-0', 'a-1h', 'a-2h', 'a-3h'],
    };
  },
  created() {},
  methods: {
    onIconTap(event, { name, type }) {
      if (type === 'prefix') {
        return;
      }
      uni.showToast({
        title: name,
        icon: 'none',
        duration: 1000,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in imageIconList"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        :data-name="item"
        @click="onIconTap($event, { name: item })"
      />
    </view>
  </view>
</template>

<script>
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tIcon,
  },
  data() {
    return {
      imageIconList: ['https://tdesign.gtimg.com/mobile/demos/icon1.png', 'https://tdesign.gtimg.com/mobile/demos/icon2.png'],
    };
  },
  created() {},
  methods: {
    onIconTap(event, { name, type }) {
      if (type === 'prefix') {
        return;
      }

      uni.showToast({
        title: name,
        icon: 'none',
        duration: 1000,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=f({data(){return{DemoexamplebaseCode:x,DemoexamplecustomCode:v,DemoexampleiconImageCode:k}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(n){this.$route.query.tab!==n&&this.$router.push({query:{tab:n}})}}},mounted(){const{tdDocContent:n,tdDocHeader:s,tdDocTabs:t,tdDocPhone:a}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/icon/icon";s&&(s.docInfo={title:"Icon 图标",desc:"图标。"}),t&&(t.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],t.onchange=({detail:m})=>this.tab=m),a&&(a.qrcodeUrl=l),b.highlightAll(),this.$emit("loaded",()=>{n.pageStatus="show"})}}),w={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},D={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"base","component-name":"icon"},E=["tab"],I={name:"DEMO"},q=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/icon/icon&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="常见问题">常见问题 <a class="header-anchor" href="#常见问题"></a></h2><details><summary> 控制台告警：Failed to load font <span class="icon">👇</span></summary><p style="margin-top:10px;color:rgba(0, 0, 0, .6);"> 告警属于开发者工具的 bug，可以忽略，具体可以看 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html" target="_blank">官网文档</a></p></details><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/wMINibmJ7WSQ" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础组件图标">基础组件图标 <a class="header-anchor" href="#基础组件图标"></a></h3>`,9),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},S=["code"],A={slot:"action"},M=e("h3",{id:"自定义组件图标"},[o("自定义组件图标 "),e("a",{class:"header-anchor",href:"#自定义组件图标"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},R=["code"],N={slot:"action"},F=p(`<p>自定义图标用法，下面以 <code>iconfont</code> 为例</p><h4 id="准备图标文件">准备图标文件 <a class="header-anchor" href="#准备图标文件"></a></h4><p>文件后缀应为<code>.wxss</code>，如下方代码块所示：</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">;</span>  // 使用自定义的字体名称
  ···
<span class="token punctuation">}</span>

<span class="token selector">.icon</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;icon&#39;</span> <span class="token important">!important</span><span class="token punctuation">;</span>  // 字体名称
  ···
<span class="token punctuation">}</span>

<span class="token selector">.icon-a-0:before</span> <span class="token punctuation">{</span>  // icon 图标。注意 FontClass 前缀与 font-family 保持一致
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;\\e64d&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>添加所需图标，下载图标。图标库一般会提供 <strong>在线链接</strong> 或者 <strong>下载至本地</strong> 等使用方式。<strong>在线链接</strong> 方式会指向一个 <code>.css</code> 文件，可以下载或复制其内容，将其修改成后缀名为 <code>.wxss</code> 的文件</li><li>将 <code>.wxss</code> 文件中的 <code>FontClass/Symbol前缀</code> 与 <code>Font Family</code> 两项内容保持一致，如: <code>FontClass/Symbol</code> 前缀为 <code>icon-</code>，则 <code>Font Family</code> 为 <code>icon</code>。</li></ul><blockquote><p>注：若是采用 <code>下载至本地</code> 方式，需关注 <code>.css</code> 和 <code>.ttf</code> 文件。由于微信小程序不支持处理 <code>ttf、woff、eot</code> 等文件，但支持 <code>base64</code>，所以需要将 <code>.ttf</code> 文件转换为 <code>base64</code> (可借助转换工具，如 <a href="https://transfonter.org/" target="_blank" rel="noopener noreferrer">transfonter.org</a>，会得到一个 <code>stylesheet.css</code> 文件)，然后将 <code>.css</code> 文件中的 <code>@font-face {}</code> 内容替换为 <code>stylesheet.css</code> 中的 <code>base64</code> 内容，最后将 <code>.css</code> 文件修改后缀为 <code>.wxss</code></p></blockquote><h4 id="引入自定义图标">引入自定义图标 <a class="header-anchor" href="#引入自定义图标"></a></h4><ul><li>全局引入：在项目 <code>app.wxss</code>，使用 <code>@import</code> 引入上述的 <code>.wxss</code> 文件</li><li>局部引入：在 <code>page</code> 对应的 <code>.wxss</code> 中，使用 <code>@import</code> 引入上述的 <code>.wxss</code> 文件</li></ul><h4 id="自定义图标的使用">自定义图标的使用 <a class="header-anchor" href="#自定义图标的使用"></a></h4><p><code>&lt;t-icon&gt;</code> 组件中的 <code>prefix</code> 属性值与前面设置的 <code>Font Family</code> 保持一致，即 <code>prefix=&quot;icon&quot;</code>，<code>name</code> 属性值为自定义图标名称，如图标的 <code>className</code> 为 <code>icon-a-1h</code>，则 <code>name=&quot;a-1h&quot;</code>。</p><h3 id="图片链接">图片链接 <a class="header-anchor" href="#图片链接"></a></h3>`,11),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-iconImage tdesign-demo-item-- README"},z=["code"],P={slot:"action"},V=e("h3",{id:"全部图标"},[o("全部图标 "),e("a",{class:"header-anchor",href:"#全部图标"})],-1),j={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65",margin:"16px 0"}},B={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},O=e("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),H=[O],J=e("p",{style:{flex:"1"}},[o("大部分图标在 1.8.0 版本中新增，如果发现引入组件库后，部分图标无法使用，请检查安装的组件库`tdesign-miniprogram`的版本。支持中文英文搜索，如果觉得可以再增加其他关键词提示，欢迎到 "),e("a",{href:"https://github.com/Tencent/tdesign-icons/blob/develop/packages/view/src/manifest.js",target:"_blank"}," 图标仓库"),o(" 提交PR，帮我们一起补充。 ")],-1),L=e("td-icons-view",{"framework-content":""},null,-1),U={ref:"tdDocPhone"},G=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/icon/icon",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Q=[G],W=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"icon"},null,-1),Y={name:"API"},K=p('<h3 id="icon-props">Icon Props <a class="header-anchor" href="#icon-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>color</td><td>String</td><td>-</td><td>图标颜色</td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>必需。图标名称或图片链接</td><td>Y</td></tr><tr><td>prefix</td><td>String</td><td>-</td><td>自定义图标前缀</td><td>N</td></tr><tr><td>size</td><td>String / Number</td><td>-</td><td>图标大小, 如 <code>20</code>, <code>20px</code>, <code>48rpx</code>, 默认单位是 <code>px</code></td><td>N</td></tr></tbody></table><h3 id="icon-events">Icon Events <a class="header-anchor" href="#icon-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td>-</td><td>点击图标时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td></tr></tbody></table><h3 id="icon-external-classes">Icon External Classes <a class="header-anchor" href="#icon-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>ant: norma</td><td>ant: norma</td><td>-</td></tr></tbody></table>',9),X=[K],Z={name:"DESIGN"},ee=e("td-doc-empty",null,null,-1),ne=[ee],te=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760416658039"})],-1),oe=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function se(n,s,t,a,l,m){const d=_("Stackblitz");return u(),h("td-doc-content",w,[e("td-doc-header",D,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:n.tab},null,8,E),c(e("div",null,[e("div",I,[q,e("div",C,[e("td-doc-demo",{code:n.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",A,[r(d,{"demo-name":"base","component-name":" README",code:n.DemoexamplebaseCode},null,8,["code"])])],8,S)]),M,e("div",T,[e("td-doc-demo",{code:n.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[e("div",N,[r(d,{"demo-name":"custom","component-name":" README",code:n.DemoexamplecustomCode},null,8,["code"])])],8,R)]),F,e("div",$,[e("td-doc-demo",{code:n.DemoexampleiconImageCode,language:"markup","show-code":"",mode:"open","demo-name":"iconImage","component-name":" README"},[e("div",P,[r(d,{"demo-name":"iconImage","component-name":" README",code:n.DemoexampleiconImageCode},null,8,["code"])])],8,z)]),V,e("div",j,[(u(),h("svg",B,H)),J]),L]),e("td-doc-phone",U,Q,512),W],512),[[i,n.tab==="demo"]]),c(e("div",Y,X,512),[[i,n.tab==="api"]]),c(e("div",Z,ne,512),[[i,n.tab==="design"]]),te,oe],512)}const ce=g(y,[["render",se]]);export{ce as default};
