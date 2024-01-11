// async & await

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("we can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Inofrmation + ${response}`);
  });
}

makeRequest("Google")
  .then((response) => {
    console.log("Responsive Recivied");
    return processRequest(response);
  })
  .then((processRequest) => {
    console.log(processRequest);
  })
  .catch((err) => {
    console.log(err);
  });

// You should know you have to have function to use Async

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Responsive Recivied");
    const processRespond = await processRequest(response);
    console.log(processRespond);
  } catch (err) {
    console.log(err);
  }
}
doWork();

