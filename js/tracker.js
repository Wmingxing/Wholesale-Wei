// ==========================================
// 💡 请在这里填入你从 JSONBin.io 申请到的配置信息
// ==========================================
// const JSONBIN_BIN_ID = "6ae8774bac6210605a659a90"; 
// const JSONBIN_API_KEY = "$2a$10$FdmhvOggY93YTVfjWsj4h.hXVCUwTuI3spLOf5L86ZyY6tYy3OJMa";

const Tracker = {
    // 1. 从云端获取所有数据
    async getRemoteData() {
        try {
            let response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
            let result = await response.json();
            return result.record || { clicks: {}, likes: {}, offers: [], messages: [] };
        } catch (e) {
            console.error("获取云端数据失败:", e);
            return { clicks: {}, likes: {}, offers: [], messages: [] };
        }
    },

    // 2. 将修改后的所有数据整体同步回云端
    async saveRemoteData(data) {
        try {
            await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY
                },
                body: JSON.stringify(data)
            });
        } catch (e) {
            console.error("同步云端数据失败:", e);
        }
    },

    // 记录点击量
    async trackClick(targetName) {
        let data = await this.getRemoteData();
        data.clicks[targetName] = (data.clicks[targetName] || 0) + 1;
        await this.saveRemoteData(data);
    },

    // 商品点赞操作
    async toggleLike(productId) {
        let data = await this.getRemoteData();
        if (!data.likes) data.likes = {};
        data.likes[productId] = (data.likes[productId] || 0) + 1;
        await this.saveRemoteData(data);
        return data.likes[productId];
    },

    async getLikes(productId) {
        let data = await this.getRemoteData();
        return (data.likes && data.likes[productId]) ? data.likes[productId] : 0;
    },

    // 保存降价意向
    async savePriceOffer(offerData) {
        let data = await this.getRemoteData();
        if (!data.offers) data.offers = [];
        data.offers.unshift(offerData);
        await this.saveRemoteData(data);
    },

    // 保存客服留言
    async saveSupportMessage(msgData) {
        let data = await this.getRemoteData();
        if (!data.messages) data.messages = [];
        data.messages.unshift(msgData);
        await this.saveRemoteData(data);
    }
};

// 自动为带有 data-track 属性的链接绑定点击统计
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-track]').forEach(el => {
        el.addEventListener('click', () => {
            const trackName = el.getAttribute('data-track');
            Tracker.trackClick(trackName);
        });
    });
});