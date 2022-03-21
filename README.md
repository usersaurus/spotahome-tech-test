# Spotahome tech test

## Getting started

- `yarn`
- `yarn dev`
- Go to [localhost:3000](http://localhost:3000)

>💡 In case you want to run existing test you can do it running `yarn test`

## Stack
- [Vite + Vue 3 + Typescript](https://vitejs.dev/) as frontend tooling.
- [Pinia](https://pinia.vuejs.org/) as store.
- [Vue-test-utils](https://test-utils.vuejs.org/) for making it easier to do component testing in Vue.
- Axios, since looks like `fetch` support is still a experimental feature in Node.
- Express

## Notes
- The `node` part of the application is run by the Vite process itself using the [vite-plugin-mix package](https://github.com/egoist/vite-plugin-mix), an easier way to use vite's middleware feature.
- The `title` attribute was not present in the given endpoint, so I assumed it as a merge of two existing fields.
- I haven't had as much time as I wanted to test, so I've been forced to prioritize one of the two extras, and due to the weight and size of the initial request, I opted to do the pagination extra in order to improve the usability of the table.
- The pagination component lacks some features that were left behind due to the previously mentioned prioritization. Anyway, expanding the component behavior should be easy with the current approach.
- I wanted to do some e2e tests using [Playwright](https://playwright.dev/), but I prioritized unit and component tests over e2e.
- if there's any question about these notes or anything else, do not hesitate to contact me 😊