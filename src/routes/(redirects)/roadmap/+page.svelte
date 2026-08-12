<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  const BASE_URL = 'https://github.com/orgs/dont-be-evil-company/projects/5';
  let redirectUrl = BASE_URL;
  let repo = '';
  let title = 'Redirecting to roadmap overview';

  onMount(() => {
    if (browser) {
      const params = new URLSearchParams(window.location.search);
      const project = params.get('filter');

      if (!project) {
        document.title = title;
        window.location.href = redirectUrl;
        return;
      }

      const marker = '/';
      repo = project.includes(marker)
        ? project.substring(project.lastIndexOf(marker) + 1)
        : project;

      const q = `repo%3Adont-be-evil-company%2F${repo}`;
      redirectUrl = BASE_URL + '?filterQuery=' + q;

      document.title = `Redirecting to ${repo} roadmap`;
      window.location.href = redirectUrl;
    }
  });
</script>

<div>
  <p>Redirecting to <a href={redirectUrl}>{repo !== '' ? repo : ''} roadmap</a>...</p>
</div>
