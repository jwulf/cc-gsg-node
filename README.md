# Getting Started with Camunda Cloud in TypeScript

Video tutorial here: [https://www.youtube.com/watch?v=UJk1bwBAPmc](https://www.youtube.com/watch?v=UJk1bwBAPmc)

## Prerequisites

* [Node.js 14.2.0](https://nodejs.org)

## Table of Contents

* 0:00:21 - Install [Zeebe Modeler](https://github.com/zeebe-io/zeebe-modeler)
* 0:01:02 - Get a Camunda Cloud account ([https://camunda.io](https://camunda.io))

* 0:02:17 - Create a new Zeebe cluster
* 0:03:20 - Cluster provisioning / rescheduling
* 0:04:00 - Zeebe Node client

* 0:04:22 - Overview: What will we do in this Guide
* 0:05:16 - Scaffolding a new project
* 0:05:45 - Install TypeScript (add Node version here)
* 0:06:24 - npm and pnpm
* 0:07:55 - TypeScript project configuration

* 0:08:53 - Creating Camunda Cloud client credentials

* 0:09:50 - dotenv package
* 0:10:20 - Using the dotenv package
* 0:11:45 - ts-node package

* 0:13:20 - Connecting to the cluster from Node.js

* 0:15:55 - Creating a BPM Model using [Zeebe Modeler](https://github.com/zeebe-io/zeebe-modeler)
* 0:17:39 - Deploying a model to the cluster from Node.js 

* 0:19:47 - Viewing workflows in Operate on Camunda Cloud

* 0:21:54 - Create and start a workflow instance
* 0:23:39 - View workflow instance in Operate

* 0:24:04 - Add a service task to the BPMN model 
* 0:25:23 - Zeebe, ElasticSearch, and Operate
* 0:25:55 - View a running instance in Operate

* 0:27:08 - Create a Worker
* 0:38:38 - Call a REST API from a worker
* 0:42:44 - Create a workflow and await the result
* 0:44:18 - Pass in variable payload when starting a process instance
* 0:45:00 - Add a decisioning point (Conditional Gateway)
* 0:58:50 - Creating condition expressions using FEEL (Friendly-enough Expression Language)
* 1:00:30 - Further resources

## Scaffolding the project

* Install tools:

```
npm i -g pnpm typescript ts-node
```

* Create project:

```
mkdir cc-gsg
cd cc-gsg
npm init -y
tsc --init
```

* Edit `tsconfig.json` with the following config:

```
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

* Install `zeebe-node` and `dotenv`:

```
pnpm i zeebe-node dotenv
```

## Create Camunda Cloud cluster

* Log in to [https://camunda.io](https://camunda.io)
* Create a new Zeebe 0.23.1 cluster 
* When the new cluster appears in the console, create a new set of client credentials 
* Copy the client connection environment variables block

## Configure connection

* Create a file `.env` in the root of the project
* Paste the connection environment variable block 
* Delete the `export` from in front of each line in the file
