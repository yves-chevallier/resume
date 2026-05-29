# Resumé

My personal resumé, available here: https://cv.chevallier.io/

## Hosting

The site is built with VuePress and deployed to GitHub Pages by the
[`Deploy CV`](.github/workflows/deploy.yml) workflow when a `v*` tag is pushed.

It is served on the custom domain **cv.chevallier.io** via a CNAME record
pointing at GitHub Pages:

```dns
cv  600  IN  CNAME  yves-chevallier.github.io.
```

The domain is pinned in [`docs/.vuepress/public/CNAME`](docs/.vuepress/public/CNAME)
so GitHub Pages keeps it across deployments, and `base` is set to `/` in the
VuePress config accordingly.
