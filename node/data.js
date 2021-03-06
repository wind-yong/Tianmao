const path =  require("path")
const express = require('express');
const app = express();

// app.use(express.static('pubilc'))
// app.use('/static',express.static('pubilc'))

let tainmaoPath = './images/'


const data = {
    imgArray:[ 
        "./images/轮1.jpg",
        "./images/轮2.jpg",
        "./images/轮3.jpg",
        "./images/轮4.jpg",
        "./images/轮5.jpg",
        "./images/轮6.jpg",
    ],
    SalesList:{
        'jinkou':{
            name:'进口酒饮粮油',
            bacgroundColor:'#b373fb',
            content:[{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58da"
              },
              "price": "118",
              "imageUrl": "./images/1.jpg",
              "title": "西班牙进口 歌伦初榨橄榄油1000ml/瓶",
              "feature": "【原装进口，淡淡果香】",
              "isSoldOut": true,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58db"
              },
              "price": "35.6",
              "imageUrl": "./images/1-2.jpg",
              "title": "泰国进口泰砻氏 泰国茉莉香米1kg 原装进口大米",
              "feature": "【 茉莉香米 香糯滑软】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58dc"
              },
              "price": "19",
              "imageUrl": "./images/1-3.jpg",
              "title": "韩国进口 膳府酿造酱油501  500ml  生蘸/凉拌",
              "feature": "【非转基因   自然发酵】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58dd"
              },
              "price": "47.8",
              "imageUrl": "./images/1-4.jpg",
              "title": " 韩国进口冲饮 全南 蜂蜜柚子茶 1kg  原装进口",
              "feature": "【秋冬温润饮品】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58de"
              },
              "price": "35",
              "imageUrl": "./images/1-5.jpg",
              "title": "德国进口 亨利玉米片375g/盒 早餐冲饮麦片",
              "feature": "【健康新早餐】",
              "isSoldOut": true,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58df"
              },
              "price": "49.2",
              "imageUrl": "./images/1-6.jpg",
              "title": "马来西亚进口名馨榴莲粉速溶白咖啡480g南洋榴莲风味",
              "feature": "【好品质的白咖啡】",
              "isSoldOut": true,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e0"
              },
              "price": "58",
              "imageUrl": "./images/1-7.jpg",
              "title": "韩国进口 乐天爱情美女石榴果汁饮料180ml*15听礼盒",
              "feature": "【韩国乐天 品质保证】",
              "isSoldOut": true,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e1"
              },
              "price": "189",
              "imageUrl": "./images/1-8.jpg",
              "title": "台湾进口 金牌台湾啤酒330ml*24听/箱 台啤新鲜日期",
              "feature": "【24瓶实惠装】",
              "isSoldOut": true,
              "ProductNum": 0
            }],
           Recommend:['其他食用油','调味汁/油','调味料','大米','橄榄油','调味酱','烘焙原料','谷物冲饮','咖啡'],
        },
        'yinliao':{
            name:'酒水饮料',
            bacgroundColor:'#83cfff',
            content:[{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e2"
              },
              "price": "186",
              "imageUrl": "./images/2-1.jpg",
              "title": "52度洋河海之蓝480ml绵柔口感浓香型白酒猫超自营商务宴请送礼",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e3"
              },
              "price": "165",
              "imageUrl": "./images/2-2.jpg",
              "title": "古井贡酒年份原浆献礼版50度500ml 浓香型白酒酒水酒类礼盒装送礼",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e4"
              },
              "price": "458",
              "imageUrl": "./images/2-3.jpg",
              "title": "52度剑南春 浓香型白酒500ml酒厂直供水晶剑酒类四川国产白酒送礼",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e5"
              },
              "price": "359",
              "imageUrl": "./images/2-4.jpg",
              "title": "水井坊臻酿八号浓香高度白酒52度500ml纯粮食酒商务宴请礼盒送礼",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e6"
              },
              "price": "184",
              "imageUrl": "./images/2-5.jpg",
              "title": "北京红星二锅头酒大二绿瓶56度500ml*12白酒（新老包装随机发货）",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e7"
              },
              "price": "32",
              "imageUrl": "./images/2-6.jpg",
              "title": "农夫山泉饮用天然水4L *4/箱取自中国八大水源地整箱天然水矿泉水",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e8"
              },
              "price": "559",
              "imageUrl": "./images/2-7.jpg",
              "title": "山西汾酒杏花村53度青花20清香型高度白酒500ml单瓶天猫超市自营",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },
            ],
            Recommend:['白酒','黄酒','啤酒','果蔬饮料','水','茶饮料','碳酸饮料','功能饮料','加多宝'],
        },
        'mimian':{
            name:'米面杂粮',
            bacgroundColor:'#ffbb00',
            content:[{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58e9"
              },
              "price": "27.5",
              "imageUrl": "./images/3-1.jpg",
              "title": "张新成推荐农心辣白菜五连包120g*5泡面韩国泡菜方便面拉面辛拉面",
              "feature": "【独特酸辣】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58ea"
              },
              "price": "14",
              "imageUrl": "./images/3-2.jpg",
              "title": "双汇王中王火腿肠30g*8支香肠肉类休闲零食速食配泡面网红零食 ",
              "feature": "【肉质Q弹】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58eb"
              },
              "price": "39.9",
              "imageUrl": "./images/3-3.jpg",
              "title": "52度剑南春 十月稻田长粒香米5kg东北大米10斤粳米当季新米真空包装 精品官方",
              "feature": "【长粒香】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58ec"
              },
              "price": "27.9",
              "imageUrl": "./images/3-4.jpg",
              "title": "福临门大米苏软香5kg苏北粳米 软糯香醇煮粥",
              "feature": "【鱼米之乡 口感软糯】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58ed"
              },
              "price": "38.8",
              "imageUrl": "./images/3-5.jpg",
              "title": "雪龙瑞斯秋田小町大米 5KG/袋东北吉林大米寿司米小町米",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58ee"
              },
              "price": "39.9",
              "imageUrl": "./images/3-6.jpg",
              "title": "包邮泰金香茉莉香米10斤 长粒香米5kg大米  非大米 玉香米 稻香",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58ef"
              },
              "price": "49.8",
              "imageUrl": "./images/3-7.jpg",
              "title": "绿帝大号虾仁干货118g野生海虾大海米金钩开洋海鲜非特级干贝虾尾",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f0"
              },
              "price": "25.8",
              "imageUrl": "./images/3-8.jpg",
              "title": "盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },
            ],
            Recommend:['大米','食用菌','干菜/紫菜','木耳','桂圆干','海产品','百合','粗粮','莲子'],
        },        
        'you':{
            name:'油品调料',
            bacgroundColor:'#f4935f',
            content:[{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f1"
              },
              "price": "242.9",
              "imageUrl": "./images/4-1.jpg",
              "title": "包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f2"
              },
              "price": "74.9",
              "imageUrl": "./images/4-2.jpg",
              "title": "多力葵花籽食用油 5L/桶  加赠250ml小油 进口葵籽葵花籽油家用",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f3"
              },
              "price": "189.9",
              "imageUrl": "./images/4-3.jpg",
              "title": "鲁花 一级花生油5.436L赠900ML 5S物理压榨健康 食用油桶装油",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f4"
              },
              "price": "49.8",
              "imageUrl": "./images/4-4.jpg",
              "title": "包邮金龙鱼 花生浓香型食用植物调和油 5L/桶 食用油 爆款家用",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f5"
              },
              "price": "29.8",
              "imageUrl": "./images/4-5.jpg",
              "title": "海天酱油味极鲜特级酱油1280ml品质生抽炒菜凉拌厨房提鲜厨房调料",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f6"
              },
              "price": "25.8",
              "imageUrl": "./images/4-6.jpg",
              "title": "茂德公香辣牛肉酱225g拌饭辣椒酱意大利面酱下饭拌面酱调味酱酱料",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f7"
              },
              "price": "14.8",
              "imageUrl": "./images/4-7.jpg",
              "title": "海天酱油味极鲜特级生抽380ml酿造特级生抽炒菜凉拌火锅蘸料调味",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f8"
              },
              "price": "29.9",
              "imageUrl": "./images/4-8.jpg",
              "title": "鲁花自然鲜酱香酱油1.28L 特级生抽 非转基因 厨房调料调味品",
              "feature": "",
              "isSoldOut": false,
              "ProductNum": 0
            },
            ],
            Recommend:['花生油','调和油','橄榄油','玉米油','酱油','腌制品','辣椒调料','调味酱','调味料'],
        },         
        'meirong':{
            name:'美容护肤',
            bacgroundColor:'#ff909f',
            content:[{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58f9"
              },
              "price": "19.9",
              "imageUrl": "./images/5-1.jpg",
              "title": "【官方】Lily Bell/丽丽贝尔经典化妆棉优质棉双层亲肤222枚/包",
              "feature": "【超值实惠大包装】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58fa"
              },
              "price": "44.9",
              "imageUrl": "./images/5-2.jpg",
              "title": "包邮曼秀雷敦冰爽活炭洁面乳去油保湿收缩毛孔控油去黑头男洗面奶",
              "feature": "【冰爽控油深层洁净】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58fb"
              },
              "price": "40",
              "imageUrl": "./images/5-3.jpg",
              "title": "包邮完美正品芦荟胶40g面霜芦荟胶补水保湿温和不刺激单支装祛痘",
              "feature": "【面部精华晒后修复】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58fc"
              },
              "price": "58",
              "imageUrl": "./images/5-4.jpg",
              "title": "Cetaphil/丝塔芙蓝朋友洗面奶洁面118ml温和保湿低刺激敏感肌适用",
              "feature": "【温和滋润 舒缓修护】",
              "isSoldOut": false,
              "ProductNum": 0
            },{
              "_id": {
                "$oid": "613bf930a7fc43ff206c58fd"
              },
              "price": "14",
              "imageUrl": "./images/5-5.jpg",
              "title": "大宝SOD蜜男士护肤保湿乳液补水滋润面部护理易吸收女",
              "feature": "【快速吸收长效滋润】",
              "isSoldOut": false,
              "ProductNum": 0
            }],
            Recommend:['乳液面霜','面膜','进口卸妆用品','进口面部洗护','男士控油','足膜/足霜','护手霜','身体乳','进口面部护理'],
        },                     
    },


    ServiceList:[
        {
            title:'购物指南',
            list:['购物流程配送时效说明','配送区域及费用','购买生鲜须知','发票流程','商品限购说明'],
        },
        {
            title:'售后服务',
            list:['退货规则','退货指南','保质期说明联系客服']
        },
        {
            title:'自助服务',
            list:['订单物流查询','我的购物车','我的现金券','购物常见问题','建议反馈']
        },
        {
            title:'商家服务',
            list:['关于天猫超市','入驻天猫超市','商家常见问题','淘鲜达招商']
        },
        
    ],

    //所有产品分类
    Category:[
        {
            title:'进口食品',
            list:['牛奶','零食','饼干','方便面','粮油'],
            Icon:'icon-jinkoushangpin',
        },
        {
            title:'食品饮料',
            list:['牛奶','坚果','饼干','方便面','粮油'],
            Icon:'icon-shipinyinliao',

        },
        {
            title:'粮油副食',
            list:['油','大米','调料','方便面','火腿肠'],
            Icon:'icon-liangyoufushi',
        },
        {
            title:'美容洗护',
            list:['洗发','沐浴','牙膏','洁面','卫生巾'],
            Icon:'icon-meirongxihu',
        },
        {
            title:'家具家电',
            list:['毛巾','家电','玻璃杯','衣架','锅'],
            Icon:'icon-mianxingjiandaotubiao',
        },
        {
            title:'家庭清洁',
            list:['纸尿裤','奶粉','湿巾','洗护','玩具'],
            Icon:'icon-jiatingqingji',
        },
        {
            title:'母婴用品',
            list:['纸','洗衣','洗洁精','垃圾袋','洁厕'],
            Icon:'icon-naiping',
        },

    ],
    // 所有产品分类下拉框
    CategoryItem:[
        [
            {
                name:'进口牛奶',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'进口零食',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
        ],
        [
            {
                name:'糖果/巧克力',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'饼干糕点',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },

        ],
        [
            {
                name:'大米面粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'菌菇干货',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },

        ],   
        [
            {
                name:'个人洗护',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'口腔护理',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            
        ],
        [
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'衣物晾晒',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
        ],
       [
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'纸制品/卫生纸',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
        ],
        [
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
            {
                name:'婴幼儿奶粉',
                detial:['进口纯牛奶','进口酸奶','进口成人奶粉','进口含乳饮料','进口有机牛奶','进口酸奶粉',]
            },
        ],     
    ],
    HotCities:['北京','上海','杭州','广州','天津','苏州','成都','深圳','南京','重庆','南昌','武汉'],
    Cities:{
        'A':['A',['阿坝','安顺','安庆','阿拉尔','鞍山','阿克苏','阿拉善','阿勒泰','安康','阿里','安阳']],
        'B':['B',['百色','巴音','郭楞','滨州','保定','北屯','蚌埠','白银','巴中','白沙','保亭',
        '包头','毕节','白山','宝鸡','亳州','保山','本溪','巴彦淖尔','北京','博尔塔拉',
        '白城','北海']],
        'C':['C',['常德','楚雄','常州','昌吉','长沙','长治','昌江','澄迈','重庆','朝阳','崇左','长春'
        ,'承德','滁州','沧州','赤峰','池州','昌都','郴州','成都','潮州']],
        'D':['D',['大连','东营','德宏','定安','东方','儋州','东莞','大兴安岭','迪庆','德州','大理','丹东',
        '大庆','德阳','达州','定西','大同']],
        'E':['E',['恩施','鄂尔多斯','鄂州']],
    },
    ShortCut:{
        activity:{
            icon:'icon-cuxiaohuodong-danpindazhe',
            title:'活动',
            content:['新人活动','一站式购齐']
        },
        price:{
            icon:'icon-tianmaohaoquan',
            title:'价格',
            content:['0-10元','10-30元','30-70元','70元以上'],
        },
        Daily:{
            icon:'icon-huiliuquriyongbaihuo',
            title:'日用百货',
            content:['纸品争霸','时尚买手','美容江湖','巾彩秀'],
        },
        Food:{
            icon:'icon-huiliuqushipin',
            title:'食品',
            content:['酒水活动','疯狂厨房','零食欢乐购','淘零食'],
        },
        jinkou:{
            icon:'icon-jinkoushangpin',
            title:'进口食品',
            content:['进口洋货','进口饼干','进口零食','进口牛奶'],
        },
    }
}

module.exports = data
