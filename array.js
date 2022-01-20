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
object.citys.splice(object.citys.findIndex(obj => obj.name === 'São Paulo'), 1);

