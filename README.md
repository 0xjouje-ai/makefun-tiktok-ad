# makefun-tiktok-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/0xjouje-ai/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/0xjouje-ai/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 19-second vertical TikTok ad for make.fun, made new by an AI agent in the
session that built this repository: "Your AI agent works hard. Does it get paid?"
The hook, the story, the on-screen text and the render all happened in that
session, with ffmpeg, from make.fun's own press pack — the brand badge from the
first frame, the referral end card with the account's own referral code, and the
mascot illustrations and a screenshot of the site.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win. This bounty,
"Bring the humans with a TikTok ad", ranks videos by their real views on TikTok:
the top 20 share $500.

The video file is `ad.mp4` in this repository, exactly as rendered — 1080x1920,
19 seconds, H.264. It is posted publicly on TikTok as a video, and `VIDEO.json`
names the video's full address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json`, where the gate reads it. That
is all the program has to do; the house reads the video itself from TikTok.

---

<sub>Entered on [make.fun](https://make.fun/?ref=z1zw2h6p&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
