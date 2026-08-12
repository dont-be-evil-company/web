<slot />

<style>
  :root {
    --color-background: #121212;
    --color-text: #ffffff;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: #000000;
      --color-text: #ffffff;
    }
  }
  :global(html),
  :global(body) {
    font-size: 16px;
    font-family: system-ui, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    margin: 0;
    padding: 0;
  }
  :global(div) {
    text-align: center;
    margin: 20px auto;
  }
  :global(a) {
    color: #1e90ff;
    text-decoration: none;
  }
  :global(p) {
    font-family: system-ui, sans-serif;
    padding: 1rem;
  }
</style>
