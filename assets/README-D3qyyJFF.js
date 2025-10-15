import{_ as m,d as u,c as b,a as e,w as a,v as s,b as l,e as c,f as i,r as g,o as v}from"./sites-DRVMbq6-.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const y=`<template>
  <view>
    <t-tree-select
      :options="options"
      :value="value"
      @change="onChange"
    />
  </view>
</template>

<script>
import tTreeSelect from 'tdesign-uniapp/tree-select/tree-select.vue';
const chineseNumber = '一二三四五六七八九十'.split('');
const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];
  for (let i = 0; i < count; i += 1) {
    const value = prefix ? \`\${prefix}-\${i}\` : \`\${i}\`;
    const rect = {
      label: \`选项\${chineseNumber[i]}\`,
      value,
    };
    if (deep > 0) {
      rect.children = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }
  return ans;
};
export default {
  components: {
    tTreeSelect,
  },
  data() {
    return {
      options: generateTree(1),
      value: ['5', '5-5'],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change: ', e);
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,_=`<template>
  <view>
    <t-tree-select
      :options="options"
      :value="value"
      multiple
      @change="onChange"
    />
  </view>
</template>

<script>
import tTreeSelect from 'tdesign-uniapp/tree-select/tree-select.vue';
const chineseNumber = '一二三四五六七八九十'.split('');
const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];
  for (let i = 0; i < count; i += 1) {
    const value = prefix ? \`\${prefix}-\${i}\` : \`\${i}\`;
    const rect = {
      label: \`选项\${chineseNumber[i]}\`,
      value,
    };
    if (deep > 0) {
      rect.children = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }
  return ans;
};
export default {
  components: {
    tTreeSelect,
  },
  data() {
    return {
      options: generateTree(1),
      value: ['5', ['5-0', '5-1']],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change: ', e);
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,T=`<template>
  <view>
    <t-tree-select
      :options="options"
      :value="value"
      @change="onChange"
    />
  </view>
</template>

<script>
import tTreeSelect from 'tdesign-uniapp/tree-select/tree-select.vue';
const areaList = {
  provinces: {
    110000: '北京市',
    440000: '广东省',
  },
  cities: {
    110100: '北京市',
    440100: '广州市',
    440200: '韶关市',
    440300: '深圳市',
    440400: '珠海市',
    440500: '汕头市',
    440600: '佛山市',
  },
  counties: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    110107: '石景山区',
    110108: '海淀区',
    110109: '门头沟区',
    110111: '房山区',
    110112: '通州区',
    110113: '顺义区',
    110114: '昌平区',
    110115: '大兴区',
    110116: '怀柔区',
    110117: '平谷区',
    110118: '密云区',
    110119: '延庆区',
    440103: '荔湾区',
    440104: '越秀区',
    440105: '海珠区',
    440106: '天河区',
    440111: '白云区',
    440112: '黄埔区',
    440113: '番禺区',
    440114: '花都区',
    440115: '南沙区',
    440117: '从化区',
    440118: '增城区',
    440203: '武江区',
    440204: '浈江区',
    440205: '曲江区',
    440222: '始兴县',
    440224: '仁化县',
    440229: '翁源县',
    440232: '乳源瑶族自治县',
    440233: '新丰县',
    440281: '乐昌市',
    440282: '南雄市',
    440303: '罗湖区',
    440304: '福田区',
    440305: '南山区',
    440306: '宝安区',
    440307: '龙岗区',
    440308: '盐田区',
    440309: '龙华区',
    440310: '坪山区',
    440311: '光明区',
    440402: '香洲区',
    440403: '斗门区',
    440404: '金湾区',
    440507: '龙湖区',
    440511: '金平区',
    440512: '濠江区',
    440513: '潮阳区',
    440514: '潮南区',
    440515: '澄海区',
    440523: '南澳县',
    440604: '禅城区',
    440605: '南海区',
    440606: '顺德区',
    440607: '三水区',
    440608: '高明区',
  },
};
const generateTree = () => {
  const { provinces, cities, counties } = areaList;
  const options = [];
  const eachObj = (obj, cb) => Object.keys(obj).forEach(cb);
  const match = (v1, v2, base) => parseInt(v1 / base, 10) === parseInt(v2 / base, 10);
  eachObj(provinces, (prov) => {
    const cityList = [];
    eachObj(cities, (city) => {
      const countyList = [];
      if (match(city, prov, 10000)) {
        eachObj(counties, (county) => {
          if (match(county, city, 100)) {
            countyList.push({
              label: counties[county],
              value: county,
            });
          }
        });
        cityList.push({
          label: cities[city],
          value: city,
          children: countyList,
        });
      }
    });
    const item = {
      label: provinces[prov],
      value: prov,
      children: cityList,
    };
    options.push(item);
  });
  return options;
};
export default {
  components: {
    tTreeSelect,
  },
  data() {
    return {
      options: generateTree(),
      value: ['110000', '110100', '110101'],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,S=u({data(){return{DemoexamplebaseCode:y,DemoexamplemultipleCode:_,DemoexamplenormalCode:T}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:o,tdDocTabs:n,tdDocPhone:d}=this.$refs,h="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tree-select/tree-select";o&&(o.docInfo={title:"TreeSelect 树形选择",desc:"适用于选择树形的数据结构。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),d&&(d.qrcodeUrl=h),f.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"tree-select"},x=["tab"],k={name:"DEMO"},A=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TTreeSelect <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tree-select/tree-select.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="基础树形选择">基础树形选择 <a class="header-anchor" href="#基础树形选择"></a></h4>`,5),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],w={slot:"action"},$=e("h4",{id:"多选树形选择"},[i("多选树形选择 "),e("a",{class:"header-anchor",href:"#多选树形选择"})],-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},R=["code"],V={slot:"action"},j=e("h3",{id:"组件状态"},[i("组件状态 "),e("a",{class:"header-anchor",href:"#组件状态"})],-1),L=e("h4",{id:"三级树形选择"},[i("三级树形选择 "),e("a",{class:"header-anchor",href:"#三级树形选择"})],-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-normal tdesign-demo-item-- README"},P=["code"],I={slot:"action"},q={ref:"tdDocPhone"},B=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tree-select/tree-select",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),z=[B],H=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"tree-select"},null,-1),U={name:"API"},G=l('<h3 id="treeselect-props">TreeSelect Props <a class="header-anchor" href="#treeselect-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>custom-value</td><td>String / Number / Array</td><td>-</td><td>自定义选中值，优先级高于 <code>value</code>。TS 类型：<code>TreeSelectValue</code></td><td>N</td></tr><tr><td>height</td><td>String / Number</td><td>336</td><td>高度，默认单位为 px</td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 <code>value / label / disabled / children</code> 在 <code>options</code> 数据中对应的字段别名，示例：<code>{ value: &#39;key&#39;, label: &#39;name&#39;, children: &#39;list&#39; }</code>。TS 类型：<code>TreeKeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>multiple</td><td>Boolean</td><td>false</td><td>是否允许多选</td><td>N</td></tr><tr><td>options</td><td>Array</td><td>[]</td><td>选项。TS 类型：<code>Array&lt;DataOption&gt;</code></td><td>N</td></tr><tr><td>value</td><td>String / Number / Array</td><td>-</td><td>选中值。TS 类型：<code>TreeSelectValue</code> <code>type TreeSelectValue = string \\| number \\| Array&lt;TreeSelectValue&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number / Array</td><td>undefined</td><td>选中值。非受控属性。TS 类型：<code>TreeSelectValue</code> <code>type TreeSelectValue = string \\| number \\| Array&lt;TreeSelectValue&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="treeselect-events">TreeSelect Events <a class="header-anchor" href="#treeselect-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: TreeSelectValue, level: TreeLevel) </code></td><td>点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type TreeLevel = 0 \\| 1 \\| 2</code><br></td></tr></tbody></table><h3 id="treeselect-external-classes">TreeSelect External Classes <a class="header-anchor" href="#treeselect-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-left-column</td><td>左侧第一列样式类</td></tr><tr><td>t-class-left-item</td><td>左侧第一列子项样式类</td></tr><tr><td>t-class-middle-item</td><td>中间列子项样式类</td></tr><tr><td>t-class-right-column</td><td>右侧第一列样式类</td></tr><tr><td>t-class-right-item</td><td>右侧第一列子项样式类</td></tr><tr><td>t-class-right-item-label</td><td>右侧第一列子项标签样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-tree-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tree-colum-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-tree-colum-width</td><td>206rpx</td><td>-</td></tr><tr><td>--td-tree-item-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tree-item-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-tree-item-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tree-item-height</td><td>112rpx</td><td>-</td></tr><tr><td>--td-tree-root-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr></tbody></table>',9),K=[G],F={name:"DESIGN"},J=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当一组选项由2-3个层级构成，且每个层级有大量的选项需要用户逐级选择时使用。</p><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="级联选择器的层级不宜超过3层，层级过多时应调整数据结构或改用级联选择器。">级联选择器的层级不宜超过3层，层级过多时应调整数据结构或改用级联选择器。 <a class="header-anchor" href="#级联选择器的层级不宜超过3层，层级过多时应调整数据结构或改用级联选择器。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tree-select/tree-select-1.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./picker">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择时，或一组选项由递进层级构成，需要用户逐级选择使用时。</td></tr><tr><td style="text-align:left;"><a href="./cascader">级联选择器</a></td><td style="text-align:left;">当一组选项由递进层级构成，且有每个层级有大量的选项需要用户逐级选择使用时。</td></tr></tbody></table>',7),Q=[J],W=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760543041547"})],-1),X=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Y(t,o,n,d,h,p){const r=g("Stackblitz");return v(),b("td-doc-content",D,[e("td-doc-header",E,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,x),a(e("div",null,[e("div",k,[A,e("div",C,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",w,[c(r,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,N)]),$,e("div",M,[e("td-doc-demo",{code:t.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[e("div",V,[c(r,{"demo-name":"multiple","component-name":" README",code:t.DemoexamplemultipleCode},null,8,["code"])])],8,R)]),j,L,e("div",O,[e("td-doc-demo",{code:t.DemoexamplenormalCode,language:"markup","show-code":"",mode:"open","demo-name":"normal","component-name":" README"},[e("div",I,[c(r,{"demo-name":"normal","component-name":" README",code:t.DemoexamplenormalCode},null,8,["code"])])],8,P)])]),e("td-doc-phone",q,z,512),H],512),[[s,t.tab==="demo"]]),a(e("div",U,K,512),[[s,t.tab==="api"]]),a(e("div",F,Q,512),[[s,t.tab==="design"]]),W,X],512)}const te=m(S,[["render",Y]]);export{te as default};
