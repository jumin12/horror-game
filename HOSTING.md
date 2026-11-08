# Host Horror Game

Repository: https://github.com/jumin12/horror-game

GitHub Pages play address: https://jumin12.github.io/horror-game/

## Render: Static Site

1. Sign in at https://dashboard.render.com/ and choose **New → Static Site**.
2. Connect GitHub and select **jumin12/horror-game**. Grant Render access to this repository if requested.
3. Enter these settings:

| Setting | Value |
| --- | --- |
| Name | `horror-game` |
| Branch | `main` |
| Root Directory | Leave blank |
| Build Command | `node deploy/build.mjs` |
| Publish Directory | `public` |
| Auto-Deploy | On commit |

4. Optionally add the environment variable **SKIP_INSTALL_DEPS = true**. The build has no packages to install.
5. Select **Create Static Site**. After the deployment succeeds, open the `onrender.com` address shown by Render. Its exact name depends on availability.

There is no Start Command, port, database or API secret. The models, textures and ElevenLabs recordings are embedded in the game. The build command only copies the ready-to-play file and attribution into `public`; it does not regenerate assets. Choose a Static Site for this configuration.

Render serves the result over HTTPS. The first visit downloads the approximately 93 MiB game; allow the initial preparation to finish. Click Enter the recording to enable sound and mouse capture.

## Render: Blueprint alternative

1. Choose **New → Blueprint** in the Render dashboard.
2. Connect **jumin12/horror-game** and select `main`.
3. Review the Static Site defined in `render.yaml`, then deploy it.

The Blueprint has the same build/publish settings and skips dependency installation.

## GitHub Pages

In the repository, open **Settings → Pages**. Under Build and deployment choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save. The root `.nojekyll` file disables Jekyll processing. Once deployment succeeds, play at https://jumin12.github.io/horror-game/.

## Updates and saves

Replace the root `index.html` with the latest standalone build and push to `main`. GitHub Pages and a connected Render service will deploy that commit. Browser saves and footage belong to the current device and origin: GitHub Pages and Render have separate save data.

Development caches, credentials, recorded test footage and source asset packs are excluded from this distribution repository.

## Official documentation

- [Render Static Sites](https://render.com/docs/static-sites)
- [Render Blueprint YAML specification](https://render.com/docs/blueprint-spec)
- [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub file-size limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github)

## Co-op hosting

The same static `index.html` supports four-player co-op on GitHub Pages or Render. No Node game service or database is required. Room discovery uses public EMQX/HiveMQ secure WebSockets and WebRTC STUN; gameplay goes directly to the host. Keep outbound WebSockets and WebRTC enabled. No API key belongs in this public file. Restrictive networks may need a TURN service, which this release does not configure. The host tab must stay open.

The paired-puzzle release uses the same static hosting configuration. No new environment variables or Render service are needed. Refresh the game on every player’s device after updating: the new puzzle protocol only lists compatible recordings.
