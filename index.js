setInterval(() => {
    console.log("tejas")
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)` ;
    minute.style.transform = `rotate(${mrotation}deg)`; 
    sec.style.transform = `rotate(${srotation}deg)` ;
}, 1000);