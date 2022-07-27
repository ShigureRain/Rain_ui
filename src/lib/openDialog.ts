import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'

export const openDialog = (options) => {
    const {title, content, closeOnClickOverlay, ok, cancel} = options   //析构options传来的参数
    const div = document.createElement('div')   //创建div
    document.body.appendChild(div)   //body里添加 div标签
    const close = () => {
        // @ts-ignore
        app.unmount(div)   //关闭时把app取消挂载到div
        div.remove()      //从html内删除div
    }
    const app = createApp({    //创建app应用实例
        render() {
            return h(   //h接收三个参数  接收三个参数：type，props 和 children
                Dialog,  //HTML 标签名、组件、异步组件或函数式组件
                {   //与我们将在模板中使用的 attribute、prop 和事件相对应；这里就是Dialog模板
                    visible: true,
                    'onUpdate:visible': (newVisible) => {
                        if (newVisible === false) {
                            close()
                        }
                    },
                    closeOnClickOverlay,
                    ok, cancel
                },
                {  //子代 VNode，使用 h() 生成，或者使用字符串来获取“文本 VNode”，或带有插槽的对象；这里就是带有插槽的对象
                    title,
                    content,
                }
            )
        },
    })
    app.mount(div)   //app挂载到新建的div上
}
