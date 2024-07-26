a way to use RestAPI

## 1. dependencies
#### pubspec.yaml
```dart
depedencies:
	retrofit: ^4.0.1

dev_dependencies:
	retrofit_generator: ^7.0.8
	build_runner: ^2.4.6
	json_serializable: ^6.7.1
```
## 2. Services
#### api_service.dart
```dart
import 'package:belajar_flutter/models/post_model.dart';
import 'package:retrofit/http.dart';
import 'package:dio/dio.dart';
part 'api_service.g.dart'; //to generate new file

@RestApi(baseUrl: 'https://jsonplaceholder.typicode.com/')
abstract class ApiService{
  factory ApiService(Dio dio) = _ApiService;

  @GET('posts')
  Future<List<PostModel>> getPosts();
}
```
## 3. Models
#### post_model.dart
```dart
import 'package:json_annotation/json_annotation.dart';
part 'post_model.g.dart'; //to generate new file

@JsonSerializable()
class PostModel {
  int userId;
  int id;
  String title;
  String body;

  PostModel(
      {required this.userId,
      required this.id,
      required this.title,
      required this.body});

  factory PostModel.fromJson(Map<String, dynamic> json) => _$PostModelFromJson(json);
  Map<String,dynamic> toJson()=> _$PostModelToJson(this);
}
```
## 4.Terminal(to generate code)
untuk membuat implementasi dari method" yang telah dibuat
```
dart run build_runner build
```
## 5. Generated Code
#### api_service.g.dart
```dart
// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'api_service.dart';

// **************************************************************************
// RetrofitGenerator
// **************************************************************************

// ignore_for_file: unnecessary_brace_in_string_interps,no_leading_underscores_for_local_identifiers

class _ApiService implements ApiService {
  _ApiService(
    this._dio, {
    this.baseUrl,
  }) {
    baseUrl ??= 'https://jsonplaceholder.typicode.com/';
  }

  final Dio _dio;
  
  String? baseUrl;

  @override
  Future<List<PostModel>> getPosts() async {
    const _extra = <String, dynamic>{};
    final queryParameters = <String, dynamic>{};
    final _headers = <String, dynamic>{};
    final Map<String, dynamic>? _data = null;
    final _result =

        await _dio.fetch<List<dynamic>>(_setStreamType<List<PostModel>>(Options(
      method: 'GET',
      headers: _headers,
      extra: _extra,
    )
            .compose(
              _dio.options,
              'posts',
              queryParameters: queryParameters,
              data: _data,
            )
            .copyWith(
                baseUrl: _combineBaseUrls(
              _dio.options.baseUrl,
              baseUrl,
            ))));
    var value = _result.data!
        .map((dynamic i) => PostModel.fromJson(i as Map<String, dynamic>))
        .toList();
    return value;
  }
  

  RequestOptions _setStreamType<T>(RequestOptions requestOptions) {
    if (T != dynamic &&
        !(requestOptions.responseType == ResponseType.bytes ||
            requestOptions.responseType == ResponseType.stream)) {
      if (T == String) {
        requestOptions.responseType = ResponseType.plain;
      } else {
        requestOptions.responseType = ResponseType.json;
      }
    }
    return requestOptions;
  }
  
  String _combineBaseUrls(
    String dioBaseUrl,
    String? baseUrl,
  ) {
    if (baseUrl == null || baseUrl.trim().isEmpty) {
      return dioBaseUrl;
    }
  
    final url = Uri.parse(baseUrl);
  
    if (url.isAbsolute) {
      return url.toString();
    }
  
    return Uri.parse(dioBaseUrl).resolveUri(url).toString();
  }
}
```
#### post_model.g.dart
```dart
// GENERATED CODE - DO NOT MODIFY BY HAND
  
part of 'post_model.dart';
  
// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************
  
PostModel _$PostModelFromJson(Map<String, dynamic> json) => PostModel(
      userId: json['userId'] as int,
      id: json['id'] as int,
      title: json['title'] as String,
      body: json['body'] as String,
    );
  
Map<String, dynamic> _$PostModelToJson(PostModel instance) => <String, dynamic>{
      'userId': instance.userId,
      'id': instance.id,
      'title': instance.title,
      'body': instance.body,
    };
```
## 6. Widget
```dart
 FutureBuilder _body() {
    final apiService =
        ApiService(Dio(BaseOptions(contentType: 'apllication/json')));
    return FutureBuilder(
        future: apiService.getPosts(),
        builder: (context, snapshoot) {
          if (snapshoot.connectionState == ConnectionState.done) {
            final List<PostModel> posts = snapshoot.data!;
            return _posts(posts);
          } else {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
        });
  }
```