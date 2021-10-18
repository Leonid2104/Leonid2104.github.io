var findId,id, i, j ;
function stop(z){

if (per[0] || (per[1] && z.stops.length == 0) || (per[2] && z.stops.length == 1) || (per[3] && z.stops.length == 2) || (per[4] && z.stops.length == 3)){
  return true
}
else{
  if (!(per[1] || per[2] || per[3] || per[4])){
    return true
  }
  else{
  return false
  }
}

}
function sort(x){
  var sch
  arr = x
  if (s == 1){
    for (i = 0; i < 5; i++){
      for (j = arr.tickets.length-1; j > i; j--){
        if(arr.tickets[j].price < arr.tickets[j-1].price && stop(arr.tickets[j].segments[0]) && stop(arr.tickets[j].segments[1]) &&stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1])){
          sch = arr.tickets[j-1]
          arr.tickets[j-1] = arr.tickets[j]
          arr.tickets[j] = sch
        }
        else{
          if(stop(arr.tickets[j].segments[0]) && stop(arr.tickets[j].segments[1]) && !(stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1]))){
            sch = arr.tickets[j-1]
            arr.tickets[j-1] = arr.tickets[j]
            arr.tickets[j] = sch
          }else{
            if(!(stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1])) && (stop(arr.tickets[j].segments[0]) || stop(arr.tickets[j].segments[1]))){
              sch = arr.tickets[j-1]
              arr.tickets[j-1] = arr.tickets[j]
              arr.tickets[j] = sch
            }
          }
        }
      }
      console.log(arr.tickets[i])
      printT(arr.tickets[i])
    }
  }else{ if(s == 2){
    for (i = 0; i < 5; i++){
      for (j = arr.tickets.length-1; j > i; j--){
        if(arr.tickets[j].segments[0].duration < arr.tickets[j-1].segments[0].duration && stop(arr.tickets[j].segments[0])&&stop(arr.tickets[j].segments[1])&&stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1])){
          sch = arr.tickets[j-1]
          arr.tickets[j-1] = arr.tickets[j]
          arr.tickets[j] = sch
        }else{
          if(stop(arr.tickets[j].segments[0]) && stop(arr.tickets[j].segments[1]) && !(stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1]))){
            sch = arr.tickets[j-1]
            arr.tickets[j-1] = arr.tickets[j]
            arr.tickets[j] = sch
          }else{
            if(!(stop(arr.tickets[j-1].segments[0]) &&stop(arr.tickets[j-1].segments[1])) && (stop(arr.tickets[j].segments[0]) || stop(arr.tickets[j].segments[1]))){
              sch = arr.tickets[j-1]
              arr.tickets[j-1] = arr.tickets[j]
              arr.tickets[j] = sch
            }
          }
        }
      }
      console.log(arr.tickets[i])
      danger = 0
      printT(arr.tickets[i])
    }
  }else{
    i = 0
    j = 0
   while(i < 5 && j < arr.tickets.length){
     if(stop(arr.tickets[j].segments[0]) && stop(arr.tickets[j].segments[1])){
     console.log(arr.tickets[j])
     printT(arr.tickets[j])
     i+=1
     }
     j+=1
   }
  }}

}
var ticket;
var fetchTickets = function() {
  fetch(findId)
  .then(data => {
    if(data["ok"]){
      flag = true
      return data.json()
    }
    else{
      flag = false
      fetchTickets()
    }
  })
  .then(success =>{
    if(flag){
      if (success["stop"]){
        ticket = success
        console.log(ticket)
        sort(ticket)
        danger += 1
        if (danger == 50){
          location. reload()
        }
      }
      else{
        fetchTickets()
      }
      
  }
  })
}
async function getResponse(){
  tickets.classList.add("dont");
  peres()
  let response = await fetch('https://front-test.beta.aviasales.ru/search')
  let content  = await response.json()
  id = content["searchId"];
  console.log(id)
  findId = 'https://front-test.beta.aviasales.ru/tickets?searchId='.concat(id)
  console.log(findId)
  fetchTickets();
}
getResponse()
