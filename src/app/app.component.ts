import { Component, ViewChild, ElementRef } from '@angular/core';
//import TableToExcel from "@linways/table-to-excel";
import { downloadTableAsExcel, tableToFile } from 'html-table-to-excel.ts';
import * as xls from 'xlsx';
import ExcellentExport from 'excellentexport';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableExcel';
  data=[1,2,3,4,5];
 @ViewChild('table') table !:ElementRef;
 //table = document.querySelector('table1')

  onClick(){
    console.log(this.table);
   var id = document.getElementById('table1');
   
   
  // downloadTableAsExcel(this.table.nativeElement, 'data.xls');

   const workbook = xls.utils.table_to_book(this.table.nativeElement);
   const ROW_HEIGHT = 50;
   var ws = workbook.Sheets[workbook.SheetNames[0]];
   var LEVEL = 1;
   console.log(ws["A1"]);
   ws["A1"].s =  {      
  font: {
    name: '宋体',
    sz: 24,
    bold: true,
    color: { rgb: "FFAA00" }
  },
};

/* Excel sixth row -> SheetJS row index 6 - 1 = 5 */
var ROW_INDEX = 2;

/* create !rows array if it does not exist */
if(!ws["!rows"]) ws["!rows"] = [];

/* create row metadata object if it does not exist */
if(!ws["!rows"][ROW_INDEX]) ws["!rows"][ROW_INDEX] = {hpx: 30};

/* set level */
ws["!rows"][ROW_INDEX].level = LEVEL;

   xls.writeFile(workbook, 'file.xlsx');

  }

}
