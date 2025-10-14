import{_ as h,d as g,c as b,a as e,w as r,v as c,b as s,e as o,f as p,r as u,o as f}from"./sites-CLm6NhbO.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-notice-bar
      :visible="true"
      :prefix-icon="false"
    >
      <template #content>
        这是一条普通的通知信息
      </template>
    </t-notice-bar>
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
export default {
  components: {
    tNoticeBar,
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
`,D=`<template>
  <view>
    <t-notice-bar
      :visible="visible"
      :prefix-icon="false"
      content="提示文字描述提示文字描述提示文字描述"
    >
      <template
        #prefix-icon
      >
        <view>
          <t-icon name="error-circle-filled" />
        </view>
      </template>
    </t-notice-bar>
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tNoticeBar,
    tIcon,
  },
  data() {
    return {
      visible: true,
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-notice-bar
      :visible="visible"
      suffix-icon="close"
      content="这是一条普通的通知信息"
      @click="click"
    />
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
export default {
  components: {
    tNoticeBar,
  },
  data() {
    return {
      visible: true,
    };
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log(\`click on the \${trigger} area\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <t-notice-bar
      :visible="visible"
      suffix-icon="chevron-right"
      @click="click"
    >
      <template
        #content
      >
        <view
          class="inline"
        >
          这是一条普通的通知信息
        </view>
      </template>
      <template
        #operation
      >
        <t-link
          content="详情"
          theme="primary"
          :underline="false"
          :navigator-props="navigatorProps"
        />
      </template>
    </t-notice-bar>

    <t-notice-bar
      :visible="visible"
      suffix-icon="chevron-right"
      content="这是一条普通的通知信息"
      @click="click"
    />
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tNoticeBar,
    tLink,
  },
  data() {
    return {
      visible: true,
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log(\`click on the \${trigger} area\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <t-notice-bar
      :visible="true"
      prefix-icon="sound"
      suffix-icon="chevron-right"
      content="提示文字描述提示文字描述提示文字描述"
      t-class="external-class"
      t-class-prefix-icon="external-class-prefix-icon"
    />
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tNoticeBar,
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
`,y=`<template>
  <view>
    <!-- slot实现自定义content内容 -->
    <t-notice-bar :visible="true">
      <template
        #content
      >
        <view
          class="inline"
        >
          提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述
        </view>
      </template>
      <template
        #operation
      >
        <t-link
          content="详情"
          theme="primary"
          :underline="false"
          :navigator-props="navigatorProps"
        />
      </template>
      <template
        #suffix-icon
      >
        <t-icon
          name="close"
          size="44rpx"
        />
      </template>
    </t-notice-bar>
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
import tLink from 'tdesign-uniapp/link/link';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tNoticeBar,
    tLink,
    tIcon,
  },
  data() {
    return {
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
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
    <t-notice-bar
      :visible="true"
      content="默认状态公告栏默认状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="success"
      content="成功状态公告栏成功状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="warning"
      content="警示状态公告栏警示状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="error"
      content="错误状态公告栏错误状态公告栏"
    />
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
export default {
  components: {
    tNoticeBar,
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
`,N=`<template>
  <view>
    <t-notice-bar
      :visible="visible"
      :prefix-icon="false"
      :marquee="marquee1"
      content="提示文字描述提示文字描述提示文字描述提示文字描述文"
    />

    <t-notice-bar
      :visible="visible"
      :marquee="marquee2"
      content="提示文字描述提示文字描述提示文字描述提示文字描述文"
    />

    <t-notice-bar
      :visible="true"
      direction="vertical"
      :interval="3000"
      :content="content"
      prefix-icon="sound"
      @click="click"
    />
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar';
export default {
  components: {
    tNoticeBar,
  },
  data() {
    return {
      visible: true,
      marquee1: {
        speed: 80,
        loop: -1,
        delay: 0,
      },
      marquee2: {
        speed: 60,
        loop: -1,
        delay: 0,
      },
      content: ['君不见', '高堂明镜悲白发', '朝如青丝暮成雪', '人生得意须尽欢', '莫使金樽空对月'],
    };
  },
  created() {},
  methods: {
    click() {
      console.log('占位：函数 click 未声明');
    },
  },
};
<\/script>
<style>
</style>
`,A=g({data(){return{DemoexamplebaseCode:_,DemoexampleiconDemoCode:D,DemoexamplesuffixIconCode:E,DemoexampleeventCode:x,DemoexamplecustomCode:k,DemoexamplecustomizationCode:y,DemoexamplethemeCode:w,DemoexamplescrollingCode:N}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:i,tdDocTabs:d,tdDocPhone:a}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/notice-bar/notice-bar";i&&(i.docInfo={title:"NoticeBar 公告栏",desc:"在导航栏下方，用于给用户显示提示消息。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:m})=>this.tab=m),a&&(a.qrcodeUrl=l),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),M={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},R={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"notice-bar"},B=["tab"],C={name:"DEMO"},S=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TNoticeBar <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/notice-bar/notice-bar.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_01-组件类型">01 组件类型 <a class="header-anchor" href="#_01-组件类型"></a></h3><p>纯文字的公告栏</p>`,5),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},I=["code"],z={slot:"action"},T=e("p",null,"带图标的公告栏",-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-iconDemo tdesign-demo-item-- README"},$=["code"],j={slot:"action"},O=e("p",null,"带关闭的公告栏",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-suffixIcon tdesign-demo-item-- README"},L=["code"],H={slot:"action"},U=e("p",null,"带入口的公告栏",-1),G={class:"tdesign-demo-wrapper tdesign-demo-item-- README-event tdesign-demo-item-- README"},F=["code"],J={slot:"action"},K=e("p",null,"自定义样式的公告栏",-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=e("p",null,"自定义内容的公告栏",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-customization tdesign-demo-item-- README"},ee=["code"],te={slot:"action"},ne=e("h3",{id:"_02-组件状态"},[p("02 组件状态 "),e("a",{class:"header-anchor",href:"#_02-组件状态"})],-1),oe=e("p",null,"公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）",-1),de={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},ie=["code"],ae={slot:"action"},re=e("h3",{id:"_03-可滚动公告栏"},[p("03 可滚动公告栏 "),e("a",{class:"header-anchor",href:"#_03-可滚动公告栏"})],-1),ce=e("p",null,"可滚动公告栏有水平（horizontal）和垂直（vertical）",-1),se={class:"tdesign-demo-wrapper tdesign-demo-item-- README-scrolling tdesign-demo-item-- README"},le=["code"],me={slot:"action"},pe={ref:"tdDocPhone"},he=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/notice-bar/notice-bar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),ge=[he],be=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"notice-bar"},null,-1),ue={name:"API"},fe=s('<h3 id="noticebar-props">NoticeBar Props <a class="header-anchor" href="#noticebar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Array / Slot</td><td>-</td><td>文本内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>direction</td><td>String</td><td>horizontal</td><td>滚动方向。可选项：horizontal/vertical</td><td>N</td></tr><tr><td>interval</td><td>Number</td><td>2000</td><td>间隔时间【仅在 direction=&#39;vertical&#39; 有效】</td><td>N</td></tr><tr><td>marquee</td><td>Boolean / Object</td><td>false</td><td>跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction=&#39;horizontal&#39; 有效】。TS 类型：<code>boolean \\| NoticeBarMarquee</code> <code>interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>operation</td><td>String / Slot</td><td>-</td><td>右侧额外信息。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>prefix-icon</td><td>String / Boolean / Object / Slot</td><td>true</td><td>前缀图标。值为字符串表示图标名称，值为 <code>false</code> 表示不显示前缀图标，值为 <code>Object</code> 类型，表示透传至 <code>icon</code>，不传表示使用主题图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>suffix-icon</td><td>String / Object / Slot</td><td>-</td><td>后缀图标。值为字符串表示图标名称。值为 <code>Object</code> 类型，表示透传至 <code>icon</code>，不传表示不显示后缀图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>info</td><td>内置主题。可选项：info/success/warning/error</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>显示/隐藏</td><td>N</td></tr><tr><td>default-visible</td><td>Boolean</td><td>undefined</td><td>显示/隐藏。非受控属性</td><td>N</td></tr></tbody></table><h3 id="noticebar-events">NoticeBar Events <a class="header-anchor" href="#noticebar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(current: number, source: &#39;&#39; \\| &#39;autoplay&#39; \\| &#39;touch&#39;)</code></td><td>当 <code>direction=&quot;vertical&quot;</code> 时轮播切换时触发</td></tr><tr><td>click</td><td><code>(trigger: NoticeBarTrigger)</code></td><td>点击事件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type NoticeBarTrigger = &#39;prefix-icon&#39; \\| &#39;content&#39; \\| &#39;operation&#39; \\| &#39;suffix-icon&#39;;</code><br></td></tr></tbody></table><h3 id="noticebar-external-classes">NoticeBar External Classes <a class="header-anchor" href="#noticebar-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-operation</td><td>右侧额外信息样式类</td></tr><tr><td>t-class-prefix-icon</td><td>前置图标样式类</td></tr><tr><td>t-class-suffix-icon</td><td>后置图标样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-notice-bar-error-bg-color</td><td>@error-color-1</td><td>-</td></tr><tr><td>--td-notice-bar-error-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-notice-bar-font-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-notice-bar-info-bg-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-notice-bar-info-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-notice-bar-operation-font-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-notice-bar-success-bg-color</td><td>@success-color-1</td><td>-</td></tr><tr><td>--td-notice-bar-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-notice-bar-suffix-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-notice-bar-warning-bg-color</td><td>@warning-color-1</td><td>-</td></tr><tr><td>--td-notice-bar-warning-color</td><td>@warning-color</td><td>-</td></tr></tbody></table>',9),ve=[fe],_e={name:"DESIGN"},De=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对用户进行较明显的反馈或提示，需要用户关注时使用，一段时间后不会自动消失，通常是自动触发</p><h3 id="页面布局相关">页面布局相关 <a class="header-anchor" href="#页面布局相关"></a></h3><h5 id="公告栏位于页面或模块的顶部，让用户能够快速关注到重要信息">公告栏位于页面或模块的顶部，让用户能够快速关注到重要信息 <a class="header-anchor" href="#公告栏位于页面或模块的顶部，让用户能够快速关注到重要信息"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-2.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="经常用于系统状态的通知，如警示或错误信息的展示，告知用户具体的系统状态、出现原因、和解决方式">经常用于系统状态的通知，如警示或错误信息的展示，告知用户具体的系统状态、出现原因、和解决方式 <a class="header-anchor" href="#经常用于系统状态的通知，如警示或错误信息的展示，告知用户具体的系统状态、出现原因、和解决方式"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-3.png"></div></div><hr><h5 id="展示当前场景的重要公告，这类公告通常比较重要，需要用户务必关注">展示当前场景的重要公告，这类公告通常比较重要，需要用户务必关注 <a class="header-anchor" href="#展示当前场景的重要公告，这类公告通常比较重要，需要用户务必关注"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-4.gif"></div></div><hr><h5 id="在营销场景，经常用于广告或促销信息的展示，提高用户转化率">在营销场景，经常用于广告或促销信息的展示，提高用户转化率 <a class="header-anchor" href="#在营销场景，经常用于广告或促销信息的展示，提高用户转化率"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-5.png"></div></div><hr><h5 id="当需要同时展示多条公告时，通常使用可滚动的公告栏，依次展示多条公告信息">当需要同时展示多条公告时，通常使用可滚动的公告栏，依次展示多条公告信息 <a class="header-anchor" href="#当需要同时展示多条公告时，通常使用可滚动的公告栏，依次展示多条公告信息"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-6.gif"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="可以同时展示多个公告栏，但不建议超过2个，过多的公告栏会占用过多屏幕空间、分散用户的注意力">可以同时展示多个公告栏，但不建议超过2个，过多的公告栏会占用过多屏幕空间、分散用户的注意力 <a class="header-anchor" href="#可以同时展示多个公告栏，但不建议超过2个，过多的公告栏会占用过多屏幕空间、分散用户的注意力"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/notice-bar/notice-bar-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./message">消息通知</a></td><td style="text-align:left;">当需要对用户进行较轻量的反馈或提示，可以自动消失或通过点击关闭，通常由用户触发。</td></tr><tr><td style="text-align:left;"><a href="./toast">轻提示</a></td><td style="text-align:left;">当需要对用户进行轻量反馈或提示，且不需要用户进行操作时使用，轻提示会在一段时间后自动消失。</td></tr></tbody></table>',22),Ee=[De],xe=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760436862390"})],-1),ke=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ye(t,i,d,a,l,m){const n=u("Stackblitz");return f(),b("td-doc-content",M,[e("td-doc-header",R,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,B),r(e("div",null,[e("div",C,[S,e("div",q,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",z,[o(n,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,I)]),T,e("div",P,[e("td-doc-demo",{code:t.DemoexampleiconDemoCode,language:"markup","show-code":"",mode:"open","demo-name":"iconDemo","component-name":" README"},[e("div",j,[o(n,{"demo-name":"iconDemo","component-name":" README",code:t.DemoexampleiconDemoCode},null,8,["code"])])],8,$)]),O,e("div",V,[e("td-doc-demo",{code:t.DemoexamplesuffixIconCode,language:"markup","show-code":"",mode:"open","demo-name":"suffixIcon","component-name":" README"},[e("div",H,[o(n,{"demo-name":"suffixIcon","component-name":" README",code:t.DemoexamplesuffixIconCode},null,8,["code"])])],8,L)]),U,e("div",G,[e("td-doc-demo",{code:t.DemoexampleeventCode,language:"markup","show-code":"",mode:"open","demo-name":"event","component-name":" README"},[e("div",J,[o(n,{"demo-name":"event","component-name":" README",code:t.DemoexampleeventCode},null,8,["code"])])],8,F)]),K,e("div",Q,[e("td-doc-demo",{code:t.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[e("div",X,[o(n,{"demo-name":"custom","component-name":" README",code:t.DemoexamplecustomCode},null,8,["code"])])],8,W)]),Y,e("div",Z,[e("td-doc-demo",{code:t.DemoexamplecustomizationCode,language:"markup","show-code":"",mode:"open","demo-name":"customization","component-name":" README"},[e("div",te,[o(n,{"demo-name":"customization","component-name":" README",code:t.DemoexamplecustomizationCode},null,8,["code"])])],8,ee)]),ne,oe,e("div",de,[e("td-doc-demo",{code:t.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[e("div",ae,[o(n,{"demo-name":"theme","component-name":" README",code:t.DemoexamplethemeCode},null,8,["code"])])],8,ie)]),re,ce,e("div",se,[e("td-doc-demo",{code:t.DemoexamplescrollingCode,language:"markup","show-code":"",mode:"open","demo-name":"scrolling","component-name":" README"},[e("div",me,[o(n,{"demo-name":"scrolling","component-name":" README",code:t.DemoexamplescrollingCode},null,8,["code"])])],8,le)])]),e("td-doc-phone",pe,ge,512),be],512),[[c,t.tab==="demo"]]),r(e("div",ue,ve,512),[[c,t.tab==="api"]]),r(e("div",_e,Ee,512),[[c,t.tab==="design"]]),xe,ke],512)}const Ae=h(A,[["render",ye]]);export{Ae as default};
