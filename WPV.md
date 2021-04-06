WordPress REST API from Postman

1. Open PostMan
2. Select 'GET'
3. http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts
4. Click on 'SEND'


5. Add new tab
6. Select 'POST'
7. http://localhost/projects/wordpress/wpv/wp-json/jwt-auth/v1/token
8. Click on 'header' tab
9. Add 'Content-Type' in  KEY and 'application/json' in VALUE


10. Click on 'body' tab
11. Add id password of CMS
```js
{
    "username": "admin",
    "password": "admin123"
}
```
12. Click on 'SEND'

13. You will get this output.
```js
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3Byb2plY3RzXC93b3JkcHJlc3NcL3dwdiIsImlhdCI6MTYxNjU5MTE4NCwibmJmIjoxNjE2NTkxMTg0LCJleHAiOjE2MTcxOTU5ODQsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.tY2WQh8ZYVPIfTmtrSXnbPPaEqM3BAMHw0d5A706AbI",
    "user_email": "wpv@yopmail.com",
    "user_nicename": "admin",
    "user_display_name": "admin"
}
```

14. Goto 1st Tab 
15. Select 'POST' from 'GET' dropdown
16. Click on 'header'
17. Add following 
```Authorization``` in KEY
```Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3Byb2plY3RzXC93b3JkcHJlc3NcL3dwdiIsImlhdCI6MTYxNjA2ODkxMywibmJmIjoxNjE2MDY4OTEzLCJleHAiOjE2MTY2NzM3MTMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.b0_nrtptY386aALhXn0l6J4zifTMdIMa7dZZkXB6Tpw``` in VALUE
18. Click on 'SEND'


### Creating Post
1. Click on 'Body' tab
2. Add 'title' in KEY & 'Some content' in VALUE
3. Click on 'SEND'


### Deleting Post
1. Add PostID ```http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts/17```
2. Select 'DELETE' from dropdown
3. Click on 'SEND' 
4. Check Wordpress Admin



### Updating Post
1. Add PostID ```http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts/17```
2. Select 'PUT' from dropdown
3. Click on 'SEND' 
4. Check Wordpress Admin


## npm install --save axios vue-axios

