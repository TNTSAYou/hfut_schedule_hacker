
// 0：无需进行操作
// 1：需要重新登陆
export const updateState = 0

// 当前学期
export const currentSemester = {
  code: '037',  // app教务使用这个
  id: 114,  // pc教务使用这个
}

export const config = {
  version: '4.6.0',
  autoConfig: {
    showDiffHelp: true,
    showAllSHelp: true,
    showHomeRedPoint: true,
    // showWeatherRedPoint: true, // event页面天气右上角的红点
  },
  userConfig: {
    // schedule的
    showAiXin: true,
    theme: 0,
    imgOpacity: 0.9,
    courseOpacity: 0.88,
    showRedPoint: true, // 课表上有备忘录的课程右上角的红点
    showAd: true,

    // event的
    eventBoxHeight: 1.5, // 1倍高度或1.5倍高度
    showBoxMask: true,
    showEventMemo: true, // event上显示memo
    exactWeather: true,
  }
}

export const updateInfo = {
  notices: [
    // {
    //   info: '学校近期正在进行系统更新，可能会导致小程序部分功能无法正常使用，希望同学们理解！'
    // }
  ],
  features: [
    {
      info: '1. 教学班同学列表查询',
      comment: '同学们期待的功能终于来了！不仅能看自己班级的，全校课表、课程检索中的班级也可以查看哦~',
    },
    {
      info: '2. 查看历史学期课表',
      comment: '位于课表页 - 右上角加号中~',
    },
  ],
  bugs: [
    // {
    //   info: '修复部分已知问题，优化体验',
    //   // comment: '很多人都被提示',
    // },
    // {
    //   info: '修复多处已知问题',
    //   // comment: '很多人都被提示',
    // },
  ]
}

export const helpInfo = [
  {
    info: '1. 课表显示不出来/更新失败怎么办？',
    comment: '先多次下拉刷新试试。如果不行，请尝试以下操作：①退出小程序后台并重新进入；②退出登录并重新绑定，并确认自己的校区选择正确。如果进行了上述操作依旧无法正常显示，请联系开发者修复bug~',
  },
  {
    info: '2. 我的课表好像不准？',
    comment: '本小程序的数据与PC端教务实时同步（封网时也是），请先登录PC端教务查看自己课程是否一致，如有不一致请联系开发者（qq: 254139147）修复bug！',
  },
  {
    info: '3. 更换主题、解绑情侣等选项在哪里？',
    comment: '课表页-右上角加号-课表设置',
  },
]
