# Proposal: Custom API Project

This repo is to create a custom back-end API for users to ```CREATE```, ```READ```, ```UPDATE```, and ```DELETE``` objects.\
These objects will be\
&nbsp;&nbsp; - service subcategory\
&nbsp;&nbsp; - specific services of subcategory\
&nbsp;&nbsp; - service information


**Service subcategory**\
&nbsp;- subcategories: String

**specific services of subcategory**\
&nbsp;- specific subcategory: String

**Service information**\
&nbsp;- location: String\
&nbsp;- hours: String\
&nbsp;- discounted: Bool\
&nbsp;- description: String\
&nbsp;- service_name: String\
&nbsp;- original_price: String\
&nbsp;- discount_price: String\
&nbsp;- address: String\
&nbsp;- number: Number


#### Hierarchy of nested objetcs

| -> Service subcategory\
|\
| &nbsp;&nbsp;&nbsp;&nbsp;-> Specific services of subcategory\
|\
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Service information


### What is this for?
This API will be used in a mobile app where the API will provide information of all beauty services in San Francisco.