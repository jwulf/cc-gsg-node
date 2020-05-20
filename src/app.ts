import { ZBClient } from "zeebe-node";
import * as path from "path";
import got from "got";

require("dotenv").config();

async function deployModel(zbc) {
  const bpmn = path.join(__dirname, "..", "bpmn", "test-process.bpmn");
  const res = await zbc.deployWorkflow(bpmn);
  //   console.log(res);
}

async function createProcessInstance(zbc) {
  const res = await zbc.createWorkflowInstanceWithResult("test-process", {
    name: "Josh Wulf",
  });
  console.log("Process Instance (Complete)", res.variables.say);
}

async function main() {
  const zbc = new ZBClient();
  await deployModel(zbc);
  createProcessInstance(zbc);

  createRESTTimeWorker(zbc);
  createMakeGreetingWorker(zbc);
}

main();

function createMakeGreetingWorker(zbc: ZBClient) {
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
}

function createRESTTimeWorker(zbc: ZBClient) {
  const url = "https://json-api.joshwulf.com/time";
  const worker = zbc.createWorker({
    taskType: "get-time",
    taskHandler: async (job, complete) => {
      const res = await got(url).json();
      console.log(res);
      complete.success({ time: res });
    },
  });
}
