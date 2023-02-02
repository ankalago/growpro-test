# Test

## Paul Jácome - Quito / Ecuador - Software Web Developer

**[Linkedin Profile](https://bit.ly/paul-jacome-linkedin)**

**[GitHub Profile](https://bit.ly/paul-jacome-github)**

**[Bitbucket Profile](https://bit.ly/paul-jacome-bitbucket)**

**[Whatsapp Profile](https://bit.ly/paul-jacome-whatsapp)**

![Product_Png](https://raw.githubusercontent.com/ankalago/growpro-test/main/screenshot.png)

## Generate Json

https://app.json-generator.com

```javascript
JG.repeat(12, 12, {
  id: JG.index() + 1,
  name: JG.random(
    'Cube 123', 'Marin 456', 'Trek Marlin 6', 'GT 395', 'Raleigh 123', 'Chopper 345', 'Himiway 432', 'Super 73', 'Tower 672'
  ),
  slug: JG.random(
    'Cube 123', 'Marin 456', 'Trek Marlin 6', 'GT 395', 'Raleigh 123', 'Chopper 345', 'Himiway 432', 'Super 73', 'Tower 672'
  ).toLowerCase().replace(" ", "-"),
  description: JG.loremIpsum({ units: 'sentences', count: 6 }),
  details: JG.loremIpsum({ units: 'paragraphs', count: 1 }),
  images: _.uniq(JG.repeat(5, JG.random(
    'image1', 'image2', 'image3', 'image4'
  ))),
  color: _.uniq(JG.repeat(4, JG.random(
    'Red', 'Blue', 'Orange', 'Gray', 'Black', 'White', 'Yellow'
  ))),
  highlights: _.uniq(JG.repeat(4, JG.loremIpsum({ units: 'words', count: 6 }))),
  brand: JG.company(),
  types: JG.random(1, 2, 3),
  sizes: _.uniq(JG.repeat(4, JG.random(
    "XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"
  ))),
  price: JG.integer(700, 1500),
  reviews: {
    average: JG.integer(3, 5),
    totalCount: JG.integer(1, 100)
  },
  createdAt: JG.date().getTime()
});
```

## Start Server Data Base

### Documentation

https://github.com/typicode/json-server

```
npx json-server --watch server/db.json --port 3004 --nc
```

## Run App

```
npm run dev
```

## Enter URL

```
http://localhost:5173/
```
