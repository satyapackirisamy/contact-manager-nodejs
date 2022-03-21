GET
=============
Endpoint Url: 
https://contact-satya.herokuapp.com/api/contact

Status Code: 200

Example Response:

[
    {
        "_id": "6237519b09e6f461c2deeca4",
        "firstName": "FirstName",
        "lastName": "lastName",
        "email": "emailid@gmail.com",
        "phone": "+919123456789",
        "__v": 0
    },
    {
        "_id": "6237519b09e6f461casdasdas",
        "firstName": "FirstName",
        "lastName": "lastName",
        "email": "emailid2@gmail.com",
        "phone": "+919123456789",
        "__v": 0
    }
]


______________________________________

POST
================

Endpoint: 
https://contact-satya.herokuapp.com/api/contact

Post Req

{
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": ""
}

firstName- string -required
lastName - string - required
email - string - required
phone - string - required


Response example: 

{
        "firstName": "FirstName",
        "lastName": "lastName",
        "email": "emailid2@gmail.com",
        "phone": "+919123456789",
        "_id": "6237519b09e6f461casdasdas",
        "__v": 0
}

___________________________________________

Update /PUT
=================

Endpoint: https://contact-satya.herokuapp.com/api/contact/{id}

Post Req:

{
	"firstName": "Something"
}

Response Example (I just return the user data):

{
    "_id": "{given id in the header}",
    "firstName": "Something",
    "lastName": "lastName",
    "email": "emailid2@gmail.com",
    "phone": "+919123456789",
    "__v": 0
}

________________________________________

DELETE
===================

Endpoint: https://contact-satya.herokuapp.com/api/contact/{id}

Response Example (I just return the user data): 

{
    "_id": "{given id in the header}",
    "firstName": "Something",
    "lastName": "lastName",
    "email": "emailid2@gmail.com",
    "phone": "+919123456789",
    "__v": 0
}
