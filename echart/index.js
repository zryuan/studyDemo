(function(){
    let myChart = echarts.init(document.querySelector('.container'));

    const option = {
        color:['#3398D3'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            top: "10%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: 'red',
                    fontSize: '18'
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'red',
                    fontSize: '18'
                },
                axisLine: {
                    show:true,
                    lineStyle: {
                        color: 'rgba(255,177,194,.7)',
                    }
                },
                splitLine:{
                    lineStyle: {
                        color: 'rgba(255,177,194,.7)',
                        width: 2
                    },
                }
            }
        ],
        series: [
            {
                type: 'bar',
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    borderRadius: 10
                }
            }
        ]
    };

    myChart.setOption(option);
})();

(function() {
    let myChart = echarts.init(document.querySelector('.lineContainer'));

    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告'],
            textStyle:{
                color: 'red'
            },
            left: '10%'
        },
        grid: {
            left: '2%',
            right: '5%',
            bottom: '3%',
            top: '10%',
            containLabel: true,
            show: true,
            borderColor: 'red'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210],
                smooth: true
            },
            {
                name: '联盟广告',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310],
                smooth: true
            }
        ]
    };

    myChart.setOption(option);
})();