# 드위터 만들기

# API Spec - Tweets

- User's profile photos
  *https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg*
  *https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png*
  *https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png*

# Tweets

- `Tweet` Schema
  ```json
  {
    id: string,  // 트윗 아이디
    text: string,  // 트윗 텍스트
    createdAt: Date, // 트윗 생성 날짜
    name: string,  // 사용자 이름
    username: string,  // 사용자 닉네임 (아이디)
    url: string (optional) // 사용자 프로파일 사진 URL
  }
  ```

### `GET` /tweets

- get all tweets
  Response `200`
  ```
  {
     [tweet, tweet ....]
  }
  ```

### `GET` /tweets?username=:username

- get all tweets for user's username
  Response `200`
  ```
  {
     [tweet, tweet ....]
  }
  ```

### `GET` /tweets/:id

- get tweet by id
  Response `200`
  ```
  {
     tweet
  }
  ```

### `POST` /tweets

- creating new tweet
  Request
  ```
  {
     text,
     name,
     username,
  	 url, (optinal)
  }
  ```
  Response `201`
  ```
  {
     tweet
  }
  ```

### `PUT` /tweets/:id

- updating tweet
  Request
  ```
  {
     text
  }
  ```
  Response `200`
  ```
  {
     tweet
  }
  ```

### `DELETE` /tweets/:id

- deleting tweet
