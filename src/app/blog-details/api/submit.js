// src/pages/api/submit.js

import { parse } from "querystring";

export default function handler(req, res) {
  if (req.method === "POST") {
    let body = "";

    // Collect the data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When all data is received
    req.on("end", () => {
      // Parse the body to get the form data
      const parsedBody = parse(body);
      const { objective, implementation } = parsedBody;

      console.log("Received submission:", { objective, implementation });

      // Redirect to Thank You page
      res.writeHead(303, { Location: "/ThankYou" });
      res.end();
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
