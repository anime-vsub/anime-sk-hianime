import { load$ } from "./load-$.ts"

export async function getServersEpisode(ep_id: string) {
  const $ = await load$(
    `https://hianime.bz/ajax/v2/episode/servers?episodeId=${ep_id.split('$').at(-1)}`
  )

  return $(".server-item")
    .toArray()
    .map((div) => {
      const $div = $(div)

      const id = $div.attr("data-id")!
      const type = $div.attr("data-type")
      const name = $div.text().trim()

      return { id, type, name }
    })
}
