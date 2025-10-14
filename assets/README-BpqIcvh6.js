import{_ as m,d as h,c as u,a as t,w as a,v as i,b as r,e as p,f as b,r as g,o as v}from"./sites-taiaIPy6.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-popup
      :visible="visible"
      using-custom-navbar
      :placement="cur.value || 'top'"
      @visible-change="onVisibleChange"
    >
      <view :class="'block block--' + cur.value">
        {{ cur.text }}
      </view>
    </t-popup>

    <t-button
      v-for="(item, index) in position"
      :key="index"
      block
      size="large"
      variant="outline"
      theme="primary"
      :data-item="item"
      t-class="wrapper"
      @click="handlePopup($event, { item })"
    >
      {{ item.text }}
    </t-button>
  </view>
</template>

<script>
import tPopup from 'tdesign-uniapp/popup/popup';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tPopup,
    tButton,
  },
  data() {
    return {
      cur: {
        value: '',
        text: '',
      },

      position: [
        {
          value: 'top',
          text: '顶部弹出',
        },
        {
          value: 'left',
          text: '左侧弹出',
        },
        {
          value: 'center',
          text: '中间弹出',
        },
        {
          value: 'bottom',
          text: '底部弹出',
        },
        {
          value: 'right',
          text: '右侧弹出',
        },
      ],

      visible: false,
    };
  },
  created() {},
  methods: {
    handlePopup(e, { item }) {
    //
      /* ---处理dataset begin--- */
      //   this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      //   const { item } = e.currentTarget.dataset;
      this.cur = item;

      setTimeout(() => {
        this.visible = true;
      });
    //   this.setData(
    //     {
    //       cur: item,
    //     },
    //     () => {
    //       this.setData({
    //         visible: true,
    //       });
    //     },
    //   );
    },
    onVisibleChange({ visible }) {
      this.visible = visible;
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <t-popup
      :visible="visible"
      placement="bottom"
      @visible-change="onVisibleChange"
    >
      <view class="block">
        <view class="header">
          <view
            class="btn btn--cancel"
            aria-role="button"
          >
            取消
          </view>
          <view class="title">
            标题文字
          </view>
          <view
            class="btn btn--confirm"
            aria-role="button"
          >
            确定
          </view>
        </view>
      </view>
    </t-popup>

    <t-button
      block
      size="large"
      variant="outline"
      theme="primary"
      @click="handlePopup"
    >
      底部弹出层-带标题及操作
    </t-button>
  </view>
</template>

<script>
import tPopup from 'tdesign-uniapp/popup/popup';
import tButton from 'tdesign-uniapp/button/button';
export default {
  components: {
    tPopup,
    tButton,
  },
  data() {
    return {
      cur: {},

      position: [
        {
          value: 'top',
          text: '顶部弹出',
        },
        {
          value: 'left',
          text: '左侧弹出',
        },
        {
          value: 'center',
          text: '中间弹出',
        },
        {
          value: 'bottom',
          text: '底部弹出',
        },
        {
          value: 'right',
          text: '右侧弹出',
        },
      ],

      visible: false,
    };
  },
  created() {},
  methods: {
    handlePopup() {
      this.visible = true;
    },
    onVisibleChange({ visible }) {
      this.visible = visible;
    },
  },
};
<\/script>
<style lang="less" scoped>
@import './index.less';
</style>
`,y=`<template>
  <view>
    <t-popup
      :visible="visible"
      placement="center"
      @visible-change="onVisibleChange"
    >
      <view class="block">
        <t-icon
          t-class="close-btn"
          name="close-circle"
          size="64rpx"
          color="#fff"
          @click="onClose"
        />
      </view>
    </t-popup>

    <t-button
      block
      size="large"
      variant="outline"
      theme="primary"
      @click="handlePopup"
    >
      居中弹出层-带自定义关闭按钮
    </t-button>
  </view>
</template>

<script>
import tPopup from 'tdesign-uniapp/popup/popup';
import tIcon from 'tdesign-uniapp/icon/icon';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tPopup,
    tIcon,
    tButton,
  },
  data() {
    return {
      cur: {},

      position: [
        {
          value: 'top',
          text: '顶部弹出',
        },
        {
          value: 'left',
          text: '左侧弹出',
        },
        {
          value: 'center',
          text: '中间弹出',
        },
        {
          value: 'bottom',
          text: '底部弹出',
        },
        {
          value: 'right',
          text: '右侧弹出',
        },
      ],

      visible: false,
    };
  },
  created() {},
  methods: {
    handlePopup() {
      this.visible = true;
    },
    onVisibleChange({ visible }) {
      this.visible = visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,w=h({data(){return{DemoexamplebaseCode:_,DemoexamplewithtitleCode:x,DemoexamplecustomcloseCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:n,tdDocPhone:d}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp#/pages-more/popup/popup";o&&(o.docInfo={title:"Popup 弹出层",desc:"由其他控件触发，屏幕滑出或弹出一块自定义内容区域。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:c})=>this.tab=c),d&&(d.qrcodeUrl=l),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},D={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"popup"},E=["tab"],P={name:"DEMO"},C=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-popup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/popup/popup&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/AB8Cvim37eS6" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础弹出层</p>`,8),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],A={slot:"action"},B=t("h3",{id:"组件示例"},[b("组件示例 "),t("a",{class:"header-anchor",href:"#组件示例"})],-1),q=t("p",null,"应用示例",-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-title tdesign-demo-item-- README"},R=["code"],T={slot:"action"},V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom-close tdesign-demo-item-- README"},$=["code"],I={slot:"action"},z={ref:"tdDocPhone"},j=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/popup/popup",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),O=[j],H=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"popup"},null,-1),U={name:"API"},G=r('<h3 id="popup-props">Popup Props <a class="header-anchor" href="#popup-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>close-btn</td><td>Boolean / Slot</td><td>-</td><td>关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>close-on-overlay-click</td><td>Boolean</td><td>true</td><td>点击遮罩层是否关闭</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>浮层里面的内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>240</td><td>动画过渡时间</td><td>N</td></tr><tr><td>overlay-props</td><td>Object</td><td>{}</td><td>遮罩层的属性，透传至 overlay。TS 类型：<code>OverlayProps</code>，<a href="./overlay?tab=api">Overlay API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/popup/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>placement</td><td>String</td><td>top</td><td>浮层出现位置。可选项：top/left/right/bottom/center</td><td>N</td></tr><tr><td>prevent-scroll-through</td><td>Boolean</td><td>true</td><td>是否阻止背景滚动</td><td>N</td></tr><tr><td>show-overlay</td><td>Boolean</td><td>true</td><td>是否显示遮罩层</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>-</td><td>是否显示浮层。TS 类型：<code>boolean</code></td><td>N</td></tr><tr><td>default-visible</td><td>Boolean</td><td>undefined</td><td>是否显示浮层。非受控属性。TS 类型：<code>boolean</code></td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>11500</td><td>组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500</td><td>N</td></tr></tbody></table><h3 id="popup-events">Popup Events <a class="header-anchor" href="#popup-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>visible-change</td><td><code>(visible: boolean, trigger: PopupSource) </code></td><td>当浮层隐藏或显示时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/popup/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type PopupSource = &#39;close-btn&#39; \\| &#39;overlay&#39;</code><br></td></tr></tbody></table><h3 id="popup-external-classes">Popup External Classes <a class="header-anchor" href="#popup-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-popup-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-popup-border-radius</td><td>@radius-extraLarge</td><td>-</td></tr><tr><td>--td-popup-close-btn-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-popup-distance-top</td><td>0)</td><td>-</td></tr><tr><td>--td-popup-transition</td><td>all 300ms ease</td><td>-</td></tr></tbody></table>',9),J=[G],L={name:"DESIGN"},W=r('<h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在筛选的场景，若筛选条件外露，通常会使用顶部弹出的弹出层；若为筛选入口，则通常触发使用右侧弹出的弹出层。">在筛选的场景，若筛选条件外露，通常会使用顶部弹出的弹出层；若为筛选入口，则通常触发使用右侧弹出的弹出层。 <a class="header-anchor" href="#在筛选的场景，若筛选条件外露，通常会使用顶部弹出的弹出层；若为筛选入口，则通常触发使用右侧弹出的弹出层。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-1.png"></div><hr><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-2.png"></div><hr><h5 id="承载页面中某个任务操作流程，通常会使用底部弹出的弹出层。">承载页面中某个任务操作流程，通常会使用底部弹出的弹出层。 <a class="header-anchor" href="#承载页面中某个任务操作流程，通常会使用底部弹出的弹出层。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-3.png"></div><hr><h5 id="承载重要提示且可能需要用户做出一些重要决策时，通常会使用中间弹出的弹出层。">承载重要提示且可能需要用户做出一些重要决策时，通常会使用中间弹出的弹出层。 <a class="header-anchor" href="#承载重要提示且可能需要用户做出一些重要决策时，通常会使用中间弹出的弹出层。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-4.png"></div></div><hr><h5 id="承载较为重要的运营活动入口（如拍脸图）时，通常会使用中间弹出的弹出层。">承载较为重要的运营活动入口（如拍脸图）时，通常会使用中间弹出的弹出层。 <a class="header-anchor" href="#承载较为重要的运营活动入口（如拍脸图）时，通常会使用中间弹出的弹出层。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-5.png"></div></div><hr><h5 id="承载网站、应用收折起来的导航菜单时，通常会使用左侧弹出的弹出层。">承载网站、应用收折起来的导航菜单时，通常会使用左侧弹出的弹出层。 <a class="header-anchor" href="#承载网站、应用收折起来的导航菜单时，通常会使用左侧弹出的弹出层。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/popup/popup-6.png"></div></div>',17),F=[W],K=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760415890963"})],-1),Q=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function X(e,o,n,d,l,c){const s=g("Stackblitz");return v(),u("td-doc-content",k,[t("td-doc-header",D,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,E),a(t("div",null,[t("div",P,[C,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",A,[p(s,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),B,q,t("div",M,[t("td-doc-demo",{code:e.DemoexamplewithtitleCode,language:"markup","show-code":"",mode:"open","demo-name":"with-title","component-name":" README"},[t("div",T,[p(s,{"demo-name":"with-title","component-name":" README",code:e.DemoexamplewithtitleCode},null,8,["code"])])],8,R)]),t("div",V,[t("td-doc-demo",{code:e.DemoexamplecustomcloseCode,language:"markup","show-code":"",mode:"open","demo-name":"custom-close","component-name":" README"},[t("div",I,[p(s,{"demo-name":"custom-close","component-name":" README",code:e.DemoexamplecustomcloseCode},null,8,["code"])])],8,$)])]),t("td-doc-phone",z,O,512),H],512),[[i,e.tab==="demo"]]),a(t("div",U,J,512),[[i,e.tab==="api"]]),a(t("div",L,F,512),[[i,e.tab==="design"]]),K,Q],512)}const tt=m(w,[["render",X]]);export{tt as default};
