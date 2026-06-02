

const list = [
    { name: 'jose wilson', vip: true },
    { name: 'maria', vip: false },
    { name: 'joão', vip: true },
    { name: 'bruno', vip: true },
    { name: 'carla', vip: false },
    { name: 'ana', vip: true },
    { name: 'julio', vip: false },
]

const newList = list.map(user => {
    let braceletColor
        
    if (user.vip === true){
        braceletColor='black'
    }
    else {
        braceletColor='green'
    }
    return {
        name: user.name,
        vip: user.vip,
        braceletColor: braceletColor
    }
/*
   const newuser = {
    nome: user.name, 
    braceletColor: user.vip ? 'black' : 'green'

   }

    return newuser
    */
})

  console.log(newList) 
   
