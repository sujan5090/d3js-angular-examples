import { Component } from '@angular/core';
import { IChartData } from './app.interface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Stacked Bar Chart ';
    public validData: IChartData[];
    public dataStatus = false;

    Upload() {

        const fileUpload = <HTMLInputElement>document.getElementById('myFile');
        const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        const jsonObj = [];
        const years = [];
        const finalData: IChartData[] = [];
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) !== 'undefined') {

                const reader = new FileReader();

                reader.onload = function (e: any) {

                    const table = document.createElement('table');

                    const rows = e.target.result.split('\n');
                    for (let i = 0; i < rows.length; i++) {

                        const row = table.insertRow(-1);

                        const cells = rows[i].split(',');

                        for (let j = 1; j < cells.length; j++) {

                            const obj = { year: 0 };
                            const str = cells[j];
                            const value = Number(str.slice(5));
                            const key = Number(str.slice(0, 4));
                            obj.year = key;
                            obj[cells[0].toLowerCase()] = value;

                            if (!years.includes(key)) {
                                years.push(key);
                            }

                            jsonObj.push(obj);
                        }
                    }

                    years.map((value, index) => {
                        const obj: IChartData = {
                            year: 0,
                            series1: 0,
                            series2: 0,
                            series3: 0,
                            series4: 0

                        }
                        obj.year = value;
                        finalData.push(obj);
                    });

                    jsonObj.map((value) => {
                        finalData.map((element, index) => {

                            if (element.year == value.year) {
                                const keys = Object.keys(value);

                                if (keys[1] == 'series1') {
                                    finalData[index].series1 = value.series1;

                                }

                                if (keys[1] == 'series2') {
                                    finalData[index].series2 = value.series2;
                                }

                                if (keys[1] == 'series3') {
                                    finalData[index].series3 = value.series3;
                                }

                                if (keys[1] == 'series4') {
                                    finalData[index].series4 = value.series4;
                                }
                            }

                        });
                    });
                };

                reader.readAsText(fileUpload.files[0]);


            } else {

                alert('This browser does not support HTML5.');

            }

        } else {

            alert('Please upload a valid CSV file.');

        }

        setTimeout(() => {
            this.validData = finalData;
            this.dataStatus = true;

        }, 0);



    }

}
