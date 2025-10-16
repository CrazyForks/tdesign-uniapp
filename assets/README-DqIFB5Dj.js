import{_ as l,d as h,c as f,a as n,w as d,v as c,b as r,e as i,f as u,r as g,o as b}from"./sites-Co6lQ2MM.js";import{P as A}from"./prism-bash-zcnM7wlG.js";const _=`<template>
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
import tIcon from 'tdesign-uniapp/icon/icon.vue';
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
.demo__list {
    display: flex;
    flex-wrap: wrap;
    padding: 16rpx 32rpx;
}

.demo__card {
    flex: 0 0 25%;
    text-align: center;
    margin-bottom: 30rpx;
    color: var(--td-text-color-primary);
}

.demo__card-name {
    font-size: 24rpx;
    color: #999;
}
</style>
`,x=`<template>
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
import tIcon from 'tdesign-uniapp/icon/icon.vue';
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
.demo__list {
    display: flex;
    flex-wrap: wrap;
    padding: 16rpx 32rpx;
}

.demo__card {
    flex: 0 0 25%;
    text-align: center;
}

.demo__card-name {
    font-size: 24rpx;
    color: #999;
}

/* 自定义图标 */
@font-face {
    font-family: 'icon'; /* Project id 3144196 */
    src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPUAAsAAAAACGAAAAOFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDGgqEPIQBATYCJAMUCwwABCAFhDcHQhtVBxHVmy/JfhzGjunMd9u7ZdNoJGL95+B5ckPfvzsIgZjoVHHRKe1qNlEdfUoAPFpzlgKhvLdV7dpf4MyYhRbmw1+ObxM9+wDSmJP2okWn0XkEe1sWSOAJJR4mYA3TSx7kD48ggEsZ9VFNm7ftSsjYQVPHk4DBlwpUtTJ21IhBONyBmagVHAR76U6DbMQCtUo9BzZk75cfVIgDCkvjn9NxeLOhPPTb+R31wtqF6PckEgQ4WwEWoIGih7mk93SgK7pIF6FxhwKGPDTZIOB3rK312yWKZ//hgaDQGBAbvzoIgIYwY8BvFxEI+O0JFPgdCDT4HVVfpN0CwAWWfQ68w1yWUQUvFRUUEJMZ0zBmzKILZ26suXbqHGrh2ZNXV18/fV68hafWnInRi06vPskQ3VV6eKqH9vB2nPDWbNu2C1xZtH31VhgiPfbE7kmo2ba78+R9oy6cueOtuXVuHwt3+kNEdfVYNWfEmhMii067q3cK6kYqetu26F2w6GjUtlO79uXprVE7b7r38YsHl62wxmwPBrvdDvyl7A2Os2v65berseOS461n/fL6PbPim4dlpFSGJIdmpmSGMm3NvmaVrZtVNPePPcwtGCU9i0KcX3dKyKGCTUFnY9aHrCNjTeN5PzcGxQd6498Eh4WH5zXPjbbvdIxJHLz4dnx4QLNlC4Y/nd98/MZvwLSjqfOTGoRGhEX8dfOa50XbtyfEJHVbM+JAnW7F8SnLQr7+lxVUpFRN6PF4ZnpY62/ZybnNs8Ki0qIimiWf7HroYciPBM85E3+uGqdmAKjPamomzPiEAAJN2zkJA0Lr/nY8A8DHwLJq4DAszzgoYIrfbuy7UNRYGTKaoc7Ih2BddD9goQJcXKDWj0Tw8RhT5OIkCKahZFAEEAuNIYUyXAYsPHJgYyiHSyHV+z0iGYhGTCCQwxQAwWEXFCEcgsbhAmW4G7CI4QFsHF7AxXn+ZQ85QYZDxpFxgekHag6eQj1npVcULztmKY8ST8xFwTh0dVvPXdBjXrOmvEXPTEA5ODhvvQ+tDRBz0DhzLZnjvmlo6Cn1HNzqkHFkXIDpB6g5eEos3Fx+RfGyYx5QZ74nQl3hclgPdNS0E9TF4Ce7XrS+vEUPMwFkq4MDzlf70AbpAMThaRpnrpEbknFPg8RoqaG+1uTekpz14a+2RIkWI5bYbAdV7S6ydTKm+/ggVysAAAA=')
        format('woff2');
}

.icon {
    font-family: 'icon' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-a-0:before {
    content: '\\e64d';
}

.icon-a-1h:before {
    content: '\\e64e';
}

.icon-a-2h:before {
    content: '\\e64f';
}

.icon-a-3h:before {
    content: '\\e650';
}
</style>
`,v=`<template>
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
import tIcon from 'tdesign-uniapp/icon/icon.vue';
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
.demo__list {
    display: flex;
    flex-wrap: wrap;
    padding: 16rpx 32rpx;
}

.demo__card {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>
`,y=h({data(){return{DemoexamplebaseCode:_,DemoexamplecustomCode:x,DemoexampleiconImageCode:v}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:t,tdDocPhone:a}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/icon/icon";o&&(o.docInfo={title:"Icon 图标",desc:"图标。"}),t&&(t.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],t.onchange=({detail:m})=>this.tab=m),a&&(a.qrcodeUrl=p),A.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),w={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},k={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"base","component-name":"icon"},E=["tab"],D={name:"DEMO"},I=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TIcon <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/icon/icon.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="常见问题">常见问题 <a class="header-anchor" href="#常见问题"></a></h2><details><summary> 控制台告警：Failed to load font <span class="icon">👇</span></summary><p style="margin-top:10px;color:rgba(0, 0, 0, .6);"> 告警属于开发者工具的 bug，可以忽略，具体可以看 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html" target="_blank">官网文档</a></p></details><h3 id="基础组件图标">基础组件图标 <a class="header-anchor" href="#基础组件图标"></a></h3>`,6),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},F=["code"],P={slot:"action"},N=n("h3",{id:"自定义组件图标"},[u("自定义组件图标 "),n("a",{class:"header-anchor",href:"#自定义组件图标"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},V=["code"],z={slot:"action"},S=r(`<p>自定义图标用法，下面以 <code>iconfont</code> 为例</p><h4 id="准备图标文件">准备图标文件 <a class="header-anchor" href="#准备图标文件"></a></h4><p>文件后缀应为<code>.wxss</code>，如下方代码块所示：</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
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
</code></pre></div><ul><li>添加所需图标，下载图标。图标库一般会提供 <strong>在线链接</strong> 或者 <strong>下载至本地</strong> 等使用方式。<strong>在线链接</strong> 方式会指向一个 <code>.css</code> 文件，可以下载或复制其内容，将其修改成后缀名为 <code>.wxss</code> 的文件</li><li>将 <code>.wxss</code> 文件中的 <code>FontClass/Symbol前缀</code> 与 <code>Font Family</code> 两项内容保持一致，如: <code>FontClass/Symbol</code> 前缀为 <code>icon-</code>，则 <code>Font Family</code> 为 <code>icon</code>。</li></ul><blockquote><p>注：若是采用 <code>下载至本地</code> 方式，需关注 <code>.css</code> 和 <code>.ttf</code> 文件。由于微信小程序不支持处理 <code>ttf、woff、eot</code> 等文件，但支持 <code>base64</code>，所以需要将 <code>.ttf</code> 文件转换为 <code>base64</code> (可借助转换工具，如 <a href="https://transfonter.org/" target="_blank" rel="noopener noreferrer">transfonter.org</a>，会得到一个 <code>stylesheet.css</code> 文件)，然后将 <code>.css</code> 文件中的 <code>@font-face {}</code> 内容替换为 <code>stylesheet.css</code> 中的 <code>base64</code> 内容，最后将 <code>.css</code> 文件修改后缀为 <code>.wxss</code></p></blockquote><h4 id="引入自定义图标">引入自定义图标 <a class="header-anchor" href="#引入自定义图标"></a></h4><ul><li>全局引入：在项目 <code>app.wxss</code>，使用 <code>@import</code> 引入上述的 <code>.wxss</code> 文件</li><li>局部引入：在 <code>page</code> 对应的 <code>.wxss</code> 中，使用 <code>@import</code> 引入上述的 <code>.wxss</code> 文件</li></ul><h4 id="自定义图标的使用">自定义图标的使用 <a class="header-anchor" href="#自定义图标的使用"></a></h4><p><code>&lt;t-icon&gt;</code> 组件中的 <code>prefix</code> 属性值与前面设置的 <code>Font Family</code> 保持一致，即 <code>prefix=&quot;icon&quot;</code>，<code>name</code> 属性值为自定义图标名称，如图标的 <code>className</code> 为 <code>icon-a-1h</code>，则 <code>name=&quot;a-1h&quot;</code>。</p><h3 id="图片链接">图片链接 <a class="header-anchor" href="#图片链接"></a></h3>`,11),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-iconImage tdesign-demo-item-- README"},M=["code"],H={slot:"action"},q=n("td-icons-view",{"framework-content":""},null,-1),G={ref:"tdDocPhone"},Y=n("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/icon/icon",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),B=[Y],Q={name:"API"},U=r('<h3 id="icon-props">Icon Props <a class="header-anchor" href="#icon-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>color</td><td>String</td><td>-</td><td>图标颜色</td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>必需。图标名称或图片链接</td><td>Y</td></tr><tr><td>prefix</td><td>String</td><td>-</td><td>自定义图标前缀</td><td>N</td></tr><tr><td>size</td><td>String / Number</td><td>-</td><td>图标大小, 如 <code>20</code>, <code>20px</code>, <code>48rpx</code>, 默认单位是 <code>px</code></td><td>N</td></tr></tbody></table><h3 id="icon-events">Icon Events <a class="header-anchor" href="#icon-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td>-</td><td>点击图标时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td></tr></tbody></table><h3 id="icon-external-classes">Icon External Classes <a class="header-anchor" href="#icon-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>ant: norma</td><td>ant: norma</td><td>-</td></tr></tbody></table>',9),j=[U],K={name:"DESIGN"},O=n("td-doc-empty",null,null,-1),Z=[O],J=n("div",{style:{"margin-top":"48px"}},[n("td-doc-history",{time:"1760587843650"})],-1),W=n("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function X(e,o,t,a,p,m){const s=g("Stackblitz");return b(),f("td-doc-content",w,[n("td-doc-header",k,null,512),n("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,E),d(n("div",null,[n("div",D,[I,n("div",C,[n("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[n("div",P,[i(s,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,F)]),N,n("div",T,[n("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[n("div",z,[i(s,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,V)]),S,n("div",R,[n("td-doc-demo",{code:e.DemoexampleiconImageCode,language:"markup","show-code":"",mode:"open","demo-name":"iconImage","component-name":" README"},[n("div",H,[i(s,{"demo-name":"iconImage","component-name":" README",code:e.DemoexampleiconImageCode},null,8,["code"])])],8,M)]),q]),n("td-doc-phone",G,B,512)],512),[[c,e.tab==="demo"]]),d(n("div",Q,j,512),[[c,e.tab==="api"]]),d(n("div",K,Z,512),[[c,e.tab==="design"]]),J,W],512)}const nn=l(y,[["render",X]]);export{nn as default};
