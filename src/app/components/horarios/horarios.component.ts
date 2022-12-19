import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xmljs from 'xml2js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  public xmlItems: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  constructor(private http: HttpClient) {
    this.loadXML();
  }
  //getting data function
  loadXML() {
    /*Read Data*/
    this.http
      .get('assets/horarios.xml', {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append(
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
          ),
        responseType: 'text',
      })
      .subscribe((data) => {
        this.parseXML(data).then((data) => {
          this.xmlItems = data;
        });
      });
    /*Read Data*/
  }

  //store xml data into array variable
  parseXML(data: any) {
    return new Promise((resolve) => {
      var k: string | number,
        arr: any = [],
        parser = new xmljs.Parser({
          trim: true,
          explicitArray: true,
        });
      parser.parseString(data, function (err: any, result: { Horarios: any }) {
        var obj = result.Horarios;
        for (k in obj.datos) {
          var item = obj.datos[k];
          arr.push({
            id: item.id[0],
            nombre: item.nombre[0],
            tiempo: item.tiempo[0],
          });
        }
        resolve(arr);
      });
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    setTimeout(() => {
      $('#datatableexample').DataTable({
        pagingType: 'full_numbers',
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json',
        },
        pageLength: 10,
        info: false,
        processing: true,
        lengthMenu: [10, 20, 30],
      });
    }, 50);
  }

}
