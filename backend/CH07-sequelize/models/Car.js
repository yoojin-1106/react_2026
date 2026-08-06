const {Model, DataTypes, ForeignKeyConstraintError} = require('sequelize');

class Car extends Model {
    static initate(sequelize){
        return super.init(
           {
                model : {
                      type : DataTypes.STRING(100)
                    , allowNull : false              
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
