---
status: Proses 🟦
source: 
tags:
---


>[!info]-
> Created at : 12:00 25-07-24
> Modified at  : `$= dv.current().file.mtime`


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
> - [[#Description]]
> - [[#Basic]]
> - [[#Return Type]]
> - [[#Parameter]]
> - [[#Anonymous]]
> - [[#Arrow]]


## Description
---

## Basic
---
```dart
returntype functionName(parameter1, parameter2, parameterN){
	statement;
}
```

## Return Type
---
```dart
void honk(){
	print("tut... tut.....");
};
void setHeight(int height){
	this.height = height;
}
int getHeight(){
	return height;
}
int pow(int number){
	return number*number;
}
```

## Parameter
---
```dart
// Positional 
void fName(String params1, String paramsN){}
// Default value on Poritional
void fName(String params1, [String paramsN = "String"]){}
// Named
void fName({int? a, required int b}){
	print("$a, $b");
}
fName(b : 3); // null, 3
// Opitonal
void fName([String? params1]){}
```

## Anonymous
---
```dart
(paramsList){
	statement;
}

var power = (int number){
	return number*number;
}
print(power(2));
```

## Arrow
---
```dart
returnType fName(params..) => statement;

int power(int number) => number * number;
print(power(2));
```
