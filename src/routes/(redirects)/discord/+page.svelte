<script>
  import { onMount } from 'svelte';
  import { redirectTo } from './../redirectTo';
  let url = '';
  onMount(() => {
    url = redirectTo('https://discord.gg/Khakc3tgV4');
  });
</script>

<div>
  <p>Redirecting to <a href={url}>The Don't Be Evil Company on Discord</a>...</p>
</div>
