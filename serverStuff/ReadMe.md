Express GraphQL Server Now Running On localhost:4000/graphql

server.js

In the query editor type in the following code:
query
{
    message
}

O/P:

{
  "data": {
    "message": "Hello World!"
  }
}

server2.js
------------------------------------Query------------------------------------
query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
        title
        author
        description
        topic
        url
    }
}

----- Query Varaibles -----

{ 
    "courseID":1
}

--------------------------------Query----------------------------------------

query getSingleCourse($courseID1: Int!, $courseID2: Int!) {
    course1: course(id: $courseID1) {
        title
        author
        description
        topic
        url
    }
  
  course2: course(id: $courseID2) {
        title
        author
        description
        topic
        url
    }
}

----- Query Varaibles -----

{ 
    "courseID1":1,
    "courseID2":2
}


--------------------------------Update Query----------------------------------------

mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
     ... courseFields
  }
}

fragment courseFields on Course {
        id
        title
        author
        description
        topic
        url
    }

----- Query Varaibles -----
{
  "id": 1,
  "topic": "JavaScript"
}


https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

https://www.digitalocean.com/community/tutorials/a-practical-graphql-getting-started-guide-with-nodejs

https://www.toptal.com/graphql/graphql-nodejs-api