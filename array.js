const object = {
    name: 'test',
    citys: [{
      name: 'Rio Grande',
      state: 'RS'
    },{
      name: 'São Paulo',
      state: 'SP'
    },{
      name: 'Rio Grande',
      state: 'SP'
    },
    {
        name: 'São Paulo',
        state: 'SP'
    },
    {
        name: 'Rio Grande',
        state: 'SP'
    }],
};
object.citys.find(obj => obj.name === 'Rio Grande').name='johnsons';
console.log(object)


