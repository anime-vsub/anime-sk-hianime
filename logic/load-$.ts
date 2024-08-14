import { parseDOM } from "./parse-dom.ts"

export function load$(url: string) {
  return fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    }
  })
    .then((res) => res.json())
    .then(({ html }) => html)
    .then(parseDOM)
}
