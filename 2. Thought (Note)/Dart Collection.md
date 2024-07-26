---
status: Done 🟩
source: 
tags:
---


>[!info]-
>Created at : 15:28 24-07-24
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


>[!toc] + Table of Content 
>
>
> - [[#List]]
> - [[#Set]]
> - [[#Map]]

## Description
---

## List
---
### Basic
```dart
// Fixed length
var list = List<int>.filled(5,0);
// Growable length
var list = [11,22,33,44,55,66,77];
print(list[1]);
print(list.indexOf(22));
print(list.length);
list[2] = 21;
```
| Properties     | Return                                    |
| -------------- |:----------------------------------------- |
| first          | First element                             |
| last           | Last element                              |
| isEmpty        | true if empty                             |
| isNotEmpty     | true if not empty                         |
| length         | length of list                            |
| reversed       | list in reverse order                     |
| single         | check if list has only one element        |
| **Method**     | -------                                   |
| add()          | add element and return the modified list  |
| addAll()       | insert multiple value using \[]           |
| insert()       | add element to specific index             |
| insertAll()    | insert multiple element to specific index |
| -------        | --------                                  |
| remove()       | remove one element at a time              |
| remoteAt()     | remove one element at specific index      |
| removeLast()   | remove last element                       |
| remove Range() | remove items within specific range        |
### Combine
```dart
List<int> lis1 = [1,3,5,7,9];
List<int> lis2 = [2.4.6,8,0];
list<int> all = [..lis1, ..lis2];
```
### Condition
```dart
bool mood = false;
var water = ["milk", "coffe", if(mood) "khamer"];
// if false water doesn't contain khamer
```
## Set
---
### Basic
Memiliki properti dan beberapa method yang sama seperti list
| Method         | Desc                                              |
| -------------- | ------------------------------------------------- |
| clear()        | remove all elements                               |
| difference()   | create new set with element that are not in other |
| intersection() | create new set with common element in 2 sets      |
```dart
Set<String> fruit1 = {"Apple", "Orange", "Manggo"};
Set<String> fruit2 = {"Apple", "Grapes", "Banana"};

var dif = fruit1.difference(fruit2); // Orange, Manggo
var section = fruit1.intersection(fruit2); // Aplle
```
## Map
---
| Properties | Work             |
| ---------- | ---------------- |
| keys       | to get all keys  |
| values     | to get all value |
| **Method** |                  |
| containsKey() / containsValue()           |                  
```dart
Map<int,String> days {
	1 : 'Mon',
	2 : 'Thus',
	3 : 'Wed'
};

print(days.keys);
print(days.values);
days[4] = 'Thue';
days[1] = 'Monday';

for(MapEntry day in days.entries){
	print("keys ${day.key}, value {${day.value}}");
}
days.forEach((key,value)=> print("keys ${day.key}, value {${day.value}}"));
```
