// 直接在http://www.mca.gov.cn/article/sj/xzqh/2020/2020/202003301019.html 浏览器控制台运行
var regions = [];
 var trs = document.getElementsByTagName("tr");
    var idx = 0;
    var upregionParentCode_0 = "";
    var upregionParentCode_1 = "";
    var upregionParentCode_3 = "";
    
    for(idx;idx<trs.length;idx++){
        if(idx > 2){
            var region = {};
            var tds = trs[idx].children;
            var regionCode = tds[1].innerText;
            var regionName = tds[2].innerText.trim();

            if(regionCode == ""){
                break;
            }

            region.code = regionCode;
            region.name = regionName;
            if(tds[2].childElementCount == 0){
                region.parentCode = "";
                upregionParentCode_0 = regionCode;
            } else if(tds[2].children[0].innerText.length == 1){
                region.parentCode = upregionParentCode_0;
                upregionParentCode_1 = region.code
            } else if(tds[2].children[0].innerText.length == 3){
                region.parentCode = upregionParentCode_1 == ""?upregionParentCode_0:upregionParentCode_1;
                upregionParentCode_3 = region.code
            }
            regions.push(region);
        } 
    }
    console.log(JSON.stringify(regions));