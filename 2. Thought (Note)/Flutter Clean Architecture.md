## Folder Structure
---
> - config
> 	- routes / routes.dart
> 	- theme / app theme.dart
> - core
> 	- constants / constans.dart
> 	- resources / data_state.dart
> 	- usecases / usecases.dart
> 	- util
> - feature
> 	- data
> 		- datasources
> 		- model
> 		- repositories
> 	- domain
> 		- entities
> 		- repositories
> 		- usecase
> 	- presentation
> 		- bloc
> 		- pages
> 		- widgets
> - injection_container.dart
> - main.dart

## Dependencies
---
```dart
cached_network_image: ^3.2.3
dio: ^5.3.2
equatable: ^2.0.5
floor: ^1.4.2
flutter_bloc: ^8.1.3
get_it: ^7.6.0
intl: ^0.18.1
retrofit: ^4.0.1
sqflite: ^2.3.0
```
## Dev Dependencies
---
```dart
build_runner: ^2.4.6
floor_generator: ^1.4.2
json_serializable: ^6.7.1
retrofit_generator: ^7.0.8
```
## domain/entity/"entity".dart
---
data yang diperlukan sebuah feature
```dart
class [name]Entity extends Equatable{
	final var? varName1;
	final var? varName2;
	const [name]Entity({this.varName1, this.varName2});

	@overide
	List<object?> get props{return [varName1,varName2];}
}
```

## core/resources/Data_state.dart
---
kemungkinan apa saja yang mungkin terjadi pada data
```dart
abstract class DataState<T>{
	final T? data;
	final Exceprion? error;
	const DataState({this.data, this.error})
}

class DataSuccess<T> extends DataState<T> {
  const DataSuccess(T data) : super(data: data);
}
  
class DataFailed<T> extends DataState<T> {
  const DataFailed(Exception error) : super(error: error);
}
```
## domain/repo/"entity"\_repo.dart
---
berisi abstract bagi repo impl pada data layer
```dart
abstract class [entity]Repo{
	Future<DataState<List<[name]Entity>>> getFromApi();
	//other method
}
```
## data/models/"entity".dart
---
```dart
class [entity]Model extends [name]Entity {
	const [entity]Model({
		var ? varName1, var? varNmae2
	}) : super(varNmae1: varName1, varName2: varName2);

	factory [entity]Model.fromJson(Map<String, dynamic> map){
		return [entity]Model(varName1: map{'key', varName2: map['key']});
	}

	factory [entity]Model.fromEntity([name]Entity entity){
		return [entity]Model(varName1: entity.varName1, varName2: entity.varName2);
	}
}
```
## data/datasource/api_service.dart
---
api service like using retrofit [[Flutter Retrofit]]
```dart
@RestApi(baseUrl: newsAPIBaseURL)
abstract class NewsApiService {
  factory NewsApiService(Dio dio) = _NewsApiService;
  
  @GET('top-headlines')
  Future<HttpResponse<List<ArticleModel>>> get[entity]({
    @Query("country") String ? country,
    @Query("category") String ? category,
    @Query("apiKey") String ? apiKey,
  });
}
```
## data/repo/"entity"repo_impl.dart
---
```dart
class [entity]RepoImpl implements [entity]Repo{
	final ApiService _apiService;
	[entity]RepoImpl(this._apiService);
	
	@override
	Future<DataState<List<[name]Entity>>> getFromApi() async {
		final httpResponse = await _apiServie.get[entity]( params );
		try{
			if(httpResponse.response.statusCode == HttpStatus.ok){
				return DataSuccess(httpResponse.data);
			}else{
				return DataFailed(Exeption(params));
			}
		} on Exception catch (e){
			return DataFailed(e);
		}
		
	}
}
```