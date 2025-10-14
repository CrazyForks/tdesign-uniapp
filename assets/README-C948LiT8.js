import{_ as u,d as g,c as h,a as e,w as r,v as c,b as l,e as d,f as n,r as b,o as f}from"./sites-QsDL4Fx-.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const y=`<template>
  <view class="wrapper">
    <t-upload
      :disabled="false"
      :media-type="['video', 'image']"
      :max="1"
      :files="fileList"
      @add="handleAdd"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {},
  methods: {
    handleAdd(e) {
      const { fileList } = this;
      console.log('add: ', e);
      const { files } = e;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.fileList = [...fileList, ...files]; // 此时设置了 fileList 之后才会展示选择的图片

      // 方法2：每次选择图片都上传，展示每次上传图片的进度
      // files.forEach(file => this.uploadFile(file))
    },
    onUpload(file) {
      const { fileList } = this;
      this.fileList = [
        ...fileList,
        {
          ...file,
          status: 'loading',
        },
      ];

      console.log('onUpload', file);
      const { length } = fileList;
      const task = uni.uploadFile({
        url: 'https://example.weixin.qq.com/upload',
        // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: {
          user: 'test',
        },
        success: () => {
          this[\`fileList[\${length}].status\`] = 'done';
        },
      });
      task.onProgressUpdate((res) => {
        this[\`fileList[\${length}].percent\`] = res.progress;
      });
    },
    handleRemove(e) {
      const { index } = e;
      const { fileList } = this;
      fileList.splice(index, 1);
      this.fileList = fileList;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :remove-btn="false"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
      @sort-end="handleSortEnd"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded3.png',
          type: 'image',
          removeBtn: true,
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },

    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },

    handleClick(e) {
      console.log(e.file);
    },

    handleSortEnd() {
      console.log('占位：函数 handleSortEnd 未声明');
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view class="wrapper">
    <t-upload
      draggable
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
      @drop="handleDrop"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded3.png',
          type: 'image',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
    handleClick(e) {
      console.log(e.file);
    },
    handleDrop(e) {
      const { files } = e;
      this.originFiles = files;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded2.png',
          type: 'image',
          percent: 68,
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded3.png',
          type: 'image',
          status: 'reload',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded4.png',
          type: 'image',
          status: 'failed',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
    handleClick(e) {
      console.log(e.file);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :config="config"
      source="messageFile"
      @success="handleSuccess"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=g({data(){return{DemoexamplesingleCode:y,DemoexamplemultipleCode:x,DemoexampledragCode:_,DemoexamplestatusCode:C,DemoexamplemessageFileCode:k}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:a,tdDocTabs:i,tdDocPhone:s}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/upload/upload";a&&(a.docInfo={title:"Upload 上传",desc:"用于相册读取或拉起拍照的图片上传功能。"}),i&&(i.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],i.onchange=({detail:m})=>this.tab=m),s&&(s.qrcodeUrl=p),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"upload"},F=["tab"],S={name:"DEMO"},M=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-upload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/upload/upload&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/jz6CGimj7NSG" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="单选上传图片">单选上传图片 <a class="header-anchor" href="#单选上传图片"></a></h3><p>图片上传有两种方式：</p><p>1 选择完所有图片之后，统一上传，因此选择完就直接展示</p><p>2 每次选择图片都上传，展示每次上传图片的进度</p>`,10),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-single tdesign-demo-item-- README"},T=["code"],U={slot:"action"},R=e("h3",{id:"多选上传图片"},[n("多选上传图片 "),e("a",{class:"header-anchor",href:"#多选上传图片"})],-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},N=["code"],q={slot:"action"},B=e("h3",{id:"长按拖拽排序图片"},[n("长按拖拽排序图片 "),e("a",{class:"header-anchor",href:"#长按拖拽排序图片"})],-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-drag tdesign-demo-item-- README"},L=["code"],I={slot:"action"},j=l('<h3 id="加载状态">加载状态 <a class="header-anchor" href="#加载状态"></a></h3><p>支持多种状态：<code>loading</code>、<code>reload</code>、<code>failed</code>；</p><p>其中 <code>loading</code> 还可以通过传入 <code>percent</code> 来区分是否展示进度。</p>',3),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},P=["code"],$={slot:"action"},G=e("h3",{id:"从聊天记录上选"},[n("从聊天记录上选 "),e("a",{class:"header-anchor",href:"#从聊天记录上选"})],-1),K=e("p",null,[n("使用 "),e("code",null,"wx.chooseMessageFile"),n(" 实现，需要基础版本库 "),e("code",null,"2.5.0+")],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-messageFile tdesign-demo-item-- README"},J=["code"],Q={slot:"action"},W=l('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="为什么-upload-外层使用-display-flex-时会造成组件样式混乱？">为什么 <code>Upload</code> 外层使用 <code>display: flex</code> 时会造成组件样式混乱？ <a class="header-anchor" href="#为什么-upload-外层使用-display-flex-时会造成组件样式混乱？"></a></h3><p><code>Upload</code> 是基于 <code>TGrid</code> 宫格实现，当外层使用 <code>display: flex</code> ，子元素会默认加上 <code>flex-grow: 0</code>，造成 <code>Upload</code> 组件整体宽度不足。可以通过给 <code>Upload</code> 组件节点加上 <code>flex-grow: 1</code> 处理。</p>',3),X={ref:"tdDocPhone"},Y=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/upload/upload",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Z=[Y],ee=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"upload"},null,-1),ne={name:"API"},te=e("h3",{id:"upload-props"},[n("Upload Props "),e("a",{class:"header-anchor",href:"#upload-props"})],-1),oe=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"描述"),e("th",null,"必传")])]),e("tbody",null,[e("tr",null,[e("td",null,"style"),e("td",null,"Object"),e("td",null,"-"),e("td",null,"样式"),e("td",null,"N")]),e("tr",null,[e("td",null,"custom-style"),e("td",null,"Object"),e("td",null,"-"),e("td",null,"样式，一般用于开启虚拟化组件节点场景"),e("td",null,"N")]),e("tr",null,[e("td",null,"add-btn"),e("td",null,"Boolean"),e("td",null,"true"),e("td",null,"添加按钮"),e("td",null,"N")]),e("tr",null,[e("td",null,"add-content"),e("td",null,"String / Slot"),e("td",null,"-"),e("td",null,[n("添加按钮内容。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts",target:"_blank",rel:"noopener noreferrer"},"通用类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"allow-upload-duplicate-file"),e("td",null,"Boolean"),e("td",null,"false"),e("td",null,[e("code",null,"暂不支持"),n("。是否允许重复上传相同文件名的文件")]),e("td",null,"N")]),e("tr",null,[e("td",null,"config"),e("td",null,"Object"),e("td",null,"-"),e("td",null,[n("图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。"),e("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html",target:"_blank",rel:"noopener noreferrer"},"图片上传"),n("。"),e("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html",target:"_blank",rel:"noopener noreferrer"},"视频上传"),n("。TS 类型："),e("code",null,"UploadMpConfig"),n(),e("code",null,"type UploadMpConfig = ImageConfig \\| VideoConfig"),n(),e("code",null,"interface ImageConfig { count?: number; sizeType?: Array<SizeTypeValues>; sourceType?: Array<SourceTypeValues> }"),n(),e("code",null,"type SizeTypeValues = 'original' \\| 'compressed'"),n(),e("code",null,"type SourceTypeValues = 'album' \\| 'camera'"),n(),e("code",null,"interface VideoConfig { sourceType?: Array<SourceTypeValues>; compressed?: boolean; maxDuration?: number; camera?: 'back' \\| 'front' }"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"disabled"),e("td",null,"Boolean"),e("td",null,"undefined"),e("td",null,"是否禁用组件"),e("td",null,"N")]),e("tr",null,[e("td",null,"draggable"),e("td",null,"Boolean / Object"),e("td",null,"-"),e("td",null,[n("是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一："),e("code",null,"true"),n("。示例二："),e("code",null,"{ vibrate: true, collisionVibrate: true }"),n("。TS 类型："),e("code",null,"boolean \\| {vibrate?: boolean; collisionVibrate?: boolean}")]),e("td",null,"N")]),e("tr",null,[e("td",null,"files"),e("td",null,"Array"),e("td",null,"-"),e("td",null,[n("已上传文件列表。TS 类型："),e("code",null,"Array<UploadFile>"),n(),e("code",null,"interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \\| 'video'; percent?: number; status: 'loading' \\| 'reload' \\| 'failed' \\| 'done' }"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"default-files"),e("td",null,"Array"),e("td",null,"undefined"),e("td",null,[n("已上传文件列表。非受控属性。TS 类型："),e("code",null,"Array<UploadFile>"),n(),e("code",null,"interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \\| 'video'; percent?: number; status: 'loading' \\| 'reload' \\| 'failed' \\| 'done' }"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"grid-config"),e("td",null,"Object"),e("td",null,"-"),e("td",null,[n("upload组件每行上传图片列数以及图片的宽度和高度。TS 类型："),e("code",null,"{column?: number; width?: number; height?: number;}")]),e("td",null,"N")]),e("tr",null,[e("td",null,"gutter"),e("td",null,"Number"),e("td",null,"16"),e("td",null,[n("预览窗格的 "),e("code",null,"gutter"),n(" 大小，单位 rpx")]),e("td",null,"N")]),e("tr",null,[e("td",null,"image-props"),e("td",null,"Object"),e("td",null,"-"),e("td",null,[n("透传 Image 组件全部属性。TS 类型："),e("code",null,"ImageProps"),n("，"),e("a",{href:"./image?tab=api"},"Image API Documents"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"max"),e("td",null,"Number"),e("td",null,"0"),e("td",null,"用于控制文件上传数量，值为 0 则不限制"),e("td",null,"N")]),e("tr",null,[e("td",null,"media-type"),e("td",null,"Array"),e("td",null,"['image', 'video']"),e("td",null,[n("支持上传的文件类型，图片或视频。TS 类型："),e("code",null,"Array<MediaType>"),n(),e("code",null,"type MediaType = 'image' \\| 'video'"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"preview"),e("td",null,"Boolean"),e("td",null,"true"),e("td",null,[e("code",null,"1.9.5"),n("。是否支持图片预览，文件没有预览")]),e("td",null,"N")]),e("tr",null,[e("td",null,"remove-btn"),e("td",null,"Boolean"),e("td",null,"true"),e("td",null,"移除按钮"),e("td",null,"N")]),e("tr",null,[e("td",null,"request-method"),e("td",null,"Function"),e("td",null,"-"),e("td",null,"自定义上传方法"),e("td",null,"N")]),e("tr",null,[e("td",null,"size-limit"),e("td",null,"Number / Object"),e("td",null,"-"),e("td",null,[n("图片文件大小限制，默认单位 KB。可选单位有："),e("code",null,"'B' \\| 'KB' \\| 'MB' \\| 'GB'"),n("。示例一："),e("code",null,"1000"),n("。示例二："),e("code",null,"{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }"),n("。TS 类型："),e("code",null,"number \\| SizeLimitObj"),n(),e("code",null,"interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }"),n(),e("code",null,"type SizeUnitArray = ['B', 'KB', 'MB', 'GB']"),n(),e("code",null,"type SizeUnit = SizeUnitArray[number]"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")]),e("tr",null,[e("td",null,"source"),e("td",null,"String"),e("td",null,"media"),e("td",null,"来源。可选项：media/messageFile"),e("td",null,"N")]),e("tr",null,[e("td",null,"transition"),e("td",null,"Object"),e("td",{"backTransition:":"","true,":"","duration:":"","300,":"","timingFunction:":"",ease:""}),e("td",null,[n("拖拽位置移动时的过渡参数,"),e("code",null,"duration"),n("单位为ms。TS 类型："),e("code",null,"Transition"),n(),e("code",null,"interface Transition { backTransition?: boolean, duration?: number, timingFunction?: string }"),n("。"),e("a",{href:"https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts",target:"_blank",rel:"noopener noreferrer"},"详细类型定义")]),e("td",null,"N")])])],-1),de=l('<h3 id="upload-events">Upload Events <a class="header-anchor" href="#upload-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>add</td><td><code>(files: MediaContext)</code></td><td>选择后触发，仅包含本次选择的照片；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code>选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]</code><br><br><code>interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }</code><br><br><code>interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number }</code><br></td></tr><tr><td>click</td><td><code>(index: number; file: VideoContext \\| ImageContext)</code></td><td>点击已选文件时触发；常用于重新上传</td></tr><tr><td>complete</td><td>-</td><td>上传成功或失败后触发</td></tr><tr><td>drop</td><td><code>(files: MediaContext) </code></td><td>拖拽结束后触发，包含所有上传的文件（拖拽后的文件顺序）；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code> 选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]; interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }; interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number}</code><br></td></tr><tr><td>fail</td><td>-</td><td>上传失败后触发</td></tr><tr><td>remove</td><td><code>(index: number; file: UploadFile)</code></td><td>移除文件时触发</td></tr><tr><td>select-change</td><td><code>(files: MediaContext[]; currentSelectedFiles: MediaContext[])</code></td><td>选择文件或图片之后，上传之前，触发该事件。<br><code>files</code> 表示之前已经上传完成的文件列表。<br><code>currentSelectedFiles</code> 表示本次上传选中的文件列表</td></tr><tr><td>success</td><td><code>(files: MediaContext)</code></td><td>上传成功后触发，包含所有上传的文件；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code>选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]</code><br><br><code>interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }</code><br><br><code>interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number }</code><br></td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-upload-add-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-upload-add-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-upload-add-disabled-bg-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-upload-add-icon-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-upload-add-icon-font-size</td><td>56rpx</td><td>-</td></tr><tr><td>--td-upload-disabled-mask</td><td>rgba(0, 0.6)</td><td>-</td></tr><tr><td>--td-upload-drag-transition-duration</td><td>--td-upload-drag-transition-duration</td><td>-</td></tr><tr><td>--td-upload-drag-transition-timing-function</td><td>--td-upload-drag-transition-timing-function</td><td>-</td></tr><tr><td>--td-upload-drag-z-index</td><td>999</td><td>-</td></tr><tr><td>--td-upload-radius</td><td>@radius-default</td><td>-</td></tr></tbody></table>',5),le=[te,oe,de],ie={name:"DESIGN"},ae=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要进行图片上传时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="通常用于图片上传，点击上传按钮可唤起动作面板，供用户选择不同渠道进行新的上传。">通常用于图片上传，点击上传按钮可唤起<a href="./action-sheet">动作面板</a>，供用户选择不同渠道进行新的上传。 <a class="header-anchor" href="#通常用于图片上传，点击上传按钮可唤起动作面板，供用户选择不同渠道进行新的上传。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-1.png"></div><hr><h5 id="点击已经上传的图片可跳转图片预览，让用户对已上传的图片进行快速查看。">点击已经上传的图片可跳转<a href="./image-viewer">图片预览</a>，让用户对已上传的图片进行快速查看。 <a class="header-anchor" href="#点击已经上传的图片可跳转图片预览，让用户对已上传的图片进行快速查看。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-2.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。">若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。 <a class="header-anchor" href="#若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><hr><h5 id="上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。">上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。 <a class="header-anchor" href="#上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div>',14),se=[ae],re=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760416343535"})],-1),ce=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function pe(t,a,i,s,p,m){const o=b("Stackblitz");return f(),h("td-doc-content",D,[e("td-doc-header",E,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,F),r(e("div",null,[e("div",S,[M,e("div",A,[e("td-doc-demo",{code:t.DemoexamplesingleCode,language:"markup","show-code":"",mode:"open","demo-name":"single","component-name":" README"},[e("div",U,[d(o,{"demo-name":"single","component-name":" README",code:t.DemoexamplesingleCode},null,8,["code"])])],8,T)]),R,e("div",z,[e("td-doc-demo",{code:t.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[e("div",q,[d(o,{"demo-name":"multiple","component-name":" README",code:t.DemoexamplemultipleCode},null,8,["code"])])],8,N)]),B,e("div",V,[e("td-doc-demo",{code:t.DemoexampledragCode,language:"markup","show-code":"",mode:"open","demo-name":"drag","component-name":" README"},[e("div",I,[d(o,{"demo-name":"drag","component-name":" README",code:t.DemoexampledragCode},null,8,["code"])])],8,L)]),j,e("div",O,[e("td-doc-demo",{code:t.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[e("div",$,[d(o,{"demo-name":"status","component-name":" README",code:t.DemoexamplestatusCode},null,8,["code"])])],8,P)]),G,K,e("div",H,[e("td-doc-demo",{code:t.DemoexamplemessageFileCode,language:"markup","show-code":"",mode:"open","demo-name":"messageFile","component-name":" README"},[e("div",Q,[d(o,{"demo-name":"messageFile","component-name":" README",code:t.DemoexamplemessageFileCode},null,8,["code"])])],8,J)]),W]),e("td-doc-phone",X,Z,512),ee],512),[[c,t.tab==="demo"]]),r(e("div",ne,le,512),[[c,t.tab==="api"]]),r(e("div",ie,se,512),[[c,t.tab==="design"]]),re,ce],512)}const ge=u(w,[["render",pe]]);export{ge as default};
