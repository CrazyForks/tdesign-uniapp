import{_ as m,d as h,c as g,a as e,w as a,v as c,b as s,e as i,r as w,o as b}from"./sites-QsDL4Fx-.js";import{P as u}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <t-swipe-cell>
      <t-cell
        title="左滑单操作"
        note="辅助信息"
        :bordered="false"
      />
      <template #right>
        <view
          class="btn delete-btn"
          @click="onDelete"
        >
          删除
        </view>
      </template>
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        :bordered="false"
        title="左滑大列表"
        description="一段很长很长的内容文字"
        note="辅助信息"
        image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      />
      <template #right>
        <view
          class="btn delete-btn"
          @click="onDelete"
        >
          删除
        </view>
      </template>
    </t-swipe-cell>

    <t-swipe-cell
      :right="right"
      @click="onActionClick"
    >
      <t-cell
        title="左滑双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        title="左滑多操作"
        note="辅助信息"
        :bordered="false"
      />
      <template #right>
        <view
          class="btn-wrapper"
        >
          <view
            class="btn favor-btn"
            @click="onFavor"
          >
            收藏
          </view>
          <view
            class="btn edit-btn"
            @click="onEdit"
          >
            编辑
          </view>
          <view
            class="btn delete-btn"
            @click="onDelete"
          >
            删除
          </view>
        </view>
      </template>
    </t-swipe-cell>
  </view>
</template>

<script>
import tSwipeCell from 'tdesign-uniapp/swipe-cell/swipe-cell';
import tCell from 'tdesign-uniapp/cell/cell';
export default {
  components: {
    tSwipeCell,
    tCell,
  },
  data() {
    return {
      right: [
        {
          text: '编辑',
          className: 'btn edit-btn',
        },
        {
          text: '删除',
          className: 'btn delete-btn',
        },
      ],
    };
  },
  created() {},
  methods: {
    onActionClick(action) {
      uni.showToast({
        title: \`你点击了\${action.text}\`,
        icon: 'none',
      });
    },
    onDelete() {
      uni.showToast({
        title: '你点击了删除',
        icon: 'none',
      });
    },
    onEdit() {
      uni.showToast({
        title: '你点击了编辑',
        icon: 'none',
      });
    },
    onFavor() {
      uni.showToast({
        title: '你点击了收藏',
        icon: 'none',
      });
    },
    onChoice() {
      uni.showToast({
        title: '你点击了选择',
        icon: 'none',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,v=`<template>
  <view>
    <t-swipe-cell>
      <t-cell
        title="右滑单操作"
        note="辅助信息"
        :bordered="false"
      />
      <template
        #left
      >
        <view
          class="btn favor-btn"
          @tap="onChoice"
        >
          选择
        </view>
      </template>
    </t-swipe-cell>
  </view>
</template>

<script>
import tSwipeCell from 'tdesign-uniapp/swipe-cell/swipe-cell';
import tCell from 'tdesign-uniapp/cell/cell';
export default {
  components: {
    tSwipeCell,
    tCell,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChoice() {
      uni.showToast({
        title: '你点击了选择',
        icon: 'none',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-swipe-cell
      :right="right"
      :left="left"
      @click="onActionClick"
    >
      <t-cell
        title="左右滑操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>
  </view>
</template>

<script>
import tSwipeCell from 'tdesign-uniapp/swipe-cell/swipe-cell';
import tCell from 'tdesign-uniapp/cell/cell';
export default {
  components: {
    tSwipeCell,
    tCell,
  },
  data() {
    return {
      right: [
        {
          text: '删除',
          className: 'btn delete-btn',
        },
      ],
      left: [
        {
          text: '选择',
          className: 'btn favor-btn',
        },
      ],
    };
  },
  created() {},
  methods: {
    onActionClick(detail) {
      uni.showToast({
        title: \`你点击了\${detail.text}\`,
        icon: 'none',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-swipe-cell
      :right="right"
      @click="onActionClick"
    >
      <t-cell
        title="左滑-带图标文本双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell :right="rightIcon">
      <t-cell
        title="左滑-仅带图标双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        :bordered="false"
        title="左滑大列表-仅带图标双操作"
        description="一段很长很长的内容文字"
        note="辅助信息"
        image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      />
      <template
        #right
      >
        <view
          class="btn-wrapper"
        >
          <view
            class="btn edit-btn column"
            @tap="onEdit"
          >
            <t-icon
              t-class="padding-bottom"
              name="edit"
              size="32rpx"
            />
            编辑
          </view>
          <view
            class="btn delete-btn column"
            @tap="onDelete"
          >
            <t-icon
              t-class="padding-bottom"
              name="delete"
              size="32rpx"
            />
            删除
          </view>
        </view>
      </template>
    </t-swipe-cell>
  </view>
</template>

<script>
import tSwipeCell from 'tdesign-uniapp/swipe-cell/swipe-cell';
import tCell from 'tdesign-uniapp/cell/cell';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSwipeCell,
    tCell,
    tIcon,
  },
  data() {
    return {
      right: [
        {
          text: '编辑',
          icon: {
            name: 'edit',
            size: 16,
          },
          className: 'btn edit-btn',
        },
        {
          text: '删除',
          icon: {
            name: 'delete',
            size: 16,
          },
          className: 'btn delete-btn',
        },
      ],
      rightIcon: [
        {
          icon: 'edit',
          className: 'btn edit-btn',
        },
        {
          icon: 'delete',
          className: 'btn delete-btn',
        },
      ],
    };
  },
  created() {},
  methods: {
    onActionClick(detail) {
      uni.showToast({
        title: \`你点击了\${detail.text}\`,
        icon: 'none',
      });
    },
    onDelete() {
      uni.showToast({
        title: '你点击了删除',
        icon: 'none',
      });
    },
    onEdit() {
      uni.showToast({
        title: '你点击了编辑',
        icon: 'none',
      });
    },
    onFavor() {
      uni.showToast({
        title: '你点击了收藏',
        icon: 'none',
      });
    },
    onChoice() {
      uni.showToast({
        title: '你点击了选择',
        icon: 'none',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=h({data(){return{DemoexampleleftCode:f,DemoexamplerightCode:v,DemoexampledoubleCode:_,DemoexampleiconCode:C}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:l,tdDocTabs:n,tdDocPhone:d}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/swipe-cell/swipe-cell";l&&(l.docInfo={title:"SwipeCell 滑动操作",desc:"用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),d&&(d.qrcodeUrl=r),u.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"swipe-cell"},E=["tab"],x={name:"DEMO"},A=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;t-swipe-cell&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/swipe-cell/swipe-cell&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/eK8Acim67mSD" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>左滑单操作</p>`,8),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-left tdesign-demo-item-- README"},q=["code"],T={slot:"action"},N=e("p",null,"右滑单操作",-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-right tdesign-demo-item-- README"},R=["code"],I={slot:"action"},$=e("p",null,"左右滑操作",-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-double tdesign-demo-item-- README"},z=["code"],P={slot:"action"},B=e("p",null,"带图标的滑动操作",-1),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon tdesign-demo-item-- README"},O=["code"],V={slot:"action"},H=s('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="swipecell-组件在真机上无法滑动？"><code>SwipeCell</code> 组件在真机上无法滑动？ <a class="header-anchor" href="#swipecell-组件在真机上无法滑动？"></a></h3><p>移除全局配置项: &quot;componentFramework&quot;: &quot;glass-easel&quot;，详情见： <a href="https://github.com/Tencent/tdesign-miniprogram/issues/2524" target="_blank" rel="noopener noreferrer">issue 2524</a>。如需使用 <code>skyline render</code>，建议页面级粒度开启。</p>',3),U={ref:"tdDocPhone"},G=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/swipe-cell/swipe-cell",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),J=[G],K=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"swipe-cell"},null,-1),Q={name:"API"},L=s('<h3 id="swipecell-props">SwipeCell Props <a class="header-anchor" href="#swipecell-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>-</td><td>是否禁用滑动</td><td>N</td></tr><tr><td>left</td><td>Array / Slot</td><td>-</td><td>左侧滑动操作项。所有行为同 <code>right</code>。TS 类型：<code>Array&lt;SwipeActionItem&gt;</code></td><td>N</td></tr><tr><td>opened</td><td>Boolean / Array</td><td>false</td><td>操作项是否呈现为打开态，值为数组时表示分别控制左右滑动的展开和收起状态。TS 类型：<code>boolean \\| Array&lt;boolean&gt;</code></td><td>N</td></tr><tr><td>right</td><td>Array / Slot</td><td>-</td><td>右侧滑动操作项。有两种定义方式，一种是使用数组，二种是使用插槽。<code>right.text</code> 表示操作文本，<code>right.className</code> 表示操作项类名，<code>right.style</code> 表示操作项样式，<code>right.onClick</code> 表示点击操作项后执行的回调函数。示例：<code>[{ text: &#39;删除&#39;, icon: &#39;delete&#39;, style: &#39;background-color: red&#39;, onClick: () =&gt; {} }]</code>。TS 类型：<code>Array&lt;SwipeActionItem&gt;</code> <code>interface SwipeActionItem {text?: string; icon?: string \\| object, className?: string; style?: string; onClick?: () =&gt; void; [key: string]: any }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/swipe-cell/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="swipecell-events">SwipeCell Events <a class="header-anchor" href="#swipecell-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td><code>(action: SwipeActionItem, source: SwipeSource)</code></td><td>操作项点击时触发（插槽写法组件不触发，业务侧自定义内容和事件）。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/swipe-cell/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type SwipeSource = &#39;left&#39; \\| &#39;right&#39;</code><br></td></tr><tr><td>dragend</td><td>-</td><td>滑动结束事件</td></tr><tr><td>dragstart</td><td>-</td><td>滑动开始事件</td></tr></tbody></table>',4),W=[L],X={name:"DESIGN"},Y=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要针对列表项目进行某项低频的辅助操作时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="与单元格、按钮组合使用，单元格作为承载滑动操作的容器，左右滑动后展示操作项的按钮。">与<a href="./cell">单元格</a>、<a href="./button">按钮</a>组合使用，单元格作为承载滑动操作的容器，左右滑动后展示操作项的按钮。 <a class="header-anchor" href="#与单元格、按钮组合使用，单元格作为承载滑动操作的容器，左右滑动后展示操作项的按钮。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-2.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常使用在对话列表、收藏列表、购物车等场景中，承载删除、收藏等辅助操作。">通常使用在对话列表、收藏列表、购物车等场景中，承载删除、收藏等辅助操作。 <a class="header-anchor" href="#通常使用在对话列表、收藏列表、购物车等场景中，承载删除、收藏等辅助操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-3.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-4.png"></div></div><hr><h5 id="通常左滑后展示删除按钮，若删除操作重要且无法撤回，可在滑动操作中对删除进行二次确认。">通常左滑后展示删除按钮，若删除操作重要且无法撤回，可在滑动操作中对删除进行二次确认。 <a class="header-anchor" href="#通常左滑后展示删除按钮，若删除操作重要且无法撤回，可在滑动操作中对删除进行二次确认。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-5.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="左右滑动操作通常承载低频的辅助功能，不建议承载高频或过于复杂的功能。">左右滑动操作通常承载低频的辅助功能，不建议承载高频或过于复杂的功能。 <a class="header-anchor" href="#左右滑动操作通常承载低频的辅助功能，不建议承载高频或过于复杂的功能。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="按钮的顺序、颜色使用需要符合用户预期。">按钮的顺序、颜色使用需要符合用户预期。 <a class="header-anchor" href="#按钮的顺序、颜色使用需要符合用户预期。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="左滑的操作数不建议超过4个，右滑不建议超过1个，操作过多时应改用其它交互方式。">左滑的操作数不建议超过4个，右滑不建议超过1个，操作过多时应改用其它交互方式。 <a class="header-anchor" href="#左滑的操作数不建议超过4个，右滑不建议超过1个，操作过多时应改用其它交互方式。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/swipe-cell/swipe-cell-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./button">按钮</a></td><td style="text-align:left;">当前流程的结束或新流程的开启需要用户点击触发时使用。</td></tr></tbody></table>',22),Z=[Y],ee=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760416343525"})],-1),te=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ne(t,l,n,d,r,p){const o=w("Stackblitz");return b(),g("td-doc-content",D,[e("td-doc-header",y,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,E),a(e("div",null,[e("div",x,[A,e("div",S,[e("td-doc-demo",{code:t.DemoexampleleftCode,language:"markup","show-code":"",mode:"open","demo-name":"left","component-name":" README"},[e("div",T,[i(o,{"demo-name":"left","component-name":" README",code:t.DemoexampleleftCode},null,8,["code"])])],8,q)]),N,e("div",M,[e("td-doc-demo",{code:t.DemoexamplerightCode,language:"markup","show-code":"",mode:"open","demo-name":"right","component-name":" README"},[e("div",I,[i(o,{"demo-name":"right","component-name":" README",code:t.DemoexamplerightCode},null,8,["code"])])],8,R)]),$,e("div",j,[e("td-doc-demo",{code:t.DemoexampledoubleCode,language:"markup","show-code":"",mode:"open","demo-name":"double","component-name":" README"},[e("div",P,[i(o,{"demo-name":"double","component-name":" README",code:t.DemoexampledoubleCode},null,8,["code"])])],8,z)]),B,e("div",F,[e("td-doc-demo",{code:t.DemoexampleiconCode,language:"markup","show-code":"",mode:"open","demo-name":"icon","component-name":" README"},[e("div",V,[i(o,{"demo-name":"icon","component-name":" README",code:t.DemoexampleiconCode},null,8,["code"])])],8,O)]),H]),e("td-doc-phone",U,J,512),K],512),[[c,t.tab==="demo"]]),a(e("div",Q,W,512),[[c,t.tab==="api"]]),a(e("div",X,Z,512),[[c,t.tab==="design"]]),ee,te],512)}const se=m(k,[["render",ne]]);export{se as default};
