-- =========================================================
-- MySQL world 데이터베이스 추가 실습 정답
-- 주제: VIEW 생성과 UNIQUE INDEX 생성
-- 총 5문항
-- =========================================================

USE world;

-- ---------------------------------------------------------
-- 정답 1. 국가와 수도 정보를 보여주는 뷰
-- ---------------------------------------------------------
DROP VIEW IF EXISTS v_country_capital;

CREATE VIEW v_country_capital AS
SELECT
    co.Code AS country_code,
    co.Name AS country_name,
    co.Continent AS continent,
    ci.Name AS capital_name
FROM country AS co
INNER JOIN city AS ci
    ON co.Capital = ci.ID;

SELECT *
FROM v_country_capital;


-- ---------------------------------------------------------
-- 정답 2. 국가별 공식 언어를 보여주는 뷰
-- ---------------------------------------------------------
DROP VIEW IF EXISTS v_official_language;

CREATE VIEW v_official_language AS
SELECT
    co.Name AS country_name,
    cl.Language AS language,
    cl.Percentage AS percentage
FROM country AS co
INNER JOIN countrylanguage AS cl
    ON co.Code = cl.CountryCode
WHERE cl.IsOfficial = 'T';

SELECT *
FROM v_official_language
ORDER BY percentage DESC;


-- ---------------------------------------------------------
-- 정답 3. 도시·국가·언어 정보를 함께 보여주는 뷰
-- ---------------------------------------------------------
DROP VIEW IF EXISTS v_city_language;

CREATE VIEW v_city_language AS
SELECT
    ci.Name AS city_name,
    co.Name AS country_name,
    co.Continent AS continent,
    cl.Language AS language,
    cl.IsOfficial AS is_official
FROM city AS ci
INNER JOIN country AS co
    ON ci.CountryCode = co.Code
INNER JOIN countrylanguage AS cl
    ON co.Code = cl.CountryCode;

SELECT *
FROM v_city_language
WHERE country_name = 'South Korea';

-- 국가 코드를 뷰에 포함하고 싶다면 다음처럼 작성할 수도 있습니다.
-- SELECT *
-- FROM v_city_language
-- WHERE country_name = 'South Korea';


-- ---------------------------------------------------------
-- 정답 4. Code2 열에 UNIQUE 인덱스 생성
-- ---------------------------------------------------------
DROP TABLE IF EXISTS country_index_practice;

CREATE TABLE country_index_practice AS
SELECT Code, Name, Code2
FROM country;

ALTER TABLE country_index_practice
ADD PRIMARY KEY (Code);

CREATE UNIQUE INDEX uq_country_code2
ON country_index_practice (Code2);

SHOW INDEX
FROM country_index_practice;


-- ---------------------------------------------------------
-- 정답 5. CountryCode와 Language의 복합 UNIQUE 인덱스
-- ---------------------------------------------------------
DROP TABLE IF EXISTS countrylanguage_index_practice;

CREATE TABLE countrylanguage_index_practice AS
SELECT
    CountryCode,
    Language,
    IsOfficial,
    Percentage
FROM countrylanguage;

CREATE UNIQUE INDEX uq_country_language
ON countrylanguage_index_practice (CountryCode, Language);

SHOW INDEX
FROM countrylanguage_index_practice;

-- 같은 국가와 언어의 조합을 다시 입력하면 중복 오류가 발생합니다.
-- 다른 열의 값이 달라도 UNIQUE 인덱스 대상 열의 조합이 같으면
-- 입력할 수 없습니다.

-- INSERT INTO countrylanguage_index_practice
--     (CountryCode, Language, IsOfficial, Percentage)
-- VALUES
--     ('KOR', 'Korean', 'F', 50.0);
