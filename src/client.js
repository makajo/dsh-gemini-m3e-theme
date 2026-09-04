const CSS_ID = 'dsh-gemini-m3e-theme/client'

// =============================================================================
// Gemini M3 Expressive theme — persistent browser bundle (full feature set).
// Tokens via ctx.theme.overrideTokens; CSS injected once; JS interactions
// (point ripple + stagger/scrollfade scheduling) need the real browser DOM,
// so they live here rather than in a sandboxed dynamic pkg.
//
// Maintenance:
// - Edit THIS file, then run `node scripts/build-client.mjs` (esbuild) to
//   regenerate lib/client.js. Never edit lib/ by hand.
// - Product CSS-module class hashes live ONLY in the T registry below. When
//   an upstream rebuild shifts them, grep the new dist CSS for the semantic
//   names and update T — every CSS rule and JS selector follows automatically.
// =============================================================================

/* The single source of truth:
 * - UPPERCASE keys: shared value constants (shadow spec, motion curves)
 * - camelCase keys: product class-hash anchors
 * CSS rules reference them as @key@ placeholders (see expand()). */
const T = {
  /* value constants */
  SHADOW: '0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1)',
  EMPH: 'cubic-bezier(.05,.7,.1,1)', // M3E emphasized: entrances, movement, expansion
  STD: 'cubic-bezier(.2,0,0,1)', // standard motion: hover bg, fades

  /* conversation surface */
  headline: 'pXSMma_headline',
  convHeader: 'wSkVaW_header',
  bubble: 'Sixlwa_bubble',
  callRow: 'EvIC1a_callRow',
  markdown: '_markdown_177e0',

  /* composer */
  composer: 'uV2eYG_card',
  composerWs: 'uV2eYG_cardWorkspaceTrigger',
  composerHero: 'uV2eYG_hero',
  composerInput: 'uV2eYG_input',
  composerPlaceholder: 'uV2eYG_placeholder',
  composerAccessory: 'uV2eYG_accessory',
  composerRow: 'uV2eYG_row',
  composerSend: 'uV2eYG_primary',

  /* sidebar / workspace */
  sidebarRoot: 'hHd-Xa_root',
  newSession: 'hHd-Xa_newSession',
  sessionRow: 'YDXeBa_sessionRow',
  projectRow: 'YDXeBa_projectRow',
  searchRow: 'YDXeBa_searchResultRow',
  wsSection: 'bhn1Oq_sectionHeader',

  /* model selection */
  modelMenu: '_7KE1Ra_menu',
  modelGroups: '_7KE1Ra_groups',
  modelGroup: '_7KE1Ra_group',
  modelGroupTitle: '_7KE1Ra_groupTitle',
  modelOption: '_7KE1Ra_option',
  modelOptionCopy: '_7KE1Ra_optionCopy',
  modelCell: '_7KE1Ra_cell',
  modelTrigger: '_7KE1Ra_trigger',

  /* permission mode + context meter */
  permTrigger: 'Sh0Q9G_trigger',
  meterTrigger: 'JObwrW_trigger',
  meterPanel: 'JObwrW_panel',
  meterHeader: 'JObwrW_header',
  meterBar: 'JObwrW_bar',
  meterRows: 'JObwrW_rows',
  meterRow: 'JObwrW_row',

  /* slash command menu */
  slashMenu: '_3e4SsG_menu',
  slashViewport: '_3e4SsG_viewport',
  slashItem: '_3e4SsG_item',
  slashName: '_3e4SsG_itemName',
  slashDesc: '_3e4SsG_itemDescription',
  slashSection: '_3e4SsG_sectionTitle',

  /* commands popup */
  cmdCard: 'mufS8W_card',
  cmdViewport: 'mufS8W_viewport',
  cmdRow: 'mufS8W_row',
  cmdLabel: 'mufS8W_label',
  cmdDetail: 'mufS8W_detail',
  cmdSearch: 'mufS8W_search',

  /* shell primitives (dist build: _name_hash_index format) */
  primList: '_list_1aoad',
  primSub: '_submenu_1aoad',
  primCompact: '_compactList_1aoad',
  primItem: '_item_1aoad',
  primWrap: '_itemWrap_1aoad',
  primLabel: '_label_1aoad',
  primViewport: '_viewport_1aoad',
  primScrollable: '_scrollable_1aoad',
  button: '_button_cfgyt',
  dialog: '_dialog_w1urq',

  /* settings + appearance */
  settingsPanel: 'VOzbGW_panel',
  settingsTrigger: 'VOzbGW_trigger',
  settingsNav: 'VOzbGW_navCell',
  settingsClose: 'VOzbGW_close',
  themeCube: '_8HJdBW_themeCube',
  themeCubeSel: '_8HJdBW_selected',
}

/* Substitute @key@ placeholders with T registry values; unknown keys throw
 * immediately (a typo must never silently ship a broken selector). */
function expand(rule) {
  return rule.replace(/@([A-Za-z]+)@/g, function (m, k) {
    if (!Object.prototype.hasOwnProperty.call(T, k)) throw new Error('gm3e: unknown CSS token @' + k + '@')
    return T[k]
  })
}

/* Interaction selectors — derived from T, shared by the DOM logic below. */
const TRIGGER_SEL = 'button[class*="' + T.modelTrigger + '"],button[class*="' + T.permTrigger + '"],button[class*="' + T.meterTrigger + '"]'
const PANEL_SEL = '[class*="' + T.modelMenu + '"],[class*="' + T.cmdCard + '"],[class*="' + T.slashMenu + '"]'
const PANEL_ITEM_SEL = '[class~="' + T.modelOption + '"],[class~="' + T.modelCell + '"],[class~="' + T.cmdRow + '"],[class~="' + T.slashItem + '"]'
const PRIM_MENU_SEL = '[class*="' + T.primList + '"],[class*="' + T.primSub + '"]'
const PRIM_ITEM_SEL = '[class*="' + T.primItem + '"]'
const FLIP_SEL = PANEL_SEL
const SCROLLFADE_SEL = '[class*="' + T.modelGroups + '"],[class*="' + T.cmdViewport + '"],[class*="' + T.slashViewport + '"]'
const CLIP_SEL = SCROLLFADE_SEL + ',[class*="' + T.primScrollable + '"] [class*="' + T.primViewport + '"]'
const CLIP_INNER_SEL = SCROLLFADE_SEL
const RISE_SEL = '[class~="' + T.modelGroupTitle + '"],[class~="' + T.modelOption + '"],[class~="' + T.modelCell + '"]'

/* The five menu scrollers share one 5px / track-inset / pill-thumb scrollbar
 * treatment; build the three pseudo-element rules from one host list. */
const SB_HOSTS = [T.modelGroups, T.modelMenu, T.primViewport, T.cmdViewport, T.slashViewport]
function sbRule(pseudo, body) {
  return SB_HOSTS.map(function (h) { return 'body [class*="' + h + '"]' + pseudo }).join(', ') + '{' + body + '}'
}

const CSS_TEXT = [
  /* ---- A. headline ---- */
  "body [class*=\"@headline@\"]{font-size:clamp(30px,3.4vw,44px);font-weight:400;letter-spacing:.2px}",
  /* ---- B. composer ---- */
  "body [class*=\"@composer@\"]{border-radius:40px;border:none !important;box-shadow:@SHADOW@ !important;padding-top:14px;gap:16px}",
  "body[data-ds-dark-theme] [class*=\"@composer@\"]{border:none !important}",
  "body [class*=\"@composerWs@\"]:after{border-radius:40px}",
  "body [class*=\"@composerHero@\"] [class*=\"@composerInput@\"]{min-height:64px}",
  "body [class*=\"@composerInput@\"]{padding:6px 24px 0 24px !important}",
  "body [class*=\"@composerPlaceholder@\"]{inset:6px 24px auto 24px !important}",
  "body [class*=\"@composerAccessory@\"]{padding:12px 24px 0 !important}",
  "body [class*=\"@composerRow@\"]{padding:6px 24px 14px !important}",
  /* ---- C. dividers ---- */
  "body [class*=\"@convHeader@\"]:after{display:none !important}",
  "body [class*=\"@sidebarRoot@\"]{border-right:none !important}",
  /* ---- D. bubble + rows + shapes ---- */
  'body [class*="@bubble@"]{display:block;width:fit-content;max-width:80%;margin:0 0 0 auto;padding:20px 28px;border-radius:40px;background:var(--dsw-specific-bubble);color:var(--dsw-alias-label-primary);font-size:16px;line-height:1.5;letter-spacing:.1px;font-weight:400;word-break:break-word;white-space:pre-wrap;border:none;box-shadow:none}',
  "body [class*=\"@newSession@\"]{border-radius:999px}",
  "body [class*=\"@sessionRow@\"],body [class*=\"@projectRow@\"],body [class*=\"@searchRow@\"]{border-radius:999px}",
  "body [class*=\"@wsSection@\"]{border-radius:999px}",
  "body [class*=\"@button@\"]{border-radius:999px}",
  "body [class*=\"@dialog@\"]{border-radius:32px;border:none !important;box-shadow:@SHADOW@ !important}",
  "body [class*=\"@callRow@\"]{border-radius:12px}",
  "body [class*=\"@markdown@\"] :not(pre)>code{border-radius:8px}",
  /* ---- E. menu system: 28px panels + 20px concentric items ---- */
  "body [class*=\"@modelMenu@\"], body [class*=\"@cmdCard@\"], body [class*=\"@slashMenu@\"]{border-radius:28px !important;padding:8px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:@SHADOW@ !important;gap:4px !important;overflow:hidden !important;interpolate-size:allow-keywords !important;transition:height .4s @EMPH@,width .4s @EMPH@ !important}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]){border-radius:28px !important;padding:8px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:@SHADOW@ !important;gap:4px !important}",
  "body [class*=\"@meterPanel@\"]{border-radius:28px !important;padding:16px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:@SHADOW@ !important}",
  "body [class*=\"@modelGroups@\"]{overflow-x:hidden !important;overflow-y:auto !important;padding:0 4px 6px 2px !important;display:flex !important;flex-direction:column !important;gap:4px !important}",
  /* edge fades: bottom when scrollable, top only once scrolled (JS-toggled);
   * stable gutter reserves the 5px scrollbar slot from frame one, so the
   * thumb fade-in never shifts the panel width (Windows scrollbars occupy
   * layout space — without the gutter their arrival is a hard cut) */
  '.gm3e-scrollfade{scrollbar-gutter:stable !important}',
  '.gm3e-scrollfade.gm3e-fade-bottom{-webkit-mask-image:linear-gradient(to bottom,#000 0,#000 calc(100% - 28px),transparent 100%) !important;mask-image:linear-gradient(to bottom,#000 0,#000 calc(100% - 28px),transparent 100%) !important}',
  '.gm3e-scrollfade.gm3e-fade-top{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 100%) !important;mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 100%) !important}',
  '.gm3e-scrollfade.gm3e-fade-top.gm3e-fade-bottom{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%) !important;mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%) !important}',
  "body [class~=\"@modelOption@\"]{display:flex !important;align-items:stretch !important;min-height:44px !important;padding:0 16px !important;border-radius:20px !important}",
  "body [class~=\"@modelOptionCopy@\"]{display:flex !important;flex-direction:column !important;justify-content:center !important;flex:1 1 auto !important;min-width:0 !important}",
  "body [class~=\"@modelCell@\"]{display:flex !important;align-items:center !important;min-height:44px !important;padding:0 16px !important;border-radius:20px !important}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primItem@\"], body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primItem@\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important;position:relative !important;overflow:hidden !important}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]{padding:10px 16px 6px !important}",
  "body [class~=\"@cmdRow@\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important;font-size:14px !important;line-height:22px !important}",
  "body [class~=\"@cmdLabel@\"]{flex:0 0 96px !important;font-weight:500 !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class~=\"@cmdDetail@\"]{flex:1 1 auto !important;min-width:0 !important;font-size:13px !important}",
  "body [class*=\"@cmdSearch@\"]{border-radius:16px !important;border:none !important;background:var(--dsw-alias-bg-layer-2) !important;padding:8px 14px !important}",
  "body [class*=\"@slashViewport@\"], body [class*=\"@cmdViewport@\"], body [class*=\"@primViewport@\"]{display:flex !important;flex-direction:column !important;gap:4px !important}",
  /* mirror modelGroups padding: right breathing room so item pills never crowd the scrollbar */
  "body [class*=\"@slashViewport@\"], body [class*=\"@cmdViewport@\"]{padding:0 4px 6px 2px !important}",
  "body [class~=\"@slashItem@\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important}",
  "body [class~=\"@slashName@\"]{flex:0 0 96px !important;max-width:none !important;font-weight:500 !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class~=\"@slashDesc@\"]{flex:1 1 auto !important;font-size:13px !important}",
  "body [class*=\"@slashSection@\"]{padding:10px 16px 4px !important}",
  /* triggers: unified 34px pill; button-scoped so inner label spans never match */
  "body button[class*=\"@modelTrigger@\"], body button[class*=\"@permTrigger@\"]{display:inline-flex !important;align-items:center !important;justify-content:center !important;height:34px !important;padding:0 14px !important;gap:6px !important;line-height:1 !important;border-radius:999px !important;position:relative !important;overflow:hidden !important}",
  "body button[class*=\"@modelTrigger@\"] > *, body button[class*=\"@permTrigger@\"] > *{line-height:20px !important}",
  "body button[class*=\"@meterTrigger@\"]{position:relative !important;overflow:hidden !important}",
  "body [class*=\"@modelGroupTitle@\"]{position:sticky !important;top:0 !important;z-index:60 !important;padding:10px 16px 6px 16px !important;box-shadow:0 6px 10px -2px var(--dsw-specific-menu) !important}",
  "body[data-ds-dark-theme] [class*=\"@modelGroupTitle@\"]{background:#282a2c !important}",
  "body:not([data-ds-dark-theme]) [class*=\"@modelGroupTitle@\"]{background:#ffffff !important}",
  sbRule('::-webkit-scrollbar', 'width:5px !important;height:0 !important'),
  sbRule('::-webkit-scrollbar-track', 'margin:14px 0 !important;background:transparent !important'),
  sbRule('::-webkit-scrollbar-thumb', 'border-radius:999px !important;background:var(--gm3e-sbc,var(--dsw-alias-scrollbar-bg-l2)) !important'),
  /* ---- F. motion ---- */
  "body [class*=\"@modelMenu@\"], body [class*=\"@meterPanel@\"]{animation:gm3e-menu-in .3s @EMPH@ both;transform-origin:bottom right}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]), body [class*=\"@cmdCard@\"], body [class*=\"@slashMenu@\"]{animation:gm3e-menu-in .3s @EMPH@ both;transform-origin:bottom left}",
  '@keyframes gm3e-menu-in{from{transform:translateY(-8px) scale(.98)}to{transform:translateY(0) scale(1)}}',
  "body [class~=\"@modelOption@\"], body [class~=\"@modelCell@\"], body [class*=\"@primItem@\"], body [class~=\"@cmdRow@\"], body [class~=\"@slashItem@\"], body [class*=\"@sessionRow@\"], body [class*=\"@projectRow@\"], body [class*=\"@searchRow@\"], body [class*=\"@newSession@\"]{transition:background-color .18s @STD@}",
  "body [class*=\"@dialog@\"]{animation:gm3e-dialog-in .3s @EMPH@ both}",
  '@keyframes gm3e-dialog-in{from{transform:translateY(10px) scale(.97)}to{transform:translateY(0) scale(1)}}',
  "body [class*=\"@composerSend@\"]{transition:transform .15s @EMPH@,background-color .15s @STD@}",
  "body [class*=\"@composerSend@\"]:active{transform:translateY(-2px) scale(.94)}",
  /* staggered rise — one spec everywhere: .45s / .04s steps, titles dress first */
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"], body [class~=\"@modelMenu@\"] > [class~=\"@modelOption@\"], body [class~=\"@modelMenu@\"] > [class~=\"@modelCell@\"], body [class~=\"@modelGroupTitle@\"], body [class*=\"@slashViewport@\"] > [class*=\"@slashSection@\"], body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"], body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"], body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"], body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"], body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"], body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"], body [class*=\"@meterPanel@\"] [class*=\"@meterHeader@\"], body [class*=\"@meterPanel@\"] [class*=\"@meterBar@\"], body [class*=\"@meterPanel@\"] [class*=\"@meterRows@\"] > [class*=\"@meterRow@\"]{animation:gm3e-rise .5s @EMPH@ both}",
  '@keyframes gm3e-rise{0%{opacity:0;transform:translateY(12px)}50%{opacity:1}100%{opacity:1;transform:translateY(0)}}',
  /* hold overflow hidden while the open animations settle (kills transient scrollbars) */
  '@keyframes gm3e-vp-clip{from{overflow:hidden}to{overflow:hidden}}',
  /* scrollbar-thumb fade-in: registered color property so the thumb never pops */
  '@property --gm3e-sbc{syntax:"<color>";inherits:true;initial-value:rgba(0,0,0,0)}',
  '@keyframes gm3e-sb-in{from{--gm3e-sbc:rgba(0,0,0,0)}to{--gm3e-sbc:var(--dsw-alias-scrollbar-bg-l2)}}',
  "body [class*=\"@modelGroups@\"], body [class*=\"@cmdViewport@\"], body [class*=\"@slashViewport@\"], body [class*=\"@primViewport@\"]{--gm3e-sbc:var(--dsw-alias-scrollbar-bg-l2)}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(2){animation-delay:.04s}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(3){animation-delay:.08s}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(4){animation-delay:.12s}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(5){animation-delay:.16s}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(6){animation-delay:.20s}",
  "body [class~=\"@modelGroup@\"] > [class~=\"@modelOption@\"]:nth-child(n+7){animation-delay:.24s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelOption@\"]:nth-of-type(1){animation-delay:0s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelOption@\"]:nth-of-type(2){animation-delay:.04s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelOption@\"]:nth-of-type(3){animation-delay:.08s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelOption@\"]:nth-of-type(n+4){animation-delay:.12s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelCell@\"]:nth-of-type(2){animation-delay:.04s}",
  "body [class~=\"@modelMenu@\"] > [class~=\"@modelCell@\"]:nth-of-type(3){animation-delay:.08s}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(2), body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(2), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(2), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(2){animation-delay:.04s}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(3), body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(3), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(3), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(3){animation-delay:.08s}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(4), body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(4), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(4), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(4){animation-delay:.12s}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(5), body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(5), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(5), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(5){animation-delay:.16s}",
  "body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(n+6), body [class*=\"@primList@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(n+6), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primWrap@\"]:nth-child(n+6), body [class*=\"@primSub@\"]:not([class*=\"@primCompact@\"]) [class*=\"@primLabel@\"]:nth-child(n+6){animation-delay:.20s}",
  "body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"]:nth-child(2), body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"]:nth-child(2), body [class*=\"@meterPanel@\"] [class*=\"@meterRows@\"] > [class*=\"@meterRow@\"]:nth-child(2){animation-delay:.04s}",
  "body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"]:nth-child(3), body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"]:nth-child(3), body [class*=\"@meterPanel@\"] [class*=\"@meterRows@\"] > [class*=\"@meterRow@\"]:nth-child(3){animation-delay:.08s}",
  "body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"]:nth-child(4), body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"]:nth-child(4){animation-delay:.12s}",
  "body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"]:nth-child(5), body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"]:nth-child(5){animation-delay:.16s}",
  "body [class*=\"@cmdViewport@\"] > [class~=\"@cmdRow@\"]:nth-child(n+6), body [class*=\"@slashViewport@\"] > [class~=\"@slashItem@\"]:nth-child(n+6){animation-delay:.20s}",
  /* ---- I. settings surface: 32px panel / 999px trigger / 20px cells ---- */
  "body [class*=\"@settingsPanel@\"]{border-radius:32px !important}",
  "body [class*=\"@settingsPanel@\"]{animation:gm3e-dialog-in .3s @EMPH@ both}",
  "body [class*=\"@settingsTrigger@\"]{border-radius:999px !important}",
  "body [class*=\"@settingsNav@\"]{border-radius:20px !important}",
  "body [class*=\"@settingsClose@\"]{border-radius:999px !important}",
  /* appearance cubes: tonal fill so unselected never melts into the surface;
   * selected carries the Gemini blue-90 tint (M3E selected-card treatment) */
  "body [class*=\"@themeCube@\"]{border-radius:40px !important;border:none !important;background:var(--dsw-alias-bg-layer-3) !important;color:var(--dsw-alias-label-secondary) !important;transition:background-color .18s @STD@,color .18s @STD@}",
  "body [class*=\"@themeCube@\"]:hover:not([class*=\"@themeCubeSel@\"]){background:var(--dsw-alias-interactive-bg-hover-solid) !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class*=\"@themeCube@\"][class*=\"@themeCubeSel@\"]{background:var(--dsw-alias-state-business-tertiary) !important;border:none !important;color:var(--dsw-alias-label-primary-bluish) !important}",
  /* ---- G. point ripple (driven by JS below) ---- */
  '.gm3e-ripple{position:absolute;border-radius:50%;transform:scale(0);opacity:.9;pointer-events:none;z-index:5;transition:transform .55s @STD@,opacity .55s @STD@}',
  '.gm3e-ripple.gm3e-ripple-run{transform:scale(1);opacity:0}'
].map(expand).join('\n')

function buildColorTokens() {
  const T = {}
  const set = (name, light, dark) => { T[name] = { light: light, dark: dark } }
  set('--dsw-alias-bg-base', '#ffffff', '#131314')
  set('--dsw-alias-bg-layer-1', '#f0f4f9', '#1e1f20')
  set('--dsw-alias-bg-layer-2', '#e9eef6', '#282a2c')
  set('--dsw-alias-bg-layer-3', '#dde3ea', '#2d2f31')
  set('--dsw-alias-bg-overlay', '#ffffff', '#282a2c')
  set('--dsw-alias-bg-module-platform', '#f0f4f9', '#1e1f20')
  set('--dsw-alias-bg-multi-select', '#e9eef6', '#282a2c')
  set('--dsw-alias-bg-skeleton', '#0000000a', '#ffffff0d')
  set('--dsw-specific-sidebar-fill', '#f0f4f9', '#1e1f20')
  set('--dsw-specific-sidebar-nav-item-hover', '#e5eaf2', '#ffffff0f')
  set('--dsw-specific-sidebar-nav-item-active', '#d3e3fd', '#333537')
  set('--dsw-specific-sidebar-nav-item-active-accent', '#d3e3fd', '#333537')
  set('--dsw-specific-selector', '#e9eef6', '#2d2f31')
  set('--dsw-specific-menu', '#ffffff', '#282a2c')
  set('--dsw-specific-bubble', '#f2f0f0', '#1e1f20')
  set('--dsw-specific-bubble-highlight', '#d3e3fd', '#3c4043')
  set('--dsw-specific-tip', '#e9eef6', '#282a2c')
  set('--dsw-specific-input-major', '#ffffff', '#1e1f20')
  set('--dsw-specific-login-input', '#f0f4f9', '#282a2c')
  set('--dsw-alias-border-l1', 'transparent', 'transparent')
  set('--dsw-alias-border-l2', 'transparent', 'transparent')
  set('--dsw-alias-border-l2-darkmode-thin', 'transparent', 'transparent')
  set('--dsw-alias-border-l3', 'transparent', 'transparent')
  set('--dsw-alias-border-l4', '#dadce0', '#5f6368')
  set('--dsw-alias-border-inverted', '#ffffff1f', '#5f6368')
  set('--dsw-alias-label-primary', '#1f1f1f', '#e3e3e3')
  set('--dsw-alias-label-secondary', '#444746', '#c4c7c5')
  set('--dsw-alias-label-tertiary', '#747775', '#8e918f')
  set('--dsw-alias-label-caption', '#747775', '#9aa0a6')
  set('--dsw-alias-label-dimmed', '#80868b', '#8e918f')
  set('--dsw-alias-label-primary-dimmed', '#444746', '#c4c7c5')
  set('--dsw-alias-label-primary-bluish', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-label-primary-inverted', '#ffffff', '#062e6f')
  set('--dsw-alias-brand-primary', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-brand-text', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-brand-primary-invert', '#ffffff', '#062e6f')
  set('--dsw-alias-brand-primary-new-colorprimary-new-color', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-button-primary-fill', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-button-primary-hover', '#0a4db3', '#bcd3fb')
  set('--dsw-alias-button-primary-dimmed', '#0b57d033', '#a8c7fa40')
  set('--dsw-alias-button-info-fill', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-button-info-hover', '#0a4db3', '#bcd3fb')
  set('--dsw-alias-button-elevated-fill', '#ffffff', '#2d2f31')
  set('--dsw-alias-button-floating-fill', '#ffffff', '#2d2f31')
  set('--dsw-alias-button-floating-hover', '#e9eef6', '#333537')
  set('--dsw-alias-button-ghost-active-fill', '#0b57d00f', '#ffffff14')
  set('--dsw-alias-button-ghost-active-hover', '#0b57d01f', '#ffffff1f')
  set('--dsw-alias-button-ghost-active-border', '#0b57d0', '#9aa0a6')
  set('--dsw-alias-button-contrast-fill', '#e9eef6', '#333537')
  set('--dsw-alias-interactive-bg-hover', '#0000000a', '#ffffff0d')
  set('--dsw-alias-interactive-bg-hover-solid', '#e9eef6', '#2d2f31')
  set('--dsw-alias-interactive-bg-hover-accent', '#0b57d01a', '#a8c7fa1f')
  set('--dsw-alias-interactive-bg-active', '#0b57d029', '#a8c7fa33')
  set('--dsw-alias-interactive-bg-hover-danger', '#f25a5a1a', '#f28b821a')
  set('--dsw-alias-state-business-primary', '#0b57d0', '#a8c7fa')
  set('--dsw-alias-state-business-tertiary', '#d3e3fd', '#004a77')
  set('--dsw-alias-state-error-primary', '#d93025', '#f28b82')
  set('--dsw-alias-state-error-secondary', '#d93025', '#f28b82')
  set('--dsw-alias-state-success-primary', '#1e8e3e', '#81c995')
  set('--dsw-alias-state-success-secondary', '#1e8e3e', '#6dd58c')
  set('--dsw-alias-state-warn-label', '#b06000', '#fdd663')
  set('--dsw-alias-state-warn-primary', '#f9ab00', '#fdd663')
  set('--dsw-alias-state-warn-secondary', '#f9ab00', '#fdd663')
  set('--dsw-alias-markdown-code-block', '#f0f4f9', '#1e1f20')
  set('--dsw-alias-markdown-code-block-banner', '#e9eef6', '#282a2c')
  set('--dsw-alias-markdown-code-segment-selected', '#e9eef6', '#282a2c')
  set('--dsw-alias-markdown-code-segment-unselected', '#f0f4f9', '#1e1f20')
  set('--dsw-alias-markdown-inline-code', '#e9eef6', '#282a2c')
  set('--dsw-alias-markdown-citation', '#e9eef6', '#2d2f31')
  set('--dsw-alias-markdown-tag', '#e9eef6', '#282a2c')
  set('--dsw-alias-markdown-placeholder', '#dadce0', '#333537')
  set('--dsw-alias-scrollbar-bg-l1', '#dadce0', '#5f6368')
  set('--dsw-alias-scrollbar-bg-l2', '#c4c7c5', '#5f6368')
  set('--dsw-alias-scrollbar-hover-l1', '#bdc1c6', '#80868b')
  set('--dsw-alias-scrollbar-hover-l2', '#bdc1c6', '#80868b')
  set('--dsw-alias-toast-bg', '#3c4043', '#2d2f31')
  set('--dsw-alias-tooltip-bg', '#3c4043', '#2d2f31')
  set('--dsw-linear-gradient-think', 'linear-gradient(180deg, #ffffff 20.19%, #ffffff00 100%)', 'linear-gradient(180deg, #131314 20.19%, #13131400 100%)')
  set('--dsw-linear-think-select', 'linear-gradient(180deg, #f0f4f9 20.19%, #f0f4f900 100%)', 'linear-gradient(180deg, #1e1f20 20.19%, #1e1f2000 100%)')
  return T
}

function buildBaseTokens() {
  const T = {}
  const same = (name, value) => { T[name] = { light: value, dark: value } }
  same('--dsw-font-family', "'Google Sans Text','Google Sans',Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif")
  same('--dsl-terminal-radius', '16px')
  same('--dsl-read-radius', '16px')
  same('--dsl-diff-radius', '16px')
  same('--dsl-search-radius', '16px')
  same('--dsl-web-radius', '16px')
  same('--dsl-code-block-border-radius', '16px')
  return T
}

function buildTypographyTokens() {
  const T = {}
  const same = (name, value) => { T[name] = { light: value, dark: value } }
  same('--dsw-font-markdown-h1', '400 32px/40px var(--dsw-font-family)')
  same('--dsw-font-markdown-h2', '400 26px/34px var(--dsw-font-family)')
  same('--dsw-font-markdown-h3', '400 22px/30px var(--dsw-font-family)')
  same('--dsw-font-markdown-h4', '500 18px/26px var(--dsw-font-family)')
  same('--dsw-font-markdown-base', '400 16px/24px var(--dsw-font-family)')
  same('--dsw-font-markdown-base-strong', '600 16px/24px var(--dsw-font-family)')
  same('--dsw-font-markdown-base-italic', 'italic 400 16px/24px var(--dsw-font-family)')
  same('--dsw-font-markdown-base-strong-italic', 'italic 600 16px/24px var(--dsw-font-family)')
  same('--dsw-font-markdown-small', '400 14px/20px var(--dsw-font-family)')
  same('--dsw-font-markdown-small-strong', '600 14px/20px var(--dsw-font-family)')
  same('--dsw-font-markdown-small-italic', 'italic 400 14px/20px var(--dsw-font-family)')
  same('--dsw-font-markdown-small-strong-italic', 'italic 600 14px/20px var(--dsw-font-family)')
  same('--dsw-font-markdown-table', '400 15px/25px var(--dsw-font-family)')
  same('--dsw-font-markdown-table-head', '500 15px/25px var(--dsw-font-family)')
  same('--dsw-font-xl-24', '400 28px/36px var(--dsw-font-family)')
  same('--dsw-font-l-20', '400 22px/30px var(--dsw-font-family)')
  same('--dsw-font-m-18', '400 18px/26px var(--dsw-font-family)')
  same('--dsw-font-base-16', '400 16px/24px var(--dsw-font-family)')
  same('--dsw-font-base-strong-16', '500 16px/24px var(--dsw-font-family)')
  same('--ds-font-family-code', "'Google Sans Mono','Roboto Mono','JetBrains Mono','Cascadia Code','Consolas','Courier New',monospace")
  return T
}

function installStyles() {
  if (document.querySelector('style[data-plugin-css="' + CSS_ID + '"]') !== null) return
  const style = document.createElement('style')
  style.dataset.plugin = 'dsh-gemini-m3e-theme'
  style.dataset.pluginCss = CSS_ID
  style.textContent = CSS_TEXT
  document.head.appendChild(style)
}

/* ===========================================================================
 * JS interactions — require the real browser DOM.
 * 1) Point ripple: pointerdown-anchored radial ripple, one-way expand+fade.
 *    Trigger selector is button-scoped: a bare modelTrigger substring also
 *    matches the triggerLabel/triggerEffort spans and clipped the ripple to
 *    them. Panel ripples expand over overflow:hidden menus; primitives-menu
 *    items get their own clipped ripple (lists stay overflow:visible so
 *    flyout submenus are never cut).
 * 2) Pane size transitions are pure CSS now: the menu containers carry
 *    interpolate-size:allow-keywords + height/width transition, so any
 *    content change (pane switch, async load, filtering) glides by itself.
 * 3) Rise stagger: model menu gets document-order inline delays; scrollers
 *    get edge fades (.gm3e-scrollfade/-fade-top/-fade-bottom) and a
 *    re-armed scrollbar fade-in the moment they become scrollable.
 * Selector constants live at module top level, derived from the T registry.
 * =========================================================================== */
function installInteractions() {
  if (typeof document === 'undefined' || !document.body) return null
  const observers = []

  /* Hold overflow:hidden for .8s so rise/size overflow never flashes a
   * transient scrollbar; then — exactly when the clip lifts and the thumb
   * can first render — fade it in over .5s via gm3e-sb-in (registered
   * --gm3e-sbc color property), so it appears gradually like the model
   * pane's. The clear timeout is tracked per scroller so overlapping
   * calls never cut a fade that is still running. */
  function clipBriefly(scroller) {
    clearTimeout(scroller.__gm3eClipT)
    scroller.style.animation = 'none'
    void scroller.offsetWidth
    scroller.style.animation = 'gm3e-vp-clip .8s, gm3e-sb-in .5s ' + T.STD + ' .8s both'
    scroller.__gm3eClipT = setTimeout(() => { scroller.style.animation = '' }, 1400)
  }

  /* Document-order rise stagger for the model menu: group title → its models
   * → next title → its models … (inline delay beats the stylesheet steps). */
  function staggerRise(menu) {
    const els = menu.querySelectorAll(RISE_SEL)
    let i = 0
    for (let k = 0; k < els.length; k++) {
      const el = els[k]
      if (el.__gm3eDelay) continue
      el.__gm3eDelay = true
      el.style.animationDelay = Math.min(i * 0.04, 0.32) + 's'
      i++
    }
  }

  function spawnRipple(host, x, y) {
    const rect = host.getBoundingClientRect()
    const isDark = document.body.hasAttribute('data-ds-dark-theme')
    const radius = Math.max(rect.width, rect.height) * 1.15
    const el = document.createElement('span')
    el.className = 'gm3e-ripple'
    el.style.left = (x - rect.left - radius) + 'px'
    el.style.top = (y - rect.top - radius) + 'px'
    el.style.width = el.style.height = radius * 2 + 'px'
    el.style.background = isDark
      ? 'radial-gradient(circle, rgba(255,255,255,.2) 0%, rgba(255,255,255,0) 68%)'
      : 'radial-gradient(circle, rgba(0,0,0,.14) 0%, rgba(0,0,0,0) 68%)'
    host.appendChild(el)
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('gm3e-ripple-run')))
    setTimeout(() => el.remove(), 700)
  }

  function onPointerDown(e) {
    const t = e.target
    if (!t || typeof t.closest !== 'function') return
    const trigger = t.closest(TRIGGER_SEL)
    if (trigger) { spawnRipple(trigger, e.clientX, e.clientY); return }
    const panel = t.closest(PANEL_SEL)
    if (panel) {
      const hit = t.closest(PANEL_ITEM_SEL)
      if (hit) spawnRipple(panel, e.clientX, e.clientY)
      return
    }
    const prim = t.closest(PRIM_MENU_SEL)
    if (prim && String(prim.className || '').indexOf('_compactList') === -1) {
      const item = t.closest(PRIM_ITEM_SEL)
      if (item) spawnRipple(item, e.clientX, e.clientY)
    }
  }

  /* Per-scroller state: mask classes (top/bottom edge fades) + re-arm the
   * scrollbar fade-in the moment a panel becomes scrollable (e.g. async
   * content growth that never resizes the menu itself). The +16px
   * threshold absorbs the 12px rise transient so a short panel is never
   * misjudged scrollable mid-animation. */
  function updateScroller(el) {
    const scrollable = el.scrollHeight > el.clientHeight + 16
    if (el.__gm3eMask) {
      el.classList.toggle('gm3e-scrollfade', scrollable)
      el.classList.toggle('gm3e-fade-top', scrollable && el.scrollTop > 8)
      el.classList.toggle('gm3e-fade-bottom', scrollable && el.scrollTop + el.clientHeight < el.scrollHeight - 8)
    }
    if (scrollable && !el.__gm3eWasScrollable) clipBriefly(el)
    el.__gm3eWasScrollable = scrollable
  }

  function onScroll(e) { updateScroller(e.currentTarget) }

  /* Safety net: animations (rise, menu-in) mutate no DOM when they settle,
   * so re-evaluate every scroller once more ~1s after the last mutation. */
  let refreshT = 0
  function refreshScrollersSoon() {
    clearTimeout(refreshT)
    refreshT = setTimeout(() => {
      const scrollers = document.querySelectorAll(CLIP_SEL)
      for (let i = 0; i < scrollers.length; i++) updateScroller(scrollers[i])
    }, 1000)
  }

  function attach() {
    const menus = document.querySelectorAll(FLIP_SEL)
    for (let i = 0; i < menus.length; i++) staggerRise(menus[i])
    const fadeScs = document.querySelectorAll(SCROLLFADE_SEL)
    for (let i = 0; i < fadeScs.length; i++) fadeScs[i].__gm3eMask = true
    const scrollers = document.querySelectorAll(CLIP_SEL)
    for (let i = 0; i < scrollers.length; i++) {
      const sc = scrollers[i]
      if (!sc.__gm3eClip) { sc.__gm3eClip = true; clipBriefly(sc) }
      if (!sc.__gm3eScrollWatch) {
        sc.__gm3eScrollWatch = true
        sc.addEventListener('scroll', onScroll, { passive: true })
      }
      updateScroller(sc)
    }
    refreshScrollersSoon()
  }

  document.addEventListener('pointerdown', onPointerDown, true)
  const rootObs = new MutationObserver(attach)
  rootObs.observe(document.body, { childList: true, subtree: true })
  observers.push(rootObs)
  attach()

  return function cleanup() {
    document.removeEventListener('pointerdown', onPointerDown, true)
    for (let i = 0; i < observers.length; i++) observers[i].disconnect()
  }
}

export const inject = ['theme']

export function apply(ctx) {
  installStyles()
  const cleanupInteractions = installInteractions()
  if (cleanupInteractions) ctx.effect(() => cleanupInteractions, 'dsh-gemini-m3e-theme: interactions')

  const FULL = Object.assign({}, buildColorTokens(), buildBaseTokens(), buildTypographyTokens())
  const activeLayer = ctx.theme.overrideTokens('dsh-gemini-m3e-theme', FULL)
  ctx.effect(() => () => { if (activeLayer) activeLayer() }, 'dsh-gemini-m3e-theme: revert token layer')
}
