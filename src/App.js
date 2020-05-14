import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Form, TextArea } from "semantic-ui-react";
import bech32 from "bech32";

function App() {
  const placeholder = JSON.stringify(
    {
      name: "example",
      type: "local",
      address: "enigma1pnsceh64jyrsfwjd2k865eetmsgg5grw8sma87",
      pubkey:
        "enigmapub1addwnpepqgauy23vhvvr8uezgczuzh7lj64r9ahd4vsshz5fksezk5lw5k6swjskux6",
    },
    null,
    4
  );

  return (
    <div className="App">
      <Form style={{ display: "flex" }}>
        <TextArea placeholder={placeholder} style={{ height: "100vh" }} />
        <TextArea
          placeholder={convert(placeholder)}
          style={{ height: "100vh" }}
        />
      </Form>
    </div>
  );
}

const regex = /enigma(pub|valoper|valoperpub|valcons|valconspub)?1[a-z0-9]+?\b/g;
function convert(input) {
  let output = input;
  const matches = input.match(regex) || [];

  for (const oldAddress of matches) {
    try {
      const canonical = bech32.decode(oldAddress);
      const newPrefix = canonical.prefix.replace("enigma", "secret");
      const newAddress = bech32.encode(newPrefix, canonical.words);
      output = output.replace(new RegExp(oldAddress, "g"), newAddress);
    } catch (e) {
      console.error(e);
    }
  }

  return output;
}

export default App;
