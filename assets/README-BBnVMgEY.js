import{_ as m,d as b,c as h,a as t,w as c,v as i,b as p,e,f as s,r as g,o as k}from"./sites-v9LZeYm3.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="上限六个文字"
        value="2"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="上限四字"
        value="3"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      sticky
      :sticky-props="stickyProps"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
      @scroll="onStickyScroll"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
      <t-tab-panel
        label="上限四字"
        value="4"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs.vue';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTabs,
    tTabPanel,
  },
  props: {
    stickyOffset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    stickyProps() {
      return {
        zIndex: 2,
        offsetTop: this.stickyOffset,

      };
    },
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(\`Change tab, tab-panel value is \${event.value}.\`);
    },
    onTabsClick(event) {
      console.log(\`Click tab, tab-panel value is \${event.value}.\`);
    },
    onStickyScroll(event) {
      console.log('sticky scroll: ', event);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-tabs
      :default-value="0"
      :space-evenly="false"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        v-for="(item, index) in 8"
        :key="index"
        label="选项"
        :value="index"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(\`Change tab, tab-panel value is \${event.value}.\`);
    },
    onTabsClick(event) {
      console.log(\`Click tab, tab-panel value is \${event.value}.\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        v-for="(item, index) in 3"
        :key="index"
        icon="app"
        label="选项"
        :value="index"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,T=`<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        label="选项"
        value="0"
        :badge-props="{ dot: true, offset: ['4px', '4px'] }"
      />
      <t-tab-panel
        label="选项"
        value="1"
        :badge-props="{ count: 8, offset: ['8px', '8px'] }"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <t-tabs
      :animation="{ duration: 0.6 }"
      :default-value="0"
      t-class="custom-tabs"
      t-class-content="custom-panel"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项一"
        value="0"
      >
        <view class="custom-panel__content">
          选项一内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项二"
        value="1"
      >
        <view class="custom-panel__content">
          选项二内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项三"
        value="2"
      >
        <view class="custom-panel__content">
          选项三内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项四"
        value="3"
      >
        <view class="custom-panel__content">
          选项四内容
        </view>
      </t-tab-panel>
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(\`Change tab, tab-panel value is \${event.value}.\`);
    },
    onTabsClick(event) {
      console.log(\`Click tab, tab-panel value is \${event.value}.\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-tabs
      :value="value"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        :label="value == '0' ? '选中' : '默认'"
        value="0"
      />
      <t-tab-panel
        :label="value == '1' ? '选中' : '默认'"
        value="1"
      />
      <t-tab-panel
        label="禁用"
        value="2"
        disabled
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {
      value: '0',
    };
  },
  created() {},
  methods: {
    onTabsChange(event) {
      this.value = event.value;
      console.log(\`Change tab, tab-panel value is \${event.value}.\`);
    },
    onTabsClick(event) {
      console.log(\`Click tab, tab-panel value is \${event.value}.\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        label="小尺寸"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
    </t-tabs>

    <view style="height: 16px" />

    <t-tabs
      class="bigger"
      :default-value="0"
    >
      <t-tab-panel
        label="大尺寸"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(\`Change tab, tab-panel value is \${event.value}.\`);
    },
    onTabsClick(event) {
      console.log(\`Click tab, tab-panel value is \${event.value}.\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-tabs
      :default-value="0"
      theme="tag"
    >
      <t-tab-panel
        v-for="(item, index) in 4"
        :key="index"
        label="选项"
        :value="index"
      />
    </t-tabs>

    <view style="height: 16px" />

    <t-tabs
      :default-value="0"
      theme="card"
    >
      <t-tab-panel
        v-for="(item, index) in 4"
        :key="index"
        label="选项"
        :value="index"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=b({data(){return{DemoexamplebaseCode:f,DemoexamplescrollCode:_,DemoexamplewithiconCode:y,DemoexamplewithbadgeCode:T,DemoexamplewithcontentCode:w,DemoexamplestatusCode:D,DemoexamplesizeCode:C,DemoexamplethemeCode:E}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(n){this.$route.query.tab!==n&&this.$router.push({query:{tab:n}})}}},mounted(){const{tdDocContent:n,tdDocHeader:l,tdDocTabs:o,tdDocPhone:d}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tabs/tabs";l&&(l.docInfo={title:"Tabs 选项卡",desc:"用于内容分类后的展示切换。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:u})=>this.tab=u),d&&(d.qrcodeUrl=r),v.highlightAll(),this.$emit("loaded",()=>{n.pageStatus="show"})}}),q={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},A={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"tabs"},P=["tab"],M={name:"DEMO"},R=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TTabs <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tabs/tabs.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TTabsPanel <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tabs-panel/tabs-panel.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础选项卡">基础选项卡 <a class="header-anchor" href="#基础选项卡"></a></h3>`,4),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},S=["code"],$={slot:"action"},V=t("h3",{id:"等距选项卡"},[s("等距选项卡 "),t("a",{class:"header-anchor",href:"#等距选项卡"})],-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-scroll tdesign-demo-item-- README"},z=["code"],B={slot:"action"},O=t("h3",{id:"带图标选项卡"},[s("带图标选项卡 "),t("a",{class:"header-anchor",href:"#带图标选项卡"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-icon tdesign-demo-item-- README"},H=["code"],U={slot:"action"},F=t("h3",{id:"带徽章选项卡"},[s("带徽章选项卡 "),t("a",{class:"header-anchor",href:"#带徽章选项卡"})],-1),G={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-badge tdesign-demo-item-- README"},J=["code"],K={slot:"action"},L=t("h3",{id:"带内容区选项卡"},[s("带内容区选项卡 "),t("a",{class:"header-anchor",href:"#带内容区选项卡"})],-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-content tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=t("h3",{id:"选项卡状态"},[s("选项卡状态 "),t("a",{class:"header-anchor",href:"#选项卡状态"})],-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},tt=["code"],nt={slot:"action"},at=t("h3",{id:"选项卡尺寸"},[s("选项卡尺寸 "),t("a",{class:"header-anchor",href:"#选项卡尺寸"})],-1),et={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},st=["code"],ot={slot:"action"},pt=t("h3",{id:"选项卡样式"},[s("选项卡样式 "),t("a",{class:"header-anchor",href:"#选项卡样式"})],-1),lt=t("p",null,"使用 theme 属性可以变换风格，支持 line = 线条（默认）；tag = 标签；card = 卡片",-1),dt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},ct=["code"],it={slot:"action"},rt=p(`<h3 id="受控用法">受控用法 <a class="header-anchor" href="#受控用法"></a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tabs</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{value}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTabsChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tab-panel</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标签页一<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签一内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tab-panel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tab-panel</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标签页二<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签二内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tab-panel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tabs</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onTabsChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="与-popup-使用">与 Popup 使用 <a class="header-anchor" href="#与-popup-使用"></a></h3><div class="language-html"><pre><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-popup</span> <span class="token attr-name">visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{visible}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>visible-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onVisibleChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tabs</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{0}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTabsChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTabsClick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">t-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-tabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tab-panel</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标签页一<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签一内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tab-panel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tab-panel</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标签页二<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签二内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tab-panel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-tab-panel</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>标签页三<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标签三内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tab-panel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-tabs</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-popup</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">showPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tabs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&#39;tabs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      tabs<span class="token punctuation">.</span><span class="token function">setTrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这一步很重要，因为小程序的无法正确执行生命周期，所以需要手动设置下 tabs 的滑块</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,6),ut={ref:"tdDocPhone"},mt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tabs/tabs",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),bt=[mt],ht=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"tabs"},null,-1),gt={name:"API"},kt=p('<h3 id="tabs-props">Tabs Props <a class="header-anchor" href="#tabs-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>animation</td><td>Object</td><td>-</td><td>动画效果设置。其中 duration 表示动画时长。（单位：秒）。TS 类型：<code>TabAnimation</code> <code>type TabAnimation = { duration: number } &amp; Record&lt;string, any&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tabs/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>bottom-line-mode</td><td>String</td><td>fixed</td><td>激活下划线的模式。可选项：fixed/auto/full</td><td>N</td></tr><tr><td>middle</td><td>Slot</td><td>-</td><td>中间内容，介于头部和内容之间。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>show-bottom-line</td><td>Boolean</td><td>true</td><td>是否展示底部激活线条</td><td>N</td></tr><tr><td>space-evenly</td><td>Boolean</td><td>true</td><td>选项卡头部空间是否均分</td><td>N</td></tr><tr><td>split</td><td>Boolean</td><td>true</td><td><code>1.1.10</code>。是否展示分割线</td><td>N</td></tr><tr><td>sticky</td><td>Boolean</td><td>false</td><td>是否开启粘性布局</td><td>N</td></tr><tr><td>sticky-props</td><td>Object</td><td>-</td><td>透传至 Sticky 组件。TS 类型：<code>StickyProps</code>，<a href="./sticky?tab=api">Sticky API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tabs/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>swipeable</td><td>Boolean</td><td>true</td><td>是否可以滑动切换</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>line</td><td>标签的样式。可选项：line/tag/card</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>激活的选项卡值。TS 类型：<code>TabValue</code> <code>type TabValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tabs/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>激活的选项卡值。非受控属性。TS 类型：<code>TabValue</code> <code>type TabValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tabs/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="tabs-events">Tabs Events <a class="header-anchor" href="#tabs-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: TabValue, label: string)</code></td><td>激活的选项卡发生变化时触发</td></tr><tr><td>click</td><td><code>(value: TabValue, label: string)</code></td><td>点击选项卡时触发</td></tr><tr><td>scroll</td><td><code>(scrollTop: number, isFixed: boolean)</code></td><td>页面滚动时触发</td></tr></tbody></table><h3 id="tabs-external-classes">Tabs External Classes <a class="header-anchor" href="#tabs-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-active</td><td>激活态样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-item</td><td>选项样式类</td></tr><tr><td>t-class-track</td><td>滚动条样式类</td></tr></tbody></table><h3 id="tabpanel-props">TabPanel Props <a class="header-anchor" href="#tabpanel-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>badge-props</td><td>Object</td><td>-</td><td>透传至 Badge 组件</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用当前选项卡</td><td>N</td></tr><tr><td>icon</td><td>String / Object</td><td>-</td><td><code>1.0.0-rc.1</code>。图标，传对象则透传至 Icon</td><td>N</td></tr><tr><td>label</td><td>String</td><td>-</td><td>选项卡名称</td><td>N</td></tr><tr><td>lazy</td><td>Boolean</td><td>false</td><td>是否启用选项卡懒加载</td><td>N</td></tr><tr><td>panel</td><td>String / Slot</td><td>-</td><td>用于自定义选项卡面板内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>选项卡的值，唯一标识。TS 类型：<code>TabValue</code>，<a href="./tabs?tab=api">Tabs API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tab-panel/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-tab-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-tab-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-tab-icon-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-tab-item-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tab-item-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-tab-item-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-tab-item-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-tab-item-tag-active-bg</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-tab-item-tag-bg</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-tab-item-tag-height</td><td>64rpx</td><td>-</td></tr><tr><td>--td-tab-item-vertical-height</td><td>108rpx</td><td>-</td></tr><tr><td>--td-tab-item-vertical-width</td><td>208rpx</td><td>-</td></tr><tr><td>--td-tab-nav-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tab-track-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tab-track-radius</td><td>8rpx</td><td>-</td></tr><tr><td>--td-tab-track-thickness</td><td>6rpx</td><td>-</td></tr><tr><td>--td-tab-track-width</td><td>32rpx</td><td>-</td></tr></tbody></table>',11),vt=[kt],ft={name:"DESIGN"},_t=p('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当内容/数据需要一定的分类纬度进行区分，便于用户快速作出选择并切换时可以使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。">位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。 <a class="header-anchor" href="#位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-2.png"></div></div><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="选项卡与徽标组合使用，用于展示户该分类的状态变化或营销信息。">选项卡与<a href="./badge">徽标</a>组合使用，用于展示户该分类的状态变化或营销信息。 <a class="header-anchor" href="#选项卡与徽标组合使用，用于展示户该分类的状态变化或营销信息。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-3.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="较常使用于以信息瀑布流为场景的应用，使用选项卡承载类目或状态，便于用户区分和切换。">较常使用于以信息瀑布流为场景的应用，使用选项卡承载类目或状态，便于用户区分和切换。 <a class="header-anchor" href="#较常使用于以信息瀑布流为场景的应用，使用选项卡承载类目或状态，便于用户区分和切换。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-4.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-5.png"></div></div><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-6.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="不建议使用选项卡来实现功能模块间的切换。">不建议使用选项卡来实现功能模块间的切换。 <a class="header-anchor" href="#不建议使用选项卡来实现功能模块间的切换。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="建议文本简明扼要，不建议将文本进行截断或换行；若需要使用较长文本，建议使用等距选项卡。">建议文本简明扼要，不建议将文本进行截断或换行；若需要使用较长文本，建议使用等距选项卡。 <a class="header-anchor" href="#建议文本简明扼要，不建议将文本进行截断或换行；若需要使用较长文本，建议使用等距选项卡。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-9.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-10.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="尽量避免使用多个选项卡进行嵌套，若使用，建议避免使用相同样式进行嵌套；一般情况下选项卡内的信息需要进一步分类，建议使用下拉菜单或标签进行选择过滤。">尽量避免使用多个选项卡进行嵌套，若使用，建议避免使用相同样式进行嵌套；一般情况下选项卡内的信息需要进一步分类，建议使用下拉菜单或标签进行选择过滤。 <a class="header-anchor" href="#尽量避免使用多个选项卡进行嵌套，若使用，建议避免使用相同样式进行嵌套；一般情况下选项卡内的信息需要进一步分类，建议使用下拉菜单或标签进行选择过滤。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-11.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tabs/tabs-12.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tab-bar">标签栏</a></td><td style="text-align:left;">当目标模块/视图需要从应用的任何地方直接进行访问时使用。</td></tr><tr><td style="text-align:left;"><a href="./side-bar">侧边栏</a></td><td style="text-align:left;">当内容项数量较多，需要用户根据品类快速选择到目标内容项时使用。</td></tr></tbody></table>',24),yt=[_t],Tt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760436067760"})],-1),wt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Dt(n,l,o,d,r,u){const a=g("Stackblitz");return k(),h("td-doc-content",q,[t("td-doc-header",A,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:n.tab},null,8,P),c(t("div",null,[t("div",M,[R,t("div",N,[t("td-doc-demo",{code:n.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",$,[e(a,{"demo-name":"base","component-name":" README",code:n.DemoexamplebaseCode},null,8,["code"])])],8,S)]),V,t("div",j,[t("td-doc-demo",{code:n.DemoexamplescrollCode,language:"markup","show-code":"",mode:"open","demo-name":"scroll","component-name":" README"},[t("div",B,[e(a,{"demo-name":"scroll","component-name":" README",code:n.DemoexamplescrollCode},null,8,["code"])])],8,z)]),O,t("div",I,[t("td-doc-demo",{code:n.DemoexamplewithiconCode,language:"markup","show-code":"",mode:"open","demo-name":"with-icon","component-name":" README"},[t("div",U,[e(a,{"demo-name":"with-icon","component-name":" README",code:n.DemoexamplewithiconCode},null,8,["code"])])],8,H)]),F,t("div",G,[t("td-doc-demo",{code:n.DemoexamplewithbadgeCode,language:"markup","show-code":"",mode:"open","demo-name":"with-badge","component-name":" README"},[t("div",K,[e(a,{"demo-name":"with-badge","component-name":" README",code:n.DemoexamplewithbadgeCode},null,8,["code"])])],8,J)]),L,t("div",Q,[t("td-doc-demo",{code:n.DemoexamplewithcontentCode,language:"markup","show-code":"",mode:"open","demo-name":"with-content","component-name":" README"},[t("div",X,[e(a,{"demo-name":"with-content","component-name":" README",code:n.DemoexamplewithcontentCode},null,8,["code"])])],8,W)]),Y,t("div",Z,[t("td-doc-demo",{code:n.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",nt,[e(a,{"demo-name":"status","component-name":" README",code:n.DemoexamplestatusCode},null,8,["code"])])],8,tt)]),at,t("div",et,[t("td-doc-demo",{code:n.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",ot,[e(a,{"demo-name":"size","component-name":" README",code:n.DemoexamplesizeCode},null,8,["code"])])],8,st)]),pt,lt,t("div",dt,[t("td-doc-demo",{code:n.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",it,[e(a,{"demo-name":"theme","component-name":" README",code:n.DemoexamplethemeCode},null,8,["code"])])],8,ct)]),rt]),t("td-doc-phone",ut,bt,512),ht],512),[[i,n.tab==="demo"]]),c(t("div",gt,vt,512),[[i,n.tab==="api"]]),c(t("div",ft,yt,512),[[i,n.tab==="design"]]),Tt,wt],512)}const xt=m(x,[["render",Dt]]);export{xt as default};
