const {Model, DataTypes} = require('sequelize');

class Car extends Model {
    static initate(sequelize){
        return super.init(
           {
                model : {
                    type : DataTypes.STRING(100)                   
                }
           },
           {
                  sequelize
                , modelName : 'car'
                , tableName : 'car'
                , timestamps : true
                , paranoid : true
                , underscored : false
                , comment : '자동차테이블'
           } 
        )
    }

    static associate(db){

    }
}

module.exports = Car;
