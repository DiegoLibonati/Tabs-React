# Tabs-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a application page that through different tabs you can get different information. Also if you tab with your keyboard you can access the different tabs and not only with the mouse click.

## Feel free to edit my code

To call all the jobs, i use this API `https://course-api.com/react-tabs-project`.

```
const getJobs = async () => {
const request = await fetch("https://course-api.com/react-tabs-project");
const response = await request.json();

setJobs(response);
setLoading(false);
};

useEffect(() => {
getJobs();
}, []);
```

When you click in a button or use Tab, you can see opacity effect that is because of this:

```
export const useOpacity = () => {
  const [opacity, setOpacity] = useState(1);

  return {
    opacity,
    setOpacity,
  };
};
```

## Technologies used

1. React JS
2. CSS3

## Galery

![Tabs-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/tabsreact-0.jpg)

![Tabs-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/tabsreact-1.jpg)

![Tabs-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/tabsreact-2.jpg)

![Tabs-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/tabsreact-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Tabs%20app%20page`

## Video
