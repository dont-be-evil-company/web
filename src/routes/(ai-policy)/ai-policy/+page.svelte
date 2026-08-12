<script>
  import HeadComponent from '$lib/HeadComponent.svelte';
  export let data;
  const ContentComponent = data.component;
</script>

<HeadComponent
  data={{
    title: "The Don't Be Evil Company - AI-Policy",
    description:
      'Our take on the ethical implications of AI and how we plan to address them in our work.'
  }}
/>

<div class="container">
  <div class="inner">
    <ContentComponent />
  </div>
</div>
