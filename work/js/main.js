var per = [0,0,0,0,0], s = 0, danger = 0
function peres(){
per[0] = document.getElementById("p0")["checked"]
per[1] = document.getElementById("p1")["checked"]
per[2] = document.getElementById("p2")["checked"]
per[3] = document.getElementById("p3")["checked"]
per[4] = document.getElementById("p4")["checked"]
console.log(per[0])
console.log(per[1])
console.log(per[2])
console.log(per[3])
console.log(per[4])
}
function butclick(set){
  if (set != s){ 
    if (set == 1){
      if(s == 0){
        cheap.classList.add("active");
      }else{
        cheap.classList.add("active");
        speed.classList.remove("active");
      }
    }else{
      if(s == 0){
        speed.classList.add("active");
      }else{
        speed.classList.add("active");
        cheap.classList.remove("active");
      }
    }
    s = set
    console.log(s)
    getResponse()
  }else{
    if(set == 1){
      cheap.classList.remove("active");

    }else{
      speed.classList.remove("active")
    }
    s = 0
    console.log(s)
    getResponse()
  }
}
function printT(obj){
  var k, h, lp
  console.log(i)


  k = document.getElementById("price-"+ i +".1")
  h = obj.price
  if (h%1000<100){
    k.innerHTML = Math.floor(h/1000) + " 0" + h % 1000 + " р"
  }else{
    if(h%1000<10){
      k.innerHTML = Math.floor(h/1000) + " 00" + h % 1000 + " р"
    }else{
      k.innerHTML = Math.floor(h/1000) + " " + h % 1000 + " р"
    }
  }
  

  document.getElementById("company-"+ i +".1").src="http://pics.avs.io/99/36/"+ obj.carrier +".png";
  for(j = 1; j < 3; j++){
    h = obj.segments[0].origin + " - " + obj.segments[0].destination
    k = document.getElementById("col-zag-"+ i +".1.1-" + j)
    k.innerHTML = h
  }
  for (j = 1; j < 3; j++){
    h = obj.segments[j-1].stops.length
    k = document.getElementById("col-zag-"+ i +".3.1-" + j)
    
    if (h == 0){
      k.innerHTML = "без пересадок"
      k = document.getElementById("col-txt-"+ i +".3.2-" + j)
      k.innerHTML = "НЕТ"
    }else{if(h == 1){
      k.innerHTML = "1 пересадка"
      h = obj.segments[j-1].stops[0]
      k = document.getElementById("col-txt-"+ i +".3.2-" + j)
      k.innerHTML = h
      }
      else{if(h == 2){
        k.innerHTML = h +" пересадки"
        h = obj.segments[j-1].stops[0]+", "+ obj.segments[j-1].stops[1]
        k = document.getElementById("col-txt-"+ i +".3.2-" + j)
        k.innerHTML = h
        }else{
          k.innerHTML = h +" пересадки"
          h = obj.segments[j-1].stops[0]+", "+ obj.segments[j-1].stops[1]+", "+ obj.segments[j-1].stops[2]
          k = document.getElementById("col-txt-"+ i +".3.2-" + j)
          k.innerHTML = h
          }
    }
    }

    h = obj.segments[j-1].duration
    k = document.getElementById("col-txt-"+ i +".2.2-" + j)
    if (h % 60 < 10){
      h = Math.floor(h/60)+"ч 0"+ h % 60+"м"
      
    }else{
      h = Math.floor(h/60)+"ч "+ h % 60+"м"
    }
    k.innerHTML = h



    h = obj.segments[j-1].date
    k = k = document.getElementById("col-txt-"+ i +".1.2-" + j)
    k.innerHTML = h.slice(11,16)+" - "
    lp = (Number(h.slice(11,13))*60+Number(h.slice(14,16))+obj.segments[j-1].duration)%(60*24)
    if (Math.floor(lp/60)< 10){
      k.innerHTML += "0"+Math.floor(lp/60)
    }else{
      k.innerHTML += Math.floor(lp/60)
    }
    lp = (Number(h.slice(11,13))*60+Number(h.slice(14,16))+obj.segments[j-1].duration)%(60*24)
    if (lp % 60 < 10){
      k.innerHTML += ":0"+ lp % 60
    }else{
      k.innerHTML += ":" + lp % 60
    }
  }

  tickets.classList.remove("dont");
}