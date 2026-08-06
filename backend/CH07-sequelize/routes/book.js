const router = require('express').Router();
const { Book } = require('../models');
const { count } = require('../models/Book');

router.post('/', async (req, res) => {
    try {
        // promise에 포함되어있다.
        const {title, author} = req.body;
        const book = await Book.create({title, author});
        res.status(201).json({success : true, document : book, message : '도서추가성공'});
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }

})

router.get('/', async (req, res) => {
    try {
        const book = await Book.findAndCountAll({
              order: [['id', 'DESC']]
            , limit: 10
        });
        res.status(200).json({success : true, document : book, message : '조회성공'})
    } catch (error) {
        res.status(500).json({success : false,  message : error.message});
    }
})

router.route('/:id')
    .put(async (req, res) => {
        try {
            const {title, author} = req.body;
            const params = {title, author};
            const option = {where : {id : req.params.id}}
            // const [result] = await Book.update({title, author}, {where : {id : req.params.id}});
            const [result] = await Book.update(params, option);
            // [result] 개수를 반환
/* 
update 설명에서 반환값에 이것 Promise<[affectedCount: number] 을 보면 배열로 반환하는 것을 알수 있다.
(method) Model<TModelAttributes extends {} =
any, TCreationAttributes extends {} = TModelAttributes>.update<Book>(this: ModelStatic<Book>, values: {
[x: string]: any;
}, options: UpdateOptions<any>): Promise<[affectedCount: number]> (+1 overload)
Update multiple instances that match the where options. 
The promise returns an array with one or two elements. 
The first element is always the number of affected rows, 
while the second element is the actual affected rows 
(only supported in postgres and mssql with options.returning true.)
  */           
            if(result === 0){
                res.status(404).json({success : false, document : [],  message : '해당도서가 없습니다.'});
            }
            const document = await Book.findByPk(req.params.id);
            res.status(200).json({success : true, document,  message : '수정되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .get(async (req, res) => {
        try {
            const document = await Book.findByPk(req.params.id);
            if(!document){
                return res.status(404).json({success : false, document : [], message : '도서가 존재하지 않습니다.'});
            }
            res.status(200).json({success : true, document, message : '조회가 완료되었습니다.', count : document.length});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })
    .delete(async (req, res) => {
        try {
                //먼저 해당 id가 있는지 확인한다.
            const document = await Book.findByPk(req.params.id);
            if(document === 0){
                return res.status(404).json({success : false, document : [],  message : '도서가 존재하지 않습니다.'});
            }

            // 있으면 삭제 
            const option = {where : {id : req.params.id}}
            await Book.destroy(option);
/* 
destroy 는 반환이 Promise<number>이므로 숫자(삭제한 row개수)만 반환하는 것을 알수 있다.
(method) Model<TModelAttributes extends {} = 
any, TCreationAttributes extends {} = TModelAttributes>.destroy<Book>
(this: ModelStatic<Book>, options?: DestroyOptions<any> | undefined): Promise<number>
Delete multiple instances, or set their deletedAt timestamp to the current time if paranoid is enabled.
@returns — Promise The number of destroyed rows

  */           
            //삭제후 전체 조회를 한다.
            const book = await Book.findAndCountAll({
                  order: [['id', 'DESC']]
                , limit: 10
            });
            res.status(200).json({success : true, book, message : '삭제 되었습니다.'});
        } catch (error) {
            res.status(500).json({success : false, document : [],  message : error.message});
        }
    })

module.exports = router;