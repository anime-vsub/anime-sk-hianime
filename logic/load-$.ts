import { parseDOM } from "./parse-dom.ts"

export function load$(url: string, json = true) {
  return fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    }
  })
    .then((res) => json ? res.json() : res.text())
    .then(data => json ? data.html : data)
    .then(parseDOM)
}
