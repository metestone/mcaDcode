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
            //三沙市新建区未分配代码临时处理逻辑
            if(regionCode == ""&&regionName =="西沙区" ){
                regionCode = "460302";
            } else if(regionCode == ""&&regionName =="南沙区"){
                regionCode = "460303";
            } else if(regionCode == ""){
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
                if(upregionParentCode_1 == ""){
                    region.parentCode = upregionParentCode_0;
                } else if(upregionParentCode_0.substring(0,3) != upregionParentCode_1.substring(0,3)){
                    region.parentCode = upregionParentCode_0;
                } else {
                    region.parentCode = upregionParentCode_1;
                }
                upregionParentCode_3 = region.code
            }
            regions.push(region);
        } 
    }
    console.log(JSON.stringify(regions));
