import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1633676620585_2239';

    config.static = {
        prefix: '/assets/',
        dir: [
            path.join(appInfo.baseDir, 'app/public/assets'),
        ],
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        root: path.join(appInfo.baseDir, 'app/public'),
        mapping: {
            '.html': 'nunjucks'
        }
    };

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: ``,
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
