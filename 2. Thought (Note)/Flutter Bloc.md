## Why bloc
---
- to know every state that application run
- organize every single code
- easy maintenance for future

## Stream
---
```dart
Stream<int> boatStream() async* { // geterate async fuction
  for(int i =1;i<3;i++){
    print('Sent boat no. $i');
    await Future.delayed(Duration(seconds:1)); // wait function
    yield i; // tu send tada throug stream
    await Future.delayed(Duration(seconds:1)); 
  }
  await Future.delayed(Duration(seconds:1));
  yield 100;
}

void main() async{
  var stream = boatStream();
  print(stream.runtimeType);
  
  stream.listen((dataRecive){
    print('Recived boat no $dataRecive');
  }); 
}
```
## Requirements
---
#### Extension : bloc
#### pubspec.yaml
```dart
dependencies:
bloc:
flutter_bloc:
```

## Folder Structure
---
> - featureA
> 	- bloc
> 		- featureA_bloc.dart
> 		- featureA_event.dart
> 		- featureA_state.dart
> 	- ui.dart

## Example (feature wishlist)
---
#### wishlist_event.dart
kumpulan acara atau perintah dari UI ke bloc
```dart
part of 'wishlist_bloc.dart';
  
@immutable
sealed class WishlistEvent {}

//naming conversation
// <BlocName><EventName>Event
//initial event for start an page
class WishlistInitEvent extends WishlistEvent{}

//other events
class WishlistSomeEvent extends WistlistEvent{
	// to send variable to the bloc
	final var varName;
	WishlistSomeEvent({required this.varName});
}
```
#### wishlist_state.dart
```dart
part of 'wishlist_bloc.dart';
  
@immutable
// for rebuild something
sealed class WishlistState {}
// for change some variable
sealed class WishlistActionState extends WishlistState{}

//naming conversation
// <BlockName><StateName>State/ActionState
// initial state for start a page
final class WishlistInitial extends WishlistState {}

//other state that can rebuild 
class WishlistSomeState extends WishlistState{
	// to send varialbe from bloc to UI
	final var varName;
	WishlistSomeState({required this.varName})
}
// other state for change some variables
class WishlistSomeActionState extends WishlistActionState {}

```
#### wishlist_bloc.dart
```dart
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';
  
part 'wishlist_event.dart';
part 'wishlist_state.dart';
  
class WishlistBloc extends Bloc<WishlistEvent, WishlistState> {
	WishlistBlock() : super(WishlistInitial()){
		  on<ClassOfEvent>(methodOfEvent);
		// and so on
	}

	FutureOr<void> methodOfEvent(ClassOfEvent event, Emitter<WishlistState> emit){
		// The state that an event calls
		emit(WishlistSomeState());
		// use the variable that events send
		someMethod(event.varName);
	}
}
```
## Widget
---
#### BlocConsumer
```dart
final NameBloc nameBloc = NameBloc();
BlocConsumer<NameBloc, NameState>(
	bloc: nameBloc,
	listenWhen: (prev, current) => current is NameActionState,
	buildWhen: (prev, current) => current is !NameActionState,
	listener: (context, state){
		swicth(state.runtimeType){
			case NameState:
			//call action state
			break;
		}
	},
	builder:(context, state){
		swicth(state.runtimeType){
			case NameState:
			// to user state variable 
			var varName = state as NameState;
			return Wiedget();
			// cause non-nullable
			default: Widget();
		}
	}
);
```