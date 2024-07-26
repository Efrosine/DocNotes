---
status: Done 🟩
source: 
tags:
---


>[!info]-
>Created at : 17:32 24-07-24
>Modified at : `$= dv.current().file.mtime`


```meta-bind-button
label: Add Heading
icon: plus
hidden: false
class: ""
tooltip: Generate New Heading and Update Outline
id: addHead
style: default
actions:
  - type: command
    command: quickadd:choice:4d877b8f-56f0-4db0-9af8-1a7bc1971397
```


>[!toc]+ Table of Content
>
>
> - [[#Condition]]
> - [[#Loops]]


## Description
---

## Condition
---
### If
```dart
if(condtion){
	statement 1;
}
```
### If-Else
```dart
if(condition){
	statement 1;
}else{
	statement 2;
}
```
### If-Else-If
```dart
if(condition 1){
	statement 1;
}else if(condition 2){
	statement 2;
}else{
	statement 3;
}
```

## Assert
---
jika kondisi benar akan dilewati, jika kondisi salah maka akan keluar pesan error (ini hanya terjadi pada production state)
```dart
assert(condition, StringMessage);
```

## Switch
---
pengganti complex if-else-if condition
```dart
switch(expr){
	case value1 :
		statement;
		break;
	case value2 :
		statement;
		braak
	default :
}
```
## Loops
---
### For
```dart
for(initialization; condition; increment){
	statement;
}
for( int i = 0; i < 10; i++){
	print("A");
}
```
### For Each
```dart
collection.forEach(void f(value));

List<int> numbers = [1,2,3,4,5];
number.forEach((numbers)=>print(numbers));
for( int number in numbers){
	print(number);
}
numbers.asMap().forEach((index, value) => print("$value index is $index"));
```
### While
```dart
while(condition){
	statement;
}
int i = 0;
while(i<10){
	print(i);
	i++;
}
```

## Break and Continue
---
```dart
for(int i = 0; i<10; i++){
	if(i == 2) continue;
	if(i == 8) break;
	print(i);
}
```

## Exception
---
```dart
try{
	statement;
}on Exception{
	statement;
	// if u know whay type exception will produced
}catch (params){
	statement;
} finally {
	statement
	//this block is always executed
}

throw exceptionName();

class uException implements Exception{
	statement;
}
```