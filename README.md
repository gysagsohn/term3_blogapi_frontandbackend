# term3_blogapi_frontandbackend

## Models to make

### Blog

- Title
- Content
- User
- Created Date
- Like
- image upload
- Category
- Audit History
    - user
    - timestamp

### Users

- username
- blog post view history

### comments

Join table in SQL, but subdocument in Mongoose that lives in Blog posts
- user id
- comment content 
- like

### Action log
- user id
- route visited
- timestamp
- result