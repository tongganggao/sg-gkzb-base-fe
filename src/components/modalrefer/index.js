import person from 'components/modalrefer/person'
import persons from 'components/modalrefer/persons'
import org from 'components/modalrefer/org'
import orgs from 'components/modalrefer/orgs'
import proTechLevel from 'components/modalrefer/proTechLevel'
import dept from 'components/modalrefer/dept'
import material from 'components/modalrefer/material'
import expert from 'components/modalrefer/expert'
import supplier from 'components/modalrefer/supplier'
import suppliercat from 'components/modalrefer/suppliercat'
import materialCat from 'components/modalrefer/materialCat'
import materialTax from 'components/modalrefer/materialtax'
import measureUnit from 'components/modalrefer/measureUnit'
import jobCat from 'components/modalrefer/jobCat'
import expertCat from 'components/modalrefer/expertCat'
import edu from 'components/modalrefer/edu'
import proTechName from 'components/modalrefer/proTechName'
import proTechSeries from 'components/modalrefer/proTechSeries'
import region from 'components/modalrefer/region'
import personCat from 'components/modalrefer/personCat'
import proManage from 'components/modalrefer/proManage'
import jobSeq from 'components/modalrefer/jobSeq'
import job from 'components/modalrefer/job'
import role from 'components/modalrefer/role'
import expertLevel from 'components/modalrefer/expertLevel'
import user from 'components/modalrefer/user'
import materials from 'components/modalrefer/materials'
import priceTemplate from 'components/modalrefer/priceTemplate'
import initScoreTemplate from 'components/modalrefer/initScoreTemplate'
import detailScoreTemplate from 'components/modalrefer/detailScoreTemplate'
import divideBidTemplate from 'components/modalrefer/divideBidTemplate'

/* global u */
function personrefer (option) {
  u.refer({
    isPOPMode: true,
    module: person,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '选择人员',
    onOk: option.onOk,
    enterpriseId: window.global.user.enterpriseId,
    onCancel: option.onCancel
  })
}
function orgrefer (option) {
  u.refer({
    isPOPMode: true,
    module: org,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '选择组织',
    onOk: option.onOk,
    enterpriseId: window.global.user.enterpriseId,
    onCancel: option.onCancel
  })
}
function orgsrefer (option) {
  u.refer({
    isPOPMode: true,
    module: orgs,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '业务单元',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })

}

function proTechLevelRefer (option) {
  u.refer({
    isPOPMode: true,
    module: proTechLevel,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专家技术资格等级',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function deptRefer (option) {
  u.refer({
    isPOPMode: true,
    module: dept,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '部门',
    onOk: option.onOk,
    orgId:option.orgId,
    enterpriseId: 1,
    onCancel: option.onCancel
  })

}


function materialRefer (option) {
  u.refer({
    isPOPMode: true,
    module: material,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '物料',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}


function expertRefer (option) {
  u.refer({
    isPOPMode: true,
    module: expert,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专家',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}


function supplierRefer (option) {
  u.refer({
    isPOPMode: true,
    module: supplier,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '供应商',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function supplierCatRefer (option) {
  u.refer({
    isPOPMode: true,
    module: suppliercat,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '供应商分类',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function materialCatRefer (option) {
  u.refer({
    isPOPMode: true,
    module: materialCat,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '物料分类',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function measureUnitRefer (option) {
  u.refer({
    isPOPMode: true,
    module: measureUnit,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '计量单位',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function materialTaxRefer (option) {
  u.refer({
    isPOPMode: true,
    module: materialTax,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '物料税类',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function jobCatRefer (option) {
  u.refer({
    isPOPMode: true,
    module: jobCat,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '岗位分类',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function expertCatRefer (option) {
  u.refer({
    isPOPMode: true,
    module: expertCat,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专家类别',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function proTechNameRefer (option) {
  u.refer({
    isPOPMode: true,
    module: proTechName,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专业技术资格名称',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function eduRefer (option) {
  u.refer({
    isPOPMode: true,
    module: edu,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '学历',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function proTechSeriesRefer (option) {
  u.refer({
    isPOPMode: true,
    module: proTechSeries,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '学历',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function regionRefer (option) {
  u.refer({
    isPOPMode: true,
    module: region,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '地区',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function personCatRefer (option) {
  u.refer({
    isPOPMode: true,
    module: personCat,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '人员类别',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function proManageRefer (option) {
  u.refer({
    isPOPMode: true,
    module: proManage,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专业',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function jobSeqRefer (option) {
  u.refer({
    isPOPMode: true,
    module: jobSeq,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '岗位序列',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function jobRefer (option) {
  u.refer({
    isPOPMode: true,
    module: job,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '岗位',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function roleRefer (option) {
  u.refer({
    isPOPMode: true,
    module: role,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '角色',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function expertLevelRefer (option) {
  u.refer({
    isPOPMode: true,
    module: expertLevel,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '专家等级',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function userRefer (option) {
  u.refer({
    isPOPMode: true,
    module: user,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '用户',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function materialsRefer (option) {
  u.refer({
    isPOPMode: true,
    module: materials,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '物料',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function priceTemplateRefer (option) {
  u.refer({
    isPOPMode: true,
    module: priceTemplate,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '价格模板',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function initScoreTemplateRefer (option) {
  u.refer({
    isPOPMode: true,
    module: initScoreTemplate,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '初评模板',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function detailScoreTemplateRefer (option) {
  u.refer({
    isPOPMode: true,
    module: detailScoreTemplate,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '详评模板',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function divideBidTemplateRefer (option) {
  u.refer({
    isPOPMode: true,
    module: divideBidTemplate,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '分标模板',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}

function personRefer (option) {
  u.refer({
    isPOPMode: true,
    module: persons,
    okId: 'okBtn',
    contentId: 'refer',
    width: '800px',
    title: '选择人员',
    onOk: option.onOk,
    enterpriseId: 1,
    onCancel: option.onCancel
  })
}
export {
  orgsrefer,//1业务单元
  proTechLevelRefer,//2专业技术资格等级
  deptRefer,//3部门
  materialRefer,//4物料
  expertRefer,//5专家
  supplierRefer,//6供应商
  supplierCatRefer,//7供应商分类
  materialCatRefer,//8物料分类
  materialTaxRefer,//9物料税类
  measureUnitRefer,//10计量单位
  jobCatRefer,//11岗位分类
  expertCatRefer,//12专家分类
  eduRefer,//13学历
  proTechNameRefer,//14专业技术资格名称
  proTechSeriesRefer,//15专业技术资格系列
  regionRefer,//16地区
  proManageRefer,//17专业管理
  jobSeqRefer,//18岗位系列
  jobRefer,//19岗位
  roleRefer,//20角色
  expertLevelRefer,//21专家等级
  personCatRefer,//22人员类别
  userRefer,//23用户
  materialsRefer,//根据物料分类查询物料
  priceTemplateRefer,//价格模板
  initScoreTemplateRefer,//初评模板
  detailScoreTemplateRefer,//详评模板
  divideBidTemplateRefer,//分标模板
  personRefer//人员
  //菜单
}
