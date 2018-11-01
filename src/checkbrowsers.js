export function check() {
    if (typeof Promise === 'undefined') {
        const htmlTpl = `
        <div style="position:absolute;left:0;right:0;top:0;bottom:0;background-color:#ccc">
            <p style="text-align:center;color:rgb(255, 255, 46);margin-top:100px;">您的浏览器版本过低，推荐您使用Chrome最新版本</p>
        </div>`
        document.body.insertAdjacentHTML("beforeend", htmlTpl)
        return false
    }
    return true
}