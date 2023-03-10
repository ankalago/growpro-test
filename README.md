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
        'Cube 123', 'Marin 456', 'Trek Marlin 6', 'GT 395', 'Raleigh 123', 'Chopper 345', 'Himiway 432', 'Super 73', 'Tower 672', 'Pathfinder 3', 'Giant G', 'Specialized E'
    ),
    slug: JG.random(
        'Cube 123', 'Marin 456', 'Trek Marlin 6', 'GT 395', 'Raleigh 123', 'Chopper 345', 'Himiway 432', 'Super 73', 'Tower 672', 'Pathfinder 3', 'Giant G', 'Specialized E'
    ).toLowerCase().replace(" ", "-"),
    description: JG.loremIpsum({units: 'sentences', count: 6}),
    details: JG.loremIpsum({units: 'paragraphs', count: 1}),
    images: _.uniq(JG.repeat(5, JG.random(
        'image1', 'image2', 'image3', 'image4'
    ))),
    color: _.uniq(JG.repeat(4, JG.random(
        'Red', 'Blue', 'Orange', 'Gray', 'Black', 'White', 'Yellow'
    ))),
    highlights: _.uniq(JG.repeat(4, JG.loremIpsum({units: 'words', count: 6}))),
    brand: JG.company(),
    types: JG.random(
        {
            "id": 1,
            "value": "electrics",
            "label": "Bicicletas eléctricas"
        },
        {
            "id": 2,
            "value": "electrics",
            "label": "Bicicletas eléctricas"
        },
        {
            "id": 3,
            "value": "old",
            "label": "Bicicletas antiguas"
        }
    ),
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

## Install Dependencies

```
npm ci
```

## Start Server Data Base

### Documentation

https://github.com/typicode/json-server

```
npx json-server --watch server/db.json --no-cors --port 3004
```

## Run App

```
npm run dev
```

## Enter URL

```
http://localhost:5173/
```

## After the save book

For check the item saved check url

```
http://localhost:3004/booking
```

# Aclarations

### Structure Project

The modules and technologies used:

- Clean Code structure
- Redux and Redux Toolkit (app data management)
- React Query (for request cache and request data management)
- React Hook Form (management data form)
- Tailwind (CSS Framework)
- Tailwind UI (Components Tailwind)
- React Datepicker (selector date picker)
- TypeScript (Type safe)
- axios

### Diagram

![Product_Png](https://raw.githubusercontent.com/ankalago/growpro-test/main/flowchart-booking-bikes.png)
