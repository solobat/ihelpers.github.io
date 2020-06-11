import AV from 'leancloud-storage'

function initAV() {
    const appId = 'Gqpvgnvpl9txzKrWY9tEXzdu-gzGzoHsz';
    const appKey = 'IorkRpy9Ae2Xaz8LY7zFQAx4';
    const serverURL = 'https://gqpvgnvp.lc-cn-n1-shared.com';
    AV.init({ appId, appKey, serverURL });
}

initAV();