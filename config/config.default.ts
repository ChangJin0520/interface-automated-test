import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import * as fs from 'fs'

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // add your egg config in here
    config.middleware = [];

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1633676620585_2239_12313123';

    // 静态资源配置
    config.static = {
        prefix: '/assets/',
        dir: [
            path.join(appInfo.baseDir, 'app/public/assets'),
        ],
    };

    // view 层
    config.view = {
        defaultViewEngine: 'nunjucks',
        root: path.join(appInfo.baseDir, 'app/public'),
        mapping: {
            '.html': 'nunjucks',
        },
    };

    // 修改 favicon 图标
    config.siteFile = {
        '/favicon.ico': fs.readFileSync('app/public/favicon.ico'),
    };

    // 配置 cors
    config.security = {
        domainWhiteList: ['http://localhost:3000']
    }

    // add your special config in here
    const bizConfig = {
        sourceUrl: '',
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
