# 二草行为学学院 - 静态首页（占位）

这是一个基于示例站点风格实现的静态首页占位模板，主要用于展示布局与视觉样式。

文件列表：
- `index.html` — 主页文件
- `css/styles.css` — 页面样式

占位 logo: `assets/sjtu-logo.svg`。如需放入官方标识，请将官方 `svg`/`png` 上传并替换该文件（同名覆盖）。

注意：你已授权使用上海交通大学标识，本模板目前用占位 SVG；请上传官方 logo 以便替换为完全一致的标识。

预览：在本地用浏览器打开 `index.html` 即可查看。该模板使用外部占位图片（picsum.photos），后续可替换为真实图片与内容。

下一步建议：
- 替换 logo、图片与文字内容为真实素材。
- 增加子页（关于学院、师资、科研、教学等）并完善导航链接。

已实现功能清单：
- 严格复刻交大主页布局（头部、导航、主视觉、新闻两栏、页脚）。
- 轮播图（自动轮播、点位控制、悬停暂停）。
- 导航下拉菜单（桌面悬停展开，移动端点击展开）。

快速预览（Windows PowerShell）：
```powershell
# 在项目根目录打开默认浏览器预览
Start-Process index.html
```

替换官方 Logo：

- 自动下载（推荐，Windows）：工作区已包含脚本 `scripts/download_sjtu_logo.ps1`，运行它会把视觉规范中的横版校标下载到 `assets/sjtu-logo.png`，并自动替换当前 logo：

```powershell
# 从项目根目录运行（PowerShell）
.
\scripts\download_sjtu_logo.ps1
```

- 手动替换：你也可以在浏览器打开视觉规范页面下载你偏好的 logo，然后复制到 `assets/` 并命名为 `sjtu-logo.png`（或替换现有文件），刷新页面查看效果。

如需我继续：我可以把页面像素进一步对齐到目标站（颜色、字重、间距、下拉细节），或把子页面模板生成出来。回复要做的项即可。
我已完成：像素微调（导航间距、logo 尺寸、轮播高度、主视觉文字大小、页脚标题样式）与移动端下拉交互。

交付说明：
- 在浏览器中打开 [index.html](index.html) 预览。
- 若需在本机通过简单 HTTP 服务器预览，请在项目目录运行：
```powershell
# 在当前目录启动一个简易 Python HTTP 服务器（需已安装 Python）
python -m http.server 8000
# 然后在浏览器打开 http://localhost:8000/index.html
```

下一步我将完成最终打包校对并标记交付完成（将生成最终清单与交付说明）。
已完成像素级微调（导航按钮、字体权重、轮播箭头与分页、页脚链接样式）。

文件摘要：
- `index.html` — 根页面（已替换为模板副本，使用 `assets/sjtu-logo.png`）。
- `index.orig.html` — 备份的原始根文件。
- `template/index.html` — 模板副本。
- `css/template.css` — 模板样式（像素微调在此）。
- `css/styles.css` — 先前为交大样式准备的全局样式（保留用于其他页面）。
- `js/main.js` — 简易轮播与移动下拉脚本（保留以供复用）。
- `assets/sjtu-logo.png` — 已下载的横版校标（可替换）。

下一步建议（任选）：
- 我把 `css/styles.css` 与 `css/template.css` 合并并整理为最终 `css/main.css`（推荐，便于部署）。
- 我生成一个小型部署包（zip）包含所有文件，与你确认后交付。

