window.__ModuleLoader__.load({id:"dsh-gemini-m3e-theme",factory:(require)=>{
var module={exports:{}};var exports=module.exports;

var CSS_ID = 'dsh-gemini-m3e-theme/client';

var CSS_TEXT = [
  "body [class*=\"wSkVaW_heroGlow\"]{filter:blur(90px);border-radius:9999px;background:radial-gradient(ellipse 100% 100% at center 8%,#fdfcfc 0,#9dd2ff 50%)}",
  "body [class*=\"wSkVaW_heroGlow\"] > *{display:none}",
  "body[data-ds-dark-theme] [class*=\"wSkVaW_heroGlow\"]{background:radial-gradient(ellipse 100% 100% at center 8%,#131314 0,#14204f 50%)}",
  "body [class*=\"pXSMma_headline\"]{font-size:clamp(30px,3.4vw,44px);font-weight:400;letter-spacing:.2px}",
  "body [class*=\"uV2eYG_card\"]{border-radius:40px;border:none !important;box-shadow:0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1) !important;padding-top:14px;gap:16px}",
  "body[data-ds-dark-theme] [class*=\"uV2eYG_card\"]{border:none !important}",
  "body [class*=\"uV2eYG_cardWorkspaceTrigger\"]:after{border-radius:40px}",
  "body [class*=\"uV2eYG_hero\"] [class*=\"uV2eYG_mirror\"], body [class*=\"uV2eYG_hero\"] [class*=\"uV2eYG_input\"]{min-height:64px}",
  "body [class*=\"uV2eYG_input\"],body [class*=\"uV2eYG_mirror\"],body [class*=\"uV2eYG_backdrop\"]{padding:6px 24px 0 24px !important}",
  "body [class*=\"uV2eYG_accessory\"]{padding:12px 24px 0 !important}",
  "body [class*=\"uV2eYG_row\"]{padding:6px 24px 14px !important}",
  "body [class*=\"wSkVaW_header\"]:after{display:none !important}",
  "body [class*=\"hHd-Xa_root\"]{border-right:none !important}",
  'body [class*="gdEzaW_bubble"]{display:block;width:fit-content;max-width:80%;margin:0 0 0 auto;padding:20px 28px;border-radius:40px;background:var(--dsw-specific-bubble);color:var(--dsw-alias-label-primary);font-size:16px;line-height:1.5;letter-spacing:.1px;font-weight:400;word-break:break-word;white-space:pre-wrap;border:none;box-shadow:none}',
  "body [class*=\"hHd-Xa_newSession\"]{border-radius:999px}",
  "body [class*=\"YDXeBa_sessionRow\"],body [class*=\"YDXeBa_projectRow\"],body [class*=\"YDXeBa_searchResultRow\"]{border-radius:999px}",
  "body [class*=\"qDHVXG_sectionHeader\"]{border-radius:999px}",
  "body [class*=\"_button_kz6gm\"]{border-radius:999px}",
  "body [class*=\"_dialog_15u5s\"]{border-radius:32px;border:none !important;box-shadow:0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1) !important}",
  "body [class*=\"Md3f7G_callRow\"]{border-radius:12px}",
  "body [class*=\"markdown_1r4m5\"] :not(pre)>code{border-radius:8px}",
  "body [class*=\"_7KE1Ra_menu\"], body [class*=\"mufS8W_card\"], body [class*=\"_3e4SsG_menu\"]{border-radius:28px !important;padding:8px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1) !important;gap:4px !important;overflow:hidden !important;interpolate-size:allow-keywords !important;transition:height .4s cubic-bezier(.05,.7,.1,1),width .4s cubic-bezier(.05,.7,.1,1) !important}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]){border-radius:28px !important;padding:8px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1) !important;gap:4px !important}",
  "body [class*=\"JObwrW_panel\"]{border-radius:28px !important;padding:16px !important;border:none !important;background:var(--dsw-specific-menu) !important;box-shadow:0 6px 24px -6px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.1) !important}",
  "body [class*=\"_7KE1Ra_groups\"]{overflow-x:hidden !important;overflow-y:auto !important;padding:0 4px 6px 2px !important;display:flex !important;flex-direction:column !important;gap:4px !important}",
  '.gm3e-scrollfade{scrollbar-gutter:stable !important}',
  '.gm3e-scrollfade.gm3e-fade-bottom{-webkit-mask-image:linear-gradient(to bottom,#000 0,#000 calc(100% - 28px),transparent 100%) !important;mask-image:linear-gradient(to bottom,#000 0,#000 calc(100% - 28px),transparent 100%) !important}',
  '.gm3e-scrollfade.gm3e-fade-top{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 100%) !important;mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 100%) !important}',
  '.gm3e-scrollfade.gm3e-fade-top.gm3e-fade-bottom{-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%) !important;mask-image:linear-gradient(to bottom,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%) !important}',
  "body [class~=\"_7KE1Ra_option\"]{display:flex !important;align-items:stretch !important;min-height:44px !important;padding:0 16px !important;border-radius:20px !important}",
  "body [class~=\"_7KE1Ra_optionCopy\"]{display:flex !important;flex-direction:column !important;justify-content:center !important;flex:1 1 auto !important;min-width:0 !important}",
  "body [class~=\"_7KE1Ra_cell\"]{display:flex !important;align-items:center !important;min-height:44px !important;padding:0 16px !important;border-radius:20px !important}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_item_19372\"], body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_item_19372\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important;position:relative !important;overflow:hidden !important}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]{padding:10px 16px 6px !important}",
  "body [class~=\"mufS8W_row\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important;font-size:14px !important;line-height:22px !important}",
  "body [class~=\"mufS8W_label\"]{flex:0 0 96px !important;font-weight:500 !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class~=\"mufS8W_detail\"]{flex:1 1 auto !important;min-width:0 !important;font-size:13px !important}",
  "body [class*=\"mufS8W_search\"]{border-radius:16px !important;border:none !important;background:var(--dsw-alias-bg-layer-2) !important;padding:8px 14px !important}",
  "body [class*=\"_3e4SsG_viewport\"], body [class*=\"mufS8W_viewport\"], body [class*=\"_viewport_19372\"]{display:flex !important;flex-direction:column !important;gap:4px !important}",
  /* mirror _7KE1Ra_groups padding: right breathing room so item pills never crowd the scrollbar */
  "body [class*=\"_3e4SsG_viewport\"], body [class*=\"mufS8W_viewport\"]{padding:0 4px 6px 2px !important}",
  "body [class~=\"_3e4SsG_item\"]{box-sizing:border-box !important;border-radius:20px !important;min-height:44px !important;padding:8px 16px !important}",
  "body [class~=\"_3e4SsG_itemName\"]{flex:0 0 96px !important;max-width:none !important;font-weight:500 !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class~=\"_3e4SsG_itemDescription\"]{flex:1 1 auto !important;font-size:13px !important}",
  "body [class*=\"_3e4SsG_sectionTitle\"]{padding:10px 16px 4px !important}",
  "body button[class*=\"_7KE1Ra_trigger\"], body button[class*=\"Sh0Q9G_trigger\"]{display:inline-flex !important;align-items:center !important;justify-content:center !important;height:34px !important;padding:0 14px !important;gap:6px !important;line-height:1 !important;border-radius:999px !important;position:relative !important;overflow:hidden !important}",
  "body button[class*=\"_7KE1Ra_trigger\"] > *, body button[class*=\"Sh0Q9G_trigger\"] > *{line-height:20px !important}",
  "body button[class*=\"JObwrW_trigger\"]{position:relative !important;overflow:hidden !important}",
  "body [class*=\"_7KE1Ra_groupTitle\"]{position:sticky !important;top:0 !important;z-index:60 !important;padding:10px 16px 6px 16px !important;box-shadow:0 6px 10px -2px var(--dsw-specific-menu) !important}",
  "body[data-ds-dark-theme] [class*=\"_7KE1Ra_groupTitle\"]{background:#282a2c !important}",
  "body:not([data-ds-dark-theme]) [class*=\"_7KE1Ra_groupTitle\"]{background:#ffffff !important}",
  "body [class*=\"_7KE1Ra_groups\"]::-webkit-scrollbar, body [class*=\"_7KE1Ra_menu\"]::-webkit-scrollbar, body [class*=\"_viewport_19372\"]::-webkit-scrollbar, body [class*=\"mufS8W_viewport\"]::-webkit-scrollbar, body [class*=\"_3e4SsG_viewport\"]::-webkit-scrollbar{width:5px !important;height:0 !important}",
  "body [class*=\"_7KE1Ra_groups\"]::-webkit-scrollbar-track, body [class*=\"_7KE1Ra_menu\"]::-webkit-scrollbar-track, body [class*=\"_viewport_19372\"]::-webkit-scrollbar-track, body [class*=\"mufS8W_viewport\"]::-webkit-scrollbar-track, body [class*=\"_3e4SsG_viewport\"]::-webkit-scrollbar-track{margin:14px 0 !important;background:transparent !important}",
  "body [class*=\"_7KE1Ra_groups\"]::-webkit-scrollbar-thumb, body [class*=\"_7KE1Ra_menu\"]::-webkit-scrollbar-thumb, body [class*=\"_viewport_19372\"]::-webkit-scrollbar-thumb, body [class*=\"mufS8W_viewport\"]::-webkit-scrollbar-thumb, body [class*=\"_3e4SsG_viewport\"]::-webkit-scrollbar-thumb{border-radius:999px !important;background:var(--gm3e-sbc,var(--dsw-alias-scrollbar-bg-l2)) !important}",
  "body [class*=\"_7KE1Ra_menu\"], body [class*=\"JObwrW_panel\"]{animation:gm3e-menu-in .3s cubic-bezier(.05,.7,.1,1) both;transform-origin:bottom right}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]), body [class*=\"mufS8W_card\"], body [class*=\"_3e4SsG_menu\"]{animation:gm3e-menu-in .3s cubic-bezier(.05,.7,.1,1) both;transform-origin:bottom left}",
  '@keyframes gm3e-menu-in{from{transform:translateY(-8px) scale(.98)}to{transform:translateY(0) scale(1)}}',
  "body [class~=\"_7KE1Ra_option\"], body [class~=\"_7KE1Ra_cell\"], body [class*=\"_item_19372\"], body [class~=\"mufS8W_row\"], body [class~=\"_3e4SsG_item\"], body [class*=\"YDXeBa_sessionRow\"], body [class*=\"YDXeBa_projectRow\"], body [class*=\"YDXeBa_searchResultRow\"], body [class*=\"hHd-Xa_newSession\"]{transition:background-color .18s cubic-bezier(.2,0,0,1)}",
  "body [class*=\"_dialog_15u5s\"]{animation:gm3e-dialog-in .3s cubic-bezier(.05,.7,.1,1) both}",
  '@keyframes gm3e-dialog-in{from{transform:translateY(10px) scale(.97)}to{transform:translateY(0) scale(1)}}',
  "body [class*=\"uV2eYG_primary\"]{transition:transform .15s cubic-bezier(.05,.7,.1,1),background-color .15s cubic-bezier(.2,0,0,1)}",
  "body [class*=\"uV2eYG_primary\"]:active{transform:translateY(-2px) scale(.94)}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"], body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_option\"], body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_cell\"], body [class~=\"_7KE1Ra_groupTitle\"], body [class*=\"_3e4SsG_viewport\"] > [class*=\"_3e4SsG_sectionTitle\"], body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"], body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"], body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"], body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"], body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"], body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"], body [class*=\"JObwrW_panel\"] [class*=\"JObwrW_header\"], body [class*=\"JObwrW_panel\"] [class*=\"JObwrW_bar\"], body [class*=\"JObwrW_panel\"] [class*=\"JObwrW_rows\"] > [class*=\"JObwrW_row\"]{animation:gm3e-rise .5s cubic-bezier(.05,.7,.1,1) both}",
  '@keyframes gm3e-rise{0%{opacity:0;transform:translateY(12px)}50%{opacity:1}100%{opacity:1;transform:translateY(0)}}',
  '@keyframes gm3e-vp-clip{from{overflow:hidden}to{overflow:hidden}}',
  '@property --gm3e-sbc{syntax:"<color>";inherits:true;initial-value:rgba(0,0,0,0)}',
  '@keyframes gm3e-sb-in{from{--gm3e-sbc:rgba(0,0,0,0)}to{--gm3e-sbc:var(--dsw-alias-scrollbar-bg-l2)}}',
  "body [class*=\"_7KE1Ra_groups\"], body [class*=\"mufS8W_viewport\"], body [class*=\"_3e4SsG_viewport\"], body [class*=\"_viewport_19372\"]{--gm3e-sbc:var(--dsw-alias-scrollbar-bg-l2)}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(2){animation-delay:.04s}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(3){animation-delay:.08s}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(4){animation-delay:.12s}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(5){animation-delay:.16s}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(6){animation-delay:.20s}",
  "body [class~=\"_7KE1Ra_group\"] > [class~=\"_7KE1Ra_option\"]:nth-child(n+7){animation-delay:.24s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_option\"]:nth-of-type(1){animation-delay:0s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_option\"]:nth-of-type(2){animation-delay:.04s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_option\"]:nth-of-type(3){animation-delay:.08s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_option\"]:nth-of-type(n+4){animation-delay:.12s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_cell\"]:nth-of-type(2){animation-delay:.04s}",
  "body [class~=\"_7KE1Ra_menu\"] > [class~=\"_7KE1Ra_cell\"]:nth-of-type(3){animation-delay:.08s}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(2), body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(2), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(2), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(2){animation-delay:.04s}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(3), body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(3), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(3), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(3){animation-delay:.08s}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(4), body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(4), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(4), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(4){animation-delay:.12s}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(5), body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(5), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(5), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(5){animation-delay:.16s}",
  "body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(n+6), body [class*=\"_list_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(n+6), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_itemWrap_19372\"]:nth-child(n+6), body [class*=\"_submenu_19372\"]:not([class*=\"_compactList_19372\"]) [class*=\"_label_19372\"]:nth-child(n+6){animation-delay:.20s}",
  "body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"]:nth-child(2), body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"]:nth-child(2), body [class*=\"JObwrW_panel\"] [class*=\"JObwrW_rows\"] > [class*=\"JObwrW_row\"]:nth-child(2){animation-delay:.04s}",
  "body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"]:nth-child(3), body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"]:nth-child(3), body [class*=\"JObwrW_panel\"] [class*=\"JObwrW_rows\"] > [class*=\"JObwrW_row\"]:nth-child(3){animation-delay:.08s}",
  "body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"]:nth-child(4), body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"]:nth-child(4){animation-delay:.12s}",
  "body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"]:nth-child(5), body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"]:nth-child(5){animation-delay:.16s}",
  "body [class*=\"mufS8W_viewport\"] > [class~=\"mufS8W_row\"]:nth-child(n+6), body [class*=\"_3e4SsG_viewport\"] > [class~=\"_3e4SsG_item\"]:nth-child(n+6){animation-delay:.20s}",
  "body [class*=\"VOzbGW_panel\"]{border-radius:32px !important}",
  "body [class*=\"VOzbGW_panel\"]{animation:gm3e-dialog-in .3s cubic-bezier(.05,.7,.1,1) both}",
  "body [class*=\"VOzbGW_trigger\"]{border-radius:999px !important}",
  "body [class*=\"VOzbGW_navCell\"]{border-radius:20px !important}",
  "body [class*=\"VOzbGW_close\"]{border-radius:999px !important}",
  "body [class*=\"_8HJdBW_themeCube\"]{border-radius:40px !important;border:none !important;background:var(--dsw-alias-bg-layer-3) !important;color:var(--dsw-alias-label-secondary) !important;transition:background-color .18s cubic-bezier(.2,0,0,1),color .18s cubic-bezier(.2,0,0,1)}",
  "body [class*=\"_8HJdBW_themeCube\"]:hover:not([class*=\"_8HJdBW_selected\"]){background:var(--dsw-alias-interactive-bg-hover-solid) !important;color:var(--dsw-alias-label-primary) !important}",
  "body [class*=\"_8HJdBW_themeCube\"][class*=\"_8HJdBW_selected\"]{background:var(--dsw-alias-state-business-tertiary) !important;border:none !important;color:var(--dsw-alias-label-primary-bluish) !important}",
  '.gm3e-ripple{position:absolute;border-radius:50%;transform:scale(0);opacity:.9;pointer-events:none;z-index:5;transition:transform .55s cubic-bezier(.2,0,0,1),opacity .55s cubic-bezier(.2,0,0,1)}',
  '.gm3e-ripple.gm3e-ripple-run{transform:scale(1);opacity:0}'
].join('\n');

function buildColorTokens() {
  var T = {};
  var set = function (name, light, dark) { T[name] = { light: light, dark: dark }; };
  set('--dsw-alias-bg-base', '#ffffff', '#131314');
  set('--dsw-alias-bg-layer-1', '#f0f4f9', '#1e1f20');
  set('--dsw-alias-bg-layer-2', '#e9eef6', '#282a2c');
  set('--dsw-alias-bg-layer-3', '#dde3ea', '#2d2f31');
  set('--dsw-alias-bg-overlay', '#ffffff', '#282a2c');
  set('--dsw-alias-bg-module-platform', '#f0f4f9', '#1e1f20');
  set('--dsw-alias-bg-multi-select', '#e9eef6', '#282a2c');
  set('--dsw-alias-bg-skeleton', '#0000000a', '#ffffff0d');
  set('--dsw-specific-sidebar-fill', '#f0f4f9', '#1e1f20');
  set('--dsw-specific-sidebar-nav-item-hover', '#e5eaf2', '#ffffff0f');
  set('--dsw-specific-sidebar-nav-item-active', '#d3e3fd', '#333537');
  set('--dsw-specific-sidebar-nav-item-active-accent', '#d3e3fd', '#333537');
  set('--dsw-specific-selector', '#e9eef6', '#2d2f31');
  set('--dsw-specific-menu', '#ffffff', '#282a2c');
  set('--dsw-specific-bubble', '#f2f0f0', '#1e1f20');
  set('--dsw-specific-bubble-highlight', '#d3e3fd', '#3c4043');
  set('--dsw-specific-tip', '#e9eef6', '#282a2c');
  set('--dsw-specific-input-major', '#ffffff', '#1e1f20');
  set('--dsw-specific-login-input', '#f0f4f9', '#282a2c');
  set('--dsw-alias-border-l1', 'transparent', 'transparent');
  set('--dsw-alias-border-l2', 'transparent', 'transparent');
  set('--dsw-alias-border-l2-darkmode-thin', 'transparent', 'transparent');
  set('--dsw-alias-border-l3', 'transparent', 'transparent');
  set('--dsw-alias-border-l4', '#dadce0', '#5f6368');
  set('--dsw-alias-border-inverted', '#ffffff1f', '#5f6368');
  set('--dsw-alias-label-primary', '#1f1f1f', '#e3e3e3');
  set('--dsw-alias-label-secondary', '#444746', '#c4c7c5');
  set('--dsw-alias-label-tertiary', '#747775', '#8e918f');
  set('--dsw-alias-label-caption', '#747775', '#9aa0a6');
  set('--dsw-alias-label-dimmed', '#80868b', '#8e918f');
  set('--dsw-alias-label-primary-dimmed', '#444746', '#c4c7c5');
  set('--dsw-alias-label-primary-bluish', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-label-primary-inverted', '#ffffff', '#062e6f');
  set('--dsw-alias-brand-primary', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-brand-text', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-brand-primary-invert', '#ffffff', '#062e6f');
  set('--dsw-alias-brand-primary-new-colorprimary-new-color', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-button-primary-fill', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-button-primary-hover', '#0a4db3', '#bcd3fb');
  set('--dsw-alias-button-primary-dimmed', '#0b57d033', '#a8c7fa40');
  set('--dsw-alias-button-info-fill', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-button-info-hover', '#0a4db3', '#bcd3fb');
  set('--dsw-alias-button-elevated-fill', '#ffffff', '#2d2f31');
  set('--dsw-alias-button-floating-fill', '#ffffff', '#2d2f31');
  set('--dsw-alias-button-floating-hover', '#e9eef6', '#333537');
  set('--dsw-alias-button-ghost-active-fill', '#0b57d00f', '#ffffff14');
  set('--dsw-alias-button-ghost-active-hover', '#0b57d01f', '#ffffff1f');
  set('--dsw-alias-button-ghost-active-border', '#0b57d0', '#9aa0a6');
  set('--dsw-alias-button-contrast-fill', '#e9eef6', '#333537');
  set('--dsw-alias-interactive-bg-hover', '#0000000a', '#ffffff0d');
  set('--dsw-alias-interactive-bg-hover-solid', '#e9eef6', '#2d2f31');
  set('--dsw-alias-interactive-bg-hover-accent', '#0b57d01a', '#a8c7fa1f');
  set('--dsw-alias-interactive-bg-active', '#0b57d029', '#a8c7fa33');
  set('--dsw-alias-interactive-bg-hover-danger', '#f25a5a1a', '#f28b821a');
  set('--dsw-alias-state-business-primary', '#0b57d0', '#a8c7fa');
  set('--dsw-alias-state-business-tertiary', '#d3e3fd', '#004a77');
  set('--dsw-alias-state-error-primary', '#d93025', '#f28b82');
  set('--dsw-alias-state-error-secondary', '#d93025', '#f28b82');
  set('--dsw-alias-state-success-primary', '#1e8e3e', '#81c995');
  set('--dsw-alias-state-success-secondary', '#1e8e3e', '#6dd58c');
  set('--dsw-alias-state-warn-label', '#b06000', '#fdd663');
  set('--dsw-alias-state-warn-primary', '#f9ab00', '#fdd663');
  set('--dsw-alias-state-warn-secondary', '#f9ab00', '#fdd663');
  set('--dsw-alias-markdown-code-block', '#f0f4f9', '#1e1f20');
  set('--dsw-alias-markdown-code-block-banner', '#e9eef6', '#282a2c');
  set('--dsw-alias-markdown-code-segment-selected', '#e9eef6', '#282a2c');
  set('--dsw-alias-markdown-code-segment-unselected', '#f0f4f9', '#1e1f20');
  set('--dsw-alias-markdown-inline-code', '#e9eef6', '#282a2c');
  set('--dsw-alias-markdown-citation', '#e9eef6', '#2d2f31');
  set('--dsw-alias-markdown-tag', '#e9eef6', '#282a2c');
  set('--dsw-alias-markdown-placeholder', '#dadce0', '#333537');
  set('--dsw-alias-scrollbar-bg-l1', '#dadce0', '#5f6368');
  set('--dsw-alias-scrollbar-bg-l2', '#c4c7c5', '#5f6368');
  set('--dsw-alias-scrollbar-hover-l1', '#bdc1c6', '#80868b');
  set('--dsw-alias-scrollbar-hover-l2', '#bdc1c6', '#80868b');
  set('--dsw-alias-toast-bg', '#3c4043', '#2d2f31');
  set('--dsw-alias-tooltip-bg', '#3c4043', '#2d2f31');
  set('--dsw-linear-gradient-think', 'linear-gradient(180deg, #ffffff 20.19%, #ffffff00 100%)', 'linear-gradient(180deg, #131314 20.19%, #13131400 100%)');
  set('--dsw-linear-think-select', 'linear-gradient(180deg, #f0f4f9 20.19%, #f0f4f900 100%)', 'linear-gradient(180deg, #1e1f20 20.19%, #1e1f2000 100%)');
  return T;
}

function buildBaseTokens() {
  var T = {};
  var same = function (name, value) { T[name] = { light: value, dark: value }; };
  same('--dsw-font-family', "'Google Sans Text','Google Sans',Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif");
  same('--dsl-terminal-radius', '16px');
  same('--dsl-read-radius', '16px');
  same('--dsl-diff-radius', '16px');
  same('--dsl-search-radius', '16px');
  same('--dsl-web-radius', '16px');
  same('--dsl-code-block-border-radius', '16px');
  return T;
}

function buildTypographyTokens() {
  var T = {};
  var same = function (name, value) { T[name] = { light: value, dark: value }; };
  same('--dsw-font-markdown-h1', '400 32px/40px var(--dsw-font-family)');
  same('--dsw-font-markdown-h2', '400 26px/34px var(--dsw-font-family)');
  same('--dsw-font-markdown-h3', '400 22px/30px var(--dsw-font-family)');
  same('--dsw-font-markdown-h4', '500 18px/26px var(--dsw-font-family)');
  same('--dsw-font-markdown-base', '400 16px/24px var(--dsw-font-family)');
  same('--dsw-font-markdown-base-strong', '600 16px/24px var(--dsw-font-family)');
  same('--dsw-font-markdown-base-italic', 'italic 400 16px/24px var(--dsw-font-family)');
  same('--dsw-font-markdown-base-strong-italic', 'italic 600 16px/24px var(--dsw-font-family)');
  same('--dsw-font-markdown-small', '400 14px/20px var(--dsw-font-family)');
  same('--dsw-font-markdown-small-strong', '600 14px/20px var(--dsw-font-family)');
  same('--dsw-font-markdown-small-italic', 'italic 400 14px/20px var(--dsw-font-family)');
  same('--dsw-font-markdown-small-strong-italic', 'italic 600 14px/20px var(--dsw-font-family)');
  same('--dsw-font-markdown-table', '400 15px/25px var(--dsw-font-family)');
  same('--dsw-font-markdown-table-head', '500 15px/25px var(--dsw-font-family)');
  same('--dsw-font-xl-24', '400 28px/36px var(--dsw-font-family)');
  same('--dsw-font-l-20', '400 22px/30px var(--dsw-font-family)');
  same('--dsw-font-m-18', '400 18px/26px var(--dsw-font-family)');
  same('--dsw-font-base-16', '400 16px/24px var(--dsw-font-family)');
  same('--dsw-font-base-strong-16', '500 16px/24px var(--dsw-font-family)');
  same('--ds-font-family-code', "'Google Sans Mono','Roboto Mono','JetBrains Mono','Cascadia Code','Consolas','Courier New',monospace");
  return T;
}

function installStyles() {
  if (document.querySelector('style[data-plugin-css="' + CSS_ID + '"]') !== null) return;
  var style = document.createElement('style');
  style.dataset.plugin = 'dsh-gemini-m3e-theme';
  style.dataset.pluginCss = CSS_ID;
  style.textContent = CSS_TEXT;
  document.head.appendChild(style);
}

function installInteractions() {
  if (typeof document === 'undefined' || !document.body) return null;
  var observers = [];

  var TRIGGER_SEL = 'button[class*="_7KE1Ra_trigger"],button[class*="Sh0Q9G_trigger"],button[class*="JObwrW_trigger"]';
  var PANEL_SEL = '[class*="_7KE1Ra_menu"],[class*="mufS8W_card"],[class*="_3e4SsG_menu"]';
  var PANEL_ITEM_SEL = '[class~="_7KE1Ra_option"],[class~="_7KE1Ra_cell"],[class~="mufS8W_row"],[class~="_3e4SsG_item"]';
  var PRIM_MENU_SEL = '[class*="_list_19372"],[class*="_submenu_19372"]';
  var PRIM_ITEM_SEL = '[class*="_item_19372"]';
  var FLIP_SEL = '[class*="_7KE1Ra_menu"],[class*="mufS8W_card"],[class*="_3e4SsG_menu"]';
  var SCROLLFADE_SEL = '[class*="_7KE1Ra_groups"],[class*="mufS8W_viewport"],[class*="_3e4SsG_viewport"]';
  var CLIP_SEL = '[class*="_7KE1Ra_groups"],[class*="mufS8W_viewport"],[class*="_3e4SsG_viewport"],[class*="_scrollable_19372"] [class*="_viewport_19372"]';
  var CLIP_INNER_SEL = '[class*="_7KE1Ra_groups"],[class*="mufS8W_viewport"],[class*="_3e4SsG_viewport"]';
  var RISE_SEL = '[class~="_7KE1Ra_groupTitle"],[class~="_7KE1Ra_option"],[class~="_7KE1Ra_cell"]';

  function clipBriefly(scroller) {
    clearTimeout(scroller.__gm3eClipT);
    scroller.style.animation = 'none';
    void scroller.offsetWidth;
    scroller.style.animation = 'gm3e-vp-clip .8s, gm3e-sb-in .5s cubic-bezier(.2,0,0,1) .8s both';
    scroller.__gm3eClipT = setTimeout(function () { scroller.style.animation = ''; }, 1400);
  }

  function staggerRise(menu) {
    var els = menu.querySelectorAll(RISE_SEL);
    var i = 0;
    for (var k = 0; k < els.length; k++) {
      var el = els[k];
      if (el.__gm3eDelay) continue;
      el.__gm3eDelay = true;
      el.style.animationDelay = Math.min(i * 0.04, 0.32) + 's';
      i++;
    }
  }

  function spawnRipple(host, x, y) {
    var rect = host.getBoundingClientRect();
    var isDark = document.body.hasAttribute('data-ds-dark-theme');
    var radius = Math.max(rect.width, rect.height) * 1.15;
    var el = document.createElement('span');
    el.className = 'gm3e-ripple';
    el.style.left = (x - rect.left - radius) + 'px';
    el.style.top = (y - rect.top - radius) + 'px';
    el.style.width = el.style.height = radius * 2 + 'px';
    el.style.background = isDark
      ? 'radial-gradient(circle, rgba(255,255,255,.2) 0%, rgba(255,255,255,0) 68%)'
      : 'radial-gradient(circle, rgba(0,0,0,.14) 0%, rgba(0,0,0,0) 68%)';
    host.appendChild(el);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('gm3e-ripple-run'); }); });
    setTimeout(function () { el.remove(); }, 700);
  }

  function onPointerDown(e) {
    var t = e.target;
    if (!t || typeof t.closest !== 'function') return;
    var trigger = t.closest(TRIGGER_SEL);
    if (trigger) { spawnRipple(trigger, e.clientX, e.clientY); return; }
    var panel = t.closest(PANEL_SEL);
    if (panel) {
      var hit = t.closest(PANEL_ITEM_SEL);
      if (hit) spawnRipple(panel, e.clientX, e.clientY);
      return;
    }
    var prim = t.closest(PRIM_MENU_SEL);
    if (prim && String(prim.className || '').indexOf('_compactList') === -1) {
      var item = t.closest(PRIM_ITEM_SEL);
      if (item) spawnRipple(item, e.clientX, e.clientY);
    }
  }

  function updateScroller(el) {
    var scrollable = el.scrollHeight > el.clientHeight + 16;
    if (el.__gm3eMask) {
      el.classList.toggle('gm3e-scrollfade', scrollable);
      el.classList.toggle('gm3e-fade-top', scrollable && el.scrollTop > 8);
      el.classList.toggle('gm3e-fade-bottom', scrollable && el.scrollTop + el.clientHeight < el.scrollHeight - 8);
    }
    if (scrollable && !el.__gm3eWasScrollable) clipBriefly(el);
    el.__gm3eWasScrollable = scrollable;
  }

  function onScroll(e) { updateScroller(e.currentTarget); }

  var refreshT = 0;
  function refreshScrollersSoon() {
    clearTimeout(refreshT);
    refreshT = setTimeout(function () {
      var scrollers = document.querySelectorAll(CLIP_SEL);
      for (var i = 0; i < scrollers.length; i++) updateScroller(scrollers[i]);
    }, 1000);
  }

  function attach() {
    var menus = document.querySelectorAll(FLIP_SEL);
    for (var i = 0; i < menus.length; i++) staggerRise(menus[i]);
    var fadeScs = document.querySelectorAll(SCROLLFADE_SEL);
    for (var f = 0; f < fadeScs.length; f++) fadeScs[f].__gm3eMask = true;
    var scrollers = document.querySelectorAll(CLIP_SEL);
    for (var j = 0; j < scrollers.length; j++) {
      var sc = scrollers[j];
      if (!sc.__gm3eClip) { sc.__gm3eClip = true; clipBriefly(sc); }
      if (!sc.__gm3eScrollWatch) {
        sc.__gm3eScrollWatch = true;
        sc.addEventListener('scroll', onScroll, { passive: true });
      }
      updateScroller(sc);
    }
    refreshScrollersSoon();
  }

  document.addEventListener('pointerdown', onPointerDown, true);
  var rootObs = new MutationObserver(attach);
  rootObs.observe(document.body, { childList: true, subtree: true });
  observers.push(rootObs);
  attach();

  return function cleanup() {
    document.removeEventListener('pointerdown', onPointerDown, true);
    for (var i = 0; i < observers.length; i++) observers[i].disconnect();
  };
}

var inject = ['theme'];

function apply(ctx) {
  installStyles();
  var cleanupInteractions = installInteractions();
  if (cleanupInteractions) ctx.effect(function () { return cleanupInteractions; }, 'dsh-gemini-m3e-theme: interactions');

  var FULL = Object.assign({}, buildColorTokens(), buildBaseTokens(), buildTypographyTokens());
  var activeLayer = ctx.theme.overrideTokens('dsh-gemini-m3e-theme', FULL);
  ctx.effect(function () { return function () { if (activeLayer) activeLayer(); }; }, 'dsh-gemini-m3e-theme: revert token layer');
}

exports.inject = inject;
exports.apply = apply;
return module.exports;
}});