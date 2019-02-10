function ascending(dataPoint1, dataPoint2) {
    'use strict';
    return dataPoint1.y - dataPoint2.y;
}

window.onload = function () {
    'use strict';
    CanvasJS.addColorSet("greenShades", [
        "#14a796", "#bbff00", "#7fff00", "#00ff77", "#90EE90"
    ]);
    var chart = new CanvasJS.Chart("chartContainer", {
        colorSet: "greenShades",
        title: {
            text: "Class Field Count"
        },
        data: [
            {
                type: "column",
                name: "series1",
                dataPoints: [
                    { label: "CS",    y: 11 },
                    { label: "MATH",  y: 6  },
                    { label: "PHIL",  y: 1  },
                    { label: "PHYS",  y: 1  },
                    { label: "BIOL",  y: 2  },
                    { label: "ENG",   y: 1  },
                    { label: "HIST",  y: 1  },
                    { label: "A&S",   y: 1  },
                    { label: "THTR",  y: 1  },
                    { label: "EGRS",  y: 1  },
                    { label: "AFS",   y: 1  }
                ]
            }
        ]
    });
    chart.options.data[0].dataPoints.sort(ascending);
    chart.render();
};