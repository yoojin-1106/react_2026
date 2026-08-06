const {Model, DataTypes} = require('sequelize');
/*
const Sequelize = require('sequelize');
 class 라서 대문자로  받아오면 구분이 편함. 
const {Model, DataType} = require('sequelize'); 로 분해해서 Model을 바로 호출 할 수도 잇고, 
const Sequelize = require('sequelize'); 을 써서 Sequelize.Model 로 가져오는 방법이 있다. 
*/

// const Sequelize, {Model, DataTypes} = require('sequelize'); 로 정의 할 수도 있다.

class Student extends Model {
    static initate(sequelize){
        return super.init(
           {
             // 컬럼설정
     /*            no : {
                      type : DataTypes.INTEGER
                    , allowNull : false
                    // 생략시 기본이 false
                    , unique : true
                }
                ,  */
             name : {
                  type : DataTypes.STRING(30)                   
            }
            , major : {
                  type : DataTypes.STRING(30)                 
            }
            , grade : {
                  type : DataTypes.STRING(30)                 
            }
            , gender : {
                  type : DataTypes.ENUM('남', '여')                
            }
           },
           {
            // 테이블설정
                  sequelize
                , modelName : 'student'
                , tableName : 'student'
                , timestamps : true
                , paranoid : true
                , underscored : false
                , comment : '학생테이블'
                //, charset : 'utf-8'
                //  charset : 'utf-8' 안하면  DB설정이 반영된다. charset을 만들면 collate도 만들어야 한다.
           } 
        )
    }

    static associate(db){
      //relation 테이블 관계 정의
      if (!db.Book) {
        console.error("Error: db.Book이 정의되지 않았습니다.");
        return;
      }
      db.Student.belongsToMany(db.Book, {through : 'rental'});

    }
}

module.exports = Student;
