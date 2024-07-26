---
status: Done 🟩
source: 
tags:
  - Dart
  - Fundamental
---


>[!info]-
>Created at  : 15:04 24-07-24
>Modified at  `$= dv.current().file.mtime`


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
> - [[#Variable]]
> - [[#Data Type]]
> - [[#Comment]]
> - [[#Operator]]

## Description
---
```dart
void main (){
	print("Hello world");
}
```

Semua dart program dimulai pada method main

## Variable
---
- String ->(text) "fajar" (harus didalam quote)
- int -> (integer) 123
- double -> (floating point) .2, 1.3
- num (number) -> 123,  1.3
- bool (decision) -> true or false
- var (any type) -> any value
-  const -> for contant value e.g pi = 3.14
**Syntax**
```dart
type varName = value;

## using $ for concate string
int age = 8;
print("ur age's $age")
```
## Data Type
---
| Data Type | Keyword         | Desc                                         |
| --------- | --------------- | -------------------------------------------- |
| Number    | int, double,num | numeric value                                |
| String    | String          | sequence of character                        |
| Booleans  | bool            | true or false                                |
| List      | List            | ordered group of items                       |
| Maps      | Map             | set of key-value pairs                       |
| Sets      | Set             | unordered list of unique value of same types |
| Runes     | runes           | unicode value of String                      |
| Null      | null            | null value                                             |

### Boolean
```dart
bool varName(String params) => params == params;
print(varName('a'));
```
### Quotes in String
```dart
String single = "Single quotes in 'double' quotes"
String doublee = 'Double quotes in "single" quotes'
```
### Multi-line String
dengan menggunakan tiga tanda petik (''') pada awal dan akhir string
```dart
String multi = '''
	ini adalah 
	multiline
	di dart''';
print(multi);
```

### Raw String
meletekan kan 'r' setelah '=' pada deklarasi
```dart
Stirng raw =r"ini adalah \traw";
print(raw);
```

### Converting
```dart
// String to Int
String a = "1";
int b = int.parse(a);
// String to Double
String c = .2;
double d = double.parse(c);
// Int to String
int e = 3;
String f = e.toString();
// Double to Int
double g = 2.3;
int h = g.toInt();

```
### List
list using square brackets
```dart
List<dataType> varName = [value1, value2, valueN];

List<String> names = ["raj","Max","per"];
print(names[0]);
int length = names.length;
```
### Sets
tipe data ini adalah sekumpulan nilai unik yang tidak berurutan, Sets juga akan mengabaikan jika memiliki nilai yang sama 
set using curly brace
```dart
Set<typeData> varName = {value1, value2, valueN};

Set<String> day = {"monday", "sunday"};
print(day);
```
### Maps
key tidak boleh sama sedangkan value bisa sama.
```dart
Map<keyType, valueType> varName = {
'keyName': 'value'
};

 Map<int,String> angka = {
    1:'satu',
    2:'dua'
  };
  print(angka[1]);
```
### Var
var adalah data type yang akan menyesuaikan value saat inisialisasi, tetapi tidak bisa berubah type saat program berjalan
```dart
var name = "John Doe"; // String
var age = 20; // int

print(name);
print(age);
```
### Runes
Mengembalikan sebuah unicode dari String value
```dart
String a = 'aA';
print(a.runes); //97,65
```

### Dynamic
tipe data yang bisa berubah ubah
```dart
dynamic myVariable = 50;
myVariable = "Hello";
print(myVariable);
```

## Comment
---
```dart
// This is single-line comment.
/*
This is a multi-line comment.
This is a multi-line comment.
*/
/// This is documentation comment
```

## Operator
---
### Arithmetic
| Symbol | Name             | Desc                             |
|:------:| ---------------- | -------------------------------- |
|   +    | Addition         | adding 2 operands                |
|   -    | Subtranction     | subtraction 2 operands           |
| -expr  | Unary Minus      | reversing expression             |
|   *    | Multiplication   | multiplying 2 operands           |
|   /    | Division         | dividing 2 operands(double)      |
|   ~/   | Integer Division | dividing 2 operands(integer)     |
|   %    | Modulus          | Remainder after Integer division |
 
```dart
 // declaring two numbers 
 int num1=10;
 int num2=3;
 
 // performing arithmetic calculation
 int sum=num1+num2;       // addition
 int diff=num1-num2;      // subtraction
 int unaryMinus = -num1;    // unary minus  
 int mul=num1*num2;       // multiplication
 double div=num1/num2;    // division
 int div2 =num1~/num2;     // integer division
 int mod=num1%num2;       // show remainder
```
### Increment and Decrement 
| Symbol | Name           |
|:------:| -------------- |
| ++var  | Pre Increment  |
| --var  | Pre Decrement  |
| var++  | Post Increment |
| var -- | Post Decrement |
### Assignment 
| Symbol | Desc                         |
| ------ | ---------------------------- |
| =      | Assign a value to a variable |
| +=     | Add a value to a variable    |
| -=     | Reduce a value to a variable |
| \*=    | Multiply value to a variable  |
| /=     | Divided value to a variable                             |
### Relational
| Symbol | Name             |
|:------:| ---------------- |
|   >    | Greater than     |
|   <    | Less than        |
|   >=   | Greater or Equal |
|   <=   | Less or Equal    |
|   ==   | Equal            |
|   !=   | Not Equal                 |
### Logical
| Symbol | Name |
| ------ | ---- |
| &&     | and  |
| \| \|  | or   |
| !      | not     |
### Type Test
| Symbol | Name |
| ------ | ---- |
| is     | is  |
| is !type  | is not   |