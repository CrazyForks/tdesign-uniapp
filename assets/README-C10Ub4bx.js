import{_ as h,d as u,c as k,a as t,w as r,v as s,b as p,e as c,f as m,r as g,o as b}from"./sites-C0tGvoHY.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-color-picker @change="onChange" />
  </view>
</template>

<script>
import tColorPicker from 'tdesign-uniapp/color-picker/color-picker';
export default {
  components: {
    tColorPicker,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChange(...args) {
      console.log('change:', ...args);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-color-picker
      enable-alpha
      type="multiple"
      @change="onChange"
      @palette-bar-change="onPaletteBarChange"
    />
  </view>
</template>

<script>
import tColorPicker from 'tdesign-uniapp/color-picker/color-picker';
export default {
  components: {
    tColorPicker,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change', e);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <view
      v-for="(list, index) in formatList"
      :key="index"
      class="format-line"
    >
      <view
        v-for="(item, index1) in list"
        :key="index1"
        :class="'format-item ' + (curFormat === item ? 'active' : '')"
        :data-format="item"
        @tap.stop.prevent="clickFormat"
      >
        <t-icon
          v-if="curFormat === item"
          name="check"
          size="14"
          custom-style="position: absolute; top: 4rpx; left: 4rpx; color: #fff; z-index: 1;"
        />

        {{ item }}
      </view>
    </view>
    <t-color-picker
      enable-alpha
      type="multiple"
      :format="curFormat"
      :value="color"
      @change="onChange"
      @palette-bar-change="onPaletteBarChange"
    />
  </view>
</template>

<script>
import tColorPicker from 'tdesign-uniapp/color-picker/color-picker';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tColorPicker,
    tIcon,
  },
  data() {
    return {
      curFormat: 'CSS',
      color: '#7bd60b',
      formatList: [
        ['CSS', 'HEX', 'RGB'],
        ['HSL', 'HSV', 'CMYK'],
      ],
      list: [],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change', e);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e);
    },
    clickFormat(e) {
      this.curFormat = e.target.dataset.format;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=u({data(){return{DemoexamplebaseCode:v,DemoexamplemultipleCode:_,DemoexampleformatCode:C}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:o,tdDocPhone:d}=this.$refs,i="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/color-picker/color-picker";n&&(n.docInfo={title:"ColorPicker 颜色选择器",desc:"用于颜色选择，支持多种格式。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:l})=>this.tab=l),d&&(d.qrcodeUrl=i),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),y={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},w={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"color-picker"},P=["tab"],E={name:"DEMO"},S=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TColorPicker <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/color-picker/color-picker.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="基础颜色选择器">基础颜色选择器 <a class="header-anchor" href="#基础颜色选择器"></a></h4>`,6),D={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},A=["code"],N={slot:"action"},R=t("h4",{id:"带色板的颜色选择器"},[m("带色板的颜色选择器 "),t("a",{class:"header-anchor",href:"#带色板的颜色选择器"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},B=["code"],M={slot:"action"},q=t("h3",{id:"组件状态"},[m("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-format tdesign-demo-item-- README"},j=["code"],V={slot:"action"},$=p(`<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><p>如果使用场景为 <code>scroll-view</code>，除了需要显示指定 <code>fixed</code> 属性为 <code>true</code>，还需要手动调用组件的 debouncedUpdateEleRect() 事件。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scroll-y</span> <span class="token attr-name"><span class="token namespace">bind:</span>scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onScroll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-color-picker</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ColorPicker<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fixed</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token function">onScroll</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>colorPicker<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colorPicker <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&#39;#ColorPicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>colorPicker<span class="token punctuation">.</span><span class="token function">debouncedUpdateEleRect</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),F={ref:"tdDocPhone"},I=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/color-picker/color-picker",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),O=[I],z=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"color-picker"},null,-1),G={name:"API"},L=p('<h3 id="colorpicker-props">ColorPicker Props <a class="header-anchor" href="#colorpicker-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>auto-close</td><td>Boolean</td><td>true</td><td>自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible</td><td>N</td></tr><tr><td>enable-alpha</td><td>Boolean</td><td>false</td><td>是否开启透明通道</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>false</td><td><code>1.8.5</code>。如果 color-picker 是在一个 <code>position:fixed</code> 的区域，需要显式指定属性 fixed 为 true</td><td>N</td></tr><tr><td>footer</td><td>Slot</td><td>-</td><td>底部插槽，仅在 <code>usePopup</code> 为 <code>true</code> 时有效。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>format</td><td>String</td><td>RGB</td><td>格式化色值。<code>enableAlpha</code> 为真时，<code>HEX8/RGBA/HSLA/HSVA</code> 有效。可选项：HEX/HEX8/RGB/RGBA/HSL/HSLA/HSV/HSVA/CMYK/CSS</td><td>N</td></tr><tr><td>header</td><td>Slot</td><td>-</td><td>顶部插槽，仅在 <code>usePopup</code> 为 <code>true</code> 时有效。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>popup-props</td><td>Object</td><td>{}</td><td>透传 Popup 组件全部属性。TS 类型：<code>PopupProps</code>，<a href="./popup?tab=api">Popup API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>swatch-colors</td><td>Array</td><td>undefined</td><td>系统预设的颜色样例，值为 <code>null</code> 或 <code>[]</code> 则不显示系统色，值为 <code>undefined</code> 会显示组件内置的系统默认色。TS 类型：<code>Array&lt;string&gt; \\| null \\| undefined</code></td><td>N</td></tr><tr><td>type</td><td>String</td><td>base</td><td>颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。可选项：base/multiple。TS 类型：<code>TypeEnum </code> <code>type TypeEnum = &#39;base&#39; \\| &#39;multiple&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>use-popup</td><td>Boolean</td><td>false</td><td>是否使用弹出层包裹颜色选择器</td><td>N</td></tr><tr><td>value</td><td>String</td><td>-</td><td>色值</td><td>N</td></tr><tr><td>default-value</td><td>String</td><td>undefined</td><td>色值。非受控属性</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否显示颜色选择器。<code>usePopup</code> 为 true 时有效</td><td>N</td></tr></tbody></table><h3 id="colorpicker-events">ColorPicker Events <a class="header-anchor" href="#colorpicker-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })</code></td><td>选中的色值发生变化时触发，第一个参数 <code>value</code> 表示新色值，<code>context.color</code> 表示当前调色板控制器的色值，<code>context.trigger</code> 表示触发颜色变化的来源。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type ColorPickerChangeTrigger = &#39;palette-hue-bar&#39; \\| &#39;palette-alpha-bar&#39; \\| &#39;preset&#39; </code><br></td></tr><tr><td>close</td><td><code>(trigger: ColorPickerTrigger)</code></td><td>关闭按钮时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type ColorPickerTrigger = &#39;overlay&#39;</code><br></td></tr><tr><td>palette-bar-change</td><td><code>(detail: { color: ColorObject })</code></td><td>调色板控制器的值变化时触发，<code>context.color</code> 指调色板控制器的值。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/color-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}</code><br></td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-color-picker-background</td><td>#fff</td><td>-</td></tr><tr><td>--td-color-picker-border-radius-circle</td><td>50%</td><td>-</td></tr><tr><td>--td-color-picker-format-background-color</td><td>@gray-color-1</td><td>-</td></tr><tr><td>--td-color-picker-gradient-preview-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-color-picker-gradient-preview-radius</td><td>6rpx</td><td>-</td></tr><tr><td>--td-color-picker-gradient-preview-width</td><td>56rpx</td><td>-</td></tr><tr><td>--td-color-picker-input-format-margin-left</td><td>48rpx</td><td>-</td></tr><tr><td>--td-color-picker-margin</td><td>24rpx</td><td>-</td></tr><tr><td>--td-color-picker-panel-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-color-picker-panel-radius</td><td>24rpx</td><td>-</td></tr><tr><td>--td-color-picker-panel-width</td><td>750rpx</td><td>-</td></tr><tr><td>--td-color-picker-saturation-height</td><td>288rpx</td><td>-</td></tr><tr><td>--td-color-picker-saturation-radius</td><td>12rpx</td><td>-</td></tr><tr><td>--td-color-picker-saturation-thumb-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-color-picker-slider-height</td><td>16rpx</td><td>-</td></tr><tr><td>--td-color-picker-slider-thumb-padding</td><td>6rpx</td><td>-</td></tr><tr><td>--td-color-picker-slider-thumb-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-color-picker-slider-thumb-transform-x</td><td>-18rpx</td><td>-</td></tr><tr><td>--td-color-picker-slider-wrapper-padding</td><td>0 18rpx</td><td>-</td></tr><tr><td>--td-color-picker-swatch-active</td><td>rgba(0, 0, 0, 0.2)</td><td>-</td></tr><tr><td>--td-color-picker-swatch-border-radius</td><td>6rpx</td><td>-</td></tr><tr><td>--td-color-picker-swatch-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-color-picker-swatch-padding</td><td>0</td><td>-</td></tr><tr><td>--td-color-picker-swatch-width</td><td>48rpx</td><td>-</td></tr><tr><td>--td-color-picker-swatches-title-font</td><td>32rpx</td><td>-</td></tr></tbody></table>',7),U=[L],X={name:"DESIGN"},K=t("td-doc-empty",null,null,-1),Y=[K],Q=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435850857"})],-1),J=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function W(e,n,o,d,i,l){const a=g("Stackblitz");return b(),k("td-doc-content",y,[t("td-doc-header",w,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,P),r(t("div",null,[t("div",E,[S,t("div",D,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",N,[c(a,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,A)]),R,t("div",T,[t("td-doc-demo",{code:e.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[t("div",M,[c(a,{"demo-name":"multiple","component-name":" README",code:e.DemoexamplemultipleCode},null,8,["code"])])],8,B)]),q,t("div",H,[t("td-doc-demo",{code:e.DemoexampleformatCode,language:"markup","show-code":"",mode:"open","demo-name":"format","component-name":" README"},[t("div",V,[c(a,{"demo-name":"format","component-name":" README",code:e.DemoexampleformatCode},null,8,["code"])])],8,j)]),$]),t("td-doc-phone",F,O,512),z],512),[[s,e.tab==="demo"]]),r(t("div",G,U,512),[[s,e.tab==="api"]]),r(t("div",X,Y,512),[[s,e.tab==="design"]]),Q,J],512)}const et=h(x,[["render",W]]);export{et as default};
