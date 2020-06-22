import { ZBClient } from "zeebe-node";
import got from "got";
require("dotenv").config();

const zbc = new ZBClient();

const url = "https://json-api.joshwulf.com/time";

const worker = zbc.createWorker("get-time", async (job, complete) => {
  const time = await got(url).json();
  console.log(time);
  complete.success({ time });
});

zbc.createWorker({
  taskType: "make-greeting",
  taskHandler: (job, complete) => {
    const { name } = job.variables;
    const { greeting } = job.customHeaders;
    complete.success({
      say: `${greeting} ${name}`,
    });
  },
});
