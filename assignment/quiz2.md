

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

