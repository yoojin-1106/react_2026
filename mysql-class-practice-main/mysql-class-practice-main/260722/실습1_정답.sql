-- ============================================================
-- market_db SELECT 종합 연습문제
-- 대상 테이블: member, buy
-- 외부 샘플 데이터베이스(world, sakila)는 사용하지 않습니다.
--
-- 초급 10문제: 지정 문법·함수 2~3개 조합
-- 중급 10문제: 지정 문법·함수 4~6개 조합
--
-- 대상 요소:
-- WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, DISTINCT,
-- SUM, AVG, MIN, MAX, COUNT, COUNT(DISTINCT)
-- ============================================================

USE market_db;

-- 문제와 정답이 함께 제시되어 있습니다.

-- ============================================================
-- 초급 문제
-- ============================================================

-- 01번 [초급] (사용 요소 2개: WHERE, ORDER BY)
-- 문제: 서울 지역에 있는 회원의 이름, 지역, 데뷔 일자를 조회하되 데뷔 일자가 빠른 순서로 정렬하세요.

-- 정답
SELECT mem_name, addr, debut_date
FROM member
WHERE addr = '서울'
ORDER BY debut_date;


-- 02번 [초급] (사용 요소 2개: DISTINCT, ORDER BY)
-- 문제: 회원들이 거주하는 지역을 중복 없이 조회하고, 지역 이름의 오름차순으로 정렬하세요.

-- 정답
SELECT DISTINCT addr
FROM member
ORDER BY addr;


-- 03번 [초급] (사용 요소 3개: WHERE, ORDER BY, LIMIT)
-- 문제: 평균 키가 164cm 이상인 회원 중 키가 큰 순서대로 상위 3개의 회원 이름과 키를 조회하세요.

-- 정답
SELECT mem_name, height
FROM member
WHERE height >= 164
ORDER BY height DESC
LIMIT 3;


-- 04번 [초급] (사용 요소 2개: GROUP BY, COUNT)
-- 문제: 지역별 회원 수를 조회하세요. 결과에는 지역과 회원 수가 나타나야 합니다.

-- 정답
SELECT addr AS 지역, COUNT(*) AS 회원수
FROM member
GROUP BY addr;


-- 05번 [초급] (사용 요소 2개: GROUP BY, SUM)
-- 문제: 구매 회원별로 구매한 전체 수량의 합계를 조회하세요.

-- 정답
SELECT mem_id AS 회원아이디, SUM(amount) AS 총구매수량
FROM buy
GROUP BY mem_id;


-- 06번 [초급] (사용 요소 2개: WHERE, AVG)
-- 문제: 분류가 '디지털'인 구매 상품들의 평균 가격을 조회하세요.

-- 정답
SELECT AVG(price) AS 디지털상품평균가격
FROM buy
WHERE group_name = '디지털';


-- 07번 [초급] (사용 요소 3개: GROUP BY, MAX, ORDER BY)
-- 문제: 상품별 최고 가격을 조회하고, 최고 가격이 높은 상품부터 정렬하세요.

-- 정답
SELECT prod_name AS 상품명, MAX(price) AS 최고가격
FROM buy
GROUP BY prod_name
ORDER BY MAX(price) DESC;


-- 08번 [초급] (사용 요소 2개: WHERE, DISTINCT)
-- 문제: 가격이 50 이상인 구매 기록에서 상품 이름을 중복 없이 조회하세요.

-- 정답
SELECT DISTINCT prod_name
FROM buy
WHERE price >= 50;


-- 09번 [초급] (사용 요소 2개: WHERE, COUNT(DISTINCT))
-- 문제: 한 번의 구매에서 수량을 2개 이상 구입한 적이 있는 회원이 모두 몇 명인지 조회하세요. 같은 회원은 한 번만 계산합니다.

-- 정답
SELECT COUNT(DISTINCT mem_id) AS 구매회원수
FROM buy
WHERE amount >= 2;


-- 10번 [초급] (사용 요소 3개: GROUP BY, HAVING, COUNT)
-- 문제: 구매 기록이 3건 이상인 회원의 아이디와 구매 기록 수를 조회하세요.

-- 정답
SELECT mem_id AS 회원아이디, COUNT(*) AS 구매기록수
FROM buy
GROUP BY mem_id
HAVING COUNT(*) >= 3;


-- ============================================================
-- 중급 문제
-- ============================================================

-- 11번 [중급] (사용 요소 5개: WHERE, GROUP BY, SUM, HAVING, ORDER BY)
-- 문제: 가격이 30 이상인 구매 기록만 대상으로 회원별 총 구매 금액을 계산하세요. 총 구매 금액이 200 이상인 회원만 남기고, 총 구매 금액이 큰 순서로 정렬하세요.

-- 정답
SELECT mem_id AS 회원아이디,
       SUM(price * amount) AS 총구매금액
FROM buy
WHERE price >= 30
GROUP BY mem_id
HAVING SUM(price * amount) >= 200
ORDER BY SUM(price * amount) DESC;


-- 12번 [중급] (사용 요소 6개: WHERE, GROUP BY, AVG, HAVING, ORDER BY, LIMIT)
-- 문제: 분류가 입력된 구매 기록만 대상으로 분류별 1회 구매 금액(price×amount)의 평균을 계산하세요. 평균이 50 이상인 분류만 남기고 평균이 높은 순서로 상위 2개를 조회하세요.

-- 정답
SELECT group_name AS 분류,
       AVG(price * amount) AS 평균구매금액
FROM buy
WHERE group_name IS NOT NULL
GROUP BY group_name
HAVING AVG(price * amount) >= 50
ORDER BY AVG(price * amount) DESC
LIMIT 2;


-- 13번 [중급] (사용 요소 5개: WHERE, GROUP BY, COUNT(DISTINCT), HAVING, ORDER BY)
-- 문제: 가격이 15 이상인 구매 기록에서 회원별로 서로 다른 상품을 몇 종류 구매했는지 계산하세요. 서로 다른 상품을 2종류 이상 구매한 회원만 남기고 종류 수가 많은 순서로 정렬하세요.

-- 정답
SELECT mem_id AS 회원아이디,
       COUNT(DISTINCT prod_name) AS 상품종류수
FROM buy
WHERE price >= 15
GROUP BY mem_id
HAVING COUNT(DISTINCT prod_name) >= 2
ORDER BY COUNT(DISTINCT prod_name) DESC;


-- 14번 [중급] (사용 요소 6개: WHERE, GROUP BY, MIN, MAX, ORDER BY, LIMIT)
-- 문제: 키 정보가 있는 회원을 지역별로 묶어 지역별 최저 키와 최고 키를 조회하세요. 최고 키가 큰 지역부터 정렬하여 상위 3개 지역만 조회하세요.

-- 정답
SELECT addr AS 지역,
       MIN(height) AS 최저키,
       MAX(height) AS 최고키
FROM member
WHERE height IS NOT NULL
GROUP BY addr
ORDER BY MAX(height) DESC
LIMIT 3;


-- 15번 [중급] (사용 요소 4개: WHERE, DISTINCT, ORDER BY, LIMIT)
-- 문제: 평균 키가 164cm 이상인 회원이 속한 지역을 중복 없이 조회하세요. 지역 이름순으로 정렬한 뒤 앞의 3개 지역만 출력하세요.

-- 정답
SELECT DISTINCT addr
FROM member
WHERE height >= 164
ORDER BY addr
LIMIT 3;


-- 16번 [중급] (사용 요소 6개: WHERE, GROUP BY, SUM, AVG, HAVING, ORDER BY)
-- 문제: 수량이 2개 이상인 구매 기록만 대상으로 회원별 총 구매 수량과 평균 상품 가격을 계산하세요. 총 구매 수량이 5개 이상인 회원만 남기고 평균 상품 가격이 높은 순서로 정렬하세요.

-- 정답
SELECT mem_id AS 회원아이디,
       SUM(amount) AS 총구매수량,
       AVG(price) AS 평균상품가격
FROM buy
WHERE amount >= 2
GROUP BY mem_id
HAVING SUM(amount) >= 5
ORDER BY AVG(price) DESC;


-- 17번 [중급] (사용 요소 6개: GROUP BY, COUNT, SUM, HAVING, ORDER BY, LIMIT)
-- 문제: 상품별 구매 기록 수와 총 판매 수량을 계산하세요. 구매 기록이 2건 이상인 상품만 남기고 총 판매 수량이 많은 순서로 상위 3개 상품을 조회하세요.

-- 정답
SELECT prod_name AS 상품명,
       COUNT(*) AS 구매기록수,
       SUM(amount) AS 총판매수량
FROM buy
GROUP BY prod_name
HAVING COUNT(*) >= 2
ORDER BY SUM(amount) DESC
LIMIT 3;


-- 18번 [중급] (사용 요소 6개: WHERE, GROUP BY, COUNT, MIN, MAX, ORDER BY)
-- 문제: 분류가 입력된 구매 기록을 분류별로 묶어 구매 기록 수, 최저 가격, 최고 가격을 조회하세요. 구매 기록 수가 많은 분류부터 정렬하세요.

-- 정답
SELECT group_name AS 분류,
       COUNT(*) AS 구매기록수,
       MIN(price) AS 최저가격,
       MAX(price) AS 최고가격
FROM buy
WHERE group_name IS NOT NULL
GROUP BY group_name
ORDER BY COUNT(*) DESC;


-- 19번 [중급] (사용 요소 6개: WHERE, GROUP BY, COUNT(DISTINCT), SUM, HAVING, ORDER BY)
-- 문제: 가격이 30 이상인 구매 기록에서 회원별 서로 다른 상품 종류 수와 총 구매 금액을 계산하세요. 총 구매 금액이 200 이상인 회원만 남기고 총 구매 금액이 큰 순서로 정렬하세요.

-- 정답

-- 20번 [중급] (사용 요소 6개: WHERE, GROUP BY, AVG, MAX, HAVING, ORDER BY)
-- 문제: 분류가 입력된 구매 기록을 분류별로 묶어 평균 구매 수량과 가장 큰 1회 구매 금액(price×amount)을 조회하세요. 평균 구매 수량이 2개 이상인 분류만 남기고 가장 큰 1회 구매 금액이 높은 순서로 정렬하세요.

-- 정답
