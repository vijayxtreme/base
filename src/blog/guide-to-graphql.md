---
title: Intro To Graphql
date: 2020-03-20
---

##Intro to GraphQL
*by Vijay*

Hey all, so I thought I'd do a post today on GraphQL, given I use it quite a lot now with my current work.

**<a href="https://graphql.org/" target="_blank">GraphQL</a>** is basically a Query Structure language, similar to SQL (Structured Query Language) made popular by <a href="https://www.youtube.com/watch?v=tWoGr_vaFbc" target="_blank">Oracle</a> in the 80s/90s.

```sql
SELECT id, first_name, last_name, age, email from USERS ORDER BY first_name ASC;
```
^SQL syntax

However, **GraphQL** is very different from SQL in that it follows NoSQL style syntax, a syntax made popular by the rise of document oriented databases made popular by companies like MongoDB.   GraphQL takes the syntax one step further getting rid of popular `JSON` &nbsp; style syntax and instead replacing it with something a little cleaner to read.  Here's some example syntax below:

```
{
    allPosts {
        node {
            title
            body
        }
    }
}

```
<br>

### What's The Purpose of GraphQL?

GraphQL was designed as a way to replace the popular REST (**RE**presentational **S**tate **T**ransfer) method of retreiving information over the web.   Though many people (including myself) grew up writing web applications using REST, it's safe to say that there have always been shortcomings when building a web facing API.

For example, with a typical **CRUD** (CREATE, READ, UPDATE, DELETE) application, one has to specify several endpoints to said application in order to retreive and manipulate data.

In your typical API, you'll have something like this:

| endpoint | method     | purpose                 |
|:--------:|:----------:|:-----------------------:|
| /users   | READ       | get all users           |
| /user/id | READ       | get a single user       |
| /user/id | UDPATE     | update a single user    |
| /user/id | DELETE     | delete a single user    |

The problem with this model is that you may not need all the information you get back with a user.  Suppose making a request to `/users`&nbsp; gets you back this response:

```js
/* 
   Some code above 
*/

console.log(response)

{
    "users": [
        {
            "name":"Joey",
            "handle":"joeyjavascript",
            "age": 32,
            "email": "joeyjs@email.com"
        },
        {
            "name":"Monica",
            "handle":"monicarocks",
            "age": 25,
            "email": "rockstar202@email.com"
        },
        {
            "name":"Chen",
            "handle":"chencoffee",
            "age": 27,
            "email": "coffeeisyummychen@email.com"
        },
        ...
        {
            "name":"Jemel",
            "handle":"mrjemel",
            "age": 28,
            "email": "kingj@email.com"
        },
    ]
}

//Do we really need all this info?  What if we just want the user names?  
//Hmm, I guess filter the data, get the name...
//What if I need the name now to go back to the API and search for posts 
//associated with name?  

```
<br>
As you can see above, getting back all this data might be okay if you wanted it all.  However, what if you just wanted names only?  You might have to create another endpoint for your API to just deliver names.  How about emails?  Would that be another endpoint too?  

Well you might say that's what the filter function's for, just get back all this data and then use your JavaScript skills to slice through the information, then get back what you need.

Cool, but what if I need a username so I can then make another request to an API endpoint `/posts`&nbsp; (perhaps) to get all the posts associated with said user?  What if it gives me back a whole bunch of info I don't need with the request?

As you can tell, making these kinds of requests can be cumbersome.  Not to mention when you factor in most people are on their cellphones using the web; the more we have to transfer data from an API back and forth to their phone (which might have slow speeds), the more our website's performance suffers.   Hence, that's why Facebook invented GraphQL.  

It's important to note that GraphQL is a specification, not an actual implementation yet, though you can download implementations for it via `NPM` &nbsp; or your favorite package manager.

### So How Does GraphQL Do It Better Than The REST?

GraphQL essentially works with your database, whether it is NoSQL or SQL by creating wrapper methods that you would write (or more likely download a community implementation for your DB), which allow you to abstract many of the SQL or NoSQL commands you might have used in the past, and instead just use GraphQL syntax to retrieve your data.   If you are interested in trying out GraphQL syntax, be sure to <a href="https://graphql.org/" target="_blank">head on over to the website</a>, or you can also use a framework like <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> that works out of the box with GraphQL.

I prefer using Gatsby because it's an all-inclusive framework that combines the best of React, your favorite CMS (Wordpress/Drupal/or even just plain Markdown), and allows you to query your data using GraphQL.   Gatsby is also really easy to learn, if you know React, you'll pick up Gatsby fairly quickly, and GraphQL should be really straightforward to learn thereafter.  Gatsby even comes packaged with a really cool <a href="https://www.gatsbyjs.org/docs/graphql-reference/" target="_blank">GraphQL IDE</a> (integrated development environment) which allows you to explore all the data you have and write simple queries that get you back only the data you are interested in.  Hence you can count on data retrieval and mutation to go much faster over the web, even if you are on lower bandwidth.
 
So if we were to go back to our previous example now using GraphQL syntax, our syntax might look more like this:

**Query:**
```js
{
    allUsers {
        user {
            username
            posts
        }
    }
}
```
<br>

**Response:**
```js
{
    "data": {
        "allUsers": [
            {
                "user": {
                    "username": "joeJavascript",
                    "posts": [...]
                }
            },
            {
                "user": {
                    "username": "monicarocks",
                    "posts": [...]
                }
            },
            {
                "user": {
                    "username": "chencoffee",
                    "posts": [...]
                }
            },
            {
                "user": {
                    "username": "mrjemel",
                    "posts": [...]
                }
            }
        ]
    }
}

//With this data, it gives us back only what we are interested in, and thus 
//we don't have to worry so much about going back and forth with the server
//We can just have one endpoint now that gives us everything we need quickly
```
<br>

###Conclusion / TL:DR

So ultimately, instead of writing out tons of queries using SQL or filtering tons of responses from NoSQL, we can use the power of GraphQL to help us write much cleaner looking, easy to use syntax that gives us exactly what we need each time we use it.

Hope this intro to GraphQL was useful to you, and next time we'll explore more of the syntax in the next tutorial!