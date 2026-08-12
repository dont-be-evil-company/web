<script>
  import HeadComponent from '$lib/HeadComponent.svelte';
  import { resolve } from '$app/paths';
</script>

<HeadComponent
  data={{
    title: "The Don't Be Evil Company",
    description:
      "Making the world a better place, one line of code at a time. We're a small team of developers who love to create and share our work with the world."
  }}
/>

<div class="container">
  <div class="inner">
    <img class="logo" src="/logo.png" alt="The Don't Be Evil Company Logo" />
    <header>The Don't Be Evil Company</header>
    <p>
      We love ❤️ to make the world 🌎 a better place by giving you all the tools 📦 you need, but
      always for free 🤞 and driven by the community 🌈.
    </p>
    <details>
      <summary>How it all started</summary>
      <p>
        The Don't Be Evil Company was founded in 2026 by <a href="https://gorilla.moe"
          >Marco 'gorillamoe' Kellershoff</a
        > who wanted to create a company that would make the world a better place.
      </p>
      <p>
        The company was originally called <strong>Super Evil Mega Co</strong> (founded in 2018),
        then changed to
        <strong>mistweaverco</strong>
        (a reference to the mistweaver monk class in World of Warcraft), and lastly the name was changed
        to <strong>The Don't Be Evil Company</strong>
        to reflect the company's mission and values.
      </p>
      <p>
        The founder of the company believes that technology can be used for good, and they are
        committed to creating products that are free, open-source, and driven by the community.
      </p>
    </details>
    <div class="quotes quote">
      <blockquote>
        <p><strong>Individuals and interactions</strong> over processes and tools</p>
        <p><strong>Working software</strong> over comprehensive documentation</p>
        <p><strong>Customer collaboration</strong> over contract negotiation</p>
        <p><strong>Responding to change</strong> over following a plan</p>
      </blockquote>
      <cite>Agile Manifesto</cite>
    </div>
    <div class="get-in-touch">
      <a
        href={resolve('/discord')}
        title="Join our Discord community"
        data-sveltekit-preload-data="false"
      >
        <img src="/assets/badges/discord.svg" alt="discord badge" />
      </a>
      <a href="https://github.com/dontbeevilcompany" title="Check out our Github profile">
        <img src="/assets/badges/github-profile.svg" alt="github badge" />
      </a>
      <a
        href={resolve('/roadmap')}
        title="Check out our Development Status"
        data-sveltekit-preload-data="false"
      >
        <img src="/assets/badges/development-status.svg" alt="development status" />
      </a>
    </div>
  </div>
</div>

<style>
  details {
    border-radius: 4px;
    padding: 10px;
    margin-top: 80px;
  }

  details p {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    font-size: 0.55em;
  }

  summary {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    font-weight: bold;
    font-size: 1em;
    font-family: 'Indie Flower', cursive;
    cursor: pointer;
    user-select: none;
  }

  details {
    overflow: hidden;
  }

  details::details-content {
    block-size: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      block-size 300ms ease,
      opacity 200ms ease,
      content-visibility 300ms allow-discrete;
  }

  details[open]::details-content {
    block-size: auto;
    opacity: 1;
  }

  details p a {
    color: #ff4d4d;
    text-decoration: none;
    border-bottom: 1px dotted #ff4d4d;
  }

  details > summary:first-of-type {
    display: list-item;
    list-style: none;
  }

  details > summary:first-of-type:before {
    content: '📚';
    margin-right: 15px;
    display: inline-block;
  }

  details[open] > summary:first-of-type:before {
    content: '📖';
  }

  details p {
    margin-top: 10px;
  }

  @supports (interpolate-size: allow-keywords) {
    :root {
      interpolate-size: allow-keywords;
    }
  }
</style>
