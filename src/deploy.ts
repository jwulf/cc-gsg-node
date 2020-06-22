import { ZBClient } from "zeebe-node-next";
import * as path from "path";

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

  //   createRESTTimeWorker(zbc);
  //   createMakeGreetingWorker(zbc);
}

main();
