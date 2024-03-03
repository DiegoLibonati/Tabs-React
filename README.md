# Tabs-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with yarn install
4. Use yarn dev or start (depends package.json) to run the app page

## Description

I made a application page that through different tabs you can get different information. Also if you tab with your keyboard you can access the different tabs and not only with the mouse click.

## Technologies used

1. React JS
2. Typescript
3. CSS3

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/77`](https://www.diegolibonati.com.ar/#/project/77)

## Video

https://user-images.githubusercontent.com/99032604/198900660-1838aa62-23fd-4111-bfaf-a4a3ee9e26c2.mp4

## Documentation

In the `App.tsx` file the `Main` component will be rendered:

```
import "./App.css";
import { Main } from "./components/Main";

function App(): JSX.Element {
  return <Main></Main>;
}

export default App;
```

In the `Main.tsx` component we will find all this logic. The `loading` state will serve to show a loader if the information that is brought from the API is not loaded yet. The `jobs` state will store all the information of the Api. The `Value` state will be used to see which index of the `Jobs` array to display. The `useOpacity` CustomHook, serves to manage the opacity effect when we change from one job to another. In the function `getJobs()` will be the function that we will use to bring all the information of the API. And finally we make a useEffect so that it is executed only once the function that brings the information of the Api and updates the states:

```
const [loading, setLoading] = useState<boolean>(true);
const [jobs, setJobs] = useState<Job[]>([]);
const [value, setValue] = useState<number>(0);
const { opacity, setOpacity } = useOpacity();

const getJobs = async () => {
  const request = await fetch("https://course-api.com/react-tabs-project");
  const response: Job[] = await request.json();

  setJobs(response);
  setLoading(false);
};

useEffect(() => {
  getJobs();
}, []);
```

In the `ButtonExp.tsx` component we will find the following logic of the `UseOpacity` hook. Each time that the job is changed by clicking, the opacity will be set to 0 and then execute a setTimeout at 400 ms to add opacity and set the index of the button that was clicked making reference to the index of the job that is in `Jobs`:

```
const handleCompany: React.MouseEventHandler<HTMLButtonElement> = () => {
  setOpacity(0);

  setTimeout(() => {
    setOpacity(1);
    setValue(index);
  }, 400);
};
```

This is what the CustomHook looks like, called `useOpacity`:

```
import { useState } from "react";
import { UseOpacity } from "../entities/entities";

export const useOpacity = (): UseOpacity => {
  const [opacity, setOpacity] = useState<number>(1);

  return {
    opacity,
    setOpacity,
  };
};
```
