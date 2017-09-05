/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var strCity = document.getElementById("aqi-city-input").value.trim();
  var strAqi = document.getElementById("aqi-value-input").value.trim();

  if(!strCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
    alert("城市名称必须为中英文字符");
    return;
  }
  if(!strAqi.match(/^\d+$/)){
    alert("空气质量指数必须为整数");
    return;
  }
  aqiData[strCity] = strAqi;
  // aqiData.strCity = strAqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var aqi_table = document.getElementById("aqi-table");
  aqi_table.innerHTML = "";
  for(var strCity in aqiData){
    if(aqi_table.childNodes.length === 0){
      aqi_table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    }
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = strCity;
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = aqiData[strCity];
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
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */

  function delBtnHandle(target) {
  // do sth.
    var tr = target.parentNode.parentNode;
    var strCity = tr.childNodes[0].innerHTML;
    delete aqiData[strCity];
    renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var add_btn = document.getElementById("add-btn");
  add_btn.onclick = addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById("aqi-table");
  // var delBtn = table.getElementsByTagName("button");
  // for(var i = 0; i < delBtn.length; i++){
  //   delBtn[i].onclick = function(){
  //       delBtnHandle();
  //   }
  // }
  table.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "BUTTON") {
        delBtnHandle(e.target);
    }
  })
}

window.onload = init;
