import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            shoplist: [],
        }
    },
    mutations: {
        addcount(state, oldproduct) {
            oldproduct.count += 1;
        },
        addcart(state, payload) {
            payload.count = 1;
            payload.ischeck = false;
            state.shoplist.push(payload);
        }
    },
    getters: {
        totalShop(state) {
            return state.shoplist.length;
        },
        shoplist(state) {
            return state.shoplist;
        }
    },
    actions: {
        addShop(context, payload) {
            return new Promise((resolve, reject) => {
                let oldproduct = context.state.shoplist.find(item => item.iid === payload.iid);
                // for (let item of state.shoplist) {
                //     if (item.iid === payload.iid) {
                //         oldproduct = item;
                //     }
                // }

                if (oldproduct) {
                    context.commit('addcount', oldproduct);
                    resolve('数量加一')
                } else {
                    context.commit('addcart', payload);
                    resolve('加入购物车')
                }
            })

        },
    }
})

const app = createApp({ App })

// 将 store 实例作为插件安装
app.use(store)

export default store;