# dsh-gemini-m3e-theme

一个为 [DeepSeek Harness](https://github.com/deepseek-ai) Web UI 打造的
**Google Gemini 风格 Material 3 Expressive 主题**，以**持久化 client bundle 插件**
的形式交付。

它把整个 Web 界面改造成 Gemini 的 "luminous" 观感——配色、字体、形状、光晕、
动效与指针交互——**不改动一行 Harness 产品源码**。所有效果都走官方扩展点，
安装干净、重启不丢、卸载无痕。

> 本仓库 README 默认使用中文。English version: [README.en.md](README.en.md)

---

## 功能

| 系统 | 内容 |
|---|---|
| **配色** | 71 个双色令牌（亮/暗），对齐 Gemini `luminous` 的 surface/container/on-surface/primary 色值；边框靠底色差分隔，不画描边线 |
| **字体** | Google Sans Text → Google Sans → Roboto → 系统回退栈；代码用 Google Sans Mono；M3E markdown 层级（标题 400 细体、正文行高 1.5） |
| **形状** | composer 40px、用户气泡 40px、菜单 28px + 20px 同心选项、按钮/触发器 999px 药丸、对话框/设置面板 32px、工具块 16px |
| **光晕 & 动效** | 英雄区 luminous radial 光晕；菜单弹入 / 对话框进入 / 错峰浮起，统一 M3E emphasized 曲线 `cubic-bezier(.05,.7,.1,1)` |
| **交互** | 精确点击波纹（按钮药丸 & 菜单内）、`interpolate-size` 宽高自适应过渡、滚动条边缘渐隐 + 淡入 |
| **阴影** | 菜单/弹窗/Composer 浮层共用同一套软阴影规格，白底不厚重、黑底有层次；弹窗去除描边线圈 |

---

## 实现原理

bundle 通过 Harness 的两条官方扩展通道工作：

1. **主题令牌** — `ctx.theme.overrideTokens(source, tokens)` 覆盖 `--dsw-*`
   CSS 变量（配色、字体栈、markdown 字阶），Gemini 配色常驻生效。
2. **自有样式 + DOM JS** — `installStyles()` 注入一个 `<style>` 标签
   （形状/动效/光晕覆盖，靠产品 CSS-module 类哈希片段匹配），
   `installInteractions()` 在真实浏览器 DOM 里驱动波纹、错峰、滚动渐隐与滚动条淡入。

> 唯一依赖 Harness 内部结构的是产品类选择器，见下方 **注意事项**。

---

## 安装

主题是一个 **web-profile bundle**，通过 DSH 内置的 `dsh plugin` 命令安装
（需要 Node ≥ 20 与 pnpm；它会自动初始化 profile、安装依赖并**自动把本包登记进
`dsh.profile.bundles` 层列表**，无需手改任何 JSON）。

```bash
dsh plugin add github:makajo/dsh-gemini-m3e-theme     # 从 GitHub 直接安装
dsh web                                               # 重启 web
# Ctrl+F5 硬刷新浏览器
```

升级：`dsh plugin update dsh-gemini-m3e-theme`；卸载：`dsh plugin remove dsh-gemini-m3e-theme`。

> **中国大陆网络**：直连 GitHub 常被重置，给 git 配一条代理即可（一次性或写进
> `~/.gitconfig`）：
> ```bash
> git -c http.proxy=http://127.0.0.1:7890 clone ...    # 或在 gitconfig 里
> git config --global http.proxy http://127.0.0.1:7890
> ```

### 离线/手动安装（fallback）

没有 pnpm 或想完全手动时，仍可按旧方式装配：把本包放进 profile 的
`packages/`，然后在 `$DSH_HOME/profiles/web/package.json` 同时写入
`dependencies` 与 `dsh.profile.bundles` 两处，再 `pnpm install` 并重启。
仓库中 `lib/client.js` 已是构建产物，此方式无需任何构建。

### 实时改源码技巧（Windows 目录联接）

`pnpm` 对依赖是**拷贝**而非链接，改本地源码不会同步到 `node_modules`。
Windows 上可把已安装的副本换成目录联接（Junction），源文件改动即可直接生效：

```powershell
Remove-Item "$env:DSH_HOME\profiles\web\node_modules\dsh-gemini-m3e-theme" -Recurse -Force
New-Item -ItemType Junction -Path "$env:DSH_HOME\profiles\web\node_modules\dsh-gemini-m3e-theme" `
         -Target "$env:DSH_HOME\profiles\web\packages\dsh-gemini-m3e-theme"
```

macOS/Linux 用软链接（symlink）效果相同。

---

## 开发

- **`src/client.js`** — 可读的 ESM 源码，唯一需要手改的文件。
  - 配色 → `buildColorTokens()`
  - 字体/工具圆角 → `buildBaseTokens()`
  - 字阶 → `buildTypographyTokens()`
  - 形状/动效/菜单 → `CSS_TEXT` 数组（`@key@` 占位符由 `expand()` 展开）
  - 交互 → `installInteractions()`
  - **产品类哈希锚点统一登记在文件顶部的 `T` 字典**——上游重构换哈希后只需改这里，
    全部 CSS 规则与 JS 选择器自动跟随；`SHADOW`/`EMPH`/`STD` 值常量同理
- **`lib/client.js`** — 浏览器实际加载的产物，由 esbuild 从 `src` 生成，
  **不要手工编辑**。改完 `src` 运行：

  ```bash
  npm i            # 首次：安装 devDependency esbuild
  npm run build    # 等价于 node scripts/build-client.mjs
  ```
- **`scripts/build-client.mjs`** — esbuild 打包脚本（走 JS API，不 spawn 子进程）。

改完重启 `dsh web` 并硬刷新。bundle 的 `rev`（`lib/client.js` 的内容哈希）会自动变化，浏览器会拉取新版本。

---

## 卸载

1. 在 `$DSH_HOME/profiles/web/package.json` 里，同时删除 `dependencies` 与
   `dsh.profile.bundles` 中的 `"dsh-gemini-m3e-theme"`。
2. `cd "$DSH_HOME/profiles/web" && pnpm install`
3. 删除 `$DSH_HOME/profiles/web/packages/dsh-gemini-m3e-theme/`。
4. 重启 `dsh web`。

---

## 目录结构

```
dsh-gemini-m3e-theme/
├── package.json           # dsh.client (web) + dsh.bundle.patch + exports
├── cordis.patch.yml       # 把 bundle 挂进 host 树的 insert 行
├── lib/
│   ├── client.js          # 浏览器端 bundle（ModuleLoader 格式）——实际加载产物
│   └── service-plugin.js  # host 空插件（bundle 挂载点）
├── src/
│   └── client.js          # ESM 源码（在这里改）
├── scripts/
│   └── build-client.mjs   # esbuild 构建脚本（lib 的唯一来源，npm run build）
└── README.md
```

---

## 注意事项

- **CSS-module 类哈希会随上游重构建而变化。** 主题靠类哈希片段定位产品元素
  （如 `_7KE1Ra_menu`、`_list_19372`）。Harness 前端重构建后哈希——某些版本连
  *格式* 都会变（`hash_name` → `_name_hash_index`）——相关规则会静默失效。
  需重新 grep 构建产物 CSS 里的语义名，并更新 `src` 顶部 `T` 字典中的对应值
  （全部 CSS 规则与 JS 选择器自动跟随）。
- **Windows 滚动条占布局宽度。** 主题为可滚动菜单预留稳定的滚动条槽位
  （`scrollbar-gutter`），使 thumb 淡入时面板宽度不跳变。
- **构建环境只需能跑 node。** 打包脚本调用 esbuild 的 JS API（不 spawn 子进程），
  在受限 shell 里也能工作；`lib/` 作为构建产物提交仓库，装包即用，无需构建。

---

## 许可证

[MIT](LICENSE)
