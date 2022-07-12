
# Weekly Notes

this is a sampel project that shows notes organized by categories on a timeline in a browser. (weekends don’t count. )

it uses a dummy api with some sampel data also it is a dummy save endpoint – no real saving/manipulation action .



## Screenshots

![App Screenshot](https://i.ibb.co/ZfzKp1w/screenshot-localhost-4200-2022-07-12-17-36-50.png)


## API Reference

## API
``` http
https://61ee5f30d593d20017dbad98.mockapi.io/pinguin/api
```
#### Return a list of notes for three weeks

```http
  GET /notes
```


#### Return an array of available labels

```http
  GET /noteLabels
```


#### Payload is the note object itself. Return the updated note 

```http
  PUT /notes/{noteId}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/mognia/weekly-note.git
```

Go to the project directory

```bash
  cd weekly-note
```

Install dependencies

```bash
  npm install
```

Development server

Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.
```bash
  ng serve
```
## Tech Stack

**Client:** Angular, Angular Material



## Running Tests

To execute the unit tests via Karma.

```bash
  ng test
```


## Features

- Editable: Save a changed data at the right endpoint and replace updated data in the frontend data (it is a dummy save endpoint – no real saving/manipulation action!)

-  Show label: display note labels inside the card


## 🔗 Links
[![gitHub](https://img.shields.io/github/followers/mognia?style=social)](https://github.com/mognia)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamad-ghafarnia/)


