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
| **形状** | composer 40px、用户气泡 40px、菜单/面板 28px + 20px 同心选项、按钮/触发器 999px 药丸、对话框 28px、工具块 16px |
| **光晕 & 动效** | 英雄区 luminous radial 光晕；菜单弹入 / 对话框进入 / 错峰浮起，统一 M3E emphasized 曲线 `cubic-bezier(.05,.7,.1,1)` |
| **交互** | 精确点击波纹（按钮药丸 & 菜单内）、`interpolate-size` 宽高自适应过渡、滚动条边缘渐隐 + 淡入 |
| **浮钮** | 右下角 "Gemini 配色 / 默认配色" 胶囊（`shell.overlay`），一键切换配色层，字体/形状恒定保留 |

---

## 实现原理

bundle 通过 Harness 的三条官方扩展通道工作：

1. **主题令牌** — `ctx.theme.overrideTokens(source, tokens)` 覆盖 `--dsw-*`
   CSS 变量（配色、字体栈、markdown 字阶）。
2. **Slot UI** — `ctx.slots.register` 把浮钮注入 `shell.overlay`。
3. **自有样式 + DOM JS** — `installStyles()` 注入一个 `<style>` 标签
   （形状/动效/光晕覆盖，靠产品 CSS-module 类哈希片段匹配），
   `installInteractions()` 在真实浏览器 DOM 里驱动波纹、错峰、滚动渐隐与滚动条淡入。

> 唯一依赖 Harness 内部结构的是产品类选择器，见下方 **注意事项**。

---

## 安装

主题是一个 **web-profile bundle**。设 `DSH_HOME`（Linux/macOS 默认 `~/.dsh`，
Windows 默认 `C:\Users\<你>\.dsh`）：

1. 把本包复制到 web profile 的 `packages/`：

   ```bash
   mkdir -p "$DSH_HOME/profiles/web/packages"
   cp -r dsh-gemini-m3e-theme "$DSH_HOME/profiles/web/packages/dsh-gemini-m3e-theme"
   ```

2. 在 `$DSH_HOME/profiles/web/package.json` 里注册（若 profile 尚无此文件则新建）：

   ```jsonc
   {
     "dependencies": {
       "dsh-gemini-m3e-theme": "file:./packages/dsh-gemini-m3e-theme"
     },
     "dsh": {
       "profile": {
         "bundles": ["dsh-gemini-m3e-theme"]
       }
     }
   }
   ```

3. 安装依赖并重启 web 部署：

   ```bash
   cd "$DSH_HOME/profiles/web"
   pnpm install        # 或 npm / yarn install
   dsh web             # 重启；下次刷新页面时主题加载
   ```

4. 硬刷新 Web UI（**Ctrl+F5**）。应能看到 Gemini 配色、右下角浮钮，以及改版后的菜单。

### 实时改源码技巧（Windows 目录联接）

`pnpm` 对 `file:` 依赖是**拷贝**而非链接，改 `packages/` 源文件不会同步到
`node_modules`。Windows 上可把已安装的副本换成目录联接（Junction），源文件改动即可直接生效：

```powershell
Remove-Item "$env:DSH_HOME\profiles\web\node_modules\dsh-gemini-m3e-theme" -Recurse -Force
New-Item -ItemType Junction -Path "$env:DSH_HOME\profiles\web\node_modules\dsh-gemini-m3e-theme" `
         -Target "$env:DSH_HOME\profiles\web\packages\dsh-gemini-m3e-theme"
```

macOS/Linux 用软链接（symlink）效果相同。

---

## 开发

- **`src/client.js`** — 可读的 ESM 源码，改这里。
  - 配色 → `buildColorTokens()`
  - 字体/工具圆角 → `buildBaseTokens()`
  - 字阶 → `buildTypographyTokens()`
  - 形状/动效/菜单 → `CSS_TEXT` 数组
  - 交互 → `installInteractions()`
- **`lib/client.js`** — 浏览器实际加载的产物（手写的 `ModuleLoader` 格式，与
  `src` 等价）。**每次改完必须与 `src` 保持同步**。
- **`scripts/build-client.mjs`** — 可选 esbuild 重打包脚本，供能跑 esbuild 的
  环境使用（沙箱 shell 无法 spawn esbuild，故 `lib` 长期手工维护）。

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
│   └── build-client.mjs   # 可选 esbuild 重打包脚本
└── README.md
```

---

## 注意事项

- **CSS-module 类哈希会随上游重构建而变化。** 主题靠类哈希片段定位产品元素
  （如 `_7KE1Ra_menu`、`_list_19372`）。Harness 前端重构建后哈希——某些版本连
  *格式* 都会变（`hash_name` → `_name_hash_index`）——相关规则会静默失效。
  需重新 grep 构建产物 CSS 里的语义名，并更新 `CSS_TEXT` 中的选择器。
- **Windows 滚动条占布局宽度。** 主题为可滚动菜单预留稳定的滚动条槽位
  （`scrollbar-gutter`），使 thumb 淡入时面板宽度不跳变。
- **沙箱 shell 可能无法运行 esbuild。** 这是本仓库 `lib/` 为手工维护等价产物的原因。

---

## 许可证

[MIT](LICENSE)
