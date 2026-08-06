const Sequelize = require('sequelize');
// const Sequelize, {Model, DataTypes} = require('sequelize'); 로 정의 할 수도 있다.

class Book extends Sequelize.Model {
    static initate(sequelize){
        //static이라서 Book.init()을 해도 되고 super.init()을 해도 된다.
        return Book.init(
           {
                title : {
                    type : Sequelize.DataTypes.STRING(200)
                  , allowNull : false         
                }
                , author : {
                    type : Sequelize.DataTypes.STRING(100)
                  , allowNull : false               
                }
           },
           {
                  sequelize
                , modelName : 'Book'
                , tableName : 'book'
                , timestamps : true
                , paranoid : true
                , underscored : false
                , comment : '도서테이블'
           } 
        )
    }

    static associate(db){
        //relation
        if (!db.Student) {
            console.error("Error: db.Student 정의되지 않았습니다.");
            return;
        }
        db.Book.belongsToMany(db.Student, {through : 'rental'});
    }
}

module.exports = Book;
