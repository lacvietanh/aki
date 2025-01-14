/**
 * 使用此方法设置主题
 *
 * 新增主题需先在此处引入新主题的.scss文件，再在themeConfig里配置主题相关组件颜色
 */

// 先加载所有的主题(default在main.scss中加载，因为default主题对body没有使用class，可以应用在登陆页上)
// 默认主题
export const defaultTheme = 'dark'

export const themeList = [
    { name: '深黑', key: 'dark' },
    { name: '浅灰', key: 'gray' },
    { name: '亮色', key: 'light' }
]

/**
 * 设置主题
 * @param themeName
 */
export const setTheme = (themeName: string = defaultTheme): void => {
    let defaultName = ''
    if (themeList.some(item => item.key === themeName)) {
        // 把该主题的所有属性存到缓存
        defaultName = themeName
        document.body.className = defaultName

        if (themeName !== 'dark') {
            /* eslint no-unused-expressions: "off" */
            import(`./${ themeName }/style.scss`)
        }
    }
}
