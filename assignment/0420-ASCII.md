### 아스키코드(ASCII)

###### American Standard Code for Information Interchange

---

미국표준협회(ANSI)에서 지정한 \'문자를 숫자로 표현하기 위한 인코딩 방식\' (표준화한 부호체계)

0과 1을 인식하는 컴퓨터와 통신하기 위해 7비트(0~127 = 128개)의 고유한 값을 활용하여 문자를 표현한다.

> 컴퓨터의 기본 저장 단위는 1Byte = 8bit (256개)



[위키피디아-ASCII](https://ko.wikipedia.org/wiki/ASCII)



#### 아스키코드가 7비트를 활용하는 이유 

---

전송하는 7-bit의 데이터에 따라 추가적으로 1비트를 **Parity Bit** 로 활용한다.

`Parity Bit` 란?

 - 통신에러 검출을 위해 사용하는 일종의 오류 식별자 

 - 전송하고자 하는 데이터에 1비트를 더하여 전송하는 방법

   ​	\> Data 중 1의 개수가 짝수(Even Parity)이면 0이 붙고, 홀수(Odd Parity)이면 1이 붙는다.

- 패리티 비트를 계산함으로써 오류발생 여부는 알 수 있지만, 수정은 불가능하다.

  

[참고블로그](https://m.blog.naver.com/PostView.nhn?blogId=ansdbtls4067&logNo=220886661657&proxyReferer=https:%2F%2Fwww.google.com%2F)

