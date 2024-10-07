function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index')
  return  template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
  .addMetaTag('viewport', 'width=device-width , initial-scale=1')
}




function getCode(code) {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var allss =ss.getSheets();  
for (var i in allss){
  var ws =ss.getSheets()[i];
  var data=ws.getDataRange().getDisplayValues().filter(row=>{
    return row[1]==code                                          //แก้ไขช่องที่ต้องการ ค้นหา
    })
    Logger.log(data)
  if(data.length>0) break;
}


var stdCodesList = data.map (function(r) { return r[1]; });      //แก้ไขช่องที่ต้องการ ค้นหา
var stdList = data.map(function(r) { 
return [`  


<!-- ตาราง ชุดที่ 1 ข้อมูลนักเรียน -->
        <table class="table table-bordered">

        <thead class="table-primary">
         <tr>
          <th scope="col"><center>เลขประจำตัวนักเรียน</center></th>
          <th scope="col"><center>ชื่อ - นามสกุล</center></th>
          <th scope="col"><center>เลขที่</center></th>
          <th scope="col"><center>ห้อง</center></th>
         </tr>
        </thead>

        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[1]}<center></td> <td><center>${r[6]}<center></td> <td><center>${r[0]}<center></td>  <td><center>${r[7]} <center></td>
        </td>
<!-- จบ ตาราง ชุดที่ 1 ข้อมูลนักเรียน -->

<!-- ตาราง ชุดที่ 2 แบบทดสอบก่อนเรียน -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center> รวมคะแนน <br> ได้ </center></th>
          <th scope="col"><center>เกรดที่ได้</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[24]}<center></td> <td><center>${r[25]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 2 แบบทดสอบก่อนเรียน -->



<!-- ตาราง ชุดที่ 4 งานชิ้นที่ 1 -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center>งานชิ้นที่ 1<br> สรุปความรู้ IOT </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[8]}<center></td> <td><center>${r[17]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 4 งานชิ้นที่ 1 -->



<!-- ตาราง ชุดที่ 5 งานชิ้นที่ 2 -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center> งานชิ้นที่ 2 <br>IOT รอบตัว</center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[9]}<center></td> <td><center>${r[18]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 5 งานชิ้นที่ 1 -->

<!-- ตาราง ชุดที่ 6 งานชิ้นที่ 3 -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center>งานชิ้นที่ 3 <br> IOT ในระดับโลก </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[10]}<center></td> <td><center>${r[19]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 6 งานชิ้นที่ 3 -->

<!-- ตาราง ชุดที่ 4 งานชิ้นที่ 1 -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center>ทดสอบความรู้<br> หลังเรียน </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[11]}<center></td> <td><center>${r[20]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 4 งานชิ้นที่ 1 -->



<!-- ตาราง ชุดที่ 7 สอบกลางภาค -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center> แบบทดสอบ <br> กลางภาค </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[12]}<center></td> <td><center>${r[21]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ตาราง ชุดที่ 7 สอบกลางภาค -->

<!-- ตาราง ชุดที่ 8 งานชิ้นที่ 4 -->
        <table class="table table-bordered">


<!-- ตาราง ชุดที่ 9 โครงงาน -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center>โครงงาน <br> คอมพิวเตอร์ </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[13]}<center></td> <td><center>${r[22]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ชุดที่ 9 งานชิ้นที่ 4 -->

<!-- ตาราง ชุดที่ 10 สอบปลายภาค -->
        <table class="table table-bordered">


        <thead class="table-primary">
         <tr>
          <th scope="col"><center>แบบทดสอบ <br> ปลายภาค </center></th>
          <th scope="col"><center>คะแนน</center></th>
         </tr>
        </thead>


        <tbody style="background-color:rgba(255, 255, 255,1);">
         <tr>
          <td><center>${r[14]}<center></td> <td><center>${r[23]}<center></td> 
        </td>
         </td>
         </tr>
        </tbody>
        
        </table>
<!-- จบ  ชุดที่ 10 สอบปลายภาค -->

        `];
});


var position = stdCodesList.indexOf(code); 
if(position > -1){
return stdList[position];
} else {
return '*ไม่พบข้อมูล กรุณาใส่เลขประจำตัวใหม่อีกครั้ง';


  }
    
}


function getURL(){
return ScriptApp.getService().getUrl()
}



