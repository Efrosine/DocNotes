---
status: Proses 🟦
source: 
tags:
---


>[!info]-
> Created at : 12:08 25-07-24
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
> - [[#Class]]
> - [[#Object]]
> - [[#Constructor]]
> - [[#Constan Contructor]]
> - [[#Constant Constructor]]
> - [[#Encapsulation]]
> - [[#Inheritance]]
> - [[#Polymorphism]]
> - [[#Enum]]
> - [[#Abstract]]
> - [[#Interface]]
> - [[#Mixin]]


## Description
---

## Class
---
class is a blueprint for creating object
```dart
class ClassName{
// properties
// method
}

Class Person{
	String? name;
	int? age;
	
	void info(){
		print("hay $name");
		print("u are $age yeah ?");
	}
}
```

## Object
---
```dart
ClassName objectName = ClassName(); // also known as constructor

Person brother = Person();
brother.name = 'Jerry';
brother.age = 21;
brother.info();
```
## Constructor
---
sebagai inisialisasi awal sebuah object.
setiap membuat class pasti ada default constructor 
```dart
class ClassName{
	ClassName(){
	}
	// OR
	ClassName();
}
```

### Named Constructor
---
didalam dart tidak bisa langsung membuat banyak constructor.
dengan bantuan namedCons class memungkinkan memiliki 2 atau lebih constructor
```dart
class ClassName{
	ClassName(); //default constructor
	ClassName.namedCostructor();
}
```

## Constant Constructor
---
### Rules
- all properties mush be final
- doesn't have any body
- only class containing const constructor is initialized using the const keyword
### Basic
```dart
class ClassName{
	final var1;
	final var2;
	const ClassName(this.var1, this.var2);
}
var classObject = const ClassName(var1, var2);
```
### Benefit
- improve performance

## Encapsulation
---
Dart doesn't support public, private and protected. Dart use \_(underscore) to make variable private happens in ==`` library(file) level not the class(ex. java) ==

```dart
class ClassName{
	String? _name;
	int? _age;
  
	String getName(){
	    return _name!;
	}
	void setNmae(String name){
	    _name = name;
	}

	// best practice
	int get age => _age!;
	set age(int age) {
		_age = age;
	}
}
```

## Inheritance
---
### Basic
```dart
class SuperClass{
	//body
}
class SubClass extends SuperClass{
	//body
}
```
### with Parameter
pada constructor subclass parameter berisi parameter dari superclass dan tambahan dari subclass itu sendiri (urutan di perhatikan). di lanjut dengan memanggil super constructor dengan tanda hubung ':', urutan code yang di jalankan pada constructor ialah superclass dahulu baru subclass nya
```dart
class SuperClass{
	var params1;
	var params2;
	SuperClass(this.params1, this.params2);
}
class SubClass{
	var params3;
	SubClass(params1, params2, this.params3) : super(params1, params2);
}
```
### Super
keyword untuk mengakses parameter atau method dari superclass nya
```dart
class SuperClass{
	var params1 = 1;
}
class SubClass{
	params1 = 2;
	print(super.params1);
}
```

## Polymorphism
---
kemampuan untuk menjadi berbagai bentuk
```dart
class Animal{
	void bark(){
		print("woo woo woo");
	}
}
class Dog{
	@override // best practice
	void bark(){
		print("guk guk guk");
	}
}
```
### Static
---
untuk menyimpan data pada class level bukan pada object level
```dart
class SomeClass{
	static dataType varName;
	static returnType mothodName():
}
void main(){
	print(SomeClass.varName);
	SomeClass.methodName();
}
```

## Enum
---
special type that represents a fixed number of constant values
enum di deklarasi pada luar class
### Basic
```dart
enum enumName {
	constName1,
	constName2,
	constNameN
}
void main(){
	for(enumName eName in enumName.value){
		print(eName);
	}
}
```
### Enhanced Enum
```dart
enum enumName{
	constName1(member, memberN),
	constName2(member, memberN),
	constNameN(member, memberN);

	final var member;
	final var memberN;
	const enumName(this.member, this.memberN);
}
```

## Abstract
---
berguna dalam membuat aturan dalam membuat class baru 
```dart
abstract class ClassName{
	var varName;
	method1();// abstract method
	mehotdN();

	nonAbstractMethod(){
		statement;
	} // because have an implemnetation

	ClassName(this.varName);
}
class SubClass extends ClassName{
	SubClass(var varName) : super(varname);
	@override
	method1(){
		statement;
	}
	@override
	mehtod2(){
		statement;
	}
}

```

## Interface
---
saat pembuatan interface bisa digunakan 'class' atau 'abstract class' tetapi untuk interface lebih sering 'abstract class'
```dart
abstract class InterfaceName{
	bark();
	run();
}
class CLassName implements InterfaceName{
	@override
	bark(){
		print("wo wo wo");
	}
	@override
	run(){
		print('fak run');
	}
}
```

## Mixin
---
sebuah cara untuk menggunakan kembali code pada beberapa kelas
### Basic (with Keyword)
```dart
mixin Mixin1{
	statement;
}
mixin Mixin2{
	statement;
}
class ClassName with Mixin1,Mixin2{}
```
### on Keyword
untuk menggunakan mixin hanya pada kelas tertentu
```dart
abstract class AbsClass{

}
mixin MixinClass on AbsClass{

}
class SubClass extends AbsClass with MixinClass{

}
```