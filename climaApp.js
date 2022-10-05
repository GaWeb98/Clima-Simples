var qs = (element) => document.querySelector(element);

document.querySelector('button').addEventListener('click', async () => {
    let input = document.querySelector('input').value;
    
    if(input !== '') {
        let URLtemp = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&lang=pt_br&units=metric&appid=f35be657a0bbcb4a446292286f1c53be`;
        let reqTemp = await fetch(URLtemp);
        let resultTemp = await reqTemp.json();

        if(resultTemp.cod === 200) {
            mostrarData({
                name: resultTemp.name,
                sysName: resultTemp.sys.country,
                min: resultTemp.main.temp_min,
                temp: resultTemp.main.temp,
                max: resultTemp.main.temp_max,
                des: resultTemp.weather[0].description,
                icon: resultTemp.weather[0].icon,
            });
            horarioFetch();
        } else {
            alert('local não encontrado.')
        }
        
    };
    function mostrarData(resultTemp) {
        qs('.data').style.display = 'flex';
        qs('.local').innerHTML = `<h1>${resultTemp.name}, ${resultTemp.sysName}</h1>`;
        qs('.temp').innerHTML = `<h3>${resultTemp.temp.toFixed(0)}<sup>°c</sup></h3>`;
        qs('.descript').innerHTML = `<h3>${resultTemp.des}</h3>`;
        qs('.dataImg img').setAttribute('src', `https://openweathermap.org/img/wn/${resultTemp.icon}@2x.png`);
    };
    function horarioFetch() {

    };

});