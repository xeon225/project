<template>
  <div class="login bg-white" style="overflow:hidden;">
    <div>滚动加载</div>
    <div v-for="(item,index) in axiosData" :key="index">
      <img :src="item.url" alt="">
      <div v-text="item.title+index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      axiosData: [],
      imgList: [
        {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }
      ],
      addImg: [
        {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }, {
          url: require('../assets/logo.png'),
          title: '图片'
        }
      ]
    }
  },
  mounted () {
    // 缓存指针
    let _this = this
    // 设置一个开关来避免重负请求数据
    let sw = true
    _this.axiosData = _this.imgList
    // 此处使用node做了代理
    // axios.get('http://localhost:3000/proxy?url=http://news-at.zhihu.com/api/4/news/latest')
    //   .then(function (response) {
    //     // console.log(JSON.parse(response.data).stories);
    //     // 将得到的数据放到vue中的data
    //     _this.articles = JSON.parse(response.data).stories
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })

    // 注册scroll事件并监听
    window.addEventListener('scroll', function () {
      // console.log(document.documentElement.clientHeight + '-----------' + window.innerHeight) // 可视区域高度
      // console.log(document.documentElement.scrollTop) // 滚动高度
      // console.log(document.body.offsetHeight) // 文档高度
      // 判断是否滚动到底部
      if (document.documentElement.scrollTop + window.innerHeight >= document.body.offsetHeight) {
        // console.log(sw)
        // 如果开关打开则加载数据
        if (sw === true) {
          // 将开关关闭
          sw = false
          if (_this.imgList) {
            _this.axiosData = _this.axiosData.concat(_this.addImg)
            console.log(_this.axiosData)
            sw = true
          }
          // axios.get('http://localhost:3000/proxy?url=http://news.at.zhihu.com/api/4/news/before/20170608')
          //   .then(function (response) {
          //     console.log(JSON.parse(response.data))
          //     // 将新获取的数据push到vue中的data，就会反应到视图中了
          //     JSON.parse(response.data).stories.forEach(function (val, index) {
          //       _this.articles.push(val)
          //       // console.log(val);
          //     })
          //     // 数据更新完毕，将开关打开
          //     sw = true
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
        }
      }
    })
  }
}
</script>

<style scoped></style>
