const categories = [
  { key: "frontend", label: "前端" },
  { key: "backend", label: "后端" },
  { key: "android", label: "Android" },
  { key: "ios", label: "iOS" },
  { key: "ai", label: "AI" },
  { key: "tool", label: "开发工具" },
  { key: "life", label: "代码人生" },
  { key: "read", label: "阅读" },
];


const groups = [
  {
    key: 'all',
    label: '综合',
    icon: 'orange',
  },
  {
    key: 'follow',
    label: '关注',
    icon: 'female',
  },
  {
    key: 'circles',
    label: '圈子',
    icon: 'coin',
    children: [
      {
        key: 'daily',
        label: '打工日常',
      },
      {
        key: 'techno',
        label: '技术圈',
      },
      {
        key: 'blind_date',
        label: '相亲角',
      },
      {
        key: 'slack_off',
        label: '上班摸鱼',
      },
      {
        key: 'eating',
        label: '中午吃啥',
      },
      {
        key: 'playing',
        label: '下班去哪玩',
      },
      {
        key: 'bigtea',
        label: '在线吃瓜',
      },
    ],
  },
]

module.exports = {
  categories,
  groups
};
