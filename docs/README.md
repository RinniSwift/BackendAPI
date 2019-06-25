## Savai API
This API reference is created for use of a mobile application for beauty services around you.

### Resource Types
**Service subcategory**  

|  Naming          | Type |
|---             |:-------:|
|subcategories   |String|

**Specific services of subcategory**  

|  Naming          | Type |
|---             |:-------:|
|specific subcategory   |String|

**Service information**  

|  Naming          | Type |
|---             |:-------:|
|location        |String|
|hours        |String|
|discounted        |Bool|
|description        |String|
|service_name        |String|
|original_price        |String|
|discount_price        |String|
|address        |String|
|number        |Number|


### Endpoints

|  Verb   | Endpoint                 | Description|
|:---      |:-----------------------:| ----------:|
|GET      |/allServices              | gets all information from all 4 main services this API offers|
|GET      |/allServices/nails        | gets all information from the nail category|
|GET      |/allServices/hair         | gets all information from the hair category|
|GET      |/allServices/hairRemoval  | gets all information from the hair removal category|
|GET      |/allServices/nails        | gets all information from the nails category|
|GET      |/allServices/spa          | gets all information from the spa category|

### Engineers
- [Sarin Swift](https://github.com/SarinSwift)
- [Rinni Swift](https://github.com/RinniSwift)
