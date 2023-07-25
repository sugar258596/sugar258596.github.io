import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'



export default defineConfig4CustomTheme<VdoingThemeConfig>({
    //  vuepress-theme-vdoing主题配置
    theme: 'vdoing', // 使用依赖包主题
    // theme: path.resolve(__dirname, '../../theme-vdoing'), // 使用本地主题
    //
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性,
            title: 'sugar258596',
            description: 'vuepress-theme-vdoing demo',
        }
    },

    // 主题配置
    themeConfig: {

    },
    //  
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], //favicons，资源放在public文件夹
    ],
});