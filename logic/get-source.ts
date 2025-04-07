const HIANIME_API = Deno.env.get("HIANIME_API")

export async function getSource(server_id: string): Promise<{
  sources: string
  tracks: {
    file: string
    label: string
    kind: "captions" | "thumbnails"
    default?: true
  }[]
  encrypted: boolean
  intro: {
    start: number
    end: number
  }
  outro: {
    start: number
    end: number
  }
  server: number
}> {
  const data = await fetch(`${HIANIME_API}?episodeId=${server_id}`).then(
    (res) => res.json()
  )

  return {
    intro: data.intro,
    outro: data.outro,
    sources: data.sources[0]?.url,
    encrypted: false,
    tracks: data.subtitles.map((subtitle: { url: string; lang: string }) => {
      return {
        file: subtitle.url,
        label: subtitle.lang,
        kind: "captions"
      }
    }),
    server: 0
  }
}
