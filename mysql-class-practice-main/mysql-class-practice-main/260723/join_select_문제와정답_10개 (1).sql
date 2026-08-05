-- ============================================================
-- JOIN SELECT 쿼리 연습문제 + 정답 10개
-- 사용 테이블: member, buy, member_award
-- ============================================================
--
-- 주요 연결 열
-- member.mem_id = buy.mem_id
-- member.mem_id = member_award.mem_id
--
-- member_award 테이블은 다음 열을 가진다고 가정합니다.
-- award_id, mem_id, award_name, award_year
-- ============================================================


-- ------------------------------------------------------------
-- 문제 1. 내부 조인
-- ------------------------------------------------------------
-- 상품을 구매한 회원의 회원 아이디, 회원 이름, 상품 이름,
-- 가격, 구매 수량을 조회하세요.
-- 회원 정보와 구매 정보가 모두 존재하는 행만 출력하세요.

SELECT M.mem_id,
       M.mem_name,
       B.prod_name,
       B.price,
       B.amount
FROM member M
INNER JOIN buy B
    ON M.mem_id = B.mem_id;



-- ------------------------------------------------------------
-- 문제 2. 내부 조인과 조건
-- ------------------------------------------------------------
-- 서울에 거주하는 회원의 구매 내역을 조회하세요.
-- 회원 이름, 주소, 상품 이름, 가격, 구매 수량을 출력하고,
-- 가격이 높은 상품부터 정렬하세요.

SELECT M.mem_name,
       M.addr,
       B.prod_name,
       B.price,
       B.amount
FROM member M
INNER JOIN buy B
    ON M.mem_id = B.mem_id
WHERE M.addr = '서울'
ORDER BY B.price DESC;



-- ------------------------------------------------------------
-- 문제 3. 3개 테이블 내부 조인
-- ------------------------------------------------------------
-- 구매 내역과 수상 내역이 모두 있는 회원을 조회하세요.
-- 회원 이름, 상품 이름, 수상 이름, 수상 연도를 출력하세요.
-- 수상 연도가 최근인 순서로 정렬하세요.

SELECT M.mem_name,
       B.prod_name,
       A.award_name,
       A.award_year
FROM member M
INNER JOIN buy B
    ON M.mem_id = B.mem_id
INNER JOIN member_award A
    ON M.mem_id = A.mem_id
ORDER BY A.award_year DESC;



-- ------------------------------------------------------------
-- 문제 4. 외부 조인
-- ------------------------------------------------------------
-- 모든 회원의 회원 아이디와 회원 이름을 출력하고,
-- 구매 내역이 있는 경우에는 상품 이름도 함께 출력하세요.
-- 구매 내역이 없는 회원도 결과에 포함되어야 합니다.

SELECT M.mem_id,
       M.mem_name,
       B.prod_name
FROM member M
LEFT OUTER JOIN buy B
    ON M.mem_id = B.mem_id;



-- ------------------------------------------------------------
-- 문제 5. 외부 조인으로 미구매 회원 찾기
-- ------------------------------------------------------------
-- 한 번도 상품을 구매하지 않은 회원의
-- 회원 아이디, 회원 이름, 주소를 조회하세요.

SELECT M.mem_id,
       M.mem_name,
       M.addr
FROM member M
LEFT JOIN buy B
    ON M.mem_id = B.mem_id
WHERE B.mem_id IS NULL;



-- ------------------------------------------------------------
-- 문제 6. 외부 조인으로 미수상 회원 찾기
-- ------------------------------------------------------------
-- 수상 내역이 한 번도 없는 회원의
-- 회원 아이디, 회원 이름, 데뷔 일자를 조회하세요.
-- 데뷔 일자가 빠른 회원부터 정렬하세요.

SELECT M.mem_id,
       M.mem_name,
       M.debut_date
FROM member M
LEFT JOIN member_award A
    ON M.mem_id = A.mem_id
WHERE A.mem_id IS NULL
ORDER BY M.debut_date ASC;



-- ------------------------------------------------------------
-- 문제 7. 두 번의 외부 조인
-- ------------------------------------------------------------
-- 모든 회원의 회원 이름, 상품 이름, 수상 이름을 조회하세요.
-- 구매 내역이나 수상 내역이 없는 회원도 결과에 포함되어야 합니다.
-- 연결되는 정보가 없으면 해당 열에는 NULL이 출력되도록 하세요.

SELECT M.mem_name,
       B.prod_name,
       A.award_name
FROM member M
LEFT JOIN buy B
    ON M.mem_id = B.mem_id
LEFT JOIN member_award A
    ON M.mem_id = A.mem_id;



-- ------------------------------------------------------------
-- 문제 8. 상호 조인
-- ------------------------------------------------------------
-- 모든 회원과 member_award 테이블에 존재하는 모든 수상 연도의
-- 가능한 조합을 조회하세요.
-- 회원 이름과 수상 연도를 출력하세요.
-- 같은 수상 연도가 여러 번 존재하더라도 연도는 한 번만 사용하세요.

SELECT M.mem_name,
       Y.award_year
FROM member M
CROSS JOIN (
    SELECT DISTINCT award_year
    FROM member_award
) Y
ORDER BY M.mem_name, Y.award_year;



-- ------------------------------------------------------------
-- 문제 9. 자체 조인
-- ------------------------------------------------------------
-- 같은 지역에 거주하는 서로 다른 두 회원을 한 쌍으로 조회하세요.
-- 첫 번째 회원 이름, 두 번째 회원 이름, 지역을 출력하세요.
-- 같은 두 회원의 조합이 순서만 바뀌어 중복 출력되지 않도록 하세요.
-- 자기 자신과의 조합도 제외하세요.

SELECT M1.mem_name AS 회원1,
       M2.mem_name AS 회원2,
       M1.addr AS 지역
FROM member M1
INNER JOIN member M2
    ON M1.addr = M2.addr
   AND M1.mem_id < M2.mem_id;



-- ------------------------------------------------------------
-- 문제 10. 자체 조인과 다른 테이블 조인
-- ------------------------------------------------------------
-- 같은 해에 수상한 서로 다른 두 회원을 한 쌍으로 조회하세요.
-- 첫 번째 회원 이름, 두 번째 회원 이름, 수상 연도를 출력하세요.
-- member_award 테이블을 자체 조인한 뒤,
-- 각 수상 내역의 mem_id를 member 테이블과 연결하세요.
-- 같은 두 수상 내역의 조합이 중복 출력되지 않도록 하세요.

SELECT M1.mem_name AS 회원1,
       M2.mem_name AS 회원2,
       A1.award_year AS 수상연도
FROM member_award A1
INNER JOIN member_award A2
    ON A1.award_year = A2.award_year
   AND A1.award_id < A2.award_id
INNER JOIN member M1
    ON A1.mem_id = M1.mem_id
INNER JOIN member M2
    ON A2.mem_id = M2.mem_id
WHERE A1.mem_id <> A2.mem_id;



-- ============================================================
-- 문제 및 정답 종료
-- ============================================================
