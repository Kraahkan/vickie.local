var G5_Core=window.G5_Core||{},G5_Core_Animation=window.G5_Core_Animation||{};(function(a){'use strict';window.G5_Core=G5_Core;var t=a(window),n=a('body'),s=n.hasClass('gf-lazy-load'),o=n.hasClass('rtl'),r=navigator.userAgent.toLowerCase(),d=r.match(/(iphone|ipod|android|iemobile)/),c=r.match(/(iphone|ipod|ipad|android|iemobile)/),g=r.match(/(iphone|ipod|ipad)/),p=r.match(/(iemobile)/),h=0;G5_Core.util={init:function(){this.events(),this.pageTransition(),this.pageLoading(),this.topDrawerToggle(),this.backToTop(),this.magnificPopup(),this.tooltip()},tooltip:function(){a().tooltip&&!c&&(!n.hasClass('woocommerce-compare-page')&&a('[data-toggle="tooltip"]').each(function(){var u={container:a(this).parent()};a(this).closest('.gf-tooltip-wrap').length&&(u=a.extend({},u,a(this).closest('.gf-tooltip-wrap').data('tooltip-options'))),a(this).tooltip(u)}),a('.yith-wcwl-wishlistexistsbrowse > a,.yith-wcwl-add-button > a,.yith-wcwl-wishlistaddedbrowse > a, .compare','.woocommerce').each(function(){var u=a(this).text().trim(),m={title:u,container:a(this).parent()};a(this).closest('.gf-tooltip-wrap').length&&(m=a.extend({},m,a(this).closest('.gf-tooltip-wrap').data('tooltip-options'))),a(this).closest('.summary-product').length||a(this).tooltip(m)}))},events:function(){t.on('scroll',function(){var u=n.height();u!==h&&(h=u,'undefined'!=typeof Waypoint&&Waypoint.refreshAll())})},pageTransition:function(){if(n.hasClass('page-transitions')){var u=this;a('.animsition-link, a[href]:not([target="_blank"]):not([href^="#"]):not([href*="javascript"]):not([href*=".jpg"]):not([href*=".jpeg"]):not([href*=".gif"]):not([href*=".png"]):not([href*=".mov"]):not([href*=".swf"]):not([href*=".mp4"]):not([href*=".flv"]):not([href*=".avi"]):not([href*=".mp3"]):not([href^="mailto:"]):not([class*="no-animation"]):not([class*="prettyPhoto"]):not([class*="add_to_wishlist"]):not([class*="add_to_cart_button"]):not([class*="compare"])').on('click',function(f){if(0<a(f.target).closest(a('b.x-caret',this)).length||0<a(f.target).closest(a('b.menu-caret',this)).length)return void f.preventDefault();f.preventDefault();var y=a(this),v=y.attr('href');2===f.which||f.metaKey||f.shiftKey||-1!==navigator.platform.toUpperCase().indexOf('WIN')&&f.ctrlKey?window.open(v,'_blank'):u.fadePageOut(v)})}},pageLoading:function(){var u=this;a(window).on('load',function(){u.fadePageIn()})},fadePageIn:function(){if(n.hasClass('page-loading')){var m=a('.site-loading');m.animate({opacity:0,delay:200},1e3,'linear',function(){m.css('display','none')})}},fadePageOut:function(u){a('.site-loading').css('display','block').animate({opacity:1,delay:200},600,'linear'),a('html,body').animate({scrollTop:'0px'},800),setTimeout(function(){window.location=u},600)},topDrawerToggle:function(){a('.top-drawer-toggle').on('click',function(u){u.preventDefault();var m=a(this).closest('.top-drawer-wrap'),f=m.find('.top-drawer-inner'),y=m.find('i');f.is(':hidden')?y.attr('class','fa fa-minus'):y.attr('class','fa fa-plus'),f.slideToggle('slow')})},backToTop:function(){var u=a('.back-to-top');0<u.length&&(u.on('click',function(m){m.preventDefault(),a('html,body').animate({scrollTop:'0px'},800)}),t.on('scroll',function(){var f=t.scrollTop(),y=t.height()/2;f>y?u.addClass('in'):u.removeClass('in')}))},setPushState:function(u){var m=document.title;'function'==typeof window.history.pushState&&window.history.pushState(null,m,u)},magnificPopup:function(u){'undefined'==typeof u&&(u=n),a('[data-magnific]',u).each(function(){var m=a(this),y=a.extend({},{type:'image',mainClass:'mfp-zoom-in',midClick:!0,removalDelay:500,callbacks:{beforeOpen:function(){switch(this.st.type){case'image':this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim');break;case'iframe':this.st.iframe.markup=this.st.iframe.markup.replace('mfp-iframe-scaler','mfp-iframe-scaler mfp-with-anim');}},change:function(){var x=this;this.isOpen&&(this.wrap.removeClass('mfp-ready'),setTimeout(function(){x.wrap.addClass('mfp-ready')},10))}}},m.data('magnific-options'));if('undefined'!=typeof y.galleryId){var v=[],_=[],b=a('[data-gallery-id="'+y.galleryId+'"]');b.each(function(){var x=a(this).attr('href');0>_.indexOf(x)&&(_.push(x),v.push({src:x}))}),y.items=v,y.gallery={enabled:!0},y.callbacks.beforeOpen=function(){var x=b.index(this.st.el);switch(0<a(this.st.el).closest('.single-product-image-thumb').length&&(x=0),this.st.type){case'image':this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim');break;case'iframe':this.st.iframe.markup=this.st.iframe.markup.replace('mfp-iframe-scaler','mfp-iframe-scaler mfp-with-anim');}-1!==x&&this.goTo(x)}}m.magnificPopup(y)})},getAdminBarOffset:function(){var u=0,m=a('#wpadminbar');return 0<m.length&&'fixed'===m.css('position')&&(u=m.outerHeight()),u},getHeaderStickyOffset:function(){var u=0,m=a('.header-sticky');return 0<m.length&&!m.hasClass('header-hidden')&&(u=80),u},getScrollOffset:function(){var u=0;return u+=this.getAdminBarOffset(),u+=this.getHeaderStickyOffset(),n.hasClass('bordered')&&G5_Core.util.isDesktop()&&(u+=30),u},isDesktop:function(){return window.matchMedia('(min-width: '+(991+1)+'px)').matches}},G5_Core.loading_content={init:function(){this.initLoading()},initLoading:function(){a('[data-items-wrapper]').each(function(){a(this).prepend('<div class="gsf-content-loading"></div>')})},showLoading:function(u,m,f){var y=u.find('[data-items-container]'),v=u.outerHeight(),_=u.children('.gsf-content-loading'),b=m.settings.itemSelector,x='undefined'==typeof m.settings.post_animation?'none':m.settings.post_animation,w=y.hasClass('owl-carousel'),C=0<a(f).closest('[data-items-paging]').length?'paging':0<a(f).closest('[data-items-cate]').length?'cat':0<a(f).closest('[data-items-tabs]').length?'tab':'',k=0<a(f).closest('[data-items-paging]').length&&(m.settings.post_paging===G5_Core.pagination_ajax.paging.loadMore||m.settings.post_paging===G5_Core.pagination_ajax.paging.infiniteScroll);if(w||'cat'==C||'tab'==C||!k){var S=u.offset().top-G5_Core.util.getScrollOffset(),j=a('.header-sticky');j.length&&(S-=80);var T=document.documentElement.scrollTop||document.body.scrollTop,P=T-S,q=Math.abs(P)/2;800>q&&(q=800),0===a(f).closest('.x-mega-sub-menu').length&&a('html,body').animate({scrollTop:S},q,'easeInOutCubic')}if(!k){var O=y.offset().top-u.offset().top;_.css('top',O+100),u.css('height',v).addClass('loading'),'none'===x?y.find(b).animate({opacity:0},500,'easeOutQuad'):y.find('.gf_animate_when_almost_visible').addClass('zoom-reverse')}else if(m.settings.post_paging===G5_Core.pagination_ajax.paging.loadMore){var z=a(f).ladda();z.ladda('start')}else O-=100,_.css('top',O),u.css('height',v).addClass('loading')},hideLoading:function(u){setTimeout(function(){u.removeClass('loading').css('height','')},500)}},G5_Core.owlCarousel={timeOutRefresh:null,init:function(u){this;'undefined'==typeof u&&(u=n),a('.owl-carousel:not(.manual):not(.owl-loaded)',u).each(function(){var f=a(this);f.imagesLoaded({background:!0},function(){var v=a.extend({},{items:4,nav:!1,navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],dots:!1,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:o,lazyLoad:s,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,autoplayHoverPause:!0},f.data('owl-options'));f.is('.gsf-slider-container')&&f.children().each(function(){a(this).hasClass('gf-slider-item')||a(this).wrap('<div class=\'gf-slider-item\'></div>')}),f.on('initialized.owl.carousel',function(_){var b=_.target;a(b).trigger('owlInitialized')}),f.on('refreshed.owl.carousel,initialized.owl.carousel',function(_){setTimeout(function(){if(a(_.target).hasClass('carousel-3d')){var b=a(_.target).find('.owl-item.active.center'),x=a(_.target).find('.owl-nav:not(.disabled)'),w=a(_.target).find('.owl-dots:not(.disabled)');if(b.length){var C=0.1*b.height(),k=C;a(_.target).hasClass('nav-top-right')&&x.length&&(k+=x.height(),x.css({top:0})),x.length&&(a(_.target).hasClass('nav-bottom-left')||a(_.target).hasClass('nav-bottom-center')||a(_.target).hasClass('nav-bottom-right'))||w.length?x.length&&(a(_.target).hasClass('nav-bottom-left')||a(_.target).hasClass('nav-bottom-center')||a(_.target).hasClass('nav-bottom-right'))?(x.css({'padding-top':C}),a(_.target).css({'padding-top':k})):w.length&&(w.css({'padding-top':C}),a(_.target).css({'padding-top':k})):a(_.target).css({'padding-top':k,'padding-bottom':C})}else a(_.target).css({'padding-top':'','padding-bottom':''})}},1)}),f.owlCarousel(v)})})}},G5_Core.lazyLoad={init:function(u){'undefined'==typeof u&&(u=n),a('.gf-lazy',u).each(function(){var m=a(this);if(!m.hasClass('owl-lazy')){var y=a.extend({},{effect:'fadeIn',threshold:300,event:'scroll mouseover click'},m.data('lazyLoad-options'));m.lazyload(y),m.is('img')&&m.on('appear',function(){var v=m.closest('.isotope');v.length&&(null!=v[0].istopoTimeout&&clearTimeout(v[0].istopoTimeout),v[0].istopoTimeout=setTimeout(function(){G5_Core.isotope.layout(v)},1e3))})}})}},G5_Core.owlCarouselSync={init:function(){var u=a('.gallery-layout-thumbnail');0<u.length&&this.gallery_sync(u)},gallery_sync:function(u){var f=u.find('.gallery-main'),y=u.find('.gallery-thumb');f.owlCarousel({items:1,nav:!1,dots:!1,loop:!1,rtl:o,lazyLoad:s}).on('changed.owl.carousel',function(b){var x=b.item.index;y.find('.owl-item').removeClass('current').eq(x).addClass('current');var w=y.find('.owl-item.active').length-1,C=y.find('.owl-item.active').first().index(),k=y.find('.owl-item.active').last().index();x>k&&y.data('owl.carousel').to(x,100,!0),x<C&&y.data('owl.carousel').to(x-w,100,!0)});var _=a.extend({},{items:4,nav:!1,dots:!1,rtl:o,lazyLoad:s,margin:10,responsive:{992:{items:4},768:{items:3},0:{items:2}}},y.data('owl-options'));y.on('initialized.owl.carousel',function(){y.find('.owl-item').eq(0).addClass('current')}).owlCarousel(_),y.on('click','.owl-item',function(b){if(b.preventDefault(),!a(this).hasClass('current')){var x=a(this).index();f.data('owl.carousel').to(x,300,!0)}}),a(document).on('reset_data',function(){f.data('owl.carousel').to(0,300,!0)})}},G5_Core.isotope={config_default:{isOriginLeft:!o},init:function(u){'undefined'==typeof u&&(u=n);var m=this;a('.isotope',u).each(function(){var f=a(this);f.imagesLoaded({background:!0},function(){var y=a.extend({},m.config_default,f.data('isotope-options')),v=f.attr('class').match(/gf-gutter-(\d{0,2})/),_=0;null!==v&&(_=parseInt(v[1])),'undefined'!=typeof y.masonry&&'undefined'!=typeof y.masonry.columnWidth&&'.gsf-col-base'===y.masonry.columnWidth&&f.append('<article class="gsf-col-base"></article>'),'undefined'!=typeof y.masonry&&'undefined'!=typeof y.masonry.columnWidth&&'undefined'!=typeof y.metro&&(y=a.extend({},y,{masonry:{columnWidth:m.metro_width(f,_)},resize:!1})),f.isotope(y),f.on('refreshed.owl.carousel,gf_process_quote_done',function(b){m.layout(a(b.currentTarget))}),f.on('changed.owl.carousel',function(b){'undefined'!=typeof a(b.target).data('owl.carousel')&&a(b.target).data('owl.carousel').options.autoHeight&&m.layout(a(b.currentTarget))}),m.layout(f)})}),t.on('resize',function(){a('.isotope',u).each(function(){var f=a(this),y=a.extend({},m.config_default,f.data('isotope-options')),v=f.attr('class').match(/gf-gutter-(\d{0,2})/),_=-1;null!==v&&(_=parseInt(v[1])),'undefined'!=typeof y.masonry&&'undefined'!=typeof y.masonry.columnWidth&&'undefined'!=typeof y.metro&&(y=a.extend({},y,{masonry:{columnWidth:m.metro_width(f,_)},resize:!1}),f.isotope(y)),m.layout(f)})})},layout:function(u){u.data('isotope')&&u.isotope('layout'),setTimeout(function(){u.data('isotope')&&u.isotope('layout')},500),setTimeout(function(){u.data('isotope')&&u.isotope('layout')},1e3)},metro_width:function(u,m){var f=this,y=u.data('isotope-options'),v=u.closest('[data-isotope-wrapper]'),_=1,b=u.data('image-size-base'),x=1;b&&(b=b.split('x'),x=parseInt(b[1],10)/parseInt(b[0],10),isNaN(x)&&(x=1)),u.find(y.itemSelector).each(function(){var k=a(this),S=f.get_multiplier_width(k),j=1;0!=S&&(j=60/S),_<j&&(_=j)});var w=(v.width()-m*(_-1))/_,C=Math.floor(w*x);return u.find(y.itemSelector).each(function(){var k=a(this),S=k.find(' > [data-ratio]'),j=S.data('ratio');if(j){j=j.split('x');var T=j[1],P=C*T+Math.ceil(T-1)*m,q=S.find('.entry-thumbnail-overlay');q.addClass('thumbnail-size-none').css('height',P)}}),y.masonry.columnWidth},get_multiplier_width:function(u){var m=60;if(u.is('[class]')&&!u.hasClass('gsf-col-base')){var f=u.attr('class'),y=f.match(/col-(\d{1,2})/),v=f.match(/col-sm-(\d{1,2})/),_=f.match(/col-md-(\d{1,2})/),b=f.match(/col-lg-(\d{1,2})/),x=f.match(/col-xl-(\d{1,2})/);f.match(/col-12-5/)?m=12:null!==y&&(m=5*y[1]),window.matchMedia('(min-width: 576px)').matches&&(f.match(/col-sm-12-5/)?m=12:null!==v&&(m=5*v[1])),window.matchMedia('(min-width: 768px)').matches&&(f.match(/col-md-12-5/)?m=12:null!==_&&(m=5*_[1])),window.matchMedia('(min-width: 992px)').matches&&(f.match(/col-lg-12-5/)?m=12:null!==b&&(m=5*b[1])),window.matchMedia('(min-width: 1200px)').matches&&(f.match(/col-xl-12-5/)?m=12:null!==x&&(m=5*x[1]))}return m}},G5_Core_Animation=function(u,m){'undefined'!=typeof u&&(u=n),this.$wrapper=u,this.init(m)},G5_Core_Animation.prototype={itemQueue:[],delay:100,queueTimer:null,init:function(u){var m=this;m.itemQueue=[],m.queueTimer=null,'undefined'!=typeof u&&(m.delay=u),setTimeout(function(){m.registerAnimation()},200)},registerAnimation:function(){var u=this;a('.gf_animate_when_almost_visible:not(.wpb_start_animation)',u.$wrapper).each(function(m,f){a(f).waypoint(function(){var y=a(this.element).offset().top,v=a(window).scrollTop()+G5_Core.util.getScrollOffset();y<v?a(this.element).addClass('wpb_start_animation animated'):(u.itemQueue.push(this.element),u.processItemQueue()),this.destroy()},{offset:'85%'})})},processItemQueue:function(){var u=this;u.queueTimer||(u.queueTimer=window.setInterval(function(){u.itemQueue.length?(a(u.itemQueue.shift()).addClass('wpb_start_animation animated'),u.processItemQueue()):(window.clearInterval(u.queueTimer),u.queueTimer=null)},u.delay))}},G5_Core.search_popup={init:function(){this.showPopup()},showPopup:function(){a('.search-popup-link').magnificPopup({type:'inline',closeOnBgClick:!1,closeBtnInside:!1,alignTop:!0,mainClass:'mfp-move-from-top',focus:'.search-popup-field',midClick:!0,removalDelay:700})}},G5_Core.search_ajax={timeOutSearch:null,xhrSearchAjax:null,init:function(){a('[data-search-ajax="true"]').each(function(){var u=a(this),m=u.find('[data-search-ajax-control="input"]'),f=u.find('[data-search-ajax-control="result"]'),y=u.find('[data-search-ajax-control="icon"]');0==m.length||0==f.length||(f.perfectScrollbar({wheelSpeed:0.5,suppressScrollX:!0}),m.on('keyup',function(v){if(!(v.altKey||v.ctrlKey||v.shiftKey||v.metaKey)){if(-1==['Control','Alt','Shift'].indexOf(v.key))switch(v.which){case 27:f.removeClass('in'),f.html('');break;case 38:case 40:case 13:break;default:clearTimeout(G5_Core.search_ajax.timeOutSearch),G5_Core.search_ajax.timeOutSearch=setTimeout(G5_Core.search_ajax.searchAjax,500,u,m,y,f);}}}))})},searchAjax:function(u,m,f,y){var v=m.val();if(3>v.length)return y.removeClass('in'),void y.html('');0<f.length&&(f.addClass('fa-spinner fa-spin'),f.removeClass('fa-search')),G5_Core.search_ajax.xhrSearchAjax&&G5_Core.search_ajax.xhrSearchAjax.abort();var _=u.data('search-ajax-action'),b=u.data('search-ajax-nonce');G5_Core.search_ajax.xhrSearchAjax=a.ajax({type:'POST',data:{action:_,keyword:v,nonce:b},url:g5plus_variable.ajax_url,dataType:'html',success:function(w){0<f.length&&(f.removeClass('fa-spinner fa-spin'),f.addClass('fa-search')),y.html(w),y.perfectScrollbar('update'),y.addClass('in')},error:function(w){'abort'==w.statusText||0<f.length&&(f.removeClass('fa-spinner fa-spin'),f.addClass('fa-search'))}})}},G5_Core.off_canvas={init:function(){var u=this;a('[data-off-canvas="true"]').each(function(){var m=a(this),f=m.data('off-canvas-target'),y=a(f).children('.canvas-sidebar-inner'),v=m.data('off-canvas-position'),_=a('#gf-wrapper'),b=a(f).width(),x=a(f).css('padding-top').replace('px',''),w=a(window).height()-G5_Core.util.getAdminBarOffset()-x;'#canvas-menu-wrapper'===f&&(b-=100),a(f).addClass(v),y.css('max-height',w).perfectScrollbar({wheelSpeed:0.5,suppressScrollX:!0}),a(f).css('top',G5_Core.util.getAdminBarOffset()),m.off('click').on('click',function(){a(f).removeClass('left').removeClass('right').addClass(v),m.hasClass('in')||a(f).hasClass('in')?(m.removeClass('in'),n.removeClass('off-canvas-in'),a(f).removeClass('in'),_.css({'margin-left':'','margin-right':''}),setTimeout(function(){n.removeClass('off-canvas-'+v)},1e3)):(n.addClass('off-canvas-'+v),setTimeout(function(){m.addClass('in'),n.addClass('off-canvas-in'),a(f).addClass('in'),n.hasClass('boxed')||n.hasClass('framed')||n.hasClass('bordered')||(o?'left'===v?_.css({'margin-right':b}):_.css({'margin-left':b,'margin-right':-b}):'left'===v?_.css({'margin-left':b,'margin-right':-b}):_.css({'margin-left':-b,'margin-right':b}))},100))})}),a('.canvas-overlay, .close-canvas').off('click').on('click',function(){u.closeAll()}),a(window).on('resize',function(){a('[data-off-canvas="true"]').each(function(){var m=a(this),f=m.data('off-canvas-target'),y=a(f).children('.canvas-sidebar-inner'),v=a(window).height()-G5_Core.util.getAdminBarOffset();a(f).css({top:G5_Core.util.getAdminBarOffset()}),y.css('max-height',v)})})},closeAll:function(){a('[data-off-canvas="true"]').each(function(){var u=a(this),m=u.data('off-canvas-target'),f=a('#gf-wrapper');(u.hasClass('in')||a(m).hasClass('in'))&&(u.removeClass('in'),n.removeClass('off-canvas-in'),a(m).removeClass('in'),f.css({'margin-left':'','margin-right':''}),setTimeout(function(){n.removeClass('off-canvas-right').removeClass('off-canvas-left')},1e3))})}},G5_Core.cache={cache:{},addCache:function(u,m,f){'undefined'==typeof this.cache[f]&&(this.cache[f]={});'undefined'!=typeof this.cache[f][u]||(this.cache[f][u]=m)},getCache:function(u,m){return'undefined'!=typeof this.cache[m]&&'undefined'!=typeof this.cache[m][u]?this.cache[m][u]:''}},G5_Core.pagination_ajax={ajax:!1,prefix:'gf_ajax_paginate_',timeOutLoadPost:null,paging:{pagination:'pagination',paginationAjax:'pagination-ajax',loadMore:'load-more',nextPrev:'next-prev',infiniteScroll:'infinite-scroll'},init:function(){this.addCache(),this.events()},addCache:function(){var u=this;a('[data-items-paging="pagination-ajax"],[data-items-paging="next-prev"],[data-items-cate]').each(function(){var m=a(this).data('id'),f=u.getVariable(m);if(''!==f){var y=f.settings.isMainQuery&&a(this).closest('#wrapper-content').length?a(this).closest('#wrapper-content'):a(this).closest('[data-items-wrapper]'),v=y[0].outerHTML,_=y.find('[data-items-cate] > li.active a'),b='undefined'==typeof f.query.paged?1:f.query.paged,x=0<_.length?parseInt(_.data('id'),10):-1,w=x+'-'+b;f.settings.isMainQuery&&(w=window.location.href),G5_Core.cache.addCache(w,v,m)}})},events:function(){var u=this;a(document).on('click','[data-items-paging="pagination-ajax"] > a,[data-items-paging="load-more"] > a,[data-items-paging="next-prev"] > a,[data-items-paging="infinite-scroll"] > a',function(m){m.preventDefault();var f=a(this),y=f.closest('[data-items-paging]'),v=y.data('id');u.loadPosts(v,this)}),0<a('[data-items-paging="infinite-scroll"]').length&&t.on('scroll',function(){a('[data-items-paging="infinite-scroll"]').each(function(){var f=a(this);if(!(0===f.length||u.ajax)&&t.scrollTop()+t.height()>f.offset().top){var y=a('> a',f);y.trigger('click')}})}),a(document).on('click','[data-items-cate] li:not(.dropdown) > a',function(m){m.preventDefault();var f=this,y=a(this).closest('[data-items-cate]').data('id');u.loadPosts(y,f)}),a(document).on('click','[data-items-tabs] li:not(.dropdown) > a',function(m){m.preventDefault();var f=a(this),y=f.data('id');u.loadPosts(y,this)})},getVariable:function(u){var m=this.prefix+u;return'undefined'==typeof window[m]?'':window[m]},loadPosts:function(u,m){if(!(0===a(m).closest('.gf-attr-filter-content').length&&(a(m).hasClass('active')||a(m).hasClass('disable')||a(m).parent().hasClass('active')||a(m).hasClass('dropdown-toggle')))){var f=G5_Core.pagination_ajax;if(!f.ajax){var y=f.getVariable(u);if(''!==y){var v=0<a(m).closest('[data-items-paging]').length?'paging':0<a(m).closest('[data-items-cate]').length?'cat':0<a(m).closest('[data-items-tabs]').length?'tab':'',_='tab'==v?a(m).closest('[data-items-wrapper]'):a('[data-items-wrapper="'+u+'"]'),b=_.find('[data-items-cate] > li.active a'),x=1,w=0<b.length?parseInt(b.data('id'),10):-1,C='',k='undefined'==typeof y.settings.taxonomy?'category':y.settings.taxonomy;if(G5_Core.loading_content.showLoading(_,y,m),'paging'==v){var S='undefined'==typeof y.settings.post_paging?f.paging.pagination:y.settings.post_paging,j=f.getCurrentPage(a(m),S);x=j.paged,y.settings.currentPage=j,(S===f.paging.loadMore||S===f.paging.infiniteScroll)&&(y.query.index=_.find(y.settings.itemSelector).not('.gsf-col-base').length),'undefined'!=typeof y.settings.cat&&''!==y.settings.cat&&('undefined'==typeof y.settings.current_cat||-1===y.settings.current_cat)&&(delete y.query.gf_cat,'post'===y.settings.post_type?(delete y.query.category_name,delete y.query.cat):(delete y.query.term,delete y.query[k],delete y.query.taxonomy,y.query.post_type=y.settings.post_type))}else'cat'==v?(j=f.getCurrentPage(a(m),''),y.settings.currentPage=j,x=1,w=parseInt(a(m).data('id'),10),C=a(m).data('name'),0<w?(y.query.gf_cat=w,y.settings.current_cat=w,delete y.query.tax_query,delete y.query.s,delete y.query.search_terms_count,delete y.query.search_terms,'post'===y.settings.post_type?(y.query.category_name=C,y.query.cat=w):(y.query[k]=C,y.query.term=C,y.query.taxonomy=k),delete y.query.post_type):(delete y.query.gf_cat,y.settings.current_cat=-1,'post'===y.settings.post_type?(delete y.query.category_name,delete y.query.cat):(delete y.query.term,delete y.query[k],delete y.query.taxonomy,y.query.post_type=y.settings.post_type))):(delete y.query.gf_cat,'post'===y.settings.post_type?(delete y.query.category_name,delete y.query.cat):(delete y.query.term,delete y.query[k],delete y.query.taxonomy,y.query.post_type=y.settings.post_type));''==v&&(j=f.getCurrentPage(a(m),''),y.settings.currentPage=j,delete y.settings.current_cat);var T=w+'-'+x;y.settings.isMainQuery&&(T=a(m).attr('href'));var P=G5_Core.cache.getCache(T,u);if(''!==P)f.ajax=!0,f.onSuccess(P,y,m,v,_),f.ajax=!1;else{var q=g5plus_variable.ajax_url;y.settings.isMainQuery&&(q=a(m).attr('href')),y.action='pagination_ajax',y.query.paged=x,y.settings.settingId=u,f.ajax=a.ajax({type:'POST',data:y,url:q,dataType:'text',success:function(O){G5_Core.cache.addCache(T,O,u),f.onSuccess(O,y,m,v,_),f.ajax=!1},error:function(){G5_Core.loading_content.hideLoading(_),f.ajax=!1}})}}}}},onSuccess:function(u,m,f,y,v){var _=this,b=v.find('[data-items-container]'),x=b.hasClass('owl-carousel');!0===x||'cat'===y||m.settings.post_paging===_.paging.paginationAjax||m.settings.post_paging===_.paging.nextPrev||'tab'===y?('cat'==y&&(a(f).closest('[data-items-cate]').find('li').removeClass('active'),a(f).closest('li').addClass('active'),a(f).closest('.dropdown').addClass('active')),'tab'==y&&(a(f).closest('[data-items-tabs]').find('li').removeClass('active'),a(f).closest('li').addClass('active'),a(f).closest('.dropdown').addClass('active')),_.updatePosts(u,m,f,v)):_.updatePosts(u,m,f,v)},updatePosts:function(u,m,f,y){var v=this,_=y.find('[data-items-container]'),b=y.find('[data-items-paging]'),x=a(u),w=m.settings.itemSelector,C=m.settings.isMainQuery&&x.find('[data-archive-wrapper]').length?x.find('[data-archive-wrapper]'):x,k=C.find(w),S=C.find('[data-items-paging]'),j='undefined'==typeof m.settings.post_animation?'none':m.settings.post_animation,T=0<a(f).closest('[data-items-paging]').length&&(m.settings.post_paging===G5_Core.pagination_ajax.paging.loadMore||m.settings.post_paging===G5_Core.pagination_ajax.paging.infiniteScroll),P=_.hasClass('isotope'),q=_.hasClass('owl-carousel'),O=0;'none'===j&&!1===q&&k.css({opacity:0}),T||(O=500,'none'===j?_.find(w).animate({opacity:0},500,'easeOutQuad'):_.find('.gf_animate_when_almost_visible').addClass('zoom-reverse'),'undefined'!=typeof m.settings.isMainQuery&&!0===m.settings.isMainQuery&&G5_Core.util.setPushState(m.settings.currentPage.url)),setTimeout(function(){if(G5_Core.loading_content.hideLoading(y),q||(T?_.append(k):_.html(k)),P){var z=_.data('isotope-options');'undefined'!=typeof z&&(T?_.isotope('appended',k):('undefined'!=typeof z.masonry&&'undefined'!=typeof z.masonry.columnWidth&&'.gsf-col-base'===z.masonry.columnWidth&&_.append('<article class="gsf-col-base"></article>'),_.isotope('reloadItems').isotope()),G5_Core.isotope.layout(_),'undefined'!=typeof z.masonry&&'undefined'!=typeof z.masonry.columnWidth&&'.gsf-col-base'===z.masonry.columnWidth&&a(window).trigger('resize'))}if(q){var M=_.data('owl.carousel'),D=M._items,A=D.length+1,L=300;if('none'!==j&&(L=0),!T){for(var H=D.length-1;0<=H;H--)M.remove(H);A=0}k.each(function(){M.add(a(this))}),M.refresh(),M.to(A,L),'none'===j||T||new G5_Core_Animation(y,100)}else'none'===j?k.animate({opacity:1},500,'easeInQuad'):new G5_Core_Animation(y);0<b.length&&b.remove(),y.append(S),y.imagesLoaded({background:!0},function(){G5_Core.owlCarousel.init(y),G5_Core.util.magnificPopup(y),G5_Core.lazyLoad.init(y),y.trigger('gf_pagination_ajax_success',[m,x,f])})},O)},getCurrentPage:function(u,m){var f=this,y=u.attr('href'),v=1;return m===f.paging.paginationAjax?/[\?&amp;]paged=\d+/gi.test(y)?(v=/[\?&amp;]paged=\d+/gi.exec(y)[0],v=parseInt(/\d+/gi.exec(v)[0],10)):/page\/\d+/gi.test(y)&&(v=/page\/\d+/gi.exec(y)[0],v=parseInt(/\d+/gi.exec(v)[0],10)):(m===f.paging.infiniteScroll||m===f.paging.nextPrev||m===f.paging.loadMore)&&(v=parseInt(u.data('paged'),10)),{paged:v,url:y}},updatePageTitle:function(u,m,f){var y=0<a(f).closest('[data-items-paging]').length&&(u.settings.post_paging===G5_Core.pagination_ajax.paging.loadMore||u.settings.post_paging===G5_Core.pagination_ajax.paging.infiniteScroll),v=a('.gf-page-title');if(0<v.length&&!y&&'undefined'!=typeof u.settings.isMainQuery&&!0===u.settings.isMainQuery){var _=m.find('.gf-page-title');0<_.length&&(v.replaceWith(_.prop('outerHTML')),!_.hasClass('gf-page-title-default')&&'function'==typeof window.vc_js&&vc_js(),n.trigger('gf_pagination_ajax_before_update_page_title',[u,m,f]))}},updateSideBar:function(u,m,f){var y=0<a(f).closest('[data-items-paging]').length&&(u.settings.post_paging===G5_Core.pagination_ajax.paging.loadMore||u.settings.post_paging===G5_Core.pagination_ajax.paging.infiniteScroll),v=a('.primary-sidebar');if(0<v.length&&!y&&'undefined'!=typeof u.settings.isMainQuery&&!0===u.settings.isMainQuery){var _=m.find('.primary-sidebar');0<_.length&&(v.replaceWith(_.prop('outerHTML')),n.trigger('gf_pagination_ajax_before_update_sidebar',[u,m,f]),G5_Core.sticky.init())}}},G5_Core.blog={init:function(){this.updateAjaxPosts(),this.events(),this.processThumbnail(),this.singleThumbnail(),this.alignFull(),a(window).on('resize',function(){G5_Core.blog.alignFull()})},events:function(){var u=this,m=null;a(window).on('resize',function(){null!=m&&clearTimeout(m),m=setTimeout(function(){u.processThumbnail()},200)})},updateAjaxPosts:function(){var u=this;n.on('gf_pagination_ajax_success',function(m,f,y,v){'post'===f.settings.post_type&&(a(m.target).imagesLoaded({background:!0},function(){u.processThumbnail(a(m.target)),a(m.target).trigger('gf_update_ajax_post',[f,y])}),G5_Core.pagination_ajax.updatePageTitle(f,y,v),G5_Core.pagination_ajax.updateSideBar(f,y,v))})},processThumbnail:function(u){'undefined'==typeof u&&(u=n),a('.entry-thumb-wrap',u).each(function(){320>=a(this).width()?a(this).addClass('thumb-small'):a(this).removeClass('thumb-small')})},singleThumbnail:function(){a('body.single-post').find('.entry-thumb-single').length?a('body').addClass('has-post-thumbnail'):a('body').addClass('no-post-thumbnail')},alignFull:function(){var u=a(document).width(),m=(u-770)/2;G5_Core.util.isDesktop()?a('body.single-post.no-sidebar:not(.used-vc) .gf-entry-content > .alignfull').css({'margin-left':-m+'px','margin-right':-m+'px'}):a('body.single-post.no-sidebar:not(.used-vc) .gf-entry-content > .alignfull').css({'margin-left':'','margin-right':''})}},G5_Core.custom_vc={init:function(){setTimeout(this.wayPoints,500),this.initVCTab()},wayPoints:function(){a('.wpb_animate_when_almost_visible:not(.wpb_start_animation)').waypoint(function(){a(this.element).addClass('wpb_start_animation animated'),this.destroy()},{offset:'85%'}),a('.vc_progress_bar').waypoint(function(){a(this.element).find('.vc_single_bar').each(function(u){var m=a(this),f=m.find('.vc_bar'),y=f.data('percentage-value');setTimeout(function(){f.css({width:y+'%'})},200*u)}),this.destroy()},{offset:'85%'})},initVCTab:function(){var u=0;a('a','.vc_tta-tabs ul.vc_tta-tabs-list').off('click').on('click',function(m){if(a(this).parent().hasClass('vc_active')&&(u=1),m.preventDefault(),0==u){u=1;var f=a(this).parent().parent(),y=a(this).closest('.vc_general'),v=a(a(this).attr('href'),y),_='',b='';y.css('height',y.outerHeight()),'undefined'!=typeof f&&(a('li',f).removeClass('vc_active'),a(this).parent().addClass('vc_active'),a('li a',f).each(function(){_=a(this).attr('href'),0<a(_+'.vc_active',y).length&&(b=a(_+'.vc_active',y))}),b.fadeOut(400,function(){b.removeClass('vc_active'),b.fadeIn(),v.fadeIn(0,function(){v.addClass('vc_active'),u=0,v.trigger('mouseover')})})),setTimeout(function(){y.css('height','auto')},1500)}else u=0;return!1})}},G5_Core.widget={init:function(){this.calendar(),this.canvas()},calendar:function(){a('.widget.widget_calendar table tbody td a').each(function(){a(this).parent().addClass('active')})},canvas:function(){var u=a('.gf-sidebar-canvas'),m=u.find('.primary-sidebar-inner');if(0!==u.length){var f=a('#gf-wrapper'),y=f.attr('class');m.on('scroll',function(){a(window).trigger('scroll')}),G5_Core.util.isDesktop()||(u.css({opacity:0,visibility:'hidden'}),u.addClass(y),setTimeout(function(){u.css({opacity:'',visibility:''})},1e3)),a(window).on('resize',function(){G5_Core.util.isDesktop()?u.removeClass(y):(u.css({opacity:0,visibility:'hidden'}),u.addClass(y),setTimeout(function(){u.css({opacity:'',visibility:''})},1e3))}),a('.gf-sidebar-toggle').on('click',function(){a(this).closest('.gf-sidebar-canvas').toggleClass('in')})}}},G5_Core.sticky={init:function(){this.initSticky(),setTimeout(function(){G5_Core.sticky.initSticky()},1e3),this.responsive()},initSticky:function(u){if(a.fn.hcSticky){'undefined'==typeof u&&(u=n);var m=G5_Core.util.getScrollOffset(),f={top:m};n.hasClass('bordered')&&G5_Core.util.isDesktop()&&(f={top:m,bottom:30}),G5_Core.util.isDesktop()&&a('.gf-sticky',u).each(function(){var y=a(this);if(y.data('hcSticky'))y.hcSticky('reinit');else{var v=a.extend({},f,y.data('sticky-options'));y.hcSticky(v)}})}},responsive:function(){n.on('resized.hcSticky',function(u,m){var f=a(m);G5_Core.util.isDesktop()||(f.data('hcSticky')&&f.hcSticky('destroy'),f.removeAttr('style'))})}},G5_Core.header={init:function(){this.events(),this.sticky(),this.retinaLogo(),this.adminBar(),this.vertical(),this.navSpacing(),setTimeout(function(){G5_Core.header.navSpacing()},500)},events:function(){var u=this,m=null,f=a('#popup-canvas-menu');f.length&&(f.find('a[href="#"]').on('click',function(y){y.preventDefault()}),f.off('click').on('click','#main-menu > .menu-item-has-children > a',function(y){y.preventDefault(),0===a(this).closest('.menu-item-has-children').find('.sub-menu-active').length&&f.find('.sub-menu-active').removeClass('sub-menu-active').slideUp('300'),a(this).parent().find('.sub-menu').addClass('sub-menu-active').slideToggle('500',function(){f.find('.primary-menu').perfectScrollbar('update')})}),a(document).on('keyup',function(y){27===y.keyCode&&(f.removeClass('show'),f.find('.sub-menu').slideUp('500'))})),t.on('resize',function(){null!=m&&clearTimeout(m),m=setTimeout(function(){u.navSpacing()},100),u.adminBar(),a('.header-sticky').each(function(){var y=a(this);n.hasClass('bordered')&&u.isDesktop()&&y.css('width',n.width()-120)})}),a('.gf-menu-canvas').magnificPopup({type:'inline',closeOnBgClick:!1,closeBtnInside:!1,alignTop:!0,mainClass:'mfp-move-from-top gsf-menu-popup',midClick:!0,removalDelay:700})},isDesktop:function(){var u=991,m=a('header.main-header');return m.length&&(u=parseInt(m.data('responsive-breakpoint'),10)),window.matchMedia('(min-width: '+(u+1)+'px)').matches},navSpacing:function(){var u=this,m=a('header.main-header');if(0!==m.length){var f={'header-1':{'header.main-header .main-menu':'>li'},'header-2':{'header.main-header .main-menu':'>li'},'header-3':{'header.main-header .main-menu':'>li'},'header-4':{'header.main-header .main-menu':'>li'},'header-5':{'header.main-header .main-menu':'>li'},'header-6':{'header.main-header .main-menu':'>li'}},y=m.data('layout');if('undefined'!=typeof f[y]){var v=0,_=0,b=0,x=0,w=m.data('navigation');for(var C in w||(w=30),f[y])a(C).each(function(){_=a(this).width()-1,v=0,b=0,o?a(f[y][C],this).css('margin-right',''):a(f[y][C],this).css('margin-left',''),a(f[y][C],this).each(function(){v+=a(this).width(),b++}),1<b&&(b--,v+b*w>_&&(x=Math.floor((_-v)/b),10>x&&(x=10),o?a(f[y][C],this).not(':first').css('margin-right',x+'px'):a(f[y][C],this).not(':first').css('margin-left',x+'px')))})}}},sticky:function(){var u=this;a('.header-sticky').each(function(){var f=a(this),y=f.closest('header'),v=y.find('.primary-menu');if(!(a(document).outerHeight()-f.outerHeight()<=t.outerHeight())){f.wrap('<div class=\'header-sticky-wrapper\'></div>');var _=f.closest('.header-sticky-wrapper');f.on('affix.bs.affix',function(){var b=G5_Core.util.getAdminBarOffset();n.hasClass('bordered')&&u.isDesktop()&&(b+=30,f.css('width',n.width()-60)),f.css('top',b),_.length&&_.addClass('affix-wrap'),a(window).trigger('x-menu-change')}),f.on('affix-top.bs.affix',function(){f.css('top',''),f.css('width',''),_.length&&_.removeClass('affix-wrap'),a(window).trigger('x-menu-change')}),f.affix({offset:{top:function(){var b=1,x=y.find('.top-bar'),w=a('#wpadminbar'),C=y.find('.header-above');return b+=y.offset().top,w.length&&'absolute'==w.css('position')&&(b+=w.outerHeight()),y.hasClass('mobile-header')&&(x=y.find('.mobile-top-bar')),x.length&&(b+=x.outerHeight()),C.length&&(b+=C.outerHeight()),b}}})}});var m=0;a(window).scroll(function(){var f=a(this).scrollTop();m>f?a('.header-sticky').each(function(){0===a(this).find('.menu-one-page').length&&0<a(this).closest('[data-sticky-type="scroll_up"]').length&&a(this).hasClass('header-hidden')&&a(this).removeClass('header-hidden')}):a('.header-sticky').each(function(){if(0===a(this).find('.menu-one-page').length&&0<a(this).closest('[data-sticky-type="scroll_up"]').length){var y=a(this).closest('.header-sticky-wrapper');y.length&&f>y.offset().top+a(this).outerHeight()&&!a(this).hasClass('header-hidden')&&a(this).addClass('header-hidden')}}),m=f})},retinaLogo:function(){(window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.5)').matches||window.matchMedia('only screen and (-o-min-device-pixel-ratio: 3/2)').matches||window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.5)').matches||window.matchMedia('only screen and (min-device-pixel-ratio: 1.5)').matches)&&a('img[data-retina]').each(function(){a(this).attr('src',a(this).attr('data-retina'))})},adminBar:function(){var u=a('#wpadminbar');window.matchMedia('(max-width: 600px)').matches?u.css('top','-46px'):u.css('top','')},vertical:function(){var u=a('.main-header.header-vertical');if(0!==u.length){u.css('top',G5_Core.util.getAdminBarOffset());var m=u.find('.header-above'),f=u.find('.primary-menu'),y=u.find('.header-customize'),v=u.height();m.length&&(v-=m.outerHeight()),y.length&&(v-=y.outerHeight()),f.css('max-height',v),f.perfectScrollbar({wheelSpeed:0.5,suppressScrollX:!0}),f.on('gf_menu_vertical_clicked',function(){setTimeout(function(){f.perfectScrollbar('update')},500)}),a(window).on('resize',function(){u.css('top',G5_Core.util.getAdminBarOffset()),v=u.height(),m.length&&(v-=m.outerHeight()),y.length&&(v-=y.outerHeight()),f.css('max-height',v),f.perfectScrollbar('update')})}}},G5_Core.menu={init:function(){this.mega(),this.onePage(),this.menuCaret(),this.vertical()},menuCaret:function(){a('.gf-menu-vertical,.main-menu').each(function(){a('li > a',a(this)).each(function(){var u=a(this);a('> ul',u.parent()).length&&u.append('<b class="menu-caret"></b>')})})},vertical:function(){a('.gf-menu-vertical:not(.x-nav-menu) li').on('click',function(u){if(0!=a('> ul',this).length&&!(0<a(u.target).closest(a('> ul',this)).length)){if(0<a(u.target).closest(a('> a > span',this)).length){var m='';if('undefined'!=typeof u.target&&null!=u.target&&'undefined'!=typeof u.target.baseURI&&null!=u.target.baseURI){var f=u.target.baseURI.split('#');0<f.length&&(m=f[0]);var y=a('> a',this);if(0<y.length){var v=y.attr('href');if('#'!=v&&('undefined'!=typeof v&&null!=v&&(v=v.split('#')[0]),m!=v))return}}}u.preventDefault(),a(this).toggleClass('menu-open'),a('> ul',this).slideToggle(),a(this).trigger('gf_menu_vertical_clicked')}})},mega:function(){a('.x-nav-menu > li a').on('mouseenter mouseleave',function(){var u=a(this).next('ul').find('.x-mega-sub-menu');u.length&&new G5_Core_Animation(u)})},onePage:function(){'function'==typeof a().onePageNav&&a('.menu-one-page').onePageNav({currentClass:'menu-current',changeHash:!1,scrollSpeed:750,scrollThreshold:0,filter:'',easing:'swing'})}},G5_Core.footer={init:function(){this.events(),this.footerFixed()},events:function(){t.on('resize',this.footerFixed)},footerFixed:function(){window.matchMedia('(max-width: 768px)').matches?n.css('margin-bottom',''):setTimeout(function(){var u=a('footer.main-footer-wrapper');if(u.hasClass('footer-fixed')){var m=0<a('header.main-header .sticky-wrapper').length?55:0,f=a('#wpadminbar'),y=0<f.length?f.outerHeight():0;t.height()>=u.outerHeight()+m+y?(0<a('body.bordered').length?n.css('margin-bottom',u.outerHeight()+60+'px'):n.css('margin-bottom',u.outerHeight()+'px'),u.removeClass('static')):(n.css('margin-bottom',''),u.addClass('static'))}},100)}},a(document).ready(function(){G5_Core.util.init(),G5_Core.loading_content.init(),G5_Core.sticky.init(),G5_Core.lazyLoad.init(),G5_Core.isotope.init(),G5_Core.owlCarousel.init(),G5_Core.owlCarouselSync.init(),G5_Core.search_popup.init(),G5_Core.search_ajax.init(),G5_Core.off_canvas.init(),G5_Core.blog.init(),G5_Core.widget.init(),G5_Core.pagination_ajax.init(),G5_Core.custom_vc.init(),new G5_Core_Animation,G5_Core.header.init(),G5_Core.menu.init(),G5_Core.footer.init()})})(jQuery);