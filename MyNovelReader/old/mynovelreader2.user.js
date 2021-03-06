// ==UserScript==
// @id             mynovelreader@ywzhaiqi@gmail.com
// @name           My Novel Reader
// @version        2.8.0
// @namespace      ywzhaiqigmail.com
// @author         ywzhaiqi
// @description    小说清爽阅读脚本。
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          unsafeWindow
// @updateURL      https://userscripts.org/scripts/source/165951.meta.js
// @downloadURL    https://userscripts.org/scripts/source/165951.user.js
// @require        http://code.jquery.com/jquery-1.9.1.min.js

// @include        http://read.qidian.com/*,*.aspx
// @include        http://www.qdmm.com/BookReader/*,*.aspx
// @include        http://chuangshi.qq.com/read/bookreader/*.html
// @include        http://chuangshi.qq.com/read/bk/*/*-m-*.html
// @include        http://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @include        http://book.zongheng.com/chapter/*/*.html
// @include        http://www.xxsy.net/books/*/*.html
// @include        http://book.zhulang.com/*/*.html
// @include        http://www.17k.com/chapter/*/*.html
// @include        http://www.kanxia.net/k/*/*/*.html
// @include        http://www.qingdi.com/files/article/html/*/*/*.html
// @include        http://www.xkzw.org/*/*.html
// @include        http://shouda8.com/*/*.html
// @include        http://novel.hongxiu.com/*/*/*.shtml

// booklink.me
// @include        http://www.shumilou.com/*/*.html
// @include        http://www.wcxiaoshuo.com/wcxs-*-*/
// @include        http://www.ranwen.cc/*/*/*/*.html
// @include        http://www.ranwen.net/files/article/*/*/*.html
// @include        http://www.bxs.cc/*/*.html
// @include        http://www.laishuwu.com/html/*/*/*.html
// @include        http://www.binhuo.com/html/*/*/*.html
// @include        http://www.haoqi99.com/haoqi99/*/*/*.shtml
// @include        http://www.shuhe.cc/*/*/
// @include        http://www.dudukan.net/html/*/*/*.html
// @include        http://www.hahawx.com/*/*/*.htm
// @include        http://www.zhuzhudao.com/txt/*/*/
// @include        http://www.tadu.com/book/*/*/
// @include        http://www.aishoucang.com/*/*.html
// @include        http://www.wanshuba.com/Html/*/*/*.html
// @include        http://www.zhuishu.net/files/article/html/*/*/*.html
// @include        http://www.sqsxs.com/*/*/*.html
// @include        http://www.caiwei.tw/html/*/*.html
// @include        http://www.hotsk.com/Html/Book/*/*/*.shtml
// @include        http://www.92to.com/*/*/*.html
// @include        http://www.qirexs.com/read-*-chapter-*.html
// 需特殊处理的论坛
// @include        http://www.fkzww.net/thread-*.html

// www.sodu.so
// @include        http://www.qishuwu.com/*/*/
// @include        http://www.jiaodu8.com/*/*/*/*.html
// @include        http://www.fktxt.com/book/*/*.html
// @include        http://www.186s.cn/files/article/html/*/*/*.html
// @include        http://www.6xs.cn/xs/*/*/*.html
// @include        http://www.chaojiqiangbing.com/book/*/*/*.html
// @include        http://book.moka123.com/book/*/*/*.html
// @include        http://www.suimeng.com/files/article/html/*/*/*.html
// @include        http://www.hao662.com/haoshu/*/*/*.html

// 百度搜索网站
// @include        http://tw.xiaoshuokan.com/haokan/*/*.html
// @include        http://www.wobudu.com/*/*.html
// @include        http://www.qb5.com/xiaoshuo/*/*/*.html
// @include        http://www.23us.com/html/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/files/article/html/*/*/*.html
// @include        http://www.ranwenxiaoshuo.com/*/*-*-*.html
// @include        http://www.bjxiaoshuo.com/bjxs-*-*/
// @include        http://www.59shuku.com/xiaoshuo/*/*.htm
// @include        http://www.16kbook.org/Html/Book/*/*/*.shtml
// @include        http://www.dixiaoshuo.com/Html/*/*.html
// @include        http://www.nieshu.com/Book/*/*/*.shtml
// @include        http://www.tlxsw.com/files/article/html/*/*/*.html
// @include        http://www.1kanshu.com/files/article/html/*/*/*.html
// @include        http://www.uutxt.org/book/*/*/*.html
// @include        http://www.5800.cc/*/*/*/*.html
// @include        http://www.biquge.com/*/*.html
// @include        http://www.qududu.com/book/*/*/*.html
// @include        http://www.free97.cn/book/*/*/*.html
// @include        http://www.122s.com/book/*/*.html
// @include        http://www.123du.net/dudu-*/*/*.html
// @include        http://www.hwafa.com/*/*.html
// @include        http://www.qmshu.com/html/*/*/*.html
// @include        http://dlzw.cc/article-*-*.html
// @include        http://www.shushu5.com/read/*/*.html
// @include        http://www.qiuwu.net/html/*/*/*.html
// @include        http://www.xiaoyanwenxue.com/files/article/html/*/*/*.html
// @include        http://www.3gsc.com.cn/bookcon/*_*_*
// @include        http://www.bj-ibook.cn/book/*/*/*.htm
// @include        http://www.baoliny.com/*/*.html
// @include        http://www.dajiadu.net/files/article/html/*/*/*.html
// @include        http://www.yankuai.com/files/article/html/*/*/*.html
// @include        http://www.docin.net/*/*.html
// @include        http://www.dushuge.net/html/*/*/*.html
// @include        http://www.xunshu.org/xunshu/*/*/*.html
// @include        http://www.moneyren.com/book/*/*/*.shtml
// @include        http://wemaxfilipino.com/*/*/*.html
// @include        http://www.85618892.cn/xiaoshuo/*/*/*.shtml
// @include        http://www.bookba.net/Html/Book/*/*/*.html
// @include        http://www.moksos.com/*/*/*.html
// @include        http://dudu8.net/novel/*/*/*.html
// @include        http://www.dawenxue.net/html/*/*/*.html
// @include        http://www.yanmoxuan.org/book/*/*/*.html
// @include        http://www.duyidu.com/xiaoshuo/*/*/*.html
// @include        http://www.69zw.com/xiaoshuo/*/*/*.html
// @include        http://www.laishu.com/book/*/*/*.shtml
// @include        http://www.bxwx.org/b/*/*/*.html
// @include        http://www.360118.com/html/*/*/*.html
// @include        http://www.59to.com/files/article/xiaoshuo/*/*/*.html
// @include        http://www.dyzww.com/cn/*/*/*.html
// @include        http://www.kanshu.la/book/*/*.shtml
// @include        http://www.9wh.net/*/*/*.html
// @include        http://www.luoqiu.com/html/*/*/*.html
// @include        http://www.epzw.com/files/article/html/*/*/*.html
// @include        http://www.dashubao.com/book/*/*/*.html
// @include        http://b.faloo.com/p/*/*.html
// @include        http://www.baikv.com/*/*.html
// @include        http://www.66721.com/*/*/*.html
// @include        http://www.3dllc.com/html/*/*/*.html
// @include        http://www.xstxt.com/*/*/
// @include        http://www.zzzcn.com/3z*/*/
// @include        http://www.zzzcn.com/modules/article/reader.php*
// @include        http://www.nilongdao.com/book/*/*/*.html
// @include        http://xs321.net/*/*/
// @include        http://read.guanhuaju.com/files/article/html/*/*/*.html
// @include        http://www.book108.com/*/*/*.html
// @include        http://5ycn.com/*/*/*.html
// @include        http://www.zhaoxiaoshuo.com/chapter-*-*-*/
// @include        http://www.zbzw.com/*/*.html
// @include        http://manghuangji.cc/*/*.html
// @include        http://www.aiqis.com/*/*.html
// @include        http://www.fftxt.net/book/*/*.html
// @include        http://www.5kwx.com/book/*/*/*.html
// @include        http://www.uuxiaoshuo.net/html/*/*/*.html
// @include        http://www.sanyyo.org/*.html
// @include        http://www.chinaisbn.com/*/*/*.html
// @include        http://www.caihongwenxue.com/Html/Book/*/*/*.html
// @include        http://www.shushuw.cn/shu/*/*.html

// @exclude        */List.shtml
// @exclude        */List.html
// @exclude        */index.html

// @run-at         document-start
// ==/UserScript==

/**
支持站点

 - 起点中文网、晋江文学网、纵横中文网、潇湘书院、逐浪
 - 燃文、无错、书迷楼、冰火中文、百晓生、浩奇、书河
 - 手打吧、泡书吧、17k、看下、青帝、侠客、
 - 其它通用小说网站。（没有站点配置的，例如：红袖添香）
*/

(function(css){

    if(window.name == "mynovelreader-iframe"){
        return;
    }

    // 所有的设置
    var config = {
        AUTO_ENABLE: true,              // 自动启用总开关。有问题，一些主页也会自动启用
        booklinkme: true,               // booklink.me 跳转的自动启动
        soduso: false,                  // www.sodu.so 跳转
        BASE_REMAIN_HEIGHT: 1000,
        DEBUG: GM_getValue("debug") || false,
        fullHref: true,
        content_replacements: true,     // 小说屏蔽字修复
        fixImageFloats: true,           // 图片居中修正
        paragraphBlank: true,           // 统一段落开头的空格为 2个全角空格
    };

    var READER_AJAX = "reader-ajax";   // 内容中ajax的 className
    var THE_END_COLOR = "#666666"

    // 自动尝试的规则
    var rule = {
        // next_text: /[下后][一]?[页张个篇章节步]/,       // 下一页正则，匹配文字
        // prev_text: /[上前][一]?[页张个篇章节步]/,
        nextSelector: "a:contains('下一页'), a:contains('下一章'), a:contains('下页')",
        prevSelector: "a:contains('上一页'), a:contains('上一章'), a:contains('上页')",
        nextUrlIgnore: /index|list|last|end|BuyChapterUnLogin|^javascript:/i,         // 忽略的下一页链接，匹配链接
        endNum_regexp: /\/\d+\.html?$|\/wcxs-\d+-\d+\/$|chapter-\d+\.html$/i,         // 忽略的下一页链接正则

        // 按顺序匹配，匹配到则停止。econtains 完全相等
        indexSelectors: ["a[href='index.html']", "a:contains('返回书目')", "a:contains('章节目录')", "a:contains('章节列表')",
            "a:econtains('最新章节')", "a:contains('回目录')","a:contains('回书目')", "a:contains('目 录')", "a:contains('目录')"],

        contentSelectors: ["#bmsy_content", "#bookpartinfo", "#htmlContent", "#chapter_content", "#chapterContent", "#partbody",
            "#article_content", "#BookTextRead", "#booktext", "#BookText", "#readtext", "#text_c", "#txt_td", "#TXT", "#zjneirong",
            ".novel_content", ".readmain_inner", ".noveltext", ".booktext",
            "#contentTxt", "#oldtext", "#a_content", "#contents", "#content2", "#content", ".content"],

        contentRemove: "script, iframe, font[color]",          // 内容移除选择器
        contentReplace: /最新.?章节|百度搜索|小说章节|全文字手打|“”&nbsp;看|无.弹.窗.小.说.网|追书网/g,
        replaceBrs: /(<br[^>]*>[ \n\r\t]*){1,}/gi,    // 替换为<p>
        mutationMaxTime: 5 * 1000,
    };

    // ===================== 自定义站点规则 ======================
    rule.specialSite = [
        // 详细版规则示例。已经没法访问。
        {siteName: "泡书吧",                                               // 站点名字... (可选)
            url: "^http://www\\.paoshu8\\.net/Html/\\S+\\.shtm$",          // // 站点正则... (~~必须~~)

            // 获取标题
            titleReg: /(.*?)最新章节 [-_\\\/](.*?)[-_\/].*/,         // 书籍标题、章节标题正则 (可选)
            titlePos: 0,                                          // 书籍标题位置：0 或 1 (可选，默认为 0)
            titleSelector: "#title h1",

            indexSelector: "a:contains('回目录')",                    // 首页链接 jQuery 选择器 (不填则尝试自动搜索)
            prevSelector: "a:contains('翻上页')",                      // 上一页链接 jQuery 选择器 (不填则尝试自动搜索)
            nextSelector: "a:contains('翻下页')",                     // 下一页链接 jQuery 选择器  (不填则尝试自动搜索)

            // 获取内容
            contentSelector: "#BookText",                             // 内容 jQuery 选择器 (不填则尝试自动搜索)
            useiframe: true,       // (可选)下一页加载是否使用 iframe
            mutationSelector: "#chaptercontainer",    // (可选)内容生成监视器，还有问题，如 dudukan
            // 对内容的处理
            contentHandle: false,  // (可选)是否对内容进行特殊处理，诸如拼音字修复等，诸如起点等网站使用
            fixImage: true,  // (可选)
            contentReplace: /(\*W|（w|\(w).{10,25}(吧\*|）|\))|看小说就上|本书首发|泡.{1,6}吧|百度搜索阅读最新最全的小说|http:\/\/www.paoshu8.com\/|无弹窗/g,                                // 需要移除的内容正则 (可选)
            contentPatch: function(fakeStub){                          // (可选)内容补丁。解决翻页是脚本的情况
                var $next = fakeStub.find('#LinkMenu');
                $next.html($next.html().replace(/<script>ShowLinkMenu.*?(<a.*?a>).*?(<a.*?a>).*?script>/,'$1$2') +
                    '<a href=\'List.shtm\'>回目录</a>');
            }
        },
        // 特殊站点，需再次获取且跨域。添加 class="reader-ajax"，同时需要 src
        {siteName: "起点文学",
            url: "^http://(www|read)\\.(qidian|qdmm|qdwenxue)\\.com/BookReader/\\d+,\\d+.aspx$",
            titleReg: /小说:(.*?)(?:独家首发)\/(.*?)\/.*/,
            contentReplace: /起点中文网|www.qidian.com|欢迎广大书友.*/g,
            contentHandle: false,
            contentPatch: function(fakeStub){
                fakeStub.find('div#content script:first').addClass('reader-ajax');
            },
        },
        {siteName: "纵横中文网",
            url: "^http://book\\.zongheng\\.com/\\S+\\/\\d+\\.html$",
            contentHandle: false,
            titleReg: /(.*?)-(.*)/,
            contentPatch: function(fakeStub){
                fakeStub.find('.watermark').remove();
            }
        },
        {siteName: "创世中文网",
            url: "^http://chuangshi\\.qq\\.com/read/",
            contentSelector: ".bookreadercontent",
            contentHandle: false,
            useiframe: true,
            mutationSelector: "#chaptercontainer",  // 内容生成监视器
            mutationExcludeCount: 2,                // 子元素的个数 - 此数 > 0 才添加监视器
            contentPatch: function(fakeStub){
                fakeStub.find('.bookreadercontent  > p:last').remove();
            }
        },
        // 标题和底部下一页 会到左边
        {siteName: "晋江文学网",
            url: /^http:\/\/www\.jjwxc\.net\/onebook\.php\S*/,
            titleReg: /《(.*?)》.*ˇ(.*?)ˇ.*/,
            indexSelector: ".noveltitle > h1 > a",
            contentPatch: function(fakeStub){
                fakeStub.find('h2').remove();
                fakeStub.find('#six_list, #sendKingTickets').parent().remove();
                fakeStub.find("div.noveltext").find("div:first, h1").remove();
            }
        },
        {siteName: "潇湘书院",
            url: /^http:\/\/www\.xxsy\.net\/books\/.*\.html/,
            contentSelector: "#detail_list",
            nextSelector: "a[title='阅读下一章节']"
        },
        {siteName: "逐浪",
            url: /^http:\/\/book\.zhulang\.com\/.*\.html/,
            titleReg: /(.*?)-(.*)/,
            contentSelector: "#readpage_leftntxt",
            contentPatch: function(fakeStub){
                var title = fakeStub.find(".readpage_leftnzgx a:first").text() + "-" +
                    fakeStub.find(".readpage_leftntit").text();
                fakeStub.find('title').html(title);
            }
        },
        {siteName: "燃文",
            url: /^http:\/\/www\.ranwen\.cc\/.*\.html$/,
            titleReg: /(.*?)-(.*?)-.*/,
            contentSelector: "#oldtext",
            contentReplace: /牛过中文..hjsm..首发.转载请保留|\[本文来自\]|♠思♥路♣客レ|※五月中文网 5y ※|无错不跳字|最快阅读小说大主宰.*|跟我读Ｈ－u－n 请牢记|非常文学|关闭&lt;广告&gt;|w w.*|”娱乐秀”|更多精彩小[说說].*/g,
            contentPatch: function(fakeStub) {
                fakeStub.find("#oldtext").find("div[style], script").remove();
            }
        },
        {siteName: "燃文小说网",
            url: "http://www\\.ranwenxiaoshuo\\.com/files/article/html/\\d+/\\d+/\\d+\\.html|http://www\\.ranwenxiaoshuo\\.com/\\w+/\\w+-\\d+-\\d+\\.html",
            titleReg: /(.*?)最新章节(.*?)在线阅读.*/,
            contentSelector: "#fontsize",
        },
        {siteName: "无错小说网",
            url: /^http:\/\/www\.wcxiaoshuo\.com\/wcxs[-\d]+\//,
            titleReg: /(.*?)最新章节.*?-(.*?)-.*/,
            titlePos: 1,
            nextSelector: "a#htmlxiazhang",
            prevSelector: "a#htmlshangzhang",
            indexSelector: "a#htmlmulu",
            contentReplace: {
                'ilo-full-src="\\S+\\.jpg" ': "",
                '(<center>)?<?img src..(http://www.wcxiaoshuo.com)?(/sss/\\S+\\.jpg).(>| alt."\\d+_\\d+_\\d*\\.jpg" />)(</center>)?': '$3',
                "/sss/da.jpg": "打", "/sss/maws.jpg": "吗？", "/sss/baw.jpg": "吧？", "/sss/wuc.jpg": "无", "/sss/maosu.jpg": "：“", "/sss/cuow.jpg": "错", "/sss/ziji.jpg": "自己", "/sss/shenme.jpg": "什么", "/sss/huiqub.jpg": "回去", "/sss/sjian.jpg": "时间", "/sss/zome.jpg": "怎么", "/sss/zhido.jpg": "知道", "/sss/xiaxin.jpg": "相信", "/sss/faxian.jpg": "发现", "/sss/shhua.jpg": "说话", "/sss/dajiex.jpg": "大姐", "/sss/dongxi.jpg": "东西", "/sss/erzib.jpg": "儿子", "/sss/guolair.jpg": "过来", "/sss/xiabang.jpg": "下班", "/sss/zangfl.jpg": "丈夫", "/sss/dianhua.jpg": "电话", "/sss/huilaim.jpg": "回来", "/sss/xiawu.jpg": "下午", "/sss/guoquu.jpg": "过去", "/sss/shangba.jpg": "上班", "/sss/mingtn.jpg": "明天", "/sss/nvrenjj.jpg": "女人", "/sss/shangwo.jpg": "上午", "/sss/shji.jpg": "手机", "/sss/xiaoxinyy.jpg": "小心", "/sss/furene.jpg": "夫人", "/sss/gongzih.jpg": "公子", "/sss/xiansg.jpg": "先生", "/sss/penyouxi.jpg": "朋友", "/sss/xiaoje.jpg": "小姐", "/sss/xifup.jpg": "媳妇", "/sss/nvxudjj.jpg": "女婿", "/sss/xondi.jpg": "兄弟", "/sss/lagong.jpg": "老公", "/sss/lapo.jpg": "老婆", "/sss/meimeid.jpg": "妹妹", "/sss/jiejiev.jpg": "姐姐", "/sss/jiemeiv.jpg": "姐妹", "/sss/xianggx.jpg": "相公", "/sss/6shenumev.jpg": "什么", "/sss/cuoaw.jpg": "错", "/sss/fpefnyoturxi.jpg": "朋友", "/sss/vfsjgigarn.jpg": "时间", "/sss/zzhiedo3.jpg": "知道", "/sss/zibjib.jpg": "自己", "/sss/qdonglxi.jpg": "东西", "/sss/hxiapxint.jpg": "相信", "/sss/fezrormre.jpg": "怎么", "/sss/nvdrfenfjfj.jpg": "女人", "/sss/jhiheejeieev.jpg": "姐姐", "/sss/xdifagojge.jpg": "小姐", "/sss/gggugolgair.jpg": "过来", "/sss/maoashu.jpg": "：“", "/sss/gnxnifawhu.jpg": "下午", "/sss/rgtugoqgugu.jpg": "过去", "/sss/khjukilkaim.jpg": "回来", "/sss/gxhigfadnoxihnyy.jpg": "小心", "/sss/bkbskhhuka.jpg": "说话", "/sss/xeieavnfsg.jpg": "先生", "/sss/yuhhfuiuqub.jpg": "回去", "/sss/pdianphua.jpg": "电话", "/sss/fabxianr.jpg": "发现", "/sss/feilrpto.jpg": "老婆", "/sss/gxronfdri.jpg": "兄弟", "/sss/flfaggofng.jpg": "老公", "/sss/tymyigngtyn.jpg": "明天", "/sss/dfshfhhfjfi.jpg": "手机", "/sss/gstjhranjgwjo.jpg": "上午", "/sss/fmgeyimehid.jpg": "妹妹", "/sss/gxgihftutp.jpg": "媳妇", "/sss/cerztifb.jpg": "儿子", "/sss/gfxgigagbfadng.jpg":"下班", "/sss/gstjhranjg.jpg":"下午", "/sss/hjeirerm6eihv.jpg": "姐妹", "/sss/edajihexr.jpg": "大姐", "/sss/wesfhranrrgba.jpg": "上班", "/sss/gfognggzigh.jpg": "公子", "/sss/frurtefne.jpg": "夫人", "/sss/fzagnggfbl.jpg": "丈夫", "/sss/nvdxfudfjfj.jpg": "女婿", "/sss/xdidafnggx.jpg": "相公", "/sss/zenme.jpg": "怎么", "/sss/gongzi.jpg": "公子", "/sss/ddefr.jpg": "",
                ".*ddefr\\.jpg.*|无(?:错|.*cuoa?w\\.jpg.*)小说网不[少跳]字|w[a-z\\.]*om?|.*由[【无*错】].*会员手打[\\s\\S]*": "",
                "无错不跳字|一秒记住.*|全文免费阅读.*|列表|8 9 阅阅 读 网": "", "【 .{1,10} 】":""
            },
            contentPatch: function(fakeStub){
                // 去除内容开头、结尾的重复标题
                var title = fakeStub.find("#htmltimu").text().replace(/\s+/, "\\s*");
                var content = fakeStub.find("#htmlContent");
                content.find("div[align='center']").remove()
                if(title.match(/第\S+章/)){
                    content.html(content.html().replace(new RegExp(title), "").replace(new RegExp(title), ""));
                }
            }
        },
        {siteName: "书迷楼",
            url: /^http:\/\/www\.shumilou\.com\/.*html$/,
            titleReg: /(.*) (.*?) 书迷楼/,
            titlePos: 1,
            contentSelector: "#content",
            contentReplace: 'div lign="ener"&gt;|.*更多章节请到网址隆重推荐去除广告全文字小说阅读器',
            fixImage: true,
            contentPatch: function(fakeStub){
                fakeStub.find("#content").find("div.title:last")
                    .appendTo(fakeStub.find('body'));
                fakeStub.find("#content").find("div.title, p > b, div[style]").remove();
            }
        },
        {siteName: "冰火中文",
            url: /^http:\/\/www\.binhuo\.com\/html\/[\d\/]+\.html$/,
            titleReg: /(.*?)最新章节,(.*?)-.*/,
            fixImage: true,
            contentReplace: {
                "<冰火#中文 //.//|冰火中文|冰.火.中文|绿色小说|lvsexs ": "",
                "([^/])www\\.binhuo\\.com": "$1"
            },
            contentPatch: function(fakeStub){
                fakeStub.find("#BookText").append(fakeStub.find("img.imagecontent"));
            }
        },
        {siteName: "百晓生",
            url: /^http:\/\/www\.bxs\.cc\/\d+\/\d+\.html$/,
            titleReg: /(.*?)\d*,(.*)/,
            contentReplace: /无弹窗小说网www.bxs.cc|百晓生文学网|最快阅读小说大主宰，尽在百晓生文学网.*|ww.x.om|欢迎大家来到.*?bxs\.cc|百晓生阅读最新最全的小说.*|百晓生网不少字|站长推荐.*|[\[【].*[\]】]|文字首发|[\[\]\(《].*百晓生.*|百晓生.不跳字|百.晓.生.|关闭.*广告.*|飘天文学|本站域名就是.*|\(.{0,5}小说更快更好.{0,5}\)|(请在)?百度搜索.*/ig,
        },
        {siteName: "浩奇文学网",
            url: /^http:\/\/www\.haoqi99\.com\/.*\.shtml$/,
            titleReg: /^(.*?)--(.*?)-/,
        },
        {siteName: "书河小说网",
            url: /^http:\/\/www\.shuhe\.cc\/\d+\/\d+/,
            contentSelector: "#TXT",
            contentReplace: /\(书河小说网.*|wxs.o|ww.x.om|[\[【\(].{1,30}[\]\)】]|ff37;.*|书河小说网高速首发.*|TXT下载|书河小说网|全文阅读|第一书河小说网|百书斋.*|首发来自书河小说网|Www.Shuhe.Cc|本书最新章节/ig,
        },
        {siteName: "爱收藏",
            url: /http:\/\/www\.aishoucang\.com\/\w+\/\d+\.html/,
            contentSelector: "#zhutone",
            contentReplace: /.爱收藏[^<]*/g
        },
        {siteName: "追书网",
            url: "^http://www\\.zhuishu\\.net/files/article/html/.*\\.html",
            titleReg: /(?:正文 )?(.*) (\S+) \S+ - .*/,
            titlePos: 1,
            contentSelector: "#content",
            indexSelector: ".pagebottom>a:contains('目录')",
            nextSelector: ".pagebottom>a:contains('下一页')",
            prevSelector: ".pagebottom>a:contains('上一页')",
            fixImage: true,
            contentReplace: {
                "([^/])www\\.ZhuisHu\\.net": "$1",
            },
            contentPatch: function(fakeStub){
                fakeStub.find("#content").find("div.title").appendTo(fakeStub.find("body"));
                fakeStub.find("#content").find("center, b:contains('最快更新')").remove();
            }
        },
        {siteName: "啃书(图)",
            url: /^http:\/\/www\.fkzww\.net\/thread-.*\.html$/,
            titleReg: /(.*?) (.*?)-.*/,
            contentSelector: "#content",
            indexSelector: "#nav a:last",
            fixImage: true,
            contentPatch: function(fakeStub){
                $("<div id='content'></div>").append(fakeStub.find(".t_msgfontfix").find("img[width]"))
                    .appendTo(fakeStub.find("body"));

                fakeStub.find(".next").attr("href", "");
            }
        },
        {siteName: "猪猪岛小说",
            url: "http://www\\.zhuzhudao\\.com/txt/",
            contentReplace: /[“"”]?猪猪岛小说.*|<\/?a[^>]+>|www\.zhuZhuDao\.com /ig
        },
        {siteName: "17k小说网",
            url: /^http:\/\/\S+\.17k\.com\/chapter\/\S+\/\d+\.html$/,
            titleReg: /(.*?)-(.*?)-.*/,
            contentPatch: function(fakeStub){
                fakeStub.find('xscript, #hotRecommend, .ct0416, .recent_read').remove();
            }
        },
        {siteName: "看下文学",
            url: "^http://www\\.kanxia\\.net/k/\\d*/\\d+/\\d+\\.html$",
            titleReg: /(.*?)-(.*)TXT下载_看下文学/,
            contentReplace: /看下文学/g
        },
        {siteName: "青帝文学网",
            url: /^http:\/\/www\.qingdi\.com\/files\/article\/html\/\d+\/\d+\/\d+\.html$/,
            titleReg: /(.*?)最新章节_(.*?)_青帝文学网_.*/
        },
        {siteName: "侠客中文网",
            url: /^http:\/\/www\.xkzw\.org\/\w+\/\d+\.html/,
            contentSelector: ".readmain_inner .cont",
            contentPatch: function(fakeStub){
                fakeStub.find('title').html(fakeStub.find('.readmain_inner h2').text());
            }
        },
        {siteName: "ChinaUnix.net",
            url: /^http:\/\/bbs\.chinaunix\.net\/thread-.*\.html/,
            contentSelector: ".t_f:first"
        },
        {siteName: "123du 小说",
            url: /^http:\/\/www\.123du\.net\/dudu-\d+\/\d+\/\d+\.html/,
            contentSelector: "#content",
            contentPatch: function(fakeStub){
                var content = fakeStub.find("#DivContentBG").html().match(/第\d*页([\s\S]*)一秒记住/)[1];
                $('<div id="content"/>').html(content).appendTo(fakeStub.find('body'));
            }
        },
        {siteName: "动力中文",
            url: "^http://dlzw\\.cc/article.*\\.html",
            nextSelector: "span:contains('下一篇') > a",
            prevSelector: "span:contains('上一篇') > a",
            indexSelector: "#pt a[href^='http']"
        },
        {siteName: "塔读文学",
            url: "^http://www\\.tadu\\.com/book/\\d+/\\d+/",
            titleReg: /(.*?),(.*?),/,
            contentSelector: "#partContent",
            contentPatch: function(fakeStub){
                var m = fakeStub.find("body").html().match(/\.html\(unescape\("(.*)"\)/);
                if(m){
                    var unescapeContent = m[1];
                    fakeStub.find("#partContent").html(unescape(unescapeContent));
                }
            }
        },
        {siteName: "第一中文",
            url: "^http://www\\.dyzww\\.com/cn/\\d+/\\d+/\\d+\\.html$" ,
            contentReplace: {
                '<img.*?ait="(.*?)".*?>': "$1",
                'www\\.dyzww\\.com.*|♂|шШщ.*': ""
            }
        },
        {siteName: "16K小说网",
            url: "^http://www\\.16kbook\\.org/Html/Book/\\d+/\\d+/\\d+\\.shtml$" ,
            contentReplace: {
                '(<center>)?<?img src..(http://www.16kbook.org)?(/tu/\\S+\\.jpg).(>| alt."\\d+_\\d+_\\d*\\.jpg" />)(</center>)?': "$3",
                "/tu/shijie.jpg":"世界", "/tu/xiangdao.jpg":"想到", "/tu/danshi.jpg":"但是", "/tu/huilai.jpg":"回来", "/tu/yijing.jpg":"已经", "/tu/zhende.jpg":"真的", "/tu/liliang.jpg":"力量", "/tu/le.jpg":"了", "/tu/da.jpg":"大", "/tu/shengli.jpg":"胜利", "/tu/xiwang.jpg":"希望", "/tu/wandan.jpg":"完蛋", "/tu/de.jpg":"的",
                "16kbook\\s*(首发更新|小说网)": "",
            }
        },
        {
            url: "http://www.laishuwu.com/html/5/5802/2178429.html",
            contentReplace: "txt\\d+/",
        },
        {
            url: "http://www.wanshuba.com/Html/\\d+/\\d+/\\d+\\.html",
            indexSelector: "#mulu"
        },
        {
            url: "^http://www\\.dawenxue\\.net/html/\\d+/\\d+/\\d+\\.html",
            contentSelector: "#clickeye_content",
            contentReplace: "\\(?大文学\\s*www\\.dawenxue\\.net\\)?",
        },
        {
            url: "^http://www\\.qirexs\\.com/read-\\d+-chapter-\\d+\\.html",
            contentSelector: "div.page-content .note",
            contentReplace: "”奇热小说小说“更新最快|首发,/.奇热小说网阅读网!|奇热小说网提供.*|\\(手机用户请直接访问.*",
            contentPatch: function(fakeStub){
                fakeStub.find("div.page-content .note a").remove();
            }
        },
        {
            url: "^http://www\\.luoqiu\\.com/html/\\d+/\\d+/\\d+\\.html",
            contentReplace: "&lt;/p&gt;"
        },
        {
            url: "^http://www\\.qb5\\.com/xiaoshuo/\\d+/\\d+/\\d+\\.html",
            contentReplace: "全.{0,2}本.{0,2}小.{0,2}说.{0,2}网.{0,2}|[ｗWw ]+.{1,10}[CｃcǒOｍMМ ]+"
        },
        {
            url: "^http://www\\.sqsxs\\.com/\\d+/\\d+/\\d+\\.html",
            contentReplace: "访问下载txt小说.百度搜."
        },
        {name: "飞卢小说网",
            url: "^http://b\\.faloo\\.com/p/\\d+/\\d+\\.html",
            titleSelector: "#title h1",
            nextSelector: "a#next_page",
            prevSelector: "a#pre_page",
            indexSelector: "a#huimulu",
            contentSelector: "#content",
            contentReplace: "飞卢小说网 b.faloo.com 欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在飞卢小说网！",
            contentPatch: function(fakeStub){
                fakeStub.find("#content").find(".p_gonggao").remove()
            }
        },
        {name: "顶点小说",
            url: "^http://www\\.23us\\.com/html/\\d+/\\d+/\\d+\\.html$",
            titleReg: "(.*?)-\\S*\\s(.*?)-顶点小说",
            titlePos: 0,
            indexSelector: "#footlink a:contains('返回目录')",
            prevSelector: "#footlink a:contains('上一页')",
            nextSelector: "#footlink a:contains('下一页')",
            contentSelector: "#contents",
            contentReplace: " (看小说到顶点小说网.*)",
            contentPatch: function(fakeStub){
                var temp=fakeStub.find('title').text();
                var realtitle = temp.replace(/第.*卷\s/,'');
                fakeStub.find('title').html(realtitle);
            }
        },

        // 内容需要js运行。
        {
            name: "读读看",
            url: "^http://www\\.dudukan\\.net/html/.*\\.html$",
            contentReplace: "看小说“就爱读书”|binhuo|www\\.92to\\.com",
            useiframe: true,
            mutationSelector: "#main",
        },
        {
            url: "^http://www\\.92to\\.com/\\w+/\\w+/\\d+\\.html$",
            useiframe: true,
            timeout: 500,
            contentReplace: "看小说.就爱.*"
        },
        {
            url: "http://www\\.shushuw\\.cn/shu/\\d+/\\d+\\.html",
            useiframe: true,
            timeout: 500,
            contentReplace: "！~！[\\s\\S]*"
        },
        {
            url: "http://www\\.zhaoxiaoshuo\\.com/chapter-\\d+-\\d+-\\w+/",
            useiframe: true,
            timeout: 500
        },
        // 内容js，地址特殊生成。
        {siteName: "哈哈文学",
            url: /^http:\/\/www\.hahawx\.com\/.*htm/,
            titleReg: /(.*?)-(.*?)-.*/,
            contentSelector: "#chapter_content",
            contentReplace: /(?:好书推荐|书友在看|其他书友正在看|好看的小说|推荐阅读)：。|(www\.)?66c.com|(ｗｗｗ|ｂｏｏｋ).*(ｃｏｍ|ｎｅｔ)|www[a-z\.]*|全文字阅读|无弹窗广告小说网|哈哈文学\(www.hahawx.com\)|souDU.org|Ｓｏｕｄｕ．ｏｒｇ/ig,
            contentPatch: function(fakeStub){
                var content = fakeStub.find("#chapter_content");
                var m = content.find("script").text().match(/output\((\d+), "(\d+\.txt)"\);/);
                if(m && m.length == 3){
                    var aid = m[1],
                        files = m[2];
                    var subDir = "/" + (Math.floor(aid / 1000) + 1);
                    var subDir2 = "/" + (aid - Math.floor(aid / 1000) * 1000);
                    var url = "http:\/\/r.xsjob.net\/novel" + subDir + subDir2 + "/" + files;
                    content.attr({
                        class: "reader-ajax",
                        src: url,
                        charset: "gbk"
                    });
                }
            }
        },
        {name: "3Z中文网",
            url: "^http://www\\.zzzcn\\.com\\/(3z\\d+/\\d+\\/|modules\\/article\\/reader\\.php\\?aid=\\d+&cid=\\d+){1}$",
            titleSelector: "#content h2",
            contentSelector: "#content3zcn",
            indexSelector: "a:contains('返回目录')",
            prevSelector: "a:contains('上 一 页')",
            nextSelector: "a:contains('下 一 页'), a:contains('返回书架')",
            contentReplace: "一秒记住.*为您提供精彩小说阅读。",
            contentPatch: function(fakeStub){
               fakeStub.find("a:contains('返回书架')").html("下 一 页").attr("href", fakeStub.find("a:contains('返回目录')").attr("href"));
                fakeStub.find("#content3zcn").find(".titlePos, font.tips, a").remove();
            }
        },
        // 特殊处理。
        {siteName: "手打吧",
            url: /^http:\/\/shouda8\.com\/\w+\/\d+\.html/,
            contentReplace: /[w\s\[\/\\\(]*.shouda8.com.*|(\/\/)?[全文字]?首发|手打吧|www.shou.*|\(w\/w\/w.shouda8.c\/o\/m 手、打。吧更新超快\)|小说 阅读网 www.xiaoshuoyd .com/ig,
            contentPatch: function(fakeStub){
                var scriptSrc = fakeStub.find('body').html().match(/outputContent\('(.*txt)'\)/)[1];
                scriptSrc = "http://shouda8.com/ajax.php?f=http://shouda8.com/read" + scriptSrc;
                fakeStub.find('#content').attr({
                    "class": 'reader-ajax',
                    src: scriptSrc
                });
            }
        },

        {name: "好看小說網",
            url: "http://tw\\.xiaoshuokan\\.com/haokan/\\d+/\\d+\\.html",
            contentSelector: ".bookcontent",
            prevSelector: "a.redbutt:contains('上一頁')",
            indexSelector: "a.redbutt:contains('返回章節目錄')",
            nextSelector: "a.redbutt:contains('下一頁')",
            contentReplace: "[a-z;&]*w.[xｘ]iaoshuokan.com 好看小說網[a-z;&族】）]*"
        }
    ];

    // ================== 小说拼音字、屏蔽字修复 ==================
    var replacements = {
        // ===格式整理===
        // "\\(|\\[|\\{|（|【|｛":"（",
        // "\\)|\\]|\\}|）|】|｝":"）",
        "\\*|＊":"*",
        "[wWｗＷ]{3}":"www",
        "w{3}(\u3001|\u3002)":"www.",
        "[cCｃＣ][oOｏＯ][mMｍＭ]":"com",
        "[nNｎＮ][eｅEＥ][tｔTＴ]":"net",
        "[cCｃＣ][nNｎＮ]":"cn",
        "(\\.|\u3001|\u3002)com":".com",
        "(\\.|\u3001|\u3002)net":".net",
        "(\\.|\u3001|\u3002)cn":".cn",
        "[pPｐＰ][sSｓＳ][:：]":"ps:",
        "。{5,7}":"……","~{2,50}":"——","…{3,40}": "……","－{3,20}":"——",
        "。(,|，|。)": "。",
        "？(,|，)": "？",
        "”(,|，|。)": "”",
        "@{3,}": "",

        // ===星号屏蔽字还原===
        "十有(\\*{2})":"十有八九", "\\*(2)不离十":"八九不离十",
        "G(\\*{2})":"GSM", "感(\\*{2})彩":"感情色彩",
        "强(\\*{2})u5B9D":"强大法宝",

        // ===双字替换，需特殊处理？===
        "暧me[iì]":"暧昧",
        "b[ěe]i(\\s|&nbsp;)*j[īi]ng":"北京","半shen": "半身", "b[ìi]j[ìi]ng":"毕竟",
        "ch[oō]ngd[oò]ng":"冲动", "缠mian": "缠绵", "成shu": "成熟", "赤lu[oǒ]": "赤裸", "春guang": "春光",
        "dang校": "党校", "da子": "鞑子", "diao丝": "屌丝", "d[úu]\\s{0,2}l[ìi]": "独立", "d?[iì]f[āa]ng":"地方", "d[ìi]\\s*d[ūu]":"帝都", "du\\s{0,2}c[áa]i":"独裁",
        "f[ǎa]ngf[óo]":"仿佛", "fei踢": "飞踢", "feng流": "风流", "风liu": "风流", "f[èe]nn[ùu]":"愤怒",
        "gao潮": "高潮", "干chai": "干柴", "gu[oò]ch[ée]ng":"过程", "gu[āa]nx[iì]":"关系", "g[ǎa]nji[àa]o":"感觉", "国wu院":"国务院",
        "han住": "含住", "hai洛因": "海洛因", "红fen": "红粉", "火yao": "火药", "h[ǎa]oxi[àa]ng":"好像", "hu[áa]ngs[èe]":"黄色", "皇d[ìi]":"皇帝",
        "j[ìi]nháng":"进行", "jinv": "妓女", "jirou": "鸡肉", "ji者":"记者", "ju花":"菊花","j[īi]动":"激动", "jili[èe]":"激烈", "肌r[òo]u":"肌肉","ji射":"激射", "ji[ēe]ch[uù]":"接触", "j[ùu]li[èe]": "剧烈",
        "k[ěe]n[ée]ng": "可能", "开bao": "开苞",  "k[àa]o近": "靠近",
        "ling辱": "凌辱", "luan蛋": "卵蛋",
        "m[ǎa]ny[ìi]":"满意", "m[ǎa]sh[àa]ng":"马上", "m[ée]iy[oǒ]u":"没有", "mei国": "美国", "m[íi]ngb[áa]i":"明白", "迷huan": "迷幻", "m[íi]n\\s{0,2}zh[ǔu]": "民主", "迷jian": "迷奸",
        "n[àa]me":"那么", "n[ée]ngg[oò]u":"能够", "nán\\s{0,2}hǎi": "那会",
        "pi[áa]o客":"嫖客", "p[áa]ngbi[āa]n":"旁边",
        "q[íi]gu[àa]i":"奇怪", "qin兽":"禽兽", "q[iī]ngch[uǔ]":"清楚",
        "r[úu]gu[oǒ]":"如果", "r[oó]ngy[ìi]":"容易",
        "生r[ìi]": "生日", "sh[iì]ji[eè]":"世界", "sh[ií]ji[aā]n":"时间", "sh[ií]h[oò]u": "时候", "sh[ií]me":"什么", "shi身": "失身", "sh[ūu]j[ìi]":"书记", "shu女": "熟女", "上chuang": "上床", "呻y[íi]n": "呻吟", "sh[ēe]ngzh[íi]": "生殖", "深gu": "深谷", "双xiu": "双修",
        "t[uū]r[áa]n":"突然", "tiaojiao": "调教", "推dao": "推倒", "脱guang": "脱光", "t[èe]bi[ée]":"特别", "t[ōo]nggu[òo]":"通过",
        "w[ēe]ixi[ée]":"威胁", "wèizh[ìi]":"位置",
        "亵du": "亵渎", "xing福": "性福", "xiu长": "修长",
        "y[iī]y[àa]ng":"一样", "y[īi]di[ǎa]n":"一点", "y[ǐi]j[īi]ng":"已经", "阳w[ěe]i": "阳痿", "yao头": "摇头", "yaotou": "摇头", "摇tou": "摇头", "yezhan": "野战", "you饵": "诱饵", "you惑": "诱惑", "you导": "诱导", "引you": "引诱", "you人": "诱人","旖ni":"旖旎", "yu念":"欲念",
        "z[iì]j[iǐ]": "自己","z[ìi]\\s*you": "自由","zh[iī]d?[àa]u?o":"知道","zha药": "炸药", "zhan有": "占有", "政f[ǔu]": "政府", "zh[èe]ng\\s{0,2}f[uǔ]": "政府", "zong理":"总理", "zhōngy[āa]ng": "中央", "中yang":"中央", "zu[oǒ]y[oò]u":"左右", "zh[oō]uw[ée]i":"周围", "中nan海":"中南海", "中j委":"中纪委",

        // ===单字替换，需特殊处理，防止替换图片===
        "b[āà]ng":"棒","bào":"爆","b[àa]":"吧","bī":"逼","bō":"波",
        "cāo": "操", "cǎo": "草", "cào": "操", "chāng": "娼", "chang": "娼", "cháo": "潮", "chā": "插", "chéng": "成", "chōu": "抽", "chuáng": "床", "chún": "唇", "ch[ūu]n": "春", "cuō": "搓", "cū": "粗",
        "dǎng": "党", "dàng": "荡", "dāo": "刀", "dòng": "洞", "diao": "屌",
        "fǎ": "法", "féi": "肥", "fù": "妇", "fu": "妇", "guān": "官",
        "hán": "含", "hóu": "喉", "hòu": "厚", "huā": "花", "huá": "华", "huò": "惑", "hùn": "混", "hún": "魂",
        "jiǔ": "九", "j[īi]ng": "精", "jìn": "禁", "jǐng": "警", "jiāng": "江", "jiān": "奸", "jiāo": "交", "jūn": "军", "jū": "拘", "jú": "局", "jī": "激", "激ān":"奸",
        "kù": "裤", "k[àa]n": "看",
        "[1l]àng": "浪", "liáo": "撩", "liú":"流", "lì":"莉", "liè":"烈", "[1l]uàn":"乱", "lún":"伦", "luǒ":"裸", "lòu":"露", "[l1]ù":"露", "lǜ":"绿",
        "mǎi": "买", "mài": "卖", "máo": "毛", "mā": "妈", "méng": "蒙", "mén": "门", "miè": "灭", "mí": "迷", "mì": "蜜", "mō": "摸",
        "nǎi": "奶", "nèn": "嫩", "niào": "尿", "niē": "捏", "nòng": "弄", "nǚ": "女",
        "pào": "炮", "piàn": "片",
        "qiāng": "枪", "qíng": "情", "qīn": "亲", "qiú": "求", "quán": "全",
        // "r": "日", 
        "rǔ": "乳",
        "sāo":"骚", "sǎo": "骚", "sè": "色", "shā": "杀", "shēn":"呻", "shén":"神", "shè": "射", "shǐ": "屎", "shì": "侍", "sǐ": "死", "sī": "私", "shǔn": "吮", "sǔn": "吮", "sū": "酥",
        "tān":"贪", "tiǎn": "舔", "tǐng":"挺", "tǐ": "体", "tǒng": "捅", "tōu": "偷", "tou": "偷", "tuǐ": "腿", "tūn": "吞", "tún": "臀", "wēn": "温", "wěn": "吻",
        "xiǎo":"小", "x[ìi]ng": "性", "xiōng": "胸", "xī": "吸", "xí": "习", "xué": "穴", "xuè": "穴", "xùe": "穴",  "xuan":"宣",
        "yāng":"央", "yàn":"艳", "y[īi]n":"阴", "yào": "药", "yé": "爷", "yòu": "诱", "zàng": "脏", "yù": "欲", "yín": "淫",
        "zhēn":"针", "zēn":"针", "zhà":"炸", "zhèng":"政", "zhi":"治", "zǒu": "走", "zuì":"罪", "zuò":"做", "zhong":"中",

        // ===误替换还原===
        "碧欲": "碧玉","美欲": "美玉","欲石": "玉石","惜欲": "惜玉","宝欲": "宝玉",
        "品性": "品行","德性": "德行",
        "波ok":"book",

        // ===其他修正===
        "n吧":"nba",
        "弥俩": "你俩",
        "妳": "你",
        "圞|垩|卝|龘":"",

        // ===去广告===
        "全文字无广告": "",
        "uutxt\\.org": "",
        "3vbook\\.cn": "",
        "txt53712/": "",
        "\xa0{4,12}":"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    };
    // 提取转为 regexp
    var replacements_reg = {};
    for(var key in replacements){
        replacements_reg[key] = new RegExp(key, "ig");
    }
    // 转换函数
    function contentReplacements(text){
        if(!config.content_replacements) return text;

        var s = new Date().getTime();

        // 转换
        for (var key in replacements) {
            text = text.replace(replacements_reg[key], replacements[key]);
        }

        debug("  小说屏蔽字修复耗时：" + (new Date().getTime() - s) + 'ms');
        return text;
    }

    // ====================== Parser ==============================
    function Parser(info, doc, curPageUrl){
        this.info = info || {};
        this.doc = doc;
        this.$doc = $(doc);
        this.curPageUrl = curPageUrl || doc.URL;

        this.isTheEnd = false;
    }
    Parser.prototype = {
        getAll: function(callback){
            this.patch();

            this.getTitles();
            this.getPrevUrl();
            this.getIndexUrl();
            this.getNextUrl();
            this.getContent(callback);

            // this.getBookMark();

            return this;
        },
        patch: function(){
            var contentPatch = this.info.contentPatch;
            if(contentPatch){
                try{
                     contentPatch(this.$doc);
                     debug("Apply Content Patch Success.");
                }catch(e){
                     debug("Error: Content Patch Error!", e);
                }
            }
        },
        getTitles: function(){
            debug("Get title: ");
            var docTitle = this.$doc.find("title").text();

            if(this.info.titleSelector){
                this.chapterTitle = this.$doc.find(this.info.titleSelector).text()
            }else if (this.info.titleReg){
                var matches = docTitle.match(new RegExp(this.info.titleReg));
                if(matches && matches.length == 3){
                    var titlePos = ( this.info.titlePos || 0 ) + 1,
                        chapterPos = (titlePos == 1) ? 2 : 1;
                    this.bookTitle = matches[titlePos].trim();
                    this.chapterTitle = matches[chapterPos].trim();
                }else if(matches){
                    debug("  Title Matches Length: " + matches.length);
                }else{
                    debug(" Title RegExp not match.");
                }
            }

            if(!this.chapterTitle){
                this.chapterTitle = this.autoGetTitleText(this.doc);
            }

            this.bookTitle = this.bookTitle || "";

            // 标题间增加一个空格
            this.chapterTitle = this.chapterTitle
                    .replace("章节目录 ", "")
                    .replace(/^(第?\S+?[章节卷回])(.*)/, "$1 $2");

            this.docTitle = this.bookTitle ?
                    this.bookTitle + ' - ' + this.chapterTitle :
                    docTitle;

            debug("  Book Title: " + this.bookTitle);
            debug("  Chapter Title: " + this.chapterTitle);
            debug("  Document Title: " + this.docTitle);
        },
        // 智能获取标题
        autoGetTitleText: function (document) {
            debug("AutoGetTitle start");

            var
                _main_selector = "h1, h2, h3",
                _second_selector = "#TextTitle, #title, .ChapterName",
                _positive_regexp = /第?\S+[章节卷回]|\d{2,4}/,
                _negative_regexp = /[上下]一章/,
                _title_remove_regexp = /最新章节|书书网/,
                _document_title = document.title ? document.title : document.querySelector("title").textContent,
                _search_document_title = ' ' + _document_title.replace(/\s+/gi, ' ') + ' '
            ;

            var _headings = Array.slice(document.querySelectorAll(_main_selector));
            // 去除包含的
            var _tmp = document.querySelectorAll(_second_selector);
            for (var i = 0; i < _tmp.length; i++) {
                if(!_tmp[i].querySelector(_main_selector))
                    _headings.push(_tmp[i])
            }

            var possibleTitles = {},
                _heading_text;

            for (var i = 0; i < _headings.length; i++) {
                var
                    _heading = _headings[i],
                    _heading_text = _heading.textContent.trim()
                ;

                if (_heading_text in possibleTitles) {
                    continue;
                }

                debug("  开始计算", _heading_text, "的得分");

                // h1 为 1， h2 为 2
                var
                    nodeNum = parseInt(_heading.nodeName.slice(1), 10) || 0,
                    score = 10 / nodeNum,
                    _heading_words = _heading_text.replace(/\s+/g, " ").split(" "),
                    _matched_words = ""
                ;

                debug("  初始得分:" + score);

                if (_positive_regexp.test(_heading_text)) {
                    score += 50;
                }
                if(_negative_regexp.test(_heading_text)){
                    score -= 100;
                }

                debug("  符合正则计算后得分：", score);

                //  count words present in title
                for (var j = 0, _j = _heading_words.length; j < _j; j++) {
                    if (_search_document_title.indexOf(_heading_words[j]) > -1) {
                        _matched_words += _heading_words[j] + ' ';
                    }
                }
                score += _matched_words.length * 1.5;

                // 跳过长度太小的
                if (_matched_words.length < 5) {
                    // continue;
                }

                debug("  跟页面标题比较后得分：", score);

                var _font_size_text = "",
                    _font_size_add_score = 0,
                    _heading_style = window.getComputedStyle(_heading, null);
                if(_heading_style){
                    _font_size_text = _heading_style.getPropertyValue("font-size") || 0;
                    _font_size_add_score = parseInt(_font_size_text, 10) * 1.5;
                }

                score +=  _font_size_add_score;

                debug("  计算大小后得分", score);

                possibleTitles[_heading_text] = score;
            }

            // 找到分数最高的值
            var topScoreTitle, score_tmp = 0;
            for (_heading_text in possibleTitles) {
                if (possibleTitles[_heading_text] > score_tmp) {
                    topScoreTitle = _heading_text;
                    score_tmp = possibleTitles[_heading_text];
                }
            }

            var curTitle = topScoreTitle;
            if (!curTitle) {
                // TODO: document.title 的处理？
                curTitle = _document_title;

                // 下面的正则从
                //     Firefox-Firefox浏览器论坛-卡饭论坛 - 互助分享 - 大气谦和!
                // 变为
                //     Firefox-Firefox浏览器论坛-卡饭论坛
                curTitle = curTitle.replace(/\s-\s.*/i, "")
                    .replace(/_[^\[\]【】]+$/, "");
                curTitle = curTitle.trim();
                curTitle = curTitle.replace(_title_remove_regexp, '');
            }

            curTitle = curTitle.replace(/^章节目录/, "");

            return curTitle;
        },
        getContent: function(callback){
            var content, contentValue;
            if(this.info.contentSelector){
                content = this.$doc.find(this.info.contentSelector);
            }else{
                var selectors = rule.contentSelectors;
                // 按照顺序选取
                for(var i = 0, l = selectors.length; i < l; i++){
                    content = this.$doc.find(selectors[i]);
                    if(content.length === 1){
                        debug("  自动查找内容选择器: " + selectors[i]);
                        break;
                    }
                }
            }

            if(content.length === 0){
                this.isTheEnd = true
                this.nextUrl = null
                debug("没有找到内容")
                callback && callback(this)
                return;
            }

            // 特殊处理，例如起点
            var self = this;
            var ajaxScript = this.$doc.find('.' + READER_AJAX);
            if(ajaxScript.length > 0){
                var url = ajaxScript.attr('src');
                if(!url) return;
                var charset = ajaxScript.attr('charset') || 'utf-8';
                debug('  内容特殊处理 Ajax: ' + url +". charset=" + charset);
                GM_xmlhttpRequest({
                    url: url,
                    method: "GET",
                    overrideMimeType: "text/html;charset=" + charset,
                    onload: function(res){
                        var text = res.responseText.replace(/document.write(ln)?\('/, "")
                                .replace("');", "");
                        text = text.replace(/[\n\r]/g, '</p><p>');
                        self.content = self.handleContentText(text, self.info);
                        callback && callback(self);
                    }
                });
            }else{
                // 对页面内容处理
                content.find(rule.contentRemove).remove();
                this.content = this.handleContentText(content.html(), this.info);
                callback && callback(this);
            }
        },
        handleContentText: function(text, info){
            if(!text) return null;

            var contentHandle = info.contentHandle == undefined ? true : info.contentHandle;

            /* Turn all double br's into p's */
            text = text.replace(rule.replaceBrs, '</p>\n<p>');

            text = text.replace(rule.contentReplace, '');

            if(info){
                if(info.contentReplace){
                    var replace = info.contentReplace;
                    if(typeof replace == 'string'){
                        text = text.replace(new RegExp(replace, "ig"), '');
                    }else if(replace instanceof RegExp){
                        text = text.replace(replace, '');
                    }else if(typeof replace == 'object'){
                        for(var key in replace){
                            text = text.replace(new RegExp(key, "ig"), replace[key]);
                        }
                    }
                    debug("  Content Replaced");
                }

                // 去除内容中包含的标题
                var titleRegText = "";
                if(this.bookTitle){
                    titleRegText += this.bookTitle + "\\d+";
                }

                text = text.replace(new RegExp(titleRegText, "g"), "");
                debug("  Content replace title: " + titleRegText);
            }

            if(contentHandle){
                // 先提取出 img
                var imgs = {};
                var i = 0;
                text = text.replace(/<img[^>]*>/g, function(img){
                    imgs[i] = img;
                    return "{" + (i++) + "}";
                });

                // 小说屏蔽字修复
                text = contentReplacements(text);

                // 还原图片
                text = reader.nano(text, imgs);
            }

            var $div = $("<div>").html(text);

            if(contentHandle){
               // 给独立的文本添加 <p></p>
               $div.contents().filter(function(){
                   return this.nodeType == 3 && this.textContent.trim().length;
               }).wrap("<p></p>")
               .end()
               .filter('br')
                   .remove();
            }

            // 删除空白的 p
            $div.find("p").filter(function(){
                return this.textContent.trim().length == 0;
            }).remove();

            // 图片居中，所有图像？
            if(info.fixImage){
                $div.find("img").each(function(){
                    this.className += " blockImage";
                });
            }

            text = $div.html();

            // 修复第一行可能是空的情况
            text = text.replace(/(?:\s|&nbsp;)+<p>/, "<p>");

            // 修复当行就一个字符的
            text = text.replace(/<\/p><p>([。])/, "$1");

            if(config.paragraphBlank){
                text = text.replace(/<p>(?:\s|&nbsp;)+/g, "<p>")
                        .replace(/<p>/g, "<p>　　");
            }

            return text;
        },
        getNextUrl: function(){
            var url = '',
                selector = this.info.nextSelector || rule.nextSelector;

            var link = this.$doc.find(selector);
            if(link.length > 0){
                url = config.fullHref ? getFullHref(link[0]) : link.attr('href');
                debug("找到下一页链接: " + url);
            }else{
                debug("无法找到下一页链接.", link);
            }

            this.nextUrl = url;
            this.isTheEnd = !this.checkNextUrl(url);
            if(this.isTheEnd){
                this.theEndColor = THE_END_COLOR
            }

            return url;
        },
        checkNextUrl: function(url){
            switch(true){
                case url == '':
                case rule.nextUrlIgnore && rule.nextUrlIgnore.test(url):
                case url == this.indexUrl:
                case url == this.prevUrl:
                case url == this.curPageUrl:
                case rule.endNum_regexp.test(this.prevUrl) && !rule.endNum_regexp.test(url):
                case /book\.zongheng\.com\/readmore/.test(url):
                    return false;
                default:
                    return true;
            }
        },
        getPrevUrl: function(){
            var url, selector;

            selector = this.info.prevSelector || rule.prevSelector;

            var link = this.$doc.find(selector);
            if(link.length > 0){
                url = config.fullHref ? getFullHref(link[0]): link.attr('href');
                debug("找到上一页链接: " + url);
            }else{
                debug("无法找到上一页链接.", link);
            }
            this.prevUrl = url || '';
            return url;
        },
        getIndexUrl: function(){
            var url, link;
            if(this.info.indexSelector){
                link = this.$doc.find(this.info.indexSelector);
            }else{
                var selectors = rule.indexSelectors;
                var _indexLink;
                // 按照顺序选取目录链接
                for(var i = 0, l = selectors.length; i < l; i++){
                    _indexLink = this.$doc.find(selectors[i]);
                    if(_indexLink.length > 0){
                        link = _indexLink;
                        break;
                    }
                }
            }

            if(link && link.length > 0){
                url = config.fullHref ? getFullHref(link[0]) : link.attr('href');
                debug("找到目录链接: " + url);
            }else{
                debug("无法找到目录链接.");
            }

            this.indexUrl = url;
            return url;
        },
        getBookMark: function(){
            var url = this.curPageUrl;
            if(url.match(/qidian/)){
                m = url.match(/\d+/g);
                bookid = m[0];
                chapid = m[1];
                this.addBookMark = '<a href="javascript:加入书架书签" onclick="javascript:addBookMark(\'' +
                    bookid + '\',\'' + chapid + '\',null)">书签</a> | ';
            }
        }
    };

    // ====================== reader ==============================
    var reader = {
        isEnabled: false,
        parsedPages: {},
        paused: false,
        curPageUrl: "",
        requestUrl: null,
        iframe: null,
        remove: [],
        tpl_content: '\
            <div class="chapter-head">{chapterTitle}</div>\
            <div class="chapter-head-nav">\
                 <a href="{prevUrl}"><<上一页</a> | \
                <a href="{indexUrl}">目录</a> | \
                <a href="{nextUrl}">下一页>></a>\
            </div>\
            <div class="content">{content}</div>\
            <div class="chapter-footer-nav">\
                <a class="prev-page" href="{prevUrl}"><<上一页</a> | \
                <a class="index-page" href="{indexUrl}">目录</a> | \
                {addBookMark}\
                <a class="next-page" style="color:{theEndColor}" href="{nextUrl}">下一页>></a>\
            </div>\
        ',

        init: function(){
            if(this.isEnabled) return;

            this.site = this.getCurSiteInfo() || {};
            var isAutoLaunch = this.checkIsAutoLaunch();

            if(isAutoLaunch){
                if(this.site.mutationSelector){  // 特殊的启动：等待js把内容生成完成
                    var success = this.addMutationObserve(window, reader.launch);
                    if(!success){
                        this.launch();
                    }
                    // if(success){
                        // setTimeout(function(){
                        //     reader.launch();
                        // }, config.mutationMaxTime);
                    // }else{
                    //     this.launch();
                    // }
                }else if(this.site.timeout){
                    setTimeout(reader.launch, this.site.timeout);
                }else{
                    this.launch();
                }
            }else{
                reader.addButton();
            }
        },
        getCurSiteInfo: function (){
            var sites = rule.specialSite;
            var url_reg;
            for (var i = 0, l = sites.length; i < l; i++) {
                url_reg = new RegExp(sites[i].url);
                if(url_reg.test(window.location.href)){
                    debug("找到规则：", sites[i]);
                    return sites[i];
                }
            }

            return null;
        },
        checkIsAutoLaunch: function (){
            var locationHref = window.location.href,
                referrer = document.referrer;
            switch(true){
                case location.hostname == 'www.fkzww.net' && !document.title.match(/网文快讯/):  // 啃书只自动启用一个地方
                case L_getValue("booklinkme_disable_once") == 'true':
                    L_removeValue("booklinkme_disable_once");
                    return false;

                case config.AUTO_ENABLE && GM_getValue("auto_enable"):
                case config.booklinkme && /booklink\.me/.test(referrer):
                case config.soduso && /www\.sodu\.so/.test(referrer):
                    return true;
                default:
                    return false;
            }
        },
        addMutationObserve: function(win, callback){
            debug("check MutationObserve")

            var selector = this.site.mutationSelector;
            if(!selector)
                return false;

            var target = $(win.document).find(selector)[0];
            if(!target)
                return false;

            var excludeCount = this.site.mutationExcludeCount || 0;
            if((target.children.length - excludeCount) > 0)
                return false;

            var observer = new win.MutationObserver(function(mutations){
                // console.log(mutations)
                var mutation = mutations[mutations.length - 1];

                if(mutation.addedNodes.length){
                    observer.disconnect();
                    callback();
                }
            });
            observer.observe(target, {childList: true});
            // debug("add MutationObserver", target);

            return true;
        },
        launch: function(){
            // 只解析一次，防止多次重复解析一个页面
            if(document.body.getAttribute("name") == "MyNovelReader"){
                return reader.toggle();
            }

            var parser = new Parser(reader.site, document);
            parser.getAll(function(){
                var tpl_html = '<div id="wrapper">' + reader.tpl_content + '</div>';
                if(parser.content){
                    debug("reader launched.");

                    reader.parsedPages[window.location.href.replace(/\/$/, '')] = true;

                    reader.prepDocument();

                    GM_addStyle(css);

                    reader.fixMobile();

                    document.title = parser.docTitle;
                    window.name = "MyNovelReader";
                    document.body.setAttribute("name", "MyNovelReader");
                    document.body.innerHTML = reader.nano(tpl_html, parser);

                    // 再次移除其它不相关的。主要起点中文有时候有问题
                    if(window.location.hostname == "read.qidian.com"){
                        setTimeout(function(){
                            $('body > *:not("#wrapper, .readerbtn, #reader-notice")').remove();
                        }, 3000);
                    }

                    reader.requestUrl = parser.nextUrl;
                    reader.isTheEnd = parser.isTheEnd;

                    reader.addListener();

                    reader.isEnabled = true;
                    reader.addButton();

                    // reader.fixImageFloats();

                    reader.scroll();
                }else{
                }
            });
        },
        prepDocument: function() {
            window.onload = window.onunload = function() {};

            // 破解右键限制
            var doc = document;
            var bd = doc.body;
            bd.onclick = bd.onselectstart = bd.oncopy = bd.onpaste = bd.onkeydown = bd.oncontextmenu = bd.onmousemove = bd.onselectstart = bd.ondragstart = doc.onselectstart = doc.oncopy = doc.onpaste = doc.onkeydown = doc.oncontextmenu = null;
            doc.onclick = doc.ondblclick = doc.onselectstart = doc.oncontextmenu = doc.onmousedown = doc.onkeydown = function() {
                return true;
            };
            with(document.wrappedJSObject || document) {
                onmouseup = null;
                onmousedown = null;
                oncontextmenu = null;
            }
            var arAllElements = document.getElementsByTagName('*');
            for (var i = arAllElements.length - 1; i >= 0; i--) {
                var elmOne = arAllElements[i];
                with(elmOne.wrappedJSObject || elmOne) {
                    onmouseup = null;
                    onmousedown = null;
                }
            }

            // remove body style
            $('link[rel="stylesheet"], style, script').remove();
            $('*').removeAttr('style');
            $('body').removeAttr('bgcolor');
        },
        fixMobile: function(){
            // 自适应网页设计
            var meta = document.createElement("meta");
            meta.setAttribute("name", "viewport");
            meta.setAttribute("content", "width=device-width, initial-scale=1");
            document.head.appendChild(meta);
        },
        addButton: function(){
            if(button_css){
                GM_addStyle(button_css);
            }else{
                // 逐浪网等按钮修复：右边的分享盖住了按钮
                switch(true){
                    case /zhulang|yanmoxuan/.test(window.location.hostname):
                        GM_addStyle(".readerbtn {top: 5% !important;}");
                        break;
                    case window.location.hostname == "shouda8.com":
                        GM_addStyle(".readerbtn {margin-right: 25px !important;}")
                        break;
                }
            }

            reader.btnStyle = GM_addStyle(".readerbtn { position: fixed; right: 0; top: 60%; z-index: 1597; padding: 5px;\
                width: 12px; border: 1px solid; border-color: #5483D2; background: #4477DE; color: #FFF;\
                font: 12px/1.5 '微软雅黑','宋体',Arial; cursor: pointer; }");

            var btn = document.createElement("div");
            btn.className = "readerbtn";
            btn.innerHTML = reader.isEnabled ? "退出" : "阅读模式";
            btn.addEventListener("click", reader.toggle, false);
            document.body.appendChild(btn);
        },
        toggle: function(){
            if(reader.isEnabled){  // 退出
                GM_setValue("auto_enable", false);
                L_setValue("booklinkme_disable_once", "true");

                unsafeWindow.location = reader.curPageUrl;
            }else{
                GM_setValue("auto_enable", true);
                L_removeValue("booklinkme_disable_once");
                reader.isEnabled = true;
                reader.launch();
            }
        },
        addListener: function(){
            document.addEventListener("dblclick", reader.pauseHandler, false);

            window.addEventListener("scroll", reader.scroll, false);

            // reader.remove.push(function(){
            //     document.removeEventListener("dblclick", reader.pauseHandler, false);
            //     window.removeEventListener("scroll", reader.scroll, false);
            // });
        },
        removeListener: function(){
            debug("移除各种事件监听");
            reader.remove.forEach(function(_remove){
                _remove();
            });
        },
        pauseHandler: function(e){
            reader.paused = !reader.paused;
            if(reader.paused){
                notice('<b>状态</b>:'+'自动翻页<span style="color:red!important;"><b>暂停</b></span>.');

            }else{
                notice('<b>状态</b>:'+'自动翻页<span style="color:red!important;"><b>启用</b></span>.');
                reader.scroll();
            }
        },
        scroll: function(){
            var scrollHeight = Math.max(document.documentElement.scrollHeight,
                                        document.body.scrollHeight),
                remain = scrollHeight - window.innerHeight - window.scrollY;

            if (!reader.paused && remain < config.BASE_REMAIN_HEIGHT) {
                reader.doRequest();
            }

            if(reader.isTheEnd){
                if(reader.isEndNoticed){
                    if(remain > 50){
                        reader.endNotice.style.display = "none";
                        reader.isEndNoticed = false;
                    }
                }else if(remain < 20){
                    reader.endNotice = notice("已到达最后一页...", false);
                    reader.isEndNoticed = true;
                }
            }
        },
        doRequest: function(){
            var nextUrl = reader.requestUrl;

            if(nextUrl && !reader.isTheEnd && !(nextUrl in reader.parsedPages)){
                reader.parsedPages[nextUrl] = true;
                reader.curPageUrl = reader.requestUrl;
                reader.requestUrl = null;

                reader.requestNotice = notice("正在加载下一页中...", false);

                var useiframe = reader.site && reader.site.useiframe;
                if(useiframe){
                    reader.iframeRequest(nextUrl);
                }else{
                    reader.httpRequest(nextUrl);
                }
            }
        },
        httpRequest: function(nextUrl){
            debug("GM_xmlhttpRequest: " + nextUrl);
            GM_xmlhttpRequest({
                url: nextUrl,
                method: "GET",
                overrideMimeType: "text/html;charset=" + document.characterSet,
                onload: function(res){
                    var doc = parseHTML(res.responseText);
                    reader.loaded(doc);
                }
            });
        },
        iframeRequest: function(nextUrl){
            debug("iframeRequest: " + nextUrl);
            if(!reader.iframe){
                var i=document.createElement('iframe');
                reader.iframe=i;
                i.name='mynovelreader-iframe';
                i.width='100%';
                i.height='0';
                i.frameBorder="0";
                i.style.cssText='\
                    margin:0!important;\
                    padding:0!important;\
                    visibility:hidden!important;\
                ';
                i.src = nextUrl;
                i.addEventListener('load',reader.iframeLoaded,false);
                reader.remove.push(function(){
                    i.removeEventListener('load',reader.iframeLoaded,false)
                });
                document.body.appendChild(i);
            }else{
                reader.iframe.contentDocument.location.replace(nextUrl);
            }
        },
        iframeLoaded: function(){
            var iframe = this;
            var body = iframe.contentDocument.body;

            if(body && body.firstChild){
                doc = iframe.contentDocument;
                win = iframe.contentWindow || doc;

                var mutationSelector = reader.site.mutationSelector;
                if(mutationSelector){
                    var success = reader.addMutationObserve(win, function(){
                        reader.loaded(doc);
                    });
                    if(!success){
                        reader.loaded(doc);
                    }
                }else{
                    var timeout = reader.site.timeout || 0;

                    setTimeout(function(){
                        reader.loaded(doc);
                    }, timeout);
                }
            }
        },
        loaded: function(doc){
            var parser = new Parser(reader.site, doc, reader.curPageUrl);

            parser.getAll(reader.addNextPage);
        },
        addNextPage: function(parser){
            if(parser.content){
                var content = reader.nano(reader.tpl_content, parser);
                $('#wrapper').append(content);

                // unsafeWindow.history.pushState(null, parser.docTitle, parser.curPageUrl);
                document.title = parser.docTitle;

                /**
                 * After the page has rendered, post process the content. This delay is necessary because,
                 * in webkit at least, offsetWidth is not set in time to determine image width. We have to
                 * wait a little bit for reflow to finish before we can fix floating images.
                **/
                // setTimeout(function(){
                //     reader.fixImageFloats();
                // }, 800);

                reader.requestUrl = parser.nextUrl
                reader.isTheEnd = parser.isTheEnd
            }else{
                reader.removeListener()
                $("<div>没有找到下一页的内容</div>")
                    .css({
                        "text-align": "center",
                        "padding": "10px",
                        "background": "rgb(248, 248, 248)"
                    })
                    .appendTo($("#wrapper"))
                // reader.requestUrl = null
                // reader.isTheEnd = true
                // $(".next-page").last().css("color", THE_END_COLOR);
            }

            reader.requestNotice.style.display = "none"
        },
        searchInBooklink: function(bookName, callback){
            GM_xmlhttpRequest({
                method: "POST",
                url: "http://booklink.me/after_search.php",
                data: encodeURI("name=" + bookName + "&book=BookLink.Me小说搜索&search_type=book"),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                onload: function(res){
                    var doc = parseHTML(res.responseText);
                    var links = $x("//a[text()='" + bookName + "']", doc, doc);
                    if(links.length == 1){
                        $(".index-page").after($("<a></a>").attr({
                            href: links[0].href
                        }).text(bookName));
                    }
                    // var links = doc.querySelectorAll("table a[href^='charpter.php?site_id=']");
                }
            });
        },
        fixImageFloats: function (articleContent) {
            if(!config.fixImageFloats) return;

            articleContent = articleContent || document.getElementById("wrapper");

            var imageWidthThreshold = Math.min(articleContent.offsetWidth, 800) * 0.55,
                images = articleContent.querySelectorAll('img:not(.blockImage)');

            for(var i=0, il = images.length; i < il; i+=1) {
                var image = images[i];

                if(image.offsetWidth > imageWidthThreshold) {
                    image.className += " blockImage";
                }
            }
        },
        _regex: /\{([\w\.]*)\}/g,
        nano: function(template, data) {
            return template.replace(this._regex, function(str, key) {
                var keys = key.split('.'),
                    value = data[keys.shift()];
                keys.forEach(function(key) {
                    value = value[key];
                });
                return (value === null || value === undefined) ? '' : value;
            });
        },
    };

    // bind reader init
    reader.init = reader.init.bind(reader);

    window.addEventListener("DOMContentLoaded", reader.init, false);

    var db,
        button_css = '';

    window.postMessage("fromeMyNovelReader.post", "*");
    window.addEventListener('message', function(e) {
        if (db) return;
        var data = e.data;
        if (typeof data == 'string' && data.indexOf('MyNovelReader.db') == 0) {

            window.removeEventListener('message',arguments.callee,false);
            window.postMessage("fromeMyNovelReader.remove", "*");

            data = data.slice(16);
            try{
                db = eval( "(" + data + ")" );
            }catch(e) {}

            for(var key in db.config){
                config[key] = db.config[key];
            }

            if(db.SITE_INFO)
                rule.specialSite = db.SITE_INFO.concat(rule.specialSite);

            if(db.css)
                css = db.css;

            if(db.button_css)
                button_css = db.button_css;

            debug("接收到 MyNovelReader.db 数据");

            window.addEventListener("DOMContentLoaded", reader.init(), false);
        }
    }, false);


    // 为了防止 Error: Scriptish access violation: unsafeWindow cannot call: GM_getValue
    //     详见 http://wiki.greasespot.net/Greasemonkey_access_violation
    unsafeWindow.readx = function(){
        fakeTimeout(function(){
            reader.launch();
        });
    };

    function fakeTimeout(callback) {
      // Register event listener
      window.document.body.addEventListener("timeoutEvent", callback, false);
      // Generate and dispatch synthetic event
      var ev = document.createEvent("HTMLEvents");
      ev.initEvent("timeoutEvent", true, false);
      window.document.body.dispatchEvent(ev);
    }


    var noticeDiv;
    var noticeDivto;
    var noticeDivto2;
    function notice(html_txt, autoClose){
        if(!noticeDiv){
            var div=document.createElement('div');
            div.id = "reader-notice";
            noticeDiv=div;
            div.style.cssText='\
                position:fixed!important;\
                z-index:2147483647!important;\
                float:none!important;\
                width:auto!important;\
                height:auto!important;\
                font-size:13px!important;\
                padding:3px 20px 2px 5px!important;\
                background-color:#7f8f9c!important;\
                border:none!important;\
                color:#000!important;\
                text-align:left!important;\
                left:0!important;\
                bottom:0!important;\
                opacity:0;\
                -moz-border-radius:0 6px 0 0!important;\
                border-radius:0 6px 0 0!important;\
                -o-transition:opacity 0.3s ease-in-out;\
                -webkit-transition:opacity 0.3s ease-in-out;\
                -moz-transition:opacity 0.3s ease-in-out;\
            ';
            document.body.appendChild(div);

            noticeDiv.addEventListener("click", function(){
                noticeDiv.style.display='none';
            }, false);
        }
        clearTimeout(noticeDivto);
        clearTimeout(noticeDivto2);
        noticeDiv.innerHTML=html_txt;
        noticeDiv.style.display='block';
        noticeDiv.style.opacity='0.96';

        if(typeof autoClose == 'undefined' || autoClose){
            noticeDivto2=setTimeout(function(){
                noticeDiv.style.opacity='0';
            },1666);
            noticeDivto=setTimeout(function(){
                noticeDiv.style.display='none';
            },2000);
        }

        return noticeDiv;
    }

    function debug(){ if(config.DEBUG) console.log.apply(console, arguments);}
    function $A(arg) { return Array.prototype.slice.call(arg); }
    function L_getValue(key) {
        try{
            return localStorage.getItem(key);
        }catch(e) {}

    }
    function L_setValue(key, value) {
        try{
            localStorage.setItem(key, value);
        }catch(e) {}
    }
    function L_removeValue(key){
        try{
            localStorage.removeItem(key);
        }catch(e) {}
    }

    function $x(aXPath, aContext, aDocument){
        var nodes = [];
        var doc = aDocument || document;
        var aContext = aContext || doc;

        try {
          var results = doc.evaluate(aXPath, aContext, null,
                                     XPathResult.ANY_TYPE, null);
          var node;
          while (node = results.iterateNext()) {
            nodes.push(node);
          }
        }
        catch (ex) {}

        return nodes;
    }

    // jQuery text 完全匹配. e.g. a:econtains('最新章节')
    $.expr[":"].econtains = function(obj, index, meta, stack){return (obj.textContent || obj.innerText || $(obj).text() || "").toLowerCase() == meta[3].toLowerCase();};
     //------------------- 辅助函数 ----------------------------------------
    function getFullHref(href){if(typeof href == 'undefined')return '';if(typeof href!='string') href=href.getAttribute('href');var a = getFullHref.a;if(!a){getFullHref.a=a=document.createElement('a');}a.href = href;return a.href;}

    function parseHTML(responseText) {
        var doc = new DOMParser().parseFromString(responseText, "text/html");
        if (!doc) {
            doc = document.implementation.createHTMLDocument("");
            doc.querySelector("html").innerHTML = responseText;
        }
        return doc;
    }

})('\
/**\
 * 下面的皮肤根据 defpt 的修改而来\
 */\
body {background:#EEE;}\
.chapter-head {\
    background-image: linear-gradient(#DDD, #CCC);\
    font-family:"Microsoft YaHei UI",微软雅黑,新宋体,宋体,arial;\
    text-align:center;\
    font-size:1.2em;\
    color:black;\
    text-shadow: silver 0px 0px 1px;\
    margin-bottom:3px;\
    padding-bottom:3px;\
}\
.content {\
    font-family:"Microsoft YaHei UI",微软雅黑,新宋体,宋体,arial;\
    line-height:1.75;\
    max-width:850px;\
    margin-top:15px;\
    margin-left:auto;\
    margin-right:auto;\
    font-size:1.2em;\
    /* text-indent: 2em; */ \
}\
.content img.blockImage {clear: both;float: none;display: block;margin-left: auto;margin-right: auto;}\
.chapter-head-nav{\
    display:none;\
}\
.chapter-footer-nav{\
    text-align:center;\
    font-size:0.9em;\
    margin:-10px 0px 30px 0px;\
}\
');

