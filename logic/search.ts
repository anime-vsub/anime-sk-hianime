import { load$ } from "./load-$.ts";

export async function search(keyword: string) {
  const $ = await load$(
    `https://hianime.bz/search?keyword=${keyword.replace(/ /g, "+")}`,false
  )

  return $(".flw-item")
    .toArray()
    .map((item) => {
      const $item = $(item)

      const poster = $item.find("img").attr("data-src")!

      const [current, total] = $item
        .find(".tick-item.tick-eps")
        .text()
        .trim()
        .replace(/^ep\s+?/i, "")
        .split("/")

      const progress = { current, total }
      const name = $item.find(".dynamic-name").text().trim()
      const jName = $item.find(".dynamic-name").attr("data-jname")?.trim()

      const id = $item.find("a").attr("href")!.split("/").filter(Boolean).at(-1)!;

      return { poster, progress, name, jName, id }
    })
}
