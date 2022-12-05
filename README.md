本项目旨在使 *白纸革命 中*各种视频和图片以时间线展示，希望让整件事不被信息洪流冲散，不再那么快被遗忘。

以及可以在地图上查看哪些地方有人在抗争，抗争的你并不孤单。

网页地址:
- [https://chinaa4revolution.4everland.app](https://chinaa4revolution.4everland.app)   （目前还没被墙）

网页IPFS ID:
- bafybeidqqtddpwegglrxv2jfqer7hhecfnmmtrddw4mtrphppelmt2te24

仓库地址:
- [https://github.com/bobopk/ChinaA4Revolution](https://github.com/bobopk/ChinaA4Revolution)

csv格式数据：
- 项目根目录下 `data.csv` 文件


其他资源：
- Mastodon： 李老师不是你李老师  @Leeing@mastodon.social
- Twitter网友@__ssuu_ 整理的李老师视频网盘： https://drive.proton.me/urls/Q0NWFTE8EW#hzti5yJumxyF       密码: freedom
- Mastodon： 白纸WhitePaper-行动日报 @whitepaperdaily@mstdn.social

Note：

2022-12-05：
- 所有图片资源已存档到[互联网档案馆（Internet Archive）](https://archive.org/details/@muninxjp)
- 视频展示问题已修复

2022-12-03
- 目前信源主要是爬取的Twitter [李老师不是你老师](https://twitter.com/whyyoutouzhele)
- 其他信源还在整理
- 视频展示还有些问题，正在修复
- 由于Twitter的限制，Timeline中李老师的Tweet只能查看6天内的数据，之前Tweet数据暂未补充


## Tech
本项目是基于[aivuk](https://github.com/aivuk) 先生的 [TimeMapper2](https://github.com/aivuk/TimeMapper2), **[TimelineJS3](https://github.com/aivuk/TimelineJS3)** 魔改，它可从任意链接的符合格式的csv文件中生成TimeMapper网页。

如果你有一个匿名的Google账户，你可以直接在[Timemapper](http://timemapper.okfnlabs.org/) 用Google Sheet生成同样的页面，需要的代码基础为零。

[Timemapper](http://timemapper.okfnlabs.org/) 是基于NUKnightLab的[TimeJS3](https://github.com/NUKnightLab/TimelineJS3) 和[StoryMapJS](https://github.com/NUKnightLab/StoryMapJS) 的组合，它们各自都可以单独使用。

然而，这些项目不得不依赖公开的Google Sheet，而Google对匿名性会有很大的危害。

如果你没有代码基础，我最近会有时间来完善这个项目的文档。理论上不需要任何代码知识，就可以生成和部署你自己的TimeMapper网页，最初本项目的目标是，让每个人都能足够方便地记录当下的历史。

