import{_ as p,d as m,c as g,a as t,w as o,v as r,b as d,e as h,f as x,r as u,o as b}from"./sites-v9LZeYm3.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view class="wrap">
    <view class="custom-navbar">
      <t-navbar
        title="TDesign"
        left-arrow
      />
    </view>
    <t-indexes
      :default-current="defaultCurrent"
      :index-list="indexList"
      :sticky-offset="stickyOffset"
      @select="onSelect"
      @change="onChange"
    >
      <block
        v-for="(item, index) in list"
        :key="index"
      >
        <t-indexes-anchor :index="item.index" />

        <t-cell-group>
          <t-cell
            v-for="(city, index1) in item.children"
            :key="index1"
            :title="city"
            aria-role="button"
          />
        </t-cell-group>
      </block>
    </t-indexes>
  </view>
</template>

<script>
import tIndexes from 'tdesign-uniapp/indexes/indexes';
import tIndexesAnchor from 'tdesign-uniapp/indexes-anchor/indexes-anchor';
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
export default {
  components: {
    tIndexes,
    tIndexesAnchor,
    tCellGroup,
    tCell,
  },
  onPageScroll() {},
  data() {
    return {
      defaultCurrent: 'B',
      indexList: [],

      list: [
        {
          index: 'A',
          children: ['阿坝', '阿拉善', '阿里', '安康', '安庆', '鞍山', '安顺', '安阳', '澳门'],
        },
        {
          index: 'B',
          children: ['北京', '白银', '保定', '宝鸡', '保山', '包头', '巴中', '北海', '蚌埠', '本溪', '毕节', '滨州', '百色', '亳州'],
        },
        {
          index: 'C',
          children: [
            '重庆',
            '成都',
            '长沙',
            '长春',
            '沧州',
            '常德',
            '昌都',
            '长治',
            '常州',
            '巢湖',
            '潮州',
            '承德',
            '郴州',
            '赤峰',
            '池州',
            '崇左',
            '楚雄',
            '滁州',
            '朝阳',
          ],
        },
        {
          index: 'D',
          children: ['大连', '东莞', '大理', '丹东', '大庆', '大同', '大兴安岭', '德宏', '德阳', '德州', '定西', '迪庆', '东营'],
        },
        {
          index: 'E',
          children: ['鄂尔多斯', '恩施', '鄂州'],
        },
        {
          index: 'F',
          children: ['福州', '防城港', '佛山', '抚顺', '抚州', '阜新', '阜阳'],
        },
        {
          index: 'G',
          children: ['广州', '桂林', '贵阳', '甘南', '赣州', '甘孜', '广安', '广元', '贵港', '果洛'],
        },
        {
          index: 'J',
          children: ['揭阳', '吉林', '晋江', '吉安', '胶州', '嘉兴', '济南', '鸡西', '荆州', '江门', '基隆'],
        },
        {
          index: 'K',
          children: ['昆明', '开封', '康定', '喀什'],
        },
      ],

      stickyOffset: 0,
      city: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
    this.indexList = this.list.map(item => item.index);
  },
  methods: {
    onChange(e) {
      const { index } = e;
      console.log('change:', index);
    },

    onSelect(e) {
      const { index } = e;
      console.log('select:', index);
    },

    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.stickyOffset = height;
      });
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,y=`<template>
  <view class="wrap">
    <view class="custom-navbar">
      <t-navbar
        title="TDesign"
        left-arrow
      />
    </view>
    <view class="indexes">
      <t-indexes
        :index-list="indexList"
        :sticky-offset="stickyOffset + 8"
        t-class="wrapper"
        @change="onChange"
        @select="onSelect"
      >
        <template
          v-for="(item, index) in list"
          :key="index"
        >
          <t-indexes-anchor
            :index="item.index"
            t-class="anchor-wrapper"
          >
            <view :class="'capsule' + (curIndex == item.index ? ' capsule--active' : '')">
              {{ item.index }}
            </view>
          </t-indexes-anchor>

          <t-cell-group>
            <t-cell
              v-for="(city, index1) in item.children"
              :key="index1"
              :title="city"
              :bordered="item.children.length - 1 != index"
            />
          </t-cell-group>
        </template>
      </t-indexes>
    </view>
  </view>
</template>

<script>
import tIndexes from 'tdesign-uniapp/indexes/indexes';
import tIndexesAnchor from 'tdesign-uniapp/indexes-anchor/indexes-anchor';
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
const children = new Array(5).fill('列表内容');
const list = [
  {
    index: 1,
    children,
  },
  {
    index: 3,
    children,
  },
  {
    index: 5,
    children,
  },
  {
    index: 7,
    children,
  },
  {
    index: 8,
    children,
  },
  {
    index: 10,
    children,
  },
  {
    index: '#',
    children,
  },
];
export default {
  options: {
    styleIsolation: 'shared',
  },
  onPageScroll() {},
  components: {
    tIndexes,
    tIndexesAnchor,
    tCellGroup,
    tCell,
  },
  data() {
    return {
      list,
      indexList: list.map(item => item.index),
      curIndex: '',
      stickyOffset: 0,
      city: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    onChange(e) {
      const { index } = e;
      console.log('change:', index);
      this.curIndex = index;
    },

    onSelect(e) {
      const { index } = e;
      console.log('select:', index);
      this.curIndex = index;
    },

    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.stickyOffset = height;
      });
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,_=m({data(){return{DemoexamplebaseCode:v,DemoexamplecustomCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:s,tdDocTabs:n,tdDocPhone:i}=this.$refs,a="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/indexes/indexes";s&&(s.docInfo={title:"Indexes 索引",desc:"用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:c})=>this.tab=c),i&&(i.qrcodeUrl=a),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},w={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"indexes"},C=["tab"],D={name:"DEMO"},A=d(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TIndexes <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/indexes/indexes.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TIndexesAnchor <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/indexes-anchor/indexes-anchor.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础索引">基础索引 <a class="header-anchor" href="#基础索引"></a></h3>`,4),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},S=["code"],E={slot:"action"},N=t("h3",{id:"自定义索引"},[x("自定义索引 "),t("a",{class:"header-anchor",href:"#自定义索引"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},q=["code"],O={slot:"action"},R=d('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="在滚动元素中，-indexes-索引组件失效（-3746）？">在滚动元素中， Indexes 索引组件失效（<a href="https://github.com/Tencent/tdesign-miniprogram/issues/3746" target="_blank" rel="noopener noreferrer">#3746</a>）？ <a class="header-anchor" href="#在滚动元素中，-indexes-索引组件失效（-3746）？"></a></h3><p><code>Indexes</code> 组件自 <code>0.32.0</code> 版本开始移除了对 <code>scroll-view</code> 的依赖，组件内部使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html" target="_blank" rel="noopener noreferrer">wx.pageScrollTo</a> 滚动到指定位置，因此只支持页面级滚动，不支持在滚动元素中嵌套使用，包括 overflow: scroll、 scroll-view 等。</p>',3),M={ref:"tdDocPhone"},P=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/indexes/indexes",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),$=[P],B=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"indexes"},null,-1),z={name:"API"},L=d('<h3 id="indexes-props">Indexes Props <a class="header-anchor" href="#indexes-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>current</td><td>String / Number</td><td>-</td><td><code>1.9.7</code>。索引列表的激活项，默认首项</td><td>N</td></tr><tr><td>default-current</td><td>String / Number</td><td>undefined</td><td><code>1.9.7</code>。索引列表的激活项，默认首项。非受控属性</td><td>N</td></tr><tr><td>index-list</td><td>Array</td><td>-</td><td><code>0.32.0</code>。索引字符列表。不传默认 <code>A-Z</code>。TS 类型：<code>Array&lt;string \\| number&gt;</code></td><td>N</td></tr><tr><td>list</td><td>Array</td><td>[]</td><td>已废弃。索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array&lt;{title: string}&gt;): 子元素列表，title为子元素的展示文案。TS 类型：<code>ListItem[] </code> <code>interface ListItem { title: string; index: string; children: { title: string; [key: string]: any} [] }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/indexes/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>sticky</td><td>Boolean</td><td>true</td><td>索引是否吸顶，默认为true。TS 类型：<code>Boolean</code></td><td>N</td></tr><tr><td>sticky-offset</td><td>Number</td><td>0</td><td><code>1.0.0</code>。锚点吸顶时与顶部的距离</td><td>N</td></tr></tbody></table><h3 id="indexes-events">Indexes Events <a class="header-anchor" href="#indexes-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(index: string \\| number)</code></td><td><code>0.34.0</code>。索引发生变更时触发事件</td></tr><tr><td>select</td><td><code>(index: string \\| number)</code></td><td>点击侧边栏时触发事件</td></tr></tbody></table><h3 id="indexesanchor-props">IndexesAnchor Props <a class="header-anchor" href="#indexesanchor-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>index</td><td>String / Number</td><td>-</td><td>索引字符</td><td>N</td></tr></tbody></table><h3 id="indexesanchor-external-classes">IndexesAnchor External Classes <a class="header-anchor" href="#indexesanchor-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-sidebar</td><td>侧边栏样式类</td></tr><tr><td>t-class-sidebar-item</td><td>侧边栏选项样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-indexes-sidebar-active-bg-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-indexes-sidebar-active-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-indexes-sidebar-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-indexes-sidebar-font-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-indexes-sidebar-item-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-indexes-sidebar-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-indexes-sidebar-right</td><td>16rpx</td><td>-</td></tr><tr><td>--td-indexes-sidebar-tips-bg-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-indexes-sidebar-tips-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-indexes-sidebar-tips-font-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-indexes-sidebar-tips-right</td><td>calc(100% + 32rpx)</td><td>-</td></tr><tr><td>--td-indexes-sidebar-tips-size</td><td>96rpx</td><td>-</td></tr><tr><td>--td-indexes-anchor-active-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-indexes-anchor-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-indexes-anchor-active-font-weight</td><td>600</td><td>-</td></tr><tr><td>--td-indexes-anchor-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-indexes-anchor-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-indexes-anchor-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-indexes-anchor-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-indexes-anchor-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-indexes-anchor-padding</td><td>8rpx 32rpx</td><td>-</td></tr><tr><td>--td-indexes-anchor-top</td><td>0</td><td>-</td></tr></tbody></table>',11),j=[L],G={name:"DESIGN"},H=d('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当数据项较多时，为方便用户快速找到目标数据项时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="索引与单选框、多选框组合使用，在选择数据的场景配合索引有利于用户快速找到目标选项。">索引与<a href="./radio">单选框</a>、<a href="./checkbox">多选框</a>组合使用，在选择数据的场景配合索引有利于用户快速找到目标选项。 <a class="header-anchor" href="#索引与单选框、多选框组合使用，在选择数据的场景配合索引有利于用户快速找到目标选项。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/indexes/indexes-1.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="索引项需要跟数据项小标题保持一致。">索引项需要跟数据项小标题保持一致。 <a class="header-anchor" href="#索引项需要跟数据项小标题保持一致。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/indexes/indexes-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/indexes/indexes-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="索引项排序应具备一定的逻辑相关性。">索引项排序应具备一定的逻辑相关性。 <a class="header-anchor" href="#索引项排序应具备一定的逻辑相关性。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/indexes/indexes-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/indexes/indexes-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./side-bar">侧边栏</a></td><td style="text-align:left;">当内容项数量较多，需要用户根据品类快速选择到目标内容项时使用。</td></tr></tbody></table>',13),V=[H],Q=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760436067732"})],-1),F=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function U(e,s,n,i,a,c){const l=u("Stackblitz");return b(),g("td-doc-content",k,[t("td-doc-header",w,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,C),o(t("div",null,[t("div",D,[A,t("div",I,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",E,[h(l,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,S)]),N,t("div",T,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",O,[h(l,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,q)]),R]),t("td-doc-phone",M,$,512),B],512),[[r,e.tab==="demo"]]),o(t("div",z,j,512),[[r,e.tab==="api"]]),o(t("div",G,V,512),[[r,e.tab==="design"]]),Q,F],512)}const Z=p(_,[["render",U]]);export{Z as default};
