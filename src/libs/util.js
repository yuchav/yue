let util = {
    isWeixinBrowser: (/MicroMessenger/i).test(window.navigator.userAgent),
};

util.title = (title) => {
    if (util.isWeixinBrowser) {
        setTimeout(function() {
            //利用iframe的onload事件刷新页面
            document.title = title;
            var iframe = document.createElement('iframe');
            iframe.src = '1px4wx.gif';
            iframe.onload = function() {
                setTimeout(function() {
                    document.body.removeChild(iframe);
                }, 0);
            };
            document.body.appendChild(iframe);
        }, 0);
    } else {
        document.title = title;
    }
};

export default util;