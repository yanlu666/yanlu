import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CityDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityDataProvider {

  cities: any[];

  constructor() {
    this.cities = [{
      "options": [{
          "text": "北京市",
          "value": "北京市"
      }, {
          "text": "天津市",
          "value": "天津市"
      }, {
          "text": "河北省",
          "value": "河北省"
      }, {
          "text": "山西省",
          "value": "山西省"
      }, {
          "text": "内蒙古自治区",
          "value": "内蒙古自治区"
      }, {
          "text": "辽宁省",
          "value": "辽宁省"
      }, {
          "text": "吉林省",
          "value": "吉林省"
      }, {
          "text": "黑龙江省",
          "value": "黑龙江省"
      }, {
          "text": "上海市",
          "value": "上海市"
      }, {
          "text": "江苏省",
          "value": "江苏省"
      }, {
          "text": "浙江省",
          "value": "浙江省"
      }, {
          "text": "安徽省",
          "value": "安徽省"
      }, {
          "text": "福建省",
          "value": "福建省"
      }, {
          "text": "江西省",
          "value": "江西省"
      }, {
          "text": "山东省",
          "value": "山东省"
      }, {
          "text": "河南省",
          "value": "河南省"
      }, {
          "text": "湖北省",
          "value": "湖北省"
      }, {
          "text": "湖南省",
          "value": "湖南省"
      }, {
          "text": "广东省",
          "value": "广东省"
      }, {
          "text": "广西壮族自治区",
          "value": "广西壮族自治区"
      }, {
          "text": "海南省",
          "value": "海南省"
      }, {
          "text": "重庆市",
          "value": "重庆省"
      }, {
          "text": "四川省",
          "value": "四川省"
      }, {
          "text": "贵州省",
          "value": "贵州省"
      }, {
          "text": "云南省",
          "value": "云南省"
      }, {
          "text": "西藏自治区",
          "value": "西藏自治区"
      }, {
          "text": "陕西省",
          "value": "陕西省"
      }, {
          "text": "甘肃省",
          "value": "甘肃省"
      }, {
          "text": "青海省",
          "value": "青海省"
      }, {
          "text": "宁夏回族自治区",
          "value": "宁夏回族自治区"
      }, {
          "text": "新疆维吾尔自治区",
          "value": "新疆维吾尔族自治区"
      }, {
          "text": "台湾省",
          "value": "台湾省"
      }, {
          "text": "香港特别行政区",
          "value": "香港特别行政区"
      }, {
          "text": "澳门特别行政区",
          "value": "澳门特别行政区"
      }]
  },{
      "options": [{
          "text": "香港大学",
          "value": "香港大学",
          "parentVal": "香港特别行政区"
      },{
          "text": "澳门大学",
          "value": "澳门大学",
          "parentVal": "澳门特别行政区"
      },{
          "text": "台湾大学",
          "value": "台湾大学",
          "parentVal": "台湾省"
      },{
          "text": "清华大学",
          "value": "清华大学",
          "parentVal": "北京市"
      }, {
          "text": "北京大学",
          "value": "背景大学",
          "parentVal": "北京市"
      },{
          "text": "北京邮政大学",
          "value": "北京邮政大学",
          "parentVal": "北京市"
      }, {
          "text": "北京理工大学",
          "value": "北京理工大学",
          "parentVal": "北京市"
      },{
          "text": "中国科学院",
          "value": "中国科学院",
          "parentVal": "北京市"
      },{
          "text": "北京医科大学",
          "value": "北京医科大学",
          "parentVal": "北京市"
      },{
          "text": "南开大学",
          "value": "南开大学",
          "parentVal": "天津市"
      }, {
          "text": "天津大学",
          "value": "天津大学",
          "parentVal": "天津市"
      },{
          "text": "中国民航大学",
          "value": "中国民航大学",
          "parentVal": "天津市"
      }, {
          "text": "天津工业大学",
          "value": "天津工业大学",
          "parentVal": "天津市"
      },{
          "text": "天津科技大学",
          "value": "天津科技大学",
          "parentVal": "天津市"
      },{
          "text": "天津理工大学",
          "value": "天津理工大学",
          "parentVal": "天津市"
      },{
          "text": "天津医科大学",
          "value": "天津医科大学",
          "parentVal": "天津市"
      },{
          "text": "天津中医学大学",
          "value": "天津中医学大学",
          "parentVal": "天津市"
      },{
          "text": "燕山大学",
          "value": "燕山大学",
          "parentVal": "河北省"
      }, {
          "text": "河北医科大学",
          "value": "河北医科大学",
          "parentVal": "河北省"
      }, {
          "text": "河北大学",
          "value": "河北大学",
          "parentVal": "河北省"
      }, {
          "text": "河北师范大学",
          "value": "河北师范大学",
          "parentVal": "河北省"
      }, {
          "text": "河北工业大学",
          "value": "河北工业大学",
          "parentVal": "河北省"
      }, {
          "text": "河北农业大学",
          "value": "河北农业大学",
          "parentVal": "河北省"
      }, {
          "text": "河北经贸大学",
          "value": "河北经贸大学",
          "parentVal": "河北省"
      }, {
          "text": "河北工业大学",
          "value": "河北工业大学",
          "parentVal": "河北省"
      }, {
          "text": "华北理工大学",
          "value": "华北理工大学",
          "parentVal": "河北省"
      }, {
          "text": "河北科技大学",
          "value": "河北科技大学",
          "parentVal": "河北省"
      }, {
          "text": "河北建筑工程学院",
          "value": "河北建筑工程学院",
          "parentVal": "河北省"
      }, {
          "text": "山西大学",
          "value": "山西大学",
          "parentVal": "山西省"
      }, {
          "text": "太原科技大学",
          "value": "太原科技大学",
          "parentVal": "山西省"
      }, {
          "text": "中北大学",
          "value": "中北大学",
          "parentVal": "山西省"
      }, {
          "text": "太原理工大学",
          "value": "太原理工大学",
          "parentVal": "山西省"
      }, {
          "text": "山西农业大学",
          "value": "山西农业大学",
          "parentVal": "山西省"
      }, {
          "text": "山西医科大学",
          "value": "山西科技大学",
          "parentVal": "山西省"
      }, {
          "text": "长治医学院",
          "value": "长治医学院",
          "parentVal": "山西省"
      }, {
          "text": "山西师范大学",
          "value": "山西师范大学",
          "parentVal": "山西省"
      }, {
          "text": "太原师范大学",
          "value": "太原师范大学",
          "parentVal": "山西省"
      }, {
          "text": "山西大同大学",
          "value": "山西大同大学",
          "parentVal": "山西省"
      }, {
          "text": "晋中学院",
          "value": "晋中学院",
          "parentVal": "山西省"
      }, {
          "text": "内蒙古大学",
          "value": "内蒙古大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古科技大学",
          "value": "内蒙古科技大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古工业大学",
          "value": "内蒙古工业大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古农业大学",
          "value": "内蒙古农业大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古医科大学",
          "value": "内蒙古医科大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古师范大学",
          "value": "内蒙古师范大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古民族大学",
          "value": "内蒙古民族大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "赤峰学院",
          "value": "赤峰学院",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "内蒙古财经大学",
          "value": "内蒙古财经大学",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "呼伦贝尔学院",
          "value": "呼伦贝尔学院",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "集宁师范学院",
          "value": "集宁师范学院",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "河套学院",
          "value": "河套学院",
          "parentVal": "内蒙古自治区"
      }, {
          "text": "大连理工大学",
          "value": "大连理工大学",
          "parentVal": "辽宁省"
      }, {
          "text": "东北大学",
          "value": "东北大学",
          "parentVal": "辽宁省"
      }, {
          "text": "辽宁大学",
          "value": "辽宁大学",
          "parentVal": "辽宁省"
      }, {
          "text": "东北财经大学",
          "value": "东北财经大学",
          "parentVal": "辽宁省"
      }, {
          "text": "大连海事大学",
          "value": "大连海事大学",
          "parentVal": "辽宁省"
      }, {
          "text": "中国医科大学",
          "value": "中国医科大学",
          "parentVal": "辽宁省"
      }, {
          "text": "大连大学",
          "value": "大连大学",
          "parentVal": "辽宁省"
      }, {
          "text": "沈阳农业大学",
          "value": "沈阳农业大学",
          "parentVal": "辽宁省"
      }, {
          "text": "辽宁师范大学",
          "value": "辽宁师范大学",
          "parentVal": "辽宁省"
      }, {
          "text": "辽宁工程技术大学",
          "value": "辽宁工程技术大学",
          "parentVal": "辽宁省"
      }, {
          "text": "沈阳工业大学",
          "value": "沈阳工业大学",
          "parentVal": "辽宁省"
      }, {
          "text": "大连医科大学",
          "value": "大连医科大学",
          "parentVal": "辽宁省"
      }, {
          "text": "大连工业大学",
          "value": "大连工业大学",
          "parentVal": "辽宁省"
      }, {
          "text": "沈阳医科大学",
          "value": "沈阳医科大学",
          "parentVal": "辽宁省"
      }, {
          "text": "吉林大学",
          "value": "吉林大学",
          "parentVal": "吉林省"
      }, {
          "text": "东北师范大学",
          "value": "东北师范大学",
          "parentVal": "吉林省"
      }, {
          "text": "长春理工大学",
          "value": "长春理工大学",
          "parentVal": "吉林省"
      }, {
          "text": "延边大学",
          "value": "延边大学",
          "parentVal": "吉林省"
      }, {
          "text": "东北电力大学",
          "value": "东北电力大学",
          "parentVal": "吉林省"
      }, {
          "text": "吉林农业大学",
          "value": "吉林农业大学",
          "parentVal": "吉林省"
      }, {
          "text": "北华大学",
          "value": "东华大学",
          "parentVal": "吉林省"
      }, {
          "text": "长春工业大学",
          "value": "长春工业大学",
          "parentVal": "吉林省"
      }, {
          "text": "吉林师范大学",
          "value": "吉林师范大学",
          "parentVal": "吉林省"
      }, {
          "text": "哈尔滨工业大学",
          "value": "哈尔滨工业大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "哈尔滨工程大学",
          "value": "哈尔滨工程大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "东北林业大学",
          "value": "东北林业大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "黑龙江大学",
          "value": "黑龙江大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "哈尔滨医科大学",
          "value": "哈尔滨医科大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "东北农业大学",
          "value": "东北农业大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "哈尔滨师范大学",
          "value": "哈尔滨师范大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "哈尔滨理工大学",
          "value": "哈尔滨理工大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "东北石油大学",
          "value": "东北石油大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "黑龙江中医药大学",
          "value": "黑龙江中医药大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "哈尔滨商业大学",
          "value": "哈尔滨商业大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "齐齐哈尔大学",
          "value": "齐齐哈尔大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "黑龙江科技大学",
          "value": "黑龙江科技大学",
          "parentVal": "黑龙江省"
      }, {
          "text": "复旦大学",
          "value": "复旦大学",
          "parentVal": "上海市"
      }, {
          "text": "上海交通大学",
          "value": "上海交通大学",
          "parentVal": "上海市"
      }, {
          "text": "同济大学",
          "value": "同济大学",
          "parentVal": "上海市"
      }, {
          "text": "华东师范大学",
          "value": "华东师范大学",
          "parentVal": "上海市"
      }, {
          "text": "华东理工大学",
          "value": "华东理工大学",
          "parentVal": "上海市"
      }, {
          "text": "上海大学",
          "value": "上海大学",
          "parentVal": "上海市"
      }, {
          "text": "上海财经大学",
          "value": "上海财经大学",
          "parentVal": "上海市"
      }, {
          "text": "南京大学",
          "value": "南京大学",
          "parentVal": "江苏省"
      }, {
          "text": "东南大学",
          "value": "东南大学",
          "parentVal": "江苏省"
      }, {
          "text": "河海大学",
          "value": "河海大学",
          "parentVal": "江苏省"
      }, {
          "text": "南京农业大学",
          "value": "南京农业大学",
          "parentVal": "江苏省"
      }, {
          "text": "南京师范大学",
          "value": "南京师范大学",
          "parentVal": "江苏省"
      }, {
          "text": "南京理工大学",
          "value": "南京理工大学",
          "parentVal": "江苏省"
      }, {
          "text": "中国矿业大学",
          "value": "中国矿业大学",
          "parentVal": "江苏省"
      }, {
          "text": "南京航空航天大学",
          "value": "南京航空航天大学",
          "parentVal": "江苏省"
      }, {
          "text": "苏州大学",
          "value": "苏州大学",
          "parentVal": "江苏省"
      }, {
          "text": "江南大学",
          "value": "江南大学",
          "parentVal": "江苏省"
      }, {
          "text": "解放军理工大学",
          "value": "解放军理工大学",
          "parentVal": "江苏省"
      }, {
          "text": "扬州大学",
          "value": "扬州大学",
          "parentVal": "江苏省"
      }, {
          "text": "浙江大学",
          "value": "浙江大学",
          "parentVal": "浙江省"
      }, {
          "text": "宁波大学",
          "value": "宁波大学",
          "parentVal": "浙江省"
      }, {
          "text": "浙江工业大学",
          "value": "浙江工业大学",
          "parentVal": "浙江省"
      }, {
          "text": "浙江师范大学",
          "value": "浙江师范大学",
          "parentVal": "浙江省"
      }, {
          "text": "杭州电子科技大学",
          "value": "杭州电子科技大学",
          "parentVal": "浙江省"
      }, {
          "text": "浙江工商大学",
          "value": "浙江工商大学",
          "parentVal": "浙江省"
      }, {
          "text": "浙江理工大学",
          "value": "浙江理工大学",
          "parentVal": "浙江省"
      }, {
          "text": "杭州师范大学",
          "value": "杭州师范大学",
          "parentVal": "浙江省"
      }, {
          "text": "中国计量大学",
          "value": "中国计量大学",
          "parentVal": "浙江省"
      }, {
          "text": "温州大学",
          "value": "温州大学",
          "parentVal": "浙江省"
      }, {
          "text": "浙江农林大学",
          "value": "浙江农林大学",
          "parentVal": "浙江省"
      }, {
          "text": "中国科学技术大学",
          "value": "中国科技技术大学",
          "parentVal": "安徽省"
      }, {
          "text": "合肥工业大学",
          "value": "合肥工业大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽大学",
          "value": "安徽大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽师范大学",
          "value": "安徽师范大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽农业大学",
          "value": "安徽农林大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽医科大学",
          "value": "安徽医科大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽工业大学",
          "value": "安徽工业大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽理工大学",
          "value": "安徽理工大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽财经大学",
          "value": "安徽财经大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽建筑大学",
          "value": "安徽建筑大学",
          "parentVal": "安徽省"
      }, {
          "text": "安徽工程大学",
          "value": "安徽工程大学",
          "parentVal": "安徽省"
      }, {
          "text": "合肥学院",
          "value": "合肥学院",
          "parentVal": "安徽省"
      }, {
          "text": "安徽中医药大学",
          "value": "安徽中医药大学",
          "parentVal": "安徽省"
      }, {
          "text": "淮北师范大学",
          "value": "淮北师范大学",
          "parentVal": "安徽省"
      }, {
          "text": "安庆师范大学",
          "value": "安庆师范大学",
          "parentVal": "安徽省"
      }, {
          "text": "黄山学院",
          "value": "黄山学院",
          "parentVal": "安徽省"
      }, {
          "text": "厦门大学",
          "value": "350100",
          "parentVal": "350000"
      }, {
          "text": "福建师范大学",
          "value": "350200",
          "parentVal": "350000"
      }, {
          "text": "福州大学",
          "value": "350300",
          "parentVal": "350000"
      }, {
          "text": "福建农林大学",
          "value": "350400",
          "parentVal": "350000"
      }, {
          "text": "华侨大学",
          "value": "350500",
          "parentVal": "350000"
      }, {
          "text": "集美大学",
          "value": "350600",
          "parentVal": "350000"
      }, {
          "text": "福建医科大学",
          "value": "350700",
          "parentVal": "350000"
      }, {
          "text": "福建中医药大学",
          "value": "350800",
          "parentVal": "350000"
      }, {
          "text": "福建工程学院",
          "value": "350900",
          "parentVal": "350000"
      }, {
          "text": "南昌大学",
          "value": "360100",
          "parentVal": "360000"
      }, {
          "text": "江西师范大学",
          "value": "360200",
          "parentVal": "360000"
      }, {
          "text": "江西财经大学",
          "value": "360300",
          "parentVal": "360000"
      }, {
          "text": "江西理工大学",
          "value": "360400",
          "parentVal": "360000"
      }, {
          "text": "江西农业大学",
          "value": "360500",
          "parentVal": "360000"
      }, {
          "text": "华东交通大学",
          "value": "360600",
          "parentVal": "360000"
      }, {
          "text": "南昌航空大学",
          "value": "360700",
          "parentVal": "360000"
      }, {
          "text": "景德镇瓷器大学",
          "value": "360800",
          "parentVal": "360000"
      }, {
          "text": "华东理工大学",
          "value": "360900",
          "parentVal": "360000"
      }, {
          "text": "江西中医药大学",
          "value": "361000",
          "parentVal": "360000"
      }, {
          "text": "江西科技师范大学",
          "value": "361100",
          "parentVal": "360000"
      }, {
          "text": "山东大学",
          "value": "370100",
          "parentVal": "370000"
      }, {
          "text": "中国海洋大学",
          "value": "370200",
          "parentVal": "370000"
      }, {
          "text": "中国石油大学",
          "value": "370300",
          "parentVal": "370000"
      }, {
          "text": "齐鲁工业大学",
          "value": "370400",
          "parentVal": "370000"
      }, {
          "text": "山东师范大学",
          "value": "370500",
          "parentVal": "370000"
      }, {
          "text": "山东农业大学",
          "value": "370600",
          "parentVal": "370000"
      }, {
          "text": "青岛大学",
          "value": "370700",
          "parentVal": "370000"
      }, {
          "text": "山东科技大学",
          "value": "370800",
          "parentVal": "370000"
      }, {
          "text": "青岛科技大学",
          "value": "370900",
          "parentVal": "370000"
      }, {
          "text": "济南大学",
          "value": "371000",
          "parentVal": "370000"
      }, {
          "text": "山东理工大学",
          "value": "371100",
          "parentVal": "370000"
      }, {
          "text": "曲阜师范大学",
          "value": "371200",
          "parentVal": "370000"
      }, {
          "text": "烟台大学",
          "value": "371300",
          "parentVal": "370000"
      }, {
          "text": "山东财经大学",
          "value": "371400",
          "parentVal": "370000"
      }, {
          "text": "青岛理工大学",
          "value": "371500",
          "parentVal": "370000"
      }, {
          "text": "泰山医学院",
          "value": "371600",
          "parentVal": "370000"
      }, {
          "text": "鲁东大学",
          "value": "371700",
          "parentVal": "370000"
      }, {
          "text": "郑州大学",
          "value": "410100",
          "parentVal": "410000"
      }, {
          "text": "解放军信息工程大学",
          "value": "410200",
          "parentVal": "410000"
      }, {
          "text": "河南大学",
          "value": "410300",
          "parentVal": "410000"
      }, {
          "text": "河南科技大学",
          "value": "410400",
          "parentVal": "410000"
      }, {
          "text": "河南农业大学",
          "value": "410500",
          "parentVal": "410000"
      }, {
          "text": "河南师范大学",
          "value": "410600",
          "parentVal": "410000"
      }, {
          "text": "河南理工大学",
          "value": "410700",
          "parentVal": "410000"
      }, {
          "text": "河南工业大学",
          "value": "410800",
          "parentVal": "410000"
      }, {
          "text": "河南中医药大学",
          "value": "410900",
          "parentVal": "410000"
      }, {
          "text": "郑州轻工业学院",
          "value": "411000",
          "parentVal": "410000"
      }, {
          "text": "华北水利水电大学",
          "value": "411100",
          "parentVal": "410000"
      }, {
          "text": "河南财经政法大学",
          "value": "411200",
          "parentVal": "410000"
      }, {
          "text": "中原工学院",
          "value": "411300",
          "parentVal": "410000"
      }, {
          "text": "信阳师范学院",
          "value": "411400",
          "parentVal": "410000"
      }, {
          "text": "河南科技学院",
          "value": "411500",
          "parentVal": "410000"
      }, {
          "text": "新乡医学院",
          "value": "411600",
          "parentVal": "410000"
      }, {
          "text": "河南牧业经济学院",
          "value": "411700",
          "parentVal": "410000"
      }, {
          "text": "洛阳师范学院",
          "value": "419000",
          "parentVal": "410000"
      }, {
          "text": "武汉大学",
          "value": "420100",
          "parentVal": "420000"
      }, {
          "text": "华中科技大学",
          "value": "420200",
          "parentVal": "420000"
      }, {
          "text": "武汉理工大学",
          "value": "420300",
          "parentVal": "420000"
      }, {
          "text": "华中农业大学",
          "value": "420500",
          "parentVal": "420000"
      }, {
          "text": "中国地质大学（武汉）",
          "value": "420600",
          "parentVal": "420000"
      }, {
          "text": "中南财经政法大学",
          "value": "420700",
          "parentVal": "420000"
      }, {
          "text": "武汉科技大学",
          "value": "420800",
          "parentVal": "420000"
      }, {
          "text": "湖北大学",
          "value": "420900",
          "parentVal": "420000"
      }, {
          "text": "中南民族大学",
          "value": "421000",
          "parentVal": "420000"
      }, {
          "text": "长江大学",
          "value": "421100",
          "parentVal": "420000"
      }, {
          "text": "三峡大学",
          "value": "421200",
          "parentVal": "420000"
      }, {
          "text": "湖北工业大学",
          "value": "421300",
          "parentVal": "420000"
      }, {
          "text": "江汉大学",
          "value": "422800",
          "parentVal": "420000"
      }, {
          "text": "解放军国防科学技术大学",
          "value": "430100",
          "parentVal": "4黑龙江省"
      }, {
          "text": "中南大学",
          "value": "430200",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南大学",
          "value": "430300",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南师范大学",
          "value": "430400",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湘潭大学",
          "value": "430500",
          "parentVal": "4黑龙江省"
      }, {
          "text": "长沙理工大学",
          "value": "430600",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南农业大学",
          "value": "430700",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南科技大学",
          "value": "430800",
          "parentVal": "4黑龙江省"
      }, {
          "text": "中南林业科技大学",
          "value": "430900",
          "parentVal": "4黑龙江省"
      }, {
          "text": "南华大学",
          "value": "431000",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南商学院",
          "value": "431100",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南中医药大学",
          "value": "431200",
          "parentVal": "4黑龙江省"
      }, {
          "text": "吉首大学",
          "value": "431300",
          "parentVal": "4黑龙江省"
      }, {
          "text": "湖南工业大学",
          "value": "433100",
          "parentVal": "4黑龙江省"
      }, {
          "text": "中山大学",
          "value": "440100",
          "parentVal": "440000"
      }, {
          "text": "华南理工大学",
          "value": "440200",
          "parentVal": "440000"
      }, {
          "text": "深圳大学",
          "value": "440300",
          "parentVal": "440000"
      }, {
          "text": "暨南大学",
          "value": "440400",
          "parentVal": "440000"
      }, {
          "text": "华南师范大学",
          "value": "440500",
          "parentVal": "440000"
      }, {
          "text": "华南农业大学",
          "value": "440600",
          "parentVal": "440000"
      }, {
          "text": "南方医科大学",
          "value": "440700",
          "parentVal": "440000"
      }, {
          "text": "广东外语外贸大学",
          "value": "440800",
          "parentVal": "440000"
      }, {
          "text": "广州大学",
          "value": "440900",
          "parentVal": "440000"
      }, {
          "text": "广东工业大学",
          "value": "441200",
          "parentVal": "440000"
      }, {
          "text": "汕头大学",
          "value": "441300",
          "parentVal": "440000"
      }, {
          "text": "广州中医药大学",
          "value": "441400",
          "parentVal": "440000"
      }, {
          "text": "东莞理工学院",
          "value": "441500",
          "parentVal": "440000"
      }, {
          "text": "广州医科大学",
          "value": "441600",
          "parentVal": "440000"
      }, {
          "text": "广东财经大学",
          "value": "441700",
          "parentVal": "440000"
      }, {
          "text": "广东技术师范学院",
          "value": "441800",
          "parentVal": "440000"
      }, {
          "text": "广东海洋大学",
          "value": "441900",
          "parentVal": "440000"
      }, {
          "text": "广东金融学院",
          "value": "442000",
          "parentVal": "440000"
      }, {
          "text": "广西大学",
          "value": "450100",
          "parentVal": "450000"
      }, {
          "text": "广西师范大学",
          "value": "450200",
          "parentVal": "450000"
      }, {
          "text": "桂林电子科技大学",
          "value": "450300",
          "parentVal": "450000"
      }, {
          "text": "广西民族大学",
          "value": "450400",
          "parentVal": "450000"
      }, {
          "text": "广西医科大学",
          "value": "450500",
          "parentVal": "450000"
      }, {
          "text": "桂林理工大学",
          "value": "450600",
          "parentVal": "450000"
      }, {
          "text": "广西师范学院",
          "value": "450700",
          "parentVal": "450000"
      }, {
          "text": "广西中医药大学",
          "value": "450800",
          "parentVal": "450000"
      }, {
          "text": "广西科技大学",
          "value": "450900",
          "parentVal": "450000"
      }, {
          "text": "广西财经学院",
          "value": "451000",
          "parentVal": "450000"
      }, {
          "text": "桂林医学院",
          "value": "451100",
          "parentVal": "450000"
      }, {
          "text": "右江民族医学院",
          "value": "451200",
          "parentVal": "450000"
      }, {
          "text": "贺州学院",
          "value": "451300",
          "parentVal": "450000"
      }, {
          "text": "梧州学院",
          "value": "451400",
          "parentVal": "450000"
      }, {
          "text": "海南大学",
          "value": "460100",
          "parentVal": "460000"
      }, {
          "text": "海南师范大学",
          "value": "460200",
          "parentVal": "460000"
      }, {
          "text": "海南医学院",
          "value": "460300",
          "parentVal": "460000"
      }, {
          "text": "海南热带海洋学院",
          "value": "469000",
          "parentVal": "460000"
      }, {
          "text": "琼台师范学院",
          "value": "460400",
          "parentVal": "460000"
      }, {
          "text": "重庆大学",
          "value": "500100",
          "parentVal": "500000"
      }, {
          "text": "西南大学",
          "value": "500200",
          "parentVal": "500000"
      }, {
          "text": "解放军第三军医大学",
          "value": "500300",
          "parentVal": "500000"
      }, {
          "text": "西南政法大学",
          "value": "500400",
          "parentVal": "500000"
      }, {
          "text": "重庆医科大学",
          "value": "500500",
          "parentVal": "500000"
      }, {
          "text": "重庆邮电大学",
          "value": "500600",
          "parentVal": "500000"
      }, {
          "text": "重庆交通大学",
          "value": "500700",
          "parentVal": "500000"
      }, {
          "text": "重庆师范大学",
          "value": "500800",
          "parentVal": "500000"
      }, {
          "text": "重庆工商大学",
          "value": "500900",
          "parentVal": "500000"
      }, {
          "text": "重庆理工大学",
          "value": "5001000",
          "parentVal": "500000"
      }, {
          "text": "重庆科技学院",
          "value": "500110",
          "parentVal": "500000"
      }, {
          "text": "四川大学",
          "value": "510100",
          "parentVal": "510000"
      }, {
          "text": "电子科技大学",
          "value": "510300",
          "parentVal": "510000"
      }, {
          "text": "西南交通大学",
          "value": "510400",
          "parentVal": "510000"
      }, {
          "text": "西南财经大学",
          "value": "510500",
          "parentVal": "510000"
      }, {
          "text": "四川农业大学",
          "value": "510600",
          "parentVal": "510000"
      }, {
          "text": "成都理工大学",
          "value": "510700",
          "parentVal": "510000"
      }, {
          "text": "四川师范大学",
          "value": "510800",
          "parentVal": "510000"
      }, {
          "text": "西南民族大学",
          "value": "510900",
          "parentVal": "510000"
      }, {
          "text": "西南石油大学",
          "value": "511000",
          "parentVal": "510000"
      }, {
          "text": "成都中医药大学",
          "value": "511100",
          "parentVal": "510000"
      }, {
          "text": "西南科技大学",
          "value": "511300",
          "parentVal": "510000"
      }, {
          "text": "西华大学",
          "value": "511400",
          "parentVal": "510000"
      }, {
          "text": "成都信息工程大学",
          "value": "511500",
          "parentVal": "510000"
      }, {
          "text": "西华师范大学",
          "value": "511600",
          "parentVal": "510000"
      }, {
          "text": "西南医科大学",
          "value": "511700",
          "parentVal": "510000"
      }, {
          "text": "成都学院",
          "value": "511800",
          "parentVal": "510000"
      }, {
          "text": "乐山师范学院",
          "value": "511900",
          "parentVal": "510000"
      }, {
          "text": "贵阳大学",
          "value": "520100",
          "parentVal": "520000"
      }, {
          "text": "贵州师范大学",
          "value": "520200",
          "parentVal": "520000"
      }, {
          "text": "贵州民族大学",
          "value": "520300",
          "parentVal": "520000"
      }, {
          "text": "贵州财经大学",
          "value": "520400",
          "parentVal": "520000"
      }, {
          "text": "贵州医科大学",
          "value": "520500",
          "parentVal": "520000"
      }, {
          "text": "贵阳中医学院",
          "value": "520600",
          "parentVal": "520000"
      }, {
          "text": "遵义医学院",
          "value": "522300",
          "parentVal": "520000"
      }, {
          "text": "遵义师范学院",
          "value": "522600",
          "parentVal": "520000"
      }, {
          "text": "贵州师范学院",
          "value": "522700",
          "parentVal": "520000"
      }, {
          "text": "凯里学院",
          "value": "522800",
          "parentVal": "520000"
      }, {
          "text": "贵州理工学院",
          "value": "522900",
          "parentVal": "520000"
      }, {
          "text": "云南大学",
          "value": "530100",
          "parentVal": "5黑龙江省"
      }, {
          "text": "昆明理工大学",
          "value": "530300",
          "parentVal": "5黑龙江省"
      }, {
          "text": "云南师范大学",
          "value": "530400",
          "parentVal": "5黑龙江省"
      }, {
          "text": "云南民族大学",
          "value": "530500",
          "parentVal": "5黑龙江省"
      }, {
          "text": "云南农业大学",
          "value": "530600",
          "parentVal": "5黑龙江省"
      }, {
          "text": "云南财经大学",
          "value": "530700",
          "parentVal": "5黑龙江省"
      }, {
          "text": "昆明医科大学",
          "value": "530800",
          "parentVal": "5黑龙江省"
      }, {
          "text": "西南林业大学",
          "value": "530900",
          "parentVal": "5黑龙江省"
      }, {
          "text": "大理大学",
          "value": "532300",
          "parentVal": "5黑龙江省"
      }, {
          "text": "云南中医学院",
          "value": "532500",
          "parentVal": "5黑龙江省"
      }, {
          "text": "曲靖师范学院",
          "value": "532600",
          "parentVal": "5黑龙江省"
      }, {
          "text": "昆明学院",
          "value": "532800",
          "parentVal": "5黑龙江省"
      }, {
          "text": "玉溪师范学院",
          "value": "532900",
          "parentVal": "5黑龙江省"
      }, {
          "text": "楚雄师范学院",
          "value": "533100",
          "parentVal": "5黑龙江省"
      }, {
          "text": "红河学院",
          "value": "533300",
          "parentVal": "5黑龙江省"
      }, {
          "text": "文山学院",
          "value": "533400",
          "parentVal": "5黑龙江省"
      }, {
          "text": "西藏大学",
          "value": "540100",
          "parentVal": "540000"
      }, {
          "text": "西藏民族大学",
          "value": "542100",
          "parentVal": "540000"
      }, {
          "text": "西藏藏医学院",
          "value": "542200",
          "parentVal": "540000"
      }, {
          "text": "西安交通大学",
          "value": "610100",
          "parentVal": "610000"
      }, {
          "text": "西北工业大学",
          "value": "610200",
          "parentVal": "610000"
      }, {
          "text": "西安电子科技大学",
          "value": "610300",
          "parentVal": "610000"
      }, {
          "text": "西北大学",
          "value": "610400",
          "parentVal": "610000"
      }, {
          "text": "西北农林科技大学",
          "value": "610500",
          "parentVal": "610000"
      }, {
          "text": "长安大学",
          "value": "610600",
          "parentVal": "610000"
      }, {
          "text": "解放军第四军医大学",
          "value": "610700",
          "parentVal": "610000"
      }, {
          "text": "陕西师范大学",
          "value": "610800",
          "parentVal": "610000"
      }, {
          "text": "西安建筑科技大学",
          "value": "610900",
          "parentVal": "610000"
      }, {
          "text": "西安理工大学",
          "value": "611000",
          "parentVal": "610000"
      }, {
          "text": "兰州大学",
          "value": "620100",
          "parentVal": "620000"
      }, {
          "text": "西北师范大学",
          "value": "620200",
          "parentVal": "620000"
      }, {
          "text": "兰州交通大学",
          "value": "620300",
          "parentVal": "620000"
      }, {
          "text": "兰州理工大学",
          "value": "620400",
          "parentVal": "620000"
      }, {
          "text": "西北民族大学",
          "value": "620500",
          "parentVal": "620000"
      }, {
          "text": "甘肃农业大学",
          "value": "620600",
          "parentVal": "620000"
      }, {
          "text": "兰州财经大学",
          "value": "620700",
          "parentVal": "620000"
      }, {
          "text": "甘肃中医药大学",
          "value": "620800",
          "parentVal": "620000"
      }, {
          "text": "甘肃法政学院",
          "value": "620900",
          "parentVal": "620000"
      }, {
          "text": "河西学院",
          "value": "621000",
          "parentVal": "620000"
      }, {
          "text": "天水师范学院",
          "value": "621100",
          "parentVal": "620000"
      }, {
          "text": "陇东学院",
          "value": "621200",
          "parentVal": "620000"
      }, {
          "text": "甘肃民族师范学院",
          "value": "622900",
          "parentVal": "620000"
      }, {
          "text": "兰州文理学院",
          "value": "623000",
          "parentVal": "620000"
      }, {
          "text": "青海大学",
          "value": "630100",
          "parentVal": "6黑龙江省"
      }, {
          "text": "青海师范大学",
          "value": "630200",
          "parentVal": "6黑龙江省"
      }, {
          "text": "青海民族大学",
          "value": "632200",
          "parentVal": "6黑龙江省"
      }, {
          "text": "宁夏大学",
          "value": "640100",
          "parentVal": "640000"
      }, {
          "text": "宁夏医科大学",
          "value": "640200",
          "parentVal": "640000"
      }, {
          "text": "北方民族大学",
          "value": "640300",
          "parentVal": "640000"
      }, {
          "text": "宁夏师范学院",
          "value": "640400",
          "parentVal": "640000"
      }, {
          "text": "新疆大学",
          "value": "650100",
          "parentVal": "650000"
      }, {
          "text": "石河子大学",
          "value": "650200",
          "parentVal": "650000"
      }, {
          "text": "新疆师范大学",
          "value": "652100",
          "parentVal": "650000"
      }, {
          "text": "新疆医科大学",
          "value": "652200",
          "parentVal": "650000"
      }, {
          "text": "新疆农业大学",
          "value": "652300",
          "parentVal": "650000"
      }, {
          "text": "塔里木大学",
          "value": "652700",
          "parentVal": "650000"
      }, {
          "text": "新疆财经大学",
          "value": "652800",
          "parentVal": "650000"
      }, {
          "text": "喀什大学",
          "value": "652900",
          "parentVal": "650000"
      }, {
          "text": "昌吉学院",
          "value": "653000",
          "parentVal": "650000"
      }, {
          "text": "伊犁师范学院",
          "value": "653100",
          "parentVal": "650000"
      }, {
          "text": "新疆工程学院",
          "value": "653110",
          "parentVal": "650000"
      }]
    }]
  }
}
