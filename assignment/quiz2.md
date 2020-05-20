

### 자료구조와 알고리즘

---

#### 1-1. 선형검색문제

선형 검색을 통해 주어진 배열에 주어진 값이 요소로 존재하는지 확인 후 해당 인덱스를 반환하라.

존재하지 않는 경우에는 -1을 반환. for문 사용 

``` javascript
function linearSearch(array, target) {
  let index = -1;
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === target) index = i;
  }
  return index;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1
```

</br>

#### 1-2.이진 검색

이진 검색을 통해 주어진 배열에 주어진 값이 존재하면 해당 인덱스 반환.

존재하지 않을 경우 -1 반환. while문 사용. 

``` javascript
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let result = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      result = mid;
      break;
    } else if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    }
  }
  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
```

</br>

#### 2-1. 버블정렬

---

버블 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라. 

단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

``` javascript
function bubbleSort(array) {
  const length = array.length - 1;
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const change = array[j];
        array[j] = array[j + 1];
        array[j + 1] = change;
      }
    }
  }
  return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
```

</br>

#### 2-2. 선택정렬 

---

선택 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라.

단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

``` javascript
function selectionSort(array) {
  const arrLength = array.length;
  for (let i = 0; i < arrLength; i++) {
    let min = i;
    for (let j = i + 1; j < arrLength + 1; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const change = array[i];
    array[i] = array[min];
    array[min] = change;
  }
  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6])); // [1, 2, 3, 4, 5, 6]
```

</br>

#### 2-3. 삽입정렬

---

삽입 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라. 

단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

``` javascript

```

