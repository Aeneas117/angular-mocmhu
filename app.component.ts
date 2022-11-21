/**
 * Sample for print and export in the Circular Gauge
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ILoadedEventArgs,
  GaugeTheme,
  ExportType,
  CircularGaugeComponent,
  CircularGauge,
} from '@syncfusion/ej2-angular-circulargauge';
import {
  PrintService,
  PdfExportService,
  ImageExportService,
} from '@syncfusion/ej2-angular-circulargauge';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [PrintService, PdfExportService, ImageExportService],
})
export class AppComponent {
  @ViewChild('gauge')
  public gauge: CircularGauge;
  public exportType: DropDownList;
  public allowPrint: boolean = true;
  public allowPdfExport: boolean = true;
  public allowImageExport: boolean = true;

  public majorTicks: Object = {
    width: 0,
    interval: 1,
  };

  public minorTicks: Object = {
    width: 0,
  };

  public lineStyle: Object = {
    width: 0,
  };

  public rangeLinearGradient: Object = {
    startValue: '0%',
    endValue: '100%',
    colorStop: [
      { color: '#9e40dc', offset: '0%', opacity: 1 },
      { color: '#d93c95', offset: '70%', opacity: 1 },
    ],
  };

  public labelStyle: Object = {
    font: {
      fontFamily: 'inherit',
    },
    offset: 10,
  };

  public animation: Object = {
    enable: false,
  };

  public cap: Object = {
    radius: 0,
    border: { width: 0 },
  };

  public tail: Object = {
    length: '0%',
  };

  public pointerLinearGradient: Object = {
    startValue: '0%',
    endValue: '100%',
    colorStop: [
      { color: '#9e40dc', offset: '0%', opacity: 0.2 },
      { color: '#9e40dc', offset: '70%', opacity: 0.5 },
    ],
  };

  public load(args: ILoadedEventArgs): void {
    // custom code start
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = <GaugeTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
    // custom code end
  }

  public onClickPrint(e: Event): void {
    this.gauge.print();
  }

  public onClickExport(e: Event): void {
    let fileName: string = (<HTMLInputElement>(
      document.getElementById('fileName')
    )).value;
    this.gauge.export(<ExportType>this.exportType.value, fileName);
  }

  ngOnInit(): void {
    this.exportType = new DropDownList({
      index: 0,
      width: '90%',
    });
    this.exportType.appendTo('#exporttype');
  }

  constructor() {
    // code
  }
}
