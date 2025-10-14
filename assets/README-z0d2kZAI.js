import{_ as h,d as u,c as g,a as t,w as d,v as a,b as s,e as c,f as m,r as k,o as b}from"./sites-_W3AzEs2.js";import{P as y}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-cell
      class="mb-16"
      title="选择城市"
      arrow
      hover
      :note="cityText"
      @click="onCityPicker"
    />

    <t-cell
      class="mb-16"
      title="选择时间"
      arrow
      hover
      :note="dateText"
      @click="onSeasonPicker"
    />

    <t-picker
      :visible="cityVisible"
      :value="cityValue"
      data-key="city"
      title="选择城市"
      cancel-btn="取消"
      confirm-btn="确认"
      using-custom-navbar
      @change="onPickerChange($event, { key: 'city' })"
      @pick="onColumnChange($event, { key: 'city' })"
      @cancel="onPickerCancel($event, { key: 'city' })"
    >
      <t-picker-item
        :options="citys"
        :format="formatter"
      >
        <block
          v-for="(option, index) in citys"
          :key="index"
        >
          <view
            v-if="option.tag"
            :slot="'label-suffix--' + index"
            class="label-suffix"
          >
            <t-tag
              size="small"
              theme="primary"
            >
              {{ option.tag }}
            </t-tag>
          </view>
        </block>
      </t-picker-item>
    </t-picker>

    <t-picker
      :visible="dateVisible"
      :value="dateValue"
      data-key="date"
      title="选择时间"
      cancel-btn="取消"
      confirm-btn="确认"
      using-custom-navbar
      @change="onPickerChange($event, { key: 'date' })"
      @pick="onColumnChange($event, { key: 'date' })"
      @cancel="onPickerCancel($event, { key: 'date' })"
    >
      <t-picker-item :options="years" />
      <t-picker-item :options="seasons" />
    </t-picker>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tPicker from 'tdesign-uniapp/picker/picker';
import tPickerItem from 'tdesign-uniapp/picker-item/picker-item';
import tTag from 'tdesign-uniapp/tag/tag';
export default {
  components: {
    tCell,
    tPicker,
    tPickerItem,
    tTag,
  },
  data() {
    return {
      cityText: '',
      cityValue: [],
      dateText: '',
      dateValue: [],

      citys: [
        {
          label: '北京市',
          value: '北京市',
          tag: '合',
        },
        {
          label: '上海市',
          value: '上海市',
          tag: '合',
        },
        {
          label: '广州市',
          value: '广州市',
        },
        {
          label: '深圳市',
          value: '深圳市',
        },
        {
          label: '成都市',
          value: '成都市',
        },
      ],

      years: [
        {
          label: '2021年',
          value: '2021',
        },
        {
          label: '2020年',
          value: '2020',
        },
        {
          label: '2019年',
          value: '2019',
        },
      ],

      seasons: [
        {
          label: '春',
          value: '春',
        },
        {
          label: '夏',
          value: '夏',
        },
        {
          label: '秋',
          value: '秋',
        },
        {
          label: '冬',
          value: '冬',
        },
      ],

      formatter(item) {
        const { value, label } = item;
        if (value === '北京市') {
          return {
            value,
            label: label.substring(0, 2),
          };
        }
        return item;
      },

      cityVisible: false,
      dateVisible: false,

      option: {
        tag: '',
      },
    };
  },
  created() {},
  methods: {
    onColumnChange(e, { key }) {
      console.log('picker pick:', { e, key });
    },
    onPickerChange(e, { key }) {
      console.log('picker change:', { e, key });
      const { value } = e;
      this[\`\${key}Visible\`] = false;
      this[\`\${key}Value\`] = value;
      this[\`\${key}Text\`] = value.join(' ');
    },
    onPickerCancel(e, { key }) {
      console.log(e, '取消');
      console.log('picker cancel: ', { e, key });

      this[\`\${key}Visible\`] = false;
    },
    onCityPicker() {
      this.cityVisible = true;
    },
    onSeasonPicker() {
      this.dateVisible = true;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,f=`<template>
  <view>
    <t-cell
      title="选择地区"
      arrow
      hover
      :note="areaText"
      @click="onAreaPicker"
    />

    <t-picker
      :visible="areaVisible"
      :value="areaValue"
      title="选择地区"
      cancel-btn="取消"
      confirm-btn="确认"
      using-custom-navbar
      @change="onPickerChange"
      @pick="onColumnChange"
      @cancel="onPickerCancel"
    >
      <t-picker-item :options="provinces" />
      <t-picker-item :options="cities" />
      <t-picker-item :options="counties" />
    </t-picker>
  </view>
</template>

<script>
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
import tPicker from 'tdesign-uniapp/picker/picker';
import tPickerItem from 'tdesign-uniapp/picker-item/picker-item';
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
const getOptions = (obj, filter) => {
  const res = Object.keys(obj).map(key => ({
    value: key,
    label: obj[key],
  }));
  if (filter) {
    return res.filter(filter);
  }
  return res;
};
const match = (v1, v2, size) => v1.toString().slice(0, size) === v2.toString().slice(0, size);
export default {
  components: {
    tCellGroup,
    tCell,
    tPicker,
    tPickerItem,
  },
  data() {
    return {
      areaText: '',
      areaValue: [],
      provinces: getOptions(areaList.provinces),
      cities: [],
      counties: [],
      areaVisible: false,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.init();
    },

    init() {
      const { provinces } = this;
      const { cities, counties } = this.getCities(provinces[0].value);
      this.cities = cities;
      this.counties = counties;
    },

    onColumnChange(e) {
      console.log('pick:', e);
      const { column, index } = e;
      const { provinces, cities } = this;
      if (column === 0) {
        // 更改省份
        const { cities, counties } = this.getCities(provinces[index].value);
        this.cities = cities;
        this.counties = counties;
      }
      if (column === 1) {
        // 更改城市
        const counties = this.getCounties(cities[index].value);
        this.counties = counties;
      }
      if (column === 2) {
        // 更改区县
      }
    },

    getCities(provinceValue) {
      const cities = getOptions(areaList.cities, city => match(city.value, provinceValue, 2));
      const counties = this.getCounties(cities[0].value);
      return {
        cities,
        counties,
      };
    },

    getCounties(cityValue) {
      return getOptions(areaList.counties, county => match(county.value, cityValue, 4));
    },

    onPickerChange(e) {
      const { value, label } = e;
      console.log('picker confirm:', e);
      this.areaVisible = false;
      this.areaValue = value;
      this.areaText =  label.join(' ');
    },

    onPickerCancel(e) {
      console.log('picker cancel', e);
      this.areaVisible = false;
      if (this.areaValue.length) {
        return;
      }
      this.init();
    },

    onAreaPicker() {
      this.areaVisible = true;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-cell
      class="mb-16"
      title="带标题选择器"
      arrow
      hover
      :note="cityText"
      @click="onTitlePicker"
    />

    <t-cell
      title="无标题选择器"
      arrow
      hover
      :note="city2Text"
      @click="onWithoutTitlePicker"
    />

    <t-picker
      :visible="cityVisible"
      :value="cityValue"
      data-key="city"
      :title="cityTitle"
      cancel-btn="取消"
      confirm-btn="确认"
      using-custom-navbar
      @change="onPickerChange($event, { key: 'city' })"
      @pick="onColumnChange($event, { key: 'city' })"
      @cancel="onPickerCancel($event, { key: 'city' })"
    >
      <t-picker-item :options="citys" />
    </t-picker>

    <t-picker
      :visible="city2Visible"
      :value="city2Value"
      data-key="city2"
      :title="city2Title"
      cancel-btn="取消"
      confirm-btn="确认"
      using-custom-navbar
      @change="onPickerChange($event, { key: 'city2' })"
      @pick="onColumnChange($event, { key: 'city2' })"
      @cancel="onPickerCancel($event, { key: 'city2' })"
    >
      <t-picker-item :options="citys" />
    </t-picker>
  </view>
</template>

<script>
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
import tPicker from 'tdesign-uniapp/picker/picker';
import tPickerItem from 'tdesign-uniapp/picker-item/picker-item';
export default {
  components: {
    tCellGroup,
    tCell,
    tPicker,
    tPickerItem,
  },
  data() {
    return {
      cityText: '',
      city2Text: '',
      cityValue: [],
      city2Value: [],
      cityTitle: '',
      city2Title: '',

      citys: [
        {
          label: '北京市',
          value: '北京市',
        },
        {
          label: '上海市',
          value: '上海市',
        },
        {
          label: '广州市',
          value: '广州市',
        },
        {
          label: '深圳市',
          value: '深圳市',
        },
        {
          label: '成都市',
          value: '成都市',
        },
      ],

      cityVisible: false,
      city2Visible: false,
    };
  },
  created() {},
  methods: {
    onColumnChange(e, { key }) {
      console.log('picker pick:', { e, key });
    },
    onPickerChange(e, { key }) {
      const { value } = e;
      console.log('picker change:', e.detail);

      this[\`\${key}Visible\`] = false;
      this[\`\${key}Value\`] = value;
      this[\`\${key}Text\`] = value.join(' ');
    },
    onPickerCancel(e, { key }) {
      console.log('picker1 cancel:', e, key);
      this[\`\${key}Visible\`] = false;
    },
    onTitlePicker() {
      this.cityVisible = true;
      this.cityTitle =  '选择城市';
    },
    onWithoutTitlePicker() {
      this.city2Visible = true;
      this.city2Title = '';
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=u({data(){return{DemoexamplebaseCode:v,DemoexampleareaCode:f,DemoexamplewithtitleCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:i,tdDocTabs:n,tdDocPhone:o}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp#/pages-more/picker/picker";i&&(i.docInfo={title:"Picker 选择器",desc:"用于一组预设数据中的选择。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),o&&(o.qrcodeUrl=l),y.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),P={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"picker"},V=["tab"],T={name:"DEMO"},w=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-picker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/picker/picker&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-picker-item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/picker-item/picker-item&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/dCCmkymv7aTw" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="基础选择器">基础选择器 <a class="header-anchor" href="#基础选择器"></a></h4><p>单项和多选选择</p>`,9),D={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},E=["code"],S={slot:"action"},$=t("h4",{id:"地区选择器"},[m("地区选择器 "),t("a",{class:"header-anchor",href:"#地区选择器"})],-1),A=t("p",null,"支持省市区切换，支持数据联动",-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-area tdesign-demo-item-- README"},q=["code"],I={slot:"action"},j=t("h3",{id:"组件样式"},[m("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),O=t("p",null,"是否带标题",-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-title tdesign-demo-item-- README"},R=["code"],z={slot:"action"},B={ref:"tdDocPhone"},G=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/picker/picker",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),L=[G],H=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"picker"},null,-1),U={name:"API"},W=s('<h3 id="picker-props">Picker Props <a class="header-anchor" href="#picker-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>auto-close</td><td>Boolean</td><td>true</td><td>自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible</td><td>N</td></tr><tr><td>cancel-btn</td><td>String / Boolean</td><td>true</td><td>取消按钮文字。TS 类型：<code>boolean \\| string</code></td><td>N</td></tr><tr><td>confirm-btn</td><td>String / Boolean</td><td>true</td><td>确定按钮文字。TS 类型：<code>boolean \\| string</code></td><td>N</td></tr><tr><td>footer</td><td>Slot</td><td>-</td><td>底部内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header</td><td>Boolean / Slot</td><td>true</td><td>头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>item-height</td><td>Number</td><td>80</td><td>PickerItem 的子项高度，单位 rpx</td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 value / label / icon 在 <code>options</code> 中对应的字段别名。TS 类型：<code>KeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>popup-props</td><td>Object</td><td>{}</td><td>透传 Popup 组件全部属性。TS 类型：<code>PopupProps</code>，<a href="./popup?tab=api">Popup API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>title</td><td>String</td><td>&#39;&#39;</td><td>标题</td><td>N</td></tr><tr><td>use-popup</td><td>Boolean</td><td>true</td><td>是否使用弹出层包裹</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>value</td><td>Array</td><td>-</td><td>选中值。TS 类型：<code>Array&lt;PickerValue&gt;</code> <code>type PickerValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>Array</td><td>undefined</td><td>选中值。非受控属性。TS 类型：<code>Array&lt;PickerValue&gt;</code> <code>type PickerValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否显示</td><td>N</td></tr></tbody></table><h3 id="picker-events">Picker Events <a class="header-anchor" href="#picker-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>cancel</td><td>-</td><td>点击取消按钮时触发</td></tr><tr><td>change</td><td><code>(value: Array&lt;PickerValue&gt;, label: string, columns: Array&lt;{ column: number; index: number; disabled?: boolean; }&gt; )</code></td><td>选中变化时候触发，即确认变化时触发</td></tr><tr><td>close</td><td><code>(trigger: TriggerSource)</code></td><td><code>1.0.1</code>。关闭时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type TriggerSource = &#39;overlay&#39; \\| &#39;cancel-btn&#39; \\| &#39;confirm-btn&#39;</code><br></td></tr><tr><td>confirm</td><td><code>(value: Array&lt;PickerValue&gt;, label: string, columns: Array&lt;{ column: number; index: number; disabled?: boolean; }&gt; )</code></td><td>点击确认按钮时触发</td></tr><tr><td>pick</td><td><code>(value: Array&lt;PickerValue&gt;, label: string, column: number, index: number)</code></td><td>任何一列选中都会触发，不同的列参数不同。<code>column</code> 表示第几列变化，<code>index</code> 表示变化那一列的选中项下标</td></tr></tbody></table><h3 id="pickeritem-props">PickerItem Props <a class="header-anchor" href="#pickeritem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>format</td><td>Function</td><td>-</td><td>格式化标签。TS 类型：<code>(option: PickerItemOption, columnIndex: number) =&gt; PickerItemOption</code></td><td>N</td></tr><tr><td>options</td><td>Array</td><td>[]</td><td>数据源。TS 类型：<code>PickerItemOption[]</code> <code>interface PickerItemOption { label: string; value: string \\| number; icon?: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-picker-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-picker-border-radius</td><td>24rpx</td><td>-</td></tr><tr><td>--td-picker-button-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-picker-cancel-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-picker-confirm-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-picker-indicator-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-picker-indicator-border-radius</td><td>12rpx</td><td>-</td></tr><tr><td>--td-picker-mask-color-bottom</td><td>hsla(0, 0%, 100%, 0.4)</td><td>-</td></tr><tr><td>--td-picker-mask-color-top</td><td>hsla(0, 0%, 100%, 0.92)</td><td>-</td></tr><tr><td>--td-picker-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-picker-title-font-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-picker-title-font-weight</td><td>600</td><td>-</td></tr><tr><td>--td-picker-title-line-height</td><td>52rpx</td><td>-</td></tr><tr><td>--td-picker-toolbar-height</td><td>116rpx</td><td>-</td></tr><tr><td>--td-picker-transparent-color</td><td>--td-picker-transparent-color</td><td>-</td></tr><tr><td>--td-picker-group-height</td><td>400rpx</td><td>-</td></tr><tr><td>--td-picker-item-active-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-picker-item-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-picker-item-font-size</td><td>@font-size-m</td><td>-</td></tr></tbody></table>',9),F=[W],J={name:"DESIGN"},K=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要在有限的空间展示大量选项供用户选择，或者一组选项由递进层级构成需要用户逐级选择时使用。</p><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="选择器若为一组有层级关系的选项时，选项层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。">选择器若为一组有层级关系的选项时，选项层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。 <a class="header-anchor" href="#选择器若为一组有层级关系的选项时，选项层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/picker/picker-1.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="选择器若为一组有层级关系的选项时，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。">选择器若为一组有层级关系的选项时，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。 <a class="header-anchor" href="#选择器若为一组有层级关系的选项时，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/picker/picker-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/picker/picker-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./date-time-picker">时间选择器</a></td><td style="text-align:left;">在表单中需要输入单个日期或时间时使用。</td></tr><tr><td style="text-align:left;"><a href="./Cascader">级联选择器</a></td><td style="text-align:left;">当一组选项由递进层级构成，且每个层级有大量的选项需要用户逐级选择时使用。</td></tr></tbody></table>',10),Q=[K],X=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416085550"})],-1),Y=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Z(e,i,n,o,l,p){const r=k("Stackblitz");return b(),g("td-doc-content",P,[t("td-doc-header",x,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,V),d(t("div",null,[t("div",T,[w,t("div",D,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",S,[c(r,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,E)]),$,A,t("div",N,[t("td-doc-demo",{code:e.DemoexampleareaCode,language:"markup","show-code":"",mode:"open","demo-name":"area","component-name":" README"},[t("div",I,[c(r,{"demo-name":"area","component-name":" README",code:e.DemoexampleareaCode},null,8,["code"])])],8,q)]),j,O,t("div",M,[t("td-doc-demo",{code:e.DemoexamplewithtitleCode,language:"markup","show-code":"",mode:"open","demo-name":"with-title","component-name":" README"},[t("div",z,[c(r,{"demo-name":"with-title","component-name":" README",code:e.DemoexamplewithtitleCode},null,8,["code"])])],8,R)])]),t("td-doc-phone",B,L,512),H],512),[[a,e.tab==="demo"]]),d(t("div",U,F,512),[[a,e.tab==="api"]]),d(t("div",J,Q,512),[[a,e.tab==="design"]]),X,Y],512)}const nt=h(C,[["render",Z]]);export{nt as default};
