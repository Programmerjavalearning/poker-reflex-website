# Scripts

## submit-indexnow.ps1

Submits URLs to IndexNow (Bing, Yandex, DuckDuckGo, etc.) for fast indexing.

### Usage (Windows PowerShell):

```
.\scripts\submit-indexnow.ps1 https://poker-reflex.com/blog/your-new-article
```

You can submit multiple URLs at once:

```
.\scripts\submit-indexnow.ps1 https://poker-reflex.com/blog/article1 https://poker-reflex.com/blog/article2
```

The script reads `INDEXNOW_SECRET` from `.env.local`.
The API route is at `/api/indexnow` and is protected with a Bearer token.
