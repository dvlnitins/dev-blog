<h1 align="center">
  Gatsby + Strapi Blog Project 
</h1>

[LIVE SITE](https://devblog-v1.vercel.app/)

<p align="center">
   This project allows you to try Strapi with Gatsby with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!
</p>

![screenshot image](/ui.png)


## Features

- 3 Created articles
- Share article
- Responsive design using UIkit
- SEO and social media friendly

Pages:

- "/" to display every articles
- "/article/:id" to display one article

## Getting started

The easiest way to try this project is to run it locally on your computer. You'll need to fork this project. 

### Backend

Create a Strapi project named `backend` using the [blog template](https://github.com/strapi/strapi-template-blog):

```
# Using Yarn
yarn create strapi-app backend --template https://github.com/strapi/strapi-template-blog

# Or using NPM
npx create-strapi-app backend --template https://github.com/strapi/strapi-template-blog
```

The Strapi server will automatically start and import sample seed data.

### Frontend

Leave the Strapi backend running in the background. Open another terminal tab, and make sure you're in the `frontend` directory:

```bash
cd frontend
```

Install dependencies and start the Gatsby server:

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

If you want to change the default environment variables, create a `.env` file like this:

```sh
cp .env.example .env
```

The Gatsby server will run here => [http://localhost:8000](http://localhost:8000)

Enjoy this starter!
