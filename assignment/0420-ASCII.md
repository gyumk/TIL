### ASCII

###### American Standard Code for Information Interchange

---

미국표준협회(ANSI)에서 지정한 \'문자를 숫자로 표현하기 위한 인코딩 방식\' (표준화한 부호체계)

0과 1을 인식하는 컴퓨터와 통신하기 위해 7비트(0~127 = 128개)의 고유한 값을 활용하여 문자를 표현한다.

> 컴퓨터의 기본 저장 단위는 1Byte = 8bit (256개)

'영어'만을 고려해서 만들어졌기때문에 다른 언어 지원에 한계가 있다.



[위키피디아-ASCII](https://ko.wikipedia.org/wiki/ASCII)

</br>

#### + 아스키코드가 7비트를 활용하는 이유 

---

전송하는 7-bit의 데이터에 따라 추가적으로 1비트를 **Parity Bit** 로 활용한다.

`Parity Bit` 란?

 - 통신에러 검출을 위해 사용하는 일종의 오류 식별자 

 - 전송하고자 하는 데이터에 1비트를 더하여 전송하는 방법

   ​	\> Data 중 1의 개수가 짝수(Even Parity)이면 0이 붙고, 홀수(Odd Parity)이면 1이 붙는다.

- 패리티 비트를 계산함으로써 오류발생 여부는 알 수 있지만, 수정은 불가능하다.

  

[참고블로그](https://m.blog.naver.com/PostView.nhn?blogId=ansdbtls4067&logNo=220886661657&proxyReferer=https:%2F%2Fwww.google.com%2F)

</br></br>

### ANSI

###### American National Standard Institute

---

ASCII의 확장판. 

영어 외의 다른 언어도 표현하기 위해 각 언어별 Code 값을 부여한 CodePage 개념등장. 

기존 ASCII 코드(7bit) + CodePage(1bit) 로 구성되어있다.

</br>

`CodePage` 란?

- 특정한 문자 인코딩을 위해 쓰이는 character code의 목록 

</br></br>

### EUC-KR 와 CP949

###### Extended Unix Code-Korea & CodePage 949

---

**EUC-KR** : 한글지원을 위해 ANSI를 한국에서 확장한 완성형 코드조합.

**CP949** : 한글지원을 위해 윈도우즈 계열에서 나온 확장 완성형 코드조합. EUC-KR을 확장한 것.

</br></br>

### UTF-8

###### 8-bit Unicode Transformation Format

---

유니코드를 가변 인코딩하는 방식. (유니코드 !== UTF-8)

멀티바이트(MBCS)형식으로 아스키 코드는 1byte + 다른언어는 2byte 혹은 그 이상으로 표현하는 것.

> 아스키코드는 싱글바이트(SBCS) - 1byte로 표현하는 방식 

</br></br>

### UNICODE

---

각 나라별 언어를 모두 표현하기 위해 나온 코드 체계

인코딩 방식을 말하는 것이 아니며, 한 문자에 2byte씩을 할당하여 만든 문자 집합이다.

유니코드를 인코딩하는 대표방식으로 UTF-8, 이외에  UTF-16, UTF-32, UCS-4.. 등이 있다. 



>  WBCS : Wide Byte Character Set
>
> > 확장형 문자 집합
> >
> > 유니코드가 WBCS의 문자집합에 해당된다. 