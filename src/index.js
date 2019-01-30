import _ from 'lodash'
import './style/index.css'
import './style/base.less'
// import $ from 'jquery'

function createDivElement() {
    const divElement = document.createElement('div')
    divElement.innerHTML = _.join(['hello', 'webpack'], ' ')
    return divElement
}

const divEle = createDivElement()
document.body.appendChild(divEle)

// console.log('测试开发环境调试模式22')
// // 测试babel编译

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     say() {
//         console.log(`my name is ${this.name}, and age is ${this.age}`)
//     }
// }

// const xm = new Person('xiaoming', 20)
// xm.say()

// 测试外部扩展配置
// $(function () {
//     $('.logo').click(function () {
//         console.log('click')
//     })
// })
