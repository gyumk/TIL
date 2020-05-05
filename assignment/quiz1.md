### 제어문 연습문제

---

#### 문제1

변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라

```javascript
var x = 15;

if (x > 10 && x < 20) {
  console.log(x);
}
```

</br>

#### 문제2

for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) console.log(i);
}
```

</br>

#### 문제3

for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

```javascript
var str = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) str += i;
}
console.log(str);
```

</br>

#### 문제4

for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```javascript
for (let i = 10; i >= 0; i--) {
  if (i % 2 !== 0) console.log(i);
}
```

</br>

#### 문제5

while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```javascript
let i = 0;
while (i < 10) {
  if (i % 2 === 0) console.log(i);
  i++;
}
```

</br>

#### 문제6

while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```javascript
let i = 10;
while (i >= 0) {
  if (i % 2 !== 0) console.log(i);
  i--;
}
```

</br>

#### 문제7

for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오

```javascript
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);
```

</br>

#### 문제8

1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

```javascript
let sum = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) sum += i;
}
console.log(sum);
```

</br>

#### 문제9

1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

```javascript
let sum = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) sum += i;
}
console.log(sum);
```

</br>

#### 문제10

두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

```javascript
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[ ${i} , ${j} ]`);
  }
}
```

</br>

#### 문제11

삼각형 출력하기 - pattern 1

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```
// 높이(line)가 5
*
**
***
****
*****
```

```javascript
const star = '*';
let result = '';
for (let i = 0; i < 5; i++) {
  result += star;
  console.log(result + '\n');
}
```

</br>

#### 문제12

삼각형 출력하기 - pattern 2

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```
*****
 ****
  ***
   **
    *
```

```javascript
const star = '*';
let result = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    result += ' ';
  }
  for (let j = 5; j > i; j--) {
    result += star;
  }
  result += '\n';
}
console.log(result);
```

</br>

#### 문제13

삼각형 출력하기 - pattern 3

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```
*****
****
***
**
*
```

```javascript
const star = '*';
let result = '';

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    result += star;
  }
  result += '\n';
}
console.log(result);
```

</br>

#### 문제14

삼각형 출력하기 - pattern 4

다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```
    *
   **
  ***
 ****
*****
```

``` javascript
const star = '*';
let result = '';

for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    result += ' ';
  }
  for (let j = 0; j <= i; j++) {
    result += star;
  }
  result += '\n';
}
console.log(result);
```

</br>

#### 문제15

정삼각형 출력하기

```
    *
   ***
  *****
 *******
*********
```

``` javascript
const star = '*';
let result = '';

for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    result += ' ';
  }
  for (let j = 0; j <= i*2; j++) {
    result += star;
  }
  result += '\n';
}
console.log(result);
```

</br>

#### 문제16

역정삼각형 출력하기

```
*********
 *******
  *****
   ***
    *
```

``` javascript
const star = '*';
let result = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    result += ' ';
  }
  for (let j = 8; j >= i*2; j--) {
    result += star;
  }
  result += '\n';
}
console.log(result);
```


