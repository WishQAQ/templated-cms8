<?php
$z[0]=Array("field","",254,273);
$z[0][4]['name']="title";
$z[1]=Array("global","",274,300);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",341,370);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",410,468);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",763,798);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1010,1039);
$z[5][4]['name']="position";
$z[6]=Array("field","",1080,1109);
$z[6][4]['name']="typename";
$z[7]=Array("list","\r\n            <li>\r\n              <div class=\"imgdiv\"><a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\" alt=\"[field:title/]\" width=\"164\" height=\"100\"></a>\r\n                <div class=\"fliter\"></div>\r\n              </div>\r\n              <p><a href=\"[field:arcurl/]\" title=\"[field:title/]\">[field:title/]</a></p>\r\n            </li>\r\n            ",1273,1657);
$z[7][4]['pagesize']="12";
$z[8]=Array("pagelist","",1719,1772);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[9]=Array("field","",1965,2024);
$z[9][4]['name']="typeid";
$z[9][4]['function']="GetTopTypename(@me)";
$z[10]=Array("channel","\r\n        <li><a href=\"[field:typeurl/]\" title=\"[field:typename/]\" >[field:typename/]</a> </li>\r\n        ",2077,2336);
$z[10][4]['type']="son";
$z[10][4]['currentstyle']="<li class='current'><a href='~typelink~' class='thisclass'>~typename~</a></li>";
$z[11]=Array("include","",2449,2486);
$z[11][4]['filename']="footer.htm";

?>