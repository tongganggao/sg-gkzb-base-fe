 // 二〇一七年六月二十一日
function dateFormat(){
    let dateMap = {
    '1':'一','2':'二','3':'三','4':'四','5':'五','6':'六',
    '7':'七','8':'八','9':'九','10':'十','11':'十一','12':'十二',
    '13':'十三','14':'十四','15':'十五','16':'十六',
    '17':'十七','18':'十八','19':'十九','20':'二十','21':'二十一','22':'二十二',
    '23':'二十三','24':'二十四','25':'二十五','26':'二十六',
    '27':'二十七','28':'二十八','29':'二十九','30':'三十','31':'三十一'
    }
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth()+1;
    let day = date.getDate().toString();
    let formatYear = year.replace('0','〇').replace('1','一').replace('2','二')
    					.replace('3','三').replace('4','四').replace('5','五')
    					.replace('6','六').replace('7','七').replace('8','八')
                        .replace('9','九')
    let formatMonth = dateMap[month]
    let formatDay = dateMap[day]

    return formatYear+'年'+formatMonth+'月'+formatDay+'日'
}

export default dateFormat

                   