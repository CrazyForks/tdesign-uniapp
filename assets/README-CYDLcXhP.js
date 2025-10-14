import{_ as b,d as u,c as p,a as n,w as i,v as c,b as r,e as a,f as l,r as v,o as g}from"./sites-CjFR1T9E.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      :value="value"
      :options="options"
      title="请选择地址"
      @change="onChange"
      @pick="onPick"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      value: '',
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onPick(e) {
      console.log('pick: ', e);
    },
    onChange(e) {
      console.log('change: ', e);
      const { selectedOptions, value } = e;
      this.value = value;
      this.note =  selectedOptions.map(item => item.label).join('/');
      this.visible = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      theme="tab"
      :options="options"
      title="请选择地址"
      @change="onChange"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onChange(e) {
      const { selectedOptions } = e;
      this.note = selectedOptions.map(item => item.label).join('/');
      this.visible = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      value="120119"
      :options="options"
      title="请选择地址"
      @change="onChange"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onChange(e) {
      const { selectedOptions } = e;
      this.note = selectedOptions.map(item => item.label).join('/');
      this.visible = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      class="demo"
      :keys="keys"
      :options="options"
      title="请选择地址"
      placeholder="未选中时的提示文案"
      @change="onChange"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      name: '北京市',
      id: '110000',
      sub: [
        {
          id: '110100',
          name: '北京市',
          sub: [
            {
              id: '110101',
              name: '东城区',
            },
            {
              id: '110102',
              name: '西城区',
            },
            {
              id: '110105',
              name: '朝阳区',
            },
            {
              id: '110106',
              name: '丰台区',
            },
            {
              id: '110107',
              name: '石景山区',
            },
            {
              id: '110108',
              name: '海淀区',
            },
            {
              id: '110109',
              name: '门头沟区',
            },
            {
              id: '110111',
              name: '房山区',
            },
            {
              id: '110112',
              name: '通州区',
            },
            {
              id: '110113',
              name: '顺义区',
            },
            {
              id: '110114',
              name: '昌平区',
            },
            {
              id: '110115',
              name: '大兴区',
            },
            {
              id: '110116',
              name: '怀柔区',
            },
            {
              id: '110117',
              name: '平谷区',
            },
            {
              id: '110118',
              name: '密云区',
            },
            {
              id: '110119',
              name: '延庆区',
            },
          ],
        },
      ],
    },
    {
      name: '天津市',
      id: '120000',
      sub: [
        {
          id: '120100',
          name: '天津市',
          sub: [
            {
              id: '120101',
              name: '和平区',
            },
            {
              id: '120102',
              name: '河东区',
            },
            {
              id: '120103',
              name: '河西区',
            },
            {
              id: '120104',
              name: '南开区',
            },
            {
              id: '120105',
              name: '河北区',
            },
            {
              id: '120106',
              name: '红桥区',
            },
            {
              id: '120110',
              name: '东丽区',
            },
            {
              id: '120111',
              name: '西青区',
            },
            {
              id: '120112',
              name: '津南区',
            },
            {
              id: '120113',
              name: '北辰区',
            },
            {
              id: '120114',
              name: '武清区',
            },
            {
              id: '120115',
              name: '宝坻区',
            },
            {
              id: '120116',
              name: '滨海新区',
            },
            {
              id: '120117',
              name: '宁河区',
            },
            {
              id: '120118',
              name: '静海区',
            },
            {
              id: '120119',
              name: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      keys: {
        label: 'name',
        value: 'id',
        children: 'sub',
      },
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onChange(e) {
      const { selectedOptions } = e;
      this.note = selectedOptions.map(item => item.name).join('/');
      this.visible = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      :options="options"
      title="请选择地址"
      :sub-titles="subTitles"
      @change="onChange"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      subTitles: ['请选择省份', '请选择城市', '请选择区/县'],
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onChange(e) {
      const { selectedOptions } = e;
      this.note = selectedOptions.map(item => item.label).join('/');
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      :close-btn="false"
      :check-strictly="true"
      :value="value"
      :options="options"
      title="请选择地址"
      @change="onChange"
      @pick="onPick"
    >
      <template
        #close-btn
      >
        <text
          class="confirm-btn"
        >
          确定
        </text>
      </template>
    </t-cascader>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tCascader from 'tdesign-uniapp/cascader/cascader';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      value: '',
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onPick(e) {
      console.log(e);
    },
    onChange(e) {
      const { selectedOptions, value } = e;
      console.log('change', value);
      this.value = value;
      this.note = selectedOptions.map(item => item.label).join('/');
      this.visible = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=u({data(){return{DemoexamplebaseCode:_,DemoexamplethemetabCode:C,DemoexamplewithvalueCode:k,DemoexamplekeysCode:y,DemoexamplewithtitleCode:w,DemoexamplecheckstrictlyCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:s}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/cascader/cascader";o&&(o.docInfo={title:"Cascader 级联选择器",desc:"级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:h})=>this.tab=h),s&&(s.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},A={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"cascader"},M=["tab"],R={name:"DEMO"},S=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TCascader <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/cascader/cascader.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础用法">基础用法 <a class="header-anchor" href="#基础用法"></a></h3>`,4),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},O=["code"],T={slot:"action"},L=n("h3",{id:"选项卡风格"},[l("选项卡风格 "),n("a",{class:"header-anchor",href:"#选项卡风格"})],-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme-tab tdesign-demo-item-- README"},P=["code"],$={slot:"action"},B=n("h3",{id:"进阶"},[l("进阶 "),n("a",{class:"header-anchor",href:"#进阶"})],-1),V=n("h4",{id:"带初始值"},[l("带初始值 "),n("a",{class:"header-anchor",href:"#带初始值"})],-1),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-value tdesign-demo-item-- README"},z=["code"],I={slot:"action"},H=n("h4",{id:"自定义-keys"},[l("自定义 keys "),n("a",{class:"header-anchor",href:"#自定义-keys"})],-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-keys tdesign-demo-item-- README"},G=["code"],K={slot:"action"},F=n("h4",{id:"使用次级标题"},[l("使用次级标题 "),n("a",{class:"header-anchor",href:"#使用次级标题"})],-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-title tdesign-demo-item-- README"},Q=["code"],W={slot:"action"},X=n("h4",{id:"选择任意一项"},[l("选择任意一项 "),n("a",{class:"header-anchor",href:"#选择任意一项"})],-1),Y={class:"tdesign-demo-wrapper tdesign-demo-item-- README-check-strictly tdesign-demo-item-- README"},Z=["code"],nn={slot:"action"},en={ref:"tdDocPhone"},tn=n("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/cascader/cascader",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),an=[tn],ln=n("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"cascader"},null,-1),dn={name:"API"},on=r('<h3 id="cascader-props">Cascader Props <a class="header-anchor" href="#cascader-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>check-strictly</td><td>Boolean</td><td>false</td><td>父子节点选中状态不再关联，可各自选中或取消</td><td>N</td></tr><tr><td>close-btn</td><td>Boolean / Slot</td><td>true</td><td>关闭按钮。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header</td><td>Slot</td><td>-</td><td><code>1.9.1</code>。头部。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 value / label 在 <code>options</code> 中对应的字段别名。TS 类型：<code>KeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>middle-content</td><td>Slot</td><td>-</td><td>中间内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>options</td><td>Array</td><td>[]</td><td>可选项数据源。TS 类型：<code>Array&lt;CascaderOption&gt;</code></td><td>N</td></tr><tr><td>placeholder</td><td>String</td><td>选择选项</td><td>未选中时的提示文案</td><td>N</td></tr><tr><td>sub-titles</td><td>Array</td><td>[]</td><td>每级展示的次标题。TS 类型：<code>Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>step</td><td>展示风格。可选项：step/tab</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>-</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>null</td><td>选项值</td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>选项值。非受控属性</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否展示</td><td>N</td></tr></tbody></table><h3 id="cascader-events">Cascader Events <a class="header-anchor" href="#cascader-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: string \\| number, selectedOptions: string[])</code></td><td><code>1.0.1</code>。值发生变更时触发</td></tr><tr><td>close</td><td><code>(trigger: CascaderTriggerSource)</code></td><td><code>1.0.1</code>。关闭时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type CascaderTriggerSource = &#39;overlay&#39; \\| &#39;close-btn&#39; \\| &#39;finish&#39;</code><br></td></tr><tr><td>pick</td><td><code>(value: string \\| number, label: string, index: number, level: number)</code></td><td><code>1.0.1</code>。选择后触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-cascader-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-cascader-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-cascader-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-cascader-content-height</td><td>78vh</td><td>-</td></tr><tr><td>--td-cascader-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-cascader-options-height</td><td>calc(100% - @cascader-step-height)</td><td>-</td></tr><tr><td>--td-cascader-options-title-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-cascader-step-arrow-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-cascader-step-dot-size</td><td>16rpx</td><td>-</td></tr><tr><td>--td-cascader-step-height</td><td>88rpx</td><td>-</td></tr><tr><td>--td-cascader-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-cascader-title-height</td><td>26rpx</td><td>-</td></tr><tr><td>--td-cascader-title-padding</td><td>@spacer-2</td><td>-</td></tr><tr><td>--td-cascder-title-font-size</td><td>36rpx</td><td>-</td></tr></tbody></table>',7),sn=[on],cn={name:"DESIGN"},rn=r('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当一组选项由递进层级构成，且每个层级有大量的选项需要用户逐级选择时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="级联选择器与索引组合使用，当每个层级选项较多时，配合索引有利于用户快速找到目标选项。">级联选择器与<a href="./indexes">索引</a>组合使用，当每个层级选项较多时，配合索引有利于用户快速找到目标选项。 <a class="header-anchor" href="#级联选择器与索引组合使用，当每个层级选项较多时，配合索引有利于用户快速找到目标选项。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cascader/cascader-1.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在表单中，级联选择器可放置于表单内容需要的顺序中，通常用于地址信息的选择和填写。">在表单中，级联选择器可放置于表单内容需要的顺序中，通常用于地址信息的选择和填写。 <a class="header-anchor" href="#在表单中，级联选择器可放置于表单内容需要的顺序中，通常用于地址信息的选择和填写。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cascader/cascader-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="级联选择器的层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。">级联选择器的层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。 <a class="header-anchor" href="#级联选择器的层级不宜超过4层，层级过多时应调整数据结构或改用其他交互方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cascader/cascader-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="在多层级中，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。">在多层级中，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。 <a class="header-anchor" href="#在多层级中，各层级选项的归属关系应具备逻辑相关性，数据层级由大到小，避免归属关系混乱。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cascader/cascader-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cascader/cascader-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./picker">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择，或者一组选项由递进层级构成需要用户逐级选择时使用。</td></tr></tbody></table>',16),mn=[rn],hn=n("div",{style:{"margin-top":"48px"}},[n("td-doc-history",{time:"1760427541079"})],-1),bn=n("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function un(e,o,d,s,m,h){const t=v("Stackblitz");return g(),p("td-doc-content",x,[n("td-doc-header",A,null,512),n("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,M),i(n("div",null,[n("div",R,[S,n("div",N,[n("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[n("div",T,[a(t,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,O)]),L,n("div",j,[n("td-doc-demo",{code:e.DemoexamplethemetabCode,language:"markup","show-code":"",mode:"open","demo-name":"theme-tab","component-name":" README"},[n("div",$,[a(t,{"demo-name":"theme-tab","component-name":" README",code:e.DemoexamplethemetabCode},null,8,["code"])])],8,P)]),B,V,n("div",q,[n("td-doc-demo",{code:e.DemoexamplewithvalueCode,language:"markup","show-code":"",mode:"open","demo-name":"with-value","component-name":" README"},[n("div",I,[a(t,{"demo-name":"with-value","component-name":" README",code:e.DemoexamplewithvalueCode},null,8,["code"])])],8,z)]),H,n("div",U,[n("td-doc-demo",{code:e.DemoexamplekeysCode,language:"markup","show-code":"",mode:"open","demo-name":"keys","component-name":" README"},[n("div",K,[a(t,{"demo-name":"keys","component-name":" README",code:e.DemoexamplekeysCode},null,8,["code"])])],8,G)]),F,n("div",J,[n("td-doc-demo",{code:e.DemoexamplewithtitleCode,language:"markup","show-code":"",mode:"open","demo-name":"with-title","component-name":" README"},[n("div",W,[a(t,{"demo-name":"with-title","component-name":" README",code:e.DemoexamplewithtitleCode},null,8,["code"])])],8,Q)]),X,n("div",Y,[n("td-doc-demo",{code:e.DemoexamplecheckstrictlyCode,language:"markup","show-code":"",mode:"open","demo-name":"check-strictly","component-name":" README"},[n("div",nn,[a(t,{"demo-name":"check-strictly","component-name":" README",code:e.DemoexamplecheckstrictlyCode},null,8,["code"])])],8,Z)])]),n("td-doc-phone",en,an,512),ln],512),[[c,e.tab==="demo"]]),i(n("div",dn,sn,512),[[c,e.tab==="api"]]),i(n("div",cn,mn,512),[[c,e.tab==="design"]]),hn,bn],512)}const gn=b(E,[["render",un]]);export{gn as default};
