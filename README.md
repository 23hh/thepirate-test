#### 더 파이러츠 과제 테스트

과제
  인어교주해적단은 B2C 커머스 몰을 운영하며 수산물 판매 서비스를 제공합니다.
  커머스 몰에서 판매하기 위한 신규 상품을 업데이트 해야 합니다. 업데이트할 신규 상품은
  “노르웨이산 연어”와 “완도 전복입니다”.
  상품은 상품 기본정보와 옵션정보로 구성되어 있습니다. 상품 옵션은 구매 고객이 실제
  구매할 수 있는 상품 단위 정보입니다. 상품정보는 다음과 같습니다.
  [상품명, 상품설명, 배송비, 배송방식(fast{당일}, regular{익일}), 마감시간, 옵션정보,
  상품가격, 재고]
  해적단 커머스 몰은 수산물을 취급하는 특성상 고객이 수령일을 선택 할 수 있습니다.
  고객이 선택 가능한 수령일은 자동으로 계산되며 조건은 다음과 같습니다.
  > 수령일 = 배송가능일 + 1일
  > 배송가능일 : 배송방식과 마감시간에 따름
  1. 고객이 주문하는 시점(수령일을 조회하는 시점)이 마감시간을 넘긴경우 +1 일
  2. 당일발송 (+0일) / 익일발송 (+1일)
  3. 배송일이 휴일인 경우 +1일 (휴일이 아닐때까지)
  4. 배송휴일은 토, 일, 공휴일
------------------
```
 https://sqlitebrowser.org/dl/
 sqlite 3.12.2
```

작동 방법
  ```
  1. git clone https://github.com/23hh/thepirate-test.git
  2. cd thepirate-test
  3. npm i
  4. node app.js
  ```

API 사용
  ```
  상품 추가 API post
  http://localhost:3000/api/product
  
  상품 목록 조회 API get
  http://localhost:3000/api/product
  
  상품 상세조회 API get
  http://localhost:3000/api/product/:id
  해당 상품의 id값 
  ex)http://localhost:3000/api/product/1
  
<!--   수령일 선택 목록 API get --> 고민중
<!--   http://localhost:3000/api/product/:id/delivery -->

  상품 삭제 API delete
  http://localhost:3000/api/product/:id
  
  해당 상품의 id값
  ex)http://localhost:3000/api/product/1
  ```
  
 
