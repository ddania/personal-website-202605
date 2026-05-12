import type { Product } from '@/types/product'

export const products: Product[] = [
    {
        id: 1,
        name: '个人网页',
        tag: '项目',
        image: '/images/first-web.png',
        description: '欢迎来到的我的第一个作品！',
        features: ['网页', '个人展示', '第一次发布']
    },
    {
        id: 2,
        name: '游戏名2',
        tag: '开发中',
        image: '/images/production1.png',
        description: '多人联机建造与生存，与好友一起打造梦想家园。',
        features: ['多人联机', '建造系统', '生存挑战']
    },
    {
        id: 3,
        name: '游戏名3',
        tag: '策划中',
        image: '/images/production1.png',
        description: '颠覆性玩法的次世代大作，敬请期待。',
        features: ['创新玩法', '沉浸叙事']
    }
]
