/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

//自定义trim方法
function myTrim(str) {
  return str.replace(/^\s+|\s+$/gm,'');
}
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  // var strCity = document.getElementById("aqi-city-input").value.myTrim();
  // var strAqi = document.getElementById("aqi-value-input").value.myTrim();

  var strCity = document.getElementById("aqi-city-input").value;
  var strAqi = document.getElementById("aqi-value-input").value;

  if(!strCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
    alert("城市名称必须为中英文字符");
    return;
  }
  if(!strAqi.match(/^\d+$/)){
    alert("空气质量指数必须为整数");
    return;
  }
  aqiData.strCity = strAqi;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var aqi_table = document.getElementById("aqi-table");
  if(aqi_table.childNodes.length === 0){
    aqi_table.innerHTML = "<td>城市</td><td>空气质量</td><td>操作</td>";
  }else{
    var tr = document.createElement("tr");
    var aqiData_str = Object.keys(aqiData);
    var my_city = aqiData_str[length - 1]

    var td1 = document.createElement("td");
    td1.innerHTML = my_city;
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = aqiData.my_city;
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = "<button>删除</button>";
    tr.appendChild(td3);

    aqi_table.appendChild(tr);
    
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */

function addBtnHandle() {
  addAqiData();
  // renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
/*
  function delBtnHandle(target) {
  // do sth.
  var tr = target.parentNode.parentNode;
  var strCity = tr.childNodes[0].innerHTML;
  delete aqiData.strCity;
  renderAqiList();
}
*/
function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var add_btn = document.getElementById("add-btn");
  add_btn.onclick = addBtnHandle();
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
