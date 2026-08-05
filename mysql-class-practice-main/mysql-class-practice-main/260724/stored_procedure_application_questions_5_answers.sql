-- =========================================================
-- 스토어드 프로시저 응용 문제 5개 - 정답
-- 학습 내용: IF, CASE, WHILE, ITERATE, LEAVE, PREPARE, EXECUTE
-- 사용 데이터베이스: market_db
-- =========================================================

USE market_db;


-- ---------------------------------------------------------
-- 문제 1. IF 문을 활용한 회원 인원수 판별
-- ---------------------------------------------------------
-- member 테이블에서 mem_id가 'BLK'인 회원의 mem_number 값을 조회하여
-- 변수에 저장하는 스토어드 프로시저 ifMemberProc를 작성하시오.
--
-- mem_number가 5 이상이면 '5명 이상인 그룹입니다.'를 출력하고,
-- 그렇지 않으면 '5명 미만인 그룹입니다.'를 출력하시오.

DROP PROCEDURE IF EXISTS ifMemberProc;

DELIMITER $$

CREATE PROCEDURE ifMemberProc()
BEGIN
    DECLARE memberCount INT;

    SELECT mem_number
      INTO memberCount
      FROM member
     WHERE mem_id = 'BLK';

    IF memberCount >= 5 THEN
        SELECT '5명 이상인 그룹입니다.' AS 판정결과;
    ELSE
        SELECT '5명 미만인 그룹입니다.' AS 판정결과;
    END IF;
END $$

DELIMITER ;

CALL ifMemberProc();


-- ---------------------------------------------------------
-- 문제 2. CASE 문을 활용한 회원 등급 판정
-- ---------------------------------------------------------
-- 정수형 변수 purchaseAmount에 1200을 저장한 후,
-- 구매 금액에 따라 회원 등급을 판정하는 스토어드 프로시저
-- caseGradeProc를 작성하시오.
--
-- 등급 기준
-- 1500 이상 : '최우수고객'
-- 1000 이상 : '우수고객'
-- 500 이상  : '일반고객'
-- 500 미만  : '새싹고객'

DROP PROCEDURE IF EXISTS caseGradeProc;

DELIMITER $$

CREATE PROCEDURE caseGradeProc()
BEGIN
    DECLARE purchaseAmount INT;
    DECLARE memberGrade VARCHAR(10);

    SET purchaseAmount = 1200;

    CASE
        WHEN purchaseAmount >= 1500 THEN
            SET memberGrade = '최우수고객';
        WHEN purchaseAmount >= 1000 THEN
            SET memberGrade = '우수고객';
        WHEN purchaseAmount >= 500 THEN
            SET memberGrade = '일반고객';
        ELSE
            SET memberGrade = '새싹고객';
    END CASE;

    SELECT CONCAT('구매금액==>', purchaseAmount) AS 구매금액,
           CONCAT('회원등급==>', memberGrade) AS 회원등급;
END $$

DELIMITER ;

CALL caseGradeProc();


-- ---------------------------------------------------------
-- 문제 3. WHILE 문을 활용한 홀수 합계 구하기
-- ---------------------------------------------------------
-- 1부터 50까지의 숫자 중 홀수만 더한 결과를 출력하는
-- 스토어드 프로시저 whileOddProc를 작성하시오.

DROP PROCEDURE IF EXISTS whileOddProc;

DELIMITER $$

CREATE PROCEDURE whileOddProc()
BEGIN
    DECLARE i INT;
    DECLARE hap INT;

    SET i = 1;
    SET hap = 0;

    WHILE i <= 50 DO
        IF i % 2 = 1 THEN
            SET hap = hap + i;
        END IF;

        SET i = i + 1;
    END WHILE;

    SELECT '1부터 50까지 홀수의 합 ==>' AS 설명,
           hap AS 합계;
END $$

DELIMITER ;

CALL whileOddProc();


-- ---------------------------------------------------------
-- 문제 4. WHILE, ITERATE, LEAVE를 활용한 반복 제어
-- ---------------------------------------------------------
-- 1부터 100까지 증가하면서 다음 조건에 따라 합계를 구하시오.
-- 1) 3의 배수는 합계에서 제외
-- 2) 합계가 500을 초과하면 반복 종료
-- 3) 3의 배수에서는 ITERATE 사용
-- 4) 합계가 500을 초과하면 LEAVE 사용

DROP PROCEDURE IF EXISTS whileControlProc;

DELIMITER $$

CREATE PROCEDURE whileControlProc()
BEGIN
    DECLARE i INT;
    DECLARE hap INT;

    SET i = 1;
    SET hap = 0;

    myWhile:
    WHILE i <= 100 DO

        IF i % 3 = 0 THEN
            SET i = i + 1;
            ITERATE myWhile;
        END IF;

        SET hap = hap + i;

        IF hap > 500 THEN
            LEAVE myWhile;
        END IF;

        SET i = i + 1;
    END WHILE;

    SELECT CONCAT('종료된 숫자==>', i) AS 종료숫자,
           CONCAT('최종 합계==>', hap) AS 최종합계;
END $$

DELIMITER ;

CALL whileControlProc();


-- ---------------------------------------------------------
-- 문제 5. 동적 SQL을 활용한 조건 검색
-- ---------------------------------------------------------
-- 사용자 변수 @searchAddr에 '서울'을 저장한 후,
-- member 테이블에서 addr 값이 같은 회원의
-- mem_id, mem_name, addr을 조회하시오.

SET @searchAddr = '서울';

PREPARE memberSearchQuery
FROM 'SELECT mem_id, mem_name, addr
        FROM member
       WHERE addr = ?';

EXECUTE memberSearchQuery USING @searchAddr;

DEALLOCATE PREPARE memberSearchQuery;
