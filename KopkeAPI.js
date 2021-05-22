const fetch = require("node-fetch");
module.exports = class {
  constructor(eula){
      this.eula = eula
  };

    async simple() {
      let response;
      response = await fetch(`https://kopkeapi.glitch.me/simple`)
      .then(e => e.json());
      if(response.error) return new Error("Unauthorized");
      return response.url;
    }
    async dark() {
      let response;
      response = await fetch(`https://kopkeapi.glitch.me/dark`)
      .then(e => e.json());
      if(response.error) return new Error("Unauthorized");
      return response.url;
    }
    async shitpost() {
      let response;
      response = await fetch(`https://kopkeapi.glitch.me/shitpost`)
      .then(e => e.json());
      if(response.error) return new Error("Unauthorized");
      return response.url;
    }
    async siyasi() {
      let response;
      response = await fetch(`https://kopkeapi.glitch.me/siyasi`)
      .then(e => e.json());
      if(response.error) return new Error("Unauthorized");
      return response.url;
    }
}