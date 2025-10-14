import{_ as g,d as p,c as u,a as t,w as o,v as s,b as i,e as m,f as r,r as b,o as v}from"./sites-QsDL4Fx-.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const w=`<template>
  <view>
    <view class="tr">
      <view class="col">
        <view class="text">
          裁切
        </view>
        <t-image
          :src="imageSrc"
          mode="aspectFill"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          适应高
        </view>
        <t-image
          :src="imageSrc"
          mode="heightFix"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          拉伸
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
    </view>

    <view class="tr">
      <view class="col">
        <view class="text">
          方形
        </view>
        <t-image
          :src="imageSrc"
          mode="aspectFill"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          圆角方形
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          shape="round"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          圆形
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          shape="circle"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
    </view>
  </view>
</template>

<script>
import tImage from 'tdesign-uniapp/image/image';
export default {
  components: {
    tImage,
  },
  data() {
    return {
      imageSrc: 'https://tdesign.gtimg.com/mobile/demos/image1.jpeg',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <view class="tr">
      <view class="col">
        <view class="text">
          加载默认提示
        </view>
        <t-image
          id="loading-img"
          shape="round"
          width="72"
          height="72"
        />
      </view>
      <view class="col">
        <view class="text">
          加载自定义提示
        </view>
        <t-image
          id="loading-img-custom"
          shape="round"
          loading="slot"
          width="72"
          height="72"
        >
          <template #loading>
            <t-loading
              theme="spinner"
              size="40rpx"
              loading
            />
          </template>
        </t-image>
      </view>
    </view>

    <view class="tr">
      <view class="col">
        <view class="text">
          失败默认提示
        </view>
        <t-image
          id="loading-img"
          shape="round"
          src="a"
          width="72"
          height="72"
        />
      </view>
      <view class="col">
        <view class="text">
          失败自定义提示
        </view>
        <t-image
          src="a"
          shape="round"
          error="slot"
          width="72"
          height="72"
        >
          <template #error>
            <text
              class="error-text"
            >
              加载失败
            </text>
          </template>
        </t-image>
      </view>
    </view>
  </view>
</template>

<script>
import tImage from 'tdesign-uniapp/image/image';
import tLoading from 'tdesign-uniapp/loading/loading';
export default {
  components: {
    tImage,
    tLoading,
  },
  data() {
    return {
      isLoading: false,
      isFailed: false,
    };
  },
  created() {},
  methods: {
    handlePageShow() {
      const $ele1 = this.zpSelectComponent('#loading-img');
      const $ele2 = this.zpSelectComponent('#loading-img-custom');
      this.setLoadingStatus($ele1);
      this.setLoadingStatus($ele2);
    },

    setLoadingStatus(ele) {
      ele.onLoadError = null;
      ele.onLoaded = null;
      ele.setData({
        isLoading: true,
        isFailed: false,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=p({data(){return{DemoexamplebaseCode:w,DemoexamplestatusCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:n,tdDocPhone:a}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/image/image";d&&(d.docInfo={title:"Image 图片",desc:"用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:c})=>this.tab=c),a&&(a.qrcodeUrl=l),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),S={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"base","component-name":"image"},D=["tab"],E={name:"DEMO"},k=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;t-image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/image/image&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/wP7zUima7kSF" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="裁切样式">裁切样式 <a class="header-anchor" href="#裁切样式"></a></h3>`,7),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],C={slot:"action"},$=t("h3",{id:"加载状态"},[r("加载状态 "),t("a",{class:"header-anchor",href:"#加载状态"})],-1),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},F=["code"],I={slot:"action"},M=t("h2",{id:"常见问题"},[r("常见问题 "),t("a",{class:"header-anchor",href:"#常见问题"})],-1),P=t("details",null,[t("summary",null,[r(" 本地图片无法正确引用? "),t("span",{class:"icon"},"👇")]),t("p",{style:{"margin-top":"10px",color:"rgba(0, 0, 0, .6)"}}," 建议使用绝对路径，而不是相对路径。绝对路径以 app.json 所在位置为基准。 ")],-1),L={ref:"tdDocPhone"},R=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/image/image",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),j=[R],z=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"image"},null,-1),T={name:"API"},B=i('<h3 id="image-props">Image Props <a class="header-anchor" href="#image-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>error</td><td>String / Slot</td><td>&#39;default&#39;</td><td>加载失败时显示的内容。值为 <code>default</code> 则表示使用默认加载失败风格；值为空或者 <code>slot</code> 表示使用插槽渲染，插槽名称为 <code>error</code>；值为其他则表示普通文本内容，如“加载失败”。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>height</td><td>String / Number</td><td>-</td><td>高度，默认单位为<code>px</code></td><td>N</td></tr><tr><td>lazy</td><td>Boolean</td><td>false</td><td>是否开启图片懒加载</td><td>N</td></tr><tr><td>loading</td><td>String / Slot</td><td>&#39;default&#39;</td><td>加载态内容。值为 <code>default</code> 则表示使用默认加载中风格；值为其他则表示普通文本内容，如“加载中”。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>mode</td><td>String</td><td>scaleToFill</td><td>图片裁剪、缩放的模式；<a href="https://developers.weixin.qq.com/miniprogram/dev/component/image.html" target="_blank" rel="noopener noreferrer">小程序官方文档</a>。可选项：scaleToFill/aspectFit/aspectFill/widthFix/heightFix/top/bottom/center/left/right/top left/top right/bottom left/bottom right</td><td>N</td></tr><tr><td>shape</td><td>String</td><td>square</td><td>图片圆角类型。可选项：circle/round/square</td><td>N</td></tr><tr><td>show-menu-by-longpress</td><td>Boolean</td><td>false</td><td>长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单</td><td>N</td></tr><tr><td>src</td><td>String</td><td>-</td><td>图片链接</td><td>N</td></tr><tr><td>t-id</td><td>String</td><td>-</td><td><code>1.2.10</code>。图片标签id</td><td>N</td></tr><tr><td>webp</td><td>Boolean</td><td>false</td><td>默认不解析 webP 格式，只支持网络资源</td><td>N</td></tr><tr><td>width</td><td>String / Number</td><td>-</td><td>宽度，默认单位为<code>px</code></td><td>N</td></tr></tbody></table><h3 id="image-events">Image Events <a class="header-anchor" href="#image-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>error</td><td>-</td><td>图片加载失败时触发</td></tr><tr><td>load</td><td>-</td><td>图片加载完成时触发</td></tr></tbody></table><h3 id="image-external-classes">Image External Classes <a class="header-anchor" href="#image-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-load</td><td>加载样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-image-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-image-loading-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-image-loading-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-image-round-radius</td><td>@radius-default</td><td>-</td></tr></tbody></table>',9),V=[B],O={name:"DESIGN"},U=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对图像内容进行陈列、展示，以便用户快速了解图像信息时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="可使用宫格、单元格承载图片，作为某种功能、某类信息的入口。">可使用<a href="./grid">宫格</a>、<a href="./cell">单元格</a>承载图片，作为某种功能、某类信息的入口。 <a class="header-anchor" href="#可使用宫格、单元格承载图片，作为某种功能、某类信息的入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/image/image-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/image/image-2.png"></div></div><hr><h5 id="图片与下拉刷新组合使用，用于图片瀑布流时的内容更新。">图片与<a href="./pull-down-refresh">下拉刷新</a>组合使用，用于图片瀑布流时的内容更新。 <a class="header-anchor" href="#图片与下拉刷新组合使用，用于图片瀑布流时的内容更新。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/image/image-3.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当图片仅为展示，不具备预览功能时，应避免图片尺寸过小，从而影响图像信息的浏览和获取。">当图片仅为展示，不具备预览功能时，应避免图片尺寸过小，从而影响图像信息的浏览和获取。 <a class="header-anchor" href="#当图片仅为展示，不具备预览功能时，应避免图片尺寸过小，从而影响图像信息的浏览和获取。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/image/image-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/image/image-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./image-viewer">图片预览</a></td><td style="text-align:left;">当需要对展示的图片进行快速查看，以及在查看时存在放大、缩小、删除等操作诉求时使用。</td></tr></tbody></table>',13),H=[U],G=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416343502"})],-1),J=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function K(e,d,n,a,l,c){const h=b("Stackblitz");return v(),u("td-doc-content",S,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),o(t("div",null,[t("div",E,[k,t("div",q,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",C,[m(h,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),$,t("div",A,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",I,[m(h,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,F)]),M,P]),t("td-doc-phone",L,j,512),z],512),[[s,e.tab==="demo"]]),o(t("div",T,V,512),[[s,e.tab==="api"]]),o(t("div",O,H,512),[[s,e.tab==="design"]]),G,J],512)}const X=g(x,[["render",K]]);export{X as default};
