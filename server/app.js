import express from 'express';
import cors from 'cors';
import { generateNewId } from './util/logic.js';

const app = express();

let tweets = [
  {
    id: 1,
    text: '트위터만들기할꺼얌',
    createdAt: new Date(),
    name: '조재신',
    username: 'koreachief',
    url: null,
  },
  {
    id: 2,
    text: '손쉬운사냥이되겠군',
    createdAt: new Date(2023, 4, 1),
    name: '홍길동',
    username: 'jejuchief',
    url: null,
  },
];

app.use(express.json());
app.use(cors());

app.get('/tweets', (req, res, next) => {
  res.json({
    message: '',
    data: req.query.username ? tweets.filter((v) => v.username === req.query.username) : tweets,
  });
});

app.get('/tweets/:id', (req, res, next) => {
  res.json({
    message: '',
    data: tweets.find((v) => v.id === req.params.id)
      ? tweets.find((v) => v.id === req.params.id)
      : null,
  });
});

// POST 트윗 생성하기

app.post('/tweets', (req, res, next) => {
  console.log(req.body);
  // 처리하기

  // id 로직

  tweets = [
    ...tweets,
    {
      ...req.body,
      url: req.body.url ? req.body.url : null,
      id: generateNewId(tweets),
      createdAt: new Date(),
    },
  ];

  res.json({ message: '포스트는 아직 만드는 중이여~ ', data: tweets });
});

// PUT 트윗 수정하기

app.put('/tweets/:id', (req, res, next) => {
  console.log(req.body);
  console.log(typeof req.params.id); // 타입이 string이구만

  // 로직 만들기

  // 가져오기

  const dataToUpdate = tweets.filter((v) => v.id == req.params.id)[0];

  tweets = [
    ...tweets.filter((v) => v.id != req.params.id),
    { ...dataToUpdate, text: req.body.text },
  ];

  res.json({
    message: '만들고있어용~',
    data: tweets,
  });
});

// DELETE 하기

app.delete('/tweets/:id', (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id); // 타입이 string이구만

  tweets = tweets.filter((v) => v.id != req.params.id);

  res.json({
    message: 'DELETE 잘됨',
    data: tweets,
  });
});

// app.get('/file3', async (req, res) => {
//   const data = await fsAsync.readFile('/file3.txt');
//   res.send(data);
// });

// api들에 에러있으면 에러처리
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sprry, try later!');
});

app.listen(8080);
